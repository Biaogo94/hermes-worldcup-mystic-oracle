# Qi Men Scoring

Use this file after obtaining a Qi Men chart. It turns the chart from narrative symbols into a constrained scoring model.

The model is entertainment-only. It can support market prioritization, but not guaranteed betting decisions.

## Use-God Anchors

Do not rely on one anchor only. Use at least two anchors for each team when data permits.

| Role | Primary Anchor | Secondary Anchors | Notes |
| --- | --- | --- | --- |
| 主队 | 日干 | official Team A palace, team-name element, kit element | if anchors conflict, cap confidence at `medium` |
| 客队 | 时干 | opposing palace, team-name element, kit element | if anchors conflict, cap confidence at `medium` |
| 主帅 | 值符 | 天辅, 天心, coach bazi | affects result qi and tempo qi |
| 门将 | 天蓬/天芮 | 死门, 玄武, goalkeeper bazi, GK kit element | affects clean sheet, error, and weak-side scoring |
| 进攻通道 | 开门/生门/景门 | 天英, 天冲, 九天 | affects goal-channel qi and handicap qi |
| 防守通道 | 杜门/死门/休门 | 九地, 天任 | affects low goals, blocks, and draw tendency |
| 事故通道 | 伤门/惊门 | 白虎, 玄武, 腾蛇 | affects cards, penalty, VAR, sudden goal |

If only one anchor is available, use `简化奇门象占` and do not produce a high-confidence handicap strategy.

## Match-Level Pre-Score Gates

Before scoring individual palaces, set the match-level confidence gate:

| Gate | Positive / Usable | Negative / Cap |
| --- | --- | --- |
| Time basis | venue local time plus true-solar audit; shichen stable | no timezone, no longitude near boundary, or shichen crossing unresolved |
| Method basis | 时家转盘, 拆补, clear 阴阳遁 and 局数 | method unknown, mixed charting standards, or hand-built chart |
| 中宫寄宫 | engine states or standard 转盘寄坤二 | unknown centre data; do not read 中五 as an active palace |
| Global field | no severe empty/tomb/伏吟/反吟 conflict | 五不遇时, severe 伏吟/反吟, or broad 空亡 lowers confidence |
| Data shape | 值符/值使, team anchors, key palace rows known | missing 值符/值使 or special-pattern rows caps handicap aggression |

If a cap is triggered, keep the report usable but reduce staking aggression before the odds optimizer is considered.

## 值符/值使 Command Axis Scoring

Score the command axis before team palace totals:

| Relation | Score | Market Effect |
| --- | ---: | --- |
| 符使同宫 | +1.0 | clean tactical story; supports main result and half/full script |
| 符生使 | +0.8 | execution receives strategic support; can raise favorite or planned-underdog confidence |
| 符使比和 | +0.6 | stable rhythm; supports coherent score bands |
| 使生符 | -0.2 | execution is costly; watch late fade or second-half concessions |
| 值符克值使 | -0.5 | command pressure; lower handicap aggression, prefer narrow result |
| 值使克值符 | -1.0 | tactical rebellion/disorder; raise chaos, cards, and totals volatility |
| unknown | 0.0 | cap at `medium` if other rows are strong, otherwise `low-medium` |

Football-specific use:

- Result qi may use 值符, but handicap qi requires 值使 agreement.
- 半全场 leans should be checked against 值使 more than 值符.
- If a coach bazi overlay is positive but 值使克值符, keep coach edge as "ideas exist but implementation risk remains".

## Palace Scoring

Score each team palace and key functional palace using the same rows:

| Item | Range | Positive Signals | Negative Signals |
| --- | ---: | --- | --- |
| 落宫旺衰 | -2 to +2 | season/hour supports palace or stem | season/hour controls palace or stem |
| 门吉凶 | -2 to +2 | 开, 生, 景 for attack; 休 for control | 死, 惊, 伤; 杜 when chasing goals |
| 星象功能 | -1 to +1 | 天辅, 天心, 天任, 天英/天冲 for attack | 天芮, 天蓬 when linked to GK/defense |
| 神煞风险 | -1 to +1 | 值符, 六合, 九天, 九地 when role-appropriate | 白虎, 玄武, 腾蛇, 勾陈 when causing delay/error |
| 生克关系 | -2 to +2 | team anchor generates/controls opponent constructively | team anchor is controlled, drained, or trapped |
| 三奇六仪/格局 | -2 to +2 | 三奇得使, 青龙返首, 飞鸟跌穴, role-linked吉格 | 五不遇时, 庚冲, 凶克应, damaged吉格 |
| 异常场 | -2 to 0 | none | 空亡, 入墓, 门迫, 击刑, 反吟, 伏吟 if confirmed |

If the chart source or parser cannot confirm a row, mark it `unknown` and do not score that row.

Special-pattern discipline:

- A named吉格 is not automatically positive. It must be connected to the relevant team or role anchor and must not be neutralized by 空亡、入墓、击刑、门迫, or strong seasonal weakness.
- A named凶格 can suppress confidence even when the team palace has good doors/stars.
- Use `unknown` rather than inventing a geju when the MCP/parser does not expose it.

## Door/Star/Deity Market Mapping

| Signal | Primary Market | Secondary Market | Caution |
| --- | --- | --- | --- |
| 开门 | total goals, result qi | handicap | good for chances; not always goals if star/deity weak |
| 生门 | scoring, substitutions | handicap | strong with 值符/六合/九天 |
| 景门 | visible pressure, VAR, highlight | totals, score image | can mean spectacle rather than dominance |
| 休门 | control, slow tempo | half/full draw at HT | supports low tempo unless attack stars override |
| 杜门 | blocked lanes | low totals | bad if favorite needs expansion |
| 死门 | sterile attack, collapse | underdog scoring against weak defense | severe for team attack if it is the team's anchor |
| 伤门 | cards, injury, aggressive duels | chaos totals | do not overtrust exact scores |
| 惊门 | sudden mistake, penalty, VAR | weak-side goal | not automatically upset |
| 天辅/天心 | organization | coach support | favors structured teams |
| 天任 | stability | defense/control | favors holding a lead |
| 天英/天冲 | speed and explosions | totals/handicap | can also create cards |
| 天芮/天蓬 | illness/error/GK hidden risk | both teams to score | use carefully with goalkeeper anchor |
| 值符 | command | result qi, coach | strongest when on favorite or coach anchor |
| 六合 | chemistry/rebounds | scoring | helps combination play |
| 九天 | expansion/aerial/direct play | handicap | raises blowout chance |
| 九地 | block/low tempo | totals | supports defending, not chasing |
| 白虎 | contact/injury/cards | chaos | avoid heavy exact score |
| 玄武/腾蛇 | hidden error/VAR/fog | weak-side goal | classify before altering result |
| 三奇得使 | tactical channel receives high-grade support | result/handicap | only if linked to team or attack channel |
| 青龙返首/飞鸟跌穴 | positive completion image | result/score image | damaged if trapped, empty, or struck |
| 五不遇时 | event field suppresses action | no-play or reduced stake | do not fight this with local吉门 |
| 伏吟 | stagnation/repetition | low tempo, draw HT | beware favorite failing to expand |
| 反吟 | reversal/shock | totals, comeback, transition | avoid narrow single-score confidence |

## 用神 Matrix for Football

Use the report's general use-god principle, but map it to football:

| Football Question | Primary Use-God | Secondary Use-Gods | Market Link |
| --- | --- | --- | --- |
| Who controls result? | 日干/时干 team anchors, 值符 | opposing palace, official home/away palace | HAD, HHAD |
| Can the plan execute? | 值使门 | 开门/生门, coach symbols, midfield bazi | HAFU, handicap confidence |
| Will goals open? | 生门, 开门, 景门 | 天英/天冲/九天, 马星 | TTG, CRS tails |
| Will defense hold? | 杜门, 休门, 九地, 天任 | goalkeeper symbols, 死门, 玄武 | clean sheet, low totals |
| Where does chaos enter? | 伤门, 惊门, 白虎, 玄武, 腾蛇 | 反吟, 马星, 击刑 | cards, penalties, weak-side goal |
| Is blowout live? | 九天, 生门, strong favorite palace | 值使 support, no 伏吟/空亡 | HHAD, high TTG, `胜其它/负其它` |

## Match-Level Qi Men Output

Every final report should summarize:

- Team anchor method: e.g. `主队=日干+球衣五行`, `客队=时干+对宫`.
- Time/method audit: civil time, true solar time, shichen, chart method, 阴阳遁, 局数, 转盘/飞盘, 寄宫 if known.
- Command-axis reading: 值符/值使 relation and football effect.
- Team palace scores, with unknown rows excluded.
- Functional signals:
  - result qi.
  - handicap qi.
  - goal-channel qi.
  - tempo qi.
  - image qi.
- Confidence cap:
  - `high` only if at least two anchors per team agree and key palace rows are known.
  - `medium` if anchors are partial or parser lacks special-pattern rows.
  - `low-medium` if only simplified charting is available.
  - `low` if kickoff time, timezone, or team placement is uncertain.

## Strategy Support Rule

Qi Men can support:

- preferred result direction;
- preferred market ordering;
- score structure;
- whether to raise or lower handicap aggression.

Qi Men alone cannot support:

- all-in staking;
- exact unit size;
- guaranteed score;
- high-confidence handicap when special-pattern rows are unknown.

Always combine Qi Men with reality checks, kit colour, bazi role modifiers, official Sporttery odds, and `pre-match-market-mapping.md`.

## Qi Men + Bazi Overlay Scoring

Use this only after `qimen-bazi-overlay.md` is read and the parsed chart can locate person/event anchors.

| Overlay Row | Range | Positive | Negative |
| --- | ---: | --- | --- |
| 年命宫状态 | -1 to +1 | 年命落旺宫, 吉门吉星扶身 | 空亡, 入墓, 受制, 凶门凶神压身 |
| 事宫状态 | -1 to +1 | 角色用神得门星神支持 | 角色用神受克, 门迫, 击刑 |
| 年命宫 vs 时干/事宫 | -2 to +2 | 事生人, 人克事, 比和 | 人生事, 事克人 |
| 日主宫 vs 事宫 | -1 to +1 | secondary confirmation supports 年命 | contradicts 年命 or shows drain/pressure |
| 角色专属用神 | -1 to +1 | coach/GK/striker/etc. symbol supports person | role symbol clashes or drains person |
| 月令气候病药 | -0.5 to +0.5 | event palace answers obvious cold/heat/dry/damp need | event palace worsens obvious climate bias |
| 八字日主/日支过滤 | -1 to +1 | 日主/日支与比赛日形成 support/combine | clash, harm, punishment, repeated忌象 |
| 流年/比赛日共振 | -0.5 to +0.5 | low-weight positive resonance | low-weight negative resonance |

Cap rules:

- If birth hour is missing, overlay contribution cannot exceed `medium` confidence.
- If birth hour is missing, 年命宫 relation is the primary score; 日主宫 cannot override 年命宫 by itself.
- If only 年/月/日 pillars are known, 月令 may add at most `±0.5` as a climate/病药 hint.
- If no full-bazi喜用神 is available, write `喜忌未完整判定` and do not use喜忌 as a decisive score.
- If大运 is not computed from a cited full chart, do not claim macro luck quality.
- If person/event palaces are unknown, overlay is qualitative and cannot alter betting strategy by itself.
- If `时干` cannot be located, do not use the overlay for result-path or staking aggression.

Market impact:

- Coach overlay changes tactical clarity and half/full-time confidence.
- Goalkeeper overlay changes clean-sheet, weak-side-goal, and exact-score risk.
- Striker overlay changes finishing, handicap, and right-tail probability.
- Midfield overlay changes tempo and total-goals band.
- Defender overlay changes cards, set-piece risk, and late-collapse probability.
