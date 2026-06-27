// 新手導師養成記 — 遊戲資料層
// 設計：每週 5 天挑戰，每天一張 4 選項情境卡（1 正解＋3 誘答），正解嚴格綁法源。
// 平時週每天從「法規題庫池」依難度帶＋種子抽題（每輪不同＝八角 C7 未知）。
// 里程碑週為手寫 5 拍劇情，把法規織進高張力情境。
import { EXTRA_QUESTIONS } from './questionBank.js';

export const MILESTONE_INDICES = [0, 1, 3, 5, 8, 12, 19];
export const DAYS_PER_WEEK = 5;

// ───────────────────────────── 法規題庫池 ─────────────────────────────
// 每題：id / cat 分類 / diff 難度1-3 / scenario 情境 / law 法源 / explain 解析 /
//       choices[4]（其一 correct:true；effects 狀態效果；octalysis 充能核心）
// 八角核心：1使命 2成就 3創造 4擁有 5關聯 6迫切 7未知 8損失
export const LEGAL_POOL = [
  // ── 聘任 / 導師權益 ──
  {
    id: 'q_duty', cat: '聘任', diff: 1,
    scenario: '校長請你接任本班導師，你還沒答應。下列做法何者最妥？',
    law: '教師法 §32 Ⅰ④、Ⅱ',
    explain: '專任教師均負有擔任導師之法定義務，宜正面承接並了解校內遴選、輪退與免任機制。',
    choices: [
      { label: '爽快答應接任，辦法等開學再慢慢熟', tier: 'good', note: '願意承擔值得肯定，但先懂遴選辦法能少踩雷', effects: { honor: 3, hp: -2 }, octalysis: [1] },
      { label: '依法承接導師並先弄懂遴選輪退辦法', tier: 'best', effects: { honor: 5, roleModel: 3, hp: -2 }, octalysis: [1, 4] },
      { label: '私下請同事掛名頂替，自己輕鬆些', tier: 'illegal', note: '實務偶有人這樣喬，卻違反導師法定義務與遴選程序', effects: { honor: -5, trust: -3 }, octalysis: [8] },
      { label: '主張導師全憑自願，當場婉謝接任', tier: 'wrong', effects: { honor: -6, trust: -3 }, octalysis: [] },
      { label: '要求學校先加倍加給，再考慮接任', tier: 'wrong', effects: { honor: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_admin_dual', cat: '聘任', diff: 2,
    scenario: '你同時被指派兼任行政組長又要當導師。較妥的做法？',
    law: '高級中等學校訂定教師擔任導師辦法及聘任導師注意事項',
    explain: '辦法明定兼任行政職務之教師不宜兼任導師，宜向學校反映協調，避免兩頭燒。',
    choices: [
      { label: '依規向學校反映，協調讓導師另派', tier: 'best', effects: { honor: 3, hp: 2 }, octalysis: [4] },
      { label: '兩邊先都接下，學期中再找機會調整', tier: 'good', note: '務實過渡可以，但久拖恐顧此失彼，列為次佳', effects: { hp: -3, climate: -1 }, octalysis: [4] },
      { label: '兩頭都扛下，靠每天加班硬撐到底', tier: 'illegal', note: '常見的硬撐文化，卻違反不宜兼任的規定且傷身', effects: { hp: -8, climate: -3 }, octalysis: [8] },
      { label: '直接辭去導師，只留行政一職就好', tier: 'wrong', effects: { honor: -2 }, octalysis: [] },
      { label: '主張行政與導師本就該綁在一起兼', tier: 'wrong', effects: { honor: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_pay_amount', cat: '聘任', diff: 2,
    scenario: '期初你要試算本班導師職務加給，怎麼處理最正確？',
    law: '公立中小學校導師及特殊教育職務加給表（114 年 9 月起）',
    explain: '自 114 年 9 月起導師加給由 3,000 元調高為每月 4,000 元，應依現行新制計算。',
    choices: [
      { label: '依現行新制以每月四千元為基準試算', tier: 'best', effects: { honor: 2 }, octalysis: [4] },
      { label: '先用四千元概算，月底再與出納核對', tier: 'good', note: '先估後核可行，但能一次查定數更省事，列次佳', effects: { honor: 1 }, octalysis: [4] },
      { label: '沿用舊習慣，照三千元的舊制去計算', tier: 'illegal', note: '不少人沿用舊數字，卻已違反 114/9 起的現行規定', effects: { honor: -2 }, octalysis: [8] },
      { label: '憑印象隨手填個五千元，直接上報', tier: 'wrong', effects: { honor: -2 }, octalysis: [] },
      { label: '索性整筆交給學校自行核發就好', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },
  {
    id: 'q_pay_leave', cat: '聘任', diff: 3,
    scenario: '你本學年事假已累計達九天，導師加給該怎麼算？',
    law: '公立中小學校導師職務加給支給基準',
    explain: '事假／家庭照顧假累計超過 7 日者，「超過天數」不發導師加給；病假、婚喪、公假期間仍照常支領。',
    choices: [
      { label: '超過七日的那兩天扣發，其餘照常領', tier: 'best', effects: { honor: 2 }, octalysis: [4] },
      { label: '先全額照領，超額的部分月底再退補', tier: 'good', note: '事後校正可行，但當月就先扣超額更精準，列次佳', effects: { honor: 1 }, octalysis: [4] },
      { label: '心想請過假，整月加給索性全退掉', tier: 'illegal', note: '多扣自己看似省事，卻不符支給基準的實際算法', effects: {}, octalysis: [8] },
      { label: '主張事假毫不影響，整月全額照領', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '主張超過七日後當月加給一律減半', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },
  {
    id: 'q_pay_substitute', cat: '聘任', diff: 3,
    scenario: '你請病假，由代理導師代了半天班，加給怎麼算？',
    law: '導師職務加給支給基準（代理規定）',
    explain: '代理導師自實際代理之「日」起按日支領導師加給，「半日」不予支給；原導師病假期間仍照領。',
    choices: [
      { label: '半日依規免支給，原導師照常支領', tier: 'best', effects: { honor: 2 }, octalysis: [4] },
      { label: '半日先記下來，湊滿整日再併同申報', tier: 'good', note: '累計申報可行，但半日本就不予支給，列次佳', effects: { honor: 1 }, octalysis: [4] },
      { label: '依人情半天也比照整日，折半發給', tier: 'illegal', note: '看似公道的折半做法，卻不符半日不予支給規定', effects: {}, octalysis: [8] },
      { label: '代理一律按整月計，代半天也算月', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '原導師一請假就全額停發，轉給代理', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },

  // ── 正向管教 / 違法處罰界線 ──
  {
    id: 'q_talk', cat: '管教', diff: 1,
    scenario: '小宇上課一直講話干擾秩序，你該怎麼管教？',
    law: '教師輔導與管教學生辦法注意事項 附表二',
    explain: '口頭糾正、要求書面自省、調整座位、通知家長配合等屬合法正向管教；打手心、罰跪、罰寫課文、公開羞辱皆違法。',
    choices: [
      { label: '口頭糾正並調整座位，必要時請自省', tier: 'best', effects: { climate: 4, roleModel: 3, hp: -1 }, octalysis: [1] },
      { label: '先穩住場面，下課再私下找他談一談', tier: 'good', note: '不當眾起衝突可取，但放任當下恐影響全班，列次佳', effects: { climate: 1, hp: -1 }, octalysis: [1] },
      { label: '罰他當眾罰站一整節，藉此立威', tier: 'illegal', note: '老一輩常用的立威法，卻屬違法之過度罰站', effects: { trust: -6, roleModel: -5 }, octalysis: [8] },
      { label: '直接打他手心三下，讓他記取教訓', tier: 'wrong', effects: { trust: -12, roleModel: -10 }, octalysis: [8] },
      { label: '罰他把整課課文抄寫整整二十回', tier: 'wrong', effects: { trust: -6, climate: -4 }, octalysis: [8] },
    ],
  },
  {
    id: 'q_copywork', cat: '管教', diff: 2,
    scenario: '阿哲又沒交作業，你想罰他抄課文當處罰。妥當嗎？',
    law: '教師輔導與管教學生辦法注意事項 附表一',
    explain: '「非基於教學目的」之罰寫、抄課文屬違法處罰。應改以補完作業＋書面自省等正向方式處理。',
    choices: [
      { label: '改要求補完作業並寫一份書面自省', tier: 'best', effects: { roleModel: 4, climate: 3, hp: -1 }, octalysis: [1] },
      { label: '請他留下把作業補完，暫緩其他處置', tier: 'good', note: '聚焦補進度可取，但少了反思引導，列為次佳', effects: { roleModel: 2, hp: -1 }, octalysis: [1] },
      { label: '罰他抄寫課文十遍，順便練一練字', tier: 'illegal', note: '罰寫看似溫和又能練字，卻屬非教學目的之違法處罰', effects: { trust: -6, roleModel: -5 }, octalysis: [8] },
      { label: '罰他午休罰站，站到交出作業為止', tier: 'wrong', effects: { trust: -7, climate: -4 }, octalysis: [8] },
      { label: '當眾宣告他是全班最懶散的學生', tier: 'wrong', effects: { trust: -10, roleModel: -8 }, octalysis: [8] },
    ],
  },
  {
    id: 'q_humiliate', cat: '管教', diff: 2,
    scenario: '想整頓秩序，你打算在公布欄貼「違規排行榜」。妥當嗎？',
    law: '教師輔導與管教學生辦法注意事項 附表一（不當管教）',
    explain: '公開羞辱屬不當管教、違反人格發展權。可改私下提醒、個別輔導與正向獎勵機制。',
    choices: [
      { label: '改私下個別提醒，並設置正向獎勵', tier: 'best', effects: { roleModel: 5, climate: 4, hp: -1 }, octalysis: [1, 3] },
      { label: '改貼正向進步榜，只公開表揚優點', tier: 'good', note: '正向公開較佳，但仍須留意比較壓力，列為次佳', effects: { climate: 3, roleModel: 2 }, octalysis: [2] },
      { label: '只寫座號隱去姓名，照樣貼違規榜', tier: 'illegal', note: '隱去姓名看似折衷，全班仍會對號入座，屬不當管教', effects: { trust: -4, climate: -3 }, octalysis: [8] },
      { label: '在班級群組公開逐一點名警告學生', tier: 'wrong', effects: { trust: -8, climate: -4 }, octalysis: [8] },
      { label: '上課時當著全班的面斥責羞辱他', tier: 'wrong', effects: { trust: -9, roleModel: -8 }, octalysis: [8] },
    ],
  },
  {
    id: 'q_fine', cat: '管教', diff: 2,
    scenario: '你想立「上課講話罰十元」的規矩充作班費。可以嗎？',
    law: '教師輔導與管教學生辦法注意事項（財產權限制）',
    explain: '禁止以「罰錢」作為輔導管教手段（損壞公物之賠償不在此限）。罰款管教違法。',
    choices: [
      { label: '以正向管教代替，公物損壞才需賠償', tier: 'best', effects: { roleModel: 4, honor: 2 }, octalysis: [4] },
      { label: '改成違規記點，集滿再以服務學習抵', tier: 'good', note: '以服務替代罰款可取，但設計要避免變相懲罰，列次佳', effects: { roleModel: 3, climate: 2 }, octalysis: [3] },
      { label: '小額罰款充作班費，金額小無傷大雅', tier: 'illegal', note: '小額罰款很多班沿用，卻違反不得以罰錢管教之規定', effects: { trust: -7, roleModel: -5 }, octalysis: [8] },
      { label: '拿罰來的錢去獎勵表現乖巧的同學', tier: 'wrong', effects: { trust: -8, climate: -3 }, octalysis: [8] },
      { label: '事先取得家長同意後就放心地開罰', tier: 'wrong', effects: { trust: -5 }, octalysis: [8] },
    ],
  },
  {
    id: 'q_force', cat: '管教', diff: 3,
    scenario: '小傑情緒失控，拿美工刀作勢要劃自己手臂。你怎麼做？',
    law: '教師輔導與管教學生辦法注意事項（強制措施）',
    explain: '學生有自傷、暴力攻擊他人或破壞校園安全之「現行行為」時，教師得採取合理之「物理強制力」予以制止而不受罰。',
    choices: [
      { label: '立即以合理物理強制力制止他自傷', tier: 'best', effects: { cohesion: 5, roleModel: 5, hp: -4 }, octalysis: [1, 6] },
      { label: '一邊安撫穩住他，一邊請人快求援', tier: 'good', note: '兼顧安全可取，但自傷迫在眉睫仍須先制止，列次佳', effects: { cohesion: 3, roleModel: 3, hp: -3 }, octalysis: [5] },
      { label: '為求自保，全程只站遠處出一張嘴', tier: 'illegal', note: '怕擔責的退縮看似保險，卻置學生安全於不顧，於法不合', effects: { trust: -8, roleModel: -6 }, octalysis: [8] },
      { label: '先離開現場去辦公室找主任後回來', tier: 'wrong', effects: { trust: -10, cohesion: -6 }, octalysis: [8] },
      { label: '先掏手機錄影存證，再等他冷靜下來', tier: 'wrong', effects: { trust: -9, roleModel: -7 }, octalysis: [8] },
    ],
  },
  {
    id: 'q_basicedu', cat: '管教', diff: 1,
    scenario: '同事爭論體罰問題，學生到底受哪些權利保障？',
    law: '教育基本法 §8 Ⅱ',
    explain: '保障學生之學習權、受教育權、身體自主權及人格發展權，並使學生不受任何體罰及言語霸凌。',
    choices: [
      { label: '學習、受教育、身體自主與人格發展權', tier: 'best', effects: { roleModel: 3 }, octalysis: [1] },
      { label: '以學生身心健康與受教權益為核心保障', tier: 'good', note: '方向正確，但漏了身體自主與人格發展，較不完整，列次佳', effects: { roleModel: 1 }, octalysis: [1] },
      { label: '只要管教適度，輕微體罰仍算合法手段', tier: 'illegal', note: '社會上仍有人覺得適度體罰沒關係，實則明文禁止', effects: { roleModel: -5 }, octalysis: [8] },
      { label: '主張只保障受教育權，其餘各校自訂', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '主張言語嚴厲管教仍屬合理範圍', tier: 'wrong', effects: { roleModel: -4 }, octalysis: [8] },
    ],
  },

  // ── 校園通報（法律責任）──
  {
    id: 'q_report_time', cat: '通報', diff: 3,
    scenario: '你得知班上疑似發生性騷擾事件，你第一步該怎麼做？',
    law: '校園性侵害性騷擾性霸凌防治準則',
    explain: '現職教師知悉校園性平事件，須於 24 小時內完成法定通報（通報校內及社政系統），不以查證屬實為前提。',
    choices: [
      { label: '二十四小時內完成校內及社政法定通報', tier: 'best', effects: { honor: 6, trust: 5, hp: -3 }, octalysis: [6, 1] },
      { label: '先穩住當事學生，同步立刻完成通報', tier: 'good', note: '兼顧安撫很好，但通報不能因安撫而延後，列為次佳', effects: { honor: 4, trust: 3, hp: -3 }, octalysis: [5] },
      { label: '先低調查清是非，再決定是否通報', tier: 'illegal', note: '先查證再報看似負責，卻違反知悉即須通報的規定', effects: { trust: -12, honor: -10, roleModel: -6 }, octalysis: [8] },
      { label: '通知雙方家長自行處理，私下了結', tier: 'wrong', effects: { trust: -10, honor: -8 }, octalysis: [8] },
      { label: '想再觀察幾天看看，先擱著緩一緩', tier: 'wrong', effects: { trust: -8, honor: -6 }, octalysis: [8] },
    ],
  },
  {
    id: 'q_report_penalty', cat: '通報', diff: 3,
    scenario: '同事勸你「事情不大，先壓著別通報」。你怎麼判斷？',
    law: '校園性侵害性騷擾性霸凌防治準則',
    explain: '延誤或隱匿通報依法最高可處新臺幣 15 萬元罰鍰，情節嚴重者將面臨解聘——應立即通報。',
    choices: [
      { label: '知道隱匿最高罰十五萬，即刻依法通報', tier: 'best', effects: { honor: 6, roleModel: 4, hp: -2 }, octalysis: [1, 8] },
      { label: '先回報主管討論，仍堅持如期通報', tier: 'good', note: '求助主管可取，但通報主體責任仍在自己，列為次佳', effects: { honor: 3, hp: -1 }, octalysis: [5] },
      { label: '聽資深同事的話，先壓著觀望再說', tier: 'illegal', note: '從眾不報是常見壓力，卻可能挨罰甚至面臨解聘', effects: { honor: -10, roleModel: -8 }, octalysis: [8] },
      { label: '主張通報是學校的事，與我無關', tier: 'wrong', effects: { honor: -7, trust: -5 }, octalysis: [8] },
      { label: '想事後再補通報，應該就沒有責任', tier: 'wrong', effects: { honor: -6 }, octalysis: [8] },
    ],
  },
  {
    id: 'q_child_abuse', cat: '通報', diff: 2,
    scenario: '你發現小傑身上有疑似受虐傷痕，他支吾其詞。怎麼做？',
    law: '兒童及少年福利與權益保障法 §53',
    explain: '教師知悉兒少有遭遺棄、虐待、家暴等情事，須於 24 小時內進行責任通報，不以「查證屬實」為前提。',
    choices: [
      { label: '二十四小時內完成責任通報與校內輔導', tier: 'best', effects: { trust: 6, roleModel: 5, hp: -3 }, octalysis: [1, 6] },
      { label: '先溫和關心他，並同步啟動責任通報', tier: 'good', note: '先建立信任很好，但通報不能等他願意說，列為次佳', effects: { trust: 4, roleModel: 3, hp: -3 }, octalysis: [5] },
      { label: '先私下問清楚，確認真被打才通報', tier: 'illegal', note: '想問明白再報很自然，卻違反知悉即須通報的義務', effects: { trust: -10, roleModel: -8 }, octalysis: [8] },
      { label: '為免誤會家長，先觀察個一兩禮拜', tier: 'wrong', effects: { trust: -9, roleModel: -7 }, octalysis: [8] },
      { label: '把事情交給輔導老師，自己樂得清閒', tier: 'wrong', effects: { trust: -6, honor: -4 }, octalysis: [8] },
    ],
  },
  {
    id: 'q_report_target', cat: '通報', diff: 2,
    scenario: '要替校園性平事件做「法定通報」，你會通報到哪裡？',
    law: '校園性侵害性騷擾性霸凌防治準則',
    explain: '法定通報須同時通報「校內」權責單位與「社政」系統，缺一不可。',
    choices: [
      { label: '同時通報校內權責單位及社政系統', tier: 'best', effects: { honor: 4 }, octalysis: [4] },
      { label: '先報校內單位，再請學校幫忙轉社政', tier: 'good', note: '由校協助可行，但教師仍應確認社政有收到，列次佳', effects: { honor: 2 }, octalysis: [4] },
      { label: '通報學務處就好，社政那端請學校轉', tier: 'illegal', note: '只報校內是常見疏漏，卻不符雙軌通報的規定', effects: { honor: -4 }, octalysis: [8] },
      { label: '只通報社政系統，校內就略過知會', tier: 'wrong', effects: { honor: -3 }, octalysis: [8] },
      { label: '通報到警察局做完筆錄就算結案', tier: 'wrong', effects: { honor: -3 }, octalysis: [8] },
    ],
  },

  // ── 考核 / 請假（現職權益）──
  {
    id: 'q_grade_1', cat: '考核', diff: 2,
    scenario: '你今年事病假併計十二天，年終考核大概落在第幾款？',
    law: '公立高級中等以下學校教師成績考核辦法 §4 Ⅰ①',
    explain: '事病假併計未超過 14 日、且教學認真服務熱誠者，適用第 1 款：晉級並給一個月獎金。',
    choices: [
      { label: '第一款，晉級並核發一個月薪的獎金', tier: 'best', effects: { honor: 3 }, octalysis: [2, 4] },
      { label: '應屬第一款，仍以教學考評為準', tier: 'good', note: '提醒考評是對的，但天數已達第一款門檻，列為次佳', effects: { honor: 1 }, octalysis: [4] },
      { label: '保險起見自認第二款，少領半月薪', tier: 'illegal', note: '自我看低看似謙虛，卻不符第一款應有的核給標準', effects: {}, octalysis: [8] },
      { label: '主張請過假就一定落到留原薪款', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '主張事病假天數對考核款別無影響', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },
  {
    id: 'q_grade_2', cat: '考核', diff: 3,
    scenario: '某老師事病假併計二十天，考核結果較可能是哪一款？',
    law: '教師成績考核辦法 §4 Ⅰ②',
    explain: '事病假併計「超過 14 日、未逾 28 日」者，適用第 2 款：晉級並給半個月獎金。',
    choices: [
      { label: '第二款，晉級並核發半個月薪的獎金', tier: 'best', effects: { honor: 2 }, octalysis: [4] },
      { label: '應屬第二款，仍須併看整體教學考評', tier: 'good', note: '提醒併看考評可取，但天數明確落第二款，列為次佳', effects: { honor: 1 }, octalysis: [4] },
      { label: '保守起見先當第三款，自認留原薪', tier: 'illegal', note: '先往壞處想很常見，卻不符二十天應適用的款別', effects: {}, octalysis: [8] },
      { label: '一律算第一款，照樣領一個月獎金', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '直接認定一定會被記上一支申誡', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },
  {
    id: 'q_grade_3', cat: '考核', diff: 3,
    scenario: '哪種情形會落到考核「留原薪」（第四條第三款）？',
    law: '教師成績考核辦法 §4 Ⅰ③',
    explain: '事病假併計超過 28 日（不含延長病假），或教學有重大疏失者，留原薪。',
    choices: [
      { label: '事病假逾二十八日，或教學有重大缺失', tier: 'best', effects: { honor: 2 }, octalysis: [4, 8] },
      { label: '長期請假且教學明顯荒廢，影響班務', tier: 'good', note: '抓到重點，但精準門檻是逾二十八日，敘述較鬆，列次佳', effects: { honor: 1 }, octalysis: [4] },
      { label: '只要當年請過病假，就一律留原薪', tier: 'illegal', note: '把請病假等同被扣薪是常見誤解，與規定不符', effects: {}, octalysis: [8] },
      { label: '主張事病假超過十四日就留原薪', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '把延長病假的天數也全部併入計算', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },
  {
    id: 'q_leave_quota', cat: '考核', diff: 1,
    scenario: '你想安排一年的請假額度，事假病假各有幾天？',
    law: '教師請假規則',
    explain: '身為導師，你每學年有事假 7 日、病假 28 日（事假含家庭照顧假、身心調適假併計）；因住院或重大傷病得另依程序請延長病假。',
    choices: [
      { label: '一學年事假七日，病假二十八日', tier: 'best', effects: { honor: 2 }, octalysis: [4] },
      { label: '依此額度規劃，重大傷病走延長病假', tier: 'good', note: '加上延長病假的補充很實用，但屬補述，列為次佳', effects: { honor: 1 }, octalysis: [4] },
      { label: '想說事病假可互相挪用，彈性調度', tier: 'illegal', note: '混用兩種假別在實務上常見，卻不符各自獨立的額度', effects: {}, octalysis: [8] },
      { label: '主張事病假合併起來共二十八日', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '主張事假十四日病假十四日各算', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },
  {
    id: 'q_long_sick', cat: '考核', diff: 2,
    scenario: '你因重大傷病須住院長期治療，超過病假額度怎麼辦？',
    law: '教師請假規則（延長病假）',
    explain: '因住院或重大傷病者，得依核准程序申請「延長病假」；延長病假天數不併入考核第 3 款計算。',
    choices: [
      { label: '依核准程序申辦延長病假安心養病', tier: 'best', effects: { hp: 4 }, octalysis: [4] },
      { label: '先請延長病假，並主動向學校交接', tier: 'good', note: '主動交接很貼心，但屬加分項，核心是先請延長病假', effects: { hp: 3, trust: 1 }, octalysis: [5] },
      { label: '為免麻煩學校，自己改請事假硬撐', tier: 'illegal', note: '不想造成困擾很常見，卻錯失應有的延長病假權益', effects: { hp: -6 }, octalysis: [8] },
      { label: '主張超過額度就只能選擇辦離職', tier: 'wrong', effects: { hp: -5 }, octalysis: [] },
      { label: '索性直接曠職，等學校自己來處理', tier: 'wrong', effects: { honor: -6 }, octalysis: [8] },
    ],
  },

  // ── 救濟 / 申訴 ──
  {
    id: 'q_appeal_time', cat: '救濟', diff: 2,
    scenario: '你收到一張自認不公的考核記過通知，想申訴。時限？',
    law: '教師法 第九章；教師申訴評議委員會組織及評議辦法',
    explain: '對考核不公、不當記過、不合理課務調動等學校行政措施，得於收到通知之「次日起 30 日內」提起申訴。',
    choices: [
      { label: '收到通知次日起三十日內提起申訴', tier: 'best', effects: { honor: 4, roleModel: 3 }, octalysis: [4] },
      { label: '盡早備齊事證，於三十日內提出申訴', tier: 'good', note: '提早準備很好，但重點仍是把握三十日時限，列次佳', effects: { honor: 2 }, octalysis: [4] },
      { label: '先私下找校長理論，盼能私下喬定', tier: 'illegal', note: '私下溝通很常見，但只談不申訴可能錯過救濟時效', effects: { trust: -3 }, octalysis: [8] },
      { label: '想說最多只有十五日，過期就沒救', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '主張慢慢來，半年內提出都來得及', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },
  {
    id: 'q_appeal_scope', cat: '救濟', diff: 2,
    scenario: '學校把你的課務做了你認為不合理的調動，怎麼救濟？',
    law: '教師申訴評議委員會組織及評議辦法',
    explain: '不合理課務調動屬學校行政措施，教師得向「教師申訴評議委員會」提起申訴。',
    choices: [
      { label: '依規向教師申訴評議委員會提申訴', tier: 'best', effects: { honor: 3 }, octalysis: [4] },
      { label: '先與學校溝通，未果再正式提出申訴', tier: 'good', note: '先溝通是好態度，但別讓對話拖過申訴時效，列次佳', effects: { honor: 2 }, octalysis: [5] },
      { label: '忍一忍配合就好，省得走申訴程序', tier: 'illegal', note: '息事寧人很常見，卻放棄了法律給的正當救濟管道', effects: { hp: -4 }, octalysis: [8] },
      { label: '索性罷上被調動的課，藉此抗議', tier: 'wrong', effects: { honor: -6 }, octalysis: [8] },
      { label: '把這件事爆料給媒體，向校施壓', tier: 'wrong', effects: { honor: -5, trust: -4 }, octalysis: [8] },
    ],
  },

  // ── 解聘程序 / 法律責任 ──
  {
    id: 'q_dismiss_proc', cat: '聘任', diff: 3,
    scenario: '你被家長投訴不當管教，學校依法應啟動什麼程序？',
    law: '高級中等以下學校教師解聘不續聘停聘或資遣辦法',
    explain: '涉不當管教等情事被投訴，學校應啟動「校事會議」，組調查小組、訪談、審議，依法定程序處理以保障程序正義與工作權。',
    choices: [
      { label: '啟動校事會議，組調查小組依法審議', tier: 'best', effects: { honor: 3, roleModel: 2 }, octalysis: [4] },
      { label: '配合調查並完整陳述，留存相關事證', tier: 'good', note: '當事人配合很重要，但啟動程序的主體是學校，列次佳', effects: { honor: 2 }, octalysis: [4] },
      { label: '為了平息家長，先記老師一支過交代', tier: 'illegal', note: '快速安撫家長很常見，卻跳過法定程序、侵害教師權益', effects: {}, octalysis: [8] },
      { label: '由校長一人逕自決定解聘，省去程序', tier: 'wrong', effects: {}, octalysis: [] },
      { label: '召集家長會直接投票決定老師去留', tier: 'wrong', effects: {}, octalysis: [] },
    ],
  },
  {
    id: 'q_teacher_duty', cat: '聘任', diff: 1,
    scenario: '同事問你，下列哪一項屬教師法所定的教師「義務」？',
    law: '教師法 §17',
    explain: '遵守聘約、維護學生學習權、輔導管教學生、依法通報等屬教師義務；§16 則規範教師權利。',
    choices: [
      { label: '依法輔導管教學生並善盡通報義務', tier: 'best', effects: { roleModel: 3 }, octalysis: [1, 4] },
      { label: '盡心教學，維護學生受教與學習權益', tier: 'good', note: '方向正確，但少了輔導管教與通報，較不完整，列次佳', effects: { roleModel: 1 }, octalysis: [1] },
      { label: '主張輔導學生與否可由老師自行斟酌', tier: 'illegal', note: '把輔導當成可選看似有彈性，卻牴觸教師法定義務', effects: { roleModel: -4 }, octalysis: [8] },
      { label: '主張聘約內容僅供參考，照辦即可', tier: 'wrong', effects: { honor: -3 }, octalysis: [] },
      { label: '主張依法通報全憑個人主觀來判斷', tier: 'wrong', effects: { honor: -4 }, octalysis: [8] },
    ],
  },

  // ── 班級經營 / 自我照顧 ──
  {
    id: 'q_selfcare', cat: '經營', diff: 1,
    scenario: '連續兩週留校到很晚，你的心力快見底，怎麼做？',
    law: '（班級經營·教師自我照顧）',
    explain: '導師是長跑，懂得求援、排回復時間，才能走得遠。硬撐到崩潰反而傷害班級穩定。',
    choices: [
      { label: '安排午休回復，把部分班務交給幹部', tier: 'best', effects: { hp: 8, cohesion: 3 }, octalysis: [4] },
      { label: '先減去非必要雜務，把時間留給休息', tier: 'good', note: '減法很實用，但少了授權培養幹部的綜效，列為次佳', effects: { hp: 5 }, octalysis: [4] },
      { label: '咬牙再撐一下，相信導師就該全扛起', tier: 'illegal', note: '「導師不能累」是常見迷思，硬撐到崩潰反傷班級', effects: { hp: -8, climate: -3 }, octalysis: [8] },
      { label: '把累積的情緒帶進課堂向學生發作', tier: 'wrong', effects: { trust: -6, climate: -5 }, octalysis: [8] },
      { label: '索性請個長假，把整班先丟給代理', tier: 'wrong', effects: { cohesion: -6, honor: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_budget', cat: '經營', diff: 1,
    scenario: '班費結餘要怎麼管理，最能建立親師之間的信任？',
    law: '（班級經營·財務透明）',
    explain: '班費明細公開、邀家長代表共同監督，是建立信任最穩的方式。',
    choices: [
      { label: '明細公開上網，邀家委一起來監督', tier: 'best', effects: { trust: 6, honor: 3 }, octalysis: [4, 5] },
      { label: '定期把收支結算單發給每一位家長', tier: 'good', note: '定期公告很好，但少了家委共管的監督機制，列次佳', effects: { trust: 4 }, octalysis: [5] },
      { label: '老師一手保管收支，需要時口頭交代', tier: 'illegal', note: '老師代管很方便，但不公開帳目易生誤會、不符透明原則', effects: { trust: -6 }, octalysis: [8] },
      { label: '拿班費充當學生違規罰款的收受帳戶', tier: 'wrong', effects: { trust: -8, roleModel: -5 }, octalysis: [8] },
      { label: '學期末直接把結餘均分發還給學生', tier: 'wrong', effects: { trust: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_parent_channel', cat: '經營', diff: 1,
    scenario: '想建立穩定的親師溝通，最好的起手式是什麼？',
    law: '（班級經營·親師溝通）',
    explain: '開學初主動建立固定管道（聯絡簿／群組規範）、先報喜再報憂，能大幅降低後續衝突。',
    choices: [
      { label: '開學就建好管道，先主動傳遞好消息', tier: 'best', effects: { trust: 6, climate: 3, hp: -2 }, octalysis: [5] },
      { label: '先建好群組與規範，再視情況報近況', tier: 'good', note: '建好規範很好，但少了先報喜的破冰，主動性略低，列次佳', effects: { trust: 4, hp: -1 }, octalysis: [5] },
      { label: '平時保持低調，等孩子出狀況再聯絡', tier: 'illegal', note: '出事才聯絡是常見做法，卻錯失平時累積信任的機會', effects: { trust: -5 }, octalysis: [8] },
      { label: '在群組公開逐一點名孩子各種缺點', tier: 'wrong', effects: { trust: -8, climate: -4 }, octalysis: [8] },
      { label: '索性都略過家長，免去聯繫的麻煩', tier: 'wrong', effects: { trust: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_seat', cat: '經營', diff: 1,
    scenario: '開學排座位，要兼顧學習與班級動態，怎麼排？',
    law: '（班級經營·座位安排）',
    explain: '依觀察動態彈性混合搭配，兼顧視力、互動與特殊需求，優於一成不變照座號。',
    choices: [
      { label: '依觀察動態彈性搭配，兼顧特殊需求', tier: 'best', effects: { cohesion: 5, climate: 4, hp: -3 }, octalysis: [3] },
      { label: '先照視力與身高排，再依互動慢慢調', tier: 'good', note: '從基本需求排很穩，但動態混合的綜效略少，列為次佳', effects: { cohesion: 3, climate: 2, hp: -2 }, octalysis: [3] },
      { label: '把愛講話的學生通通集中到後排坐', tier: 'illegal', note: '集中管理省力又常見，卻形同標籤化、傷害學習氛圍', effects: { climate: -5, trust: -3 }, octalysis: [8] },
      { label: '完全照學期成績排序決定座位前後', tier: 'wrong', effects: { climate: -6, roleModel: -4 }, octalysis: [8] },
      { label: '永遠固定照座號排，省事又輕鬆', tier: 'wrong', effects: { cohesion: -2 }, octalysis: [] },
    ],
  },

  // ═══════════ 學生現場情境擴充（行為／霸凌／親師／經營）═══════════
  // 設計重點：補足學生面情境、刻意多餵凝聚/班風/信任，並補早期 diff 1。
  {
    id: 'q_sped_meltdown', cat: '學生', diff: 3,
    scenario: '班上情緒行為障礙學生上課時突然情緒失控、大哭大叫，你怎麼處理？',
    law: '特殊教育法、學校訂定教師輔導與管教學生辦法注意事項',
    explain: '情障學生失控時應先確保全體安全，依其 IEP 正向行為支持策略安撫，必要時請輔導室／特教教師支援，不公開斥責或處罰。',
    choices: [
      { label: '先確保全班安全，依 IEP 安撫請特教協助', tier: 'best', effects: { trust: 5, climate: 3, hp: -5 }, octalysis: [1] },
      { label: '先帶他到安靜角落冷靜後再了解原因', tier: 'good', note: '帶離冷靜可行，但仍應回到 IEP 既定策略才完整', effects: { trust: 3, climate: 2, hp: -3 }, octalysis: [5] },
      { label: '當場大聲喝斥要他立刻安靜坐好', tier: 'illegal', note: '高壓喝斥很常見，卻可能激化情緒、違反正向支持原則', effects: { trust: -6, climate: -5 }, octalysis: [8] },
      { label: '直接把他趕出教室到走廊罰站', tier: 'wrong', effects: { trust: -6, roleModel: -5 }, octalysis: [] },
      { label: '不理會他，繼續上課當作沒看到', tier: 'wrong', effects: { trust: -4, climate: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_account_steal', cat: '霸凌', diff: 3,
    scenario: '學生故意登入其他同學的帳號發文，藉此汙衊他人，你怎麼處理？',
    law: '個人資料保護法、校園霸凌防制準則',
    explain: '冒用他人帳號發布不實內容，已涉個資侵害與網路霸凌；應保全截圖證據、依規通報並啟動調查輔導，以教育為主、通知雙方家長。',
    choices: [
      { label: '保全證據、依規通報並啟動調查，通知家長', tier: 'best', effects: { trust: 5, honor: 3, hp: -4 }, octalysis: [1] },
      { label: '先了解冒用動機，同時保留證據', tier: 'good', note: '先了解動機立意佳，但通報與調查程序不能略過', effects: { trust: 3, hp: -2 }, octalysis: [5] },
      { label: '私下要對方道歉就好，不留任何紀錄', tier: 'illegal', note: '私了息事很常見，卻略過程序、無法保護被害學生', effects: { trust: -5, honor: -4 }, octalysis: [8] },
      { label: '叫被害學生自己去跟對方理論', tier: 'wrong', effects: { trust: -6, climate: -4 }, octalysis: [] },
      { label: '覺得是小孩玩鬧，不必處理', tier: 'wrong', effects: { trust: -5, honor: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_recess_fight', cat: '學生', diff: 1,
    scenario: '兩個學生下課玩鬧，最後玩到翻臉吵起來，你怎麼處理？',
    law: '學校訂定教師輔導與管教學生辦法注意事項',
    explain: '同儕衝突宜先分開冷靜、分別傾聽雙方說法，引導同理與和解，必要時通知家長；避免當眾論斷對錯或連坐處罰。',
    choices: [
      { label: '先分開冷靜，分別傾聽後引導雙方和解', tier: 'best', effects: { cohesion: 5, climate: 4, hp: -3 }, octalysis: [5] },
      { label: '請雙方各自寫下經過，再一起釐清', tier: 'good', note: '書面釐清很實用，但當下情緒仍需先安撫', effects: { cohesion: 3, climate: 2 }, octalysis: [5] },
      { label: '各打五十大板，兩個都罰站了事', tier: 'illegal', note: '各打五十板看似公平，卻沒釐清是非、易留心結', effects: { climate: -4, trust: -3 }, octalysis: [8] },
      { label: '當眾要先動手的人公開認錯', tier: 'wrong', effects: { trust: -5, climate: -4 }, octalysis: [] },
      { label: '玩鬧而已，叫他們自己去和好', tier: 'wrong', effects: { cohesion: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_disrupt_sleep', cat: '管教', diff: 1,
    scenario: '學生上課故意擾亂秩序，或趴著睡覺，你該如何管教或叫醒他？',
    law: '學校訂定教師輔導與管教學生辦法注意事項（一般管教措施）',
    explain: '宜先以正向提醒、調整座位或活動喚回專注，並私下了解背後原因（如睡眠、身心狀況），不體罰、不公開羞辱。',
    choices: [
      { label: '正向提醒並私下了解原因，調整教學節奏', tier: 'best', effects: { climate: 4, trust: 4, roleModel: 3, hp: -2 }, octalysis: [5] },
      { label: '走到身邊輕聲提醒，課後再個別關心', tier: 'good', note: '即時提醒加課後關心很好，差在沒進一步調整教學', effects: { climate: 3, trust: 2 }, octalysis: [5] },
      { label: '罰他站到後面上完整堂課', tier: 'illegal', note: '罰站很常見，卻無助理解原因、可能傷自尊', effects: { trust: -4, climate: -3 }, octalysis: [8] },
      { label: '直接點名羞辱要全班看著他', tier: 'wrong', effects: { trust: -6, roleModel: -6 }, octalysis: [] },
      { label: '當場沒收他所有東西丟講台', tier: 'wrong', effects: { trust: -5, climate: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_cyberbully', cat: '霸凌', diff: 3,
    scenario: '學生在網路上留言攻擊其他同學，你怎麼處理這起網路霸凌？',
    law: '校園霸凌防制準則',
    explain: '學生於網路留言攻擊同學屬網路霸凌；知悉後應於 24 小時內依校安通報、留存證據，由學校受理後啟動調查與輔導，兼顧被害與行為學生。',
    choices: [
      { label: '24 小時內通報、留存證據並啟動調查輔導', tier: 'best', effects: { trust: 5, honor: 3, hp: -4 }, octalysis: [1] },
      { label: '先安撫被害學生、保全截圖再走通報', tier: 'good', note: '先接住被害者很重要，通報時限仍要守住', effects: { trust: 4, climate: 2, hp: -2 }, octalysis: [5] },
      { label: '叫雙方刪文握手言和就當沒事', tier: 'illegal', note: '刪文私了很常見，卻略過通報調查、無法保護被害學生', effects: { trust: -5, honor: -4 }, octalysis: [8] },
      { label: '網路上的事學校管不著，不處理', tier: 'wrong', effects: { trust: -6, honor: -5 }, octalysis: [] },
      { label: '公開在班上點名霸凌者要他認錯', tier: 'wrong', effects: { climate: -5, trust: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_bully_physical', cat: '霸凌', diff: 2,
    scenario: '你發現班上有學生長期被同學言語嘲弄、孤立，你怎麼處理？',
    law: '校園霸凌防制準則',
    explain: '對持續性、惡意的肢體或關係霸凌，導師知悉應即通報，由學校啟動調查與輔導，保護被害學生、避免二度傷害，不宜私下和解了事。',
    choices: [
      { label: '依規通報啟動調查，優先保護被害學生', tier: 'best', effects: { trust: 5, climate: 3, hp: -3 }, octalysis: [1] },
      { label: '先隔離加害行為、確保安全再通報', tier: 'good', note: '先止血確保安全很對，通報與調查要接著走', effects: { trust: 3, climate: 2 }, octalysis: [5] },
      { label: '要被害學生「不要太計較」忍一下', tier: 'illegal', note: '勸忍耐很常見，卻是縱容霸凌、傷害被害學生', effects: { trust: -6, climate: -4 }, octalysis: [8] },
      { label: '只把加害者罵一頓就結案', tier: 'wrong', effects: { trust: -4, honor: -3 }, octalysis: [] },
      { label: '覺得是孩子間的事不必介入', tier: 'wrong', effects: { trust: -6, climate: -5 }, octalysis: [] },
    ],
  },
  {
    id: 'q_sexual_report', cat: '通報', diff: 3,
    scenario: '你聽聞班上疑似發生學生間的性騷擾或開黃腔欺負，該怎麼做？',
    law: '性別平等教育法 §21',
    explain: '校長、教師、職員知悉疑似校園性侵害、性騷擾或性霸凌，應於 24 小時內向學校及主管機關通報，不得拖延或自行調查。',
    choices: [
      { label: '24 小時內向學校與主管機關通報', tier: 'best', effects: { trust: 5, honor: 3, hp: -4 }, octalysis: [1] },
      { label: '先安撫當事學生、保密身分後立即通報', tier: 'good', note: '保護當事人隱私很重要，24 小時時限仍要守', effects: { trust: 4, hp: -2 }, octalysis: [5] },
      { label: '先自己找雙方問清楚再決定要不要報', tier: 'illegal', note: '自行調查很常見，卻違反 24 小時通報、可能破壞證據', effects: { trust: -5, honor: -4 }, octalysis: [8] },
      { label: '怕事情鬧大，勸當事人不要聲張', tier: 'wrong', effects: { trust: -7, honor: -6 }, octalysis: [] },
      { label: '覺得只是開玩笑，不算性騷擾', tier: 'wrong', effects: { trust: -6, honor: -5 }, octalysis: [] },
    ],
  },
  {
    id: 'q_self_harm', cat: '通報', diff: 3,
    scenario: '學生私下透露最近很想消失、提到自我傷害，你怎麼處理？',
    law: '學生輔導法、校園學生自我傷害三級預防',
    explain: '學生有自傷或自殺意念屬高關懷個案，應即時通報輔導室啟動處遇與危機處理、通知家長，並持續陪伴，不可獨自承擔或答應保密。',
    choices: [
      { label: '即時通報輔導室啟動危機處理並持續陪伴', tier: 'best', effects: { trust: 6, roleModel: 3, hp: -5 }, octalysis: [1] },
      { label: '先穩定陪伴、確認安全，盡快轉介輔導', tier: 'good', note: '陪伴與確認安全很關鍵，記得通報不能延遲', effects: { trust: 4, hp: -3 }, octalysis: [5] },
      { label: '答應他「不告訴任何人」替他保密', tier: 'illegal', note: '為取得信任而承諾保密很常見，卻違反高關懷通報、可能延誤救援', effects: { trust: -4, hp: -2 }, octalysis: [8] },
      { label: '覺得只是想引人注意，不予理會', tier: 'wrong', effects: { trust: -8, roleModel: -6 }, octalysis: [] },
      { label: '在班上公開要大家多注意他', tier: 'wrong', effects: { trust: -6, climate: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_neglect', cat: '通報', diff: 2,
    scenario: '學生常衣衫不整、沒吃早餐、放學沒人接，疑似被照顧疏忽，你怎麼做？',
    law: '兒童及少年福利與權益保障法 §53',
    explain: '教育人員知悉兒少疑似遭虐待、遺棄或照顧疏忽，應於 24 小時內向直轄市、縣（市）主管機關責任通報，這是法定義務。',
    choices: [
      { label: '依責任通報於 24 小時內向主管機關通報', tier: 'best', effects: { trust: 4, honor: 3, hp: -3 }, octalysis: [1] },
      { label: '先了解狀況、聯繫家長，同步準備通報', tier: 'good', note: '了解狀況可以，但責任通報不因聯繫家長而延後', effects: { trust: 2, hp: -2 }, octalysis: [5] },
      { label: '先私下問學生，再決定要不要通報', tier: 'illegal', note: '想先查證很常見，卻可能延誤 24 小時責任通報', effects: { trust: -4, honor: -3 }, octalysis: [8] },
      { label: '覺得是別人的家務事，不方便插手', tier: 'wrong', effects: { trust: -6, honor: -5 }, octalysis: [] },
      { label: '直接打電話給家長興師問罪', tier: 'wrong', effects: { trust: -5 }, octalysis: [] },
    ],
  },
  {
    id: 'q_parent_unreasonable', cat: '親師', diff: 2,
    scenario: '家長提出不合理要求（如指定座位、要求懲處別的孩子），你怎麼回應？',
    law: '（親師溝通與校內處理程序）',
    explain: '面對不合理要求宜耐心傾聽、說明班級經營原則與規定、提供校內正式溝通管道，必要時請行政協助，不當場硬碰也不一味退讓。',
    choices: [
      { label: '耐心傾聽並說明原則，提供正式溝通管道', tier: 'best', effects: { trust: 4, honor: 3, hp: -3 }, octalysis: [5] },
      { label: '先同理情緒，再約時間正式面談', tier: 'good', note: '先接情緒很對，差在仍要把原則與界線講清楚', effects: { trust: 3, hp: -2 }, octalysis: [5] },
      { label: '怕被投訴，乾脆全照家長要求做', tier: 'illegal', note: '一味順從很常見，卻犧牲其他學生的公平與班級原則', effects: { honor: -4, climate: -3 }, octalysis: [8] },
      { label: '當場回嗆家長根本不懂教育', tier: 'wrong', effects: { trust: -6, honor: -4 }, octalysis: [] },
      { label: '已讀不回，能避就避不見面', tier: 'wrong', effects: { trust: -5, honor: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_parent_complaint', cat: '救濟', diff: 3,
    scenario: '家長向教育局或校長信箱投訴你，你該如何面對與處理？',
    law: '（陳情處理程序、教師法教師權益）',
    explain: '接獲投訴宜冷靜、完整保全教學與聯繫紀錄，循學校行政程序具實說明，必要時請學校與教師組織協助，依正當程序回應而非情緒對抗。',
    choices: [
      { label: '保全紀錄、循行政程序具實說明', tier: 'best', effects: { honor: 4, trust: 3, hp: -3 }, octalysis: [1] },
      { label: '先盤點事件經過與佐證，再回覆校方', tier: 'good', note: '備齊佐證很關鍵，記得也要主動與行政溝通', effects: { honor: 3, hp: -2 }, octalysis: [2] },
      { label: '私下找家長要他撤回投訴', tier: 'illegal', note: '私下施壓撤訴很常見，卻可能被視為不當接觸、節外生枝', effects: { trust: -4, honor: -3 }, octalysis: [8] },
      { label: '不回應也不說明，當作沒這回事', tier: 'wrong', effects: { honor: -5, trust: -3 }, octalysis: [] },
      { label: '在班上對學生抱怨家長投訴的事', tier: 'wrong', effects: { trust: -6, climate: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_false_accusation', cat: '救濟', diff: 3,
    scenario: '家長對你不實指控、連續攻擊、持續投訴，你該如何應對？',
    law: '教師法（教師權益）、教師組織法律支援',
    explain: '面對不實指控或持續攻擊，應冷靜保全完整證據、透過學校與教師會／工會等正式管道處理，必要時尋求法律協助；切忌私下對嗆或在社群回擊。',
    choices: [
      { label: '保全證據、循正式管道並尋求法律支援', tier: 'best', effects: { honor: 4, trust: 3, hp: -3 }, octalysis: [1] },
      { label: '先完整記錄每次互動，再請學校介入', tier: 'good', note: '留存紀錄很重要，正式管道與支援要同步啟動', effects: { honor: 3, hp: -2 }, octalysis: [2] },
      { label: '在自己臉書發文公開回擊澄清', tier: 'illegal', note: '上網澄清很想做，卻可能觸法、讓爭議擴大', effects: { honor: -5, trust: -4 }, octalysis: [8] },
      { label: '忍氣吞聲，什麼都不做也不說', tier: 'wrong', effects: { hp: -6, honor: -3 }, octalysis: [] },
      { label: '直接打電話跟家長大吵對罵', tier: 'wrong', effects: { trust: -6, honor: -5 }, octalysis: [] },
    ],
  },
  {
    id: 'q_class_rules', cat: '經營', diff: 1,
    scenario: '開學第一週，你打算怎麼建立班級常規？',
    law: '（正向管教、班級自治）',
    explain: '開學初與學生共同討論、訂定班規與執行方式，能提升認同與自律，比單方面公布規定更有效。',
    choices: [
      { label: '帶全班討論共同訂定班規與執行方式', tier: 'best', effects: { cohesion: 5, climate: 4, hp: -3 }, octalysis: [3] },
      { label: '先提草案再讓全班討論修改', tier: 'good', note: '有草案討論很有效率，差在學生主導感略少', effects: { cohesion: 3, climate: 3 }, octalysis: [3] },
      { label: '直接公布一套嚴規要大家照做', tier: 'illegal', note: '單方訂規省時又常見，卻少了認同、執行常打折', effects: { climate: -3, cohesion: -2 }, octalysis: [8] },
      { label: '不訂班規，出事再說', tier: 'wrong', effects: { climate: -4, cohesion: -3 }, octalysis: [] },
      { label: '照搬別班的規定貼牆上就好', tier: 'wrong', effects: { cohesion: -2 }, octalysis: [] },
    ],
  },
  {
    id: 'q_group_work', cat: '經營', diff: 1,
    scenario: '分組活動時有人「搭便車」、有人抱怨不公，你怎麼處理？',
    law: '（合作學習、班級經營）',
    explain: '宜明確分工與個人責任、引導同儕互評與溝通，培養合作能力，而非放任或直接解散小組。',
    choices: [
      { label: '明確分工與責任，引導同儕溝通互評', tier: 'best', effects: { cohesion: 5, climate: 3, hp: -2 }, octalysis: [3] },
      { label: '先了解卡點，再協助重新分配任務', tier: 'good', note: '對症調整很好，差在沒建立長期的責任機制', effects: { cohesion: 3, climate: 2 }, octalysis: [5] },
      { label: '誰不合作就把他踢出小組', tier: 'illegal', note: '踢出小組最快，卻是排除而非教會合作', effects: { cohesion: -4, climate: -3 }, octalysis: [8] },
      { label: '小組的事自己解決，不介入', tier: 'wrong', effects: { cohesion: -3 }, octalysis: [] },
      { label: '乾脆取消分組改回各做各的', tier: 'wrong', effects: { cohesion: -2, climate: -2 }, octalysis: [] },
    ],
  },
  {
    id: 'q_class_chat', cat: '經營', diff: 2,
    scenario: '你要經營班級／親師 LINE 群組，怎麼做比較妥當？',
    law: '個人資料保護法（數位班級經營）',
    explain: '群組以公告事務為主、避免公開點名學生問題、不轉傳他人個資，個別輔導改一對一聯繫。',
    choices: [
      { label: '群組只公告事務，個別問題改一對一聯繫', tier: 'best', effects: { trust: 4, honor: 3 }, octalysis: [1] },
      { label: '訂群組規範並請家長共同遵守', tier: 'good', note: '立規範很好，執行時仍要守住個資界線', effects: { trust: 3, climate: 2 }, octalysis: [4] },
      { label: '在群組公開點名某生的偏差行為', tier: 'illegal', note: '群組公審很常見，卻洩漏個資、傷害學生與信任', effects: { trust: -6, honor: -4 }, octalysis: [8] },
      { label: '把學生成績單拍照貼到群組', tier: 'wrong', effects: { trust: -7, honor: -5 }, octalysis: [] },
      { label: '放任群組變家長吵架戰場不管', tier: 'wrong', effects: { climate: -4, trust: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_duty_fair', cat: '經營', diff: 1,
    scenario: '安排打掃與幹部職務時，怎麼分配才公平？',
    law: '（班級經營、民主法治）',
    explain: '工作分配宜公開透明、輪流並結合自願與能力，讓學生感到公平與參與，避免偏心或固定使喚特定學生。',
    choices: [
      { label: '公開透明、輪流並結合自願與能力分配', tier: 'best', effects: { climate: 4, cohesion: 4, hp: -2 }, octalysis: [3] },
      { label: '先讓學生認領，再由老師微調補位', tier: 'good', note: '自主認領很好，綜效稍弱於系統化輪替', effects: { climate: 3, cohesion: 2 }, octalysis: [5] },
      { label: '固定叫幾個乖學生包辦麻煩工作', tier: 'illegal', note: '使喚順手的學生很常見，卻不公平、累積怨氣', effects: { climate: -4, trust: -3 }, octalysis: [8] },
      { label: '誰表現差就罰他做最多打掃', tier: 'wrong', effects: { climate: -4, trust: -3 }, octalysis: [] },
      { label: '隨便指定，懶得管公不公平', tier: 'wrong', effects: { cohesion: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_contraband', cat: '管教', diff: 2,
    scenario: '你發現學生帶了違禁或危險物品到校，怎麼處理？',
    law: '學校訂定教師輔導與管教學生辦法注意事項',
    explain: '可基於安全要求其取出、暫時保管並通知家長；搜查應有正當理由並尊重隱私，不可恣意翻搜或公開搜身。',
    choices: [
      { label: '基於安全請其交出、暫保管並通知家長', tier: 'best', effects: { honor: 4, trust: 3, hp: -2 }, octalysis: [1] },
      { label: '先私下了解來源，再依規暫時保管', tier: 'good', note: '了解來源很好，安全處置與通知家長要跟上', effects: { honor: 2, trust: 2 }, octalysis: [5] },
      { label: '當眾翻他書包搜個徹底', tier: 'illegal', note: '當眾搜包很常見，卻侵犯隱私、傷害信任', effects: { trust: -6, climate: -4 }, octalysis: [8] },
      { label: '沒收後丟掉也不告訴家長', tier: 'wrong', effects: { trust: -4, honor: -3 }, octalysis: [] },
      { label: '覺得沒事，不處理也不通知', tier: 'wrong', effects: { honor: -4, trust: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_truancy', cat: '通報', diff: 2,
    scenario: '學生連續多日未到校、疑似拒學或中輟，你怎麼處理？',
    law: '國民小學與國民中學中途輟學學生通報及復學輔導辦法',
    explain: '學生未經請假連續曠課達 3 日或長期拒學，應依規通報並啟動復學輔導、結合輔導室與家庭支援，了解背後原因，不只當違規處理。',
    choices: [
      { label: '依規通報並啟動復學輔導、結合家庭支援', tier: 'best', effects: { trust: 4, honor: 3, hp: -3 }, octalysis: [1] },
      { label: '先家訪了解原因，同步準備通報', tier: 'good', note: '家訪了解很有溫度，通報時限仍要顧到', effects: { trust: 3, hp: -2 }, octalysis: [5] },
      { label: '記曠課滿就當他自願放棄不管', tier: 'illegal', note: '放生最省事，卻違反中輟通報與復學輔導義務', effects: { trust: -5, honor: -4 }, octalysis: [8] },
      { label: '直接記滿過讓他被退學', tier: 'wrong', effects: { trust: -6, honor: -5 }, octalysis: [] },
      { label: '覺得是家庭問題與我無關', tier: 'wrong', effects: { trust: -5, honor: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_injury', cat: '通報', diff: 1,
    scenario: '學生在校跌倒受傷，你第一時間該怎麼做？',
    law: '（校園安全、緊急傷病處理）',
    explain: '應先即時急救與評估傷勢、必要時送醫，並通知家長與依校安通報程序處理、留存紀錄，不可拖延或隱匿。',
    choices: [
      { label: '先急救評估、必要時送醫並通知家長與通報', tier: 'best', effects: { trust: 5, honor: 3, hp: -3 }, octalysis: [1] },
      { label: '先簡單處理傷口，再通知家長觀察', tier: 'good', note: '先處置很對，較重傷勢仍需送醫與校安通報', effects: { trust: 3, hp: -2 }, octalysis: [5] },
      { label: '怕被檢討，叫學生別跟家長說', tier: 'illegal', note: '隱匿怕究責很常見，卻延誤處理、嚴重失信', effects: { trust: -7, honor: -6 }, octalysis: [8] },
      { label: '叫他自己去保健室，繼續上課', tier: 'wrong', effects: { trust: -4, climate: -2 }, octalysis: [] },
      { label: '覺得小擦傷不必通知任何人', tier: 'wrong', effects: { trust: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_theft', cat: '管教', diff: 2,
    scenario: '班上發生疑似偷竊，有同學東西不見了，你怎麼處理？',
    law: '學校訂定教師輔導與管教學生辦法注意事項',
    explain: '宜保護當事人隱私、私下查證、重在輔導歸還與品德教育、通知家長，未成年以教育為主，避免當眾指認或貼標籤。',
    choices: [
      { label: '私下查證、輔導歸還並通知家長，保護隱私', tier: 'best', effects: { trust: 4, roleModel: 3, hp: -3 }, octalysis: [1] },
      { label: '先給機會自行歸還，再個別輔導', tier: 'good', note: '給台階很有智慧，仍需與家長聯繫完整處理', effects: { trust: 3, roleModel: 2 }, octalysis: [5] },
      { label: '當眾搜查全班書包找贓物', tier: 'illegal', note: '全班搜包很常見，卻侵害隱私、製造對立', effects: { trust: -6, climate: -5 }, octalysis: [8] },
      { label: '直接認定某生並公開斥責', tier: 'wrong', effects: { trust: -6, roleModel: -5 }, octalysis: [] },
      { label: '東西不見是自己沒顧好，不處理', tier: 'wrong', effects: { trust: -4, climate: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_new_student', cat: '經營', diff: 1,
    scenario: '班上來了一位轉學生，你怎麼幫他融入班級？',
    law: '（班級經營、友善校園）',
    explain: '可安排小天使夥伴、創造互動機會、關注其適應，能快速建立歸屬感，勝過放任自行適應。',
    choices: [
      { label: '安排夥伴並創造互動，主動關注其適應', tier: 'best', effects: { cohesion: 5, climate: 4, trust: 3, hp: -2 }, octalysis: [5] },
      { label: '先介紹給全班，再觀察是否需要協助', tier: 'good', note: '介紹是好的開始，主動的夥伴機制效果更穩', effects: { cohesion: 3, climate: 2 }, octalysis: [5] },
      { label: '叫他自己想辦法跟同學熟起來', tier: 'illegal', note: '放任自理很常見，卻讓轉學生孤立、適應更慢', effects: { cohesion: -3, trust: -2 }, octalysis: [8] },
      { label: '隨便安排座位，不特別關心', tier: 'wrong', effects: { cohesion: -2 }, octalysis: [] },
      { label: '當眾要他自我介紹講夠久才准坐', tier: 'wrong', effects: { trust: -4, climate: -3 }, octalysis: [] },
    ],
  },
  {
    id: 'q_praise', cat: '經營', diff: 1,
    scenario: '你想塑造正向的班級氣氛，平時該怎麼做？',
    law: '（正向管教）',
    explain: '具體、即時地肯定良好行為，並讓進步被看見，能塑造正向班風與內在動機，比只盯著錯誤更有效。',
    choices: [
      { label: '具體即時肯定良好行為，讓進步被看見', tier: 'best', effects: { climate: 5, cohesion: 3, roleModel: 3 }, octalysis: [2] },
      { label: '設計小獎勵制度鼓勵正向行為', tier: 'good', note: '獎勵制度有效，但別讓外在獎勵蓋過內在動機', effects: { climate: 3, cohesion: 2 }, octalysis: [4] },
      { label: '只公開稱讚成績好的那幾個', tier: 'illegal', note: '只誇前段很自然，卻讓多數學生覺得被忽略', effects: { climate: -3, cohesion: -3 }, octalysis: [8] },
      { label: '從不稱讚，覺得本分不必誇', tier: 'wrong', effects: { climate: -3 }, octalysis: [] },
      { label: '稱讚時順便酸落後的同學', tier: 'wrong', effects: { trust: -5, climate: -4 }, octalysis: [] },
    ],
  },
  {
    id: 'q_parent_meeting', cat: '親師', diff: 1,
    scenario: '第一次班親會要登場了，你怎麼經營？',
    law: '（親師合作）',
    explain: '宜事前準備班務說明與溝通重點、營造夥伴關係、邀請家長參與，建立長期信任，而非流於形式或單向宣達。',
    choices: [
      { label: '準備班務重點、營造夥伴關係並邀家長參與', tier: 'best', effects: { trust: 5, honor: 3, hp: -3 }, octalysis: [5] },
      { label: '先發書面說明，再開放提問交流', tier: 'good', note: '書面加交流很完整，現場互動經營可再多些', effects: { trust: 3, honor: 2 }, octalysis: [4] },
      { label: '照本宣科念完就草草結束', tier: 'illegal', note: '形式化最省事，卻錯失建立親師信任的機會', effects: { trust: -2, climate: -1 }, octalysis: [8] },
      { label: '在會中公開批評某些學生表現', tier: 'wrong', effects: { trust: -6, honor: -4 }, octalysis: [] },
      { label: '乾脆取消班親會，省得麻煩', tier: 'wrong', effects: { trust: -3, honor: -2 }, octalysis: [] },
    ],
  },

  // ── 405 題主題情境擴充（運動會/段考/競賽/語文/管教/通報/親師/經營/輔導）──
  ...EXTRA_QUESTIONS,
];

// ───────────────────────────── 抽題（種子隨機）─────────────────────────────
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function difficultyBand(weekIndex) {
  if (weekIndex <= 6) return [1, 2];
  if (weekIndex <= 19) return [1, 2, 3];
  return [2, 3];
}

// 平時週只抽「全年候」題：把季節性題（段考/競賽/運動會/校慶/班競/語文競賽）
// 排除在外，這些只在各自排程週出現＝題目跟著導師作息，不會亂入。
const YEARROUND_CATS = ['管教', '通報', '親師', '輔導', '經營', '聘任', '考核', '救濟', '學生', '霸凌'];
// 開學情境題（含這些字樣）只在開學前三週出現，之後不再抽到。
const OPENING_RE = /開學|第一週|開學前|始業|新接|剛接|新生報到/;

// 依 (runSeed, weekIndex) 決定性抽 count 題：同存檔穩定、新局換種子＝每輪不同
export function pickDailyQuestions(weekIndex, runSeed = 1, count = DAYS_PER_WEEK) {
  const seed = (runSeed ^ ((weekIndex + 1) * 0x9e3779b1)) >>> 0;
  const rand = mulberry32(seed);
  const band = difficultyBand(weekIndex);
  let pool = LEGAL_POOL.filter((q) => YEARROUND_CATS.includes(q.cat) && band.includes(q.diff));
  if (weekIndex > 2) pool = pool.filter((q) => !OPENING_RE.test(q.scenario)); // 開學題鎖前三週
  if (pool.length < count) pool = LEGAL_POOL.filter((q) => YEARROUND_CATS.includes(q.cat));
  const arr = pool.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

export function itemToBeat(item) {
  return {
    id: item.id,
    prompt: item.scenario,
    law: item.law,
    explain: item.explain,
    choices: item.choices.map((c, i) => ({
      id: `${item.id}_c${i}`,
      label: c.label,
      tier: c.tier,
      note: c.note,
      effects: c.effects || {},
      octalysis: c.octalysis || [],
    })),
  };
}

// ───────────────────────────── 里程碑（手寫 5 拍劇情）─────────────────────────────
function milestone(index, base, title, intro, onEnter, days, hiddenCombo) {
  const wired = days.map((d, di) => ({
    id: `${base}_d${di}`,
    prompt: d.prompt,
    law: d.law,
    explain: d.explain,
    choices: d.choices.map((c, ci) => ({
      id: `${base}_d${di}_c${ci}`,
      label: c.label,
      tier: c.tier,
      note: c.note,
      effects: c.effects || {},
      octalysis: c.octalysis || [],
    })),
    conditionalBranch: d.conditionalBranch,
  }));
  return { index, type: 'milestone', title, intro, onEnter: onEnter || {}, days: wired, hiddenCombo };
}

const MILESTONES = {
  0: milestone(0, 'w0', 'W0 開學準備', '開學前一週。28 份學生資料躺在桌上，家長的第一通電話還沒打。', {}, [
    { prompt: '輔導資料裡有學生敏感的家庭狀況，你怎麼處理？',
      law: '（學生資料保密原則）', explain: '輔導資料應善盡保密，僅於必要教育目的內使用，不得任意外洩或當眾談論。',
      choices: [
        { label: '審慎閱讀標記需留意者，並嚴守保密', tier: 'best', effects: { trust: 5, roleModel: 3, hp: -5 }, octalysis: [4] },
        { label: '先抓重點標記高關懷生，細節後補', tier: 'good', note: '先抓重點可行，但少了通盤掌握，列為次佳', effects: { trust: 3, hp: -3 }, octalysis: [4] },
        { label: '在辦公室與同事聊起某生家庭八卦', tier: 'illegal', note: '同事閒聊很常見，卻已洩漏輔導資料、違反保密', effects: { trust: -8, roleModel: -6 }, octalysis: [8] },
        { label: '把特殊狀況名單貼在教室隨時提醒', tier: 'wrong', effects: { trust: -10 }, octalysis: [8] },
        { label: '索性略過資料，開學憑感覺認識', tier: 'wrong', effects: { trust: -3, hp: -1 }, octalysis: [7] },
      ] },
    { prompt: '開學前的親師第一通電話，你打算怎麼打？',
      law: '（親師溝通·建立信任）', explain: '主動致電自我介紹、傳遞正向期待，是建立親師信任成本最低的時機。',
      choices: [
        { label: '群發一封罐頭通知信就算完成聯繫', tier: 'wrong', effects: { trust: 2, hp: -1 }, octalysis: [] },
        { label: '主動致電每位家長並傳遞正向期待', tier: 'best', effects: { trust: 8, hp: -5 }, octalysis: [5] },
        { label: '先致電需要特別關注的那幾位家長', tier: 'good', note: '優先高關懷戶很務實，但其他家長也需被接觸', effects: { trust: 4, hp: -3 }, octalysis: [5] },
        { label: '先致電聽說最難搞的家長興師問罪', tier: 'illegal', note: '先發制人看似主動，卻把溝通變對立、傷信任', effects: { trust: -6 }, octalysis: [8] },
        { label: '想說等開學到校再當面聯絡家長', tier: 'wrong', effects: { trust: -2 }, octalysis: [] },
      ] },
    { prompt: '校長正式請你擔任本班導師，你怎麼回應？',
      law: '教師法 §32', explain: '專任教師依法負有擔任導師義務，宜正面承接並了解校內導師遴選與輪退辦法。',
      choices: [
        { label: '依法承接導師，並先了解輪退辦法', tier: 'best', effects: { honor: 5, roleModel: 3 }, octalysis: [1, 4] },
        { label: '先答應接下，邊做邊熟悉相關辦法', tier: 'good', note: '願意承擔很好，但先懂規則能少走冤枉路', effects: { honor: 3, hp: -1 }, octalysis: [1] },
        { label: '先口頭說好，再私下找人代為掛名', tier: 'illegal', note: '找人頂替偶有耳聞，卻違反導師法定義務與程序', effects: { honor: -5, trust: -3 }, octalysis: [8] },
        { label: '主張導師純屬自願，當場予以婉謝', tier: 'wrong', effects: { honor: -6, trust: -3 }, octalysis: [] },
        { label: '勉強答應後，整路碎念連連抱怨', tier: 'wrong', effects: { climate: -3, hp: -2 }, octalysis: [8] },
      ] },
    { prompt: '你想替這個班定一個經營主軸，怎麼選？',
      law: '（班級經營·願景）', explain: '先定清楚可被學生理解的價值主軸（如自我領導力），後續所有制度才有依歸。',
      choices: [
        { label: '寫下一條可被學生理解的價值主軸', tier: 'best', effects: { roleModel: 6, cohesion: 4, hp: -3 }, octalysis: [1] },
        { label: '先抓兩三個方向，開學帶學生收斂', tier: 'good', note: '保留彈性可取，但太晚定調易讓制度失去依歸', effects: { roleModel: 3, hp: -2 }, octalysis: [1] },
        { label: '直接借隔壁班的口號，省事又安全', tier: 'illegal', note: '借用現成口號很方便，卻沒內化、撐不起班級文化', effects: { roleModel: -2 }, octalysis: [7] },
        { label: '把主軸直接訂為考試成績至上主義', tier: 'wrong', effects: { climate: -4, roleModel: -3 }, octalysis: [8] },
        { label: '主軸隨它去，走一步算一步就好', tier: 'wrong', effects: { cohesion: -2 }, octalysis: [7] },
      ] },
    { prompt: '開學教室佈置與座位初排，你的原則是？',
      law: '（班級經營·環境）', explain: '安全動線、視力照顧與彈性混合，比美觀更重要。',
      choices: [
        { label: '以安全動線與視力照顧優先並留彈性', tier: 'best', effects: { climate: 5, cohesion: 3, hp: -3 }, octalysis: [3] },
        { label: '先求乾淨整齊，互動細節之後再調', tier: 'good', note: '先穩住基本盤可行，但少了主動的動態安排', effects: { climate: 3, hp: -2 }, octalysis: [3] },
        { label: '把佈置全押在華麗背板上塞滿動線', tier: 'illegal', note: '華麗佈置很吸睛，卻犧牲安全動線、本末倒置', effects: { hp: -4, climate: -2 }, octalysis: [] },
        { label: '把特定學生長期固定在角落座位', tier: 'wrong', effects: { trust: -4, climate: -4 }, octalysis: [8] },
        { label: '純照座號排好，最省事又省心思', tier: 'wrong', effects: {}, octalysis: [] },
      ] },
  ]),

  1: milestone(1, 'w1', 'W1 第一週啟動', '第一週。座位、班規、獎勵、幹部、溝通，五件事都要定調。', {}, [
    { prompt: '班規怎麼產生，最能讓學生願意去遵守？',
      law: '教育基本法 §8（人格發展權）', explain: '帶全班共同討論訂定班規，讓學生有參與感與被尊重感，遠勝老師單方公布。',
      choices: [
        { label: '帶全班一起討論訂定，形成共同認可', tier: 'best', effects: { cohesion: 8, roleModel: 4, hp: -5 }, octalysis: [3] },
        { label: '老師先擬草案，再交全班表決微調', tier: 'good', note: '有參與也有效率，但學生主導性略低，列為次佳', effects: { cohesion: 5, honor: 2, hp: -3 }, octalysis: [3] },
        { label: '把校規直接抄上去貼著，省去解釋', tier: 'illegal', note: '照抄校規很省事，卻少了內化，學生難真心遵守', effects: { roleModel: -2 }, octalysis: [] },
        { label: '把違規罰則一律訂成體罰的條款', tier: 'wrong', effects: { trust: -8, roleModel: -6 }, octalysis: [8] },
        { label: '老師逕自公布班規，全班照辦就好', tier: 'wrong', effects: { honor: 2, climate: -2 }, octalysis: [2] },
      ] },
    { prompt: '學習獎勵機制怎麼設計才健康又持久？',
      law: '（正向管教·鼓勵）', explain: '正向點數制＋鼓勵閱讀等內在動機，比罰錢罰站更能長期維持氛圍。',
      choices: [
        { label: '設立正向點數制，鼓勵閱讀與互助', tier: 'best', effects: { climate: 7, roleModel: 4, hp: -3 }, octalysis: [2] },
        { label: '先用小獎勵起步，再慢慢轉內在動機', tier: 'good', note: '外在誘因起步可行，但要留意別養成功利心', effects: { climate: 4, hp: -2 }, octalysis: [2] },
        { label: '靠扣分嚇阻，犯錯就扣掉平時分數', tier: 'illegal', note: '扣分制很常見，卻偏向懲罰、長期壓低學習氛圍', effects: { climate: -4 }, octalysis: [8] },
        { label: '用罰錢當作反向激勵來督促學生', tier: 'wrong', effects: { trust: -7, roleModel: -5 }, octalysis: [8] },
        { label: '索性全程放任，一切全憑學生自覺', tier: 'wrong', effects: {}, octalysis: [7] },
      ] },
    { prompt: '第一週幹部要先怎麼產生比較好？',
      law: '（班級經營·幹部）', explain: '可先暫置或自願試做，第三週班會再正式遴選，給觀察與磨合空間。',
      choices: [
        { label: '先開放自願報名，W3 班會再正式選', tier: 'best', effects: { cohesion: 5, roleModel: 3, hp: -2 }, octalysis: [3] },
        { label: '先請上學期幹部暫代，穩住再換', tier: 'good', note: '求穩可行，但新生班較難套用、機會也較封閉', effects: { cohesion: 3, hp: -1 }, octalysis: [4] },
        { label: '指定成績最好的學生包辦所有幹部', tier: 'illegal', note: '指派績優生很方便，卻標籤化又壓縮他人機會', effects: { climate: -4, cohesion: -3 }, octalysis: [] },
        { label: '用半威脅去指派沒人想做的職位', tier: 'wrong', effects: { trust: -4 }, octalysis: [8] },
        { label: '老師一個人把所有班務全部包辦', tier: 'wrong', effects: { hp: -6 }, octalysis: [8] },
      ] },
    { prompt: '有學生上課嗆聲挑釁你的權威，怎麼接？',
      law: '教師輔導與管教學生辦法注意事項 附表二', explain: '先穩住情緒、課後個別了解動機並正向引導，避免當場硬碰升高對立或違法處罰。',
      choices: [
        { label: '當下先穩住，課後個別了解動機引導', tier: 'best', effects: { roleModel: 6, climate: 4, hp: -4 }, octalysis: [1] },
        { label: '當場簡短制止，下課再找他好好談', tier: 'good', note: '即時止住可取，但公開回應仍可能升高對立', effects: { roleModel: 3, climate: 2, hp: -3 }, octalysis: [1] },
        { label: '當眾罰他站到後面去，藉此立威信', tier: 'illegal', note: '罰站立威是老做法，卻屬違法之過度罰站', effects: { trust: -9, roleModel: -7 }, octalysis: [8] },
        { label: '叫他到走廊罰跪，好好反省一下', tier: 'wrong', effects: { trust: -12, roleModel: -10 }, octalysis: [8] },
        { label: '當作沒聽見，索性放生隨他去鬧', tier: 'wrong', effects: { cohesion: -4, climate: -3 }, octalysis: [] },
      ] },
    { prompt: '要建立親師溝通管道，你的第一步是？',
      law: '（親師溝通）', explain: '開學初即建立固定管道並訂好群組使用規範，先傳正向觀察，後續溝通成本大降。',
      choices: [
        { label: '建好固定管道訂規範，先傳遞好消息', tier: 'best', effects: { trust: 6, hp: -2 }, octalysis: [5] },
        { label: '先開群組訂規範，近況之後再分享', tier: 'good', note: '先立規矩很好，但少了先報喜的破冰主動性', effects: { trust: 4, hp: -1 }, octalysis: [5] },
        { label: '平時都保持低調，等出狀況再聯絡', tier: 'illegal', note: '出事才聯絡很常見，卻錯過平時累積信任的機會', effects: { trust: -5 }, octalysis: [8] },
        { label: '在群組裡公開逐一點名孩子缺點', tier: 'wrong', effects: { trust: -8, climate: -4 }, octalysis: [8] },
        { label: '索性省了管道，圖個清靜免麻煩', tier: 'wrong', effects: { trust: -3 }, octalysis: [] },
      ] },
  ]),

  3: milestone(3, 'w3', 'W3 班會與幹部訓練', '第三週。班級跑起來了，但幹部各做各的，班會還像老師的獨角戲。', {}, [
    { prompt: '幹部正式怎麼產生，最能養成責任感？',
      law: '（班級自治）', explain: '公開政見＋全班票選，培養民主參與與責任感。',
      choices: [
        { label: '讓有意願者發表政見，再交全班票選', tier: 'best', effects: { cohesion: 7, roleModel: 4, hp: -4 }, octalysis: [3, 5] },
        { label: '自願加抽籤，讓更多人輪流去嘗試', tier: 'good', note: '機會均等可取，但少了選賢與能的責任承諾', effects: { cohesion: 5, hp: -2 }, octalysis: [3] },
        { label: '老師看順眼就指派，誰乖就找誰做', tier: 'illegal', note: '老師欽點很快，卻剝奪自治、易讓人覺得不公', effects: { cohesion: -2 }, octalysis: [2] },
        { label: '用半強迫的方式叫沒意願的人接下', tier: 'wrong', effects: { trust: -5 }, octalysis: [8] },
        { label: '索性讓成績好的同學包辦所有職位', tier: 'wrong', effects: { climate: -3 }, octalysis: [] },
      ] },
    { prompt: '幹部不太會做事，你要怎麼帶他們？',
      law: '（領導·賦能）', explain: '一對一帶過職責、給可量化目標與回饋，比放生或全攬都好。',
      choices: [
        { label: '一對一帶職責，給予明確目標回饋', tier: 'best', effects: { cohesion: 6, honor: 3, hp: -5 }, octalysis: [2, 4] },
        { label: '做一份分工清單，讓他們照表執行', tier: 'good', note: '清單上手快，但少了個別陪伴與即時回饋', effects: { cohesion: 4, hp: -3 }, octalysis: [4] },
        { label: '嫌他們慢，索性所有事都自己做', tier: 'illegal', note: '自己扛最快，卻違背賦能初衷、把幹部架空', effects: { hp: -6, cohesion: -3 }, octalysis: [8] },
        { label: '一出狀況就當全班的面責罵幹部', tier: 'wrong', effects: { trust: -6, climate: -4 }, octalysis: [8] },
        { label: '直接把現任幹部全部換掉重新選', tier: 'wrong', effects: { cohesion: -4 }, octalysis: [] },
      ] },
    { prompt: '第一次正式班會，你安排誰來主持？',
      law: '（班級自治）', explain: '由班長主持、老師退到旁邊紀錄與引導，是班級自治的關鍵一步。',
      choices: [
        { label: '由班長主持，老師退到旁邊做紀錄', tier: 'best', effects: { cohesion: 8, roleModel: 5, hp: -3 }, octalysis: [3, 1] },
        { label: '師生輪流共同主持，老師逐步放手', tier: 'good', note: '漸進放手很穩，但學生自主的幅度仍偏小', effects: { cohesion: 5, roleModel: 3, hp: -2 }, octalysis: [3] },
        { label: '老師全程主持，效率優先掌控流程', tier: 'illegal', note: '老師掌舵最有效率，卻剝奪自治、學生淪為旁聽', effects: { honor: 2, cohesion: -2 }, octalysis: [2] },
        { label: '把班會直接變成老師單向訓話時間', tier: 'wrong', effects: { climate: -4 }, octalysis: [8] },
        { label: '覺得班會浪費時間，索性直接取消', tier: 'wrong', effects: { cohesion: -4 }, octalysis: [] },
      ] },
    { prompt: '班會中兩名學生為小事吵起來快動手，怎麼辦？',
      law: '教師輔導與管教學生辦法注意事項 附表二', explain: '先分隔降溫、引導各自表達，再修復關係；不採當眾羞辱或體罰。',
      choices: [
        { label: '先分隔降溫，引導各自表達再修復', tier: 'best', effects: { cohesion: 6, roleModel: 5, hp: -4 }, octalysis: [1] },
        { label: '先暫停班會，把兩人帶開來個別談', tier: 'good', note: '帶離現場可取，但中斷全班、後續仍要修復', effects: { cohesion: 4, roleModel: 3, hp: -3 }, octalysis: [1] },
        { label: '要兩人當著全班的面互相道歉了事', tier: 'illegal', note: '當眾道歉看似公道，卻形同羞辱、屬不當管教', effects: { trust: -6, roleModel: -5 }, octalysis: [8] },
        { label: '把兩人一起罰站到放學以示懲戒', tier: 'wrong', effects: { trust: -7, climate: -4 }, octalysis: [8] },
        { label: '袖手旁觀，讓他們自己想辦法解決', tier: 'wrong', effects: { cohesion: -5 }, octalysis: [] },
      ] },
    { prompt: '班級公約上路兩週了，你打算怎麼檢視？',
      law: '（班級經營·滾動修正）', explain: '帶全班回顧執行狀況、共同微調，讓公約是活的而非貼牆裝飾。',
      choices: [
        { label: '帶全班回顧執行狀況，共同來微調', tier: 'best', effects: { cohesion: 6, roleModel: 4, hp: -3 }, octalysis: [3] },
        { label: '請幹部蒐集意見，再由老師統整', tier: 'good', note: '幹部蒐集有效率，但全班參與感略少一些', effects: { cohesion: 4, hp: -2 }, octalysis: [3] },
        { label: '公約就貼著，反正沒人會認真看', tier: 'illegal', note: '貼著不理很常見，卻讓公約淪為裝飾、形同虛設', effects: { cohesion: -3 }, octalysis: [] },
        { label: '加重罰則，把違規通通改成罰錢', tier: 'wrong', effects: { trust: -7, roleModel: -5 }, octalysis: [8] },
        { label: '覺得太麻煩，索性直接把公約廢掉', tier: 'wrong', effects: { cohesion: -4 }, octalysis: [] },
      ] },
  ]),

  5: milestone(5, 'w5', 'W5 第一次家長會', '晚上七點，教室坐了二十幾位家長。第一印象，今晚定生死。', { hp: -3 }, [
    { prompt: '家長會開場，你主打哪一塊最能建立信任？',
      law: '（親師溝通）', explain: '說明班級經營理念與一學期藍圖，讓家長看見方向，信任由此建立。',
      choices: [
        { label: '說明班級經營理念與一學期藍圖', tier: 'best', effects: { trust: 10, roleModel: 5, hp: -5 }, octalysis: [1, 5] },
        { label: '先講近期亮點，再帶到後續的規劃', tier: 'good', note: '亮點開場很討喜，但長期藍圖才是信任的地基', effects: { trust: 6, roleModel: 3, hp: -4 }, octalysis: [5] },
        { label: '照本宣科把注意事項從頭念一遍', tier: 'illegal', note: '念注意事項最安全，卻平淡無感、難建立關係', effects: { trust: 2, hp: -2 }, octalysis: [] },
        { label: '直接公布成績排名，藉此嚇嚇家長', tier: 'wrong', effects: { trust: -5, climate: -3 }, octalysis: [8] },
        { label: '當場點名班上表現最差的幾個孩子', tier: 'wrong', effects: { trust: -8 }, octalysis: [8] },
      ] },
    { prompt: '有家長提議「講話的同學罰50元」，怎麼回應？',
      law: '教師輔導與管教學生辦法注意事項（財產權限制）', explain: '禁止以罰錢作為管教手段，須婉拒並說明改採正向管教，不能因家長提議就違法。',
      choices: [
        { label: '說明罰錢違法後婉謝，改採正向方式', tier: 'best', effects: { trust: 6, roleModel: 6, honor: 3 }, octalysis: [4, 1] },
        { label: '謝謝建議，改提議以服務替代罰錢', tier: 'good', note: '順勢轉向很圓融，但仍要把違法界線講清楚', effects: { trust: 4, roleModel: 4 }, octalysis: [3] },
        { label: '家長既然都同意，就從善如流照辦', tier: 'illegal', note: '順著家長最不得罪人，卻違反不得罰錢的規定', effects: { trust: -8, roleModel: -8 }, octalysis: [8] },
        { label: '折衷一下，把罰款金額改成二十元', tier: 'wrong', effects: { trust: -6, roleModel: -5 }, octalysis: [8] },
        { label: '當場附和，還稱讚這招最有效果', tier: 'wrong', effects: { roleModel: -6 }, octalysis: [8] },
      ] },
    { prompt: '班費用途怎麼談，最能讓家長安心？',
      law: '（財務透明）', explain: '攤開明細、邀家委共同監督，透明是信任的地基。',
      choices: [
        { label: '攤開明細，邀家委一起來共同監督', tier: 'best', effects: { trust: 8, honor: 4, budget: 3000, hp: -4 }, octalysis: [4, 5] },
        { label: '先公布預估用途，期末再做結算', tier: 'good', note: '事後公告可行，但即時共管的信任感略少', effects: { trust: 5, budget: 2000, hp: -2 }, octalysis: [5] },
        { label: '簡單帶過用途，錢由老師統一保管', tier: 'illegal', note: '老師代管很方便，卻不夠透明、容易引起誤會', effects: { trust: -3, budget: 1500 }, octalysis: [8] },
        { label: '略過用途說明，覺得無須對家長交代', tier: 'wrong', effects: { trust: -7 }, octalysis: [8] },
        { label: '把班費和自己私人帳戶混在一起用', tier: 'wrong', effects: { trust: -10, roleModel: -6 }, octalysis: [8] },
      ] },
    { prompt: '會中一位家長當眾質疑你的管教方式，怎麼接？',
      law: '教師法 §16/§17；（情緒勞動）', explain: '誠懇說明合法管教原則與具體做法、會後再個別深談，比當場對嗆或退縮都好。',
      choices: [
        { label: '誠懇說明合法管教原則，會後深談', tier: 'best', effects: { trust: 7, roleModel: 4, hp: -5 }, octalysis: [5] },
        { label: '先謝謝指教，承諾會後一對一溝通', tier: 'good', note: '先收下情緒很穩，但現場仍宜簡要回應原則', effects: { trust: 5, hp: -3 }, octalysis: [5] },
        { label: '當場承諾以後全聽這位家長的話', tier: 'illegal', note: '順從息事最快，卻犧牲專業判斷與其他學生權益', effects: { roleModel: -4 }, octalysis: [] },
        { label: '當場反嗆對方外行，少來指點教育', tier: 'wrong', effects: { trust: -10, climate: -3 }, octalysis: [8] },
        { label: '當場沉默以對，任現場氣氛尷尬僵著', tier: 'wrong', effects: { trust: -5, hp: -3 }, octalysis: [] },
      ] },
    { prompt: '會後幾位家長私下圍上來提問，你怎麼收尾？',
      law: '（親師溝通）', explain: '留下耐心回應到散場，或引導至固定管道後續處理，展現專業與溫度。',
      choices: [
        { label: '耐心回應到散場，再導向固定管道', tier: 'best', effects: { trust: 7, roleModel: 4, hp: -6 }, octalysis: [5] },
        { label: '當場記下問題，約定改日逐一回覆', tier: 'good', note: '登記後續可行，但部分家長期待當下被回應', effects: { trust: 5, hp: -3 }, octalysis: [4] },
        { label: '隨口先全都答應，細節之後再說', tier: 'illegal', note: '先答應最不尷尬，卻可能跳票、反而失去信任', effects: { trust: -4 }, octalysis: [] },
        { label: '急著想走人，三言兩語就敷衍打發', tier: 'wrong', effects: { trust: -5 }, octalysis: [] },
        { label: '把家長私下的抱怨轉貼到班級群組', tier: 'wrong', effects: { trust: -8 }, octalysis: [8] },
      ] },
  ]),

  8: milestone(8, 'w8', 'W8 霸凌突發', '上課中，班長衝進辦公室：小傑與阿哲在走廊打架，群組還有人 PO 嘲笑貼文。',
    { hp: -5 }, [
      { prompt: '【第一時間】阿哲正壓著小傑揮拳，現行暴力，怎麼介入？',
        law: '教師輔導與管教學生辦法注意事項（強制措施）',
        explain: '對暴力攻擊他人之現行行為，教師得採合理物理強制力制止而不受罰；應快步到場、安全分隔兩人。',
        choices: [
          { label: '廣播停下，快步到場合理分隔兩人', tier: 'best', effects: { cohesion: 4, roleModel: 3, hp: -4 }, octalysis: [1, 6] },
          { label: '大聲喝止，並請鄰班老師一起支援', tier: 'good', note: '求援可取，但暴力當下仍須先上前安全分隔', effects: { cohesion: 2, hp: -3 }, octalysis: [5] },
          { label: '為求自保，站遠處只用嘴巴勸停手', tier: 'illegal', note: '怕擔責的退縮看似保險，卻放任暴力、於法不合', effects: { trust: -8, cohesion: -5 }, octalysis: [8] },
          { label: '先掏出手機把整個過程錄影下來', tier: 'wrong', effects: { trust: -9, roleModel: -7 }, octalysis: [8] },
          { label: '先衝回辦公室找學務主任來處理', tier: 'wrong', effects: { trust: -10, cohesion: -6 }, octalysis: [8] },
        ] },
      { prompt: '【通報】含肢體霸凌與網路嘲笑貼文，通報怎麼做？',
        law: '校園性侵害性騷擾性霸凌防治準則；兒少權益保障法 §53',
        explain: '知悉疑似校園霸凌應於 24 小時內完成法定通報（校內＋社政）；延誤或隱匿最高罰 15 萬、嚴重者解聘。',
        choices: [
          { label: '二十四小時內完成校內及社政通報', tier: 'best', effects: { honor: 6, trust: 4, hp: -5 }, octalysis: [2, 6] },
          { label: '先回報學務處，當天內一併完成通報', tier: 'good', note: '會辦學務處很好，但通報責任主體仍在自己', effects: { honor: 4, trust: 2, hp: -3 }, octalysis: [5] },
          { label: '先私下查清是誰的錯，再決定通報', tier: 'illegal', note: '想查明再報很自然，卻違反知悉即須通報的義務', effects: { honor: -10, trust: -8 }, octalysis: [8] },
          { label: '私下調解讓雙方握手言和就結案', tier: 'wrong', effects: { honor: -12, roleModel: -8 }, octalysis: [8] },
          { label: '只口頭跟主任說一聲，私下了結', tier: 'wrong', effects: { honor: -6, trust: -4 }, octalysis: [8] },
        ] },
      { prompt: '【記錄】後續調查要用到經過，你怎麼處理紀錄？',
        law: '（校園事件處理·程序正義）',
        explain: '當場填寫事件紀錄（B 表草稿）、保全群組截圖，完整記錄是保護學生也保護自己的關鍵。',
        choices: [
          { label: '當場填寫事件紀錄草稿並保全截圖', tier: 'best', effects: { honor: 5, trust: 3, hp: -4 }, octalysis: [2, 4] },
          { label: '先記下關鍵時間人物，當天再補齊', tier: 'good', note: '先抓重點可行，但記憶易失真、宜盡快補齊', effects: { honor: 3, hp: -2 }, octalysis: [2] },
          { label: '想說憑印象，事後再隨手補一補', tier: 'illegal', note: '事後補記很常見，卻細節失真、難經得起調查檢視', effects: { honor: -5, hp: -2 }, octalysis: [8] },
          { label: '把群組截圖刪掉，免得事情愈鬧大', tier: 'wrong', effects: { honor: -8, trust: -5 }, octalysis: [8] },
          { label: '把紀錄全部推給對方班的老師寫', tier: 'wrong', effects: { honor: -4 }, octalysis: [] },
        ],
        conditionalBranch: {
          when: (state) => state.stats.trust < 40,
          event: {
            id: 'w8_branch_angry', prompt: '⚠ 阿哲家長動怒來電質問「為什麼通報、害我小孩留紀錄」，怎麼回應？',
            law: '（親師溝通·危機處理）', explain: '誠懇說明依法通報的義務與已啟動的保護程序，比敷衍或推遲更能止血。',
            choices: [
              { id: 'w8_branch_angry_c0', label: '誠懇說明依法通報的義務與程序', tier: 'best', effects: { trust: 6, hp: -5 }, octalysis: [5] },
              { id: 'w8_branch_angry_c1', label: '先同理情緒，再說明後續保護安排', tier: 'good', note: '先接情緒很好，但仍須把通報的法定義務講清楚', effects: { trust: 4, hp: -4 }, octalysis: [5] },
              { id: 'w8_branch_angry_c2', label: '辯稱通報非我所願，藉此推卸責任', tier: 'illegal', note: '撇清責任最不尷尬，卻迴避法定義務、傷專業形象', effects: { trust: -6, roleModel: -4 }, octalysis: [8] },
              { id: 'w8_branch_angry_c3', label: '請家長改天到校再談，先掛了電話', tier: 'wrong', effects: { trust: -4, hp: -2 }, octalysis: [8] },
              { id: 'w8_branch_angry_c4', label: '直接回嗆家長外行，少來扯法規', tier: 'wrong', effects: { trust: -10 }, octalysis: [8] },
            ],
          },
        } },
      { prompt: '【管教】阿哲確實動手，怎麼管教才合法又有教育意義？',
        law: '教師輔導與管教學生辦法注意事項 附表一／附表二',
        explain: '修復式對話、引導道歉、約定觀察期屬適當正向管教；打手心、罰跪、公開羞辱皆為違法處罰。',
        choices: [
          { label: '以修復式對話引導道歉並約定觀察', tier: 'best', effects: { roleModel: 10, cohesion: 8, hp: -5 }, octalysis: [1, 3] },
          { label: '依校規記過，並安排後續輔導陪伴', tier: 'good', note: '依規處理加輔導可行，但少了修復關係的對話', effects: { roleModel: 4, honor: 2, hp: -3 }, octalysis: [2] },
          { label: '罰他抄寫校規一百遍，讓他長記性', tier: 'illegal', note: '罰抄看似溫和有效，卻屬非教學目的之違法處罰', effects: { trust: -6, roleModel: -5 }, octalysis: [8] },
          { label: '當眾打他手心、罰跪示眾以立威', tier: 'wrong', effects: { trust: -14, roleModel: -12 }, octalysis: [8] },
          { label: '全部丟給學務處記過，自己樂得清閒', tier: 'wrong', effects: { trust: -5, roleModel: -6, cohesion: -3 }, octalysis: [8] },
        ] },
      { prompt: '【善後】事件落幕，全班與雙方家長的後續怎麼收？',
        law: '（班級修復·教師責任）',
        explain: '帶全班正向重建班級氣氛、同步向雙方家長說明處理與後續關懷，避免事件在班內二次發酵。',
        choices: [
          { label: '帶全班修復氣氛，並向雙方家長說', tier: 'best', effects: { cohesion: 6, trust: 6, roleModel: 4, hp: -5 }, octalysis: [5, 1] },
          { label: '先個別關懷兩位當事人，全班再談', tier: 'good', note: '先顧當事人很細膩，但班級氛圍也需要及時安頓', effects: { cohesion: 4, trust: 4, hp: -4 }, octalysis: [5] },
          { label: '當作沒事發生，過了就閉口封存', tier: 'illegal', note: '冷處理看似息事，卻讓裂痕悶燒、易在班內二度發酵', effects: { cohesion: -4, climate: -3 }, octalysis: [] },
          { label: '在班上公開檢討這兩位當事學生', tier: 'wrong', effects: { trust: -8, climate: -5 }, octalysis: [8] },
          { label: '把責任全推給平時管教鬆散的家長', tier: 'wrong', effects: { trust: -7 }, octalysis: [8] },
        ] },
    ],
    {
      choiceIds: ['w8_d0_c0', 'w8_d1_c0', 'w8_d3_c0'],
      badge: '教育者之心',
      bonus: { roleModel: 6, trust: 4 },
    }),

  12: milestone(12, 'w12', 'W12 校園榮譽競賽', '全校創意進場與班際競賽倒數兩週。班上分成「拚一波」和「不想累」兩派。', {}, [
    { prompt: '面對這場競賽，你的定調會是什麼？',
      law: '（班級經營·動機）', explain: '凝聚士氣但量力而為、重在參與，避免把榮譽變成壓垮學生的繩索。',
      choices: [
        { label: '凝聚士氣訂務實目標，重在參與感', tier: 'best', effects: { honor: 8, cohesion: 6, hp: -6 }, octalysis: [6, 2] },
        { label: '交給幹部主導規劃，老師從旁支援', tier: 'good', note: '放手給幹部很好，但老師仍要顧及落隊的同學', effects: { honor: 5, cohesion: 4, hp: -3 }, octalysis: [3] },
        { label: '下令全員強制參加，連請假都擋下', tier: 'illegal', note: '一律強制最齊心，卻忽略個別狀況、傷害自主與信任', effects: { trust: -6, climate: -5 }, octalysis: [8] },
        { label: '只挑強手上場，其他人就晾在旁邊', tier: 'wrong', effects: { cohesion: -6, climate: -4 }, octalysis: [] },
        { label: '索性整班棄賽，省得大家都麻煩', tier: 'wrong', effects: { honor: -4, cohesion: -3 }, octalysis: [] },
      ] },
    { prompt: '練習時段怎麼排，才不會把學生操壞？',
      law: '（學生身心·過勞界線）', explain: '善用彈性課、保留休息與課業時間，避免無上限佔用晨光午休造成身心耗竭。',
      choices: [
        { label: '主要用彈性課時，保留休息與課業', tier: 'best', effects: { honor: 5, climate: 3, hp: -3 }, octalysis: [4] },
        { label: '排固定短時段密集練，並嚴守時限', tier: 'good', note: '集中短練有效率，但要盯緊別變相延長、累積疲勞', effects: { honor: 4, hp: -4 }, octalysis: [6] },
        { label: '把晨光午休下課時間全拿來練習', tier: 'illegal', note: '能練就練很常見，卻佔光休息、造成學生身心耗竭', effects: { hp: -8, climate: -5, trust: -3 }, octalysis: [8] },
        { label: '要求學生回家也得自主練到深夜', tier: 'wrong', effects: { trust: -5, climate: -3 }, octalysis: [8] },
        { label: '直接占用別科老師的課堂硬去練', tier: 'wrong', effects: { honor: -5 }, octalysis: [8] },
      ],
      conditionalBranch: {
        when: (state) => state.resources.hp < 25,
        event: {
          id: 'w12_branch_burnout', prompt: '⚠ 有學生練到崩潰大哭、家長私訊關心，你怎麼處理？',
          law: '（學生身心健康）', explain: '立即調整強度、公開向全班致意並關心當事學生，學生健康永遠優先於名次。',
          choices: [
            { id: 'w12_branch_burnout_c0', label: '立刻調整強度，關心學生並安撫全班', tier: 'best', effects: { trust: 6, climate: 5, hp: -2 }, octalysis: [5, 1] },
            { id: 'w12_branch_burnout_c1', label: '先讓那位學生休息，整體強度再慢降', tier: 'good', note: '個別放鬆可取，但其他人也已疲乏、宜整體下修', effects: { trust: 4, climate: 3, hp: -2 }, octalysis: [5] },
            { id: 'w12_branch_burnout_c2', label: '撐過這兩週，等比賽完之後再補休', tier: 'illegal', note: '先苦後甘是常見說法，卻漠視當下身心警訊', effects: { trust: -6, cohesion: -4 }, octalysis: [8] },
            { id: 'w12_branch_burnout_c3', label: '嫌學生太草莓，要他自己忍耐撐住', tier: 'wrong', effects: { trust: -9, roleModel: -6 }, octalysis: [8] },
            { id: 'w12_branch_burnout_c4', label: '當作沒看到，照原訂菜單繼續練', tier: 'wrong', effects: { trust: -7, climate: -4 }, octalysis: [8] },
          ],
        },
      } },
    { prompt: '有學生練不好，你一時氣急想罰，怎樣才不踩線？',
      law: '教師輔導與管教學生辦法注意事項 附表一', explain: '逼練、罰跪、體罰皆違法；應拆解動作個別指導、給正向回饋。',
      choices: [
        { label: '拆解動作個別指導，給予正向回饋', tier: 'best', effects: { roleModel: 6, cohesion: 4, hp: -4 }, octalysis: [1, 2] },
        { label: '讓他先在旁觀摩，再找夥伴帶他練', tier: 'good', note: '同儕帶練很溫和，但仍需老師親自的精準指導', effects: { roleModel: 3, cohesion: 3, hp: -2 }, octalysis: [5] },
        { label: '罰他多做幾組，練到動作做對為止', tier: 'illegal', note: '加練看似上進，過量卻形同體能處罰、踩到違法線', effects: { trust: -8, roleModel: -7 }, octalysis: [8] },
        { label: '一口氣當全班的面罵他拖累全班', tier: 'wrong', effects: { trust: -7, climate: -5 }, octalysis: [8] },
        { label: '叫他去旁邊罰跪，好好反省一下', tier: 'wrong', effects: { trust: -12, roleModel: -10 }, octalysis: [8] },
      ] },
    { prompt: '比賽當天臨場出了小狀況，你扮演什麼角色？',
      law: '（臨場領導）', explain: '穩住軍心、相信幹部臨場調度，老師當定海神針而非場邊指揮機。',
      choices: [
        { label: '穩住軍心，信任幹部臨場去做調度', tier: 'best', effects: { cohesion: 6, roleModel: 4, hp: -3 }, octalysis: [3, 1] },
        { label: '在旁給簡短提示，把決定權交學生', tier: 'good', note: '適度提點很好，但出手太頻會削弱幹部的臨場學習', effects: { cohesion: 4, roleModel: 2, hp: -2 }, octalysis: [3] },
        { label: '搶過來自己上陣，覺得這樣才保險', tier: 'illegal', note: '老師親自上很常見，卻架空學生、奪走他們的舞台', effects: { cohesion: -4 }, octalysis: [] },
        { label: '在場邊大吼，指責那個失誤學生', tier: 'wrong', effects: { trust: -7, climate: -5 }, octalysis: [8] },
        { label: '覺得沒希望了，索性當場宣布放棄', tier: 'wrong', effects: { cohesion: -6, honor: -4 }, octalysis: [] },
      ] },
    { prompt: '結果不如預期，這個收尾你打算怎麼帶？',
      law: '（成長型回饋）', explain: '肯定過程與付出、合照留念，讓學生記得努力的價值勝過名次。',
      choices: [
        { label: '肯定過程與付出，合照留念並復盤', tier: 'best', effects: { cohesion: 8, roleModel: 6, climate: 4, hp: -3 }, octalysis: [1, 5] },
        { label: '先一起難過一下，再帶大家看成長', tier: 'good', note: '接住情緒很真誠，但別停在失落、要轉向收穫', effects: { cohesion: 5, climate: 3, hp: -2 }, octalysis: [5] },
        { label: '帶全班檢討到底是誰害大家輸的', tier: 'illegal', note: '檢討求進步很常見，但歸咎個人會撕裂班級凝聚', effects: { trust: -8, cohesion: -6 }, octalysis: [8] },
        { label: '冷著一張臉沉默以對，讓全班自責', tier: 'wrong', effects: { climate: -5 }, octalysis: [8] },
        { label: '撂話下次再輸就要處罰全班同學', tier: 'wrong', effects: { trust: -6 }, octalysis: [8] },
      ] },
  ]),

  19: milestone(19, 'w19', 'W20 上學期期末結算', '上學期最後一週。B 表、成績、考核、申訴期權益全擠在一起。', { hp: -4 }, [
    { prompt: '輔導 B 表怎麼寫，才真的接得上下學期？',
      law: '（學生輔導紀錄）', explain: '逐生個別回饋、標記需追蹤對象並嚴守保密，B 表是接棒下學期的關鍵交接。',
      choices: [
        { label: '逐生個別回饋，標記追蹤生並守密', tier: 'best', effects: { roleModel: 10, trust: 6, hp: -7 }, octalysis: [1, 4] },
        { label: '重點生詳寫，其餘以分組評語帶過', tier: 'good', note: '抓重點可行，但全班都值得一句個別的回饋', effects: { roleModel: 5, hp: -4 }, octalysis: [4] },
        { label: '全班套上同句罐頭評語，趕快交差', tier: 'illegal', note: '罐頭評語很省時，卻失去輔導交接的真正意義', effects: { roleModel: -3 }, octalysis: [] },
        { label: '把敏感內容直接公開在班群討論', tier: 'wrong', effects: { trust: -10 }, octalysis: [8] },
        { label: '隨便填一填，反正沒人會去細看', tier: 'wrong', effects: { roleModel: -4, honor: -3 }, octalysis: [8] },
      ] },
    { prompt: '事病假併計十二天，今年考核大概落在第幾款？',
      law: '教師成績考核辦法 §4 Ⅰ①', explain: '事病假併計未超過 14 日、且教學認真服務熱誠者，適用第 1 款：晉級並給一個月獎金。',
      choices: [
        { label: '第一款，晉級並核發一個月的獎金', tier: 'best', effects: { honor: 3 }, octalysis: [2, 4] },
        { label: '應屬第一款，仍以教學考評為準', tier: 'good', note: '提醒看考評很周全，但天數已達第一款門檻', effects: { honor: 1 }, octalysis: [4] },
        { label: '保守起見自認第二款，少領較心安', tier: 'illegal', note: '自我看低看似謙虛，卻不符第一款應有的核給', effects: {}, octalysis: [8] },
        { label: '主張一定落到留原薪款，什麼都沒', tier: 'wrong', effects: {}, octalysis: [] },
        { label: '主張事病假天數對考核完全沒影響', tier: 'wrong', effects: {}, octalysis: [] },
      ] },
    { prompt: '你收到一張自認不公的學期考核通知，權益是？',
      law: '教師申訴評議委員會組織及評議辦法', explain: '得於收到通知之次日起 30 日內，向教師申訴評議委員會提起申訴。',
      choices: [
        { label: '收到次日起三十日內向申評會提訴', tier: 'best', effects: { honor: 4, roleModel: 3 }, octalysis: [4] },
        { label: '先備齊事證，於三十日內正式提訴', tier: 'good', note: '備齊事證很好，但別讓準備拖過了申訴的時效', effects: { honor: 2 }, octalysis: [4] },
        { label: '先私下找校長理論，盼能私下喬定', tier: 'illegal', note: '私下溝通很常見，但只談不申訴可能錯過救濟時效', effects: { trust: -3 }, octalysis: [8] },
        { label: '想說只有十五日，過了大概就沒救', tier: 'wrong', effects: {}, octalysis: [] },
        { label: '摸摸鼻子默默接受，乾脆放棄申訴', tier: 'wrong', effects: { hp: -3 }, octalysis: [] },
      ] },
    { prompt: '學期最後一堂課，你想怎麼帶才有意義？',
      law: '（班級經營·儀式感）', explain: '帶全班回顧成長、寫一封給自己的信，把半年的努力收束成有意義的句點。',
      choices: [
        { label: '帶全班回顧成長，寫封給自己的信', tier: 'best', effects: { cohesion: 8, roleModel: 6, climate: 4, hp: -4 }, octalysis: [1, 3] },
        { label: '辦個簡單同樂會，聊聊這學期收穫', tier: 'good', note: '輕鬆收尾很好，但少了靜下來回顧的反思深度', effects: { cohesion: 5, climate: 4, hp: -2, budget: -600 }, octalysis: [5] },
        { label: '照常考試，一直考到下課鐘響為止', tier: 'illegal', note: '把握時間考試很常見，卻錯過收束情感的關鍵時刻', effects: { climate: -4 }, octalysis: [] },
        { label: '放部影片打發，自己在旁改考卷', tier: 'wrong', effects: { cohesion: -2 }, octalysis: [] },
        { label: '當眾數落整學期最調皮搗蛋的人', tier: 'wrong', effects: { trust: -6, climate: -5 }, octalysis: [8] },
      ] },
    { prompt: '幾個狀況學生要過寒假，你怎麼安頓他們？',
      law: '兒少權益保障法 §53（持續關懷）', explain: '個別致電家長交接寒假關懷；若知悉高風險情事仍須依法通報，不因放假中止。',
      choices: [
        { label: '個別致電交接寒假關懷，必要時通報', tier: 'best', effects: { trust: 8, roleModel: 5, hp: -6 }, octalysis: [5, 1] },
        { label: '逐一傳訊關心，高風險再致電家長', tier: 'good', note: '訊息關懷有效率，但高風險戶仍以通話最為穩妥', effects: { trust: 5, hp: -3 }, octalysis: [5] },
        { label: '知道有家暴疑慮，想等開學再通報', tier: 'illegal', note: '想等放假結束很常見，卻違反知悉即須通報的義務', effects: { trust: -10, honor: -8 }, octalysis: [8] },
        { label: '統一發張罐頭叮嚀單就當作交代', tier: 'wrong', effects: { trust: 2 }, octalysis: [] },
        { label: '想說都放假了，這些事就與我無關', tier: 'wrong', effects: { trust: -6, roleModel: -5 }, octalysis: [8] },
      ] },
  ]),
};

// ───────────────────────────── 對外組裝 ─────────────────────────────
// 解析某週的 5 天內容：里程碑回手寫劇情；平時週依種子抽題
// ───────────────────────────── 學期 / 週次 / 特殊週 ─────────────────────────────
// 上學期＝第1–20週（index 0–19）；下學期＝第21–40週（index 20–39）
// 段考週（學習模式）：第 7/14/20/27/34/40 週；校慶＋運動會週：第 10 週
export const EXAM_WEEKS = [6, 13, 19, 26, 33, 39];
export const EVENT_WEEKS = [9];
const EXAM_THEME_WEEKS = [6, 13, 26, 33, 39]; // 第20週(index19)已是手寫期末里程碑，內容沿用
const EXAM_CATS = ['段考'];
const EVENT_CATS = ['運動會', '校慶', '班級競賽'];

// 校內活動／競賽時間序（依導師作息，0-indexed；避開里程碑/段考/校慶週）
// tag＝右上徽章；cats＝抽題分類；match＝在分類內再以關鍵字精選（不足才放寬）
const ACTIVITY_WEEKS = {
  4:  { tag: '科展構思', title: '科展構思週', cats: ['競賽'], match: /科展|科學展/,
        intro: '科展構思啟動。引導孩子找題目、組隊、規劃進度。' },
  7:  { tag: '奧林匹亞', title: '奧林匹亞校內賽', cats: ['競賽'], match: /奧林匹亞|趣味科學|科學競賽/,
        intro: '段考後，奧林匹亞趣味科學校內初決賽，選出班級代表隊。' },
  14: { tag: '資訊競賽', title: '資訊類科競賽週', cats: ['競賽'], match: /資訊|程式|電腦|科技/,
        intro: '資訊類科競賽起跑，鼓勵有興趣的孩子報名參賽。' },
  15: { tag: '奧林匹亞', title: '全市奧林匹亞', cats: ['競賽'], match: /奧林匹亞|趣味科學/,
        intro: '全市奧林匹亞趣味競賽，帶代表隊出征，平衡訓練與課業。' },
  16: { tag: '數學競試', title: '縣市數學競試', cats: ['競賽'], match: /數學/,
        intro: '縣市端數學競試，陪選手做最後衝刺與心理建設。' },
  23: { tag: '國語文', title: '國語文校內賽', cats: ['語文競賽'],
        intro: '下學期國語文競賽校內賽開跑：作文、字音字形、演講、朗讀。' },
  24: { tag: '科展決選', title: '科展決選/生科', cats: ['競賽'], match: /科展|生活科技|生科/,
        intro: '科展校內決選預賽，加上生活科技類科競賽。' },
  25: { tag: '袋鼠盃', title: '袋鼠盃數學賽', cats: ['競賽'], match: /袋鼠|數學/,
        intro: '袋鼠盃數學競賽週，營造正向的數學挑戰氛圍。' },
  27: { tag: '國語文', title: '國語文決賽', cats: ['語文競賽'],
        intro: '國語文競賽分階段決賽，陪選手最後磨稿、正音。' },
  36: { tag: '英文活動', title: '英文科活動週', cats: ['語文競賽'], match: /英文|英語|spelling|speech/i,
        intro: '英文科活動週：演說、Spelling Bee、英文班級競賽。' },
  37: { tag: '社會活動', title: '社會科活動週', cats: ['競賽', '語文競賽'], match: /百萬中學堂|社會/,
        intro: '社會科活動週：百萬中學堂等班級知識競賽。' },
};

export function weekMeta(index) {
  const term = index < 20 ? '上學期' : '下學期';
  let kind = 'daily', badge = '';
  if (MILESTONES[index]) { kind = 'milestone'; badge = '里程碑'; }
  if (ACTIVITY_WEEKS[index] && !MILESTONES[index]) { kind = 'activity'; badge = ACTIVITY_WEEKS[index].tag; }
  if (EVENT_WEEKS.includes(index)) { kind = 'event'; badge = '校慶運動會'; }
  if (EXAM_WEEKS.includes(index)) { kind = 'exam'; badge = '段考'; }
  return { index, term, weekNo: index + 1, kind, badge,
    label: `${term}・第${index + 1}週` };
}

// 依分類(＋可選關鍵字)＋種子抽 count 題：題目精準對應該週活動
function pickByCategory(weekIndex, runSeed, cats, count = DAYS_PER_WEEK, matchRe = null) {
  const seed = (runSeed ^ ((weekIndex + 1) * 0x85ebca6b)) >>> 0;
  const rand = mulberry32(seed);
  let pool = LEGAL_POOL.filter((q) => cats.includes(q.cat) &&
    (!matchRe || matchRe.test(q.scenario + q.law)));
  if (pool.length < count) pool = LEGAL_POOL.filter((q) => cats.includes(q.cat)); // 放寬：去掉關鍵字
  if (pool.length < count) pool = LEGAL_POOL.slice();
  const arr = pool.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

export function resolveWeek(weekIndex, runSeed = 1) {
  const meta = weekMeta(weekIndex);
  const m = MILESTONES[weekIndex];
  if (m) return { ...m, meta, title: m.title.replace(/^W\d+\s*/, '') };
  if (EXAM_THEME_WEEKS.includes(weekIndex)) {
    return {
      index: weekIndex, type: 'exam', meta,
      title: `第${weekIndex + 1}週 段考週`,
      intro: '段考逼近，進入「學習模式」。這五天的選擇，決定全班能不能靜下心、穩住節奏。',
      onEnter: {},
      days: pickByCategory(weekIndex, runSeed, EXAM_CATS).map(itemToBeat),
    };
  }
  if (EVENT_WEEKS.includes(weekIndex)) {
    return {
      index: weekIndex, type: 'event', meta,
      title: `第${weekIndex + 1}週 校慶運動會`,
      intro: '校慶與運動會週！選手選拔、創意進場、班級榮譽全擠在一起，帶全班一起拚一波。',
      onEnter: {},
      days: pickByCategory(weekIndex, runSeed, EVENT_CATS).map(itemToBeat),
    };
  }
  const act = ACTIVITY_WEEKS[weekIndex];
  if (act) {
    return {
      index: weekIndex, type: 'activity', meta,
      title: `第${weekIndex + 1}週 ${act.title}`,
      intro: act.intro,
      onEnter: {},
      days: pickByCategory(weekIndex, runSeed, act.cats, DAYS_PER_WEEK, act.match).map(itemToBeat),
    };
  }
  return {
    index: weekIndex, type: 'daily', meta,
    title: `第${weekIndex + 1}週 導師現場`,
    intro: '本週的五天導師現場，每天一道情境，見招拆招。',
    onEnter: {},
    days: pickDailyQuestions(weekIndex, runSeed).map(itemToBeat),
  };
}

// 地圖與型別判斷用的骨架（不含當週題目，題目由 resolveWeek 解析）
export const WEEKS = Array.from({ length: 40 }, (_, i) => {
  const meta = weekMeta(i);
  const m = MILESTONES[i];
  if (m) return { ...m, meta, title: m.title.replace(/^W\d+\s*/, '') };
  const title = meta.kind === 'exam' ? `第${i + 1}週 段考週`
    : meta.kind === 'event' ? `第${i + 1}週 校慶運動會`
    : meta.kind === 'activity' ? `第${i + 1}週 ${ACTIVITY_WEEKS[i].title}`
    : `第${i + 1}週 導師現場`;
  return { index: i, type: meta.kind, title, meta };
});
