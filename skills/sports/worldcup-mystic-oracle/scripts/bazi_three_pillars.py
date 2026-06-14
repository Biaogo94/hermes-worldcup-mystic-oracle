#!/usr/bin/env python3
"""Compute incomplete bazi three pillars from sourced birth dates.

This helper intentionally omits the hour pillar. It expects Gregorian dates in
YYYY-MM-DD form and returns year, month, and day pillars only.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any


DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")


def load_people(path: str | None, demo: bool) -> list[dict[str, Any]]:
    if demo:
        return [
            {
                "name": "Example Player",
                "team": "主队",
                "role": "primary striker",
                "birth_date": "1999-09-21",
                "source_status": "secondary",
            }
        ]
    if not path:
        raise SystemExit("Provide --people people.json or use --demo.")
    data = json.loads(Path(path).read_text(encoding="utf-8"))
    if not isinstance(data, list):
        raise SystemExit("people.json must contain a list of people.")
    return data


def get_lunar_classes() -> Any:
    try:
        from lunar_python import Solar
    except ModuleNotFoundError as exc:
        raise SystemExit(
            "Missing dependency: lunar_python. Install with `python -m pip install lunar-python` "
            "or run with a Python environment that already provides it."
        ) from exc
    return Solar


def pillars_for_date(date_text: str) -> dict[str, str]:
    if not DATE_RE.match(date_text):
        raise ValueError(f"Invalid date: {date_text}. Expected YYYY-MM-DD.")
    year, month, day = [int(part) for part in date_text.split("-")]
    Solar = get_lunar_classes()
    eight = Solar.fromYmdHms(year, month, day, 12, 0, 0).getLunar().getEightChar()
    return {
        "year_pillar": eight.getYear(),
        "month_pillar": eight.getMonth(),
        "day_pillar": eight.getDay(),
        "hour_pillar": None,
        "note": "时柱缺失，因此只作三柱参考",
    }


def render_people(people: list[dict[str, Any]]) -> dict[str, Any]:
    rows: list[dict[str, Any]] = []
    missing: list[dict[str, Any]] = []
    for person in people:
        row = {
            "name": person.get("name"),
            "team": person.get("team"),
            "role": person.get("role"),
            "birth_date": person.get("birth_date"),
            "source_status": person.get("source_status", "missing"),
        }
        birth_date = row["birth_date"]
        if not birth_date:
            row["status"] = "missing"
            missing.append(row)
            rows.append(row)
            continue
        try:
            row.update(pillars_for_date(str(birth_date)))
            row["status"] = "computed"
        except Exception as exc:  # noqa: BLE001 - surface per-person failures in JSON.
            row["status"] = "failed"
            row["error"] = str(exc)
            missing.append(row)
        rows.append(row)

    return {
        "status": "ok",
        "schema": "worldcup-mystic-oracle/bazi-three-pillars-v1",
        "rows": rows,
        "computed_count": sum(1 for row in rows if row.get("status") == "computed"),
        "missing_or_failed_count": len(missing),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Compute incomplete bazi three pillars from birth dates.")
    parser.add_argument("--people", help="Path to a JSON list of people.")
    parser.add_argument("--demo", action="store_true", help="Run a built-in demo.")
    parser.add_argument("--pretty", action="store_true", help="Pretty-print JSON.")
    parser.add_argument("--utf8", action="store_true", help="Emit UTF-8 characters instead of ASCII-safe escapes.")
    args = parser.parse_args()

    result = render_people(load_people(args.people, args.demo))
    json.dump(result, sys.stdout, ensure_ascii=not args.utf8, indent=2 if args.pretty else None)
    print()


if __name__ == "__main__":
    main()
