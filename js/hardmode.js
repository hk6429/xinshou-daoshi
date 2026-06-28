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

// beat 轉換（與題目／事件卡同放 week.days，靠 isHearing / isComplaint 分流）
export function hearingToBeat(h) { return { ...h }; }
export function complaintToBeat(cp) { return { ...cp }; }

// 困難版：回傳某週要插入的 beats（含插在第幾天之前）。會議插第 3 天、投訴插第 2 天。
export function hardBeatsForWeek(weekIndex) {
  const out = [];
  if (COMPLAINT_WEEKS[weekIndex] != null) {
    out.push({ day: 2, beat: complaintToBeat(COMPLAINTS[COMPLAINT_WEEKS[weekIndex]]) });
  }
  if (HEARING_WEEKS[weekIndex] != null) {
    out.push({ day: 3, beat: hearingToBeat(HEARINGS[HEARING_WEEKS[weekIndex]]) });
  }
  return out;
}
