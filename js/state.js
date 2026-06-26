const STAT_KEYS = ['cohesion', 'climate', 'trust', 'honor', 'roleModel'];
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

// runSeed 決定平時週的抽題；省略時隨機產生（瀏覽器）。測試可帶固定值。
export function createInitialState(runSeed) {
  return {
    week: 0,
    stats: { cohesion: 50, climate: 50, trust: 50, honor: 50, roleModel: 50 },
    resources: { hp: 80, budget: 0 },
    octalysis: { c1:0, c2:0, c3:0, c4:0, c5:0, c6:0, c7:0, c8:0 },
    badges: [],
    flags: {},
    history: [],
    literacy: 0,        // 法規素養分（答對法規題累積）
    answered: 0,        // 已作答的法規題數
    correct: 0,         // 答對數
    runSeed: runSeed ?? Math.floor(Math.random() * 1e9),
  };
}

// 依素養分回傳導師段位
export function literacyRank(literacy) {
  if (literacy >= 120) return '法規專家導師';
  if (literacy >= 70) return '專業導師';
  if (literacy >= 30) return '合格導師';
  return '新手導師';
}

export function applyEffects(state, effects = {}) {
  const next = structuredClone(state);
  for (const key of STAT_KEYS) {
    if (effects[key] != null) {
      next.stats[key] = clamp(next.stats[key] + effects[key], 0, 100);
    }
  }
  if (effects.hp != null) next.resources.hp = Math.max(0, next.resources.hp + effects.hp);
  if (effects.budget != null) next.resources.budget += effects.budget;
  return next;
}

export const SAVE_KEY = 'teacher-game-save-v2';

export function saveState(state, storage) {
  storage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function loadState(storage) {
  const raw = storage.getItem(SAVE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
