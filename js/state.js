const STAT_KEYS = ['cohesion', 'climate', 'trust', 'honor', 'roleModel'];
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

// runSeed 決定平時週的抽題；省略時隨機產生（瀏覽器）。測試可帶固定值。
// hard：困難版（校事會議地獄模式）——多一條「投訴壓力」資源、心力更稀缺、穿插校事會議與投訴卡。
export function createInitialState(runSeed, hard = false) {
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
    hard: !!hard,       // 困難版旗標
    pressure: 0,        // 投訴壓力 0–100（僅困難版有意義）
    complaintChain: 0,  // 投訴連鎖深度：處理失當每週纏上來，妥善處理歸零
    runSeed: runSeed ?? Math.floor(Math.random() * 1e9),
  };
}

// 依素養分回傳導師段位（門檻對齊 40 週實測天花板約 2000，分四段穩定爬升）
export function literacyRank(literacy) {
  if (literacy >= 1700) return '法規專家導師';
  if (literacy >= 1000) return '專業導師';
  if (literacy >= 350) return '合格導師';
  return '新手導師';
}

// 五維「分段增益遞減」：越接近滿值，每點正向增益越難拿（CD2 養成曲線）；
// 損失一律全額（CD8）。讓里程碑週不再一週把一條線從 50 灌到 100。
// 0–60 全額、60–80 六折、80–100 三折。小增益在低值仍全額、超大增益仍可填到 100。
export function addStat(current, delta) {
  if (delta <= 0) return clamp(Math.round(current + delta), 0, 100);
  let v = current, remaining = delta;
  for (const [cap, eff] of [[60, 1], [80, 0.6], [100, 0.3]]) {
    if (v >= cap) continue;
    const cost = (cap - v) / eff; // 漲到 cap 需要多少原始增益
    if (remaining <= cost) { v += remaining * eff; remaining = 0; break; }
    v = cap; remaining -= cost;
  }
  // 一律收成整數（自然數呈現）：避免結算畫面出現 11.7999999 之類浮點
  return clamp(Math.round(v), 0, 100);
}

export function applyEffects(state, effects = {}) {
  const next = structuredClone(state);
  for (const key of STAT_KEYS) {
    if (effects[key] != null) {
      next.stats[key] = addStat(next.stats[key], effects[key]);
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
