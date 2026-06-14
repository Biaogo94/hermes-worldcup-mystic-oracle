# Worldcup Mystic Oracle for Hermes Agent

Chinese entertainment-only football match analysis skill for Hermes Agent. It creates a "赛前玄学战报" using:

- pre-match data status checks;
- verified kit-colour lookup;
- Qi Men Dun Jia match-time charting;
- incomplete bazi three-pillar analysis for coaches and key players;
- China Sports Lottery style strategy menus with bankroll discipline.

This skill does not provide guaranteed betting advice, investment advice, or profit predictions.

## Layout

```text
skills/
  sports/
    worldcup-mystic-oracle/
      SKILL.md
      references/
      scripts/
      agents/
```

## Install

Copy `skills/sports/worldcup-mystic-oracle` into your Hermes Agent skills directory, for example:

```bash
mkdir -p ~/.hermes/skills/sports
cp -R skills/sports/worldcup-mystic-oracle ~/.hermes/skills/sports/
```

Or use this repository as an external skills directory if your Hermes Agent setup supports loading skills from custom paths.

## Optional Python Dependency

The bazi helper script uses `lunar-python`:

```bash
python -m pip install lunar-python
```

The skill can still be used without the helper script if the agent computes or cites three-pillar data from another reliable source.

## Safety

All outputs must state that the analysis is entertainment-only and not a betting guarantee. The skill includes no-play and low-stake ritual modes for low-confidence or post-lock matches.
