---
name: worldcup-mystic-oracle
description: Create a Chinese "赛前玄学战报" for World Cup or football matches using a reproducible pre-match data status check, verified kit colours, Qi Men Dun Jia match-time charts, and incomplete Four Pillars birth-date analysis for coaches and key players when hour data is missing. Use for entertainment-oriented match narratives, confidence-limited score pools, and responsible China Sports Lottery strategy across 胜平负, 让球胜平负, 比分, 总进球, and 半全场, not for factual certainty or guaranteed betting advice.
version: 1.0.0
author: Codex
license: MIT
platforms:
  - hermes
  - codex-compatible
metadata:
  hermes:
    category: sports
    tags:
      - football
      - world-cup
      - qimen-dunjia
      - bazi
      - china-sports-lottery
      - chinese
    language: zh-CN
    entrypoint: SKILL.md
    safety: entertainment-only
---

# Worldcup Mystic Oracle

## Purpose

Generate a Chinese "赛前玄学战报" that anchors on verified match facts, uses official kit colours, builds a Qi Men Dun Jia match-time judgement, compares coaches and key players through incomplete Four Pillars birth-date data, and converts the resulting match script into entertainment-only China Sports Lottery strategy tables.

Always separate verified facts from symbolic interpretation. Never claim a guaranteed hit, sure profit, or investment edge.

## Required Workflow

1. Read `references/prematch-data-status.md` and set the report phase:
   - `T-24h`: fixture, venue, kit, coach, expected roster, predicted lineup.
   - `T-2h`: re-check kit, injuries, weather, tactical news.
   - `T-60min`: official lineup if available.
   - `T-15min`: final contradiction check and no-play decision.
   - If the exact phase is unclear, infer it from kickoff time and state the inference.
2. Collect the factual match anchors:
   - Teams, official home/away order, competition stage, kickoff time, venue, local time, Beijing time.
   - Official or confirmed kit colours, national flag colours, coach, official squad, likely starters, confirmed lineups when available, recent injuries or suspensions, weather, and pitch or stadium orientation if relevant.
   - Current odds, official lottery availability, and lineup news only when sourced. Browse when the facts may have changed.
3. State the settlement frame:
   - China Sports Lottery football results are interpreted from the official home-team perspective.
   - Use 90 minutes plus stoppage time unless the user explicitly asks for a different market.
   - Exclude extra time and penalty shootouts for the listed play types unless current rules say otherwise.
4. Read `references/kit-colour-query.md` before doing kit-colour or Five Elements analysis.
5. Query coach and key-player birth dates:
   - Use the official lineup if available.
   - Default to the key-person set: manager, goalkeeper, captain or defensive leader, primary striker, primary creator or central midfielder, and one likely impact substitute.
   - Collect more players only when official lineup or roster data is easy to source.
   - Mark missing or uncertain dates; do not substitute age-only data.
   - Report birth-date coverage as a ratio for each team.
6. Read `references/qimen-bazi-method.md` before producing the prediction.
7. Use helper scripts when useful:
   - `scripts/qimen_parse.py` to parse saved Qi Men calculator HTML into JSON. If parsing is incomplete, label the section `简化奇门象占`.
   - `scripts/bazi_three_pillars.py` to compute 年柱/月柱/日柱 from sourced birth dates. If the dependency is missing, install or use a reliable external calculator and cite it.
8. Build the battle report with only these prediction modules:
   - 球衣五行入盘.
   - 奇门遁甲时家排盘.
   - 主教练与球员缺时柱八字.
   - 现实校验.
9. Read `references/pre-match-market-mapping.md` and classify signals into:
   - 胜负气 for 胜平负.
   - 盘路气 for 让球.
   - 门路开闭 for 总进球 and weak-side scoring.
   - 节奏先后 for 半全场.
   - 细节成像 for 比分.
10. Apply strong-favorite expansion, weak-side goal classification, score-structure tree, market priority, and conflict checks from `pre-match-market-mapping.md`.
11. Apply the confidence gates in `references/prematch-data-status.md` before writing the final lean, score pool, or betting packs.
12. Read `references/lottery-rules.md` before producing betting strategy content.
13. Convert the oracle into selectable strategy styles:
   - 胜平负.
   - 让球胜平负, especially -1 when requested.
   - 固定比分.
   - 总进球.
   - 半全场胜平负.
14. Read `references/betting-strategies.md` before creating the staking table.
15. Use `references/report-template.md` for the final answer structure.

## Output Rules

- Open with: "以下为娱乐性玄学分析，不构成投注建议或收益承诺。"
- Mark missing facts as missing; do not invent them.
- If using current fixtures, team news, rules, odds, weather, venue, kit colours, lineup data, or birth dates, cite the source links.
- Use "主队" and "客队" consistently according to the official fixture order, not reputation or geography.
- For a neutral World Cup match, still treat the first listed team as the lottery home team unless a source says otherwise.
- Separate prediction from betting strategy: a match lean is not automatically a recommended ticket.
- Separate result prediction from market mapping: weak-side scoring signals must not automatically become draw protection.
- Always include data phase, lineup status, birth-date coverage, confidence level, and reversal/no-play conditions.
- Do not include astrology, biorhythm, aura reading, animal oracles, random omens, or broad feng shui unless the user explicitly asks for an extra entertainment appendix.
- Do not invent birth dates, lineups, kit colours, Qi Men chart values, or bazi pillars. Mark unknown data as missing.
- If only birth date is available, call the chart "缺时柱八字" or "三柱参考"; never infer an unknown birth hour.
- Give at least four strategy profiles by default, and include all six when the user asks for detailed betting strategy:
  - 保守防守型.
  - 均衡主线型.
  - 进取比分型.
  - 半全场剧情型.
  - 防冷对冲型.
  - 纯观赛型.
- Include a "放弃条件" for every betting profile.
- Include percentage allocation and a `100单位示例` for every betting profile unless the user provides a specific bankroll.
- Include bankroll limits and responsible lottery language.
- Avoid recommending martingale, borrowing money, chasing losses, or all-in stakes.

## Optional Helper Script

Use `scripts/bet_plan.py` when the user wants a neat stake table from a JSON plan. The script summarizes total exposure, pick counts, and per-pick stake. It does not validate whether a real lottery terminal supports a specific ticket combination.

Example:

```bash
python scripts/bet_plan.py --demo
```

## Reference Files

- `references/prematch-data-status.md`: timing phases, confidence caps, and reversal conditions.
- `references/kit-colour-query.md`: official kit-colour lookup workflow and confidence levels.
- `references/qimen-bazi-method.md`: Qi Men Dun Jia match chart and incomplete Four Pillars workflow.
- `references/pre-match-market-mapping.md`: pre-match signal-to-market mapping, expansion triggers, score structures, and conflict checks.
- `references/lottery-rules.md`: China Sports Lottery play type definitions and option lists.
- `references/betting-strategies.md`: strategy packs and stake allocation logic.
- `references/report-template.md`: final "赛前玄学战报" output template.

