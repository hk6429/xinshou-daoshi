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

export function advanceWeek(state) {
  let next = structuredClone(state);
  next.week += 1;
  if (next.week === 10 && next.flags.delayedPenaltyW10) {
    next = applyEffects(next, { trust: -10 });
    next.flags.delayedPenaltyW10 = false;
  }
  return next;
}
