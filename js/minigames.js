// 輕量小遊戲：穿插在學年中的限時點擊關卡，給「動手做＋即時分數」的強回饋感。
// 與法規題、事件卡都不同：玩一段 15 秒的點擊小遊戲，依命中數換成班級數值獎勵（只加不扣）。
// 每個：{ id, title, intro, emoji, verb, durationSec, spawnMs, lifeMs, reward }
//   - emoji：要點掉的目標圖示
//   - verb：動詞（批改/處理/整理/收回），用在計分與結果文案
//   - durationSec：關卡長度；spawnMs：每隔多久冒一個；lifeMs：一個目標停留多久沒點就溜走
//   - reward：滿分時的最大獎勵；實際依命中率 0.4~1.0 縮放（保底 0.4，永遠正獎勵）
export const MINIGAMES = [
  { id: 'mg_grade', title: '🎯 小遊戲・批改大作戰',
    intro: '一疊作業湧上來了！限時把它們一本一本點掉，動作要快。',
    emoji: '📕', verb: '批改', durationSec: 15, spawnMs: 700, lifeMs: 1500,
    reward: { honor: 7, climate: 4 } },
  { id: 'mg_班務', title: '🎯 小遊戲・班務急件',
    intro: '班務急件此起彼落：請假單、家長訊息、活動回條……快點一件件處理掉。',
    emoji: '📋', verb: '處理', durationSec: 15, spawnMs: 750, lifeMs: 1500,
    reward: { cohesion: 6, honor: 5 } },
  { id: 'mg_clean', title: '🎯 小遊戲・整理教室',
    intro: '放學後的教室有點亂，限時把散落的東西一個個收好。',
    emoji: '🧹', verb: '整理', durationSec: 15, spawnMs: 700, lifeMs: 1600,
    reward: { climate: 7, cohesion: 4 } },
  { id: 'mg_collect', title: '🎯 小遊戲・收作業',
    intro: '收作業時間！同學陸續交上來，限時把每一份接住、別漏收。',
    emoji: '📒', verb: '收回', durationSec: 15, spawnMs: 650, lifeMs: 1500,
    reward: { honor: 6, trust: 4 } },
  { id: 'mg_cheer', title: '🎯 小遊戲・加油打氣',
    intro: '段考前夕，孩子們需要鼓勵。限時把愛心一顆顆送出去，替全班充電。',
    emoji: '💪', verb: '打氣', durationSec: 15, spawnMs: 700, lifeMs: 1600,
    reward: { climate: 5, trust: 5 } },
];

// 小遊戲 → beat（與題目/事件卡同放在 week.days，靠 isMinigame 分流）
export function minigameToBeat(mg) {
  return { ...mg, isMinigame: true, prompt: mg.intro };
}
