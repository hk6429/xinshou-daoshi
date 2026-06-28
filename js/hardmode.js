// 困難版：「校事會議地獄模式」。
// 在一般版的班級經營之上，疊一層黑帽壓力（周郁凱八角 CD6 稀缺／CD7 不確定／CD8 損失閃避）：
//   - 新資源「投訴壓力 pressure」0–100：家長投訴與調查累積，越高越接近停聘。
//   - 校事會議（isHearing）：3 場正式訪談／調查／會議，遞增難度，扛過去＝清白資本。
//   - 投訴卡（isComplaint）：6 張家長投訴情境，回應好壞直接牽動壓力。
//   - 兩者都吃心力（hp），且困難版心力回血更少、班級損耗更快（見 engine.js）。
// 白帽生命線（CD1 使命／CD2 成就／CD4 擁有）：撐完 40 週且未被停聘＝把清白還給自己。
//
// 計分歸屬：會議與投訴卡都「不計法規素養、不計連對、不算天數」（比照事件卡），
// 只透過 effects（班級五維／心力）與 pressure 影響結局。

// 排程：value 為對應陣列的索引。週次避開過載、平均分布在整年。
export const HEARING_WEEKS = { 11: 0, 23: 1, 34: 2 };
export const COMPLAINT_WEEKS = { 4: 0, 8: 1, 15: 2, 20: 3, 27: 4, 36: 5 };

// 壓力門檻
export const PRESSURE_MAX = 100;
export const PRESSURE_DANGER = 70;   // ≥ 此值，下一場會議升級（多扣心力、加註警語）

// ───────── 校事會議（3 場，遞增）─────────
export const HEARINGS = [
  {
    id: 'hr_1', isHearing: true, stage: 1, title: '校事會議・第一次約談',
    prompt: '有家長向學校反映你「管教過當」。校事會議成立調查小組，請你到會議室說明。第一次約談，你怎麼應對？',
    choices: [
      { label: '據實陳述，並主動提供當天的聯絡簿、班級日誌佐證', effects: { hp: -6, trust: 6, honor: 4 }, pressure: -14, octalysis: [3, 4], outcome: '你把過程攤在陽光下、證據齊全，委員態度明顯緩和。這一波，你站得住。' },
      { label: '冷靜說明，但坦言當下情緒確實緊繃、會再調整', effects: { hp: -5, trust: 3 }, pressure: -6, octalysis: [3], outcome: '誠懇但沒有佐證，委員記下「請持續觀察」，調查暫未結案。' },
      { label: '據理力爭，強調家長無理取鬧、要對方拿證據', effects: { hp: -10, trust: -5, climate: -3 }, pressure: 10, octalysis: [8], outcome: '對立的姿態讓會議氣氛凍結，委員認為你「缺乏反思」，壓力不降反升。' },
      { label: '什麼都不多說，全程「依規定辦理」帶過', effects: { hp: -7, trust: -3 }, pressure: 6, octalysis: [8], outcome: '回避只換來更多疑問，調查小組決定擴大訪談學生。' },
    ],
  },
  {
    id: 'hr_2', isHearing: true, stage: 2, title: '校事會議・調查訪談',
    prompt: '調查進入訪談階段，委員要分別約談你、學生與家長。期限只有一週，你同時還要顧整個班。怎麼分配？',
    choices: [
      { label: '先找教師工會陪同，依程序準備書面說明再受訪', effects: { hp: -6, trust: 7, honor: 5 }, pressure: -16, octalysis: [4, 5], outcome: '有工會盟友撐腰、程序到位，你的陳述清楚有力，調查方向開始對你有利。' },
      { label: '自己熬夜整理時序表與對話紀錄，獨力應戰', effects: { hp: -12, trust: 4 }, pressure: -8, octalysis: [2], outcome: '資料很完整，但你燃燒了大量心力，班級這幾天有點失神。' },
      { label: '私下找家長「先把話講開」，想庭外和解', effects: { hp: -8, trust: -4, honor: -3 }, pressure: 12, octalysis: [7], outcome: '繞過程序私下接觸，反被質疑施壓證人，調查更加棘手。' },
      { label: '專心顧班，會議能拖就拖、能不去就不去', effects: { hp: -4, trust: -8 }, pressure: 14, octalysis: [8], outcome: '逃避被視為不配合，委員直接採信對你不利的版本。' },
    ],
  },
  {
    id: 'hr_3', isHearing: true, stage: 3, title: '校事會議・調查結果會議',
    prompt: '調查報告即將定案，這是最後一次說明的機會。一年的清白，就看這場會議。你選擇——',
    choices: [
      { label: '完整呈現整學年的處理脈絡與成長，請委員看見全貌', effects: { hp: -7, trust: 8, honor: 8, roleModel: 5 }, pressure: -22, octalysis: [1, 3], outcome: '你不只自證清白，更讓委員看見一位認真導師的全貌。調查還你公道。' },
      { label: '針對爭議點逐條回應，承認可改進處、守住原則', effects: { hp: -6, trust: 5, honor: 4 }, pressure: -14, octalysis: [3], outcome: '不卑不亢的回應贏得尊重，報告朝「無懲處、續輔導」收尾。' },
      { label: '情緒潰堤，控訴這一年被消耗殆盡', effects: { hp: -8, trust: -2, climate: -2 }, pressure: 4, octalysis: [8], outcome: '委員同情你的處境，但情緒化的陳述無助於釐清事實。' },
      { label: '心灰意冷，表示「隨便你們怎麼判」', effects: { hp: -6, trust: -6, honor: -5 }, pressure: 16, octalysis: [8], outcome: '放棄為自己辯護，報告往最壞的方向定案。' },
    ],
  },
];

// 壓力爆表觸發：停聘調查（不秒殺，重罰後把壓力壓回 60，給翻盤空間）
export const SUSPENSION_BEAT = {
  id: 'hr_suspend', isHearing: true, stage: 99, title: '⛔ 校事會議・停聘調查',
  prompt: '投訴壓力衝破頂點，校事會議啟動停聘調查程序。你被暫時調離導師職務一週，班級交給代理老師。這是最沉重的一擊——但還沒結束。',
  choices: [
    { label: '咬牙撐住，相信清者自清，回來把班級重新接起', effects: { hp: -14, trust: -10, cohesion: -8, honor: -6 }, resetPressureTo: 60, octalysis: [1, 8], outcome: '你挺過了最黑暗的一週。傷得很重，但你還站著——這一年還沒輸。' },
  ],
};

// ───────── 投訴卡（6 張）─────────
export const COMPLAINTS = [
  {
    id: 'cp_1', isComplaint: true, title: '家長投訴・聯絡簿',
    prompt: '一位家長在聯絡簿上寫滿質疑，指控你「偏心、針對我的孩子」。明天還要見面。你怎麼回？',
    choices: [
      { label: '當面具體舉例孩子的進步與你的處理依據，化解誤會', effects: { hp: -4, trust: 5 }, pressure: -8, outcome: '一條條講清楚，家長從敵意轉為理解，投訴沒有上報。' },
      { label: '禮貌回覆但只寫「會多注意」帶過', effects: { hp: -2 }, pressure: 4, outcome: '敷衍的回覆讓家長覺得沒被重視，怨氣繼續累積。' },
      { label: '在群組裡公開回應、要其他家長評理', effects: { hp: -3, trust: -6, climate: -3 }, pressure: 12, outcome: '把私事攤上檯面，演變成家長群組論戰，校方開始關切。' },
    ],
  },
  {
    id: 'cp_2', isComplaint: true, title: '家長投訴・打電話到校長室',
    prompt: '家長略過你，直接打電話到校長室告狀。校長把你找去了解狀況。你的第一反應是——',
    choices: [
      { label: '主動向校長完整說明來龍去脈，請校長放心', effects: { hp: -4, trust: 6, honor: 3 }, pressure: -10, outcome: '坦然又有條理，校長挺你，這通投訴電話反而成了你的加分題。' },
      { label: '先承認自己沒先跟家長溝通好，再說明', effects: { hp: -3, trust: 3 }, pressure: -4, outcome: '誠懇認下溝通疏漏，校長要你補上親師對話，事情緩和。' },
      { label: '抱怨家長越級、要校長主持公道', effects: { hp: -5, trust: -4 }, pressure: 10, outcome: '校長感受到你的防衛，留下「親師關係待加強」的印象。' },
    ],
  },
  {
    id: 'cp_3', isComplaint: true, title: '家長投訴・指控體罰',
    prompt: '你只是請學生罰站反省，卻被家長指控「體罰」，揚言要投書教育局。這是會牽動校事會議的紅線。怎麼處理？',
    choices: [
      { label: '立刻記錄事件、調出監視器、依正向管教程序說明', effects: { hp: -6, trust: 6, honor: 5 }, pressure: -12, octalysis: [4], outcome: '證據與程序站在你這邊，指控站不住腳，危機解除。' },
      { label: '先向家長道歉安撫，私下了解孩子的感受', effects: { hp: -4, trust: 4 }, pressure: -4, outcome: '柔軟的身段讓家長氣消大半，但「罰站是否過當」仍被記上一筆。' },
      { label: '堅持自己沒錯，等對方真的投書再說', effects: { hp: -5, trust: -5, honor: -4 }, pressure: 16, octalysis: [8], outcome: '被動等待讓事情發酵，家長真的投書教育局，校事會議介入。' },
    ],
  },
  {
    id: 'cp_4', isComplaint: true, title: '家長投訴・學生衝突',
    prompt: '兩個孩子在班上起衝突，雙方家長都覺得你「處理不公」，各自來投訴。兩邊都不滿意。你怎麼站位？',
    choices: [
      { label: '分別約談、攤開事實與處置標準，讓兩邊都看見一致原則', effects: { hp: -5, trust: 5, climate: 3 }, pressure: -9, outcome: '公開透明的同一把尺，讓兩邊家長都無話可說，班風也穩住了。' },
      { label: '各打五十大板，息事寧人就好', effects: { hp: -3, trust: -2 }, pressure: 6, outcome: '和稀泥沒有人服氣，雙方家長都覺得你怕事。' },
      { label: '偏向看起來比較有理的一方，速戰速決', effects: { hp: -4, trust: -5, climate: -3 }, pressure: 12, outcome: '另一方家長認定你偏袒，投訴升級、揚言找民代。' },
    ],
  },
  {
    id: 'cp_5', isComplaint: true, title: '家長投訴・進度與成績',
    prompt: '段考後，多位家長聯名反映「班級平均輸別班」，質疑你帶班不力，要求你說明。壓力鍋來到沸點。',
    choices: [
      { label: '用數據呈現孩子的個別進步與輔導計畫，化質疑為合作', effects: { hp: -5, trust: 5, honor: 4 }, pressure: -10, octalysis: [3], outcome: '你把焦點從排名拉回每個孩子的成長，家長從究責轉為支持。' },
      { label: '承諾加強課後輔導，先把家長安撫下來', effects: { hp: -6, trust: 2 }, pressure: -2, outcome: '加碼輔導換來暫時的平靜，但你的心力又被多榨了一層。' },
      { label: '反駁排名不代表一切、請家長別只看分數', effects: { hp: -4, trust: -4 }, pressure: 10, outcome: '道理沒錯，但此刻說出口像在推責，家長更不買單。' },
    ],
  },
  {
    id: 'cp_6', isComplaint: true, title: '家長投訴・匿名黑函',
    prompt: '臨近學年末，一封匿名黑函寄到校長室與家長會，列了你一長串「罪狀」。你連對手是誰都不知道。',
    choices: [
      { label: '不被激怒，請校方依程序查核，用一整年的紀錄自證', effects: { hp: -6, trust: 7, honor: 6, roleModel: 4 }, pressure: -16, octalysis: [1, 4], outcome: '你一年的累積就是最好的辯護，黑函在事實面前不攻自破。' },
      { label: '私下追查是誰寫的，想討個說法', effects: { hp: -8, trust: -3 }, pressure: 8, octalysis: [7], outcome: '把精力花在抓兇手上，班級被你晾在一邊，壓力反而更大。' },
      { label: '心力交瘁，乾脆遞出調班申請', effects: { hp: -5, trust: -8, cohesion: -6 }, pressure: 14, octalysis: [8], outcome: '逃避的姿態被解讀成心虛，孩子也察覺老師想走了。' },
    ],
  },
];

// ───────── 每週突發事件（困難版每一週都會發生一件事）─────────
// 困難版的核心壓力來源：每週都有一個突發狀況要拆。每個選項標 q：
//   q=2 妥善處理（壓力下降、可平息）／q=1 普通（壓力小漲）／q=0 處理失當（壓力大漲、引爆投訴連鎖）。
// 只要選到 q=0，接下來幾週會被「無止境投訴」連鎖纏上，直到你某一週把它處理好。
export const WEEKLY_INCIDENTS = [
  { id: 'wi_fight', isIncident: true, title: '突發・學生打架', prompt: '下課鐘響沒多久，兩個男生在走廊扭打起來，圍觀的同學越聚越多。你第一時間怎麼處理？',
    choices: [
      { q: 2, label: '立刻分開兩人、確認有無受傷，冷靜後分別了解原因並通知雙方家長', effects: { climate: 3, trust: 3 }, pressure: -4, outcome: '你處置明快又依程序，雙方家長都認可你的公正。' },
      { q: 1, label: '先各記一支警告，要他們自己冷靜', effects: { climate: -1 }, pressure: 3, outcome: '事情壓下來了，但沒人覺得被真正聽見。' },
      { q: 0, label: '當眾大聲斥責、要兩人罰站示眾', effects: { climate: -4, trust: -4 }, pressure: 9, outcome: '公開羞辱的畫面被同學拍下，家長氣得截圖開告。' },
    ] },
  { id: 'wi_line', isIncident: true, title: '突發・家長 LINE 暴怒', prompt: '深夜十一點，一位家長在 LINE 連發十幾則訊息，質問你今天為什麼沒處理他孩子被排擠的事。你怎麼回？',
    choices: [
      { q: 2, label: '隔早第一時間回電、約面談，把今天的觀察與後續計畫講清楚', effects: { trust: 4 }, pressure: -4, outcome: '誠懇又有規劃的回應，讓家長從焦慮轉為信任。' },
      { q: 1, label: '當下簡短回「我明天處理」先止血', effects: {}, pressure: 3, outcome: '暫時安撫，但家長覺得被敷衍。' },
      { q: 0, label: '已讀不回，想說明天再說', effects: { trust: -4 }, pressure: 9, outcome: '隔天家長把對話截圖貼上家長社團，質疑你不理家長。' },
    ] },
  { id: 'wi_injury', isIncident: true, title: '突發・學生受傷', prompt: '體育課一個學生跌倒，手腕腫起來。你必須馬上決定怎麼處理。',
    choices: [
      { q: 2, label: '立即送保健室、依流程通知家長與填寫意外記錄，全程陪同', effects: { trust: 4, honor: 2 }, pressure: -4, outcome: '你依規處置、滴水不漏，家長對你的細心很放心。' },
      { q: 1, label: '先冰敷觀察，下課再通知家長', effects: {}, pressure: 4, outcome: '處理不算錯，但通知慢了讓家長有點不安。' },
      { q: 0, label: '覺得是小傷，叫他自己休息一下', effects: { trust: -5, honor: -3 }, pressure: 10, outcome: '回家才發現是骨裂，家長怒控你延誤就醫。' },
    ] },
  { id: 'wi_bully', isIncident: true, title: '突發・疑似霸凌通報', prompt: '有學生私下告訴你，班上某個孩子長期被嘲笑、排擠。這可能構成校園霸凌，怎麼辦？',
    choices: [
      { q: 2, label: '依校園霸凌防制準則啟動通報與輔導，保護當事人並蒐集事證', effects: { trust: 4, roleModel: 3 }, pressure: -3, outcome: '你依法依程序處理，守住了每一個孩子。' },
      { q: 1, label: '先私下勸導幾個帶頭的同學', effects: { climate: 1 }, pressure: 4, outcome: '表面平息，但沒留下任何處理紀錄。' },
      { q: 0, label: '覺得只是孩子間玩鬧，要被嘲笑的別太敏感', effects: { trust: -5, roleModel: -4 }, pressure: 11, outcome: '受害學生家長得知後，控訴你吃案、未通報。' },
    ] },
  { id: 'wi_phone', isIncident: true, title: '突發・手機沒收爭議', prompt: '你依校規沒收一名學生上課玩的手機，他家長氣沖沖打來說你「侵犯財產權」。',
    choices: [
      { q: 2, label: '依校規與班級公約說明處置，並約定領回方式，留下紀錄', effects: { honor: 3, trust: 2 }, pressure: -3, outcome: '規則清楚、程序到位，家長無話可說。' },
      { q: 1, label: '先把手機還他，避免衝突', effects: {}, pressure: 4, outcome: '息事寧人，但班上規矩開始鬆動。' },
      { q: 0, label: '回嗆家長「不爽去跟校長講」', effects: { trust: -5, climate: -2 }, pressure: 10, outcome: '家長真的投訴到校長室，還錄了音。' },
    ] },
  { id: 'wi_cheat', isIncident: true, title: '突發・段考作弊', prompt: '監考時你發現一名平時乖巧的學生作弊。處理要兼顧校規與孩子的自尊。',
    choices: [
      { q: 2, label: '依規處理該科成績，私下了解原因並輔導，保留他的尊嚴', effects: { roleModel: 4, trust: 2 }, pressure: -3, outcome: '你守住原則也接住孩子，家長反而感謝你的方式。' },
      { q: 1, label: '當場沒收考卷、記過了事', effects: { climate: -1 }, pressure: 4, outcome: '依規處理，但孩子覺得被當眾定罪。' },
      { q: 0, label: '在全班面前點名羞辱、要他公開道歉', effects: { trust: -5, climate: -3 }, pressure: 10, outcome: '孩子崩潰大哭，家長控訴你公開羞辱、傷害身心。' },
    ] },
  { id: 'wi_fee', isIncident: true, title: '突發・班費爭議', prompt: '有家長質疑這學期班費收支不清，要求你交代每一筆錢的去向。',
    choices: [
      { q: 2, label: '攤開完整收支明細與收據，主動公開讓全班家長檢視', effects: { trust: 4, honor: 2 }, pressure: -4, outcome: '帳目透明清楚，質疑瞬間瓦解，反而贏得信任。' },
      { q: 1, label: '口頭說明大概用途', effects: {}, pressure: 4, outcome: '講是講了，但沒有單據，家長半信半疑。' },
      { q: 0, label: '覺得被冒犯，拒絕「被當賊查」', effects: { trust: -5 }, pressure: 10, outcome: '拒查的態度坐實了家長的懷疑，投訴升級。' },
    ] },
  { id: 'wi_emotion', isIncident: true, title: '突發・學生情緒崩潰', prompt: '一個學生在課堂上突然情緒失控、嚎啕大哭，全班都嚇到了。你怎麼接住這一刻？',
    choices: [
      { q: 2, label: '先穩住全班、把孩子帶到安靜處陪伴，聯繫輔導室與家長', effects: { climate: 3, roleModel: 4 }, pressure: -3, outcome: '你溫柔又專業地接住孩子，家長深深感謝。' },
      { q: 1, label: '請他先到走廊冷靜，繼續上課', effects: {}, pressure: 4, outcome: '課是上完了，但孩子覺得被晾在一邊。' },
      { q: 0, label: '要他「別在課堂上鬧情緒」', effects: { trust: -4, climate: -3 }, pressure: 9, outcome: '家長得知後，控訴你漠視孩子的求救訊號。' },
    ] },
  { id: 'wi_trip', isIncident: true, title: '突發・校外教學安全', prompt: '校外教學途中，一個孩子脫隊不見了十分鐘。你怎麼處理這個驚險時刻？',
    choices: [
      { q: 2, label: '立即啟動分組清點、通報領隊與家長，冷靜協尋並安撫其他學生', effects: { trust: 4, honor: 2 }, pressure: -3, outcome: '你臨危不亂、程序滴水不漏，孩子很快找回，家長後怕又信服。' },
      { q: 1, label: '自己先四處找，找到再說', effects: {}, pressure: 5, outcome: '孩子找回了，但你沒同步通報，家長覺得草率。' },
      { q: 0, label: '等他自己回來，繼續行程', effects: { trust: -6, honor: -3 }, pressure: 11, outcome: '家長事後得知你毫無作為，怒不可遏地投訴。' },
    ] },
  { id: 'wi_post', isIncident: true, title: '突發・班級貼文外流', prompt: '你在班級臉書社團分享的活動照，被家長截圖質疑「沒經過同意就公開我孩子的臉」。',
    choices: [
      { q: 2, label: '立即下架照片、誠懇致歉並說明往後拍攝同意流程', effects: { trust: 3 }, pressure: -3, outcome: '你迅速負責的態度，把一場肖像權風波化於無形。' },
      { q: 1, label: '把那張照片打碼處理', effects: {}, pressure: 4, outcome: '處理了，但沒說明流程，家長仍有疑慮。' },
      { q: 0, label: '覺得家長小題大作、堅持不撤', effects: { trust: -5 }, pressure: 10, outcome: '家長以侵犯肖像權為由，向學校正式申訴。' },
    ] },
  { id: 'wi_absent', isIncident: true, title: '突發・頻繁缺曠', prompt: '一個學生最近常常無故缺席，家長卻說「我每天都有送他出門」。中間出了什麼事？',
    choices: [
      { q: 2, label: '依中輟預警機制通報、家訪了解狀況，連結輔導資源', effects: { trust: 4, roleModel: 3 }, pressure: -3, outcome: '你及時拉住了一個可能墜落的孩子，家長感激涕零。' },
      { q: 1, label: '先打電話提醒家長盯緊一點', effects: {}, pressure: 4, outcome: '提醒了，但沒進一步追查，問題還在。' },
      { q: 0, label: '直接記曠課，當作學生自己的問題', effects: { trust: -4, roleModel: -3 }, pressure: 9, outcome: '後來才知孩子在外出事，家長控訴你失職未通報。' },
    ] },
  { id: 'wi_seat', isIncident: true, title: '突發・座位糾紛', prompt: '你重新排座位後，一位家長堅持孩子被安排到「壞學生」旁邊是針對，要求立刻換回。',
    choices: [
      { q: 2, label: '說明排座的教育考量與輪換原則，邀家長一起關注孩子適應', effects: { trust: 3, climate: 2 }, pressure: -3, outcome: '你把標籤化的對話拉回成長，家長理解並配合。' },
      { q: 1, label: '直接幫他換到前面省麻煩', effects: {}, pressure: 4, outcome: '換了，但其他家長開始跟進要求特殊待遇。' },
      { q: 0, label: '回家長「每個孩子在我眼裡都一樣，不換」', effects: { trust: -3, climate: -2 }, pressure: 8, outcome: '生硬的回應被解讀成不通人情，家長到處抱怨。' },
    ] },
];

// ───────── 無止境投訴連鎖（處理失當後，一週接一週纏上來，直到你拆掉它）─────────
// chain 越高，串連越大、壓力越重；只要某一週選到 q=2「正面處理」即可掐斷（chain 歸零）。
const ESCALATION_TIERS = [
  { who: '家長在班級群組公開點名', lead: '昨天那件事沒處理好，那位家長在班級 LINE 群組公開點名你，其他家長開始跟風發問。' },
  { who: '幾位家長串連要求說明', lead: '事情發酵了。幾位家長串連起來，連署要求你到班親會公開說明，否則就往上反映。' },
  { who: '投訴鬧上爆料社團', lead: '有人把整件事貼上地方爆料社團，標題聳動、留言一面倒，學校開始接到關切電話。' },
  { who: '家長投書教育局', lead: '家長正式投書教育局與議員服務處，並揚言要求啟動校事會議調查。事情已經滾出校門。' },
];

// 依連鎖深度產生一張「投訴升級」beat：選對掐斷、選錯繼續滾大。
export function escalationBeat(chain) {
  const t = ESCALATION_TIERS[Math.min(chain - 1, ESCALATION_TIERS.length - 1)];
  const up = 6 + chain * 2;   // 處理失當時壓力漲幅隨連鎖加重
  return {
    id: `esc_${chain}`, isComplaint: true, escalation: true, title: `📢 投訴連鎖・第 ${chain} 波`,
    prompt: `${t.lead}\n你要怎麼止血？`,
    choices: [
      { q: 2, label: '正面回應：公開說明、提出佐證與改善方案，把事情攤在陽光下', effects: { trust: 4, honor: 3, hp: -6 }, pressure: -(8 + chain * 2), octalysis: [3, 4], outcome: '你不迴避、拿出證據與誠意，這一波投訴在事實面前止住了。連鎖被掐斷。' },
      { q: 1, label: '低調道歉先安撫，盼風頭過去', effects: { hp: -5 }, pressure: Math.round(up * 0.4), octalysis: [8], outcome: '暫時壓下去了，但沒有真正解決，火苗還在悶燒。' },
      { q: 0, label: '硬碰硬／不理會，覺得清者自清', effects: { trust: -5, hp: -5 }, pressure: up, octalysis: [8], outcome: '沉默與對抗只讓事情越滾越大，下一波來得更兇。' },
    ],
  };
}

// beat 轉換（與題目／事件卡同放 week.days，靠 isHearing / isComplaint / isIncident 分流）
export function hearingToBeat(h) { return { ...h }; }
export function complaintToBeat(cp) { return { ...cp }; }

// 小型決定性 hash：用 (week, seed) 穩定選一個每週事件，避免相鄰兩週重複。
function pickIncident(weekIndex, runSeed) {
  let h = (runSeed >>> 0) ^ 0x9e3779b9;
  h = Math.imul(h ^ weekIndex, 0x85ebca6b) >>> 0;
  const i = h % WEEKLY_INCIDENTS.length;
  return { ...WEEKLY_INCIDENTS[i] };
}

// 困難版：回傳某週要插入的 beats（含插在第幾天之前）。
//   - 投訴連鎖進行中（chain>0）→ 該週插「投訴升級」beat（取代一般突發事件）。
//   - 否則 → 插當週的突發事件。
//   - 會議週（11/23/34）額外插一場校事會議。
// 會議插第 3 天、突發事件／投訴插第 2 天。
export function hardBeatsForWeek(weekIndex, runSeed = 1, chain = 0) {
  const out = [];
  if (chain > 0) {
    out.push({ day: 2, beat: escalationBeat(chain) });
  } else {
    out.push({ day: 2, beat: pickIncident(weekIndex, runSeed) });
  }
  if (HEARING_WEEKS[weekIndex] != null) {
    out.push({ day: 3, beat: hearingToBeat(HEARINGS[HEARING_WEEKS[weekIndex]]) });
  }
  return out;
}
