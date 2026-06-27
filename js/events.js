// 突發事件卡：穿插在平時週之間的「無對錯」劇情互動，給即時數值回饋與情緒起伏。
// 與法規題不同：不分級、不算素養、不影響連對，只是當下的一個選擇＋一段結果。
// 每張：{ id, title, scenario, choices:[{ label, outcome, effects, octalysis }] }
//   - outcome：選完顯示的一句結果回饋（取代「最佳解／素養」那段）
//   - effects：五維／心力／班費的即時增減
//   - octalysis：八角內部充能（1使命 2成就 3創造 4擁有 5關聯 6迫切 7未知 8損失）
export const EVENT_CARDS = [
  { id: 'ev_card', title: '🎲 突發事件・一張卡片',
    scenario: '早自習，桌上多了一張歪歪的卡片：「老師謝謝你那天聽我說話。」沒有署名。',
    choices: [
      { label: '寫張小紙條貼回布告欄回應全班', outcome: '孩子們你看我我看你，偷偷笑了。班級的暖度上來了。',
        effects: { cohesion: 6, climate: 6, roleModel: 4 }, octalysis: [5, 1] },
      { label: '默默收進抽屜，放在心裡記著', outcome: '你沒聲張，但那份重量，你自己知道。',
        effects: { roleModel: 5, hp: 6 }, octalysis: [5] },
      { label: '當天找時間，私下謝謝可能的那個孩子', outcome: '你猜對了。他紅著眼眶說「老師你怎麼知道」。',
        effects: { trust: 8, roleModel: 3, hp: -3 }, octalysis: [5, 7] },
    ] },
  { id: 'ev_latecall', title: '🎲 突發事件・深夜來電',
    scenario: '晚上十一點，一位家長打來，語氣焦躁，說孩子在家又把自己關進房間。',
    choices: [
      { label: '先接起來，陪家長把情緒講完', outcome: '講了四十分鐘。你累了，但這個家穩住了。',
        effects: { trust: 8, hp: -10 }, octalysis: [5, 6] },
      { label: '簡短安撫，約明天上班時間細談', outcome: '你守住了界線，家長也理解。明天再好好接。',
        effects: { trust: 3, hp: -3 }, octalysis: [6] },
      { label: '已讀不回，想說明天再說', outcome: '你睡了，但家長那頭的不安，留到了明天的早晨。',
        effects: { trust: -6, hp: 2 }, octalysis: [8] },
    ] },
  { id: 'ev_fight', title: '🎲 突發事件・午休衝突',
    scenario: '午休，兩個平常要好的孩子突然吵起來，全班都在看你怎麼處理。',
    choices: [
      { label: '把兩人帶開，先各自冷靜再談', outcome: '十分鐘後兩人都軟了。你示範了怎麼處理情緒。',
        effects: { climate: 5, roleModel: 6, hp: -5 }, octalysis: [1, 2] },
      { label: '當場各打五十大板要他們道歉', outcome: '表面平息了，但兩人都覺得沒被聽見。',
        effects: { climate: -3, trust: -4 }, octalysis: [8] },
      { label: '讓全班一起討論這件事怎麼解', outcome: '有點冒險，但孩子們認真了起來，班級長出了默契。',
        effects: { cohesion: 7, climate: 4, hp: -6 }, octalysis: [3, 5] },
    ] },
  { id: 'ev_birthday', title: '🎲 突發事件・有人生日',
    scenario: '今天有個比較邊緣的孩子生日，沒什麼人記得。你剛好瞄到聯絡簿。',
    choices: [
      { label: '帶全班唱首歌，給他一個驚喜', outcome: '他愣住，然後笑得很靦腆。這天他被全班記住了。',
        effects: { cohesion: 6, climate: 6, roleModel: 4, hp: -3 }, octalysis: [5, 4] },
      { label: '下課私下塞顆糖，說聲生日快樂', outcome: '小小的舉動，卻是他今天最暖的一刻。',
        effects: { trust: 6, roleModel: 4 }, octalysis: [5] },
      { label: '太忙了，這次先放著', outcome: '日子照常過，只是有個孩子，今天有點安靜。',
        effects: { climate: -2, roleModel: -2 }, octalysis: [8] },
    ] },
  { id: 'ev_sick', title: '🎲 突發事件・你感冒了',
    scenario: '你發著低燒，喉嚨啞了，但今天有一堆事等著你。',
    choices: [
      { label: '硬撐，把該做的做完再說', outcome: '事情做完了，你的身體也透支了。',
        effects: { honor: 4, hp: -14 }, octalysis: [2, 6] },
      { label: '抓重點做，其餘明天再補', outcome: '你學會了取捨。沒有人因此受影響。',
        effects: { hp: -4 }, octalysis: [1] },
      { label: '請半天假，好好休息', outcome: '你照顧了自己。班級今天少了你的盯場，但你回血了。',
        effects: { hp: 12, cohesion: -3, climate: -3 }, octalysis: [4] },
    ] },
  { id: 'ev_failexam', title: '🎲 突發事件・他考差了',
    scenario: '一個平常很努力的孩子這次考砸了，下課躲在位子上不講話。',
    choices: [
      { label: '走過去，先不談分數，問他還好嗎', outcome: '他憋著的眼淚掉下來。你接住了他。',
        effects: { trust: 8, roleModel: 5, hp: -4 }, octalysis: [5, 1] },
      { label: '拿出他的進步幅度，陪他看努力的軌跡', outcome: '他重新抬起頭。原來退步不等於失敗。',
        effects: { trust: 6, climate: 3, roleModel: 4 }, octalysis: [2, 1] },
      { label: '提醒他下次要更用功', outcome: '話沒錯，但此刻他更需要的，也許不是這句。',
        effects: { trust: -3 }, octalysis: [6] },
    ] },
  { id: 'ev_colleague', title: '🎲 突發事件・同事訴苦',
    scenario: '隔壁班導師在辦公室紅了眼眶，說自己快撐不住了，想找你聊聊。',
    choices: [
      { label: '放下手邊的事，先聽他說', outcome: '你給的不是建議，是陪伴。他鬆了一口氣。',
        effects: { roleModel: 5, hp: -6, honor: 3 }, octalysis: [5, 1] },
      { label: '約午餐時間好好聊，先給個擁抱', outcome: '你守住自己的進度，也接住了同事。',
        effects: { roleModel: 3, hp: -2 }, octalysis: [5] },
      { label: '說自己也很忙，改天吧', outcome: '你顧好了自己，但辦公室那頭的孤單，又深了一點。',
        effects: { roleModel: -3, hp: 2 }, octalysis: [8] },
    ] },
  { id: 'ev_cleanup', title: '🎲 突發事件・整潔競賽',
    scenario: '臨時通知今天午後查整潔，你們班的掃區昨天才被釘過。',
    choices: [
      { label: '帶頭捲袖子，跟孩子一起掃', outcome: '你彎下腰的樣子，比一百句叮嚀都有用。',
        effects: { cohesion: 7, roleModel: 6, hp: -6 }, octalysis: [1, 5] },
      { label: '分組包乾，建立輪值制度', outcome: '這次不只過關，還順手把制度立起來了。',
        effects: { cohesion: 5, honor: 5, climate: 3 }, octalysis: [3, 2] },
      { label: '催促孩子們快點弄一弄', outcome: '勉強過關，但孩子做得心不甘情不願。',
        effects: { honor: 2, climate: -2 }, octalysis: [6] },
    ] },
  { id: 'ev_note', title: '🎲 突發事件・匿名紙條',
    scenario: '收作業時夾著一張紙條：「老師，我最近壓力很大，但不敢說。」沒有名字。',
    choices: [
      { label: '在班上輕輕說：有事都可以來找我', outcome: '你沒點名任何人，卻讓那個孩子知道，門是開的。',
        effects: { trust: 7, climate: 5, roleModel: 4 }, octalysis: [5, 1] },
      { label: '放一個匿名信箱，讓孩子能說話', outcome: '一個小小的出口，接住了不只一個孩子。',
        effects: { trust: 6, climate: 4, cohesion: 3 }, octalysis: [3, 5] },
      { label: '默默觀察，看誰最近不對勁', outcome: '你開始留意每一張臉。關心，從看見開始。',
        effects: { roleModel: 4, hp: -3 }, octalysis: [7] },
    ] },
  { id: 'ev_rain', title: '🎲 突發事件・突然下大雨',
    scenario: '放學時下起傾盆大雨，幾個孩子沒帶傘，在川堂等不到家長。',
    choices: [
      { label: '陪他們等，順便聊聊天', outcome: '雨聲裡的閒聊，成了今天最放鬆的一段時光。',
        effects: { trust: 6, cohesion: 4, hp: -4 }, octalysis: [5] },
      { label: '把辦公室的傘借給他們', outcome: '幾把舊傘，撐起了孩子回家的路。',
        effects: { trust: 5, roleModel: 3 }, octalysis: [4, 5] },
      { label: '請他們自己想辦法，你先離開', outcome: '你下班了，孩子們在雨裡，多等了一會兒。',
        effects: { trust: -4 }, octalysis: [8] },
    ] },
];

// 事件卡 → 可被 app.html 直接 render 的 beat（與 itemToBeat 同形，但帶 isEvent 與 outcome）
export function eventToBeat(card) {
  return {
    id: card.id,
    isEvent: true,
    title: card.title,
    prompt: card.scenario,
    choices: card.choices.map((c, i) => ({
      id: `${card.id}_r${i}`,
      label: c.label,
      outcome: c.outcome,
      effects: c.effects || {},
      octalysis: c.octalysis || [],
    })),
  };
}
