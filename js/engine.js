import { applyEffects } from './state.js';

// 分級素養分：最佳解 10、次佳解 6；可行但違法／錯誤 0
export const LITERACY_BY_TIER = { best: 10, good: 6, illegal: 0, wrong: 0 };

// 把一個選項評級為計分結果（相容新制 tier 與里程碑舊制 correct:boolean）
export function gradeChoice(choice) {
  if (choice.tier) {
    return {
      scored: true,
      literacy: LITERACY_BY_TIER[choice.tier] ?? 0,
      correctish: choice.tier === 'best' || choice.tier === 'good',
    };
  }
  if (typeof choice.correct === 'boolean') {
    return { scored: true, literacy: choice.correct ? 10 : 0, correctish: choice.correct };
  }
  return { scored: false, literacy: 0, correctish: false }; // onEnter 等不計
}

// 投訴壓力夾在 0–100；困難版的核心黑帽資源（CD8 損失閃避）。
export const clampPressure = (n) => Math.max(0, Math.min(100, n));

export function applyChoice(state, choice) {
  let next = applyEffects(state, choice.effects);
  next = structuredClone(next);
  for (const core of choice.octalysis || []) {
    next.octalysis[`c${core}`] += 1;
  }
  next.history.push(choice.id);
  if (choice.setsFlag) next.flags[choice.setsFlag] = true;
  const g = gradeChoice(choice);
  if (g.scored) {
    next.answered = (next.answered || 0) + 1;
    next.literacy = (next.literacy || 0) + g.literacy;
    if (g.correctish) next.correct = (next.correct || 0) + 1;
  }
  // 困難版投訴壓力：會議／投訴卡帶顯式 pressure；一般法規題依分級微調
  // （最佳解少給投訴把柄 −1、違法或失分落人口實 +2）。
  if (next.hard) {
    let dp = choice.pressure || 0;
    if (g.scored) {
      if (choice.tier === 'best') dp -= 1;
      else if (choice.tier === 'illegal' || choice.tier === 'wrong') dp += 2;
    }
    if (typeof choice.resetPressureTo === 'number') next.pressure = choice.resetPressureTo;
    if (dp) next.pressure = clampPressure((next.pressure || 0) + dp);
  }
  return next;
}

export function evalBranch(state, beat) {
  const cb = beat.conditionalBranch;
  if (cb && cb.when(state)) return cb.event;
  return null;
}

export function checkHiddenCombo(state, milestone) {
  const combo = milestone.hiddenCombo;
  if (!combo) return state;
  if (state.badges.includes(combo.badge)) return state;
  const hit = combo.choiceIds.every((id) => state.history.includes(id));
  if (!hit) return state;
  const next = applyEffects(state, combo.bonus);
  next.badges = [...next.badges, combo.badge];
  return next;
}

// 班級經營的熵：每週五維自然滑落，不持續經營就退步（CD8 損失 + CD2 維持壓力）。
// 地板 30，避免死亡螺旋到 0；想跌破 30 仍可透過實際失分選項達成（保留待努力結局）。
const WEEKLY_DECAY = 2;
const WEEKLY_HP_REGEN = 8;   // 週末/假期休息回血，避免心力一觸 0 就永久卡死
const HP_CAP = 100;

// 心力歸零＝身心調適假：回一批心力，但班級短暫無人盯＝凝聚/班風小幅下滑
export const SICK_LEAVE = { hp: 25, cohesion: -5, climate: -5 };
export function needsSickLeave(state) { return state.resources.hp <= 0; }
const STAT_KEYS = ['cohesion', 'climate', 'trust', 'honor', 'roleModel'];

export function advanceWeek(state) {
  let next = structuredClone(state);
  next.week += 1;
  // 困難版：班級損耗更快、心力回血更少（CD6 稀缺），投訴壓力被動爬升（CD8）。
  const hard = !!next.hard;
  const decay = hard ? WEEKLY_DECAY + 1 : WEEKLY_DECAY;
  const regen = hard ? 5 : WEEKLY_HP_REGEN;
  for (const k of STAT_KEYS) {
    next.stats[k] = Math.max(30, next.stats[k] - decay);
  }
  // 週末休息：心力回復（上限 HP_CAP），讓「心力 0」是可恢復的低潮而非死局
  next.resources.hp = Math.min(HP_CAP, next.resources.hp + regen);
  if (hard) next.pressure = clampPressure((next.pressure || 0) + 1); // 家長群組從不打烊

  if (next.week === 10 && next.flags.delayedPenaltyW10) {
    next = applyEffects(next, { trust: -10 });
    next.flags.delayedPenaltyW10 = false;
  }
  return next;
}
