# Betting Strategy Styles

These styles convert the Qi Men and incomplete-bazi "赛前玄学战报" into entertainment-only China Sports Lottery structures. Always include responsible-play language and avoid profit-certainty language.

## Bankroll Rules

- If the user gives a budget, use that amount as the maximum exposure and convert each percentage into money.
- If no budget is given, use percentages plus a fictional `100单位示例`.
- For a single match, suggest risking only a small portion of the user's entertainment bankroll.
- Never suggest borrowing, chasing losses, martingale doubling, or all-in stakes.
- Every style must include a "放弃条件".
- Separate prediction from betting. A match lean can become `no-play` when confidence gates are low.
- If final confidence is `low`, default to `纯观赛型` and keep all other styles clearly theoretical.
- If report phase is `post-lock`, do not present pre-match betting as actionable. Use the styles only as replay mapping.

## Required Style Output

When the user asks for detailed betting strategy, include all six styles:

| 风格 | Risk | Use When |
| --- | --- | --- |
| 保守防守型 | low | main lean is clear but user wants lower variance |
| 均衡主线型 | medium | main lean plus one protection branch |
| 进取比分型 | high | exact score pool is tight and confidence is at least medium |
| 半全场剧情型 | high | Qi Men script gives a clear first-half/full-time rhythm |
| 防冷对冲型 | medium-high | favorite is positive but upset/draw warnings are active |
| 纯观赛型 | minimal/no-play | confidence is low, post-lock, or user wants ritual fun only |

Each style should include:

- 适用前提.
- 总风险等级.
- 玩法组合.
- 选择项.
- 资金比例.
- `100单位示例`.
- 命中逻辑.
- 风险点.
- 放弃条件.

## Style A: 保守防守型

Use when the prediction has a clear lean but lineup, kit, or bazi uncertainty still exists.

Default allocation:

| Play | Allocation |
| --- | ---: |
| 胜平负 single or double chance | 45% |
| 让球胜平负 protection | 25% |
| 总进球 core band | 20% |
| 比分 symbolic pick | 10% |

Typical mappings:

- Favorite likely wins narrowly: 胜平负 `胜`, 让球(-1) `让平/让负`, 总进球 `2/3`, 比分 `1:0/2:1`.
- Draw-heavy: 胜平负 `平` or `胜/平`, 让球 `让负`, 总进球 `0/1/2`, 比分 `0:0/1:1`.
- Away lean: 胜平负 `负` or `平/负`, 让球 `让负`, 总进球 `1/2/3`, 比分 `0:1/1:2`.

放弃条件:

- The main lean is only `low`.
- Official lineup contradicts the key-person set.
- User cannot accept losing all allocated units.

## Style B: 均衡主线型

Use when the oracle has one main result and one protection branch.

Default allocation:

| Play | Allocation |
| --- | ---: |
| 胜平负 main result | 30% |
| 胜平负 protection result or double coverage | 15% |
| 让球胜平负 | 25% |
| 总进球 | 20% |
| 比分 pool | 10% |

Typical mappings:

- Medium home lean: `胜` plus `平` protection; handicap `让平/让负`; totals `2/3`; scores `1:0/2:1/1:1`.
- Strong home lean: `胜`; handicap `让胜/让平`; totals `2/3/4`; scores `2:0/2:1/3:1`.
- Away-counter script: `负` plus `平`; handicap `让负`; totals `2/3`; scores `0:1/1:2/1:1`.

放弃条件:

- The score pool exceeds five picks.
- Qi Men and bazi disagree without a football bridge.
- The handicap offered is not the handicap assumed in the strategy.

## Style C: 进取比分型

Use when the score pool is narrow and the user wants higher variance.

Default allocation:

| Play | Allocation |
| --- | ---: |
| 比分 main pool | 40% |
| 总进球 matching band | 25% |
| 胜平负 result anchor | 20% |
| 让球胜平负 | 15% |

Score-pool sizing:

- `high` confidence with official lineup: up to 4 scores.
- `medium` confidence: 2 or 3 scores.
- `low-medium`: 1 or 2 symbolic scores only.
- `low`: do not use this style.

Typical mappings:

- Narrow favorite: scores `1:0/2:1`, totals `1/2/3`, result `胜`, handicap `让平/让负`.
- Open favorite: scores `2:0/3:1/2:1`, totals `2/3/4`, result `胜`, handicap `让胜/让平`.
- Draw script: scores `0:0/1:1/2:2`, totals `0/2/4`, result `平`.

放弃条件:

- Official lineup is unavailable and final confidence is below `medium`.
- Weather, referee, injury, or tactical change makes the score band too wide.
- User is using this as a recovery bet.

## Style D: 半全场剧情型

Use when Qi Men gives a clear tempo narrative.

Default allocation:

| Play | Allocation |
| --- | ---: |
| 半全场 | 35% |
| 胜平负 result anchor | 25% |
| 总进球 | 20% |
| 比分 | 20% |

Plot mappings:

- Slow favorite awakening: 半全场 `平胜`, result `胜`, scores `1:0/2:1`, totals `1/2/3`.
- Early control maintained: 半全场 `胜胜`, result `胜`, scores `2:0/3:1`, totals `2/3/4`.
- Favorite fades: 半全场 `胜平`, result `平`, scores `1:1/2:2`.
- Away counterattack: 半全场 `平负`, result `负`, scores `0:1/1:2`.
- Chaos match: half/full `胜胜/平胜/平负`, totals `4/5/6/7+`, scores `3:2/2:3/胜其他/负其他`.

放弃条件:

- First-half rhythm is unclear.
- Qi Men only supports a result lean, not a tempo script.
- User wants low variance.

## Style E: 防冷对冲型

Use when the favorite is positive but at least two cold-warning signals appear: draw door, injury/card warning, weak goalkeeper bazi, expected lineup rotation, travel fatigue, or underdog counterattack path.

Default allocation:

| Play | Allocation |
| --- | ---: |
| Favorite primary result | 30% |
| Draw or upset protection | 25% |
| 让球 protection | 25% |
| 总进球 low/mid band | 10% |
| Cold score | 10% |

Typical mappings:

- Home favorite but one-goal signal: `胜`, protect `平`; handicap `让平/让负`; score `1:1` or `2:1`.
- Strong team but defense clash: `胜/平`; handicap `让负`; totals `2/3`; scores `1:1/2:1`.
- Away underdog has counterattack signal: result `负/平`, handicap `让负`, scores `0:1/1:2/1:1`.

放弃条件:

- Protection makes the plan too scattered.
- Score pool exceeds five picks.
- User wants a simple single-direction ticket.

## Style F: 纯观赛型

Use when confidence is low, the match is already post-lock, factual anchors are missing, or the user only wants ritual fun.

Default allocation:

| Play | Allocation |
| --- | ---: |
| No-play reserve | 80% to 100% |
| Symbolic result | 0% to 10% |
| Symbolic total goals | 0% to 5% |
| Symbolic exact score | 0% to 5% |

Output:

- Prefer `不下注/只看球`.
- If the user insists on a symbolic ticket, choose one result, one total-goal number, and one exact score only.

放弃条件:

- The user wants a serious financial recommendation.
- The match is already locked and the user is seeking actionable betting.

## 100 Unit Example Format

Use this compact format for every style:

| 玩法 | 选择项 | 比例 | 100单位示例 |
| --- | --- | ---: | ---: |
| 胜平负 | 胜 | 30% | 30 |
| 让球(-1) | 让平/让负 | 25% | 25 |

If the style has multiple picks under one play, either split the units per pick or state `平均分配`.

## Closing Note

End betting sections with:

`玄学只负责让观赛更有仪式感，资金纪律负责让明天还能舒服地看球。`
