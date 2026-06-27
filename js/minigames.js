// 輕量小遊戲：穿插在學年中的限時關卡，給「動手做＋即時分數」的強回饋感。
// 與法規題、事件卡都不同：玩一段限時小遊戲，依表現（命中率 0.4~1.0）換班級數值獎勵（只加不扣）。
// 每個 kind 是「不同玩法」，由 app.html 的對應 runner 實作：
//   - whack  ：目標隨機冒出，全部點掉（emoji/verb/spawnMs/lifeMs）
//   - avoid  ：兩種圖示混出，只點 emoji、別點 badEmoji（點錯扣件數）
//   - order  ：場上散佈座號，要依序 1→2→3 點（count=每輪幾號、target=滿分件數）
//   - timing ：指針左右掃，進綠色甜蜜區時點（speed=指針速度）
//   - catch  ：物品從上掉落，落地前點掉接住（emoji/spawnMs）
// reward：滿分時的最大獎勵；實際依表現縮放（保底 0.4，永遠正獎勵）。
export const MINIGAMES = [
  { id: 'mg_grade', kind: 'whack', title: '🎯 小遊戲・批改大作戰',
    intro: '一疊作業湧上來了！限時把冒出來的每一本點掉，手要快。',
    emoji: '📕', verb: '批改', durationSec: 15, spawnMs: 700, lifeMs: 1500,
    reward: { honor: 7, climate: 4 } },

  { id: 'mg_班務', kind: 'avoid', title: '🎯 小遊戲・班務急件',
    intro: '只點要處理的急件 📋，別誤點老師的咖啡 ☕（點錯會扣件數）。',
    emoji: '📋', badEmoji: '☕', verb: '處理', durationSec: 16, spawnMs: 680, lifeMs: 1400,
    reward: { cohesion: 6, honor: 5 } },

  { id: 'mg_collect', kind: 'order', title: '🎯 小遊戲・收作業',
    intro: '依座號順序 1→2→3 把作業收回，點錯號碼會閃紅、要重點。',
    verb: '收回', durationSec: 18, count: 6, target: 15,
    reward: { honor: 6, trust: 4 } },

  { id: 'mg_cheer', kind: 'timing', title: '🎯 小遊戲・加油打氣',
    intro: '指針掃到綠色甜蜜區時點下去，時機抓準鼓勵才到位。',
    verb: '打氣', durationSec: 16, speed: 3, target: 10,
    reward: { climate: 5, trust: 5 } },

  { id: 'mg_clean', kind: 'catch', title: '🎯 小遊戲・整理教室',
    intro: '東西從上面掉下來了！在落地前一個個點掉收好，別讓它砸到地上。',
    emoji: '🧹', verb: '整理', durationSec: 16, spawnMs: 680,
    reward: { climate: 7, cohesion: 4 } },
];

// 小遊戲 → beat（與題目/事件卡同放在 week.days，靠 isMinigame 分流）
export function minigameToBeat(mg) {
  return { ...mg, isMinigame: true, prompt: mg.intro };
}
