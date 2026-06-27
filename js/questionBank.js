// 自動產生：主題情境題（含競賽 sub 子類）。請勿手改流水號。
export const EXTRA_QUESTIONS = [
  {
    "id": "sp_001",
    "cat": "運動會",
    "diff": 3,
    "scenario": "班上兩個孩子都想跑大隊接力最後一棒，我該怎麼決定人選？",
    "law": "班級經營原則：程序正義，標準公開可檢驗",
    "explain": "用公開計時數據決定棒次，標準攤在陽光下，落選的孩子也能心服口服。",
    "choices": [
      {
        "label": "公開計時測驗讓全班看數據決定棒次人選",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 5,
          "trust": 5,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "參考體育老師專業建議直接指定跑最快的",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "專業判斷雖快，但略過孩子參與，公平感稍弱"
      },
      {
        "label": "私下喬給平常人緣好的孩子免得有人鬧",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "honor": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "看似息事寧人，其實犧牲公平，埋下不信任"
      },
      {
        "label": "用猜拳決定棒次省得自己被家長埋怨麻煩",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "誰先舉手報名就給誰反正先搶先贏最公平",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_002",
    "cat": "運動會",
    "diff": 2,
    "scenario": "體育股長想把接力名額全給社團好友，我發現後該如何處理？",
    "law": "班級經營原則：幹部權力需受公開標準制衡",
    "explain": "重辦公開選拔讓成績說話，既糾正偏私，也教幹部權力要服膺公平。",
    "choices": [
      {
        "label": "重新辦公開選拔用碼表成績說話排出名單",
        "tier": "best",
        "effects": {
          "honor": 6,
          "trust": 6,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "請體育股長補上落選同學的測驗紀錄佐證",
        "tier": "good",
        "effects": {
          "trust": 3,
          "honor": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "補佐證能補救，但仍由股長主導，公信稍弱"
      },
      {
        "label": "睜隻眼閉隻眼反正股長也是熱心幫忙排班",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "放任偏私換和諧，會讓孩子學到關係勝過實力"
      },
      {
        "label": "直接罵股長偏心當場撤掉他的幹部職務",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "名單照舊送出免得得罪股長那群好朋友們",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_003",
    "cat": "運動會",
    "diff": 3,
    "scenario": "跑很快的孩子說同學拜託他讓賢，我該不該介入這場禮讓？",
    "law": "班級經營原則：知情同意與公開說明",
    "explain": "請雙方當面把實力與意願談清楚，讓禮讓建立在透明而非私下交易上。",
    "choices": [
      {
        "label": "找雙方坐下談清楚以實力與意願共同定案",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 5,
          "honor": 4,
          "hp": -4
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "尊重孩子讓賢但請他公開說明退讓的理由",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "尊重選擇不錯，但少了實力把關，恐被人情綁架"
      },
      {
        "label": "默許私下交易反正兩人都點頭沒人吃虧",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "honor": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "表面雙方同意，實則開了檯面下喬事的壞先例"
      },
      {
        "label": "強迫快的孩子一定要上場不准他亂讓賢",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "假裝沒看到讓他們自己喬完再交名單給我",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -4,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_004",
    "cat": "運動會",
    "diff": 1,
    "scenario": "大隊接力剩兩週，班上幾個孩子練習老是偷懶，我怎麼提醒？",
    "law": "班級經營原則：目標可視化與正向監督",
    "explain": "把練習量化公開追蹤，用集體目標帶動偷懶的孩子，而非羞辱或放生。",
    "choices": [
      {
        "label": "帶全班排晨練表把練習量貼公布欄追蹤",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 4,
          "climate": 3,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "私下找偷懶的孩子聊聊提醒他別拖累全班",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "個別溝通溫和，但缺乏團體機制，效果易反彈"
      },
      {
        "label": "公開點名偷懶的人逼他們在全班面前認錯",
        "tier": "illegal",
        "effects": {
          "climate": -4,
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "公開羞辱看似有效，實則傷自尊又破壞班風"
      },
      {
        "label": "直接放生不管反正輸了是他們自己的責任",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "用扣考試分數來威脅不練習的孩子去操場",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_005",
    "cat": "運動會",
    "diff": 2,
    "scenario": "有孩子嘴上答應練習卻每次都找藉口請假，我該如何讓他動起來？",
    "law": "班級經營原則：先理解動機再對症調整",
    "explain": "先找出他逃避的真正原因再調整練法，比起硬逼或放任都更能讓他持久投入。",
    "choices": [
      {
        "label": "一起找出他逃避的原因再調整適合的練法",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 4,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "安排小組長盯著他陪練降低單獨偷懶機會",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "同儕陪伴有效，但治標不治本，沒解開抗拒根源"
      },
      {
        "label": "當眾說他沒練好就別怪同學賽後排擠他",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "用排擠當威脅，等於默許霸凌，後患無窮"
      },
      {
        "label": "隨他去反正一個人擺爛也影響不了大局",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "通通罰他繞操場跑十圈直到他願意配合",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_006",
    "cat": "運動會",
    "diff": 2,
    "scenario": "班上分成想拼成績與只想參加的兩派，練習態度差很多怎麼整合？",
    "law": "班級經營原則：共同目標凝聚異質群體",
    "explain": "訂出全班都認同的目標並讓兩派各認領適合的任務，把對立轉化為合作分工。",
    "choices": [
      {
        "label": "訂出全班都認同的目標讓兩派各認領任務",
        "tier": "best",
        "effects": {
          "cohesion": 7,
          "honor": 4,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "把想拼的人編一組帶動只想玩的那群跟上",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "honor": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "以強帶弱可行，但分組標籤化恐加深兩派隔閡"
      },
      {
        "label": "偏袒拚勁強的那派把擺爛的人晾在一邊",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "trust": -2
        },
        "octalysis": [
          8
        ],
        "note": "偏心熱血派看似務實，卻把半個班推到對立面"
      },
      {
        "label": "索性取消團體項目大家各跑各的別吵了",
        "tier": "wrong",
        "effects": {
          "cohesion": -6,
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "罵想玩那派沒榮譽心要他們檢討自己態度",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_007",
    "cat": "校慶",
    "diff": 1,
    "scenario": "校慶創意進場要設計主題，全班七嘴八舌定不下來怎麼辦？",
    "law": "班級經營原則：集思廣益後民主表決",
    "explain": "用便利貼收斂點子再公開投票，讓主題出自全班共識，孩子才會更有參與感。",
    "choices": [
      {
        "label": "用便利貼收集點子再讓全班投票選出主題",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "列三個老師覺得可行的方案讓孩子們挑選",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "收斂選項有效率，但點子由老師先框，創意受限"
      },
      {
        "label": "直接拍板用自己喜歡的主題省得拖時間",
        "tier": "illegal",
        "effects": {
          "cohesion": -4,
          "trust": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "效率換掉參與，孩子對非自選的主題容易不投入"
      },
      {
        "label": "誰聲音大就聽誰的吵贏的人說了算數就好",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "隨便抽籤決定主題免得大家繼續爭論不休",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_008",
    "cat": "校慶",
    "diff": 2,
    "scenario": "進場道具要花不少錢，有家長反映負擔太重，我該如何調整？",
    "law": "班級經營原則：兼顧公平與弱勢的成本控制",
    "explain": "改用回收材料並由班費共同分攤，既降低家庭負擔又顧及到每個孩子的公平。",
    "choices": [
      {
        "label": "改用回收紙箱與班費分攤降低家庭負擔",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "budget": -3,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "設定每人花費上限超過的部分由班費吸收",
        "tier": "good",
        "effects": {
          "climate": 3,
          "budget": -2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "上限制度公平，但仍要求人人出錢，弱勢未完全顧到"
      },
      {
        "label": "要求每人均攤費用沒繳的就不能一起進場",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ],
        "note": "一刀切均攤看似公平，卻把繳不起的孩子排除在外"
      },
      {
        "label": "堅持原方案叫嫌貴的家長自己想辦法湊錢",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆取消道具讓孩子空手進場最省事省錢",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_009",
    "cat": "校慶",
    "diff": 2,
    "scenario": "創意進場分工時，幾個孩子搶當主角其他人沒事做怎麼分配？",
    "law": "班級經營原則：人人有角色的共榮設計",
    "explain": "拆出多種角色讓每個人都有份，把搶當主角的能量巧妙導向整個團隊的分工。",
    "choices": [
      {
        "label": "拆出表演道具音樂指揮多種角色人人有份",
        "tier": "best",
        "effects": {
          "cohesion": 7,
          "climate": 4,
          "honor": 3,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "讓搶當主角的孩子輪流上場其他人當後援",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "輪流折衷可行，但仍隱含主配角階級，未真正打平"
      },
      {
        "label": "主角給平常表現好的人其他人乖乖配合",
        "tier": "illegal",
        "effects": {
          "climate": -4,
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": [
          8
        ],
        "note": "以表現論資排輩，會讓其他孩子覺得舞台不屬於他"
      },
      {
        "label": "主角誰搶到算誰的剩下的人自己找事做",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "為了公平乾脆不排主角全班一起亂走就好",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_010",
    "cat": "運動會",
    "diff": 1,
    "scenario": "想組加油團但只有幾個孩子願意舉牌喊口號，我怎麼帶起氣氛？",
    "law": "班級經營原則：降低參與門檻引發共鳴",
    "explain": "設計人人都能上手的口號手勢，讓加入這件事毫無壓力，氣氛自然就會擴散開。",
    "choices": [
      {
        "label": "設計簡單口號與手勢讓每個人輕鬆加入",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "honor": 3,
          "hp": -4
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "先找幾個活潑的孩子帶頭再慢慢拉其他人",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "以點帶面可行，但慢熱孩子可能一直被晾在外圍"
      },
      {
        "label": "規定全班都要喊不喊的就記點數懲處警告",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "強制加油扼殺真心，喊出來的口號只剩空殼"
      },
      {
        "label": "沒人想喊就算了反正加油又不會加分數",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "點名害羞的孩子站到最前面強迫他帶動唱",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_011",
    "cat": "運動會",
    "diff": 2,
    "scenario": "啦啦隊練習時有孩子嫌動作幼稚不肯跳，我該怎麼處理這抗拒？",
    "law": "班級經營原則：賦權改編化抗拒為投入",
    "explain": "邀他一起改編成班上都認可的版本，把抗拒的心情轉成主動創作的參與感。",
    "choices": [
      {
        "label": "邀他一起改編成班上覺得帥氣的版本動作",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "讓他負責音響或道具用別的方式參與其中",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          4
        ],
        "note": "另闢角色不錯，但等於默許他迴避，未化解抗拒"
      },
      {
        "label": "笑他扭捏不大方逼他在全班面前跳一次看",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "用嘲笑逼就範，傷自尊也讓全班學會公開取笑"
      },
      {
        "label": "隨他坐在旁邊看反正少一個人也沒差別",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "警告他不跳就把他調去打掃廁所當處罰",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_012",
    "cat": "運動會",
    "diff": 2,
    "scenario": "隔壁班加油聲量壓過我們，孩子們士氣有點低落，我怎麼鼓舞？",
    "law": "班級經營原則：聚焦團結而非與人較勁",
    "explain": "帶大家把口號喊得更整齊並提醒比的是團結而非音量，穩住自家陣腳就好。",
    "choices": [
      {
        "label": "帶大家換上自製大聲公把口號喊得更整齊",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "honor": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "提醒孩子比的是團結不是音量別自亂陣腳",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          1
        ],
        "note": "提醒心態正確，但缺實際行動，士氣未必拉得回"
      },
      {
        "label": "反過來叫孩子噓對方班級用氣勢壓回去",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "honor": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "用噓聲反擊看似提氣，卻把競爭變成挑釁與失格"
      },
      {
        "label": "嫌孩子聲音太小當場數落他們不夠投入",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "算了輸人不輸陣這種事不重要喊不喊隨意",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_013",
    "cat": "班級競賽",
    "diff": 1,
    "scenario": "班服設計圖有好幾款，全班投票還是平手，我該怎麼定案？",
    "law": "班級經營原則：僵局中尋求整合共識",
    "explain": "把平手兩款合併設計再請全班確認，把二選一的對立化為共同創作的整合。",
    "choices": [
      {
        "label": "把平手兩款合併設計再請全班做最後確認",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "加開一輪決選票讓孩子在兩款之間二選一",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "再投一輪公平，但仍是零和，落選那派難免失落"
      },
      {
        "label": "我直接挑一款省得再投下去沒完沒了拖延",
        "tier": "illegal",
        "effects": {
          "cohesion": -4,
          "trust": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "老師裁決雖快，卻剝奪了孩子好不容易的參與感"
      },
      {
        "label": "誰設計的圖就用誰的免得設計者鬧情緒",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "兩款都不用重新叫美術好的孩子再畫一張",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -3,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_014",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "班服要收錢訂做，有孩子家裡狀況不方便繳費，我該怎麼處理？",
    "law": "班級經營原則：保護弱勢的隱私與尊嚴",
    "explain": "私下了解後用班費補助讓他一樣穿上班服，默默化解困境而不傷他的自尊。",
    "choices": [
      {
        "label": "私下了解狀況用班費補助讓他一樣有班服",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "budget": -3,
          "hp": -4
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "找班費或募款默默幫他補上不讓別人知道",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2,
          "budget": -2
        },
        "octalysis": [
          5
        ],
        "note": "保密補助很好，但臨時募款不穩定，恐難次次都成"
      },
      {
        "label": "公告沒繳費的名單催促他們盡快把錢交齊",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "公開催繳等於把家境攤在全班面前，傷害難復原"
      },
      {
        "label": "沒繳錢就不發班服讓他比賽當天穿便服站",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "叫他自己跟同學借錢繳不然就別參加團體",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_015",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "班旗設計被指抄襲別班圖樣，孩子們吵成一團，我該如何收場？",
    "law": "班級經營原則：誠信為先並維護原創",
    "explain": "帶全班比對差異後共同改出原創的版本，把這場爭執導向誠信與創作的學習。",
    "choices": [
      {
        "label": "帶全班比對差異再一起改出原創的新版本",
        "tier": "best",
        "effects": {
          "honor": 6,
          "cohesion": 4,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "請設計的孩子說明發想過程釐清是否誤會",
        "tier": "good",
        "effects": {
          "trust": 3,
          "honor": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "先釐清很對，但若真撞圖仍需改，否則爭議延燒"
      },
      {
        "label": "怕麻煩直接沿用反正比賽又沒人會去查證",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "trust": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "僥倖沿用看似省事，卻教孩子抄襲不被抓就沒事"
      },
      {
        "label": "罵設計的孩子害全班丟臉要他公開道歉認錯",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -5,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "乾脆不做班旗了省得被人說閒話惹來爭議",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_016",
    "cat": "運動會",
    "diff": 1,
    "scenario": "大隊接力輸了，掉棒的孩子躲在角落哭，我第一時間該怎麼做？",
    "law": "班級經營原則：先處理情緒再處理事情",
    "explain": "先蹲下陪他穩住情緒並肯定他的努力，等安全感建立後該檢討的事才談得下去。",
    "choices": [
      {
        "label": "先蹲下陪他穩定情緒再肯定他全力以赴了",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "帶他離開人群到旁邊冷靜避免被同學圍觀",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "隔離圍觀有保護性，但少了正向回饋，安撫不夠完整"
      },
      {
        "label": "當場檢討他掉棒的動作提醒下次別再犯錯",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "情緒高點談技術，等於在傷口上撒鹽，孩子更崩潰"
      },
      {
        "label": "叫他別哭了輸贏本來就是兵家常事而已",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "直接點出是他害全班輸要他跟同學說抱歉",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_017",
    "cat": "運動會",
    "diff": 2,
    "scenario": "輸了之後班上開始有人怪罪特定幾個同學，我該如何阻止獵巫？",
    "law": "班級經營原則：團隊責任不歸咎個人",
    "explain": "開班會把責任拉回整個團隊並強調無人該被怪，才能及時止住獵巫的風向。",
    "choices": [
      {
        "label": "召開班會把責任拉回團隊強調沒人該被怪",
        "tier": "best",
        "effects": {
          "cohesion": 7,
          "trust": 5,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "私下提醒帶頭怪罪的孩子將心比心換位想",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "個別勸導溫和，但風向若已起，私下勸難擋全班"
      },
      {
        "label": "假裝沒聽到讓孩子們自己吵一吵就會沒事",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "放任獵巫等不到自癒，被怪的孩子早已受傷"
      },
      {
        "label": "附和大家指出確實是那幾個人表現最差勁",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "罰帶頭怪罪的孩子寫悔過書警告他別亂講",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_018",
    "cat": "運動會",
    "diff": 3,
    "scenario": "有家長私訊責怪某孩子害全班輸掉，孩子也看到了很受傷怎麼辦？",
    "law": "班級經營原則：先護學生再對外溝通",
    "explain": "先安撫受傷的孩子再正式回覆家長澄清團隊責任，雙線並行既止血又止謠。",
    "choices": [
      {
        "label": "先安撫孩子再正式回覆家長澄清團隊責任",
        "tier": "best",
        "effects": {
          "trust": 7,
          "climate": 5,
          "cohesion": 4,
          "hp": -5
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "把對話導回私下溝通避免在群組繼續延燒",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          6
        ],
        "note": "導向私聊能滅火，但孩子的受傷若沒先處理仍會痛"
      },
      {
        "label": "轉貼訊息給全班家長讓大家評理討個公道",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ],
        "note": "公開對質看似討公道，卻把孩子推上更大的火堆"
      },
      {
        "label": "叫孩子別理會家長的話自己心臟強一點吧",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "在群組公開反駁那位家長要他別亂帶風向",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_019",
    "cat": "運動會",
    "diff": 2,
    "scenario": "比賽中對手跌倒，我們孩子停下扶他導致落後，我怎麼回應？",
    "law": "班級經營原則：價值教育重於名次",
    "explain": "在全班面前肯定這份善意比名次更值得驕傲，把孩子的品格放在勝負之上。",
    "choices": [
      {
        "label": "在全班面前肯定這份善意比名次更值得傲",
        "tier": "best",
        "effects": {
          "honor": 7,
          "climate": 5,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "私下稱讚他的選擇但提醒比賽仍要全力跑",
        "tier": "good",
        "effects": {
          "honor": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "兼顧不錯，但附帶提醒易讓善意被打折，公開肯定更純粹"
      },
      {
        "label": "嘴上稱讚心裡可惜暗示他下次別管先衝過",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "trust": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "表裡不一的稱讚，孩子聽得出來，反而學會功利"
      },
      {
        "label": "責怪他多管閒事害全班痛失到手的好名次",
        "tier": "wrong",
        "effects": {
          "honor": -6,
          "climate": -5,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "笑他傻反正規則沒規定一定要停下來扶人",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_020",
    "cat": "運動會",
    "diff": 2,
    "scenario": "孩子發現對手犯規裁判沒看到，跑來問我要不要抗議，怎麼引導？",
    "law": "班級經營原則：循正當程序維護公平",
    "explain": "帶他依正規程序向裁判反映，教孩子在乎公平的同時也要懂得走對的管道。",
    "choices": [
      {
        "label": "帶他依正規程序向裁判反映由大會來裁決",
        "tier": "best",
        "effects": {
          "honor": 6,
          "trust": 5,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "肯定他重視公平但提醒抗議要有真憑實據",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "提醒舉證很對，但沒陪他行動，孩子可能不知如何做"
      },
      {
        "label": "叫他別聲張我們也偷偷犯規扳回來剛好平",
        "tier": "illegal",
        "effects": {
          "honor": -6,
          "trust": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "以惡制惡看似扳平，實則把孩子也拉進作弊的泥淖"
      },
      {
        "label": "衝去場邊大聲咆哮裁判要求立刻重新比過",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "算了多一事不如少一事忍下來別得罪裁判",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_021",
    "cat": "運動會",
    "diff": 3,
    "scenario": "我們班贏了但對手哭說不公平，我們孩子卻得意嘲笑對方怎麼辦？",
    "law": "班級經營原則：勝利更要展現尊重",
    "explain": "立刻制止嘲笑並帶孩子主動向對手致意，讓勝利長出該有的風度而非傲慢。",
    "choices": [
      {
        "label": "立刻制止嘲笑帶孩子向對手致意展現風度",
        "tier": "best",
        "effects": {
          "honor": 7,
          "climate": 5,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "先壓下得意的氣焰事後再跟全班談精神",
        "tier": "good",
        "effects": {
          "honor": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          1
        ],
        "note": "事後再談有反思空間，但當下不致意，對手已受傷"
      },
      {
        "label": "覺得贏家本來就有資格囂張就睜隻眼放過",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "climate": -4,
          "trust": -2
        },
        "octalysis": [
          8
        ],
        "note": "放任囂張看似無傷，卻把運動精神教成了弱肉強食"
      },
      {
        "label": "跟著孩子一起笑對方輸不起愛找藉口推託",
        "tier": "wrong",
        "effects": {
          "honor": -6,
          "climate": -5,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "罵自己班的孩子沒品當場要他們跪下道歉",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_022",
    "cat": "校慶",
    "diff": 1,
    "scenario": "園遊會要決定賣什麼，孩子們提的點子五花八門怎麼收斂？",
    "law": "班級經營原則：可行性評估後共同決策",
    "explain": "用成本與人力評估表帶全班篩出可行品項，讓最後的決定既務實又有共識。",
    "choices": [
      {
        "label": "用成本與人力評估表帶全班篩出可行品項",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "列出兩三個老師評估過的選項讓孩子表決",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "先篩再選有效率，但選項由老師定，孩子創意受限"
      },
      {
        "label": "直接決定賣飲料因為最好賣又不必我操心",
        "tier": "illegal",
        "effects": {
          "cohesion": -4,
          "trust": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "老師獨斷雖省事，孩子對沒參與的決定容易不買單"
      },
      {
        "label": "誰想到的點子炫就用誰的不管做不做得到",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -4,
          "budget": -2
        },
        "octalysis": []
      },
      {
        "label": "隨便選一個免得開會開太久耽誤下課時間",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -3,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_023",
    "cat": "校慶",
    "diff": 2,
    "scenario": "擺攤分工有人狂忙有人翹班去逛，忙的孩子來抱怨不公平怎麼辦？",
    "law": "班級經營原則：制度化輪值確保公平",
    "explain": "重排輪班表讓每個人都有顧攤與休息的時段，用公平的制度取代抱怨與偏勞。",
    "choices": [
      {
        "label": "重排輪班表讓每個人都有顧攤與休息時段",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "公開排出值班表讓翹班的孩子無所遁形補",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          6
        ],
        "note": "公開值班有約束力，但帶點公審味，不如先重排溫和"
      },
      {
        "label": "叫抱怨的孩子多擔待反正能者就是要多勞動",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "叫認真的人多扛，等於懲罰負責任，制度根本沒修"
      },
      {
        "label": "不管它反正攤位有人顧就好誰忙誰閒隨便",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "當場痛罵翹班的孩子要他們補站雙倍時數",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_024",
    "cat": "校慶",
    "diff": 2,
    "scenario": "隔壁班搶在我們攤位前發傳單拉客，孩子很氣要去理論怎麼處理？",
    "law": "班級經營原則：良性競爭優於正面衝突",
    "explain": "帶孩子用更吸睛的方式把客人拉回來，把可能的衝突轉化為良性的較勁。",
    "choices": [
      {
        "label": "帶孩子用更吸睛的招呼方式正面把客拉回",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "budget": 3,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "提醒孩子良性競爭就好別讓衝突壞了氣氛",
        "tier": "good",
        "effects": {
          "climate": 3,
          "cohesion": 2,
          "hp": -2
        },
        "octalysis": [
          1
        ],
        "note": "提醒心態好，但沒給實際對策，氣消了生意還是輸"
      },
      {
        "label": "默許孩子也擠到對方攤前搶客以牙還牙回",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "honor": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "以牙還牙看似不吃虧，卻把校慶變成兩班的對峙"
      },
      {
        "label": "衝去找對方班導理論質問他們為何搶生意",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "叫孩子忍氣吞聲別計較反正我們本來賣不好",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_025",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "園遊會賺的錢孩子想直接分掉，我認為該納班費，怎麼說服他們？",
    "law": "班級經營原則：共同財產民主議決用途",
    "explain": "帶全班討論用途並表決使用方式，讓收入納入班費這件事出自共識而非命令。",
    "choices": [
      {
        "label": "帶全班討論用途列出共同需求再表決使用",
        "tier": "best",
        "effects": {
          "cohesion": 7,
          "trust": 5,
          "budget": 3,
          "hp": -5
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "解釋納入班費的好處讓孩子投票決定比例",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2,
          "budget": 2
        },
        "octalysis": [
          2
        ],
        "note": "折衷投票不錯，但開放分掉部分，集體資源會被稀釋"
      },
      {
        "label": "直接宣布全數歸班費孩子的意見就不必問",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "目的雖正當，獨斷剝奪參與，孩子對班費反更冷感"
      },
      {
        "label": "隨孩子高興當場把錢分一分省得有人有意見",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "budget": -4,
          "honor": -2
        },
        "octalysis": []
      },
      {
        "label": "偷偷把錢收進班費帳戶不讓孩子知道總數額",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_026",
    "cat": "班級競賽",
    "diff": 3,
    "scenario": "攤位收入算帳時短少幾百元，孩子互相猜疑是誰拿的怎麼處理？",
    "law": "班級經營原則：對事不對人地重建信任",
    "explain": "帶大家重新對帳釐清流程再共同檢討，把彼此的猜疑導向制度面的改進。",
    "choices": [
      {
        "label": "帶大家一起重新對帳釐清流程再檢討改進",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 5,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "先假設是記帳疏失調出明細逐筆核對落差",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2,
          "hp": -2
        },
        "octalysis": [
          7
        ],
        "note": "善意推定很好，但若真有人拿錢，逐筆核對仍要面對"
      },
      {
        "label": "為息事寧人自己默默掏錢補上不追究缺口",
        "tier": "illegal",
        "effects": {
          "trust": -4,
          "cohesion": -3,
          "budget": -2
        },
        "octalysis": [
          8
        ],
        "note": "老師墊錢看似圓滿，卻讓問題被掩蓋，制度沒長進"
      },
      {
        "label": "逐一盤問每個孩子逼問到有人承認拿錢為止",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "算了幾百塊而已別查了傷感情又查不出結果",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_027",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "有孩子質疑班費帳目不清，要求公開明細，我該如何回應這質疑？",
    "law": "班級經營原則：財務公開接受共同監督",
    "explain": "主動公開完整收支並邀孩子一起核帳，把孩子的質疑轉化為透明與信任。",
    "choices": [
      {
        "label": "主動公開完整收支明細並邀孩子一起核帳",
        "tier": "best",
        "effects": {
          "trust": 7,
          "climate": 5,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "請質疑的孩子擔任財務小老師一起管帳目",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2,
          "hp": -2
        },
        "octalysis": [
          4
        ],
        "note": "拉進來監督很好，但只一人參與，其他孩子未必信服"
      },
      {
        "label": "說帳目我管就好叫孩子別操心專心讀書去",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -3,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "拒絕公開等於迴避監督，孩子的疑慮只會越積越深"
      },
      {
        "label": "覺得被冒犯反問孩子是不是在指控老師貪錢",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "含糊帶過說明細太雜改天再算現在沒空處理",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_028",
    "cat": "運動會",
    "diff": 2,
    "scenario": "大隊接力棒次怎麼排，孩子各有想法又怕被排到爛棒次怎麼辦？",
    "law": "班級經營原則：依客觀依據並公開說明",
    "explain": "依成績與彎道特性排棒並向全班說明理由，讓每一個棒次的安排都站得住腳。",
    "choices": [
      {
        "label": "依測驗成績與彎道特性排棒再說明理由",
        "tier": "best",
        "effects": {
          "honor": 6,
          "trust": 5,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "參考體育老師建議排棒並開放孩子提微調",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "專業加微調不錯，但主軸仍由老師定，參與感稍弱"
      },
      {
        "label": "把快的全擺前段製造領先後段慢的隨便填",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "只顧前段亮眼，等於放棄後段孩子，戰術也不見得贏"
      },
      {
        "label": "抽籤決定棒次最公平誰抽到爛棒次別怪人",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "誰先選誰先贏讓孩子自己搶棒次搶完定案",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_029",
    "cat": "運動會",
    "diff": 2,
    "scenario": "跑最後一棒壓力大，被排到的孩子怕失誤想換棒，我該怎麼回應？",
    "law": "班級經營原則：建立信心並尊重自主",
    "explain": "陪他多練交接建立信心後再尊重他的決定，把壓力轉成他可以掌握的把握。",
    "choices": [
      {
        "label": "陪他多練交接建立信心再尊重他最終決定",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 4,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "找個跑得穩的孩子跟他搭檔分擔最後壓力",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "搭檔分壓有幫助，但沒處理他的恐懼，信心仍不足"
      },
      {
        "label": "跟他說別人都排好了你就硬著頭皮上別亂",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "情緒勒索逼他上場，就算跑了也帶著怨氣與恐懼"
      },
      {
        "label": "不准他換棒說怕失誤就是藉口逼他克服掉",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "他不想跑就隨便找人替補反正誰跑都差不多",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -4,
          "trust": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_030",
    "cat": "運動會",
    "diff": 3,
    "scenario": "我發現排棒次時不自覺把偏愛的孩子排到風光棒次怎麼自我修正？",
    "law": "班級經營原則：覺察偏好並交付覆核",
    "explain": "改用客觀成績重排並請他人覆核，把自己的個人偏好交給制度與第三方來校正。",
    "choices": [
      {
        "label": "改用客觀成績重排並請體育老師覆核一次",
        "tier": "best",
        "effects": {
          "honor": 7,
          "trust": 6,
          "cohesion": 3,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "公開排棒的依據讓全班檢視避免個人偏好",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "公開受檢有約束力，但沒重排，原本的偏心仍留在名單"
      },
      {
        "label": "反正沒人發現就將錯就錯偏愛一下也無妨",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "僥倖心態最危險，老師的偏心遲早被孩子看在眼裡"
      },
      {
        "label": "堅持己見說老師看人最準根本不需要改動",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "乾脆全部重抽籤逃避面對自己偏心這件事",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_031",
    "cat": "班級競賽",
    "diff": 3,
    "scenario": "體育課孩子練習時扭傷腳踝痛得無法站，我第一步該怎麼處置？",
    "law": "學生安全：受傷即時處置並通報家長",
    "explain": "立即固定患部冰敷並通報健康中心連繫家長，永遠把學生安全擺在課程進度之前。",
    "choices": [
      {
        "label": "立即固定患部冰敷並通報健康中心連家長",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "先扶他到陰涼處休息再請同學去找護理師",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "先移到陰涼處有照顧，但延後通報，傷勢評估會耽誤"
      },
      {
        "label": "覺得應該只是小扭傷叫他自己揉一揉走走",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "roleModel": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "自行判斷無大礙風險極高，誤判骨折責任無法承擔"
      },
      {
        "label": "叫他忍一下繼續練等下課再去保健室擦藥",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "roleModel": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "怕耽誤課程先放著等整堂上完再處理他的腳",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "roleModel": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_032",
    "cat": "班級競賽",
    "diff": 3,
    "scenario": "孩子受傷家長到校質問為何沒第一時間通知，我該如何面對這指責？",
    "law": "親師溝通：誠懇說明並檢討流程",
    "explain": "誠懇說明處置經過並檢討通報流程，用負責任的態度化解家長心中的質疑。",
    "choices": [
      {
        "label": "誠懇說明處置經過並檢討通報流程承諾改",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "先道歉安撫家長情緒再完整交代當下處置",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "先安撫有助溝通，但若無檢討承諾，家長仍會擔心重演"
      },
      {
        "label": "強調是孩子自己不小心撇清學校沒有責任",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ],
        "note": "急著撇清看似自保，卻把家長越推越遠，信任崩盤"
      },
      {
        "label": "反駁家長說有通知是你自己沒接到電話而已",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "冷處理叫家長有意見去找學務處別來煩我",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4,
          "roleModel": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_033",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "受傷的孩子不能下場比賽卻很想參與，我該怎麼安排他的角色？",
    "law": "班級經營原則：受傷仍保有參與舞台",
    "explain": "請他擔任戰術紀錄或加油指揮，讓不能下場的孩子依舊是隊伍主力。",
    "choices": [
      {
        "label": "請他擔任戰術紀錄或加油指揮也是隊主力",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "honor": 3,
          "hp": -4
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "讓他坐鎮場邊幫忙喊節奏給隊友即時支援",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "喊節奏有參與感，但角色較被動，存在感仍稍弱"
      },
      {
        "label": "叫他乖乖在旁邊看就好別硬撐免得傷加傷",
        "tier": "illegal",
        "effects": {
          "cohesion": -4,
          "climate": -3,
          "trust": -2
        },
        "octalysis": [
          8
        ],
        "note": "出於保護卻把他晾在外，孩子會覺得自己被隊伍放棄"
      },
      {
        "label": "跟他說受傷就是不能參加要他認命待教室",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "honor": -2
        },
        "octalysis": []
      },
      {
        "label": "勉強讓他帶傷上場反正他自己說想拼一下子",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "roleModel": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_034",
    "cat": "班級競賽",
    "diff": 1,
    "scenario": "體適能檢測快到了，班上多數孩子覺得無所謂不想準備怎麼帶動？",
    "law": "班級經營原則：以自我超越取代比輸贏",
    "explain": "設個人進步目標讓孩子跟自己比，把原本的無所謂轉成自我挑戰的內在動力。",
    "choices": [
      {
        "label": "設個人進步目標讓孩子跟自己比而非比贏",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 5,
          "honor": 3,
          "hp": -4
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "公布全班平均值激起孩子想一起進步動力",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "集體目標有帶動力，但易讓落後者更焦慮被比下去"
      },
      {
        "label": "警告成績差的會影響班級排名逼大家認真",
        "tier": "illegal",
        "effects": {
          "climate": -4,
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "用排名施壓看似有效，卻把運動變成讓人焦慮的負擔"
      },
      {
        "label": "不想練就算了反正體適能成績不算進總分",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "規定每人達標否則整週午休都要留下補練",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_035",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "體型較胖的孩子體適能項目老是吊車尾，同學取笑他怎麼處理？",
    "law": "班級經營原則：肯定進步並維護尊嚴",
    "explain": "制止嘲笑並以進步幅度肯定他，讓他的努力被看見而不是被體型所定義。",
    "choices": [
      {
        "label": "制止嘲笑並強調進步幅度才是值得肯定的",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 5,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "私下幫他設可達成的小目標重建運動信心",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "個別輔導很好，但沒當場制止嘲笑，傷害仍在發生"
      },
      {
        "label": "跟他說被笑就更要爭氣用成績讓同學閉嘴",
        "tier": "illegal",
        "effects": {
          "climate": -4,
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "把責任丟給被笑的人，等於默許嘲笑，問題沒解決"
      },
      {
        "label": "叫他別在意嘲笑是同學開玩笑而已不必當真",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "當眾拿他的成績當例子提醒大家別像他一樣",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_036",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "有孩子想偽造體適能數據讓班級平均好看，跑來問我可不可以怎麼回應？",
    "law": "班級經營原則：誠實重於漂亮的數字",
    "explain": "明確拒絕並帶全班討論誠實的價值，讓孩子懂檢測的意義不在好看。",
    "choices": [
      {
        "label": "明確拒絕並帶全班討論誠實比數字更重要",
        "tier": "best",
        "effects": {
          "honor": 7,
          "trust": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "肯定他為班級著想但說明造假失去檢測意義",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "先肯定動機很細膩，但若只私下講，誠信教育難擴及全班"
      },
      {
        "label": "睜隻眼閉隻眼反正美化一點數據不會怎樣",
        "tier": "illegal",
        "effects": {
          "honor": -6,
          "trust": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "默許造假看似無傷，卻親手教孩子數字可以作假"
      },
      {
        "label": "罵他居然想到作弊當場記下來通報學務處",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "隨他去填只要班級平均好看誰會去細查真假",
        "tier": "wrong",
        "effects": {
          "honor": -6,
          "trust": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_037",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "班際拔河選人，力氣大的孩子想全上場但人數有限怎麼安排？",
    "law": "班級經營原則：兼顧戰力與全員參與",
    "explain": "依體重與默契排陣容並安排替補輪換，既顧到戰力也讓每個人都有角色。",
    "choices": [
      {
        "label": "依體重與默契排陣容並安排替補輪換體力",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 4,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "讓力氣大的孩子當主力其餘編加油替補組",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "分組明確，但主力替補一刀切，替補組易覺得是邊緣人"
      },
      {
        "label": "只挑壯的上場其他人晾在旁邊看反正用不到",
        "tier": "illegal",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "honor": -2
        },
        "octalysis": [
          8
        ],
        "note": "只看戰力把多數人排除，贏了也沒人覺得是自己的事"
      },
      {
        "label": "誰想上就讓誰上人擠人也沒關係熱鬧就好啦",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "抽籤決定上場名單管他力氣大小公平最要緊",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_038",
    "cat": "班級競賽",
    "diff": 2,
    "scenario": "拔河第一局輸了孩子們開始互相指責出力不夠，我中場怎麼喊話？",
    "law": "班級經營原則：將焦點從歸咎轉向策略",
    "explain": "帶大家調整節奏把焦點拉回戰術，止住指責並重建並肩作戰的氣勢。",
    "choices": [
      {
        "label": "帶大家調整握繩節奏把焦點從怪罪轉戰術",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "honor": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "喊停指責先肯定大家努力再講下一局策略",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          1
        ],
        "note": "先肯定再講策略不錯，但若沒給具體調整，氣勢難回升"
      },
      {
        "label": "順著孩子指出剛剛確實某些人明顯在偷懶",
        "tier": "illegal",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "附和指責看似公道，卻把隊伍撕裂，第二局更難齊心"
      },
      {
        "label": "大聲罵全班不團結這樣下去第二局也贏不了",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "嘆氣說輸了就輸了第二局隨便拉一拉就好了",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "honor": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_039",
    "cat": "班級競賽",
    "diff": 3,
    "scenario": "拔河對方疑似違規穿釘鞋，孩子激動想衝上前理論我怎麼處理？",
    "law": "班級經營原則：循正當程序申訴爭議",
    "explain": "攔下孩子立即向裁判提出正式申訴，把心中的怒氣導向正當管道而非肢體衝突。",
    "choices": [
      {
        "label": "攔下孩子立即向裁判正式申訴交大會判定",
        "tier": "best",
        "effects": {
          "honor": 6,
          "trust": 5,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "安撫孩子情緒並蒐證拍照再循正當管道申",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "蒐證再申訴很周全，但耗時，孩子的激動需先穩住"
      },
      {
        "label": "默許孩子也偷穿釘鞋反制扯平這場比賽吧",
        "tier": "illegal",
        "effects": {
          "honor": -6,
          "trust": -4,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "以違規對違規看似扯平，卻讓自家孩子也成了犯規者"
      },
      {
        "label": "帶頭衝去對方場地理論當場掀起兩班衝突",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "忍下來告訴孩子吃點虧算了別把場面鬧大",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_040",
    "cat": "運動會",
    "diff": 1,
    "scenario": "運動會前一天想凝聚士氣，但孩子各玩各的提不起勁我怎麼帶？",
    "law": "班級經營原則：儀式感凝聚集體認同",
    "explain": "辦賽前誓師讓每人寫一句打氣話，用儀式感把散漫變成共同的期待。",
    "choices": [
      {
        "label": "辦個賽前誓師讓每人寫下對隊友的打氣話",
        "tier": "best",
        "effects": {
          "cohesion": 7,
          "climate": 5,
          "honor": 3,
          "hp": -4
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "找幾個有號召力的孩子帶頭喊口號炒氣氛",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "找帶頭者有效，但靠少數人炒，內向孩子仍被晾在外"
      },
      {
        "label": "規定全班留下開動員會不參加的記點數處理",
        "tier": "illegal",
        "effects": {
          "climate": -4,
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "強制留下換來的是身在心不在，凝聚只是表面功夫"
      },
      {
        "label": "提不起勁就算了強求士氣反而顯得很假掰啦",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "訓話說別班都很拼你們這樣散漫怎麼贏得了",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "trust": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_041",
    "cat": "運動會",
    "diff": 2,
    "scenario": "班上分成熱血派和邊緣派，動員時邊緣孩子總被晾在外面怎麼辦？",
    "law": "班級經營原則：設計全員必要的角色",
    "explain": "設計需全員到齊的任務讓每個人都有存在感，把邊緣孩子拉進核心。",
    "choices": [
      {
        "label": "設計需要全員到齊的任務讓人人有存在感",
        "tier": "best",
        "effects": {
          "cohesion": 7,
          "climate": 5,
          "trust": 3,
          "hp": -5
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下邀邊緣的孩子認領他擅長的幕後任務",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          4
        ],
        "note": "個別邀請貼心，但靠老師逐一拉，難形成自然的融入"
      },
      {
        "label": "反正熱血派衝就夠了邊緣孩子愛來不來隨意",
        "tier": "illegal",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "trust": -2
        },
        "octalysis": [
          8
        ],
        "note": "放任分裂看似省力，卻讓邊緣孩子徹底被排除在班外"
      },
      {
        "label": "點名邊緣孩子問他們為何不合群當眾要表態",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "把動員交給熱血派自己搞老師樂得輕鬆不管",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -3,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_042",
    "cat": "運動會",
    "diff": 2,
    "scenario": "我精心準備了動員活動孩子卻覺得幼稚不買單，我該如何調整心態？",
    "law": "班級經營原則：放下預設與孩子共創",
    "explain": "放下預設問孩子想怎麼動員並一起重設計，把活動的主權交還給他們。",
    "choices": [
      {
        "label": "放下預設問孩子想怎麼動員再一起重設計",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "保留活動主軸但讓孩子改成他們覺得酷的",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          3
        ],
        "note": "保留主軸折衷，但仍由老師定框，孩子的主導感有限"
      },
      {
        "label": "堅持照我的流程走孩子配合一下不會少塊肉",
        "tier": "illegal",
        "effects": {
          "cohesion": -4,
          "trust": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "硬要照辦看似不退讓，卻把活動變成大家應付的負擔"
      },
      {
        "label": "嫌孩子不領情乾脆取消活動讓他們自生自滅",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "硬逼全班照做說這是為你們好以後就會懂了",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_043",
    "cat": "運動會",
    "diff": 2,
    "scenario": "班級總錦標奪冠後孩子開始驕傲看不起別班，我該如何適時引導？",
    "law": "班級經營原則：勝利後的謙遜教育",
    "explain": "帶孩子回顧努力過程並學會尊重對手，讓這份榮耀長出謙遜而不是傲慢。",
    "choices": [
      {
        "label": "帶孩子回顧努力過程並學會尊重每個對手",
        "tier": "best",
        "effects": {
          "honor": 7,
          "climate": 5,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "趁慶功時提醒勝利是團隊的別忘當初辛苦",
        "tier": "good",
        "effects": {
          "honor": 3,
          "cohesion": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "提醒謙遜不錯，但沒談尊重對手，傲氣只壓住一半"
      },
      {
        "label": "覺得贏了開心一下無妨就放任孩子盡情炫",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "放任炫耀看似無傷，卻把得來不易的榮耀教成了輕浮"
      },
      {
        "label": "潑冷水說別得意這種比賽贏了也算不上什麼",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "climate": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "跟著孩子一起嘲笑別班弱根本不是我們對手",
        "tier": "wrong",
        "effects": {
          "honor": -6,
          "climate": -5,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_044",
    "cat": "運動會",
    "diff": 2,
    "scenario": "連續兩年運動會墊底，孩子們未賽先怯說反正一定輸我怎麼重燃鬥志？",
    "law": "班級經營原則：設可達成目標重建自我效能",
    "explain": "把目標改成突破自己紀錄，讓孩子看見可贏的點，重燃放棄的鬥志。",
    "choices": [
      {
        "label": "把目標改成突破自己紀錄讓孩子看見可贏",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "翻出去年數據指出進步處證明他們有機會",
        "tier": "good",
        "effects": {
          "honor": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          2
        ],
        "note": "用數據打氣有說服力，但若進步不明顯，反易更洩氣"
      },
      {
        "label": "跟孩子說輸習慣就好至少參加比贏更重要",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "用參與淡化輸贏看似安慰，卻默許了未戰先降的心態"
      },
      {
        "label": "附和孩子說我們本來就弱盡力就好別太勉強",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "cohesion": -4,
          "climate": -2
        },
        "octalysis": []
      },
      {
        "label": "訓斥孩子還沒比就認輸這種心態注定一輩子",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sp_045",
    "cat": "運動會",
    "diff": 3,
    "scenario": "兄弟班一勝一敗，贏的孩子在班群嘲諷輸的班，兩班開始對立怎麼化解？",
    "law": "班級經營原則：及時介入修復跨班關係",
    "explain": "促成兩班互相肯定化解心結，並請孩子刪文道歉，及時止住對立擴大。",
    "choices": [
      {
        "label": "約兩班一起檢討促成互相肯定化解的心結",
        "tier": "best",
        "effects": {
          "honor": 6,
          "cohesion": 5,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "先請自班孩子刪文道歉再私下與對方溝通",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "先止血很對，但只處理自班，跨班心結仍需後續修復"
      },
      {
        "label": "覺得小孩鬥嘴罷了不介入讓他們自己冷下",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": [
          8
        ],
        "note": "放任對立發酵，等不到自己冷卻，恩怨只會越結越深"
      },
      {
        "label": "在班群幫自己班嗆回去說贏了本來有資格講",
        "tier": "wrong",
        "effects": {
          "honor": -6,
          "climate": -5,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "罵贏的孩子白目害班級結仇要他們閉嘴別惹",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_001",
    "cat": "段考",
    "diff": 1,
    "scenario": "段考前一週班上浮躁，你想營造全班靜下心讀書的氛圍，第一步怎麼做？",
    "law": "（班級經營：環境營造原則）",
    "explain": "先帶全班一起穩定情緒，再安排明確的安靜讀書時段，氛圍才撐得住。",
    "choices": [
      {
        "label": "帶全班一起深呼吸，再安排安靜讀書時段",
        "tier": "best",
        "effects": {
          "climate": 7,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "只口頭提醒大家要安靜，沒有具體安排",
        "tier": "good",
        "note": "有提醒但缺結構，氛圍容易很快散掉",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "罰浮躁的同學站到教室後面去反省",
        "tier": "illegal",
        "note": "處罰式維持秩序傷害師生信任，不可採",
        "effects": {
          "climate": -4,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "放任班上吵鬧不管，到考試各自負責",
        "tier": "wrong",
        "effects": {
          "climate": -6,
          "roleModel": -4
        },
        "octalysis": []
      },
      {
        "label": "整節課嚴厲訓話，壓著全班都不准出聲",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_002",
    "cat": "段考",
    "diff": 1,
    "scenario": "午休時間有幾位同學想留在教室讀書，其他人想睡覺，你怎麼安排空間？",
    "law": "（班級經營：差異化管理原則）",
    "explain": "用座位或教室劃分動靜分區，讓想讀書與想休息的人都能各自被好好照顧到。",
    "choices": [
      {
        "label": "教室前後分成讀書區與休息區各取所需",
        "tier": "best",
        "effects": {
          "climate": 6,
          "cohesion": 3,
          "hp": -2
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "讓想讀書的人自己到走廊找位子坐下",
        "tier": "good",
        "note": "有給空間但缺照看，安全與秩序有風險",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "直接規定全班午休都要趴下不准讀書",
        "tier": "illegal",
        "note": "剝奪學生自主學習時間並不合理，不可",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫想讀書的人吵到別人就自己看著辦",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "放著不管讓兩群人在教室裡互相干擾",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_003",
    "cat": "段考",
    "diff": 2,
    "scenario": "早自習你想帶全班一起讀書，但總有幾個人趴著睡，你會怎麼帶動？",
    "law": "（班級經營：榜樣示範原則）",
    "explain": "老師親自坐下陪讀並設定小目標，用身教帶動全班讀書風氣，比責罵更持久。",
    "choices": [
      {
        "label": "老師也坐下陪讀並設定早自習小目標",
        "tier": "best",
        "effects": {
          "climate": 6,
          "roleModel": 6,
          "hp": -4
        },
        "octalysis": [
          1,
          2,
          5
        ]
      },
      {
        "label": "輪流請小老師帶讀，老師只在旁巡視",
        "tier": "good",
        "note": "有分工但老師缺席會讓帶動力打折扣",
        "effects": {
          "climate": 3,
          "roleModel": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把趴睡的同學名字記下來月底算總帳",
        "tier": "illegal",
        "note": "秋後算帳式威嚇破壞信任，不可採用",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "自己改作業不理會，早自習隨他們去",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "一進門就大聲罵睡覺的人吵醒全班讀",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_004",
    "cat": "段考",
    "diff": 2,
    "scenario": "一位平時認真的學生考前焦慮到發抖，跑來跟你說他快撐不住了，怎麼辦？",
    "law": "（輔導知能：情緒支持原則）",
    "explain": "先接住情緒讓他被理解，再陪他把範圍拆小，焦慮才會慢慢降下來。",
    "choices": [
      {
        "label": "先聽他說完情緒，再陪他把範圍拆小",
        "tier": "best",
        "effects": {
          "trust": 7,
          "climate": 3,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "告訴他別想太多，盡力就好不用緊張",
        "tier": "good",
        "note": "出發點好但太快帶過，情緒沒被接住",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當著全班說他抗壓性太差要他堅強點",
        "tier": "illegal",
        "note": "當眾標籤化造成二次傷害，絕不可為",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他回座位繼續讀，焦慮是他自己的事",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "嚇他說考不好以後就完了要他更努力",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_005",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考你想預防作弊，又不希望讓全班覺得被當賊看，事前怎麼處理？",
    "law": "（學生獎懲：誠信教育原則）",
    "explain": "事前公開說明規則與誠信的意義，把預防做在前面比監考瞪人更有效。",
    "choices": [
      {
        "label": "考前公開說明規則並談誠信的意義",
        "tier": "best",
        "effects": {
          "honor": 6,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          2
        ]
      },
      {
        "label": "只在黑板寫上禁止作弊四個大字提醒",
        "tier": "good",
        "note": "有提醒但沒對話，難真正建立誠信感",
        "effects": {
          "honor": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "考前搜每個人書包證明大家沒有夾帶",
        "tier": "illegal",
        "note": "未經正當程序搜身侵害學生權益，不可",
        "effects": {
          "trust": -6,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "什麼都不講，等抓到作弊再嚴厲處理",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "放話說全班都有人想作弊要大家小心",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_006",
    "cat": "段考",
    "diff": 3,
    "scenario": "監考時你確實看到一位學生偷瞄小抄，當下你會怎麼處理最妥當？",
    "law": "（學生獎懲規定：依校規程序處理）",
    "explain": "先靜默收走小抄維持考場安定，考後再依校規的正當程序與該名學生個別談。",
    "choices": [
      {
        "label": "安靜收走小抄，考後依規定個別處理",
        "tier": "best",
        "effects": {
          "honor": 6,
          "trust": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "先口頭警告一次，繼續看他有無再犯",
        "tier": "good",
        "note": "給機會但證據已明，拖延恐失公平性",
        "effects": {
          "honor": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "當場撕掉考卷大聲斥責他作弊可恥",
        "tier": "illegal",
        "note": "公開羞辱且未走程序，逾越管教界線",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "假裝沒看到，反正分數高低與我無關",
        "tier": "wrong",
        "effects": {
          "honor": -6,
          "roleModel": -4
        },
        "octalysis": []
      },
      {
        "label": "事後私下放話全班，讓他自己覺得羞愧",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_007",
    "cat": "段考",
    "diff": 2,
    "scenario": "一位學生這次段考三科明顯退步，你約他來談，第一句話該怎麼開？",
    "law": "（輔導知能：正向關係原則）",
    "explain": "先關心人再談分數，用好奇而非質問的口吻，他才願意說出真正原因。",
    "choices": [
      {
        "label": "先問他最近過得好不好，再一起看分數",
        "tier": "best",
        "effects": {
          "trust": 7,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "直接攤開成績單問他為什麼會退步這麼多",
        "tier": "good",
        "note": "有面對問題但偏質問，他容易先防衛",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "把他和上次的名次當眾貼出來給大家看",
        "tier": "illegal",
        "note": "公開排名揭露隱私並羞辱學生，不可為",
        "effects": {
          "trust": -6,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "劈頭就說退步這麼多是不是都在玩手機",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "冷淡地說退步是他自己的事不必來找我",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_008",
    "cat": "段考",
    "diff": 1,
    "scenario": "學生說他想認真讀書卻不知道怎麼安排，跑來請你幫他訂讀書計畫，怎麼帶？",
    "law": "（學習輔導：自我調節學習原則）",
    "explain": "陪他把大範圍切成每天可完成的小塊，讓計畫由他自己排，才會願意執行。",
    "choices": [
      {
        "label": "陪他把範圍切小，讓他自己排每天進度",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3
        ]
      },
      {
        "label": "直接給他一張現成的讀書時間表照著做",
        "tier": "good",
        "note": "省事但缺自主，他照單照做動力不強",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "要他每天回報進度沒達標就留校到很晚",
        "tier": "illegal",
        "note": "以強制留校施壓逾越合理管教，不可採",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他自己上網找方法，不用每件事問老師",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "敷衍說讀書沒什麼技巧就是多花時間而已",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_009",
    "cat": "段考",
    "diff": 1,
    "scenario": "你想用每週小考幫學生抓段考進度，但又怕他們只在乎分數，怎麼設計？",
    "law": "（評量原則：形成性評量原則）",
    "explain": "把小考定位成診斷工具，重點放在訂正與弄懂，而不是排名與比分數。",
    "choices": [
      {
        "label": "把小考當診斷，重點放在訂正和弄懂",
        "tier": "best",
        "effects": {
          "climate": 6,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "小考照常考，考完只公布全班平均分數",
        "tier": "good",
        "note": "有給回饋但缺訂正，學生難真正補洞",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "每次小考都排名次貼牆並公開檢討最後",
        "tier": "illegal",
        "note": "公開排名與點名貶低低分者，不可採",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "小考考完就收走不檢討，反正段考才重要",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "用小考分數高低決定誰能參加班上活動",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_010",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考後幾位學生同一單元都錯，你想安排補救教學，怎麼做才不讓他們覺得被貼標籤？",
    "law": "（補救教學實施原則）",
    "explain": "用全班都會錯的角度切入，把補救包裝成一起把洞補起來，淡化標籤感。",
    "choices": [
      {
        "label": "以全班易錯切入，邀他們一起把洞補起",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "課後留這幾位同學單獨講解那個單元",
        "tier": "good",
        "note": "有補到但易被貼差生標籤，需多留意",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "在班上點名說這幾個人拖累全班平均",
        "tier": "illegal",
        "note": "公開指責造成羞辱與對立，絕不可為",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把錯題印一張叫他們自己回家訂正就好",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "認定他們就是不認真補了也是浪費時間",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_011",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考成績出來，你要在班上講評，怎麼講才不會羞辱到考得差的同學？",
    "law": "（班級經營：尊重與正向氣氛原則）",
    "explain": "只公布整體趨勢與共同錯題，不點名不排名，把焦點放在下一步怎麼進步。",
    "choices": [
      {
        "label": "只談整體趨勢與共錯題，不點名不排名",
        "tier": "best",
        "effects": {
          "climate": 7,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "公布前幾名鼓勵大家，沒提到後段同學",
        "tier": "good",
        "note": "只捧高分易讓後段更失落，需再平衡",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "念出每個人分數讓全班知道誰最後一名",
        "tier": "illegal",
        "note": "當眾揭露個人成績羞辱學生，不可採",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "嘆氣說這次考太爛讓全班都覺得很丟臉",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只罵考差的人不努力，沒給任何下一步",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_012",
    "cat": "段考",
    "diff": 3,
    "scenario": "班上瀰漫只看分數的氣氛，學生彼此比名次很焦慮，你想轉這個價值觀，怎麼做？",
    "law": "（十二年國教：適性揚才理念）",
    "explain": "用進步幅度與努力歷程取代名次比較，公開肯定多元表現，鬆動唯分數文化。",
    "choices": [
      {
        "label": "改用進步幅度與努力歷程肯定每個人",
        "tier": "best",
        "effects": {
          "climate": 7,
          "honor": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          2,
          5
        ]
      },
      {
        "label": "口頭跟全班說分數不是一切要看過程",
        "tier": "good",
        "note": "只喊口號沒配作法，氣氛難真正改變",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "乾脆把全班段考排名整份貼在公布欄上",
        "tier": "illegal",
        "note": "公開排名加劇比較與羞辱，明顯不可",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "放任他們互相比分數，反正能刺激讀書",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "自己也只誇高分的人其他成績都不看重",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_013",
    "cat": "段考",
    "diff": 1,
    "scenario": "段考要排監考座位，你想兼顧公平與防弊，又不想讓學生覺得被針對，怎麼排？",
    "law": "（試務作業：公平一致原則）",
    "explain": "用全班一致的固定規則排座位並事先說明，公平透明就不會有人覺得被針對。",
    "choices": [
      {
        "label": "用全班一致的規則排座並事先說明原因",
        "tier": "best",
        "effects": {
          "honor": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "大致照學號排，臨時再微調幾個位子",
        "tier": "good",
        "note": "大方向公平但臨時動易被質疑有私心",
        "effects": {
          "honor": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "把成績好的特別隔開以免被同學抄答案",
        "tier": "illegal",
        "note": "以成績差別待遇貼標籤並不公平，不可",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "隨便讓大家自己坐，反正監考時盯緊就好",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "把幾個你不信任的人通通排到最前面坐",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_014",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考監考時有學生舉手說題目印刷不清看不懂，你當下應該怎麼處理？",
    "law": "（試務作業：試場規則原則）",
    "explain": "先到他座位確認題目，再依試務規定統一向全場宣布更正，確保公平一致。",
    "choices": [
      {
        "label": "到座位確認後，再依規定向全場統一說明",
        "tier": "best",
        "effects": {
          "honor": 6,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "小聲只跟他一個人解釋那一題的意思",
        "tier": "good",
        "note": "解了惑卻只對一人，恐造成資訊不公平",
        "effects": {
          "honor": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "直接告訴他這題的答案讓他趕快往下寫",
        "tier": "illegal",
        "note": "監考洩題破壞考試公平，絕對不可為",
        "effects": {
          "honor": -6,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "揮手叫他別吵自己想辦法看不要再舉手",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "當場大聲念出題目害其他人分心又緊張",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_015",
    "cat": "段考",
    "diff": 1,
    "scenario": "段考前最後一節，你想帶全班一起複習重點，怎麼帶才能讓大家都跟得上？",
    "law": "（教學原則：鷹架支持原則）",
    "explain": "先帶全班過共同重點與易錯題，再留時間讓他們問，照顧到不同程度的學生。",
    "choices": [
      {
        "label": "先帶共同重點與易錯題，再留時間發問",
        "tier": "best",
        "effects": {
          "climate": 6,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "發一張重點講義讓大家自己安靜看完",
        "tier": "good",
        "note": "有給材料但缺帶讀，弱的同學跟不上",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "只針對前幾名複習難題其他人自己看書",
        "tier": "illegal",
        "note": "只服務高分者忽視多數學生受教權，不可",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "整節讓大家自習，老師坐著滑手機休息",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "飛快把全冊講一遍，誰沒跟上自己負責",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_016",
    "cat": "段考",
    "diff": 2,
    "scenario": "成績單要發了，一位家長對孩子退步很激動傳訊質問你，怎麼回應最妥當？",
    "law": "（親師溝通：合作夥伴原則）",
    "explain": "先同理家長的擔心，再客觀說明孩子的學習狀況與具體可一起做的下一步。",
    "choices": [
      {
        "label": "先同理擔心，再說明狀況與一起做的下一步",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先傳成績數字過去，約家長有空再詳談",
        "tier": "good",
        "note": "資訊有給但先丟分數，易讓家長更焦慮",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "回說孩子上課態度差退步是他自己活該",
        "tier": "illegal",
        "note": "貶損學生並推責，破壞親師信任，不可",
        "effects": {
          "trust": -6,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "已讀不回，覺得家長太情緒化不必理會",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "急著辯解全是孩子不認真跟教學沒關係",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_017",
    "cat": "段考",
    "diff": 2,
    "scenario": "你想帶起全班讀書風氣，讓同學彼此帶動而不是各讀各的，可以怎麼設計？",
    "law": "（班級經營：合作學習原則）",
    "explain": "用小組共讀與互相講題的機制，讓會的人教不會的，把讀書變成班級共同的事。",
    "choices": [
      {
        "label": "設小組共讀，讓會的同學互相講題給彼此",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "在牆上貼讀書打卡表讓大家自由登記時數",
        "tier": "good",
        "note": "有可見度但易流於比時數，需防形式化",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "宣布段考全班平均沒進步就取消下課時間",
        "tier": "illegal",
        "note": "連坐處罰製造壓力與對立，明顯不可採",
        "effects": {
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫大家自己顧自己，讀書本來就是個人的事",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "只把幾個用功的人捧成模範要大家都學他",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_018",
    "cat": "段考",
    "diff": 3,
    "scenario": "段考逼近，全班壓力大到午休都睡不著，你想幫他們調適身心，怎麼做比較好？",
    "law": "（輔導知能：身心調適原則）",
    "explain": "帶簡單的放鬆練習並提醒規律作息，讓學生知道顧好身心也是準備考試的一部分。",
    "choices": [
      {
        "label": "帶簡單放鬆練習並提醒作息要規律",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "口頭叫大家早點睡，壓力大是正常的事",
        "tier": "good",
        "note": "有安撫但無方法，學生不知怎麼放鬆",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "加碼晚自習延長到很晚逼他們多讀一點",
        "tier": "illegal",
        "note": "超時留校加重身心負擔，逾越合理管教",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他們別矯情，壓力大是因為書讀不夠",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "完全不理會，覺得身心問題不是我的事",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_019",
    "cat": "段考",
    "diff": 1,
    "scenario": "小考發回後，學生只看分數就把考卷塞進抽屜，你想讓他們認真訂正，怎麼引導？",
    "law": "（評量原則：回饋訂正原則）",
    "explain": "當場帶他們把錯題重做一次並寫下原因，讓訂正變成學習的關鍵動作而非交差。",
    "choices": [
      {
        "label": "當場帶他們重做錯題並寫下錯誤原因",
        "tier": "best",
        "effects": {
          "climate": 6,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3
        ]
      },
      {
        "label": "規定回家把錯題抄一遍隔天交上來檢查",
        "tier": "good",
        "note": "有訂正但易流於抄寫，未必真的弄懂",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "罰錯一題就抄寫該題十遍當作懲罰訂正",
        "tier": "illegal",
        "note": "以罰寫當訂正造成厭學，不當管教不可",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "考卷收一收就好，反正下次再考新範圍",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "只念分數低的人不認真，沒帶任何訂正",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_020",
    "cat": "段考",
    "diff": 2,
    "scenario": "一位學生段考考很好卻在班上炫耀，讓考差的同學很受傷，你怎麼處理這氣氛？",
    "law": "（班級經營：同儕尊重原則）",
    "explain": "私下肯定他的努力，同時引導他理解每個人步調不同，把成就轉成帶動而非比較。",
    "choices": [
      {
        "label": "私下肯定他，再引導他帶同學一起進步",
        "tier": "best",
        "effects": {
          "honor": 5,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "全班面前提醒大家不要炫耀也不要比較",
        "tier": "good",
        "note": "立意對但泛泛喊話，當事人未必領會",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾酸他考好就了不起叫他別太得意",
        "tier": "illegal",
        "note": "老師當眾貶損學生並不恰當，不可採",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "放任他繼續炫耀，覺得這是同學間的事",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "跟著一起誇他最強讓其他人更覺得自卑",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_021",
    "cat": "段考",
    "diff": 1,
    "scenario": "段考前你想在教室布置一面複習資源角，讓學生隨時能自主複習，怎麼設計最好？",
    "law": "（班級經營：學習環境營造原則）",
    "explain": "放共筆、易錯題與小白板等可動手的資源，並由學生共同維護，讓環境帶動自主學習。",
    "choices": [
      {
        "label": "放共筆與易錯題，讓學生一起維護資源角",
        "tier": "best",
        "effects": {
          "climate": 6,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          3,
          4
        ]
      },
      {
        "label": "老師印好一疊參考講義整齊堆在角落備用",
        "tier": "good",
        "note": "有資源但學生沒參與，容易乏人問津",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "規定每人每天都要去角落讀滿半小時才行",
        "tier": "illegal",
        "note": "強制使用剝奪自主，反造成反感，不可",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把角落布置得很漂亮但裡面其實沒有內容",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得布置很麻煩，乾脆叫大家自己回家讀",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_022",
    "cat": "段考",
    "diff": 2,
    "scenario": "一位學生坦白說他段考其實作弊過一次但沒被抓，現在很後悔來找你，怎麼回應？",
    "law": "（學生獎懲：誠信與修復原則）",
    "explain": "先肯定他敢說的勇氣，再陪他面對後果與彌補方式，把誠信教育做成成長機會。",
    "choices": [
      {
        "label": "先肯定他敢說，再陪他面對後果與彌補",
        "tier": "best",
        "effects": {
          "honor": 6,
          "trust": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "告訴他知錯就好，下不為例不必再追究",
        "tier": "good",
        "note": "給了台階卻略過修復，誠信教育不完整",
        "effects": {
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "立刻在班上公開他作弊讓大家引以為戒",
        "tier": "illegal",
        "note": "公開揭露自首學生違反信任，絕不可為",
        "effects": {
          "trust": -6,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "罵他早就該說現在後悔也沒任何用處了",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "擺手說過去就算了不必特別放在心上了",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_023",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考週你發現班上開始流傳考古題與疑似外洩的題目，你應該怎麼處理？",
    "law": "（試務作業：試題保密原則）",
    "explain": "立即停止流傳並通報相關處室查證，向全班重申誠信，維護考試的公平性。",
    "choices": [
      {
        "label": "立刻制止流傳並通報處室，重申誠信原則",
        "tier": "best",
        "effects": {
          "honor": 6,
          "trust": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          6
        ]
      },
      {
        "label": "先口頭勸大家別再傳，自己再觀察情況",
        "tier": "good",
        "note": "有制止但未通報查證，恐錯失處理時機",
        "effects": {
          "honor": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "覺得反正大家都有就睜一隻眼閉一隻眼",
        "tier": "illegal",
        "note": "放任疑似洩題等同縱容舞弊，絕不可為",
        "effects": {
          "honor": -6,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "在班上大罵是誰傳的給我自己站出來認",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "自己也拿那份題目來幫學生猜題對重點",
        "tier": "wrong",
        "effects": {
          "honor": -6,
          "roleModel": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_024",
    "cat": "段考",
    "diff": 3,
    "scenario": "一位長期成績低落的學生說反正自己再怎麼讀都考不好，你想重建他的學習動機，怎麼做？",
    "law": "（輔導知能：成長型思維原則）",
    "explain": "陪他找一個小到一定做得到的目標先嚐到成功，再用進步累積信心，鬆動習得無助。",
    "choices": [
      {
        "label": "陪他訂一個做得到的小目標先嚐到成功",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          2
        ]
      },
      {
        "label": "鼓勵他說只要肯努力一定會慢慢進步的",
        "tier": "good",
        "note": "打氣但缺具體路徑，空話難撐起信心",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾拿他當例子警告全班不努力的下場",
        "tier": "illegal",
        "note": "羞辱式警示踐踏學生尊嚴，明顯不可採",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "附和他說既然讀不來那就別勉強自己了",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "唸他就是懶才考不好不是真的不會而已",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_025",
    "cat": "段考",
    "diff": 1,
    "scenario": "早自習你想讓全班養成固定複習習慣，又不想每天用罵的盯，可以怎麼設計機制？",
    "law": "（班級經營：常規建立原則）",
    "explain": "和學生一起訂出簡單可執行的早自習流程並輪流負責，用習慣與自治取代天天盯人。",
    "choices": [
      {
        "label": "和學生共訂固定流程並輪流負責帶讀",
        "tier": "best",
        "effects": {
          "climate": 6,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "老師每天到班親自盯著大家讀十五分鐘",
        "tier": "good",
        "note": "短期有效但靠人盯，老師不在就鬆掉",
        "effects": {
          "climate": 2,
          "roleModel": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "規定講話一次就扣全班整週的榮譽分數",
        "tier": "illegal",
        "note": "連坐扣分製造對立與委屈，不當管教不可",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "放著不管，早自習愛讀不讀隨他們高興",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "心情好才盯心情差就算了，標準時鬆時緊",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_026",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考考差的學生在週記寫他覺得自己很沒用，你要回覆這則週記，怎麼寫最好？",
    "law": "（輔導知能：正向回饋原則）",
    "explain": "先接住他的失落並具體指出他的努力與亮點，再給一個下次可做的小行動陪他往前。",
    "choices": [
      {
        "label": "先接住失落，點出他的努力再給小行動",
        "tier": "best",
        "effects": {
          "trust": 7,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "寫下次再加油就好，老師相信你做得到",
        "tier": "good",
        "note": "溫暖但太籠統，沒接住他當下的情緒",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "批說早叫你認真不聽現在才在這裡後悔",
        "tier": "illegal",
        "note": "以週記回應羞辱學生傷害信任，不可為",
        "effects": {
          "trust": -6,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只打個閱字蓋章，完全沒有任何的回應",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "附和說對啊你這次真的考得很差要檢討",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_027",
    "cat": "段考",
    "diff": 1,
    "scenario": "你想讓段考前的複習更有方向，打算帶全班一起整理重點筆記，怎麼帶最有效？",
    "law": "（教學原則：主動建構原則）",
    "explain": "用提問引導學生自己抓出重點與架構，老師補位整理，比直接給筆記更能內化。",
    "choices": [
      {
        "label": "用提問引導學生自己抓重點老師再補位",
        "tier": "best",
        "effects": {
          "climate": 6,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3
        ]
      },
      {
        "label": "老師直接整理好一份重點筆記發給全班",
        "tier": "good",
        "note": "省時但被動接收，學生記憶不易深刻",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "規定每人交一份筆記沒交就扣平時成績",
        "tier": "illegal",
        "note": "以扣分逼交流於形式，不當評量不可採",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫大家自己回家整理，課堂上不花時間帶",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "念一遍課本就算複習，沒帶任何整理動作",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_028",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考後家長日，一位家長只關心孩子排第幾名，你想引導他看見更多面向，怎麼談？",
    "law": "（親師溝通：全人發展原則）",
    "explain": "先回應家長在意的名次，再具體分享孩子的進步、態度與優勢，把焦點擴到全人。",
    "choices": [
      {
        "label": "先回應名次，再分享孩子的進步與優勢",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "直接把排名數字告訴家長讓他自己解讀",
        "tier": "good",
        "note": "有給資訊但只談名次，強化了唯分數觀",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "附和家長說對排這名次確實太差該加油",
        "tier": "illegal",
        "note": "當著家長貶低孩子傷害學生，不可採",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "敷衍說名次不重要就帶過，不再多談什麼",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "反過來指責家長太功利不懂教育的本質",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_029",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考週你發現一位學生熬夜讀到精神恍惚，白天上課一直打瞌睡，你怎麼介入？",
    "law": "（輔導知能：健康優先原則）",
    "explain": "私下關心他的作息並陪他調整讀書節奏，讓他明白睡眠也是考好的關鍵，而非偷懶。",
    "choices": [
      {
        "label": "私下關心作息，陪他調整讀書的節奏",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "提醒他別熬夜要早睡，叮嚀一句就帶過",
        "tier": "good",
        "note": "有關心但沒陪調整，他多半改不了習慣",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾叫醒他罵他上課睡覺對不起爸媽辛苦",
        "tier": "illegal",
        "note": "當眾羞辱忽視其身心狀況，不當管教不可",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他想熬夜是他的事，打瞌睡自己負責",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "叫他更努力說別人也熬夜怎麼就你撐不住",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_030",
    "cat": "段考",
    "diff": 3,
    "scenario": "班上分成讀書派與擺爛派兩群，氣氛對立影響整體讀書氛圍，你想化解，怎麼做？",
    "law": "（班級經營：班級凝聚原則）",
    "explain": "避免標籤任一方，設計需要合作的共同目標，讓兩群在同一件事上產生連結與認同。",
    "choices": [
      {
        "label": "設共同目標讓兩群在合作中產生連結",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "分別找兩群的代表談談，聽聽各自想法",
        "tier": "good",
        "note": "有對話但未串起兩方，對立仍可能延續",
        "effects": {
          "cohesion": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "公開稱讚讀書派順便貶低擺爛派要他們學",
        "tier": "illegal",
        "note": "分化貼標籤加深對立與羞辱，明顯不可",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "放任兩群繼續對立，覺得不關老師的事",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆把擺爛的幾個調去角落眼不見為淨",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_031",
    "cat": "段考",
    "diff": 1,
    "scenario": "小考你想讓學生自己對答案、自己訂正，培養自主學習，怎麼設計流程比較好？",
    "law": "（評量原則：自主學習原則）",
    "explain": "提供詳解讓學生自評並標出錯因，老師抽查與答疑，把訂正的主導權交回學生手上。",
    "choices": [
      {
        "label": "給詳解讓學生自評標錯因，老師再答疑",
        "tier": "best",
        "effects": {
          "climate": 6,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          3,
          4
        ]
      },
      {
        "label": "老師統一公布答案，學生跟著畫對與錯",
        "tier": "good",
        "note": "有對答案但偏被動，難深究錯誤原因",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "讓學生互相改考卷並把分數大聲念出來",
        "tier": "illegal",
        "note": "公開他人分數侵犯隱私，明顯不可採",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "考卷收回老師自己改，學生完全看不到錯",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "只報分數不給答案，學生根本無從訂正起",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_032",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考前一位學生焦慮到說想請假不來考試，家長也打來問該怎麼辦，你怎麼回應？",
    "law": "（輔導知能：危機處理原則）",
    "explain": "先穩住學生與家長的焦慮，了解壓力來源，協調合理的應考方式，避免用逃避結束。",
    "choices": [
      {
        "label": "先穩住情緒了解壓力，再協調應考方式",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "建議他先請假休息，等準備好了再補考",
        "tier": "good",
        "note": "顧到情緒但易養成逃避，需配合輔導",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接說不來考就是零分自己想清楚再決定",
        "tier": "illegal",
        "note": "以威脅施壓忽視身心狀況，不當管教不可",
        "effects": {
          "trust": -6,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫家長自己決定，反正考不考都跟我無關",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "念他抗壓性差說別人都能考為何就你不行",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_033",
    "cat": "段考",
    "diff": 1,
    "scenario": "你想讓考後檢討課變得不那麼沉重，讓考差的同學也願意參與，怎麼安排這堂課？",
    "law": "（教學原則：安全氛圍原則）",
    "explain": "以全班共同錯題為主、不揭個人分數，用討論與互助的方式進行，降低檢討課的壓力。",
    "choices": [
      {
        "label": "以共同錯題討論為主，不揭任何人分數",
        "tier": "best",
        "effects": {
          "climate": 6,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "按題號逐題講解，講到誰錯就請誰回答",
        "tier": "good",
        "note": "有檢討但點名易讓錯的人尷尬退縮",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "叫考最差的人上台講解他到底錯在哪裡",
        "tier": "illegal",
        "note": "逼低分者公開受窘形同羞辱，不可採",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "草草念過答案就結束，沒留討論的時間",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "整堂檢討都在唸全班怎麼考這麼差又退步",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_034",
    "cat": "段考",
    "diff": 2,
    "scenario": "一位學生段考大進步，但他是從很低分爬上來的，你想公開肯定又不揭舊傷，怎麼做？",
    "law": "（班級經營：正向增強原則）",
    "explain": "只強調他的進步幅度與努力過程，不提過去的低分，把焦點放在可被全班學習的態度上。",
    "choices": [
      {
        "label": "只談他的進步幅度與努力，不提過去分數",
        "tier": "best",
        "effects": {
          "honor": 6,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "私下大力稱讚他，但沒在班上公開肯定",
        "tier": "good",
        "note": "鼓勵到本人卻少了帶動全班的示範效果",
        "effects": {
          "honor": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾說他從吊車尾進步可見以前多混啊",
        "tier": "illegal",
        "note": "揭舊傷羞辱抵銷鼓勵，明顯不可採用",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得進步是應該的不必特別拿出來說什麼",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "拿他去比那些退步的人說你們該感到丟臉",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_035",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考前你想帶全班一起設定這次的努力目標，又不想變成名次競賽，怎麼帶？",
    "law": "（學習輔導：目標設定原則）",
    "explain": "引導每個人設定相對自己的進步目標而非班排，把比較對象從別人改成過去的自己。",
    "choices": [
      {
        "label": "讓每人訂相對自己的進步目標而非名次",
        "tier": "best",
        "effects": {
          "climate": 6,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          2
        ]
      },
      {
        "label": "請大家寫下這次想考的分數貼在桌角提醒",
        "tier": "good",
        "note": "有目標感但盯分數，仍偏向結果導向",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "規定全班目標一律前進五名沒到就要受罰",
        "tier": "illegal",
        "note": "以統一名次施壓並罰人，不當管教不可",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫大家目標就是贏過旁邊的同學最實在",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得訂目標沒用考前認真讀就好不必弄",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_036",
    "cat": "段考",
    "diff": 1,
    "scenario": "段考午休你想開放教室讓想讀書的人留下，但需要有人維持安靜，怎麼安排管理？",
    "law": "（班級經營：學生自治原則）",
    "explain": "由學生自治輪值維持安靜並訂簡單公約，讓留下的人自己對讀書環境負責。",
    "choices": [
      {
        "label": "讓學生輪值維持安靜並一起訂簡單公約",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "hp": -2
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "老師中午留在教室親自盯著大家別講話",
        "tier": "good",
        "note": "有效但綁住老師，無法長期持續執行",
        "effects": {
          "climate": 2,
          "roleModel": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "規定誰講話就罰他午休站到走廊去反省",
        "tier": "illegal",
        "note": "罰站處理講話不符比例，不當管教不可",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "開放後就不管了，吵成什麼樣都隨他們",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "嫌麻煩乾脆不開放，叫想讀的人回家再讀",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_037",
    "cat": "段考",
    "diff": 3,
    "scenario": "段考後你想跟全班一起復盤這次的讀書方法，讓下次更有效率，怎麼帶這場討論？",
    "law": "（學習輔導：後設認知原則）",
    "explain": "引導學生回顧哪些方法有效、哪些卡關，產出可調整的具體做法，培養他們的後設認知。",
    "choices": [
      {
        "label": "引導學生回顧有效與卡關處再產出做法",
        "tier": "best",
        "effects": {
          "climate": 6,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3
        ]
      },
      {
        "label": "老師分享幾個好的讀書方法給大家參考",
        "tier": "good",
        "note": "有給方法但學生沒反思，難內化成自己的",
        "effects": {
          "climate": 2,
          "roleModel": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "叫考差的人上台檢討自己方法到底錯哪裡",
        "tier": "illegal",
        "note": "逼低分者公開自責形同羞辱，不可採用",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得方法很個人不必討論，各自摸索就好",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "只一直唸大家方法不對卻不帶任何改善法",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_038",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考成績單發下後，一位學生不敢拿回家給家長簽，跑來問你怎麼辦，你怎麼陪他？",
    "law": "（親師溝通：學生支持原則）",
    "explain": "先理解他的害怕，陪他想怎麼向家長說明與設下次目標，必要時主動聯繫家長緩衝。",
    "choices": [
      {
        "label": "先理解害怕，陪他想怎麼跟家長好好說",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "提醒他成績單一定要簽，逃避也沒有用",
        "tier": "good",
        "note": "道理對但沒接住情緒，他仍卡在害怕裡",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當著同學說考這樣難怪不敢拿回家給簽",
        "tier": "illegal",
        "note": "當眾羞辱加重其壓力，不當管教不可採",
        "effects": {
          "trust": -6,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他自己想辦法，親子的事老師管不著",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "嚇他說不簽就記過讓他更不敢面對家長",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_039",
    "cat": "段考",
    "diff": 1,
    "scenario": "你想用一面進步榜激勵全班讀書，但又怕變成另一種排名壓力，怎麼設計這個榜？",
    "law": "（班級經營：正向激勵原則）",
    "explain": "榜上只記每個人相對自己的進步與努力事蹟，不放名次或分數，讓激勵不變成比較。",
    "choices": [
      {
        "label": "榜上只記個人進步與努力，不放名次分數",
        "tier": "best",
        "effects": {
          "climate": 6,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          4
        ]
      },
      {
        "label": "做一面榜每月貼出前五名鼓勵大家追上",
        "tier": "good",
        "note": "能激勵但聚焦前段，後段易更受挫折",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "把全班分數從高到低排好整份貼上進步榜",
        "tier": "illegal",
        "note": "公開排名揭隱私並施壓，明顯不可採",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得貼榜很麻煩，乾脆口頭講講就算激勵",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "用榜公開點名退步的人提醒他們要努力點",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_040",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考前你發現班上瀰漫考前焦慮，連平常開朗的同學都變得很緊繃，怎麼整體疏導？",
    "law": "（輔導知能：團體支持原則）",
    "explain": "帶一段全班共同的減壓活動並把焦慮正常化，讓大家知道緊張是共通的，彼此並不孤單。",
    "choices": [
      {
        "label": "帶全班減壓活動並把考前焦慮正常化",
        "tier": "best",
        "effects": {
          "climate": 6,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "在班上說大家別緊張，緊張是正常現象",
        "tier": "good",
        "note": "有安撫但只口頭，緊繃情緒沒被處理掉",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "嚇大家說再不認真讀這種焦慮也是白焦慮",
        "tier": "illegal",
        "note": "以恐嚇加壓忽視身心需求，不當管教不可",
        "effects": {
          "climate": -5,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得焦慮是他們自己的事，不必特別處理",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "叫他們把焦慮拿去讀書別在那邊浪費時間",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_041",
    "cat": "段考",
    "diff": 1,
    "scenario": "小考頻率你想拿捏好，太少抓不到進度，太多又讓學生壓力大，怎麼安排比較適當？",
    "law": "（評量原則：適量評量原則）",
    "explain": "和學生討論後訂出固定且適量的小考節奏，並讓每次小考都伴隨訂正，避免淪為疲勞轟炸。",
    "choices": [
      {
        "label": "與學生討論訂固定適量節奏並搭配訂正",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "老師自己排一個固定的小考表照表執行",
        "tier": "good",
        "note": "有節奏但少了學生參與，配合度打折扣",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "每天都考一張，考到大家都怕了才有效果",
        "tier": "illegal",
        "note": "過量評量造成身心疲乏，不當作法不可",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "想到才考沒想到就算，標準完全看心情定",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆都不小考，等段考一次見真章就好了",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_042",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考後你想針對全班共同錯最多的單元做補救，又要兼顧已經會的同學，怎麼設計？",
    "law": "（教學原則：差異化教學原則）",
    "explain": "用分組任務讓會的同學當小老師帶不會的，老師專注顧住卡關者，讓兩端都有事可做。",
    "choices": [
      {
        "label": "分組讓會的當小老師，老師專顧卡關者",
        "tier": "best",
        "effects": {
          "climate": 6,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "全班一起重講該單元，再發練習讓大家做",
        "tier": "good",
        "note": "照顧到弱者但會的人易覺得在浪費時間",
        "effects": {
          "climate": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "只把錯的人留下補救其他人放學自由活動",
        "tier": "illegal",
        "note": "留校貼標籤又差別待遇，不當作法不可",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "印一張補救卷叫大家回家自己做完就好了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得會錯就是不認真補也沒用乾脆不補救",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_043",
    "cat": "段考",
    "diff": 3,
    "scenario": "段考成績讓班上有人開始嘲笑考差的同學，言語霸凌的苗頭出現，你怎麼即時處理？",
    "law": "（校園霸凌防制準則）",
    "explain": "立即制止嘲笑並嚴肅重申尊重底線，私下關懷被嘲者，同時引導全班看見比較的傷害。",
    "choices": [
      {
        "label": "當下制止並重申尊重，再私下關懷被嘲者",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "在班上提醒大家不可以取笑同學的成績",
        "tier": "good",
        "note": "有制止但泛泛帶過，未必接住受傷的人",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "覺得只是同學間開玩笑不必小題大作處理",
        "tier": "illegal",
        "note": "輕忽霸凌苗頭等同放任，違反防制義務",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "反過來叫被笑的人考好一點就沒人敢笑了",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當沒看見繼續上課，覺得這種事很快會過",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ex_044",
    "cat": "段考",
    "diff": 2,
    "scenario": "段考前你想和家長一起幫孩子穩住讀書狀態，主動聯繫家長時該怎麼開啟對話？",
    "law": "（親師溝通：協同合作原則）",
    "explain": "先具體肯定孩子近況，再提出考前可以一起做的事，把家長拉進同一隊而非單向交辦。",
    "choices": [
      {
        "label": "先肯定孩子近況，再談考前能一起做的事",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "傳訊提醒家長段考快到了請多盯孩子讀書",
        "tier": "good",
        "note": "有提醒但偏交辦，家長易感壓力與被動",
        "effects": {
          "trust": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "先數落孩子問題一堆要家長回去好好管教",
        "tier": "illegal",
        "note": "以告狀貶損孩子破壞親師信任，不可採",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得讀書是學生的事不必特別聯繫家長談",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "只丟一句考差就是你家孩子不夠認真而已",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "ex_045",
    "cat": "段考",
    "diff": 3,
    "scenario": "連續兩次段考班上整體都退步，你開始懷疑自己的帶班與教學方式，這時你會怎麼做？",
    "law": "（教師專業：反思實踐原則）",
    "explain": "先冷靜蒐集學生回饋與資料找出原因，必要時請同儕觀課共備，把退步當成調整教學的契機。",
    "choices": [
      {
        "label": "蒐集回饋找原因，必要時請同儕一起共備",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          2
        ]
      },
      {
        "label": "自己調整一下教法再觀察下一次的結果",
        "tier": "good",
        "note": "願意改但缺外部資料，恐繞遠路找不到點",
        "effects": {
          "roleModel": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把退步全怪到學生不認真上開始加重處罰",
        "tier": "illegal",
        "note": "推責並加罰無助改善又傷信任，不可採",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得退步是學生資質問題與教學無關緊要",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆放棄不再花心思反正怎麼帶都沒有用",
        "tier": "wrong",
        "effects": {
          "roleModel": -6,
          "climate": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ac_001",
    "cat": "競賽",
    "diff": 1,
    "scenario": "科展選手要從班上挑兩位代表，你打算怎麼決定人選最妥當？",
    "law": "班級經營公平原則：選拔標準須事前公開透明",
    "explain": "事前公布報名資格與評選項目，讓全班依同一套標準競爭，選拔才有公信力也減少私下不滿。",
    "choices": [
      {
        "label": "先公布報名資格與評分項目再開放全班報名",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          1,
          5
        ]
      },
      {
        "label": "貼出甄選辦法但只口頭通知少數幾位學生",
        "tier": "good",
        "note": "有標準是好的，但通知不普及仍會被質疑偏心",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "私下答應家長關係好的孩子直接保送代表",
        "tier": "illegal",
        "note": "未公開的私相授受違反選拔公平，傷全班信任",
        "effects": {
          "trust": -7,
          "climate": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "憑你對學生的印象隨手指定兩個人就好",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "叫大家自己喬出兩個人，喬不定就抽籤",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_002",
    "cat": "競賽",
    "diff": 2,
    "scenario": "落選科展的孩子紅著眼眶來找你，說自己很努力卻沒被選上，你怎麼回應？",
    "law": "班級經營原則：落選輔導重在肯定付出與指出下一步",
    "explain": "先承接情緒、具體肯定他準備的努力，再給可改進的方向與下次機會，讓落選成為養分而非打擊。",
    "choices": [
      {
        "label": "先肯定他的付出，再陪他找下一個可努力的點",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "拍拍他說沒關係，下次有機會再讓他試試看",
        "tier": "good",
        "note": "安慰到位但缺具體方向，孩子仍會茫然",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾說他本來實力就差被選上才奇怪呢",
        "tier": "illegal",
        "note": "公開貶低落選生屬羞辱，嚴重傷自尊與班風",
        "effects": {
          "trust": -8,
          "climate": -7,
          "roleModel": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他別玻璃心，落選很正常哭什麼哭",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "直接說評審決定老師也沒辦法你認命吧",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_003",
    "cat": "競賽",
    "diff": 2,
    "scenario": "家長私訊你，希望讓他孩子入選奧林匹亞趣味科學隊，理由是孩子很需要這張獎狀。你怎麼處理？",
    "law": "班級經營原則：拒絕關說，堅守既定甄選標準",
    "explain": "婉謝關說、說明甄選依公開標準辦理，並邀孩子按程序準備，既守公平又不傷親師關係。",
    "choices": [
      {
        "label": "婉謝關說並說明甄選一律照公開標準辦理",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 4,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          2,
          5
        ]
      },
      {
        "label": "回覆會留意這孩子但仍須通過正式甄選",
        "tier": "good",
        "note": "守住底線，但留意一詞易讓家長誤以為有後門",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應家長偷偷把他孩子名字加進入選名單",
        "tier": "illegal",
        "note": "因關說竄改名單破壞公平，一旦曝光全盤皆輸",
        "effects": {
          "trust": -8,
          "honor": -6,
          "climate": -6
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "已讀不回假裝沒看到家長傳來的訊息",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "回家長這種事不要來吵我自己跟孩子講",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ],
    "sub": "奧林匹亞"
  },
  {
    "id": "ac_004",
    "cat": "競賽",
    "diff": 1,
    "scenario": "數學競試集訓想佔用學生午休時間，你要怎麼安排才不會引起反彈？",
    "law": "班級經營原則：佔用休息須徵得同意並控制比例",
    "explain": "先徵詢選手意願、把訓練量控制在合理範圍並保留休息，孩子才願意持續而不至於累垮。",
    "choices": [
      {
        "label": "先問選手意願，午休只借一半並保留休息",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 5,
          "hp": -3,
          "climate": 4
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "公告本週午休加訓但允許太累的人請假",
        "tier": "good",
        "note": "留了彈性，但未先徵詢仍顯得是單方面決定",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "強制全體選手午休到校外補習班加練",
        "tier": "illegal",
        "note": "強迫犧牲休息且校外加練逾越權限，不可為",
        "effects": {
          "trust": -7,
          "hp": -5,
          "climate": -6
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "每天午休全拿來練習不准任何人休息",
        "tier": "wrong",
        "effects": {
          "hp": -6,
          "climate": -5
        },
        "octalysis": []
      },
      {
        "label": "誰午休偷睡覺就把他踢出競賽隊伍",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -4
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_005",
    "cat": "競賽",
    "diff": 3,
    "scenario": "袋鼠數學競賽報名費要班費補助，但只有少數人參賽，其他人覺得不公平。你怎麼決定？",
    "law": "班級經營原則：公共資源使用須經班級討論共識",
    "explain": "把補助與否交班會討論、訂出對全班皆適用的補助規則，讓資源分配有共識而非老師一人說了算。",
    "choices": [
      {
        "label": "開班會討論補助規則並讓全班表決定案",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          3,
          2
        ]
      },
      {
        "label": "先暫墊報名費再找時間跟全班說明用途",
        "tier": "good",
        "note": "顧到參賽需求，但事後說明仍少了共識程序",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "不討論就把大筆班費撥給自己看好的選手",
        "tier": "illegal",
        "note": "擅自挪用公共班費圖利特定人，屬不當動用",
        "effects": {
          "trust": -7,
          "cohesion": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫想參賽的人全部自費跟班費沒有關係",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "誰意見多就罰他出錢補貼其他人報名",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_006",
    "cat": "競賽",
    "diff": 2,
    "scenario": "被選上百萬中學堂社會科選手的孩子，最近段考退步，家長很擔心。你怎麼平衡？",
    "law": "班級經營原則：競賽訓練須與課業負荷取得平衡",
    "explain": "和孩子家長一起檢視訓練量、適度減量並排定補課,讓榮譽與學業並進而非顧此失彼。",
    "choices": [
      {
        "label": "與親師一起減訓練量並排補課追回進度",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "請孩子先顧好段考競賽訓練暫緩兩三週",
        "tier": "good",
        "note": "顧到課業，但臨時喊停訓練易亂了競賽節奏",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "要孩子放棄段考全心備賽成績不重要",
        "tier": "illegal",
        "note": "犧牲學生課業權益換獎項，違反平衡原則",
        "effects": {
          "trust": -7,
          "hp": -5,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他成績退步就自己想辦法跟訓練無關",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "威脅他再退步就取消競賽資格警告他",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "社會"
  },
  {
    "id": "ac_007",
    "cat": "競賽",
    "diff": 2,
    "scenario": "資優生徵選要寫推薦信，兩個孩子實力相當你只能推一個，怎麼選比較服人？",
    "law": "班級經營原則：差額遴選須有明確可檢核的依據",
    "explain": "依事前訂好的可量化指標客觀比較，並向落選者說明理由，讓二選一的結果經得起檢視。",
    "choices": [
      {
        "label": "依事前訂的客觀指標評比並向兩人說明",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          1,
          5
        ]
      },
      {
        "label": "找兩人面談後憑整體表現決定推薦人選",
        "tier": "good",
        "note": "有溝通，但憑整體印象仍可能被質疑主觀",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "推跟你家有交情那個孩子比較不麻煩",
        "tier": "illegal",
        "note": "以私交而非實力推薦,屬徇私破壞徵選公正",
        "effects": {
          "trust": -8,
          "honor": -5,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "兩個都不推免得被說偏心乾脆都別去",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "honor": -4
        },
        "octalysis": []
      },
      {
        "label": "丟銅板決定要推誰反正都差不多啦",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ],
    "sub": "其他"
  },
  {
    "id": "ac_008",
    "cat": "競賽",
    "diff": 1,
    "scenario": "科展團隊三人分工不均，有人扛全部有人混水摸魚，你發現後怎麼處理？",
    "law": "班級經營原則：團體任務須明確分工與責任歸屬",
    "explain": "帶團隊重新攤開工作清單、認領各自負責項目並定期回報,讓貢獻看得見也讓搭便車無所遁形。",
    "choices": [
      {
        "label": "帶全隊重列工作清單各自認領並定期回報",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "trust": 5,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          2,
          5
        ]
      },
      {
        "label": "私下提醒混水摸魚的人多分擔一些工作",
        "tier": "good",
        "note": "點到問題，但缺團隊共識分工仍可能再失衡",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "直接把摸魚的人趕出隊伍不讓他掛名",
        "tier": "illegal",
        "note": "未經輔導逕行剔除剝奪學習權，處置過當",
        "effects": {
          "cohesion": -6,
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "反正會做的那個扛起來就好別管其他人",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "把三個人都罵一頓叫他們自己去喬",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_009",
    "cat": "競賽",
    "diff": 2,
    "scenario": "科展得獎了，榮譽該歸給三位選手還是整個班級？你打算怎麼處理這份榮耀？",
    "law": "班級經營原則：個人榮譽宜連結班級凝聚共享",
    "explain": "公開肯定選手付出，同時把得獎連結成全班的驕傲與支持，讓榮譽既歸個人又凝聚班級。",
    "choices": [
      {
        "label": "公開表揚選手也謝全班一路相挺共享榮耀",
        "tier": "best",
        "effects": {
          "honor": 6,
          "cohesion": 6,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          4
        ]
      },
      {
        "label": "頒獎時點名三位選手請全班一起鼓掌",
        "tier": "good",
        "note": "有表揚，但少了把榮譽連回全班努力的鋪陳",
        "effects": {
          "honor": 3,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "獎金獎狀全歸老師說是自己指導有方",
        "tier": "illegal",
        "note": "教師侵佔學生競賽榮譽與獎勵，嚴重失格",
        "effects": {
          "trust": -8,
          "honor": -6,
          "roleModel": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "得獎是他們三個的事跟全班沒有關係",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "低調帶過不提免得沒得獎的人會嫉妒",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_010",
    "cat": "競賽",
    "diff": 3,
    "scenario": "你發現自己整學期只顧著栽培三個資優選手，其他學生覺得被冷落。你怎麼調整？",
    "law": "班級經營原則：教學資源須兼顧全體不獨厚少數",
    "explain": "重新檢視時間分配、為非選手設計參與管道，讓競賽栽培與普遍照顧並存而非偏廢。",
    "choices": [
      {
        "label": "重新分配心力為非選手也設計參與舞台",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 6,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          3
        ]
      },
      {
        "label": "在班上多花點時間關心非選手的學習",
        "tier": "good",
        "note": "有意識調整，但無具體管道易流於口頭關心",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "公開說資源本就該給有天分的人別計較",
        "tier": "illegal",
        "note": "公然差別對待貶抑多數學生,違教育公平",
        "effects": {
          "climate": -7,
          "cohesion": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "繼續主攻三位選手反正他們最會替班爭光",
        "tier": "wrong",
        "effects": {
          "cohesion": -6,
          "climate": -5
        },
        "octalysis": []
      },
      {
        "label": "叫被冷落的人自己上進不要怪到老師頭上",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ],
    "sub": "其他"
  },
  {
    "id": "ac_011",
    "cat": "競賽",
    "diff": 2,
    "scenario": "奧林匹亞集訓進入後段，選手明顯訓練疲乏、動力下滑。你怎麼幫他們調適？",
    "law": "班級經營原則：長期訓練須安排調節與動機維護",
    "explain": "適度安排休息與輕鬆活動、重新連結初衷與目標，讓選手在疲乏期回血而非硬撐到崩潰。",
    "choices": [
      {
        "label": "安排一次輕鬆活動並陪他們重連參賽初衷",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "hp": -3,
          "climate": 4
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "讓選手這週減量訓練先把狀態調回來",
        "tier": "good",
        "note": "懂得減量,但只減量未處理動機略嫌被動",
        "effects": {
          "cohesion": 3,
          "hp": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "罵他們吃不了苦要練就練不練就滾蛋",
        "tier": "illegal",
        "note": "以辱罵脅迫逼壓疲乏學生,屬不當管教",
        "effects": {
          "trust": -7,
          "climate": -6,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "加碼訓練量逼他們撐過去就會習慣了",
        "tier": "wrong",
        "effects": {
          "hp": -6,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "不理會疲乏反正比賽快到了忍一下就好",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ],
    "sub": "奧林匹亞"
  },
  {
    "id": "ac_012",
    "cat": "競賽",
    "diff": 1,
    "scenario": "全班只有少數人想參加袋鼠盃，你想鼓勵更多人試試，該怎麼開口？",
    "law": "班級經營原則：競賽參與宜鼓勵不宜強迫",
    "explain": "用低門檻、趣味化的方式邀請,強調重在體驗而非名次，讓更多孩子願意嘗試又不感壓力。",
    "choices": [
      {
        "label": "把袋鼠盃講成有趣闖關，邀大家輕鬆試試",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 5,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5,
          2,
          3
        ]
      },
      {
        "label": "說參賽可以加平時成績吸引更多人報名",
        "tier": "good",
        "note": "誘因有效，但用加分當餌易模糊參賽初衷",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "規定全班都要報名不參加的記一支警告",
        "tier": "illegal",
        "note": "以處分強迫參賽剝奪選擇權，違自願原則",
        "effects": {
          "trust": -7,
          "climate": -6,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只找成績好的幾個來報其他人不必了",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "隨便講一句要報名的自己去找我登記",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_013",
    "cat": "競賽",
    "diff": 2,
    "scenario": "兩位選手在科展題目方向上爭執不下，互不相讓影響進度。你怎麼介入？",
    "law": "班級經營原則：團隊衝突宜引導協商達成共識",
    "explain": "請雙方各陳理由、用客觀標準比較利弊並引導折衷,讓決策有共識而非靠老師硬壓。",
    "choices": [
      {
        "label": "請兩人各說理由，依可行性一起選定方向",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "trust": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5,
          2
        ]
      },
      {
        "label": "由你聽完後直接拍板決定要做哪個題目",
        "tier": "good",
        "note": "效率高，但代為定案少了學生協商的歷練",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "誰意見大就把他換掉換聽話的人進來",
        "tier": "illegal",
        "note": "因表達意見就撤換學生，屬報復性處置",
        "effects": {
          "trust": -7,
          "cohesion": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他們自己吵贏的那個方向就採用算了",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "兩個方向都不做重新指定一個新題目",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_014",
    "cat": "競賽",
    "diff": 2,
    "scenario": "數學競試選拔考完，有學生質疑你改的分數不公。你怎麼回應這個質疑？",
    "law": "班級經營原則：評分爭議須可複核且公開說明",
    "explain": "願意當面複核考卷、攤開評分標準逐題說明,讓質疑得到正面回應而非被壓下。",
    "choices": [
      {
        "label": "願當面複核考卷並逐題說明評分的依據",
        "tier": "best",
        "effects": {
          "trust": 7,
          "climate": 5,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "請他把疑問寫下來你再找時間回覆他",
        "tier": "good",
        "note": "願處理，但延後回覆易讓質疑感被冷處理",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "罵他質疑老師很沒禮貌叫他閉嘴別吵",
        "tier": "illegal",
        "note": "以權威壓制合理申訴,侵害學生申覆權",
        "effects": {
          "trust": -8,
          "climate": -6,
          "roleModel": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "說分數就是這樣不接受任何人來查卷",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "含糊說可能改錯了但懶得重看就這樣吧",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_015",
    "cat": "競賽",
    "diff": 1,
    "scenario": "科展訓練需要佔用幾節下課，你想取得選手與其他老師的配合，怎麼安排最好？",
    "law": "班級經營原則：跨時段訓練須協調並尊重各方",
    "explain": "事先與選手和相關老師協調時段、控制次數並補回損失,讓借用時間有規矩也被尊重。",
    "choices": [
      {
        "label": "先與選手和科任老師協調時段並控制次數",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "只借自己課的下課訓練不動別的老師時段",
        "tier": "good",
        "note": "不擾他人，但全集中己課下課孩子也吃不消",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "未經告知就把別科下課全拿來練科展",
        "tier": "illegal",
        "note": "擅佔他人課務時段未協調,逾越分際惹爭議",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "每節下課都抓選手來練不讓他們休息",
        "tier": "wrong",
        "effects": {
          "hp": -6,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "想到才臨時抓人練完全不先講一聲",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_016",
    "cat": "競賽",
    "diff": 3,
    "scenario": "校長暗示你讓某主任的孩子入選奧林匹亞隊，但他實力其實不夠。你怎麼處理？",
    "law": "班級經營原則：抗拒不當施壓守住專業判斷",
    "explain": "婉拒上意、以客觀甄選結果說明，並建議該生循正規訓練再爭取，守住專業也不撕破臉。",
    "choices": [
      {
        "label": "婉拒並以甄選結果說明，請該生正規再爭取",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 5,
          "roleModel": 4,
          "hp": -5
        },
        "octalysis": [
          1,
          2,
          5
        ]
      },
      {
        "label": "回校長會再評估但仍以甄選標準為準據",
        "tier": "good",
        "note": "守住標準，但再評估的模糊話術仍留後門想像",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "為討好校長硬把該生塞進正取名單裡",
        "tier": "illegal",
        "note": "屈從權勢竄改錄取，犧牲公平最不可取",
        "effects": {
          "trust": -8,
          "honor": -7,
          "roleModel": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "假裝沒聽懂校長的話拖著不給任何答覆",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "把難題丟給其他評審要他們自己去擋",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "奧林匹亞"
  },
  {
    "id": "ac_017",
    "cat": "競賽",
    "diff": 2,
    "scenario": "百萬中學堂校內選拔，你想讓過程公開透明又有趣。你會怎麼設計流程？",
    "law": "班級經營原則：選拔流程宜公開且可被檢視",
    "explain": "用公開計分的搶答賽當海選、規則人人事前知曉,讓選拔既透明又能炒熱班級氣氛。",
    "choices": [
      {
        "label": "辦公開計分的搶答海選，規則事前先公告",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 5,
          "climate": 5,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "用紙筆測驗選拔考完直接公布錄取名單",
        "tier": "good",
        "note": "客觀但少了透明的過程，僅看結果參與感低",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "私下憑印象內定名單對外才假裝有甄選",
        "tier": "illegal",
        "note": "假甄選真內定形同欺騙,徹底破壞公信",
        "effects": {
          "trust": -8,
          "climate": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "隨便出幾題誰先舉手就算誰入選最快",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "讓全班投票選人氣最高的去比較熱鬧",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ],
    "sub": "社會"
  },
  {
    "id": "ac_018",
    "cat": "競賽",
    "diff": 1,
    "scenario": "入選科展的孩子很開心，但你擔心他驕傲忘本，想提醒又不想潑冷水。怎麼說好？",
    "law": "班級經營原則：榮譽教育宜肯定中帶提醒謙遜",
    "explain": "先真心恭喜並肯定他的努力,再溫和提醒比賽是過程,讓他在被肯定中也保持謙虛踏實。",
    "choices": [
      {
        "label": "先真心恭喜他，再提醒得獎只是新的起點",
        "tier": "best",
        "effects": {
          "honor": 5,
          "roleModel": 5,
          "climate": 4,
          "hp": -2
        },
        "octalysis": [
          2,
          1,
          5
        ]
      },
      {
        "label": "稱讚他很棒並要他記得謝謝幫過他的人",
        "tier": "good",
        "note": "提醒感恩很好，但較少觸及持續精進的提點",
        "effects": {
          "honor": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "潑他冷水說別得意你根本還沒比就驕傲",
        "tier": "illegal",
        "note": "以打壓代替引導傷害自信,屬負向羞辱",
        "effects": {
          "climate": -6,
          "trust": -5,
          "roleModel": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "不管他反正開心一下又不會怎麼樣",
        "tier": "wrong",
        "effects": {
          "roleModel": -3,
          "climate": -2
        },
        "octalysis": []
      },
      {
        "label": "一直誇他天才害他越來越目中無人",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_019",
    "cat": "競賽",
    "diff": 2,
    "scenario": "兩名落選資優徵選的學生開始自暴自棄，連平常功課都不交了。你怎麼拉他們回來？",
    "law": "班級經營原則：挫折輔導重在重建價值與目標",
    "explain": "個別談話接住挫敗、肯定其他面向的長處並設小目標,讓孩子從落選陰影走回正軌。",
    "choices": [
      {
        "label": "個別談話接住挫敗並陪他們設新的小目標",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "提醒他們落選不代表沒價值要繼續加油",
        "tier": "good",
        "note": "話是對的，但停在口頭打氣難拉動實際行為",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾說他們落選就擺爛真是輸不起的人",
        "tier": "illegal",
        "note": "公開貼標籤羞辱受挫生,加深自我放棄",
        "effects": {
          "trust": -7,
          "climate": -6,
          "roleModel": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "不交功課就記過讓他們知道後果很嚴重",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "隨他們去反正落選擺爛是他們自己的事",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ],
    "sub": "其他"
  },
  {
    "id": "ac_020",
    "cat": "競賽",
    "diff": 2,
    "scenario": "科展選手家長要求你給孩子加開一對一訓練，其他選手家長知道後也來要。你怎麼處理？",
    "law": "班級經營原則：訓練資源分配須一致不偏私",
    "explain": "說明訓練採一致規格、對所有選手公平開放,避免因個別要求形成差別待遇引發連鎖不滿。",
    "choices": [
      {
        "label": "說明訓練一律同規格，對所有選手都公平",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "答應在課後開放大家都能來的共同加強",
        "tier": "good",
        "note": "開放共學不錯，但加碼時段恐增孩子負擔",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "只偷偷替關係好的家長孩子開小灶補強",
        "tier": "illegal",
        "note": "私下差別補強製造不公,違資源一致原則",
        "effects": {
          "trust": -8,
          "honor": -5,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "誰家長吵得兇就先幫誰的孩子加練",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "全部拒絕並叫家長以後別再來煩老師",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_021",
    "cat": "競賽",
    "diff": 3,
    "scenario": "團隊科展報告日逼近,組長壓力大到失眠，其他組員卻很被動。你怎麼救這個團隊？",
    "law": "班級經營原則：團隊壓力須重整分工並照顧身心",
    "explain": "先關心組長身心、重新攤平分工把任務拆給每人,讓壓力分散且進度可控而非壓垮一人。",
    "choices": [
      {
        "label": "先關心組長狀態，再把任務重新拆給每人",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "trust": 5,
          "hp": -4,
          "climate": 4
        },
        "octalysis": [
          5,
          3,
          2
        ]
      },
      {
        "label": "幫組長把最急的部分先分一些給組員做",
        "tier": "good",
        "note": "分擔燃眉之急，但未根治被動分工易再失衡",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "罵被動組員擺爛限他們今晚做完不准睡",
        "tier": "illegal",
        "note": "辱罵加超時逼迫，既傷人又逾越管教界線",
        "effects": {
          "trust": -7,
          "hp": -5,
          "climate": -6
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫組長能者多勞自己想辦法扛到比賽結束",
        "tier": "wrong",
        "effects": {
          "hp": -6,
          "cohesion": -4
        },
        "octalysis": []
      },
      {
        "label": "乾脆把報告砍掉一半隨便交一交算了",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_022",
    "cat": "競賽",
    "diff": 1,
    "scenario": "袋鼠數學競賽成績下來，全班高低落差很大。你想怎麼公布才不傷人？",
    "law": "班級經營原則：成績回饋宜重歷程不公開排名",
    "explain": "個別發回成績、肯定進步與努力,不在班上公開排名,讓低分者保有尊嚴也維持學習動力。",
    "choices": [
      {
        "label": "個別發回成績並肯定每個人努力的歷程",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 5,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          1
        ]
      },
      {
        "label": "只表揚進步多的人不公布完整分數排名",
        "tier": "good",
        "note": "保護後段不錯，但只誇進步者仍可能漏接人",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "把全班分數高低排名貼在公布欄給大家看",
        "tier": "illegal",
        "note": "公開張貼排名羞辱低分生,侵害人格尊嚴",
        "effects": {
          "climate": -7,
          "trust": -6,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫考差的人上台說明自己為什麼沒考好",
        "tier": "wrong",
        "effects": {
          "climate": -6,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "在班上唸出最高分跟最低分讓大家比較",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_023",
    "cat": "競賽",
    "diff": 2,
    "scenario": "奧林匹亞選手反映訓練內容太難跟不上，想放棄。你怎麼幫他重燃信心？",
    "law": "班級經營原則：訓練宜分層因材調整難度",
    "explain": "拆解難點、調整為可達成的階梯式進度並陪做幾題,讓選手累積小成功重拾信心而非硬撐。",
    "choices": [
      {
        "label": "拆解難點調成階梯進度，陪他從小題做起",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -3,
          "climate": 4
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "請程度好的同學課後帶他補一補較弱處",
        "tier": "good",
        "note": "同儕互助有效，但全推給同學少了你的調整",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "嘲笑他這麼簡單都不會乾脆退出別丟臉",
        "tier": "illegal",
        "note": "以嘲諷貶低逼退學生,屬傷害性言語暴力",
        "effects": {
          "trust": -7,
          "climate": -6,
          "roleModel": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他咬牙硬撐反正撐過去就會了別抱怨",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "他想放棄就讓他放棄反正名額多的是",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "奧林匹亞"
  },
  {
    "id": "ac_024",
    "cat": "競賽",
    "diff": 2,
    "scenario": "科展隊裡有個非資優但超認真的孩子想加入，但他基礎較弱。你怎麼回應他的渴望？",
    "law": "班級經營原則：機會宜對努力者開放不唯天分",
    "explain": "肯定他的熱忱、給他適配的角色與補強規劃,讓努力的孩子也有舞台而非只看天分篩人。",
    "choices": [
      {
        "label": "肯定他的熱忱並安排適合角色陪他補基礎",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 5,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "先讓他從旁協助觀摩看適不適合再決定",
        "tier": "good",
        "note": "給機會但留觀察期，較被動恐磨掉他的熱情",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "直接說基礎差就別來免得拖累整隊成績",
        "tier": "illegal",
        "note": "以天分為由排拒努力者,違機會均等精神",
        "effects": {
          "climate": -7,
          "trust": -6,
          "roleModel": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "敷衍他說名額滿了其實是不想帶基礎差的",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "讓他進來卻完全不分配任何工作給他做",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_025",
    "cat": "競賽",
    "diff": 1,
    "scenario": "數學競試集訓常拖到放學後很晚，有家長擔心孩子安全與休息。你怎麼回應？",
    "law": "班級經營原則：課後訓練須顧及安全與作息",
    "explain": "訂下合理結束時間、和家長說明接送安排並控制時數,讓集訓在安全有度的前提下進行。",
    "choices": [
      {
        "label": "訂合理結束時間並與家長講好接送與時數",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "hp": -3,
          "cohesion": 3
        },
        "octalysis": [
          1,
          5,
          2
        ]
      },
      {
        "label": "答應盡量不拖太晚但偶爾趕進度會延長",
        "tier": "good",
        "note": "願控制時間，但偶爾延長的彈性家長仍難安心",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "硬留學生練到很晚也不通知家長來接",
        "tier": "illegal",
        "note": "超時留置又未告知家長,涉學生安全責任",
        "effects": {
          "trust": -7,
          "climate": -6,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫家長別管反正比賽重要晚一點沒差",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "每天都練到天黑也不管誰要怎麼回家",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_026",
    "cat": "競賽",
    "diff": 3,
    "scenario": "你發現某選手疑似請人代寫科展報告的部分內容。比賽在即，你怎麼處理最妥當？",
    "law": "誠信原則／競賽規章：作品須為參賽者本人成果",
    "explain": "私下查證並讓學生說明,要求其重做為自己的成果並進行誠信教育,守住競賽的根本底線。",
    "choices": [
      {
        "label": "私下查證讓他說明，要求改回自己的成果",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "roleModel": 5,
          "hp": -5
        },
        "octalysis": [
          1,
          2,
          5
        ]
      },
      {
        "label": "提醒他作品須本人完成請他自我檢查改正",
        "tier": "good",
        "note": "點出規範，但未實質查證恐讓問題蒙混過關",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          1
        ]
      },
      {
        "label": "睜隻眼閉隻眼讓代寫作品照常去比賽",
        "tier": "illegal",
        "note": "縱容舞弊參賽違反誠信規章,後患無窮",
        "effects": {
          "honor": -8,
          "trust": -6,
          "roleModel": -6
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾揭發羞辱他作弊讓全班看他笑話",
        "tier": "wrong",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": []
      },
      {
        "label": "假裝不知情把報告原樣交出去再說",
        "tier": "wrong",
        "effects": {
          "honor": -6,
          "trust": -4
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_027",
    "cat": "競賽",
    "diff": 2,
    "scenario": "趣味科學競賽要分組，強弱不均怕影響公平。你會怎麼分組才服人？",
    "law": "班級經營原則：分組宜兼顧公平與互助學習",
    "explain": "用公開規則做強弱均衡的混合分組,讓各組實力相近又能彼此帶動,兼顧公平與學習。",
    "choices": [
      {
        "label": "依公開規則做強弱均衡的混合分組安排",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "trust": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          3
        ]
      },
      {
        "label": "讓學生自由組隊但限制每組要有強有弱",
        "tier": "good",
        "note": "尊重意願又設限，但自由組隊仍可能落單孤立",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把強的全集中一組保送他們去拿名次",
        "tier": "illegal",
        "note": "刻意組強隊圖獎犧牲公平,違均衡分組原則",
        "effects": {
          "cohesion": -6,
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "按座號隨便分完全不管強弱平不平均",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "讓人緣好的先挑人剩下的湊成一組",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": []
      }
    ],
    "sub": "奧林匹亞"
  },
  {
    "id": "ac_028",
    "cat": "競賽",
    "diff": 2,
    "scenario": "選上百萬中學堂的孩子訓練後跟你說壓力好大、怕表現不好丟班上的臉。你怎麼接住他？",
    "law": "班級經營原則：競賽壓力宜重新框定成敗意義",
    "explain": "同理他的壓力、把成敗重新定義成全班一起承擔的經驗,讓孩子卸下獨自扛榮辱的重擔。",
    "choices": [
      {
        "label": "同理他並說無論結果全班都會一起承擔",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 5,
          "climate": 5,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "告訴他盡力就好不用太在意最後的名次",
        "tier": "good",
        "note": "減壓的話沒錯，但較籠統難真正卸下他的重擔",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "說你代表全班輸了就是害大家丟臉喔",
        "tier": "illegal",
        "note": "把全班榮辱壓在孩子身上,屬情緒勒索",
        "effects": {
          "trust": -7,
          "hp": -5,
          "climate": -6
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他別想太多比賽而已有什麼好怕的",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "回他都選你了現在才喊壓力大太晚了",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ],
    "sub": "社會"
  },
  {
    "id": "ac_029",
    "cat": "競賽",
    "diff": 1,
    "scenario": "科展指導你想培養選手主動思考，而不是凡事都等你給答案。你會怎麼帶？",
    "law": "班級經營原則：指導宜引導探究培養自學能力",
    "explain": "多用提問引導、讓學生自己嘗試與修正,你從旁點撥,培養選手獨立探究而非依賴餵答案。",
    "choices": [
      {
        "label": "多用提問引導讓他們自己試錯你再點撥",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "trust": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          2,
          7
        ]
      },
      {
        "label": "先給範例再請他們照著延伸做做看變化",
        "tier": "good",
        "note": "有鷹架，但給範例在先仍易讓學生照抄少思考",
        "effects": {
          "roleModel": 3,
          "climate": 2
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "規定只能照你的做法不准有別的想法",
        "tier": "illegal",
        "note": "壓制學生自主探究空間,扼殺學習主體性",
        "effects": {
          "roleModel": -6,
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "每個步驟都直接給答案叫他們抄起來",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "丟著不管叫他們自己摸完全不給協助",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_030",
    "cat": "競賽",
    "diff": 2,
    "scenario": "資優徵選名單公布後，落選家長到辦公室質問你選拔不公。你怎麼回應這位家長？",
    "law": "班級經營原則：面對申訴須以證據與程序說明",
    "explain": "冷靜聽完、攤開甄選標準與該生成績據實說明,並提供後續成長建議,讓申訴得到專業回應。",
    "choices": [
      {
        "label": "冷靜攤開甄選標準與成績據實向家長說明",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 4,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          1,
          5
        ]
      },
      {
        "label": "先安撫家長情緒再約時間帶資料詳細解釋",
        "tier": "good",
        "note": "情緒處理得宜，但延後說明易讓家長覺得迴避",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "為息事寧人答應下次一定讓他孩子入選",
        "tier": "illegal",
        "note": "私下承諾保送破壞甄選公正,埋下更大爭議",
        "effects": {
          "trust": -7,
          "honor": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "跟家長吵起來說他根本不懂選拔在幹嘛",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": []
      },
      {
        "label": "把家長晾在一旁說很忙沒空跟他解釋",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ],
    "sub": "其他"
  },
  {
    "id": "ac_031",
    "cat": "競賽",
    "diff": 2,
    "scenario": "袋鼠盃前夕，選手因模擬考失常情緒崩潰，比賽信心全沒了。你怎麼穩住他？",
    "law": "班級經營原則：賽前焦慮宜安定情緒重建信心",
    "explain": "先穩住情緒、帶他看見已累積的實力並做最後可控的小準備,讓他帶著踏實感上場。",
    "choices": [
      {
        "label": "先安定他情緒，再帶他看自己累積的實力",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -3,
          "climate": 4
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "提醒他模擬考失常很正常正式賽再拚回來",
        "tier": "good",
        "note": "打氣有理，但只給寬慰未陪他做最後準備",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "罵他這點挫折就崩潰上場一定也是輸",
        "tier": "illegal",
        "note": "賽前以辱罵加重焦慮,屬傷害性不當管教",
        "effects": {
          "trust": -7,
          "hp": -5,
          "climate": -6
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他別演了振作一點崩潰有什麼用處",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "不理他的情緒只丟一疊考古題叫他做",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_032",
    "cat": "競賽",
    "diff": 3,
    "scenario": "兩位選手同分並列科展第一,只能派一人去區賽。你要如何決定又不傷感情？",
    "law": "班級經營原則：同分裁決須有事前共識的機制",
    "explain": "依事前約定的加賽或附加指標決定,並讓未出線者擔任重要後援,讓裁決服人也保住情誼。",
    "choices": [
      {
        "label": "依事前約定的加賽機制決定，落選者任後援",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 5,
          "honor": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          5,
          3
        ]
      },
      {
        "label": "請兩人協調誰去誰留你從旁協助談妥它",
        "tier": "good",
        "note": "尊重學生協商，但無機制易讓談判陷入僵局",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私心派跟你較親那個去另一個草草打發",
        "tier": "illegal",
        "note": "以私交決定出線者,徇私破壞同分公正",
        "effects": {
          "trust": -8,
          "honor": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "兩個都不派乾脆放棄這次的區賽名額",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "cohesion": -4
        },
        "octalysis": []
      },
      {
        "label": "猜拳決定誰去輸的就摸摸鼻子認了吧",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_033",
    "cat": "競賽",
    "diff": 1,
    "scenario": "趣味科學競賽選手選拔，你想讓每個躍躍欲試的孩子都有機會被看見。怎麼設計海選？",
    "law": "班級經營原則：海選宜低門檻廣納參與意願",
    "explain": "設計人人可上場的趣味關卡海選、再從中觀察選才,讓更多孩子被看見也讓選拔更公平。",
    "choices": [
      {
        "label": "辦人人可上場的趣味關卡再從中觀察選才",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          3
        ]
      },
      {
        "label": "開放自由報名再以一場測驗篩出入選的人",
        "tier": "good",
        "note": "願開放報名，但只靠一試難看見多元的潛力",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "只私下找你看好的幾個其他人不必報名",
        "tier": "illegal",
        "note": "封閉海選排除多數參與,違公平公開原則",
        "effects": {
          "climate": -6,
          "trust": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "按上次成績直接抓前幾名不用再選了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "讓想報的自己來說反正沒人來就算了",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": []
      }
    ],
    "sub": "奧林匹亞"
  },
  {
    "id": "ac_034",
    "cat": "競賽",
    "diff": 2,
    "scenario": "科展奪牌回來，你想把這份榮譽轉化成全班的學習動力。你會怎麼做？",
    "law": "班級經營原則：榮譽宜轉化為全班共同的激勵",
    "explain": "辦分享會讓選手回饋歷程與方法,把得獎經驗化為全班可學的養分,使榮譽變成共同前進動力。",
    "choices": [
      {
        "label": "辦分享會讓選手回饋歷程化為全班的養分",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          1
        ]
      },
      {
        "label": "在班上頒個小獎並請選手說一句感想就好",
        "tier": "good",
        "note": "有儀式感，但僅一句感想難轉成全班的學習力",
        "effects": {
          "honor": 3,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "拿選手成果到處炫耀說都是自己的功勞",
        "tier": "illegal",
        "note": "搶佔學生功勞自抬身價,侵榮譽且傷信任",
        "effects": {
          "trust": -7,
          "honor": -6,
          "roleModel": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "得獎就得獎了不必特別說怕別人眼紅",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "只把獎狀塞給選手其他什麼都不安排",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_035",
    "cat": "競賽",
    "diff": 2,
    "scenario": "你想公開科展選拔的評分表，但怕被質疑或引起選手間比較。要不要公開？",
    "law": "班級經營原則：評選資訊公開以建立程序信任",
    "explain": "事前公開評分向度與權重、但個別分數個別回覆,既維持透明又避免公開比較傷害彼此。",
    "choices": [
      {
        "label": "事前公開評分向度，個別分數則個別回覆",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "只公布錄取名單評分細節有人問再說明",
        "tier": "good",
        "note": "願事後說明，但不主動公開向度透明度仍不足",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "把每人的詳細分數全貼出來讓大家互比",
        "tier": "illegal",
        "note": "公開個別分數引發比較傷害,侵隱私失分寸",
        "effects": {
          "climate": -6,
          "trust": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "完全不公開任何標準只說相信老師就好",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "評分表寫得很模糊讓人看不出怎麼算的",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_036",
    "cat": "競賽",
    "diff": 1,
    "scenario": "數學競試選手抱怨訓練很無聊、做題做到麻木。你怎麼讓訓練重新有趣起來？",
    "law": "班級經營原則：訓練設計宜兼顧挑戰與趣味",
    "explain": "加入遊戲化挑戰、限時關卡或同儕對戰,讓重複練習多點趣味與成就感而不致枯燥麻木。",
    "choices": [
      {
        "label": "加入限時闖關與同儕對戰讓練題變遊戲",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 5,
          "hp": -3,
          "trust": 3
        },
        "octalysis": [
          3,
          2,
          6
        ]
      },
      {
        "label": "把題目換成生活情境題增加一點新鮮感",
        "tier": "good",
        "note": "換題型有幫助，但仍是單向練習互動感不足",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "罵他們不專心無聊就是不夠認真給我做",
        "tier": "illegal",
        "note": "以責罵回應疲乏無視需求,屬負向施壓",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "加倍題量讓他們忙到沒空覺得無聊",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得無聊就別練了反正不缺你這一個",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_037",
    "cat": "競賽",
    "diff": 3,
    "scenario": "你發現自己為了班級科展榮譽，給選手的訓練量已明顯超過孩子負荷。怎麼自我修正？",
    "law": "班級經營原則：教師須自省避免以榮譽剝削學生",
    "explain": "誠實檢視自己的得失心、主動把訓練量降回合理範圍並向選手致歉,讓孩子福祉重回首位。",
    "choices": [
      {
        "label": "誠實降回合理訓練量並向選手坦白致歉",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 6,
          "hp": -4,
          "climate": 4
        },
        "octalysis": [
          1,
          5,
          2
        ]
      },
      {
        "label": "默默把訓練量減一些但沒跟選手說原因",
        "tier": "good",
        "note": "願減量是好的，但不說明孩子難理解這份體貼",
        "effects": {
          "trust": 3,
          "hp": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "說服自己孩子撐得住繼續維持高壓訓練",
        "tier": "illegal",
        "note": "為榮譽合理化過勞剝削,違學生身心福祉",
        "effects": {
          "trust": -7,
          "hp": -6,
          "roleModel": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把疲累怪到孩子抗壓性差身上不檢討自己",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "比賽完再說現在先衝刺撐過這幾週再講",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "trust": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_038",
    "cat": "競賽",
    "diff": 2,
    "scenario": "百萬中學堂團體賽要選四人，班上想參加的有八個。你怎麼選又不傷其他四人？",
    "law": "班級經營原則：差額選拔須給落選者出路與肯定",
    "explain": "用公開選拔挑出代表,同時為落選者安排後援或啦啦隊角色,讓每個人都在賽事中有位置。",
    "choices": [
      {
        "label": "公開選拔挑代表，落選者改任後援與應援",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "trust": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          3
        ]
      },
      {
        "label": "辦小測驗選前四名其餘四人下次再優先",
        "tier": "good",
        "note": "客觀挑人，但只承諾下次仍少了當下的安置",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "憑喜好挑四個順眼的其他人愛比不比隨便",
        "tier": "illegal",
        "note": "憑好惡選人又漠視落選者,違公平且傷心",
        "effects": {
          "trust": -7,
          "climate": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接抽籤決定四人落選的也別來吵我",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "誰先報名就誰去後面想參加的就沒份了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ],
    "sub": "社會"
  },
  {
    "id": "ac_039",
    "cat": "競賽",
    "diff": 1,
    "scenario": "袋鼠盃選手訓練想借用幾次午休，你擔心剝奪孩子休息。怎麼拿捏才剛好？",
    "law": "班級經營原則：佔用休息須節制並徵得同意",
    "explain": "每週只借少數午休、且先徵詢選手同意並保留充足休息,讓訓練與作息取得平衡不致過勞。",
    "choices": [
      {
        "label": "每週只借少數午休並先徵得選手的同意",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 4,
          "hp": -2,
          "climate": 4
        },
        "octalysis": [
          5,
          2,
          1
        ]
      },
      {
        "label": "借午休前半段練後半段一定讓他們休息",
        "tier": "good",
        "note": "保留休息不錯，但天天借仍會累積疲累感",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "強制所有選手午休全程到教室集合訓練",
        "tier": "illegal",
        "note": "強佔全部午休剝奪休息權,違節制原則",
        "effects": {
          "hp": -5,
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "想練就午休叫人來不想問他們的意願",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "整個午休都拿來練還說休息是浪費時間",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ],
    "sub": "數學"
  },
  {
    "id": "ac_040",
    "cat": "競賽",
    "diff": 2,
    "scenario": "科展訓練讓選手成了班上焦點，幾個非選手私下說酸話、關係變僵。你怎麼修補班級氣氛？",
    "law": "班級經營原則：榮譽分配須維護班級整體和諧",
    "explain": "肯定選手也創造非選手的舞台、引導彼此理解,讓焦點不集中於少數而修復班級裂痕。",
    "choices": [
      {
        "label": "肯定選手也替非選手創造被看見的舞台",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 6,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          3
        ]
      },
      {
        "label": "私下找說酸話的人聊聊理解他們的心情",
        "tier": "good",
        "note": "願傾聽不錯，但只安撫未補上舞台難根治失衡",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾罵說酸話的人見不得別人好很差勁",
        "tier": "illegal",
        "note": "公開斥責反激化對立,傷班級氣氛與信任",
        "effects": {
          "climate": -7,
          "trust": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "更刻意捧選手讓酸的人知道嫉妒沒有用",
        "tier": "wrong",
        "effects": {
          "cohesion": -6,
          "climate": -5
        },
        "octalysis": []
      },
      {
        "label": "裝作沒看到關係變僵反正不關訓練的事",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_041",
    "cat": "競賽",
    "diff": 3,
    "scenario": "資優徵選你想避免只用紙筆成績一刀切,讓不同特質的孩子都有機會。怎麼設計才周全？",
    "law": "班級經營原則：選才宜多元指標避免單一標準",
    "explain": "結合筆試、實作與面談等多元向度評估,讓擅長不同面向的孩子都被看見,選才更公平周延。",
    "choices": [
      {
        "label": "結合筆試實作與面談多元向度一起評估",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "honor": 4,
          "hp": -4
        },
        "octalysis": [
          3,
          2,
          5
        ]
      },
      {
        "label": "以筆試為主再加一點實作表現綜合計分",
        "tier": "good",
        "note": "有納入實作，但仍偏重筆試難照顧多元特質",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "只看一次考試分數高低一刀切定錄取",
        "tier": "illegal",
        "note": "單一標準排除多元潛力,選才僵化欠公允",
        "effects": {
          "climate": -6,
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "看誰平常表現乖就選誰跟能力沒什麼關係",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": []
      },
      {
        "label": "標準訂得很複雜其實還是憑你主觀挑人",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ],
    "sub": "其他"
  },
  {
    "id": "ac_042",
    "cat": "競賽",
    "diff": 2,
    "scenario": "選上的科展選手段考前希望暫停訓練專心讀書，但比賽也逼近。你怎麼幫他安排？",
    "law": "班級經營原則：課業與訓練衝突宜協商排程",
    "explain": "與選手一起排出讀書與訓練的時間表、段考週適度減量,讓兩頭都能兼顧而非被迫二選一。",
    "choices": [
      {
        "label": "與他共排時間表，段考週訓練適度先減量",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          1
        ]
      },
      {
        "label": "讓他段考前停訓三天考完再加緊補回來",
        "tier": "good",
        "note": "顧到段考，但事後加緊補恐讓賽前更趕更累",
        "effects": {
          "trust": 3,
          "hp": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "要他段考照常訓練不准請假成績自己顧",
        "tier": "illegal",
        "note": "罔顧學生課業權強迫訓練,違平衡原則",
        "effects": {
          "trust": -7,
          "hp": -5,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他自己選要比賽還是要成績別兩個都要",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "說比賽最重要段考成績爛一點沒有關係",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_043",
    "cat": "競賽",
    "diff": 1,
    "scenario": "科展團隊得名後，組員為了誰功勞大起爭執。你怎麼引導他們看待這份共同榮譽？",
    "law": "班級經營原則：團體榮譽宜強調協作共有",
    "explain": "帶大家回顧各自的貢獻、肯定缺一不可的協作,讓榮譽歸於團隊整體而非比較誰功勞最大。",
    "choices": [
      {
        "label": "帶大家回顧彼此貢獻，強調缺一不可的協作",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          4
        ]
      },
      {
        "label": "提醒他們是一起得獎的別再爭功勞大小",
        "tier": "good",
        "note": "立場正確，但僅口頭勸阻未化解比較的心結",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "由你判定誰功勞最大獎勵就照這比例分配",
        "tier": "illegal",
        "note": "替團隊論功排序反激化爭執,傷協作精神",
        "effects": {
          "cohesion": -6,
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫吵最兇那個閉嘴功勞當然算最大那位",
        "tier": "wrong",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "隨他們去吵反正獎狀上有名字就好了",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ],
    "sub": "科展"
  },
  {
    "id": "ac_044",
    "cat": "競賽",
    "diff": 2,
    "scenario": "趣味科學競賽落選的孩子表面說沒差，但你看得出他其實很失落。你怎麼主動關心？",
    "law": "班級經營原則：隱性挫折宜主動察覺溫和接住",
    "explain": "私下找他聊、讓他說出真實感受並肯定他的勇於嘗試,讓壓抑的失落被看見而非獨自消化。",
    "choices": [
      {
        "label": "私下找他聊，引導說出感受並肯定他的嘗試",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "找機會多誇他別的優點讓他轉移注意力",
        "tier": "good",
        "note": "用優點打氣不錯，但繞開感受難真正接住失落",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾點名說他落選了大家要多多安慰他",
        "tier": "illegal",
        "note": "公開揭其落選反令他更難堪,傷自尊欠體貼",
        "effects": {
          "climate": -6,
          "trust": -5,
          "roleModel": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "他說沒差就當沒事不必再去多管閒事了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "叫他男子漢落選哭哭啼啼很沒出息的樣子",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ],
    "sub": "奧林匹亞"
  },
  {
    "id": "ac_045",
    "cat": "競賽",
    "diff": 3,
    "scenario": "整個競賽季結束，你想帶選手與全班一起復盤,把這段歷程沉澱成共同記憶。你會怎麼做？",
    "law": "班級經營原則：競賽結束宜共同復盤凝聚成長",
    "explain": "帶全班回顧得失、讓選手與非選手都分享收穫,把整季經驗化為班級共同的成長與凝聚。",
    "choices": [
      {
        "label": "帶全班一起復盤得失，人人分享這季的收穫",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          2,
          1
        ]
      },
      {
        "label": "請選手上台講講比賽心得讓大家聽一聽",
        "tier": "good",
        "note": "有分享，但只讓選手講少了全班一起沉澱",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "只誇得獎的人對沒參賽的隻字不提帶過",
        "tier": "illegal",
        "note": "復盤獨厚得獎者冷落多數,傷班級整體感",
        "effects": {
          "cohesion": -6,
          "climate": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "比賽結束就結束了不必特別回顧浪費時間",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "只在心裡記著成績其他什麼都不跟班上講",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ],
    "sub": "其他"
  },
  {
    "id": "ln_001",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "作文比賽要選一位代表，班上三位學生程度相近，你該怎麼挑選才服眾？",
    "law": "選拔公開透明原則",
    "explain": "事先公布評選標準並當場限時命題實作，讓三人同題競寫，結果有憑有據最服眾。",
    "choices": [
      {
        "label": "公布評分標準後當場限時同題命題實作",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 5,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "請國文科同事一起看三篇舊作再決定人選",
        "tier": "good",
        "note": "多一雙眼較客觀，但舊作非同題仍欠公平基準。",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下選平時跟你最好的那位學生代表",
        "tier": "illegal",
        "note": "以私交而非實力選才，破壞公平也傷其他學生信任。",
        "effects": {
          "trust": -6,
          "climate": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "乾脆用猜拳決定三個人運氣比一比",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -4
        },
        "octalysis": []
      },
      {
        "label": "直接指定段考作文最高分那位上場",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_002",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "國字注音選手常把破音字寫錯，距離比賽只剩兩週，你會怎麼幫他準備？",
    "law": "系統化訓練原則",
    "explain": "整理常考破音字與易錯字清單，每天小量聽寫並訂正，集中火力攻最常失分處。",
    "choices": [
      {
        "label": "整理破音字清單每天小量聽寫並當天訂正",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "honor": 4,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "把歷屆考古題印給他自己回家慢慢練習",
        "tier": "good",
        "note": "有方向是好事，但缺即時訂正易把錯誤練成習慣。",
        "effects": {
          "honor": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "乾脆把疑似考題偷偷透露給自己的選手",
        "tier": "illegal",
        "note": "以不當管道取得試題，違反競賽公平也教壞學生。",
        "effects": {
          "trust": -7,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他把整本字典從頭到尾抄寫三遍交來",
        "tier": "wrong",
        "effects": {
          "hp": -4,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "要他考前一晚熬夜硬背五百個生難字詞",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_003",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國語演講選手講稿背得很熟，但上台像背書沒有感情，你會如何指導？",
    "law": "啟發式指導原則",
    "explain": "先讓他理解每段想打動聽眾的目的，再用提問引導語氣轉折，而非逐句示範要他模仿。",
    "choices": [
      {
        "label": "引導他想清每段要打動誰再自己調整語氣",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "trust": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "先示範一遍標準語調讓他照著模仿練習",
        "tier": "good",
        "note": "有具體參照較快上手，但易變成複製你而失去自我。",
        "effects": {
          "roleModel": 2,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "乾脆整篇講稿都由你重寫成漂亮華麗版本",
        "tier": "illegal",
        "note": "代筆剝奪學生表達也違賽事自撰精神，越俎代庖。",
        "effects": {
          "trust": -6,
          "honor": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他回家對著鏡子自己練到有感情為止",
        "tier": "wrong",
        "effects": {
          "hp": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "跟他說感情這種事是天生的練也沒有用",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "roleModel": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_004",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "閩南語演講選手在家講國語，台語腔調生硬，離比賽一個月你怎麼幫他正音？",
    "law": "母語沉浸學習原則",
    "explain": "請台語流利的耆老或語文老師錄示範音檔，讓他每天跟讀模仿，並用實際對話沉浸練腔。",
    "choices": [
      {
        "label": "找耆老錄示範音檔讓他每天跟讀並對話練",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "cohesion": 4,
          "honor": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "給他線上台語字典叫他自己查發音來練習",
        "tier": "good",
        "note": "工具實用，但缺真人語感示範腔調仍難自然。",
        "effects": {
          "honor": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "覺得他天生沒台語環境就勸他放棄別參加",
        "tier": "illegal",
        "note": "以出身否定學生機會，扼殺母語學習也傷自信。",
        "effects": {
          "trust": -6,
          "climate": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他把講稿用注音硬標讀音囫圇背下來",
        "tier": "wrong",
        "effects": {
          "hp": -3,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "直接換阿公阿嬤講台語的學生來代替他",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_005",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "國語朗讀選手抽到陌生文章常因斷句錯誤而失分，你會怎麼幫他打基礎？",
    "law": "基本功扎根原則",
    "explain": "帶他練不同文體的斷句與標點停頓規則，每天朗讀一篇新文章並錄音回放找問題。",
    "choices": [
      {
        "label": "教他斷句停頓規則每天朗讀新文章並錄音",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "honor": 4,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "把比賽可能用的篇目先印給他反覆熟讀",
        "tier": "good",
        "note": "熟悉篇目有幫助，但臨場抽到陌生文章仍會卡住。",
        "effects": {
          "honor": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下打聽今年朗讀的指定篇章先給他練",
        "tier": "illegal",
        "note": "提前取得指定篇目屬作弊，毀掉比賽公平性。",
        "effects": {
          "trust": -7,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他把課本所有課文全部背起來以防萬一",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "跟他說朗讀靠臨場感不用特別練斷句技巧",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_006",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "閩南語朗讀選手會看羅馬拼音卻唸不出韻味，你想兼顧正確與情感該怎麼做？",
    "law": "母語情感傳承原則",
    "explain": "先確認拼音聲調正確，再帶他理解文章情境，請耆老示範如何把台語的韻味唸出來。",
    "choices": [
      {
        "label": "先校正聲調再請耆老示範把韻味唸出來",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "cohesion": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "先把羅馬拼音聲調規則完整講解一輪給他",
        "tier": "good",
        "note": "聲調正確是基礎，但只重拼音仍少了情感韻味。",
        "effects": {
          "roleModel": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "嫌台語朗讀冷門就敷衍指導隨便派他上場",
        "tier": "illegal",
        "note": "輕忽母語項目又敷衍學生，違教育責任也傷士氣。",
        "effects": {
          "climate": -5,
          "trust": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他把整篇用國語先翻譯一次再去比台語",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "hp": -3
        },
        "octalysis": []
      },
      {
        "label": "要他模仿你不太標準的台語腔調照著唸就好",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_007",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "英文演說選手發音不錯但內容空泛，你會如何幫他升級講稿的深度？",
    "law": "內容深化指導原則",
    "explain": "引導他從自身經驗找真實故事與觀點，老師協助結構與用詞，但內容主軸交給學生自己決定。",
    "choices": [
      {
        "label": "引導他用自身故事撐起觀點老師只協助結構",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "trust": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "給他幾篇英文演講範本叫他模仿句型寫稿",
        "tier": "good",
        "note": "範本能補語感，但照搬句型易失去個人真實聲音。",
        "effects": {
          "roleModel": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "直接幫他寫一篇完美英文稿讓他背起來上台",
        "tier": "illegal",
        "note": "全程代筆違自撰原則，學生沒成長也失公平性。",
        "effects": {
          "trust": -6,
          "honor": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他把名人演講整段抄下來改幾個字就交",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": []
      },
      {
        "label": "跟他說發音好就夠了內容空一點沒關係的",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_008",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "Spelling Bee 拼字賽選手單字量夠卻常拼錯長字，你會怎麼安排訓練？",
    "law": "系統化記憶原則",
    "explain": "教他用字根字首拆解長單字，分難度建立字表每天聽寫並訂正，把易錯字反覆強化。",
    "choices": [
      {
        "label": "教他字根字首拆解長字分級聽寫並訂正",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "honor": 4,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "給他一本單字書叫他從頭背到尾每天背一頁",
        "tier": "good",
        "note": "量大有覆蓋，但無拆解策略長字仍容易拼錯。",
        "effects": {
          "honor": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "比賽時偷偷在台下用嘴型提示他正確拼法",
        "tier": "illegal",
        "note": "場邊提示即作弊，害選手失格也教壞誠信觀念。",
        "effects": {
          "trust": -7,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "罰他把每個拼錯的單字抄寫一百遍當處罰",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "叫他賽前一晚把整本字典硬塞進腦袋裡背",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_009",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "班際英文競賽要派代表，幾位英文好的學生都說太忙不想參加，你怎麼帶動？",
    "law": "班級榮譽凝聚原則",
    "explain": "先談清楚這是為班爭光的團隊任務，分攤其他事務減輕負擔，讓參賽成為全班一起的事。",
    "choices": [
      {
        "label": "把比賽定位成全班任務並幫選手分攤其他事",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "私下加碼平時成績鼓勵英文好的學生報名",
        "tier": "good",
        "note": "誘因能催出意願，但用加分換動機不夠純正。",
        "effects": {
          "honor": 2,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "用威脅扣分逼不想參加的學生硬著頭皮上場",
        "tier": "illegal",
        "note": "以扣分脅迫參賽，傷害自主意願也破壞班級信任。",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "乾脆自己一個人挑好人選名單貼出來定案",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "直接放棄這次比賽反正贏面也不大算了吧",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_010",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "作文選拔落選的學生哭著說努力都白費了，你會怎麼接住他的情緒？",
    "law": "成長型回饋原則",
    "explain": "先同理失落，再具體指出他這次的進步與下次可加強處，把落選轉成下一階段的起點。",
    "choices": [
      {
        "label": "先同理失落再具體指出進步與下次加強方向",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "告訴他勝敗乃兵家常事下次再努力就會更好",
        "tier": "good",
        "note": "安慰有溫度，但太籠統沒給可改進的具體著力點。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下偷偷改評分把他硬擠進名單怕他傷心",
        "tier": "illegal",
        "note": "竄改評選結果毀公平，也剝奪他面對挫折的機會。",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "跟他說可能你就是沒這方面天分別太強求了",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "叫他別哭了哭也沒用趕快回去把功課寫完",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_011",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國語演講選手一上台就發抖忘詞，平時練習明明很流暢，你會怎麼幫他穩住？",
    "law": "正向心理建設原則",
    "explain": "安排多次模擬上台脫敏，教他深呼吸與卡詞救援技巧，並肯定他平時的努力建立信心。",
    "choices": [
      {
        "label": "安排多次模擬上台教他深呼吸與卡詞救援法",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "trust": 5,
          "climate": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "賽前跟他說別緊張台下觀眾其實都不重要",
        "tier": "good",
        "note": "減壓出發點好，但空喊別緊張缺乏可操作的方法。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾笑他膽小想用激將法逼他克服緊張感",
        "tier": "illegal",
        "note": "公開羞辱加深恐懼也傷自尊，違反正向輔導原則。",
        "effects": {
          "trust": -7,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "跟他說會緊張就是準備不夠回去再多背幾遍",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆讓他帶小抄上台念反正評審看不太到吧",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_012",
    "cat": "語文競賽",
    "diff": 3,
    "scenario": "作文選手請你幫看草稿，你發現主題很好卻很想直接幫他大改，該怎麼拿捏？",
    "law": "指導不代筆原則",
    "explain": "用提問點出問題讓他自己想怎麼改，只在用字結構給建議，保留作品的核心仍是學生的。",
    "choices": [
      {
        "label": "用提問點出問題讓他自己決定怎麼修改內容",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "trust": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "把你覺得更好的句子寫旁邊讓他參考選用",
        "tier": "good",
        "note": "示範句有啟發，但太多代寫句易讓他直接照抄。",
        "effects": {
          "roleModel": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "直接把草稿重寫一遍叫他照你的版本去謄寫",
        "tier": "illegal",
        "note": "代筆讓作品變成老師的，違自撰精神也害他失格。",
        "effects": {
          "trust": -6,
          "honor": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只跟他說寫得不錯但說不出哪裡可以再加強",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "嫌他寫得太差把草稿揉掉叫他整篇重新寫過",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_013",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "閩南語演講選手家長覺得學台語沒用反對參賽，你會如何溝通母語的價值？",
    "law": "母語文化傳承原則",
    "explain": "向家長說明母語是文化根與認同，也是孩子難得的舞台與能力，邀家長一起支持孩子成長。",
    "choices": [
      {
        "label": "向家長說明母語是文化根並邀一起支持孩子",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟家長強調得名能加分對升學申請有幫助",
        "tier": "good",
        "note": "講實利易打動人，但把母語窄化成加分工具可惜。",
        "effects": {
          "honor": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "不管家長意願就擅自幫孩子報名沒先告知",
        "tier": "illegal",
        "note": "未經家長同意逕自報名，破壞親師信任也越權。",
        "effects": {
          "trust": -6,
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "跟家長說既然你反對那就算了換別人去比",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "私下跟孩子說別理你爸媽偷偷來練就好啦",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_014",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國字注音選手去年落選今年想再拚，但他怕再輸而猶豫，你會怎麼鼓勵他？",
    "law": "再挑戰勇氣培養原則",
    "explain": "肯定他願意再嘗試的勇氣，回顧去年累積的基礎，把焦點放在成長而非結果，陪他一起準備。",
    "choices": [
      {
        "label": "肯定他再挑戰的勇氣把焦點放成長而非輸贏",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟他保證今年一定會贏叫他放心大膽去拚",
        "tier": "good",
        "note": "打氣很暖，但承諾必勝反而給他更大心理壓力。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "提醒他輸過一次別再丟臉勸他這次不要參加",
        "tier": "illegal",
        "note": "用羞辱式言語打擊再嘗試的勇氣，違輔導倫理。",
        "effects": {
          "trust": -7,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "跟他說既然怕輸那乾脆別比保持紀錄就好了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "叫他別想那麼多反正比了輸了也沒什麼差別",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_015",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "英文演說選手最近段考退步，家長擔心練比賽影響課業要他退出，怎麼平衡？",
    "law": "課業與才能並重原則",
    "explain": "與家長和學生一起排出練習與課業的時間表，調整訓練量並追蹤成績，讓兩者都能兼顧。",
    "choices": [
      {
        "label": "和家長學生共排時間表調整訓練量並追蹤成績",
        "tier": "best",
        "effects": {
          "trust": 6,
          "cohesion": 4,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "叫學生先把比賽放一邊等課業穩了再說",
        "tier": "good",
        "note": "以課業優先穩妥，但一刀切放棄也錯失難得舞台。",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "叫他課業先擺著比賽最重要先全力拚得名再說",
        "tier": "illegal",
        "note": "犧牲學生本分換成績，違教育本末也害他失衡。",
        "effects": {
          "trust": -5,
          "climate": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "跟家長說成績退步跟比賽無關是他不認真",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "直接讓他退出比賽免得麻煩家長來找你理論",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_016",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "你想營造班級的語文風氣，讓更多人願意接觸演講朗讀，可以怎麼起步？",
    "law": "班級文化營造原則",
    "explain": "設計低門檻的日常語文活動，如每日一句、晨讀分享或小型班內賽，讓全班自然接觸與參與。",
    "choices": [
      {
        "label": "設計每日一句與班內小型賽讓全班自然參與",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 5,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "把得獎選手的影片放給全班看激勵大家效法",
        "tier": "good",
        "note": "榜樣有感染力，但只看高手易讓一般生覺得遙遠。",
        "effects": {
          "climate": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "規定全班都要報名比賽不參加的一律記警告",
        "tier": "illegal",
        "note": "以處罰強迫參與，扼殺興趣也違反自願原則。",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只把資源全押在最強那一兩個選手身上就好",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得語文風氣靠天生班風隨緣不用刻意去弄",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_017",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "你班選手在國語朗讀拿了全縣第一，你想讓這份榮譽變成全班的養分，怎麼做？",
    "law": "榮譽歸班共享原則",
    "explain": "公開肯定選手努力也感謝協助的同學，把得獎經驗分享給全班，讓榮譽成為集體的驕傲。",
    "choices": [
      {
        "label": "公開肯定選手並請他分享經驗讓榮譽歸全班",
        "tier": "best",
        "effects": {
          "honor": 6,
          "cohesion": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "把獎狀貼在公布欄上讓全校都看到很風光",
        "tier": "good",
        "note": "展示成果能鼓舞士氣，但只貼獎狀少了經驗傳承。",
        "effects": {
          "honor": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把功勞全攬在自己身上對外說是你指導有方",
        "tier": "illegal",
        "note": "獨吞學生功勞，傷害選手也破壞師生信任關係。",
        "effects": {
          "trust": -6,
          "honor": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只私下跟選手說做得好其他同學都不用知道",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得得獎是他自己的事不必特別在班上提起",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_018",
    "cat": "語文競賽",
    "diff": 3,
    "scenario": "家長想替自己孩子爭取作文代表名額，暗示願意幫班上做事換機會，你怎麼回？",
    "law": "選拔公正不受私情原則",
    "explain": "婉謝家長好意，說明名額一律照公開選拔結果決定，邀孩子憑實力參加選拔以維護公平。",
    "choices": [
      {
        "label": "婉謝好意說明名額一律照公開選拔結果決定",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟家長說我會多關注孩子但仍要走選拔程序",
        "tier": "good",
        "note": "保留善意又守原則，但模糊承諾易被誤解為偏袒。",
        "effects": {
          "trust": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "收下家長好處私下答應保留一個名額給他孩子",
        "tier": "illegal",
        "note": "以私利換名額即收賄與舞弊，嚴重違反師德。",
        "effects": {
          "trust": -8,
          "honor": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "怕得罪家長就含糊答應之後再看情況推託掉",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": []
      },
      {
        "label": "當場指責家長走後門把他罵一頓趕出辦公室",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_019",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "閩南語朗讀選手覺得講台語很俗被同學笑，開始不想練了，你會怎麼回應？",
    "law": "母語認同建立原則",
    "explain": "帶全班認識台語的文化價值，制止訕笑，並肯定選手能說母語是難得的能力，重建他的認同。",
    "choices": [
      {
        "label": "帶全班認識台語價值制止訕笑並肯定他能力",
        "tier": "best",
        "effects": {
          "honor": 5,
          "climate": 4,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "私下安慰選手說別在意那些笑你的同學就好",
        "tier": "good",
        "note": "個別安撫有溫度，但沒處理班級氛圍問題會再犯。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "跟著同學一起開玩笑說台語確實有點俗啦",
        "tier": "illegal",
        "note": "老師帶頭貶抑母語，傷學生認同也失教育立場。",
        "effects": {
          "trust": -6,
          "climate": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫選手別理同學自己關起門來偷偷練就好了",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得他被笑得不開心那就讓他退出比賽算了",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_020",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "Spelling Bee 選手練到很疲乏想放棄，距比賽剩十天，你怎麼幫他撐過？",
    "law": "訓練動機維持原則",
    "explain": "調整訓練節奏加入遊戲化練習，肯定他已累積的進步，陪他設定可達成的小目標重燃動力。",
    "choices": [
      {
        "label": "調整節奏加入遊戲化練習並陪他設小目標達成",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "climate": 4,
          "trust": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟他說再撐十天就解脫了忍一下很快就過去",
        "tier": "good",
        "note": "給盼頭能短期見效，但只談熬過去忽略了動機。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "罵他抗壓性太差威脅要把他換掉換別人來比",
        "tier": "illegal",
        "note": "以恫嚇換努力，傷自尊也讓訓練變成負面經驗。",
        "effects": {
          "trust": -6,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他累就回家休息要練不練隨他自己決定吧",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "加倍練習量想說操得更兇他自然就會習慣了",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_021",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國語演講選手稿子寫得很成熟，你懷疑可能是家長代筆，該怎麼處理較妥？",
    "law": "作品自撰查核原則",
    "explain": "私下和學生聊稿子的構思過程，引導他用自己的話重述觀點，確認是否真為本人創作再決定。",
    "choices": [
      {
        "label": "私下請他重述稿子構思確認是否為本人創作",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 4,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "先當沒事但賽前要求他現場改寫一段試試看",
        "tier": "good",
        "note": "以實作驗證可行，但臨場測試讓學生壓力較大。",
        "effects": {
          "honor": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "明知可能代筆仍裝沒看見讓他直接代表上場",
        "tier": "illegal",
        "note": "放任代筆參賽即縱容舞弊，破壞競賽公平誠信。",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接當眾質問他是不是叫爸媽幫你寫的對吧",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "乾脆通報取消他資格也不問清楚到底是不是",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_022",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "班上沒人想報名閩南語演講，你想推廣母語又不勉強學生，可以怎麼開頭？",
    "law": "母語推廣自願原則",
    "explain": "用有趣的台語故事或俚語引發興趣，分享母語的魅力，讓學生在沒壓力下產生想嘗試的動機。",
    "choices": [
      {
        "label": "用有趣台語故事俚語引發興趣讓人想主動試",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟學生說參加母語比賽得名很容易因為人少",
        "tier": "good",
        "note": "講競爭小算誘因，但用好混當賣點不夠尊重項目。",
        "effects": {
          "honor": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "指定台語講最好的學生強迫他一定要去報名",
        "tier": "illegal",
        "note": "強制單一學生參賽，剝奪選擇也傷推廣本意。",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得沒人想報就算了反正母語項目本來就冷",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "直接跟全班說不報名的人這學期都別想加分",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_023",
    "cat": "語文競賽",
    "diff": 3,
    "scenario": "兩位作文選手實力相當，名額只有一個，落選者一定難過，你會怎麼處理選拔？",
    "law": "公正透明擇優原則",
    "explain": "用公開同題限時實作擇優，賽後向落選者具體說明差距與優點，並安排他擔任候補或下次機會。",
    "choices": [
      {
        "label": "公開同題擇優並向落選者說明差距與後續機會",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "讓兩人輪流參加不同比賽各給一個舞台機會",
        "tier": "good",
        "note": "兼顧雙方很體貼，但項目不同恐失公平比較基準。",
        "effects": {
          "cohesion": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "看哪個家長比較難搞就把名額讓給那位學生",
        "tier": "illegal",
        "note": "以家長壓力而非實力決定，徹底違背公平擇優。",
        "effects": {
          "trust": -7,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "乾脆兩個都不選省得選一個另一個會不開心",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "私下叫實力稍弱那位自己識相主動退出選拔",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_024",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國字注音選手連兩年落選今年又想報名，同學私下說他根本沒希望，你怎麼帶？",
    "law": "尊重再參賽意願原則",
    "explain": "肯定他持續努力的精神，制止同學的酸言，幫他檢視前兩次失分點訂出具體改進方向再出發。",
    "choices": [
      {
        "label": "肯定他的堅持制止酸言並幫他訂出改進方向",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 4,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟他說重點是參與享受過程得不得名沒關係",
        "tier": "good",
        "note": "強調過程很正向，但迴避實力問題沒幫他真進步。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "附和同學說法暗示他別再浪費名額讓給別人",
        "tier": "illegal",
        "note": "否定學生再嘗試權利又帶頭貶抑，違輔導倫理。",
        "effects": {
          "trust": -7,
          "climate": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他證明給大家看不然就是被同學說中了吧",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得他兩年都輸今年也一樣勸他改報別項目",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_025",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "英文演說選手練到很晚影響睡眠，隔天上課打瞌睡，你會怎麼調整訓練安排？",
    "law": "身心健康優先原則",
    "explain": "重新規劃訓練時段避免熬夜，把練習切成小段融入白天，提醒充足睡眠才有好的學習與表現。",
    "choices": [
      {
        "label": "重排訓練時段避免熬夜切成白天小段並顧睡眠",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "trust": 4,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟他說年輕熬一下沒關係比賽完就能補回來",
        "tier": "good",
        "note": "體諒衝刺期，但鼓勵熬夜忽視健康會傷學習根本。",
        "effects": {
          "climate": 2,
          "trust": 1
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "要他犧牲睡眠拚到底說選手就是要這種覺悟",
        "tier": "illegal",
        "note": "逼學生長期熬夜練習，危害健康也違教育責任。",
        "effects": {
          "trust": -6,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他上課想睡就趴著睡反正比賽比較重要嘛",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得他打瞌睡是自己不認真跟訓練量無關啦",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_026",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "國語朗讀選手得名後，班上開始有人也想試試朗讀，你怎麼把握這股風氣？",
    "law": "以榜樣帶動參與原則",
    "explain": "請得名選手帶讀分享技巧，開放班內朗讀角落讓有興趣的同學練習，把個人榮譽變成全班動能。",
    "choices": [
      {
        "label": "請得名選手帶讀並開放朗讀角落讓全班來練",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "把選手的得獎錄音播給全班聽當作示範教材",
        "tier": "good",
        "note": "示範音檔有參考性，但只聽不練難真正帶動參與。",
        "effects": {
          "climate": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "規定每個人都要朗讀錄音不交的扣平時分數",
        "tier": "illegal",
        "note": "用扣分強制錄音，把興趣變壓力扼殺自發風氣。",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只讓得名選手繼續練其他想試的同學先別插手",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得一時興起的熱度撐不久不必特別去經營它",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_027",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "作文選手寫到一半卡關沒靈感很焦慮，比賽就在三天後，你會怎麼陪他突破？",
    "law": "引導思考不代寫原則",
    "explain": "用提問幫他從生活經驗找素材打開思路，陪他列出可寫的點，但下筆內容仍由他自己完成。",
    "choices": [
      {
        "label": "用提問帶他從生活找素材列點下筆仍由他完成",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "trust": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "給他幾個現成的開頭範例讓他挑一個接著寫",
        "tier": "good",
        "note": "範例能破冰，但給太多現成句易讓他依賴不自寫。",
        "effects": {
          "roleModel": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "乾脆把你想到的精彩段落口述讓他抄進稿子",
        "tier": "illegal",
        "note": "口述代寫等同代筆，違自撰原則也害他失成長。",
        "effects": {
          "trust": -6,
          "honor": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他卡住就先放著別寫等有靈感再說也不急",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "hp": -3
        },
        "octalysis": []
      },
      {
        "label": "催他別卡了趕快隨便寫一寫交出來時間來不及",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_028",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "閩南語演講選手台語很溜卻不懂稿子內容的深意，你會怎麼幫他講得有底蘊？",
    "law": "理解先於表達原則",
    "explain": "先帶他逐段理解文意與情感，再連結他自身經驗，讓他講出來的不只是音，而是懂了的內容。",
    "choices": [
      {
        "label": "先帶他逐段理解文意再連結自身經驗來表達",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "honor": 4,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "先把每段該用的語氣標在稿子上叫他照著做",
        "tier": "good",
        "note": "標語氣有引導，但沒先理解內容仍是表面的模仿。",
        "effects": {
          "roleModel": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "覺得反正評審聽不出深淺叫他背熟發音就好",
        "tier": "illegal",
        "note": "敷衍應付低估評審也低估學生，違用心指導原則。",
        "effects": {
          "trust": -5,
          "honor": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他把不懂的句子跳過去只練會的部分就好",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "跟他說台語講得溜就贏一半內容不用太計較",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_029",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "英文班級競賽要全班分組比英語短劇，有同學英文差怕拖累組別，你怎麼安排？",
    "law": "差異化參與原則",
    "explain": "依能力分配適合的角色與台詞長度，讓每個人都有貢獻位置，強調團隊合作而非個人英文強弱。",
    "choices": [
      {
        "label": "依能力分派適合角色台詞讓每個人都有貢獻",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "讓英文好的同學多扛戲份其他人負責簡單部分",
        "tier": "good",
        "note": "發揮強項合理，但易讓弱者邊緣化失去參與感。",
        "effects": {
          "cohesion": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "乾脆把英文差的同學排除在外只用會的人上場",
        "tier": "illegal",
        "note": "排除弱勢學生剝奪學習機會，違公平參與原則。",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫英文差的同學自己想辦法跟上不然別參加",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "直接抽籤分角色不管誰拿到難的台詞自負責",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_030",
    "cat": "語文競賽",
    "diff": 3,
    "scenario": "你發現選拔當天有評審是某位選手的親戚，可能影響公正，你會怎麼處理？",
    "law": "利益迴避原則",
    "explain": "主動向主辦反映請該評審迴避或更換，確保評選過程公正，避免事後爭議影響所有選手權益。",
    "choices": [
      {
        "label": "主動向主辦反映請該評審迴避以確保評選公正",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "先把這位評審的評分單獨記下事後再交叉核對",
        "tier": "good",
        "note": "留紀錄可補救，但事後核對不如當下迴避來得乾淨。",
        "effects": {
          "trust": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "裝作沒看到反正那位選手本來實力也不錯啦",
        "tier": "illegal",
        "note": "明知利益衝突卻坐視，等同默許不公損害公信。",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "私下提醒那位親戚評審記得要打高一點分數喔",
        "tier": "wrong",
        "effects": {
          "trust": -7,
          "honor": -5
        },
        "octalysis": []
      },
      {
        "label": "等比賽結束有人抗議了再來想辦法處理也不遲",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_031",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國語演講選手在班上練習時被同學笑姿勢誇張，他很受傷，你會怎麼處理？",
    "law": "安全練習環境原則",
    "explain": "先和全班建立尊重彼此嘗試的約定，制止訕笑，再私下肯定選手的勇氣並協助修飾肢體語言。",
    "choices": [
      {
        "label": "建立尊重嘗試的班規制止訕笑再私下協助修飾",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "cohesion": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "私下安慰選手叫他別管那些愛笑的同學就好",
        "tier": "good",
        "note": "個別安撫有溫度，但沒處理班級氛圍下次還會發生。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "跟著笑說你這姿勢確實有點好笑難怪被笑啦",
        "tier": "illegal",
        "note": "老師帶頭嘲笑學生，摧毀安全感也失教育立場。",
        "effects": {
          "trust": -7,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫選手不要那麼玻璃心被笑一下而已沒什麼",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆叫他以後回家自己練別在班上練免得被笑",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_032",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "Spelling Bee 選手段考英文退步，他擔心顧此失彼，你會怎麼幫他兼顧？",
    "law": "才能與課業整合原則",
    "explain": "把拼字訓練和課內單字結合，讓比賽準備同時鞏固課業，幫他規劃時間使兩件事互相加分。",
    "choices": [
      {
        "label": "把拼字訓練和課內單字結合讓兩件事互相加分",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "trust": 4,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "叫他先暫停比賽練習專心顧好段考成績再說",
        "tier": "good",
        "note": "保課業穩當，但暫停也可惜其實兩者能整合並進。",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "叫他段考隨便考考先把比賽名次拚出來再說",
        "tier": "illegal",
        "note": "輕忽課業本分換名次，違教育本末害學生失衡。",
        "effects": {
          "trust": -5,
          "climate": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "跟他說退步是你自己的問題跟比賽毫無關係",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "直接幫他決定退出比賽免得成績繼續往下掉",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_033",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "你想讓班上閩南語演講的得名經驗傳承下去，明年還有人願意接棒，怎麼做？",
    "law": "經驗傳承制度化原則",
    "explain": "請今年選手把訓練筆記與心得整理留給學弟妹，建立班級母語小檔案，讓榮譽與方法都能延續。",
    "choices": [
      {
        "label": "請選手整理筆記心得建立班級母語檔案供接棒",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "把今年選手的講稿留存下來給明年的人參考",
        "tier": "good",
        "note": "留稿有幫助，但只給成品少了訓練方法的傳承。",
        "effects": {
          "honor": 2,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "覺得會的人留一手才不會被超越所以不傳承",
        "tier": "illegal",
        "note": "刻意藏私阻斷傳承，違教育共好也傷班級信任。",
        "effects": {
          "cohesion": -5,
          "trust": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得明年的事明年再煩惱現在不用先想那麼遠",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆每年都靠你一個人從零開始重新教就好",
        "tier": "wrong",
        "effects": {
          "hp": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_034",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "作文選手得名後驕傲起來，對同學的提問愛理不理，你會怎麼引導他？",
    "law": "榮譽與謙遜並重原則",
    "explain": "私下肯定他的成績也提醒榮譽是責任，引導他把所學回饋同學，讓得名成為帶動而非疏離的力量。",
    "choices": [
      {
        "label": "私下肯定成績並引導他把所學回饋同學帶動人",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "cohesion": 4,
          "honor": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟他說得名很棒但做人要謙虛一點別太驕傲",
        "tier": "good",
        "note": "點出謙遜對，但只講道理沒給回饋同學的具體出口。",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "覺得得名的人本來就比較行同學羨慕也應該",
        "tier": "illegal",
        "note": "縱容並助長傲慢，破壞班級平等與互助氛圍。",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾罵他得個獎就翹尾巴叫他別太得意忘形",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得他的態度是個性問題管不動就隨他去算了",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_035",
    "cat": "語文競賽",
    "diff": 3,
    "scenario": "家長指控你選拔不公偏袒別的孩子，情緒激動要你給說法，你會怎麼回應？",
    "law": "程序公開可受檢驗原則",
    "explain": "冷靜出示公開的選拔標準與評分紀錄，逐項說明選拔過程，邀家長一同檢視以化解誤會建立信任。",
    "choices": [
      {
        "label": "冷靜出示公開標準與評分紀錄逐項說明選拔",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "先安撫家長情緒答應改天再帶資料跟他細談",
        "tier": "good",
        "note": "先降溫合理，但拖延易讓誤會發酵不如當下說清。",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "被指控就慌了乾脆答應給他孩子名額來平息",
        "tier": "illegal",
        "note": "為息事讓步竄改名額，反證不公也徹底失公正。",
        "effects": {
          "trust": -7,
          "honor": -6,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "回嗆家長說你不懂選拔少在那邊指手畫腳的",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "乾脆不理會家長質疑反正清者自清隨他去鬧",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_036",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國字注音選手很努力卻進步緩慢，開始懷疑自己沒天分，你會怎麼回應他？",
    "law": "成長心態培養原則",
    "explain": "用具體紀錄讓他看見細微進步，把注意力放在方法而非天分，肯定努力並一起調整練習策略。",
    "choices": [
      {
        "label": "用紀錄讓他看見進步聚焦方法並一起調整策略",
        "tier": "best",
        "effects": {
          "roleModel": 5,
          "trust": 5,
          "climate": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "跟他說只要努力就一定會有回報叫他別放棄",
        "tier": "good",
        "note": "鼓勵有溫度，但空談努力沒檢視方法難真突破。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "附和他說可能你真的就是這方面比較沒天分",
        "tier": "illegal",
        "note": "用天分論否定學生，打擊信心也違成長心態。",
        "effects": {
          "trust": -7,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他別想那麼多反正再練不好就換個項目試",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得他進步慢是練不夠叫他練習量直接加倍",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_037",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "你想在班上推廣台語，讓同學覺得母語親切有趣，可以設計什麼日常活動？",
    "law": "生活化母語推廣原則",
    "explain": "設計每週台語日、俗諺猜謎或點名用台語等輕鬆活動，讓母語融入日常，自然培養親切感與興趣。",
    "choices": [
      {
        "label": "辦每週台語日與俗諺猜謎讓母語融入日常生活",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "規定每天朝會時間全班一起背一句台語俗諺",
        "tier": "good",
        "note": "固定練習能累積，但用規定背誦易變成枯燥的負擔。",
        "effects": {
          "climate": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "禁止學生在教室講國語強迫全程只能說台語",
        "tier": "illegal",
        "note": "以禁令強逼換母語，違自然推廣也壓抑表達。",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得推廣台語是專家的事老師隨便提一下就好",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "只在比賽前臨時抱佛腳教台語平時完全不碰它",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_038",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國語朗讀選手抽題練習時情緒太滿哭腔失控，你會怎麼幫他拿捏情感分寸？",
    "law": "情感節制表達原則",
    "explain": "帶他分辨投入與失控的界線，練習用氣息和停頓控制情緒，讓感情服務文意而非淹沒朗讀本身。",
    "choices": [
      {
        "label": "帶他分辨投入與失控練習用氣息停頓控制情緒",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "trust": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "叫他練習時情緒收一點別投入太深以免失控",
        "tier": "good",
        "note": "提醒收斂有理，但只叫他壓抑沒教方法易變平淡。",
        "effects": {
          "roleModel": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "覺得哭腔反而很催淚乾脆鼓勵他比賽時放大哭",
        "tier": "illegal",
        "note": "教學生賣弄情緒博同情，違朗讀技藝的正道。",
        "effects": {
          "honor": -4,
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他別哭了重來能不能正常唸完一遍試試看",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得他太情緒化不適合朗讀勸他改比國字注音",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_039",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "英文演說選手賽前一晚緊張到睡不著傳訊息給你，你會怎麼安他的心？",
    "law": "賽前心理支持原則",
    "explain": "同理他的緊張是正常的，提醒他已充分準備，給他簡單放鬆與隔天流程的提示，傳達你的信任。",
    "choices": [
      {
        "label": "同理緊張提醒他準備充分並給放鬆與流程提示",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "回他說別緊張你一定沒問題的趕快去睡覺吧",
        "tier": "good",
        "note": "安撫出於善意，但空喊沒問題缺實際的安頓方法。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "半夜把他叫起來逼他把講稿從頭背一次給你聽",
        "tier": "illegal",
        "note": "賽前加壓剝奪休息，加重焦慮也傷隔天表現。",
        "effects": {
          "trust": -6,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "已讀不回想說睡前少看手機自己冷靜一下就好",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "回他緊張就是準備不夠現在才慌也來不及了啦",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_040",
    "cat": "語文競賽",
    "diff": 3,
    "scenario": "閩南語演講選手稿子你很想潤飾得更道地，又怕改太多變成你的作品，怎麼拿捏？",
    "law": "指導保留學生主體原則",
    "explain": "只在用詞道地度上給建議由他選用，內容觀點維持他自己的，確保上台的仍是他真實的聲音與想法。",
    "choices": [
      {
        "label": "只在用詞道地度給建議內容觀點仍由他自己定",
        "tier": "best",
        "effects": {
          "roleModel": 6,
          "trust": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "把整段改寫成道地版本附旁邊讓他對照學習",
        "tier": "good",
        "note": "對照能學道地，但整段改寫易讓他直接照抄失主體。",
        "effects": {
          "roleModel": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "乾脆整篇用你的台語重寫叫他背起來上台",
        "tier": "illegal",
        "note": "代筆讓作品變你的，違自撰精神也害學生失格。",
        "effects": {
          "trust": -6,
          "honor": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得改了怕爭議乾脆完全不動讓他帶生硬稿",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "嫌他台語不夠道地把稿子退回叫他自己重寫",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_041",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "班上得了語文競賽團體獎，少數沒參與的同學覺得跟自己無關，你會怎麼凝聚？",
    "law": "集體榮譽共享原則",
    "explain": "強調獎是全班共同氛圍支撐出來的，肯定後勤與加油的同學，讓每個人都感到自己是這榮譽的一份子。",
    "choices": [
      {
        "label": "強調榮譽靠全班支撐並肯定後勤讓人人有份",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "只在班會上特別表揚上場比賽的那幾位選手",
        "tier": "good",
        "note": "表揚選手應該，但只聚焦上場者會讓其他人更疏離。",
        "effects": {
          "honor": 2,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "跟沒參與的同學說這獎本來就不關你們的事",
        "tier": "illegal",
        "note": "否定全班連結製造分裂，違集體榮譽凝聚原則。",
        "effects": {
          "cohesion": -5,
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把獎金獎品全發給選手其他人連看都不用看",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得沒參與的人本來就不該分享這份榮譽正常",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_042",
    "cat": "語文競賽",
    "diff": 1,
    "scenario": "作文選拔報名人數太少，許多有潛力的學生不敢嘗試，你會怎麼鼓勵他們參與？",
    "law": "低門檻鼓勵參與原則",
    "explain": "先肯定每個人都能寫，把選拔包裝成練習機會降低得失心，主動邀請有潛力的學生試試看不勉強。",
    "choices": [
      {
        "label": "把選拔當練習機會降低得失心並邀潛力學生",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "公告寫得好有獎勵用獎品誘因吸引大家報名",
        "tier": "good",
        "note": "誘因能拉人，但靠獎品引來的動機不夠長久純正。",
        "effects": {
          "honor": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "乾脆規定每個人都一定要交一篇不交的扣分",
        "tier": "illegal",
        "note": "以扣分強制投稿，把寫作變壓力扼殺嘗試意願。",
        "effects": {
          "climate": -5,
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得沒人想報就少數幾個來報的人裡面挑就好",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "只去找平常作文最強的那一兩個學生報名就好",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_043",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "國語演講選手落選後一蹶不振連課業都受影響，你會怎麼幫他走出低潮？",
    "law": "挫折復原陪伴原則",
    "explain": "先給他時間消化情緒並陪伴，肯定他的付出，引導他把這次經驗化為養分，慢慢把生活重心找回來。",
    "choices": [
      {
        "label": "給他時間消化陪伴肯定付出引導把經驗化養分",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "叫他趕快振作別讓一次落選影響到你的功課",
        "tier": "good",
        "note": "催他振作出於關心，但忽略情緒急著要他好起來。",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "跟他說早就說你實力不夠輸了還這麼玻璃心",
        "tier": "illegal",
        "note": "用羞辱踩落選學生，加深創傷也違輔導倫理。",
        "effects": {
          "trust": -7,
          "climate": -5,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得這是他自己要調適的事老師也幫不上忙",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "叫他別再想比賽把心思全放回讀書上就對了",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_044",
    "cat": "語文競賽",
    "diff": 3,
    "scenario": "家長施壓要你把代表名額給他孩子，否則威脅去校長室投訴，你會怎麼堅守？",
    "law": "專業判斷不受脅迫原則",
    "explain": "堅定說明名額依公開選拔結果決定，不因壓力更動，主動表示願與家長和校方一同檢視程序的公正。",
    "choices": [
      {
        "label": "堅定說明名額依選拔結果並願與校方檢視程序",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "先答應把家長意見記下來再循正式管道處理",
        "tier": "good",
        "note": "留管道穩妥，但模糊回應易被家長解讀成有轉圜。",
        "effects": {
          "trust": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "怕被投訴就妥協把名額硬塞給那位家長孩子",
        "tier": "illegal",
        "note": "屈服脅迫竄改名額，犧牲公平也失專業立場。",
        "effects": {
          "trust": -7,
          "honor": -6,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "回嗆家長說你要投訴就去投訴我才不怕你勒",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "為了息事乾脆臨時多開一個名額讓大家有份",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "ln_045",
    "cat": "語文競賽",
    "diff": 2,
    "scenario": "你想把整年的語文競賽經驗整理成班級傳統，讓語文榮譽成為班級文化，怎麼做？",
    "law": "班級文化長期經營原則",
    "explain": "把每年選手故事與得獎紀錄做成班級榮譽牆與傳承儀式，讓語文競賽成為全班共同認同的精神象徵。",
    "choices": [
      {
        "label": "做班級榮譽牆與傳承儀式讓語文成為共同認同",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "每年比賽完口頭講一下今年成績就算交代過去",
        "tier": "good",
        "note": "口頭回顧聊勝於無，但沒留載體文化難真正沉澱。",
        "effects": {
          "honor": 2,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "覺得搞這些虛的沒用把時間全拿去逼學生練",
        "tier": "illegal",
        "note": "否定文化經營只重操練，違長期育人也傷氛圍。",
        "effects": {
          "climate": -4,
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得這是學校的事不是我一個導師該操心範圍",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "每年都重來一次不留紀錄辦過就忘了也沒差",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_001",
    "cat": "管教",
    "diff": 1,
    "scenario": "上課鐘響五分鐘，全班仍吵鬧不休，你站在講台前，該怎麼讓秩序回來？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "安靜等候讓學生自我察覺，比怒吼更能建立內在秩序，也避免連坐與羞辱。",
    "choices": [
      {
        "label": "站定講台安靜等候，讓全班自己察覺後再開講",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 4,
          "roleModel": 5,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "提高音量請大家安靜，順手點出帶頭吵的同學",
        "tier": "good",
        "note": "有效但容易讓被點名者下不了台",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "罰全班起立半蹲到安靜為止，採取連坐處罰",
        "tier": "illegal",
        "note": "連坐與體罰違反注意事項，且傷害無辜學生",
        "effects": {
          "climate": -6,
          "trust": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接大聲怒吼壓過全班，拍桌要他們閉嘴",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "乾脆不管秩序自顧自上課，只講給想聽的人",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_002",
    "cat": "管教",
    "diff": 2,
    "scenario": "小組討論時有兩組越講越大聲，演變成互相較勁飆音量，你會怎麼處理？",
    "law": "（正向管教原則）",
    "explain": "走近降低音量並重申討論規則，用結構引導取代壓制，能維持討論又守住界線。",
    "choices": [
      {
        "label": "走近兩組壓低聲音重申音量規則，給清楚示範",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "暫停討論請各組派一人複述剛才的規則約定",
        "tier": "good",
        "note": "能拉回秩序但略打斷討論節奏",
        "effects": {
          "climate": 3,
          "cohesion": 3
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "罰兩組整節不准再發言，剝奪參與當作懲罰",
        "tier": "illegal",
        "note": "全面剝奪學習參與不符比例原則",
        "effects": {
          "climate": -5,
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當場嘲笑他們吵得像菜市場，引全班一起笑",
        "tier": "wrong",
        "effects": {
          "climate": -6,
          "trust": -5,
          "hp": -2
        },
        "octalysis": []
      },
      {
        "label": "假裝沒聽見繼續走流程，把問題拖到下課",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_003",
    "cat": "管教",
    "diff": 1,
    "scenario": "上課時你發現一名學生低頭在抽屜偷滑手機，眼神不時飄向螢幕，怎麼辦？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "依規定先暫時保管手機並私下了解原因，給歸還時機，避免公開沒收造成對立。",
    "choices": [
      {
        "label": "走近請他先收進書包，下課再私下談使用狀況",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "依班規暫時保管到放學，並記下歸還的時間",
        "tier": "good",
        "note": "符合程序但要避免讓他覺得被針對",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "當眾沒收並把他滑的內容唸出來給全班聽",
        "tier": "illegal",
        "note": "公開揭露隱私屬羞辱，違反注意事項",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接搶過手機摔在講桌上，警告全班別學他",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "罰他下課把手機交出來抄三十遍校規條文",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3,
          "hp": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_004",
    "cat": "管教",
    "diff": 2,
    "scenario": "班上多名學生午休躲廁所打手遊，屢禁不止，你想根本改善，會怎麼做？",
    "law": "（正向管教原則）",
    "explain": "與全班共訂手機使用公約並安排替代活動，從制度與需求面處理比單純圍堵有效。",
    "choices": [
      {
        "label": "帶全班共訂手機公約，並安排午休替代活動",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          3
        ]
      },
      {
        "label": "加強廁所巡查，抓到一次就登記聯絡家長",
        "tier": "good",
        "note": "短期有嚇阻但治標不治本",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "罰全班午休都不准離開座位，連坐取消自由",
        "tier": "illegal",
        "note": "連坐剝奪所有人午休權益不符比例",
        "effects": {
          "climate": -6,
          "cohesion": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "在班群公布偷玩者姓名，要大家互相監督",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "睜一隻眼閉一隻眼，反正抓不完就算了",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "roleModel": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_005",
    "cat": "管教",
    "diff": 1,
    "scenario": "冬天早上一名學生外套顏色不符規定，被學務處登記，他覺得很委屈，怎麼辦？",
    "law": "（正向管教原則）",
    "explain": "先了解家庭實際狀況再協助合規，兼顧規範與處境，比直接記過更能贏得信任。",
    "choices": [
      {
        "label": "先問清楚原因，協助他想出合規又保暖的辦法",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "依規定先登記，再幫他向學務處說明難處",
        "tier": "good",
        "note": "守住程序但仍要安撫他的委屈",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "當場要他脫掉外套罰站走廊讓大家看",
        "tier": "illegal",
        "note": "公開罰站羞辱且不顧寒冷，違規定",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "不聽解釋就嗆他故意找麻煩，記一支警告",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得小題大作，叫他別理學務處就好",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_006",
    "cat": "管教",
    "diff": 2,
    "scenario": "一名學生連續多天染髮、改短裙不肯改回，溝通多次仍堅持，你會怎麼處理？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "依程序給予期限並了解背後原因，結合家長與輔導資源，避免當眾剪髮等侵害手段。",
    "choices": [
      {
        "label": "約談了解動機，定合理改善期限並通知家長",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先依校規勸導記點，給她幾天時間自行改回",
        "tier": "good",
        "note": "程序正確但要避免只記點不關心",
        "effects": {
          "trust": 2,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "拿剪刀當場把她染的瀏海剪掉以示警告",
        "tier": "illegal",
        "note": "強制剪髮侵害身體自主，嚴重違規",
        "effects": {
          "trust": -8,
          "climate": -6,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "在班上拿她當反面教材，要同學別學壞",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": []
      },
      {
        "label": "放任不管，反正儀容問題又不影響成績",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_007",
    "cat": "管教",
    "diff": 1,
    "scenario": "一名學生這週第三次遲到，總是踩著鐘聲後幾分鐘進教室，你會怎麼回應？",
    "law": "（正向管教原則）",
    "explain": "私下了解遲到原因再對症處理，比公開責罵更能找出真正的卡點並建立習慣。",
    "choices": [
      {
        "label": "下課私下問他遲到原因，一起想準時的方法",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先登記遲到，並請他隔天提早十分鐘到校",
        "tier": "good",
        "note": "有紀錄與要求但要關心背後原因",
        "effects": {
          "trust": 2,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他在教室後面半蹲補滿遲到的分鐘數",
        "tier": "illegal",
        "note": "以體罰補時數違反不體罰原則",
        "effects": {
          "climate": -5,
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當全班面唸他名字，酸他是不是睡到中午",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "懶得理會，遲到是他自己的事不用管",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_008",
    "cat": "管教",
    "diff": 2,
    "scenario": "一名學生常以身體不舒服為由要求提早離校，導師發現頻率異常，該怎麼處理？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "結合家長與輔導確認真實狀況再決定，既保障健康也避免被當逃避手段濫用。",
    "choices": [
      {
        "label": "先確認身體狀況，再聯絡家長與輔導一起釐清",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "依請假程序處理，並請家長到校接送確認",
        "tier": "good",
        "note": "守住程序但要留意是否另有隱情",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "一律不准早退，逼他撐到放學再說",
        "tier": "illegal",
        "note": "漠視可能的健康風險，處置失當",
        "effects": {
          "trust": -5,
          "climate": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "公開質疑他裝病，要全班評評理",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "每次都照准，從不追問也不通知家長",
        "tier": "wrong",
        "effects": {
          "roleModel": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_009",
    "cat": "管教",
    "diff": 2,
    "scenario": "升旗時你發現一名學生整路隊都不見人影，事後得知他躲在樓梯間，怎麼處理？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "先確認安全與蹺課原因再依規處置，了解動機才能對症，避免只罰不問。",
    "choices": [
      {
        "label": "先確認他安全與行蹤，再了解為何躲升旗",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "依規定登記曠課一節，並約他課後談清楚",
        "tier": "good",
        "note": "程序正確但別跳過了解原因",
        "effects": {
          "trust": 2,
          "honor": 3
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他連續一週升旗都到司令台前罰站示眾",
        "tier": "illegal",
        "note": "公開罰站示眾屬羞辱，違反注意事項",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "見面就劈頭痛罵，說他翅膀硬了想造反",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是躲個升旗，當作沒看到就好",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_010",
    "cat": "管教",
    "diff": 2,
    "scenario": "班會課多名學生不想參加，集體說要去保健室，明顯是想翹掉班會，怎麼辦？",
    "law": "（正向管教原則）",
    "explain": "把班會主導權交還學生並改善內容，從動機面提升參與感，比強押留人更治本。",
    "choices": [
      {
        "label": "和大家談班會內容，把議程主導權交還學生",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          3
        ]
      },
      {
        "label": "請真不舒服的先登記，其餘留下共議班務",
        "tier": "good",
        "note": "兼顧彈性但要避免被鑽漏洞",
        "effects": {
          "climate": 2,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰全班班會延長到放學，當作集體懲罰",
        "tier": "illegal",
        "note": "連坐延時懲罰不符比例原則",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "嗆他們翹班會就是廢，當著全班數落一輪",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": []
      },
      {
        "label": "乾脆取消班會放他們自習，眼不見為淨",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_011",
    "cat": "管教",
    "diff": 2,
    "scenario": "你提醒一名學生收手機，他翻白眼回嗆「你管那麼多幹嘛」，全班都在看，怎麼辦？",
    "law": "（正向管教原則）",
    "explain": "先穩住情緒不正面對撞，私下再處理態度問題，能保住雙方台階也守住界線。",
    "choices": [
      {
        "label": "先平靜把事情收住，下課再私下談他的態度",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "當下簡短指出口氣不妥，課後再深入了解",
        "tier": "good",
        "note": "守住界線但別在全班面前拉鋸",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "立刻把他叫上台向全班道歉認錯給大家看",
        "tier": "illegal",
        "note": "強迫公開道歉屬羞辱，違反注意事項",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當場回嗆比他更兇，比誰的氣勢強",
        "tier": "wrong",
        "effects": {
          "climate": -6,
          "roleModel": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "被氣到當作沒聽見，從此再也不管他",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_012",
    "cat": "管教",
    "diff": 3,
    "scenario": "一名平時乖巧的學生今天對你的指令處處反駁、語氣衝，你直覺事有蹊蹺，怎麼做？",
    "law": "（正向管教原則）",
    "explain": "先關心反常背後的情緒成因再處理態度，理解優先能化解對立並守住關係。",
    "choices": [
      {
        "label": "先放下指令關心他今天怎麼了，再談語氣",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          7
        ]
      },
      {
        "label": "先暫停課堂對話，約他午休單獨聊一聊",
        "tier": "good",
        "note": "給空間但別讓問題拖太久",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "不管原因先罰他到走廊罰站冷靜反省",
        "tier": "illegal",
        "note": "公開罰站且忽略成因，處置失當",
        "effects": {
          "trust": -5,
          "climate": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "認定他存心找碴，當眾記他一支警告",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得連乖學生都造反，乾脆冷處理整天",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_013",
    "cat": "管教",
    "diff": 1,
    "scenario": "一名學生本週第三度沒交數學作業，問他就低頭不語，你會怎麼處理這件事？",
    "law": "（正向管教原則）",
    "explain": "先了解卡關處再協助補救與訂計畫，找出學習困難比一味處罰更能解決缺交。",
    "choices": [
      {
        "label": "先問他卡在哪，協助訂出能完成的補交計畫",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "先登記缺交，給他兩天緩衝並陪他補一題",
        "tier": "good",
        "note": "有紀錄也有支持但要追蹤到底",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他下課把作業抄寫十遍當作處罰",
        "tier": "illegal",
        "note": "罰抄與缺交無關且過量，不符比例",
        "effects": {
          "climate": -5,
          "trust": -3,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "在全班面前唸他名字，說他又再混了",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "懶得追，反正缺交扣分是他自己的事",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_014",
    "cat": "管教",
    "diff": 2,
    "scenario": "你發現有幾名學生長期互相抄作業敷衍交差，品質都一樣，該怎麼處理比較好？",
    "law": "（正向管教原則）",
    "explain": "從學習意義切入並重設可達成的任務，引導真學習比單純揭穿抄襲更有長效。",
    "choices": [
      {
        "label": "和他們談作業意義，重設能力所及的任務",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "分開座位請各自重做，並抽問理解程度",
        "tier": "good",
        "note": "能止抄但要顧及不會寫的需求",
        "effects": {
          "trust": 2,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把抄襲者名單貼在公布欄警告全班",
        "tier": "illegal",
        "note": "公開張貼名單屬羞辱，違反注意事項",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "一律打零分，連帶處罰整組所有人",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "反正有交就好，抄不抄睜隻眼閉隻眼",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_015",
    "cat": "管教",
    "diff": 1,
    "scenario": "上課中你聞到零食味，發現一名學生正低頭偷吃麵包，怎麼處理較妥當？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "請他先收起並了解是否沒吃早餐，兼顧規範與需求，避免公開沒收與羞辱。",
    "choices": [
      {
        "label": "請他先收起來，私下問是不是沒吃早餐",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "依班規請他收進書包，下課再提醒一次",
        "tier": "good",
        "note": "守住規則但語氣別太衝",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他把整包零食當全班面丟進垃圾桶",
        "tier": "illegal",
        "note": "公開丟棄羞辱且浪費，處置失當",
        "effects": {
          "trust": -5,
          "climate": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "大聲問是誰在吃，要全班一起找出來",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "假裝沒聞到繼續上課，當作沒這回事",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "climate": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_016",
    "cat": "管教",
    "diff": 2,
    "scenario": "一名學生第四節課總是趴著睡，叫醒沒多久又睡著，你想找出原因，怎麼做？",
    "law": "（正向管教原則）",
    "explain": "了解作息與身心狀況再對症協助，找出嗜睡背後成因比反覆叫醒更能根本改善。",
    "choices": [
      {
        "label": "私下問他睡眠與作息，一起找清醒的辦法",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          7
        ]
      },
      {
        "label": "先請他起身洗把臉，課後了解睡不夠的原因",
        "tier": "good",
        "note": "短期提神但仍要追原因",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他整節站著上課不准坐下當作處罰",
        "tier": "illegal",
        "note": "罰站體罰且忽略成因，不符原則",
        "effects": {
          "trust": -5,
          "climate": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "拿書拍他桌子大吼，當眾酸他是夜貓子",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "hp": -2
        },
        "octalysis": []
      },
      {
        "label": "放他繼續睡，反正吵醒也是浪費時間",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_017",
    "cat": "管教",
    "diff": 2,
    "scenario": "下課時你聽見一名學生對同學連飆髒話，被罵的同學臉色很難看，你會怎麼處理？",
    "law": "（正向管教原則）",
    "explain": "先制止並引導換位思考、修補關係，讓他理解傷害比單純處罰更能改變言語習慣。",
    "choices": [
      {
        "label": "先制止，再引導他想被這樣罵的感受並道歉",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "roleModel": 5,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "把兩人分開冷靜，課後個別了解起因",
        "tier": "good",
        "note": "先降溫但別忘了後續修復",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他把那句髒話當全班面寫一百遍",
        "tier": "illegal",
        "note": "公開罰寫羞辱且過量，不符比例",
        "effects": {
          "climate": -5,
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "自己也飆更兇的話回敬，鎮住他",
        "tier": "wrong",
        "effects": {
          "climate": -6,
          "roleModel": -6,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得小孩講講而已，當作沒聽見",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_018",
    "cat": "管教",
    "diff": 2,
    "scenario": "你發現教室的掃具櫃被人踹凹，目擊者指出是某名學生一時氣憤所為，怎麼處理？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "先了解情緒成因並引導負起修復責任，賠償與反思並行，避免公開羞辱與體罰。",
    "choices": [
      {
        "label": "先了解他為何動怒，再引導他負責修復賠償",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          4
        ]
      },
      {
        "label": "依規定登記並通知家長，一起談賠償方式",
        "tier": "good",
        "note": "程序正確但要兼顧情緒疏導",
        "effects": {
          "trust": 2,
          "honor": 3
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他當全班面下跪向掃具櫃道歉認錯",
        "tier": "illegal",
        "note": "下跪道歉嚴重羞辱，違反注意事項",
        "effects": {
          "trust": -7,
          "climate": -6,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "不問原因就記他大過，警告全班別學",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是個櫃子，叫工友修一修算了",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_019",
    "cat": "管教",
    "diff": 1,
    "scenario": "你看到一名學生用立可白在課桌上塗鴉，桌面被畫得亂七八糟，會怎麼回應？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "請他清理復原並理解公物共用責任，把行為連到後果，比單純責罵更有教育意義。",
    "choices": [
      {
        "label": "請他自己清乾淨，談談公物是大家共用的",
        "tier": "best",
        "effects": {
          "honor": 5,
          "roleModel": 4,
          "trust": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          4
        ]
      },
      {
        "label": "依規定登記，請他課後負責把桌面復原",
        "tier": "good",
        "note": "有要求但別只記過不引導",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他把全班桌子都擦一遍當作連坐處罰",
        "tier": "illegal",
        "note": "擴大處罰範圍不符比例原則",
        "effects": {
          "climate": -5,
          "honor": -3,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾痛罵他沒水準，要全班引以為戒",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得擦掉就好，自己默默幫他清理",
        "tier": "wrong",
        "effects": {
          "roleModel": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_020",
    "cat": "管教",
    "diff": 2,
    "scenario": "一名學生謊稱作業被弟弟撕掉，你查證後發現根本沒寫，當面拆穿前你會怎麼做？",
    "law": "（正向管教原則）",
    "explain": "私下給台階引導他誠實面對，重點放在補救與信任，比當眾揭穿更能保住自尊與改變。",
    "choices": [
      {
        "label": "私下給他機會說實話，談誠實與補救的辦法",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先平靜指出查證結果，請他自己說明清楚",
        "tier": "good",
        "note": "守住事實但別咄咄逼人",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "當全班面拆穿他說謊，貼上騙子的標籤",
        "tier": "illegal",
        "note": "當眾貼標籤羞辱，違反注意事項",
        "effects": {
          "trust": -7,
          "climate": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "認定他無可救藥，直接記過不再多談",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "懶得追究，反正說謊是他自己的良心問題",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_021",
    "cat": "管教",
    "diff": 3,
    "scenario": "兩名學生對同一件衝突各執一詞，明顯有人說謊，你一時難以判斷真相，怎麼處理？",
    "law": "（正向管教原則）",
    "explain": "分開釐清事證、保持中立查證，重建說真話的安全感，比急著定罪更能逼近真相。",
    "choices": [
      {
        "label": "分開聽雙方說法，比對事證再一起釐清真相",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          7
        ]
      },
      {
        "label": "先請第三方目擊者協助補充客觀的細節",
        "tier": "good",
        "note": "有助釐清但仍要保護目擊者",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰兩人一起半蹲，逼到有人先認了再說",
        "tier": "illegal",
        "note": "以體罰逼供違反不體罰原則",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "憑印象直接認定平時調皮那個在說謊",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得查不出來，乾脆各打五十大板了事",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_022",
    "cat": "管教",
    "diff": 1,
    "scenario": "上課中後排兩名學生一直交頭接耳，你提醒一次又故態復萌，接下來會怎麼做？",
    "law": "（正向管教原則）",
    "explain": "走近並適度調整座位降低互動，用安排取代責罵，能維持秩序又不傷關係。",
    "choices": [
      {
        "label": "走到他們旁邊上課，必要時微調座位安排",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 3,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "點名請其中一人回答問題，把注意力拉回",
        "tier": "good",
        "note": "能拉回但別讓他答不出來難堪",
        "effects": {
          "climate": 2,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "罰兩人整節背對黑板站著上課當作處罰",
        "tier": "illegal",
        "note": "罰站體罰且妨礙學習，不符原則",
        "effects": {
          "climate": -5,
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾酸他們是不是有講不完的悄悄話",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "索性不管，反正吵到的是他們自己",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_023",
    "cat": "管教",
    "diff": 2,
    "scenario": "你重新編好座位後，一名學生不滿和不熟的同學同桌，鬧情緒整節不配合，怎麼辦？",
    "law": "（正向管教原則）",
    "explain": "了解抗拒原因並說明編排用意，給適應空間，比硬壓更能化解情緒、促進融合。",
    "choices": [
      {
        "label": "私下了解他的顧慮，說明編排用意給他時間",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先請他配合一週，再評估是否需要微調",
        "tier": "good",
        "note": "給彈性但要說到做到",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他因為鬧情緒，整週都坐到教室最角落",
        "tier": "illegal",
        "note": "以孤立座位當懲罰屬變相羞辱",
        "effects": {
          "trust": -5,
          "cohesion": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾嗆他大牌，全班誰跟誰坐他說了算嗎",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "受不了就把他換回原位，誰鬧就讓誰",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_024",
    "cat": "管教",
    "diff": 2,
    "scenario": "課堂上一名學生回答出糗，幾個同學帶頭起鬨大笑，氣氛變得很尷尬，你會怎麼做？",
    "law": "（正向管教原則）",
    "explain": "即時制止嘲笑並肯定發言勇氣，重建安全的發言氛圍，比放任起鬨更能保護學習動機。",
    "choices": [
      {
        "label": "立刻止住笑聲，肯定他敢回答的勇氣再續課",
        "tier": "best",
        "effects": {
          "climate": 6,
          "trust": 4,
          "roleModel": 5,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "暫停課堂提醒起鬨者，請他們換位思考",
        "tier": "good",
        "note": "能止鬨但別讓場面更僵",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰帶頭起鬨的人上台模仿剛剛的糗樣",
        "tier": "illegal",
        "note": "要學生公開出醜屬羞辱，違規定",
        "effects": {
          "climate": -6,
          "trust": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "自己也跟著笑兩聲，覺得活絡氣氛無妨",
        "tier": "wrong",
        "effects": {
          "roleModel": -6,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "假裝沒看到繼續上課，讓笑聲自己停",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_025",
    "cat": "管教",
    "diff": 2,
    "scenario": "班上對某位同學的口音集體起鬨模仿，當事人開始不敢發言，你發現後會怎麼處理？",
    "law": "（正向管教原則）",
    "explain": "私下安撫當事人並全班談尊重差異，從同理重建班級氛圍，比公開點名更能止住排擠。",
    "choices": [
      {
        "label": "先安撫當事人，再帶全班談尊重彼此的差異",
        "tier": "best",
        "effects": {
          "climate": 6,
          "cohesion": 4,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "私下提醒帶頭模仿者，請他們停止並道歉",
        "tier": "good",
        "note": "能止住但要顧及當事人感受",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰起鬨的人輪流上台被全班模仿一次",
        "tier": "illegal",
        "note": "以牙還牙公開羞辱，違反注意事項",
        "effects": {
          "climate": -6,
          "trust": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾要當事人別那麼玻璃心，習慣就好",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": []
      },
      {
        "label": "覺得同學間玩笑而已，叫他別太認真",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_026",
    "cat": "管教",
    "diff": 2,
    "scenario": "段考時你瞄到一名學生眼神頻頻飄向隔壁考卷，疑似想偷看，你當下會怎麼處理？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "先以走近與調整位置防範，再依考試規定處理，兼顧公平與當事人尊嚴，避免當眾羞辱。",
    "choices": [
      {
        "label": "先走近站他旁邊，必要時把座位拉開一些",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "低聲提醒注意自己的卷子，記下並監看",
        "tier": "good",
        "note": "先警示但要留證據再認定",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "當全班面撕掉他的考卷，痛罵作弊可恥",
        "tier": "illegal",
        "note": "公開撕卷羞辱且未查證，違規定",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "不動聲色等他偷看後，直接記大過了事",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是眼神飄，當作沒看見繼續監考",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_027",
    "cat": "管教",
    "diff": 3,
    "scenario": "考後你發現兩張考卷錯題完全雷同，疑似有人傳答案，但沒有當場目擊，怎麼處理？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "依程序蒐證並分別了解，給陳述機會再認定，重證據與正當程序勝過憑印象定罪。",
    "choices": [
      {
        "label": "先分別約談蒐證，給雙方陳述再依規定認定",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          7
        ]
      },
      {
        "label": "比對作答軌跡，請監考老師補充當時情形",
        "tier": "good",
        "note": "有助查證但別未審先判",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "直接兩人都記大過，當全班面宣布以儆效尤",
        "tier": "illegal",
        "note": "未查證公開定罪羞辱，違反程序",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "憑直覺認定成績差那個抄好的，逕行處分",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得查不清楚，兩張都算了不予追究",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_028",
    "cat": "管教",
    "diff": 1,
    "scenario": "午餐時間打菜大排長龍又互相推擠插隊，場面有點混亂，你會怎麼建立秩序？",
    "law": "（正向管教原則）",
    "explain": "和學生共建打菜流程與輪值規則，用制度維持秩序，比當場罵人更能長久順暢。",
    "choices": [
      {
        "label": "和大家訂出打菜動線與輪值，請值日生協助",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          3
        ]
      },
      {
        "label": "先請插隊的人回到隊伍，重申排隊規則",
        "tier": "good",
        "note": "能即時止亂但要持續落實",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰插隊者整週都最後一個才能打菜",
        "tier": "illegal",
        "note": "以剝奪用餐順序當懲罰不符比例",
        "effects": {
          "climate": -5,
          "cohesion": -3,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "大吼要全班罰站等安靜才准開動",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "懶得管，反正搶不到菜是他們的事",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_029",
    "cat": "管教",
    "diff": 2,
    "scenario": "幾名學生午餐常把廚餘亂倒、桌面留一堆殘渣不清，值日生抱怨連連，怎麼處理？",
    "law": "（正向管教原則）",
    "explain": "共訂用餐清潔責任並建立檢核習慣，讓秩序內化成班級文化，比個別責罵更持久。",
    "choices": [
      {
        "label": "帶全班共訂用餐清潔責任，建立收拾檢核表",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          3
        ]
      },
      {
        "label": "請弄亂的人當場收拾乾淨，再提醒一次",
        "tier": "good",
        "note": "能即時改善但要養成習慣",
        "effects": {
          "honor": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰整組同學連坐留下來打掃整間教室",
        "tier": "illegal",
        "note": "連坐處罰牽連無辜，不符比例",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾數落他們髒得像豬窩，要大家看",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "看不過去就自己默默幫忙收，不再多說",
        "tier": "wrong",
        "effects": {
          "roleModel": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_030",
    "cat": "管教",
    "diff": 1,
    "scenario": "打掃時間一名學生拿著掃把站著聊天，工作區一直沒掃，你會怎麼讓他動起來？",
    "law": "（正向管教原則）",
    "explain": "明確分工並肯定完成度，用清楚責任與正向回饋帶動投入，比責罵更能持續。",
    "choices": [
      {
        "label": "給他明確的責任區，掃完後具體肯定他",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "roleModel": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "先請他先把分內區掃完，再讓他休息",
        "tier": "good",
        "note": "能推動但要盯到完成",
        "effects": {
          "cohesion": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他一個人掃完全班的打掃區域",
        "tier": "illegal",
        "note": "處罰過量超出比例，處置失當",
        "effects": {
          "climate": -4,
          "cohesion": -3,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾罵他好吃懶做，要全班別跟他一組",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "懶得管，乾脆叫別人多掃一點補上",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_031",
    "cat": "管教",
    "diff": 2,
    "scenario": "外掃區一組學生長期應付了事，落葉只掃中間、邊角全留著，督導屢次反映，怎麼辦？",
    "law": "（正向管教原則）",
    "explain": "重新檢視分工合理性並現場示範標準，建立驗收機制，比一味加罰更能提升投入。",
    "choices": [
      {
        "label": "重新檢視分工，現場示範標準再帶他們驗收",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "roleModel": 4,
          "honor": 3,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "請他們補掃邊角，並安排同學互相驗收",
        "tier": "good",
        "note": "能補強但要持續追蹤",
        "effects": {
          "cohesion": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰整組放學後留校掃到天黑當作教訓",
        "tier": "illegal",
        "note": "留校過度且近似體罰，不符原則",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把他們貼上爛草莓標籤，叫別組看笑話",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得掃個外掃區不必計較，睜隻眼算了",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_032",
    "cat": "管教",
    "diff": 1,
    "scenario": "上課中你發現一張紙條正在後排同學間傳遞，內容不明，你會怎麼處理這件事？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "先請他們收起並私下了解，尊重隱私不公開朗讀，兼顧秩序與當事人尊嚴。",
    "choices": [
      {
        "label": "請他們先收起來，下課再私下了解內容",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先收起紙條交還，提醒上課別傳東西",
        "tier": "good",
        "note": "守住秩序但別急著拆看",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "當眾把紙條內容唸出來給全班聽笑話",
        "tier": "illegal",
        "note": "公開朗讀隱私屬羞辱，違反規定",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "搶過紙條當場撕掉，警告全班別再傳",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "假裝沒看到，反正傳紙條也沒礙到我上課",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "climate": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_033",
    "cat": "管教",
    "diff": 2,
    "scenario": "你攔下的紙條內容疑似在排擠某位同學，被傳的對象似乎被孤立了，你會怎麼處理？",
    "law": "（正向管教原則）",
    "explain": "私下關心被排擠者並引導全班談歸屬感，從關係修復著手，比公開揪人更能化解孤立。",
    "choices": [
      {
        "label": "先私下關心被排擠的同學，再帶全班談歸屬",
        "tier": "best",
        "effects": {
          "climate": 6,
          "cohesion": 4,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "個別約談傳紙條者，了解動機並引導同理",
        "tier": "good",
        "note": "能處理但要避免變成審判",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把傳紙條者名字寫黑板罰站讓全班看",
        "tier": "illegal",
        "note": "公開罰站揭名屬羞辱，違規定",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾質問是誰寫的，逼大家指認出來",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得小孩玩鬧而已，叫被排擠的別在意",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_034",
    "cat": "管教",
    "diff": 3,
    "scenario": "一名學生因細故突然情緒爆發，把桌椅推倒、激動大叫，全班嚇到安靜，你怎麼處理？",
    "law": "（正向管教原則）",
    "explain": "先確保安全與情緒降溫再了解原因，以安撫與輔導為先，避免當場壓制或羞辱激化衝突。",
    "choices": [
      {
        "label": "先確保安全帶他到一旁冷靜，待平穩再了解",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 5,
          "hp": -5
        },
        "octalysis": [
          5,
          1,
          7
        ]
      },
      {
        "label": "先穩住全班，請輔導老師協助一起介入",
        "tier": "good",
        "note": "借助資源但別把他晾在原地",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "當場大聲喝斥壓制，罰他到走廊罰站反省",
        "tier": "illegal",
        "note": "公開壓制與罰站易激化，違原則",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "用力架住他逼他坐下，比氣勢鎮住場面",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "被嚇到不知所措，索性放他自己鬧完",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_035",
    "cat": "管教",
    "diff": 2,
    "scenario": "下課一名學生和同學起口角，氣到握拳要動手，你剛好趕到現場，會怎麼即時處理？",
    "law": "（正向管教原則）",
    "explain": "先制止衝突隔開雙方降溫，確保安全後再了解原委，預防動手比事後處罰更關鍵。",
    "choices": [
      {
        "label": "先擋下隔開兩人降溫，確認安全再了解原委",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          5,
          1,
          6
        ]
      },
      {
        "label": "先把要動手的拉開，請旁人通報生輔協助",
        "tier": "good",
        "note": "能止衝突但要顧及雙方情緒",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰兩人一起半蹲到冷靜，誰先動誰先罰",
        "tier": "illegal",
        "note": "以體罰處理衝突違反不體罰原則",
        "effects": {
          "climate": -5,
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "站旁邊大吼要他們自己住手，不上前介入",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得小孩吵架難免，等他們打完再說",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_036",
    "cat": "管教",
    "diff": 3,
    "scenario": "一名學生對你各種提醒都左耳進右耳出，相同問題反覆犯，你已經有點挫折，怎麼辦？",
    "law": "（正向管教原則）",
    "explain": "調整策略並結合家長與輔導找根因，換方法與借資源，比重複同樣的勸導更可能突破。",
    "choices": [
      {
        "label": "換個方式並聯合家長輔導，一起找出根本原因",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -5
        },
        "octalysis": [
          5,
          1,
          7
        ]
      },
      {
        "label": "和他訂出具體可檢核的小目標逐步追蹤",
        "tier": "good",
        "note": "方向對但要陪他撐過反覆期",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他每犯一次就半蹲十分鐘加深印象",
        "tier": "illegal",
        "note": "以體罰加深印象違反不體罰原則",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當全班面數落他屢教不改，要大家別學",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "乾脆放生不管，反正講了也是白講",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_037",
    "cat": "管教",
    "diff": 2,
    "scenario": "一名學生上課玩文具講不聽，你已私下提醒多次仍無改善，下一步你會怎麼做比較好？",
    "law": "（正向管教原則）",
    "explain": "升級為正式輔導並通知家長共擬計畫，循序漸進結合資源，比加重處罰更符合管教精神。",
    "choices": [
      {
        "label": "升級為正式輔導並通知家長，一起擬改善計畫",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "和他約定明確規則與後果，並請同學提醒",
        "tier": "good",
        "note": "有結構但要說到做到",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "沒收他所有文具一週，當作不聽話的懲罰",
        "tier": "illegal",
        "note": "長期沒收財物逾越比例，不適當",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾把他文具掃到地上，警告全班別學",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "懶得再講，從此他怎樣都隨便他去",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_038",
    "cat": "管教",
    "diff": 2,
    "scenario": "你發現一名學生用手機在群組散布同學的不雅合成圖，事態嚴重，你會怎麼處理？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "依程序保全證據、通報並啟動輔導與被害保護，嚴肅且依法處理勝過私下壓下或公開審判。",
    "choices": [
      {
        "label": "先保全證據通報處理，並啟動雙方輔導保護",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 4,
          "roleModel": 4,
          "hp": -5
        },
        "octalysis": [
          5,
          1,
          6
        ]
      },
      {
        "label": "先請他立即刪除停止散布，通知家長到校",
        "tier": "good",
        "note": "止損重要但別忽略被害保護",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把圖印出來當全班面公審散布者一番",
        "tier": "illegal",
        "note": "公開展示不雅圖二度傷害，違規",
        "effects": {
          "trust": -7,
          "climate": -6,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得家醜不外揚，私下叫他刪掉別張揚",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "認為小孩惡作劇，唸兩句就讓他過關",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "honor": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_039",
    "cat": "管教",
    "diff": 2,
    "scenario": "你接了一個秩序很亂的新班，上課常此起彼落地插嘴喧鬧，你想長期改善，怎麼起步？",
    "law": "（正向管教原則）",
    "explain": "和全班共建班級公約並落實正向回饋，讓規則由學生參與而生，比高壓鎮壓更能長治。",
    "choices": [
      {
        "label": "帶全班共訂上課公約，搭配正向回饋持續落實",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "roleModel": 4,
          "hp": -5
        },
        "octalysis": [
          5,
          1,
          3
        ]
      },
      {
        "label": "先立幾條最關鍵的規則，每天追蹤成效",
        "tier": "good",
        "note": "起步明確但要避免規則太多",
        "effects": {
          "climate": 3,
          "cohesion": 3
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "一開始就重罰立威，吵一次全班連坐罰站",
        "tier": "illegal",
        "note": "連坐罰站立威違反比例與不體罰",
        "effects": {
          "climate": -6,
          "cohesion": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "靠大吼大叫壓場，誰吵就當眾兇回去",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "roleModel": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得亂班沒救，放著讓他們自己亂",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "cohesion": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_040",
    "cat": "管教",
    "diff": 2,
    "scenario": "你糾正一名學生時，他不服氣搬出「老師你之前都沒這樣要求」當眾頂回來，怎麼回應？",
    "law": "（正向管教原則）",
    "explain": "承認標準不一致並一起重申共同規則，誠實面對能贏得信服，比硬拗權威更能化解對立。",
    "choices": [
      {
        "label": "坦承標準該一致，和全班一起重申共同規則",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先肯定他敢提，再說明這次要求的理由",
        "tier": "good",
        "note": "能接住但別讓對話失焦",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他頂嘴上台向全班道歉認錯給大家看",
        "tier": "illegal",
        "note": "強迫公開道歉屬羞辱，違反規定",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "拉高姿態說我是老師，要他閉嘴照做",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "roleModel": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "被將軍到無言，乾脆這次就不要求了",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_041",
    "cat": "管教",
    "diff": 2,
    "scenario": "一名單親家庭的學生因要照顧弟妹常無法準時交作業，你了解後會怎麼協助他？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "依個別情形彈性調整並連結資源，看見家庭處境給合理支持，比一律罰則更貼近管教精神。",
    "choices": [
      {
        "label": "依他的處境彈性調整繳交，並連結支援資源",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "和他約定可行的補交節奏，定期關心進度",
        "tier": "good",
        "note": "有彈性但要協助他不落隊",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "一律照規定缺交就罰，不接受任何理由",
        "tier": "illegal",
        "note": "漠視個別處境僵化執法，不適當",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾要他別拿家裡當藉口，限期補齊",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "乾脆從此不要求他交，反正情有可原",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_042",
    "cat": "管教",
    "diff": 2,
    "scenario": "一名學生氣不過時對你脫口罵了一句髒話，全班頓時鴉雀無聲看著你，你會怎麼回應？",
    "law": "（正向管教原則）",
    "explain": "先穩住自己情緒不對撞，私下了解情緒源頭再談界線，冷靜處理比當場反擊更具示範力。",
    "choices": [
      {
        "label": "先穩住情緒不對撞，課後私下談原因與界線",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "當下平靜指出這句話不妥，課後再深談",
        "tier": "good",
        "note": "守住界線但別在全班前拉鋸",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "立刻把他叫上台向全班鞠躬道歉認錯",
        "tier": "illegal",
        "note": "強迫公開道歉屬羞辱，違反規定",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當場用更難聽的話回敬，氣勢上壓過他",
        "tier": "wrong",
        "effects": {
          "climate": -6,
          "roleModel": -6,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得太丟臉，從此把他當空氣不再理會",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_043",
    "cat": "管教",
    "diff": 1,
    "scenario": "午餐後第一節，半個班都昏昏欲睡、趴下一片，你發現是普遍的精神低落，怎麼處理？",
    "law": "（正向管教原則）",
    "explain": "用提神活動與調整節奏喚回專注，從教學設計著手，比逐一斥責更能整體改善精神。",
    "choices": [
      {
        "label": "穿插提神小活動並調整節奏，把專注帶回來",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 3,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1,
          3
        ]
      },
      {
        "label": "請大家起立做個伸展，再繼續往下上課",
        "tier": "good",
        "note": "能提神但別只做一次就算",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰趴下的人通通站到教室後面上完整節",
        "tier": "illegal",
        "note": "集體罰站體罰且傷學習，違原則",
        "effects": {
          "climate": -5,
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "拍桌大吼把全班嚇醒，警告誰睡就記點",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -3,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得反正講了也沒人聽，放他們睡完",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_044",
    "cat": "管教",
    "diff": 3,
    "scenario": "一名學生近期頻繁無故缺課，聯絡家長才知他在外遊蕩，疑似有交友狀況，怎麼處理？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "啟動三級輔導與家長合作了解交友與成因，跨網絡介入勝過單純記曠課或斥責恐嚇。",
    "choices": [
      {
        "label": "啟動輔導與家長合作，深入了解交友與成因",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "roleModel": 4,
          "hp": -5
        },
        "octalysis": [
          5,
          1,
          7
        ]
      },
      {
        "label": "先依規記曠課，並安排他與輔導定期晤談",
        "tier": "good",
        "note": "守程序但別只記不輔導",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "罰他每缺一節回來就半蹲補滿時數示警",
        "tier": "illegal",
        "note": "以體罰補時數違反不體罰原則",
        "effects": {
          "trust": -6,
          "climate": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "撂狠話恐嚇要記他大過退學嚇他回來",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得管不動了，乾脆隨他去愛來不來",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "bh_045",
    "cat": "管教",
    "diff": 3,
    "scenario": "一名學生集合多種狀況：遲到、缺交又愛頂嘴，你想擬一套長期輔導策略，會怎麼起手？",
    "law": "學校訂定教師輔導與管教學生辦法注意事項",
    "explain": "從關係與成因切入，結合家長輔導訂分階段計畫並定期檢視，系統性陪伴勝過頭痛醫頭。",
    "choices": [
      {
        "label": "先建立關係找成因，擬分階段計畫並定期檢視",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 5,
          "hp": -5
        },
        "octalysis": [
          5,
          1,
          2
        ]
      },
      {
        "label": "逐項列出問題與目標，和家長分工各自追蹤",
        "tier": "good",
        "note": "結構清楚但別讓他被貼問題標籤",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把所有狀況一次重罰，連坐扣全班榮譽分",
        "tier": "illegal",
        "note": "連坐扣分牽連無辜，不符比例",
        "effects": {
          "climate": -6,
          "cohesion": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "認定他無藥可救，當眾宣布放棄輔導他",
        "tier": "wrong",
        "effects": {
          "trust": -7,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得問題太多懶得管，能撐到畢業就好",
        "tier": "wrong",
        "effects": {
          "roleModel": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_001",
    "cat": "通報",
    "diff": 1,
    "scenario": "你發現班上小傑連續一週被三名同學圍堵推打成傷，你該怎麼處理？",
    "law": "校園霸凌防制準則",
    "explain": "肢體霸凌知悉後須立即通報並啟動防制調查，校安通報24小時內完成，務必保全傷勢證據並保護被害學生。",
    "choices": [
      {
        "label": "立即通報學務處並啟動防制霸凌調查",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先帶被害學生驗傷再補填校安通報",
        "tier": "good",
        "note": "處置方向對，但通報不可拖到事後補件，應同步進行",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把雙方找來握手道歉私下和解結案",
        "tier": "illegal",
        "note": "私了即屬隱匿，違反準則的通報與調查義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當作男生間打鬧要他們別再計較",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "只口頭警告加害者就讓事情過去",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_002",
    "cat": "通報",
    "diff": 1,
    "scenario": "小芸每天被同學用難聽綽號嘲笑，下課還被故意絆倒，你怎麼辦？",
    "law": "校園霸凌防制準則",
    "explain": "言語霸凌同屬校園霸凌，知悉後依準則通報並啟動調查輔導，校安通報24小時內完成，不可當成同學玩笑。",
    "choices": [
      {
        "label": "立即通報學務處並啟動防制霸凌調查",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先穩住學生情緒再於當日完成通報",
        "tier": "good",
        "note": "穩定情緒很好，但仍須當日完成正式通報程序",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "勸被害學生忍一忍避免把事鬧大",
        "tier": "illegal",
        "note": "勸忍耐等於放任，違反知悉即通報的義務",
        "effects": {
          "trust": -5,
          "honor": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "在全班面前公開斥責那名加害學生",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "叫雙方寫悔過書互相道歉就結束",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_003",
    "cat": "通報",
    "diff": 2,
    "scenario": "班上幾個女生帶頭排擠小婷，要全班都不准跟她講話，你如何處理？",
    "law": "校園霸凌防制準則",
    "explain": "刻意孤立排擠屬關係霸凌，知悉後應通報並啟動防制機制，校安通報24小時內完成，並介入修復班級關係。",
    "choices": [
      {
        "label": "立即通報學務處並啟動防制霸凌調查",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 4,
          "climate": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先請輔導老師晤談再走正式通報程序",
        "tier": "good",
        "note": "輔導介入正確，但通報不可省略仍須同步啟動",
        "effects": {
          "trust": 4,
          "climate": 4,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把雙方找來私下和解就當沒發生",
        "tier": "illegal",
        "note": "看似息事，實為隱匿，違反通報與調查規定",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把小婷調到別班讓她們不要碰面",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "先壓下來避免影響班級整體秩序",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_004",
    "cat": "通報",
    "diff": 2,
    "scenario": "你發現班級群組裡有人連續貼圖嘲諷小宇，還號召大家洗版攻擊？",
    "law": "校園霸凌防制準則",
    "explain": "網路霸凌同受準則規範，知悉後立即通報並保全截圖證據，校安通報24小時內完成，不可放任洗版攻擊。",
    "choices": [
      {
        "label": "先保全對話截圖再向學務處正式通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先請學生退出群組再於當日完成通報",
        "tier": "good",
        "note": "降低傷害有幫助，但證據要先保全再退出群組",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "自己私下約談調查不向上呈報處理",
        "tier": "illegal",
        "note": "導師不得取代調查機制，未通報即屬違規",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "要求全班解散群組就當沒這回事",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "叫小宇別看群組以後就不會難過",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_005",
    "cat": "通報",
    "diff": 2,
    "scenario": "兩名學生在走廊互毆掛彩，圍觀同學起鬨拍影片要上傳，怎麼做？",
    "law": "校園霸凌防制準則",
    "explain": "互毆與起鬨拍攝皆須處置，立即制止就醫並通報，校安通報24小時內完成，影片外流另涉侵權須一併處理。",
    "choices": [
      {
        "label": "先制止就醫再向學務處完成校安通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先帶兩人就醫驗傷再補填校安通報",
        "tier": "good",
        "note": "就醫對，但通報應同步啟動不宜事後再補",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "由雙方家長自行協調賠償私了結案",
        "tier": "illegal",
        "note": "私下賠償了事屬隱匿，違反通報調查義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只口頭警告雙方就讓事情過去算了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "叫圍觀同學自己刪影片就不追究",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_006",
    "cat": "通報",
    "diff": 2,
    "scenario": "家長來電說孩子長期被同學言語霸凌不敢上學，你接到後第一步？",
    "law": "校園霸凌防制準則",
    "explain": "家長反映長期霸凌，導師受理後應立即通報並啟動調查，校安通報24小時內完成，先確保孩子安全返校。",
    "choices": [
      {
        "label": "受理後立即通報並啟動防制調查機制",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先安撫家長與孩子再於當日完成通報",
        "tier": "good",
        "note": "安撫很重要，但通報程序當日就要正式啟動",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "先觀察幾天看看再決定要不要上報",
        "tier": "illegal",
        "note": "拖延觀察違反知悉即通報，恐讓傷害持續",
        "effects": {
          "trust": -5,
          "honor": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "請家長先別緊張說孩子適應就好了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "通知導護老師多留意就不另處理",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_007",
    "cat": "通報",
    "diff": 3,
    "scenario": "有匿名帳號在限動連續造謠抹黑小潔，引來大量同學留言攻擊？",
    "law": "校園霸凌防制準則",
    "explain": "匿名造謠抹黑屬網路霸凌，立即保全證據並通報，校安通報24小時內完成，可循平台與警政管道協助追查。",
    "choices": [
      {
        "label": "先保全對話截圖再向學務處正式通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先協助學生檢舉貼文再當日完成通報",
        "tier": "good",
        "note": "檢舉有用，但通報程序仍須當日同步啟動",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "自己私下追查帳號不向上呈報處理",
        "tier": "illegal",
        "note": "導師不得取代調查，未通報即屬違規隱匿",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫小潔暫時關閉帳號就能眼不見為淨",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "在班上要大家別亂留言就算處理過",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_008",
    "cat": "通報",
    "diff": 1,
    "scenario": "小安私下跟你說他每天目睹同學被霸凌很害怕，但不敢講出來？",
    "law": "校園霸凌防制準則",
    "explain": "旁觀者通報應受保護與肯定，導師知悉後仍須依準則通報，校安通報24小時內完成，並安撫旁觀學生情緒。",
    "choices": [
      {
        "label": "肯定他並立即通報啟動防制調查機制",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先答應保護他身分再於當日完成通報",
        "tier": "good",
        "note": "保護身分對，但別承諾不通報，仍須當日上報",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替他保密不讓任何師長知道這事",
        "tier": "illegal",
        "note": "替旁觀者保密而不通報，違反知悉即通報義務",
        "effects": {
          "trust": -5,
          "honor": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他別多管閒事顧好自己就好了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "請他自己去勸架就能解決這件事",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_009",
    "cat": "通報",
    "diff": 3,
    "scenario": "霸凌事件你已通報，加害學生家長施壓要你撤案私下解決，怎麼辦？",
    "law": "校園霸凌防制準則",
    "explain": "已通報案件不得因家長施壓撤案，調查須依準則程序進行，校安通報24小時內完成，私了即屬隱匿違法。",
    "choices": [
      {
        "label": "婉拒施壓並依準則程序續行調查處理",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "傾聽家長訴求但仍堅持依規調查到底",
        "tier": "good",
        "note": "願意溝通很好，但不能因此鬆動法定調查程序",
        "effects": {
          "trust": 4,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應家長撤案改由雙方私下和解了事",
        "tier": "illegal",
        "note": "撤案私了屬隱匿包庇，嚴重違反通報調查規定",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "怕被投訴就把調查無限期拖延下去",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -4
        },
        "octalysis": []
      },
      {
        "label": "改口說當初通報是誤會想大事化小",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_010",
    "cat": "通報",
    "diff": 2,
    "scenario": "女學生哭著說被男同學趁打掃時故意觸碰身體還言語騷擾，怎麼處理？",
    "law": "性別平等教育法 §21",
    "explain": "疑似校園性騷擾屬性平事件，知悉後須24小時內通報學校與主管機關，保全證據並保護被害學生不可私了。",
    "choices": [
      {
        "label": "24小時內通報學校與性平主管機關",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先安撫被害學生再於時限內完成通報",
        "tier": "good",
        "note": "安撫對，但務必把握24小時通報時限不可延誤",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把兩人找來私下和解叫男生道歉了事",
        "tier": "illegal",
        "note": "性平事件不得私了，未通報即違反法定義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "勸女生別太敏感說對方可能只是無心",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "只把男生罵一頓就要他別再犯了",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_011",
    "cat": "通報",
    "diff": 3,
    "scenario": "學生私下向你透露某科任老師常對她講黃色笑話並肢體碰觸？",
    "law": "性別平等教育法 §21",
    "explain": "師對生疑似性騷擾屬重大性平事件，知悉後須24小時內通報並通報主管機關，立即啟動調查與被害人保護。",
    "choices": [
      {
        "label": "24小時內通報學校與性平主管機關",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先記下學生陳述細節再於時限內通報",
        "tier": "good",
        "note": "記錄陳述很好，但別自行查證，時限內通報為先",
        "effects": {
          "trust": 4,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密不讓那位老師知道此事",
        "tier": "illegal",
        "note": "替學生保密而不通報，違反知悉即通報義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "怕得罪同事就勸學生忍一下別聲張",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -4
        },
        "octalysis": []
      },
      {
        "label": "自己先去問那位老師求證再決定要不要報",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_012",
    "cat": "通報",
    "diff": 2,
    "scenario": "幾名男生長期嘲笑小強的性別氣質，還散布他是同性戀的謠言羞辱他？",
    "law": "性別平等教育法 §21",
    "explain": "嘲笑性別氣質、散布性傾向謠言屬性霸凌，知悉後須24小時內通報，啟動性平調查並保護被害學生。",
    "choices": [
      {
        "label": "24小時內通報學校與性平主管機關",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先穩住小強情緒再於時限內完成通報",
        "tier": "good",
        "note": "穩定情緒對，但仍須24小時內正式通報處理",
        "effects": {
          "trust": 4,
          "climate": 4,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把雙方找來私下和解叫大家別再講了",
        "tier": "illegal",
        "note": "性霸凌不得私了，未通報即屬隱匿違規",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "勸小強別在意說男生開玩笑很正常",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "只在班上提醒大家別亂講就算處理",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_013",
    "cat": "通報",
    "diff": 3,
    "scenario": "國二女生紅著眼說被校外網友約出去，發生她不願意的性關係？",
    "law": "性別平等教育法 §21",
    "explain": "疑似性侵害為重大事件，知悉後24小時內向學校及主管機關通報，同步啟動保護與後續醫療社政協助。",
    "choices": [
      {
        "label": "24小時內通報學校與性平主管機關",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 6,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先陪伴穩住學生再於時限內完成通報",
        "tier": "good",
        "note": "陪伴很重要，但保護與通報須同步、勿延誤時限",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密不讓家長與學校知道",
        "tier": "illegal",
        "note": "疑似性侵屬責任通報，保密不報嚴重違法",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "先質問她為何要私下答應跟網友見面",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "叫她回家先別講等她冷靜再說怎麼辦",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_014",
    "cat": "通報",
    "diff": 3,
    "scenario": "有人把女學生私密照外流到群組要脅她，同學間正瘋傳這些照片？",
    "law": "性別平等教育法 §21",
    "explain": "私密影像外流威脅屬數位性暴力，知悉後須24小時內通報，立即下架保全證據並啟動被害人保護。",
    "choices": [
      {
        "label": "保全證據後24小時內通報並協助下架",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先請學生別轉傳再於時限內完成通報",
        "tier": "good",
        "note": "止傳很關鍵，但仍須在24小時內完成正式通報",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把外流者找來私下談賠償就和解了事",
        "tier": "illegal",
        "note": "數位性暴力不得私了，未通報即違反法定義務",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "怪被害學生當初不該拍那種照片",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "只在群組要大家刪照片就當處理完",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_015",
    "cat": "通報",
    "diff": 1,
    "scenario": "你今天得知一起疑似校園性騷擾事件，最關鍵的通報時限要求是什麼？",
    "law": "性別平等教育法 §21",
    "explain": "校園性騷擾、性侵害或性霸凌，知悉人員一律須於24小時內通報學校及主管機關，不得拖延或私下處理。",
    "choices": [
      {
        "label": "知悉24小時內通報學校與主管機關",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "當天先報學校再儘速通報主管機關",
        "tier": "good",
        "note": "方向對，但兩者皆須在24小時時限內完成",
        "effects": {
          "trust": 4,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "等查清楚有沒有真的發生再決定通報",
        "tier": "illegal",
        "note": "性平事件採知悉即報，查證屬調查機制非通報前提",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得不嚴重就放著等下週再一起處理",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "認為只是傳聞所以根本不需要去通報",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_016",
    "cat": "通報",
    "diff": 2,
    "scenario": "男學生不好意思地說，他被學長在廁所強迫脫褲拍照取笑？",
    "law": "性別平等教育法 §21",
    "explain": "強迫脫衣拍照取笑屬性騷擾、性霸凌，男性同為被害人，知悉後須24小時內通報並啟動調查保護。",
    "choices": [
      {
        "label": "24小時內通報學校與性平主管機關",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先肯定他願意說再於時限內完成通報",
        "tier": "good",
        "note": "肯定他開口很好，但仍須把握24小時通報時限",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "把學長找來私下訓一頓道歉就算了事",
        "tier": "illegal",
        "note": "性霸凌不得私下訓誡了事，未通報即屬違規",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "笑說男生間鬧著玩別放在心上就好",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "叫他自己去要回照片刪掉就沒事了",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_017",
    "cat": "通報",
    "diff": 2,
    "scenario": "你只是聽其他同學轉述疑似性騷擾的事，自己還沒查證，需要通報嗎？",
    "law": "性別平等教育法 §21",
    "explain": "性平事件採知悉即通報，縱使為轉述、尚未查證，仍須24小時內通報，由調查機制釐清，不可自行認定。",
    "choices": [
      {
        "label": "知悉即報於24小時內完成正式通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先記下轉述內容再於時限內完成通報",
        "tier": "good",
        "note": "記錄來源很好，但別把查證當成通報的前提",
        "effects": {
          "trust": 4,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "先自己私下查證屬實後再決定要不要報",
        "tier": "illegal",
        "note": "自行查證取代通報，違反知悉即報的法定義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是傳聞就當沒聽到不去理會",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "叫轉述的同學自己去學務處講就好",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_018",
    "cat": "通報",
    "diff": 2,
    "scenario": "小杰手臂有成排瘀傷，吞吐說是爸爸打的，還叫你不要說出去？",
    "law": "兒童及少年福利與權益保障法 §53",
    "explain": "身上不明傷痕加上孩子陳述，屬疑似兒虐責任通報事件，須24小時內通報社政單位，不可替施虐者隱匿。",
    "choices": [
      {
        "label": "24小時內向社政主管機關責任通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先安撫並記錄傷勢再於時限內完成通報",
        "tier": "good",
        "note": "記錄傷勢很好，但通報不可拖延仍須24小時內完成",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密不讓家長知道是他講的",
        "tier": "illegal",
        "note": "替孩子保密而不通報，違反責任通報法定義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "先打電話問爸爸怎麼回事再決定要不要報",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得是家務事學校不方便插手就算了",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_019",
    "cat": "通報",
    "diff": 2,
    "scenario": "學生連續多日沒吃早餐、衣物髒臭，生病了也沒人帶他去看醫生？",
    "law": "兒童及少年福利與權益保障法 §53",
    "explain": "長期飢餓、衛生不良、就醫缺位屬照顧疏忽，責任通報人員須24小時內通報主管機關啟動兒少保護。",
    "choices": [
      {
        "label": "24小時內向社政主管機關責任通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先給孩子餐食協助就醫再完成通報",
        "tier": "good",
        "note": "立即照顧很好，但仍須在時限內完成責任通報",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "先觀察幾天看看再決定要不要上報",
        "tier": "illegal",
        "note": "拖延觀察違反疑似即報，恐讓疏忽持續惡化",
        "effects": {
          "trust": -5,
          "honor": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只私下塞點零用錢給他就當幫過忙",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得家境問題與學校無關不去過問",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_020",
    "cat": "通報",
    "diff": 2,
    "scenario": "學生說昨晚爸爸又動手打媽媽，他躲在房間整夜發抖沒辦法睡？",
    "law": "兒童及少年福利與權益保障法 §53",
    "explain": "目睹家庭暴力屬兒少保護事件，知悉後須24小時內責任通報，連結社工協助並關注孩子身心安全。",
    "choices": [
      {
        "label": "24小時內向社政主管機關責任通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先安撫並轉介輔導再於時限內完成通報",
        "tier": "good",
        "note": "輔導轉介很好，但目睹家暴仍須責任通報不可省",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密不通報怕家長更生氣",
        "tier": "illegal",
        "note": "替孩子保密而不通報，違反責任通報法定義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得夫妻吵架是家務事不該管太多",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "只勸學生回家盡量躲開就不另處理",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_021",
    "cat": "通報",
    "diff": 3,
    "scenario": "學生說爸媽出國工作，把他一個人留在家好幾週沒有人照顧？",
    "law": "兒童及少年福利與權益保障法 §53",
    "explain": "父母長期外出無人照顧屬疑似遺棄或疏忽，責任通報人員須24小時內通報主管機關啟動安置評估。",
    "choices": [
      {
        "label": "24小時內向社政主管機關責任通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先確認有無親屬照看再於時限內通報",
        "tier": "good",
        "note": "釐清照顧狀況很好，但仍須在時限內責任通報",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "先聯絡父母叫他們快回來就先不上報",
        "tier": "illegal",
        "note": "等家長處理而不通報，違反疑似即報的義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他都這麼大了自己住應該沒問題",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "只叮嚀他自己注意安全就不另處理",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_022",
    "cat": "通報",
    "diff": 1,
    "scenario": "你研判某位學生疑似遭受家內不當對待，責任通報的時限是多久？",
    "law": "兒童及少年福利與權益保障法 §53",
    "explain": "教育人員為責任通報人，研判兒少疑似受虐或疏忽，須於24小時內通報直轄市縣市主管機關。",
    "choices": [
      {
        "label": "於知悉24小時內向主管機關責任通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "當天先報校安再儘速通報社政單位",
        "tier": "good",
        "note": "方向對，但社政責任通報同樣須在24小時內完成",
        "effects": {
          "trust": 4,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "等蒐集到確切證據後再決定要不要通報",
        "tier": "illegal",
        "note": "責任通報採疑似即報，不以掌握確切證據為前提",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是懷疑所以根本不必去通報",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "想說下次親師會再順便跟家長談談",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_023",
    "cat": "通報",
    "diff": 2,
    "scenario": "受虐學生哭著求你千萬別通報，怕回家被打得更慘，你怎麼回應？",
    "law": "兒童及少年福利與權益保障法 §53",
    "explain": "受虐學生要求保密不能凌駕通報義務，導師仍須24小時內責任通報，同時向學生說明通報是為保護他。",
    "choices": [
      {
        "label": "說明通報是保護他並依法完成責任通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先陪他談安全計畫再於時限內完成通報",
        "tier": "good",
        "note": "談安全計畫很好，但通報義務仍不可因此延後",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密這次就先不通報處理",
        "tier": "illegal",
        "note": "孩子要求保密不能凌駕法定責任通報義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他先忍耐等成年離家就會好了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "讓他自己決定要不要被通報尊重他",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_024",
    "cat": "通報",
    "diff": 3,
    "scenario": "學生暗示家中長輩對她有不當身體接觸，她非常害怕回家面對？",
    "law": "兒童及少年福利與權益保障法 §53",
    "explain": "家內疑似性侵害兼兒虐，知悉後須24小時內雙軌責任通報，並啟動人身安全評估避免孩子返家受害。",
    "choices": [
      {
        "label": "24小時內雙軌通報並啟動人身安全評估",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 6,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先陪伴穩住情緒再於時限內完成通報",
        "tier": "good",
        "note": "陪伴很重要，但雙軌責任通報須在時限內完成",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密不讓家裡任何人知道",
        "tier": "illegal",
        "note": "家內性侵屬責任通報，保密不報嚴重違法",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "先打電話向家長求證再決定要不要報",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "叫她先回家觀察看看是不是誤會",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_025",
    "cat": "通報",
    "diff": 2,
    "scenario": "你只是「懷疑」某學生被虐待，沒有確切證據，這樣需要通報嗎？",
    "law": "兒童及少年福利與權益保障法 §53",
    "explain": "責任通報採疑似即報，不需確切證據，導師合理懷疑兒少受虐即須24小時內通報，由社政查證處置。",
    "choices": [
      {
        "label": "合理懷疑即報24小時內完成責任通報",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先記下觀察到的徵兆再於時限內通報",
        "tier": "good",
        "note": "記錄徵兆很好，但別把蒐證當成通報的前提",
        "effects": {
          "trust": 4,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "先自己私下查清楚再決定要不要上報",
        "tier": "illegal",
        "note": "自行查證取代通報，違反疑似即報的法定義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得沒證據亂報怕害到家長就不報",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "想等下次更明顯的時候再一起通報",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_026",
    "cat": "通報",
    "diff": 2,
    "scenario": "週記裡學生寫下「活著好累，好想消失」，你看到後該怎麼處理？",
    "law": "學生輔導法",
    "explain": "流露輕生念頭須立即啟動三級預防，導師通報輔導室介入危機處理，不可替學生保密，並持續陪伴觀察。",
    "choices": [
      {
        "label": "立即通報輔導室啟動危機處理與陪伴",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先找學生私下談談再當天通報輔導室",
        "tier": "good",
        "note": "主動關心很好，但通報輔導室不可延到事後",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密不讓輔導室與家長介入",
        "tier": "illegal",
        "note": "涉及人身安全不可保密，須立即通報輔導室",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "在週記回他加油打氣就當關心過了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得只是青春期感慨不必太認真看待",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_027",
    "cat": "通報",
    "diff": 3,
    "scenario": "學生私下說他已經想好怎麼結束生命，還叫你保密別跟別人講？",
    "law": "學生輔導法",
    "explain": "已有具體自殺計畫屬高風險，導師須立即通報輔導室啟動危機處理，保密承諾不適用，並確保學生不落單。",
    "choices": [
      {
        "label": "立即通報輔導室啟動危機處理與陪伴",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 6,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先穩住他陪在身邊再立刻通報輔導室",
        "tier": "good",
        "note": "陪伴不離身很對，但須同時立即通報啟動危機",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密不讓輔導室與家長知道",
        "tier": "illegal",
        "note": "高自殺風險絕不可保密，須立即通報啟動危機",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只跟他約定下次再聊就讓他先回家",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得他只是說說而已不會真的去做",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_028",
    "cat": "通報",
    "diff": 2,
    "scenario": "你注意到學生手腕上有多道新的割痕，她卻說只是不小心弄傷的？",
    "law": "學生輔導法",
    "explain": "新割痕為自我傷害警訊，導師應立即通報輔導室評估，依三級預防介入，不可僅相信「不小心」而忽略。",
    "choices": [
      {
        "label": "立即通報輔導室評估並啟動關懷介入",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先溫和關心傷口來由再當天通報輔導室",
        "tier": "good",
        "note": "溫和關心很好，但仍須當天通報輔導室評估",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密不讓輔導室與家長介入",
        "tier": "illegal",
        "note": "自我傷害警訊不可保密，須立即通報輔導室",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "聽她說不小心就相信她不再追問了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "在班上提醒大家別自殘就當處理過",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_029",
    "cat": "通報",
    "diff": 2,
    "scenario": "小敏緊張地說好朋友昨晚傳訊息說想自殺，要你幫忙但別張揚？",
    "law": "學生輔導法",
    "explain": "同學轉述的自殺訊息須認真看待，導師立即通報輔導室啟動危機處理，並肯定通報同學、安撫其情緒。",
    "choices": [
      {
        "label": "肯定她並立即通報輔導室啟動危機處理",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先請她保留訊息截圖再立刻通報輔導室",
        "tier": "good",
        "note": "保留截圖有助評估，但通報須立即不可延後",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替她保密這事自己私下處理就好",
        "tier": "illegal",
        "note": "自殺訊息不可私下處理保密，須立即通報輔導室",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫小敏自己去安慰朋友就能解決了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得是同學間誇大其詞不必當真",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_030",
    "cat": "通報",
    "diff": 3,
    "scenario": "學生在輔導室情緒崩潰，說現在就想跳樓，你身為導師當下怎麼做？",
    "law": "學生輔導法",
    "explain": "學生表達立即輕生意圖屬緊急危機，導師須陪同不離身、即刻通報並通知輔導與家長，啟動危機處理。",
    "choices": [
      {
        "label": "陪同不離身並即刻通報啟動危機處理",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 6,
          "climate": 4,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先穩定他情緒再請人協助通報與看護",
        "tier": "good",
        "note": "穩定情緒對，但必須同時請人通報、不可單獨處置",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替他保密不通報就帶他先回教室",
        "tier": "illegal",
        "note": "緊急危機絕不可保密放行，須即刻通報啟動危機",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "自己離開去找人卻把學生獨自留下",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "板起臉訓他不可以這樣想就走開",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_031",
    "cat": "通報",
    "diff": 2,
    "scenario": "學生願意跟你談心事，但前提是你要答應他完全保密，你能答應嗎？",
    "law": "學生輔導法",
    "explain": "涉及自我傷害或人身安全時，導師不可承諾完全保密，須立即通報輔導室，並向學生說明這是為了保護他。",
    "choices": [
      {
        "label": "先說明保密有界線再依需要通報輔導室",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "答應一般保密但安全議題須轉介輔導室",
        "tier": "good",
        "note": "界線觀念對，但要當下講清楚而非事後才補說",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生完全保密什麼都不會講出去",
        "tier": "illegal",
        "note": "涉及人身安全不可承諾完全保密與不通報",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "怕他不講就先一口答應保密再說",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得太麻煩乾脆叫他別跟你講了",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_032",
    "cat": "通報",
    "diff": 1,
    "scenario": "面對有自傷風險的學生，導師啟動輔導通報的正確認知應該是什麼？",
    "law": "學生輔導法",
    "explain": "面對自傷風險學生，導師屬三級預防的通報啟動者，知悉即通報輔導室，保密不得凌駕學生生命安全。",
    "choices": [
      {
        "label": "知悉即通報輔導室啟動三級預防介入",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先初步關懷再儘速通報輔導室共同處理",
        "tier": "good",
        "note": "初步關懷很好，但通報不可拖延仍須儘速啟動",
        "effects": {
          "trust": 4,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "尊重學生保密意願就先不通報輔導室",
        "tier": "illegal",
        "note": "保密不得凌駕生命安全，自傷風險須立即通報",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得導師自己輔導就好不必驚動別人",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "想等狀況更嚴重一點再來通報處理",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_033",
    "cat": "通報",
    "diff": 1,
    "scenario": "你在廁所抓到學生吸菸，他求你不要記過也不要通報，怎麼處理？",
    "law": "校園安全通報程序",
    "explain": "校內吸菸須依校安通報處理並啟動春暉專案輔導，導師不可私下放過，應於規定時限完成通報與輔導轉介。",
    "choices": [
      {
        "label": "依校安通報處理並啟動春暉專案輔導",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先了解抽菸緣由再依規完成校安通報",
        "tier": "good",
        "note": "了解緣由有助輔導，但校安通報程序不可省略",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下警告學生別再犯就不予通報處理",
        "tier": "illegal",
        "note": "私下放過違反校安通報，也錯失春暉輔導時機",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只沒收香菸罵一頓就讓他回教室了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得抽菸是小事不必勞師動眾通報",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_034",
    "cat": "通報",
    "diff": 3,
    "scenario": "學生書包掉出不明藥丸與分裝袋，他說那是別人寄放在他這裡的？",
    "law": "校園安全通報程序",
    "explain": "不明藥丸與分裝袋疑似毒品，導師須立即通報校安並啟動春暉專案，保全證物、避免學生再接觸並追查來源。",
    "choices": [
      {
        "label": "保全證物後立即校安通報並啟動春暉",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先穩住學生問清來源再完成校安通報",
        "tier": "good",
        "note": "問清來源有助追查，但通報不可延後仍須即報",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "相信是寄放的就把東西還他不通報了",
        "tier": "illegal",
        "note": "疑似毒品不得私下歸還隱匿，須立即校安通報",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只把藥丸丟掉訓他幾句就讓他離開",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得可能只是感冒藥不必小題大作",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_035",
    "cat": "通報",
    "diff": 2,
    "scenario": "學生早上到校滿身酒味、步伐不穩，坦承昨晚跟校外朋友一起喝酒？",
    "law": "校園安全通報程序",
    "explain": "學生飲酒到校屬偏差行為，導師依校安通報並啟動春暉輔導，先確認身體狀況、聯繫家長並完成通報。",
    "choices": [
      {
        "label": "先確認身體狀況再校安通報啟動春暉",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先安置休息聯繫家長再完成校安通報",
        "tier": "good",
        "note": "安置與聯繫家長很好，但校安通報仍不可省略",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下勸他別再喝就讓他進教室不上報",
        "tier": "illegal",
        "note": "私下放過違反校安通報，也錯失春暉輔導機會",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只叫他去保健室睡醒就當沒這回事",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得偶爾喝酒沒什麼不必通報處理",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_036",
    "cat": "通報",
    "diff": 2,
    "scenario": "你發現學生間流行抽電子煙，還有人在校內兜售給學弟妹？",
    "law": "校園安全通報程序",
    "explain": "電子煙與校內兜售須依校安通報處理，導師立即通報並啟動春暉專案，保全證據並追查兜售來源遏止擴散。",
    "choices": [
      {
        "label": "保全證據後校安通報並啟動春暉專案",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先掌握兜售名單再依規完成校安通報",
        "tier": "good",
        "note": "掌握名單有助追查，但通報程序仍須同步進行",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下警告兜售學生別再賣就不通報了",
        "tier": "illegal",
        "note": "私下警告了事屬隱匿，違反校安通報義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只沒收電子煙就讓他們回去上課了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得電子煙不算菸所以不用去通報",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_037",
    "cat": "通報",
    "diff": 1,
    "scenario": "學生疑似接觸毒品，導師除了校安通報之外還應啟動什麼輔導機制？",
    "law": "校園安全通報程序",
    "explain": "學生疑似接觸毒品，導師除校安通報外應啟動春暉專案三級輔導，依時限完成通報，連結資源協助戒除。",
    "choices": [
      {
        "label": "校安通報後啟動春暉專案三級輔導",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先通報校安再轉介輔導室共同協助處理",
        "tier": "good",
        "note": "轉介輔導很好，但仍應正式啟動春暉專案輔導",
        "effects": {
          "trust": 4,
          "honor": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "由導師自己私下盯著勸戒就不啟動專案",
        "tier": "illegal",
        "note": "導師私下處理取代專案，違反通報與輔導規定",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只要記過處分就不必再輔導了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "想說等他自己戒掉就好不必多此一舉",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_038",
    "cat": "通報",
    "diff": 3,
    "scenario": "有學生向你密報，校外人士在校門口兜售「提神藥丸」給學生？",
    "law": "校園安全通報程序",
    "explain": "校門口兜售提神藥丸疑涉毒品，導師須立即校安通報並通知校安與警政，保全線索追查，啟動春暉輔導。",
    "choices": [
      {
        "label": "立即校安通報並通知校安與警政協處",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 6,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先記下密報細節再依規完成校安通報",
        "tier": "good",
        "note": "記下線索有助追查，但通報程序須立即啟動",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "自己去校門口盯哨查證後再決定要不要報",
        "tier": "illegal",
        "note": "導師自行查緝取代通報，違反校安通報義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只提醒學生別買就當已經處理過了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得只是傳聞沒抓到人就不必通報",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_039",
    "cat": "通報",
    "diff": 2,
    "scenario": "放學時你看到一名陌生成年男子多次在校門徘徊搭訕女學生？",
    "law": "校園安全通報程序",
    "explain": "陌生成人徘徊搭訕學生具安全疑慮，導師應立即通報學務與校安，必要時報警，並提醒學生結伴遠離。",
    "choices": [
      {
        "label": "立即通報學務與校安必要時報警處理",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先引導學生離開再向學務完成通報",
        "tier": "good",
        "note": "先護學生很好，但通報校安的程序仍須完成",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "自己上前盤問那名男子查清楚就好不報",
        "tier": "illegal",
        "note": "獨自盤查危險又取代通報，違反校安通報程序",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他可能只是路人就不去理會他",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "只叫女學生快走就當沒看到這件事",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_040",
    "cat": "通報",
    "diff": 2,
    "scenario": "瘦小的學生說他被高年級同學恐嚇，每週要交保護費否則就挨打？",
    "law": "校園安全通報程序",
    "explain": "索討保護費屬恐嚇勒索，導師須立即通報學務與校安處理，保護被害學生、保全證據，必要時連結警政。",
    "choices": [
      {
        "label": "立即通報學務與校安並保護被害學生",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先安撫學生保全證據再向學務通報",
        "tier": "good",
        "note": "保全證據很好，但通報程序須同步啟動不可緩",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下找對方學生談談就和解了事不上報",
        "tier": "illegal",
        "note": "恐嚇勒索不得私下和解，未通報即屬隱匿",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫被害學生以後別落單就不會被勒索",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "只口頭警告高年級學生就讓事情過去",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_041",
    "cat": "通報",
    "diff": 3,
    "scenario": "女學生說有名校外成年男子持續跟蹤她、傳訊息糾纏讓她很害怕？",
    "law": "跟蹤騷擾防制法",
    "explain": "校外成人持續跟蹤糾纏，導師應協助學生依跟蹤騷擾防制法報警，並通報校安，啟動人身安全保護措施。",
    "choices": [
      {
        "label": "協助報警並通報校安啟動人身安全保護",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先保全糾纏訊息截圖再協助學生報警",
        "tier": "good",
        "note": "保全證據很重要，但仍須同步通報校安啟動保護",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密自己私下勸退那名男子",
        "tier": "illegal",
        "note": "私下處理跟騷又保密不報，恐升高人身危險",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫她別回訊息封鎖對方就不會有事了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得是她私事學校不方便介入處理",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_042",
    "cat": "通報",
    "diff": 2,
    "scenario": "兩派學生相約放學後在校外公園打群架，你提前得到了風聲？",
    "law": "校園安全通報程序",
    "explain": "預謀校外鬥毆具人身安全風險，導師掌握風聲後須立即通報學務與校安，介入勸阻並通知家長與警政。",
    "choices": [
      {
        "label": "立即通報學務與校安並介入勸阻群架",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先分頭約談帶頭學生再向學務通報",
        "tier": "good",
        "note": "約談帶頭者有用，但通報校安的程序不可省略",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下勸雙方別打就當化解了不上報",
        "tier": "illegal",
        "note": "私下勸退而不通報，違反校安通報與安全責任",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是放話不會真打就先觀望",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "只在班上喊話別惹事就當處理過了",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_043",
    "cat": "通報",
    "diff": 2,
    "scenario": "你發現學生書包裡藏著一把開鋒的美工刀和疑似武器的鐵棍？",
    "law": "校園安全通報程序",
    "explain": "攜帶開鋒刀具與鐵棍屬危險物品，導師應立即通報學務與校安、保管危險物品，並了解動機防範傷害事件。",
    "choices": [
      {
        "label": "保管危險物品後立即通報學務與校安",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先了解攜帶動機再向學務完成通報",
        "tier": "good",
        "note": "了解動機有助輔導，但通報程序仍須同步進行",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "私下沒收叮嚀別帶就還他不通報了",
        "tier": "illegal",
        "note": "私下處置危險物品而不通報，違反校安通報義務",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是工具沒傷人就讓他帶回去",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "只罵他一頓就把東西丟掉算解決了",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_044",
    "cat": "通報",
    "diff": 3,
    "scenario": "學生說網友自稱星探，約她單獨見面拍照，還要她別告訴家長？",
    "law": "校園安全通報程序",
    "explain": "網友誘約單獨見面拍照疑涉誘拐，導師須立即通報校安與警政，保全對話證據，並阻止學生赴約保護其安全。",
    "choices": [
      {
        "label": "保全對話後立即通報校安並通知警政",
        "tier": "best",
        "effects": {
          "trust": 7,
          "honor": 6,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先勸阻學生赴約再依規完成校安通報",
        "tier": "good",
        "note": "勸阻赴約很對，但通報校安與警政仍不可省略",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替學生保密自己私下查那名網友",
        "tier": "illegal",
        "note": "疑似誘拐不可私查保密，須立即通報校安警政",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是拍照沒什麼就讓她自己決定",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "只提醒她見面時要小心就不另處理",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sf_045",
    "cat": "通報",
    "diff": 2,
    "scenario": "學生收到陌生人傳來的訊息，要約他見面並寄送金錢，他來問你？",
    "law": "校園安全通報程序",
    "explain": "陌生人約見面、寄錢疑涉誘拐詐騙，導師應立即通報校安、保全訊息證據，提醒學生勿單獨赴約並通知家長。",
    "choices": [
      {
        "label": "保全訊息後立即通報校安並通知家長",
        "tier": "best",
        "effects": {
          "trust": 6,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先請學生別回覆再向校安完成通報",
        "tier": "good",
        "note": "先止聯繫很好，但通報校安的程序仍須完成",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "答應替他保密自己加對方好友查清楚",
        "tier": "illegal",
        "note": "疑似誘拐不可私查保密，須立即通報校安處理",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得是詐騙叫他封鎖就好不必通報",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "只說別貪小便宜就讓他自己處理了",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_001",
    "cat": "親師",
    "diff": 1,
    "scenario": "家長在聯絡簿寫滿三頁抱怨孩子座位，你該如何回應這份留言？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "聯絡簿宜簡短具體，複雜情緒議題改約面談或電話，避免書面往返激化對立。",
    "choices": [
      {
        "label": "簡短回覆並主動約家長面談細談座位安排",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 4,
          "climate": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "聯絡簿先同理一句再請家長來電當面溝通",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "方向對，但同理後最好給明確時段更安心。"
      },
      {
        "label": "把家長整頁留言拍照貼到班群請大家評理",
        "tier": "illegal",
        "effects": {
          "trust": -7,
          "climate": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ],
        "note": "公開家長隱私留言侵害權益且嚴重失信。"
      },
      {
        "label": "在聯絡簿同樣寫滿三頁逐條反駁家長說法",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "完全不回應留言假裝沒看到等家長放棄",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_002",
    "cat": "親師",
    "diff": 1,
    "scenario": "晚上十一點班級群組有家長連發訊息追問月考成績，你怎麼處理較妥？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "預先約定群組回覆時間能保住界線，隔日回應兼顧專業與個人作息，不必即時答覆。",
    "choices": [
      {
        "label": "明早回覆並重申群組僅限白天公務聯繫使用",
        "tier": "best",
        "effects": {
          "trust": 4,
          "climate": 4,
          "hp": 2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先簡短說明天回覆成績細節再請家長安心",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "及時安撫好，但仍要守住夜間不長談原則。"
      },
      {
        "label": "半夜立刻一題一題詳細回覆所有成績疑問",
        "tier": "illegal",
        "effects": {
          "hp": -6,
          "climate": -3,
          "trust": -2
        },
        "octalysis": [
          8
        ],
        "note": "養成隨時待命惡例且犧牲教師休息權益。"
      },
      {
        "label": "在群組公開回嗆家長太晚別吵到其他人了",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "直接把愛追問的家長踢出班級群組眼不見",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "cohesion": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_003",
    "cat": "親師",
    "diff": 2,
    "scenario": "班群有家長轉貼未證實訊息說某老師體罰學生，你身為導師怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "對未證實指控不在群組公審，先私下了解事實並引導循正式管道反映，保護各方。",
    "choices": [
      {
        "label": "群組請大家暫緩討論並私訊了解事實再處理",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "honor": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先回一句尚在了解請勿轉傳再私下查證情況",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "止血得當，但別只喊停要給後續查證承諾。"
      },
      {
        "label": "跟著附和爆料順勢公開批評那位被指控老師",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "未查證即公開附和恐構成不實傷害同仁。"
      },
      {
        "label": "在群組要求家長立刻刪文否則就告他妨害",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "裝沒看見讓謠言在群組繼續發酵不去理會",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_004",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長在聯絡簿用紅筆寫下情緒性字眼指責你偏心，你下一步怎麼做？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "面對情緒性指責先不對抗文字，保留紀錄並改約面談釐清具體事件，降低書面衝突。",
    "choices": [
      {
        "label": "保留聯絡簿影本並主動致電約面談釐清誤會",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 3,
          "climate": 3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "聯絡簿簡短致歉造成誤會並提議當面把話講開",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "願溝通很好，但別還沒釐清就先全盤道歉。"
      },
      {
        "label": "把家長紅筆留言塗掉假裝這頁從來沒寫過",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ],
        "note": "湮滅溝通紀錄日後爭議將完全無據可查。"
      },
      {
        "label": "在聯絡簿紅筆回敬指責家長不懂帶班辛苦",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -4
        },
        "octalysis": []
      },
      {
        "label": "把這件事憋在心裡完全不回應也不留紀錄",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_005",
    "cat": "親師",
    "diff": 1,
    "scenario": "多位家長同時私訊你問同一件校外教學費用，你怎麼處理最有效率？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "共通事務統一在群組公告一次說清楚，能減少重複私訊並確保資訊一致透明。",
    "choices": [
      {
        "label": "在班群統一公告費用明細並附上繳費期限說明",
        "tier": "best",
        "effects": {
          "climate": 4,
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先回覆最先私訊者再請他幫忙轉達其他家長",
        "tier": "good",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "省事但靠家長轉述易走樣，仍宜正式公告。"
      },
      {
        "label": "把家長私訊截圖貼班群說別再一直私訊我了",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "公開私訊內容並語帶不耐損及信任與界線。"
      },
      {
        "label": "挑幾位回覆其他人就不回讓他們自己去問",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "乾脆把校外教學費用問題拖到當天再說明",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_006",
    "cat": "親師",
    "diff": 1,
    "scenario": "第一次班親會出席率偏低，你想經營親師關係，開場該如何鋪陳？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "班親會先建立信任與共同目標，分享班級願景與聯繫方式，比逐一點名問題更能拉近距離。",
    "choices": [
      {
        "label": "先分享班級經營願景與暢通的日常聯繫方式",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 4,
          "climate": 3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "開場先請每位家長簡短自我介紹拉近彼此距離",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "破冰不錯，但時間有限仍要先講清楚願景。"
      },
      {
        "label": "一上來就逐一點名通報每個孩子的缺點問題",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ],
        "note": "公開數落學生短處讓家長難堪傷親師信任。"
      },
      {
        "label": "照本宣科念完學校宣導事項就草草宣布散會",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": []
      },
      {
        "label": "把低出席率怪罪家長不重視當面碎念一頓",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_007",
    "cat": "親師",
    "diff": 2,
    "scenario": "班親會上一位家長當眾激動質疑你的作業量太多，現場其他家長都看著，你怎麼接？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "公開質疑先穩住情緒、肯定關心，把細節討論移到會後個別處理，避免會場變成對質場。",
    "choices": [
      {
        "label": "先謝謝關心並提議會後留下來細談作業安排",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "hp": -2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "當場簡短說明作業設計理念再邀其會後續談",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "回應誠懇，但細節別在會場拉太長以免失焦。"
      },
      {
        "label": "當眾反問家長是不是孩子根本不寫才來鬧",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "climate": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ],
        "note": "當眾貶損學生與家長使衝突公開化更難收拾。"
      },
      {
        "label": "脹紅著臉沉默不語任由家長一直數落下去",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -3,
          "hp": -2
        },
        "octalysis": []
      },
      {
        "label": "立刻宣布散會用結束會議來逃避這個質疑",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_008",
    "cat": "親師",
    "diff": 2,
    "scenario": "班親會要選班級家長代表，兩位家長私下都想當而互相較勁，你如何處理？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "幹部產生宜公開透明、程序公正，由家長自願與多數決定，導師居中協調不偏袒任一方。",
    "choices": [
      {
        "label": "說明職責後採公開徵詢與舉手程序公正產生",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "climate": 3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "私下勸其中一位禮讓另一位以免場面尷尬",
        "tier": "good",
        "effects": {
          "cohesion": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "用意良善，但私下喬人選易被質疑不公開。"
      },
      {
        "label": "直接指定跟你交情較好的那位家長當代表",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ],
        "note": "憑私交指派幹部破壞程序公正引發不信任。"
      },
      {
        "label": "乾脆說沒人想當就不選了今年空著也沒差",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -2
        },
        "octalysis": []
      },
      {
        "label": "讓兩位家長自己吵到底吵贏的就當你不管",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_009",
    "cat": "親師",
    "diff": 1,
    "scenario": "班親會中家長提議全班加裝監視器看孩子上課，多數人附和，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "涉及隱私與校規的提案應說明法規限制與程序，不可現場拍板，導向正式管道評估。",
    "choices": [
      {
        "label": "說明涉隱私與校規須循學校程序評估再決定",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 3,
          "climate": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先肯定關心並表示會把提案帶回學校研議",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "願轉達很好，但要說清楚並非班級能自決。"
      },
      {
        "label": "當場答應就裝讓家長隨時連線看班級畫面",
        "tier": "illegal",
        "effects": {
          "trust": -4,
          "honor": -5,
          "hp": -2
        },
        "octalysis": [
          8
        ],
        "note": "擅自承諾裝設侵犯師生隱私且逾越權限。"
      },
      {
        "label": "直接否決提案說這種要求根本莫名其妙",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "含糊帶過不表態讓家長以為你默許這件事",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "honor": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_010",
    "cat": "親師",
    "diff": 1,
    "scenario": "班親會結束後你想延續好不容易建立的氣氛，後續聯繫該怎麼做？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "會後簡要整理共識與聯繫方式發給家長，持續定期分享班級正向訊息，能鞏固信任。",
    "choices": [
      {
        "label": "會後整理會議重點與聯繫方式發給每位家長",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "climate": 3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "挑幾位熱心家長私訊道謝先維繫核心關係",
        "tier": "good",
        "effects": {
          "cohesion": 2,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "維繫核心好，但別讓其他家長感覺被冷落。"
      },
      {
        "label": "把缺席家長名單貼群組點名感謝出席的人",
        "tier": "illegal",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "變相公開點名缺席者使其難堪傷害關係。"
      },
      {
        "label": "覺得開完就沒事了完全不做任何後續聯繫",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": []
      },
      {
        "label": "只把學校制式公告轉發了事不加任何說明",
        "tier": "wrong",
        "effects": {
          "cohesion": -2,
          "climate": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_011",
    "cat": "親師",
    "diff": 2,
    "scenario": "一位高焦慮家長每天傳五六則訊息追問孩子在校一舉一動，你怎麼回應較健康？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "對焦慮家長宜建立固定回報節奏取代即時答覆，給予安全感同時守住合理界線。",
    "choices": [
      {
        "label": "與家長約定每週固定回報取代每日逐則追問",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": 2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先回覆當下疑問再溫和說明老師回覆的時段",
        "tier": "good",
        "effects": {
          "trust": 3,
          "hp": 1
        },
        "octalysis": [
          5
        ],
        "note": "先安撫再立界線可以，但要實際守住時段。"
      },
      {
        "label": "為求安寧乾脆全天有問必答即時回報所有事",
        "tier": "illegal",
        "effects": {
          "hp": -6,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "無限度即時回應強化焦慮且耗盡教師心力。"
      },
      {
        "label": "已讀不回讓家長知難而退自己慢慢就放棄",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "直接回家長你太焦慮了應該先去看看醫生",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_012",
    "cat": "親師",
    "diff": 2,
    "scenario": "孩子多次未交作業，放任型家長回說我管不動你們老師看著辦，你怎麼接？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "面對放任家長不爭責任歸屬，提出具體可行的親師分工小目標，邀其一起承擔最有效。",
    "choices": [
      {
        "label": "提一個家長在家只需簽名確認的小步驟共管",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "roleModel": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先同理家長的無力感再一起找最小可行做法",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "同理對，但要落到具體動作否則仍是空談。"
      },
      {
        "label": "回家長那就隨便他吧反正以後是他自己的事",
        "tier": "illegal",
        "effects": {
          "roleModel": -5,
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "放棄學生並消極對待等於默許問題惡化。"
      },
      {
        "label": "把孩子留校到很晚逼他補完才准回家了事",
        "tier": "wrong",
        "effects": {
          "hp": -3,
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "聯絡簿天天記一筆未交但從不主動聯繫家長",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_013",
    "cat": "親師",
    "diff": 3,
    "scenario": "情緒化家長一接電話就大吼大叫指責你害他孩子，你當下第一步該怎麼做？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "面對失控情緒先穩定自己、傾聽不對撞，必要時暫停約改期，保留紀錄勿在氣頭上承諾。",
    "choices": [
      {
        "label": "先穩住語氣傾聽不反駁待情緒緩和再談事實",
        "tier": "best",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "表示理解他很生氣並提議改約時間冷靜再談",
        "tier": "good",
        "effects": {
          "trust": 3,
          "hp": -1
        },
        "octalysis": [
          5
        ],
        "note": "暫停是好牌，但別讓家長覺得你在敷衍逃避。"
      },
      {
        "label": "為平息怒火當場順著情緒承諾一切都聽他的",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ],
        "note": "氣頭上亂承諾日後跳票將更失信於家長。"
      },
      {
        "label": "跟著音量拉高與家長在電話裡互相對吼起來",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -4,
          "hp": -3
        },
        "octalysis": []
      },
      {
        "label": "一句話不說直接把電話掛掉留家長在線上",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_014",
    "cat": "親師",
    "diff": 2,
    "scenario": "比較型家長一直拿隔壁班進度與你班相比質疑你教太慢，你如何回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "對比較焦慮回到自己班級學習目標與孩子個別狀況，用具體進展取代與他班的橫向比較。",
    "choices": [
      {
        "label": "把焦點拉回孩子本身的學習目標與實際進展",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先說明班級進度安排再聊孩子可加強的地方",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "解釋合理，但別陷入逐項跟他班比進度泥沼。"
      },
      {
        "label": "回嗆那要不要把孩子轉去你說的那個好班",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "cohesion": -4
        },
        "octalysis": [
          8
        ],
        "note": "賭氣式回應推開家長並傷害親師合作關係。"
      },
      {
        "label": "乾脆承諾趕進度硬把課程加快塞給全班學生",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "hp": -3,
          "roleModel": -2
        },
        "octalysis": []
      },
      {
        "label": "敷衍說每班不一樣啦就不再多做任何說明",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_015",
    "cat": "親師",
    "diff": 3,
    "scenario": "孩子在校打同學，護短家長堅稱一定是對方先動手我家孩子不會錯，你怎麼處理？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "面對護短先肯定愛護之情，再以具體事證與第三方紀錄客觀陳述，把焦點導向後續教育。",
    "choices": [
      {
        "label": "先肯定愛護再用客觀事證一起談後續怎麼教",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 3,
          "roleModel": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "同理護子心情後提議調閱紀錄一起釐清經過",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "查證方向對，但別讓家長覺得你預設他孩子錯。"
      },
      {
        "label": "為息事寧人乾脆不追究就當這件事沒發生過",
        "tier": "illegal",
        "effects": {
          "roleModel": -5,
          "trust": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "和稀泥放掉教育時機也對受害學生不公平。"
      },
      {
        "label": "直接斷言就是你家孩子先動手沒什麼好說的",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -4
        },
        "octalysis": []
      },
      {
        "label": "把兩家長找來當面對質讓他們自己吵清楚",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_016",
    "cat": "親師",
    "diff": 2,
    "scenario": "孩子狀況需要溝通，但家長長期不接電話不回訊息也不來校，你怎麼推進？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "對失聯家長改變管道並留下正式紀錄，必要時透過導師通知書或學校行政協助建立聯繫。",
    "choices": [
      {
        "label": "換多元管道並以書面通知留紀錄再請行政協助",
        "tier": "best",
        "effects": {
          "trust": 4,
          "cohesion": 3,
          "honor": 3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先試不同時段與管道聯繫再評估是否需家訪",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "鍥而不捨好，但每次嘗試都要留下聯繫紀錄。"
      },
      {
        "label": "反正聯絡不上就放著不管把責任都推給家長",
        "tier": "illegal",
        "effects": {
          "roleModel": -4,
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "放棄聯繫等於放棄學生且事後無據自保。"
      },
      {
        "label": "直接在班群點名這位家長都不回訊息很誇張",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "傳一封很長的訊息抱怨後就再也不聯絡了",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_017",
    "cat": "親師",
    "diff": 2,
    "scenario": "焦慮家長要求你每天回報孩子各科小考分數好掌握升學落點，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "用定期成績彙整與學習趨勢取代每日分數轟炸，既滿足知情需求又不助長分數焦慮。",
    "choices": [
      {
        "label": "改以定期成績彙整與學習趨勢取代每日回報",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 3,
          "hp": 2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先答應階段性提供成績再聊如何看待小考分數",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "折衷可行，但要把焦點帶到趨勢而非單次分數。"
      },
      {
        "label": "照單全收每天放學前傳齊所有科目小考成績",
        "tier": "illegal",
        "effects": {
          "hp": -5,
          "climate": -2
        },
        "octalysis": [
          8
        ],
        "note": "每日分數轟炸放大焦慮也加重教師負擔。"
      },
      {
        "label": "回家長分數有什麼好天天看到時候就知道了",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "乾脆把全班小考成績都公布讓家長自己去看",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_018",
    "cat": "親師",
    "diff": 2,
    "scenario": "孩子沉迷手遊成績下滑，放任家長卻回說在學校的事你們老師要負責，你怎麼接？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "不爭辯責任，把在家與在校能各自做的事拆開來談，邀家長共擔最小可行的家庭約定。",
    "choices": [
      {
        "label": "把在校與在家能做的事分開談並邀家長共擔",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "roleModel": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先理解家長的難處再提議一個簡單的家庭約定",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "從小約定切入好，但要追蹤落實免得又落空。"
      },
      {
        "label": "回家長孩子沉迷手機那是你家教問題別怪學校",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ],
        "note": "互推責任激化對立無助於改善孩子狀況。"
      },
      {
        "label": "直接沒收孩子手機到學期末逼他專心讀書",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "hp": -2,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "覺得反正家長不配合就乾脆放著不再處理了",
        "tier": "wrong",
        "effects": {
          "roleModel": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_019",
    "cat": "親師",
    "diff": 3,
    "scenario": "放學時情緒化家長衝到教室門口當著學生面大聲咆哮指責你，你當下怎麼做？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "現場先護住學生並把家長引離公開場合到辦公室談，必要時請行政在場，事後留紀錄。",
    "choices": [
      {
        "label": "先安頓學生再把家長引到辦公室並請行政在場",
        "tier": "best",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "平靜請家長換到旁邊空間談避免影響到孩子",
        "tier": "good",
        "effects": {
          "trust": 3,
          "hp": -2
        },
        "octalysis": [
          5
        ],
        "note": "移開現場對，但獨自面對失控者最好有人陪同。"
      },
      {
        "label": "當著全班學生的面跟家長激烈互相對罵起來",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "climate": -5,
          "roleModel": -4
        },
        "octalysis": [
          8
        ],
        "note": "在學生前對罵嚴重損害師道且傷害孩子。"
      },
      {
        "label": "嚇得轉身躲進教室鎖門把家長丟在門口不管",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3,
          "hp": -2
        },
        "octalysis": []
      },
      {
        "label": "直接報警把家長當場帶走也不先了解原因",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_020",
    "cat": "親師",
    "diff": 2,
    "scenario": "比較型家長在班群公開說某科老師不如別班、暗示換老師，你身為導師怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "不在群組公開評論同事，先私下了解訴求並引導循正式管道反映，維護同仁與班級和諧。",
    "choices": [
      {
        "label": "群組請改私下談並引導家長走正式反映管道",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 4,
          "climate": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先在群組緩頰再私訊家長了解真正的訴求",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "緩頰得宜，但別在群組替同事打包票過頭。"
      },
      {
        "label": "跟著在群組附和那位科任老師確實教得不好",
        "tier": "illegal",
        "effects": {
          "honor": -6,
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "公開附和貶低同事破壞同仁信任與校園倫理。"
      },
      {
        "label": "在群組嗆家長不滿意大可自己去教教看啊",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "假裝沒看到放任家長在群組繼續帶風向",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_021",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長要求把孩子永久排在第一排正中央並指定遠離某些同學，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "座位涉全班公平與輪換原則，可說明制度並就學習需求個別調整，但不接受指名排擠同學。",
    "choices": [
      {
        "label": "說明輪換原則並就學習需求做合理個別調整",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 3,
          "climate": 3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先了解孩子實際需求再評估在制度內怎麼安排",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "願評估好，但要守住不指名排擠同學的底線。"
      },
      {
        "label": "照家長指定固定座位並把那些同學調得遠遠的",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "cohesion": -4,
          "trust": -2
        },
        "octalysis": [
          8
        ],
        "note": "依家長指名排擠特定學生製造標籤與不公。"
      },
      {
        "label": "直接回家長座位是我排的家長不要管那麼多",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "嫌麻煩乾脆讓孩子自己每天想坐哪就坐哪",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_022",
    "cat": "親師",
    "diff": 3,
    "scenario": "家長施壓要你把孩子的段考作文分數調高幾分以利升學，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "成績評定須客觀公正，不因施壓更改；可說明評分標準並提供具體加強建議，守住專業界線。",
    "choices": [
      {
        "label": "婉拒更改並說明評分標準再給具體加強建議",
        "tier": "best",
        "effects": {
          "trust": 4,
          "honor": 5,
          "roleModel": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先聽家長顧慮再清楚解釋分數無法因要求調整",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "態度溫和好，但要明確讓家長知道不能更改。"
      },
      {
        "label": "為避免麻煩偷偷把孩子作文分數往上加幾分",
        "tier": "illegal",
        "effects": {
          "honor": -7,
          "trust": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ],
        "note": "私改成績破壞評量公正屬嚴重違反專業倫理。"
      },
      {
        "label": "回家長分數就是這樣不爽你去跟校長講啊",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "含糊答應再看看讓家長誤以為分數有望調整",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_023",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長要求你每天放學後順路開車載他孩子回家，說反正同方向，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "私下接送涉責任與安全風險，宜婉拒並協助提供正規交通或課後安排資訊，守住職務界線。",
    "choices": [
      {
        "label": "婉拒私下接送並協助提供正規的交通安排資訊",
        "tier": "best",
        "effects": {
          "trust": 4,
          "honor": 4,
          "hp": 2
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先謝謝信任再說明私下接送的責任風險難承擔",
        "tier": "good",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          5
        ],
        "note": "解釋清楚好，但要同時給家長替代方案才安心。"
      },
      {
        "label": "不好意思拒絕就答應天天用自己的車接送孩子",
        "tier": "illegal",
        "effects": {
          "hp": -4,
          "honor": -3,
          "trust": -2
        },
        "octalysis": [
          8
        ],
        "note": "私下載送學生一旦出事責任與糾紛難以承擔。"
      },
      {
        "label": "直接回家長那不是我的事你自己想辦法解決",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "先答應幾次之後再找藉口不載讓家長空等",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_024",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長要求你下班後免費替他孩子一對一補課，否則就說你不盡責，你怎麼回應？",
    "law": "教師法（教師權益）",
    "explain": "課後義務補課非教師應盡之責，可說明正規補救教學管道，守住個人時間與權益不被情緒綁架。",
    "choices": [
      {
        "label": "說明可循校內補救教學管道並婉拒私下一對一",
        "tier": "best",
        "effects": {
          "trust": 4,
          "honor": 4,
          "hp": 2
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先理解家長期待再介紹學校既有的補救資源",
        "tier": "good",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          5
        ],
        "note": "引導資源好，但要明說私下免費補課不在義務內。"
      },
      {
        "label": "被話術綁架就答應每天下班留下來免費補課",
        "tier": "illegal",
        "effects": {
          "hp": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ],
        "note": "屈服情緒勒索犧牲個人權益且難以為繼。"
      },
      {
        "label": "回家長不盡責隨便你講要告就去告我不怕",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "嘴上答應卻一直找理由拖延始終沒真的補",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_025",
    "cat": "親師",
    "diff": 1,
    "scenario": "家長要求你把全班同學的住址電話整理成通訊錄發到班群方便聯絡，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "個資未經同意不得彙整外流，應婉拒並說明隱私規範，改以自願留資或學校窗口替代。",
    "choices": [
      {
        "label": "婉拒並說明個資規範改採自願留資的方式聯絡",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 4,
          "climate": 2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先肯定立意再解釋未經同意不能彙整發通訊錄",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "解釋到位，但可順帶提供合規的替代聯絡方式。"
      },
      {
        "label": "覺得方便就把全班個資整理成表發到班群裡",
        "tier": "illegal",
        "effects": {
          "honor": -7,
          "trust": -4
        },
        "octalysis": [
          8
        ],
        "note": "未經同意外流學生個資違反隱私保護規定。"
      },
      {
        "label": "回家長這種事我哪有空弄你自己去問同學啦",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -2
        },
        "octalysis": []
      },
      {
        "label": "含糊說再看看卻放著不處理讓家長一直催",
        "tier": "wrong",
        "effects": {
          "trust": -2,
          "climate": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_026",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長要求孩子段考座位、分組、值日都享特殊待遇，理由是孩子比較敏感，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "對特殊需求先了解實情、提供合理支持，但全面特權違反公平，須在制度內個別協助不破壞公平。",
    "choices": [
      {
        "label": "先了解需求在制度內給合理支持不開特權",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "climate": 3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "同理孩子敏感後逐項說明哪些可調哪些須一致",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "區分得宜，但要把不能特權的理由講到家長懂。"
      },
      {
        "label": "為省事全部答應讓這孩子事事都享特殊待遇",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ],
        "note": "全面特權破壞全班公平也讓孩子失去學習機會。"
      },
      {
        "label": "一口回絕說敏感是藉口大家都要一視同仁啦",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "把孩子敏感的事在班上講出來請同學多包涵",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_027",
    "cat": "親師",
    "diff": 3,
    "scenario": "你收到通知，家長已向教育局信箱投訴你管教不當，你接到消息後第一步該怎麼做？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "接獲投訴先冷靜不對外回擊，完整蒐集與保全相關紀錄，依學校程序配合說明並尋求行政協助。",
    "choices": [
      {
        "label": "冷靜保全相關紀錄並依程序配合學校具實說明",
        "tier": "best",
        "effects": {
          "trust": 4,
          "honor": 4,
          "hp": -2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先整理事件經過與證據再與學校行政討論回應",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "備齊資料好，但回應前務必先與學校統一口徑。"
      },
      {
        "label": "氣不過直接打給家長質問他為什麼要去告你",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -3,
          "hp": -3
        },
        "octalysis": [
          8
        ],
        "note": "私下質問投訴家長易激化衝突並落人口實。"
      },
      {
        "label": "在班群或臉書公開抱怨被家長惡意投訴很冤",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "嚇到什麼都不做也不告訴學校只能私下煩惱",
        "tier": "wrong",
        "effects": {
          "hp": -4,
          "honor": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_028",
    "cat": "親師",
    "diff": 3,
    "scenario": "家長投訴信進了校長信箱，校長請你說明，你準備回應時最該把握什麼原則？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "向行政說明應據實、聚焦事實與紀錄，不情緒化攻擊家長，並提出後續改善與溝通方案展現專業。",
    "choices": [
      {
        "label": "據實聚焦事實與紀錄並提出後續改善溝通方案",
        "tier": "best",
        "effects": {
          "honor": 5,
          "trust": 3,
          "roleModel": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先客觀陳述經過再說明自己願如何調整與跟進",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "陳述清楚好，但別只解釋過去要給明確改善步驟。"
      },
      {
        "label": "向校長極力抹黑這位家長是出名的奧客難搞",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "情緒化抹黑家長無助釐清反顯不夠專業沉穩。"
      },
      {
        "label": "回應時隱瞞對自己不利的細節只挑好的講",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得委屈就在說明會上一直哭訴不談事實",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "trust": -2,
          "hp": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_029",
    "cat": "親師",
    "diff": 3,
    "scenario": "家長散布不實訊息指控你收紅包圖利，事實上從未發生，你該如何因應？",
    "law": "教師法（教師權益）",
    "explain": "面對不實指控保全證據、循正式管道澄清並請學校與教師組織協助，必要時保留法律途徑，勿網路對戰。",
    "choices": [
      {
        "label": "保全證據循正式管道澄清並請學校與工會協助",
        "tier": "best",
        "effects": {
          "honor": 5,
          "trust": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先冷靜蒐證再透過學校行政正式發聲澄清事實",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "蒐證澄清對，但發聲要走正式管道而非個人開戰。"
      },
      {
        "label": "氣到在社群發長文點名家長造謠並公開對嗆",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "climate": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ],
        "note": "公開對戰造謠者易失焦且可能反陷自己於不利。"
      },
      {
        "label": "覺得清者自清就完全不澄清也不留任何證據",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "私下求家長別再說了願意賠錢請他撤回指控",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_030",
    "cat": "親師",
    "diff": 3,
    "scenario": "同一家長連續數週在不同管道發文攻擊你，內容反覆且情緒激烈，你怎麼自處與因應？",
    "law": "教師法（教師權益）",
    "explain": "面對持續攻擊要照顧自身身心、完整存證並交由學校與教師組織循程序處理，避免單獨硬扛或回擊。",
    "choices": [
      {
        "label": "照顧身心並完整存證交學校與工會循程序處理",
        "tier": "best",
        "effects": {
          "honor": 4,
          "trust": 3,
          "hp": -2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先逐則截圖保存再請學校行政介入協助處理",
        "tier": "good",
        "effects": {
          "honor": 3,
          "hp": -1
        },
        "octalysis": [
          5
        ],
        "note": "存證與求援都對，但別忘了同步照顧自己情緒。"
      },
      {
        "label": "忍無可忍就一一回覆每篇攻擊文跟家長筆戰",
        "tier": "illegal",
        "effects": {
          "hp": -5,
          "honor": -3,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "陷入逐篇筆戰耗損心力且讓事態持續延燒。"
      },
      {
        "label": "獨自硬扛什麼都不說也不求助結果身心俱疲",
        "tier": "wrong",
        "effects": {
          "hp": -5,
          "honor": -2
        },
        "octalysis": []
      },
      {
        "label": "乾脆封鎖所有管道假裝沒事卻沒留任何紀錄",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_031",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長在地方社團公開貼文罵你，底下一堆人起鬨，朋友勸你po文反擊，你怎麼做？",
    "law": "教師法（教師權益）",
    "explain": "公開回擊只會擴大延燒，宜保留截圖循正式管道處理並請學校協助澄清，自身發言保持克制。",
    "choices": [
      {
        "label": "保留截圖循正式管道處理並請學校出面澄清",
        "tier": "best",
        "effects": {
          "honor": 5,
          "hp": 2,
          "trust": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先按下不回應冷處理再與學校討論澄清做法",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "冷處理對，但要主動推進澄清別讓謠言坐大。"
      },
      {
        "label": "立刻在同個社團發文逐點反擊把家長罵回去",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "climate": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ],
        "note": "公開反擊使衝突擴大也讓自己陷入網路口水戰。"
      },
      {
        "label": "揪同事朋友一起到貼文底下幫你圍剿那家長",
        "tier": "wrong",
        "effects": {
          "honor": -5,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "私訊每個按讚的人解釋事情真相到深夜還在傳",
        "tier": "wrong",
        "effects": {
          "hp": -4,
          "honor": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_032",
    "cat": "親師",
    "diff": 3,
    "scenario": "家長的不實指控已在班群擴散，其他家長開始動搖懷疑你，你如何穩住班級信任？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "對動搖中的家長以事實與一貫作為說話，透過正式說明與學校背書澄清，持續用行動重建信任。",
    "choices": [
      {
        "label": "以事實與一貫作為說話並請學校正式說明背書",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 3,
          "cohesion": 2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先在群組沉穩澄清要點再私下逐一安定家長",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "雙線並進好，但澄清要點要簡潔別愈描愈黑。"
      },
      {
        "label": "在群組情緒崩潰大吐苦水說自己有多麼委屈",
        "tier": "illegal",
        "effects": {
          "trust": -4,
          "honor": -3,
          "hp": -2
        },
        "octalysis": [
          8
        ],
        "note": "情緒潰堤反讓家長更不安也失去專業說服力。"
      },
      {
        "label": "把帶頭懷疑的幾位家長一個個踢出班級群組",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "cohesion": -5
        },
        "octalysis": []
      },
      {
        "label": "什麼都不解釋只盼時間久了家長自己會忘記",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_033",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長問你如果對學校處分不服該怎麼辦，你身為導師該如何正確引導？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "導師應據實告知正式的申訴與陳情管道與期限，引導循制度救濟，不代為評斷或私下喬處理。",
    "choices": [
      {
        "label": "據實告知正式申訴陳情管道與期限引導循制度",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 4,
          "cohesion": 2
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先安撫情緒再協助家長找到正確的申訴窗口",
        "tier": "good",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          5
        ],
        "note": "協助找窗口好，但別替家長預設結果或下定論。"
      },
      {
        "label": "私下說你跟主任很熟我幫你喬一喬就好了啦",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "私下喬事繞過正式程序破壞制度公正性。"
      },
      {
        "label": "回家長這種事我不清楚你自己去問學校吧",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "勸家長算了別申訴免得得罪學校以後更難混",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_034",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長情緒激動想立刻衝去教育局陳情，你認為事情其實還能溝通，你怎麼引導？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "尊重家長救濟權的同時，說明校內溝通管道仍可先試，提供完整程序資訊讓家長知情後自行選擇。",
    "choices": [
      {
        "label": "尊重其權利並說明校內管道仍可先試由其選擇",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 3,
          "honor": 3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先同理情緒再完整告知校內外兩種程序的差別",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "資訊給足好，但別讓家長覺得你在阻止他陳情。"
      },
      {
        "label": "極力恐嚇家長說你去陳情對孩子絕對沒好處",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ],
        "note": "以孩子處境威嚇阻撓救濟侵害家長正當權利。"
      },
      {
        "label": "不耐煩說那你愛去就去吧反正我也管不著",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "為了攔住家長亂承諾保證一定給他滿意結果",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_035",
    "cat": "親師",
    "diff": 3,
    "scenario": "學校未經查證就要對你做出處分，你認為程序不公，你身為教師可以怎麼正當主張權益？",
    "law": "教師法（教師權益）",
    "explain": "教師面對不公處分可依法循申訴或申評會等正式管道主張權益，並請教師組織協助，不宜消極隱忍或情緒化。",
    "choices": [
      {
        "label": "依法循申訴管道主張權益並請教師組織協助",
        "tier": "best",
        "effects": {
          "honor": 5,
          "trust": 3,
          "hp": -2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先完整保全紀錄再諮詢工會了解可行救濟步驟",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "蒐證與諮詢對，但記得在期限內提出別錯過時效。"
      },
      {
        "label": "私下找關係施壓承辦人要他偷偷把處分撤掉",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "私下施壓撤案繞過程序反而損及自身正當性。"
      },
      {
        "label": "覺得反抗沒用就摸摸鼻子默默接受不公處分",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "hp": -3
        },
        "octalysis": []
      },
      {
        "label": "氣到在校務會議上拍桌大罵行政完全不講理",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "climate": -3,
          "hp": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_036",
    "cat": "親師",
    "diff": 2,
    "scenario": "親師溝通開始出現爭議跡象，你想保護自己也保護學生，平時該如何保全溝通紀錄？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "養成留存聯繫紀錄與重要對話摘要的習慣，採正式管道溝通並客觀記錄，爭議時才有可信依據。",
    "choices": [
      {
        "label": "平時即以正式管道溝通並客觀留存對話與紀錄",
        "tier": "best",
        "effects": {
          "honor": 5,
          "trust": 3,
          "roleModel": 2
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "重要對話後補一封文字摘要請家長確認再存檔",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "事後確認很好，但要長期一致地做才有用。"
      },
      {
        "label": "偷偷全程錄音每位家長卻完全不告知對方",
        "tier": "illegal",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "未告知全程偷錄涉隱私爭議反讓自己理虧。"
      },
      {
        "label": "覺得記紀錄很麻煩全憑印象出事再回想就好",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "把所有對話紀錄存在私人手機從不另外備份",
        "tier": "wrong",
        "effects": {
          "honor": -2,
          "trust": -1
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_037",
    "cat": "親師",
    "diff": 2,
    "scenario": "離異父母都來要孩子在校資訊，且彼此互不往來、各執一詞，你該如何處理聯繫？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "應釐清監護與聯繫權責，對雙方提供一致客觀的學校資訊，不捲入家庭糾紛也不偏袒任一方。",
    "choices": [
      {
        "label": "釐清監護權責後對雙方提供一致客觀校務資訊",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 4,
          "cohesion": 2
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先了解法定監護安排再決定如何分別回應雙方",
        "tier": "good",
        "effects": {
          "trust": 3,
          "honor": 2
        },
        "octalysis": [
          5
        ],
        "note": "釐清權責對，但回覆內容要對雙方保持一致。"
      },
      {
        "label": "選邊站只跟你覺得比較好的那位家長講消息",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "honor": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ],
        "note": "選邊偏袒一方易捲入家庭糾紛並引發爭議。"
      },
      {
        "label": "嫌麻煩乾脆兩邊都不回讓他們自己去搞清楚",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "把另一方說的壞話原封不動轉述給對方知道",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_038",
    "cat": "親師",
    "diff": 1,
    "scenario": "單親家長獨力照顧孩子常無法到校開會也少回訊息，你想兼顧溝通與體諒，怎麼做？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "體諒單親家長處境，提供彈性溝通方式與簡要重點，並連結校內資源支持，不以缺席論斷其用心。",
    "choices": [
      {
        "label": "提供彈性聯繫方式與重點摘要並連結校內資源",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "climate": 2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先理解其時間壓力再約最方便的時段簡短聯繫",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "體諒到位，但聯繫仍要把孩子重點交代清楚。"
      },
      {
        "label": "在心裡認定這家長不負責任對孩子也不上心",
        "tier": "illegal",
        "effects": {
          "trust": -4,
          "cohesion": -3,
          "roleModel": -2
        },
        "octalysis": [
          8
        ],
        "note": "以缺席論斷家長用心既不公也傷害親師關係。"
      },
      {
        "label": "照樣只用制式會議通知缺席就記為家長不配合",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "在班上不經意提起這孩子是單親要同學多體諒",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_039",
    "cat": "親師",
    "diff": 2,
    "scenario": "孩子由年邁阿嬤照顧，阿嬤不識字也不會用手機，傳統聯繫管道都行不通，你怎麼辦？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "針對隔代教養調整溝通方式，採口頭電話或當面、簡明關鍵訊息，必要時連結社工與校內支援。",
    "choices": [
      {
        "label": "改用電話或當面口頭溝通並連結社工校內支援",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "roleModel": 3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先找到阿嬤聽得懂的方式再把重點講到她明白",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "用心調整好，但複雜事務仍宜留書面或請人協助。"
      },
      {
        "label": "認定這種家庭沒救乾脆放著不再費心去聯繫",
        "tier": "illegal",
        "effects": {
          "roleModel": -5,
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ],
        "note": "放棄聯繫弱勢家庭等於放掉最需要幫助的孩子。"
      },
      {
        "label": "照寄看不懂的書面通知阿嬤沒回就當她已讀",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "要孩子自己回去轉達把溝通責任全推給學生",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "roleModel": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_040",
    "cat": "親師",
    "diff": 2,
    "scenario": "孩子來自重組家庭，繼父母與生父母對聯繫權各有意見，你如何拿捏溝通分際？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "以孩子最佳利益為本，依法定權責確認聯繫對象，保持中立一致，不傳話評斷各方家庭關係。",
    "choices": [
      {
        "label": "以孩子利益為本依法定權責確認聯繫對象",
        "tier": "best",
        "effects": {
          "trust": 5,
          "honor": 4,
          "cohesion": 2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先確認誰具聯繫權再對其提供一致的校務資訊",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "確認權責對，但孩子的感受也要細膩地照顧到。"
      },
      {
        "label": "好奇追問孩子家裡複雜關係還在班上閒聊起來",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ],
        "note": "窺探並議論學生家庭隱私嚴重傷害孩子尊嚴。"
      },
      {
        "label": "覺得太複雜誰來問都一律不回省得惹麻煩上身",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "在不同大人之間來回傳話結果話越傳越走樣",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_041",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長為一件小事不先找你，直接打給校長施壓要校長處理，你得知後怎麼回應較成熟？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "不因被越級而動氣，主動向行政據實說明並表達願直接溝通，同時建立讓家長願先找你的信任。",
    "choices": [
      {
        "label": "不動氣向行政說明並主動表達願與家長溝通",
        "tier": "best",
        "effects": {
          "trust": 4,
          "honor": 4,
          "cohesion": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先了解家長為何不找你再調整自己的溝通方式",
        "tier": "good",
        "effects": {
          "trust": 3,
          "cohesion": 2
        },
        "octalysis": [
          5
        ],
        "note": "自我檢視好，但也要讓家長知道直接找你更快。"
      },
      {
        "label": "私下責怪家長為什麼不先找我害我被校長唸",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "私下質問越級家長易生對立也顯得心胸狹窄。"
      },
      {
        "label": "從此對這位家長與孩子都擺臉色冷淡相待",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得很沒面子乾脆什麼都不解釋擺爛給人看",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_042",
    "cat": "親師",
    "diff": 2,
    "scenario": "熱心家長要求參與你的班級分組、排座位甚至幹部安排，事事都想插手，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "肯定家長熱心並劃清班務專業權責，邀其在適當範圍協助，但教學與分組決定權仍在教師。",
    "choices": [
      {
        "label": "肯定熱心並劃清權責邀家長在適當範圍協助",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "honor": 3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "先謝謝家長再說明哪些事老師須自行決定",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "界線講清楚好，但要給家長能實際幫忙的出口。"
      },
      {
        "label": "怕得罪人就放手讓家長主導分組與座位安排",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "cohesion": -3,
          "roleModel": -3
        },
        "octalysis": [
          8
        ],
        "note": "讓家長主導班務逾越權責也失去教學專業主導。"
      },
      {
        "label": "板起臉回家長班上的事輪不到家長來插手管",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "表面客氣其實完全不理把家長的意見全當空氣",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_043",
    "cat": "親師",
    "diff": 3,
    "scenario": "家長要求你處分另一位他看不順眼的同學，否則就說你放任霸凌不管，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "管教權責在教師，須依事實與校規處理，不因家長指名而對特定學生施罰，並澄清霸凌定義與處理程序。",
    "choices": [
      {
        "label": "說明須依事實與校規處理不因指名而處分學生",
        "tier": "best",
        "effects": {
          "honor": 5,
          "trust": 3,
          "cohesion": 3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先了解家長擔憂再說明會循程序查證再做判斷",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "查證承諾好，但要清楚講出不會配合指名開罰。"
      },
      {
        "label": "為堵住家長嘴就真的隨便找理由處分那位同學",
        "tier": "illegal",
        "effects": {
          "honor": -6,
          "climate": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ],
        "note": "依家長指名懲處無辜學生嚴重違反管教公正。"
      },
      {
        "label": "回家長那是別人家的事你管好自己孩子就好",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "被霸凌兩字嚇到就承諾一定嚴懲對方來息事",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_044",
    "cat": "親師",
    "diff": 2,
    "scenario": "家長私下加你LINE，常深夜傳訊要求孩子特殊照顧並暗示會回報你，你怎麼回應？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "個人帳號的私下特別請託宜婉拒並導回正式公務管道，對所有學生一視同仁，不接受任何利益暗示。",
    "choices": [
      {
        "label": "婉拒私下請託導回公務管道並對全班一視同仁",
        "tier": "best",
        "effects": {
          "honor": 5,
          "trust": 4,
          "climate": 2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先謝謝信任再說明特殊照顧一致不能私下談",
        "tier": "good",
        "effects": {
          "honor": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ],
        "note": "守界線好，但要明確讓家長知道暗示利益沒用。"
      },
      {
        "label": "默默收下好處並真的私下給那孩子特別待遇",
        "tier": "illegal",
        "effects": {
          "honor": -8,
          "trust": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ],
        "note": "收受利益給予特權嚴重違反教師專業與廉潔。"
      },
      {
        "label": "不好意思已讀不回卻也不講清楚讓家長一直猜",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -2
        },
        "octalysis": []
      },
      {
        "label": "把家長深夜訊息截圖貼到班群公開取笑一番",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "pt_045",
    "cat": "親師",
    "diff": 3,
    "scenario": "親師會談中家長越講越激動逼近失控邊緣，你也快撐不住，當下最該做的是什麼？",
    "law": "（親師溝通與校內處理程序）",
    "explain": "察覺雙方情緒臨界時主動喊暫停、改期再談，並請學校行政或同仁在場協助，先穩住自己再處理事情。",
    "choices": [
      {
        "label": "主動喊暫停改期再談並請行政或同仁到場協助",
        "tier": "best",
        "effects": {
          "trust": 4,
          "climate": 3,
          "hp": -2
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先深呼吸放慢語速提議休息一下緩和雙方情緒",
        "tier": "good",
        "effects": {
          "climate": 3,
          "hp": -1
        },
        "octalysis": [
          5
        ],
        "note": "緩衝得當，但情勢真失控仍要找人陪同較安全。"
      },
      {
        "label": "撐著面子硬談下去結果兩人都情緒徹底失控",
        "tier": "illegal",
        "effects": {
          "trust": -4,
          "climate": -4,
          "hp": -4
        },
        "octalysis": [
          8
        ],
        "note": "明知臨界仍硬談易釀衝突也傷害彼此關係。"
      },
      {
        "label": "丟下一句話不想談了就起身走人留家長在場",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "為了趕快結束什麼條件都先答應下來再說",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3,
          "hp": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_001",
    "cat": "經營",
    "diff": 1,
    "scenario": "開學第一週要編排全班座位，你打算怎麼安排每個人的位置？",
    "law": "（班級自治、民主參與）",
    "explain": "先公布視力身高等客觀原則，再徵詢學生意願，兼顧公平與被尊重感。",
    "choices": [
      {
        "label": "依視力身高先公布原則再徵詢學生意願",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 5,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "老師先排好草稿再開放個別微調的申請",
        "tier": "good",
        "note": "有兼顧效率，但學生參與感略少一些。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把愛講話的學生單獨調到最角落去孤立",
        "tier": "illegal",
        "note": "公開孤立特定學生，傷害人格與班級信任。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "完全照月考成績高低從前面排到後面",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "讓學生自己隨意選位子不做任何的介入",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_002",
    "cat": "經營",
    "diff": 2,
    "scenario": "有家長私下要求把孩子調到第一排好專心，但前排已滿，你怎麼處理？",
    "law": "（班級經營、公平原則）",
    "explain": "說明現有編排原則並安排定期輪調，讓特殊需求被照顧又不獨厚個人。",
    "choices": [
      {
        "label": "說明排座原則並納入下次定期輪調安排",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "先觀察孩子上課狀況再決定要不要調整",
        "tier": "good",
        "note": "態度謹慎，但家長當下會覺得被拖延。",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "立刻把別人換到後排空出前排給這孩子",
        "tier": "illegal",
        "note": "因單一家長施壓而犧牲他人，明顯偏心。",
        "effects": {
          "climate": -6,
          "trust": -6
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接回家長座位沒辦法動請自己想辦法",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "把所有座位打散重排只為遷就這個請求",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_003",
    "cat": "經營",
    "diff": 2,
    "scenario": "班上小團體常黏在一起聊天影響上課，月底要重排座位該怎麼做？",
    "law": "（班級經營、學習秩序）",
    "explain": "用抽籤或主題分組打散小團體，並對全班說明理由，避免被當成針對。",
    "choices": [
      {
        "label": "用公開抽籤打散小團體並向全班說明用意",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          7
        ]
      },
      {
        "label": "保留座位但把最吵的兩人前後分開來坐",
        "tier": "good",
        "note": "影響最小，但治標沒處理整個團體互動。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "只罰其中一個你最看不順眼的去坐講台",
        "tier": "illegal",
        "note": "挑單一學生公開處罰，標籤化又不公平。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾罵他們是壞學生再硬把座位拆開來",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "睜一隻眼閉一隻眼乾脆都不去更動座位",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_004",
    "cat": "經營",
    "diff": 1,
    "scenario": "新學期要選班級幹部，幾乎沒人願意舉手自願，你會怎麼推動選舉？",
    "law": "（民主法治、班級自治）",
    "explain": "說明各幹部職責與成長機會，開放自薦與推薦並無記名投票，建立民主氛圍。",
    "choices": [
      {
        "label": "先說明職責與收穫再開放自薦推薦投票",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          3
        ]
      },
      {
        "label": "請上學期表現好的同學先示範自我推薦",
        "tier": "good",
        "note": "能帶動氣氛，但小心變成少數人的舞台。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "直接指定幾個成績好的學生擔任正副班長",
        "tier": "illegal",
        "note": "剝奪全班投票權，幹部缺乏民主正當性。",
        "effects": {
          "cohesion": -5,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "沒人選就抽籤抽到誰就硬要誰做到學期末",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -4
        },
        "octalysis": []
      },
      {
        "label": "乾脆這學期都不設幹部全部老師自己來扛",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "roleModel": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_005",
    "cat": "經營",
    "diff": 2,
    "scenario": "兩位同學都想當總務又互不相讓，選舉前氣氛有點僵，你如何分配職務？",
    "law": "（民主法治、班級自治）",
    "explain": "讓兩人各自發表政見由全班投票，落選者安排其他要職，兼顧民主與情誼。",
    "choices": [
      {
        "label": "請兩人發表政見投票落選者改任其他要職",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "私下協調看誰先讓步另一人擔任副總務",
        "tier": "good",
        "note": "省去衝突，但少了讓全班參與的民主程序。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "直接選你私下偏愛的那位另一個叫他放棄",
        "tier": "illegal",
        "note": "老師偏好凌駕投票，會種下不公的心結。",
        "effects": {
          "trust": -6,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "誰吵得比較大聲就把總務這個職位給他做",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "兩個都不給直接換第三個沒意願的人來做",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_006",
    "cat": "經營",
    "diff": 1,
    "scenario": "新接的班級打掃常分配不均，髒活都推給同幾個人，你怎麼重整分工？",
    "law": "（班級自治、公平原則）",
    "explain": "公開列出所有打掃區域與工作量，採輪流制讓苦差事人人輪到，公平又透明。",
    "choices": [
      {
        "label": "公開列出所有區域採輪流制讓苦差人人輪",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "讓各組自己認領區域但老師審核避免失衡",
        "tier": "good",
        "note": "尊重自主，但仍可能出現挑輕避重的情形。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把廁所這種髒活固定丟給幾個乖學生去掃",
        "tier": "illegal",
        "note": "長期讓特定人扛苦差，是隱性的不公平。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "誰動作慢就罰他多掃一區當作偷懶的處罰",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "維持舊有分工不去調整反正之前也這樣掃",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_007",
    "cat": "經營",
    "diff": 2,
    "scenario": "外掃區常被檢查扣分，學生互相推卸說不是自己負責，你會怎麼帶？",
    "law": "（班級經營、責任分擔）",
    "explain": "和學生一起把區域責任畫清楚並設小組長，扣分時共同檢討而非追究單人。",
    "choices": [
      {
        "label": "畫清責任設小組長扣分時全組一起檢討",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "先帶大家重掃一次示範標準再分區負責",
        "tier": "good",
        "note": "標準清楚，但較花時間且偏老師主導。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "隨便抓一個人出來罰站當作殺雞儆猴示眾",
        "tier": "illegal",
        "note": "公開羞辱代罪羔羊，破壞班級安全感。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "扣分就全班一起留下來罰掃罰到大家服氣",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得反正是小事就乾脆放著讓它繼續扣分",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_008",
    "cat": "經營",
    "diff": 1,
    "scenario": "開學想和學生一起訂班級公約，你打算怎麼產出大家都認同的規則？",
    "law": "（民主法治、班級自治）",
    "explain": "引導全班討論再表決訂出少而清楚的公約，學生參與制定才會真心遵守。",
    "choices": [
      {
        "label": "引導全班討論再表決訂出少而清楚的公約",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 5,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          1
        ]
      },
      {
        "label": "老師先擬草案再讓全班逐條表決增刪修改",
        "tier": "good",
        "note": "效率不錯，但起點仍是老師而非學生想法。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "直接抄別班的班規貼上牆要求大家都照做",
        "tier": "illegal",
        "note": "規則與學生無關，缺乏認同只會被當空話。",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "訂出二十幾條鉅細靡遺的規定要全部背熟",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得訂公約很麻煩就口頭講一講不寫下來",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_009",
    "cat": "經營",
    "diff": 2,
    "scenario": "班規上路一個月後常被違反，學生反映某幾條根本做不到，你怎麼調整？",
    "law": "（民主法治、班級自治）",
    "explain": "召開班會檢討窒礙難行的條文並共同修訂，讓公約持續貼近現場、有生命力。",
    "choices": [
      {
        "label": "開班會檢討難行條文由全班共同修訂公約",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "先收集大家的書面意見再挑爭議大的來改",
        "tier": "good",
        "note": "顧及全面，但流程拉長修訂速度會比較慢。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "堅持規定不能改違反的人一律加重來處罰",
        "tier": "illegal",
        "note": "規則僵化又只靠加罰，壓制學生真實困難。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "乾脆把整套班規全部廢掉以後都不要管了",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "由老師一個人偷偷改幾條也不跟學生說明",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_010",
    "cat": "經營",
    "diff": 3,
    "scenario": "班會表決出的公約竟和校規衝突，學生堅持照班會結果走，你怎麼處理？",
    "law": "（民主法治、法位階概念，不杜撰條號）",
    "explain": "肯定民主討論的價值，說明校規位階較高，引導在校規框架內修訂班級公約。",
    "choices": [
      {
        "label": "肯定討論說明校規優先再於框架內修公約",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          3
        ]
      },
      {
        "label": "先暫緩執行那條把疑問帶回去問學務處再說",
        "tier": "good",
        "note": "態度謹慎，但學生會覺得熱情被潑了冷水。",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "默許班級照違規版本做反正出事再說就好",
        "tier": "illegal",
        "note": "明知牴觸校規仍放任，等於帶頭破壞規範。",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接否決班會結果罵學生不懂事還想造反",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "假裝沒看到衝突這件事就讓它含糊地過去",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_011",
    "cat": "經營",
    "diff": 1,
    "scenario": "想用集點制度鼓勵好行為，你會怎麼設計這套班級獎勵機制？",
    "law": "（班級經營、正向管教）",
    "explain": "公開明確的加點標準，聚焦努力與互助而非只看結果，並讓兌換透明可預期。",
    "choices": [
      {
        "label": "公開加點標準聚焦努力互助並透明兌換",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          4
        ]
      },
      {
        "label": "只記錄優良表現給點暫時不設扣點的規則",
        "tier": "good",
        "note": "正向取向不錯，但少了一點行為的約束力。",
        "effects": {
          "climate": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "看心情隨意加點給自己喜歡的學生多一些",
        "tier": "illegal",
        "note": "標準浮動又偏心，集點反而製造不公與比較。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只獎勵考第一名的人其他努力的都不算數",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "標準藏在老師心裡學生永遠不知道怎麼加",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_012",
    "cat": "經營",
    "diff": 2,
    "scenario": "集點跑久了學生只為點數做事，沒點就不幫忙，你怎麼修正這套制度？",
    "law": "（班級經營、內在動機）",
    "explain": "逐步把外在點數轉為公開肯定與責任感，引導學生看見行為本身的意義。",
    "choices": [
      {
        "label": "逐步把點數轉成公開肯定培養內在的動機",
        "tier": "best",
        "effects": {
          "climate": 5,
          "honor": 4,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "保留集點但加入無償服務日淡化點數依賴",
        "tier": "good",
        "note": "方向正確，但兩套並行學生短期會有點混亂。",
        "effects": {
          "climate": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "用扣光點數來威脅不配合的人逼他們就範",
        "tier": "illegal",
        "note": "把獎勵變成懲罰工具，恐嚇取代了引導。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "再加碼更多點數獎品用更大的利誘來換取",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "直接取消所有集點什麼配套也不給就停掉",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_013",
    "cat": "經營",
    "diff": 2,
    "scenario": "有學生違反公約該記點處罰，但他平常表現很好，你會怎麼拿捏獎懲？",
    "law": "（班級經營、公平一致）",
    "explain": "依既定標準一致處理，私下了解原因並給補救機會，維持規則的公信力。",
    "choices": [
      {
        "label": "依標準一致處理私下了解原因並給補救",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "照規定記點但同時公開肯定他平時的努力",
        "tier": "good",
        "note": "規則與情面兼顧，但拿捏不好易顯得矛盾。",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "因為他乖就裝沒看見這次違規直接放他過",
        "tier": "illegal",
        "note": "因偏好破例，等於告訴全班規則看人執行。",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "為了殺雞儆猴反而比別人加重好幾倍處罰",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "當著全班念他一頓說好學生怎麼也會犯錯",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_014",
    "cat": "經營",
    "diff": 2,
    "scenario": "開學要收班費辦活動買用品，家長關心錢怎麼用，你會怎麼管理收支？",
    "law": "（班級自治、財務透明）",
    "explain": "由總務記帳並定期公開明細與單據，重大支出經班會同意，做到帳目透明。",
    "choices": [
      {
        "label": "總務記帳定期公開明細單據大筆支出表決",
        "tier": "best",
        "effects": {
          "trust": 5,
          "cohesion": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "老師代管帳本月底把收支結餘貼公布欄上",
        "tier": "good",
        "note": "有公開但學生參與少，財務素養練習不足。",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "班費都放老師口袋用多少花多少不公布帳",
        "tier": "illegal",
        "note": "公款不透明又無單據，極易引發信任危機。",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "誰想買什麼就先墊錢之後再看有沒有要還",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "收一大筆放著也不記帳到學期末再算總帳",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_015",
    "cat": "經營",
    "diff": 3,
    "scenario": "學期末結算班費剩一小筆錢，學生對怎麼用法各有意見，你會怎麼決定？",
    "law": "（班級自治、民主決議）",
    "explain": "公開結餘金額交由班會討論幾種用途並表決，過程與結果都讓全班看得見。",
    "choices": [
      {
        "label": "公開結餘提幾種用途交班會討論後表決",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "climate": 4,
          "hp": -4
        },
        "octalysis": [
          3,
          4
        ]
      },
      {
        "label": "先做問卷收集意見再把前幾名選項給投票",
        "tier": "good",
        "note": "意見蒐集完整，但兩階段流程稍微繁瑣費時。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "老師直接決定拿去買自己想要的教室用品",
        "tier": "illegal",
        "note": "公款私自運用，剝奪了班級的共同決定權。",
        "effects": {
          "trust": -6,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "平均分一分把零錢退回給每個人草草結束",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "剩多少都不交代就讓這筆錢不明不白消失",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_016",
    "cat": "經營",
    "diff": 1,
    "scenario": "想替班上同學慶生增進感情，你會怎麼安排這個慶祝的方式？",
    "law": "（班級經營、班級凝聚）",
    "explain": "訂出全班一致的簡單慶生方式，讓每個壽星都被同等對待，不分家境高低。",
    "choices": [
      {
        "label": "訂全班一致的簡單慶生讓每人都被祝福",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 5,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          4
        ]
      },
      {
        "label": "每月集合當月壽星一起辦一次小型慶生會",
        "tier": "good",
        "note": "省事又熱鬧，但當天缺席的壽星會被略過。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "誰家長送大蛋糕來就盛大慶其他人隨便過",
        "tier": "illegal",
        "note": "依家境決定排場，讓弱勢學生感到被比下去。",
        "effects": {
          "climate": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "要求每個壽星都得自費請全班吃東西慶祝",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得太麻煩乾脆全班的生日都不特別慶祝",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_017",
    "cat": "經營",
    "diff": 2,
    "scenario": "有位低調的學生不想被公開慶生，但同學熱情要幫他辦，你怎麼拿捏？",
    "law": "（班級經營、尊重個別差異）",
    "explain": "先尊重當事人意願改用低調方式祝福，並教全班體會關心也要顧及對方感受。",
    "choices": [
      {
        "label": "尊重意願改低調祝福並教大家顧及感受",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "私下問清他能接受的方式再請同學配合做",
        "tier": "good",
        "note": "貼心溝通，但需要花時間個別來回確認意願。",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "不管他願不願意硬把他推到台前唱生日歌",
        "tier": "illegal",
        "note": "無視當事人意願，慶生變成讓他難堪的場面。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾笑他孤僻說不給慶生是不合群的表現",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "乾脆叫同學別理他連一句祝福都不用給了",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_018",
    "cat": "經營",
    "diff": 1,
    "scenario": "新教室四面光禿禿的，你想布置出溫暖的學習環境，會怎麼著手？",
    "law": "（班級經營、情境營造）",
    "explain": "和學生共同規劃主題與分區，讓大家動手布置，營造出有歸屬感的共同空間。",
    "choices": [
      {
        "label": "和學生共定主題分區一起動手布置教室",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "honor": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          4
        ]
      },
      {
        "label": "老師先規劃版面再請有興趣的同學來幫忙",
        "tier": "good",
        "note": "成品較整齊，但多數同學的參與感會比較低。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "只讓美術好的幾個人弄其他人都不准插手",
        "tier": "illegal",
        "note": "把布置變少數人特權，多數人被排除在外。",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接買現成海報貼滿牆學生完全沒有參與",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得布置很花時間就讓教室一直空著不管",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_019",
    "cat": "經營",
    "diff": 2,
    "scenario": "教室後方公布欄想營造正向氛圍，你會怎麼規劃與維護這個空間？",
    "law": "（班級經營、情境營造）",
    "explain": "設榮譽榜與作品區並定期輪換內容，讓不同強項的學生都有被看見的機會。",
    "choices": [
      {
        "label": "設榮譽榜作品區輪換讓不同強項都被看見",
        "tier": "best",
        "effects": {
          "honor": 5,
          "cohesion": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "固定每月主題由小組輪流負責設計與更新",
        "tier": "good",
        "note": "責任清楚，但主題若重複久了容易失去新鮮感。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "只貼成績前幾名的考卷其他作品一律不上",
        "tier": "illegal",
        "note": "只表揚成績，讓多數學生覺得自己永遠沒份。",
        "effects": {
          "climate": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "貼一次就再也不換整年都掛著泛黃的舊紙",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "把公布欄拿來貼處罰名單公開警告違規的人",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_020",
    "cat": "經營",
    "diff": 2,
    "scenario": "營養午餐常有人嫌少或嫌多，分配時偶有爭執，你會怎麼建立分餐機制？",
    "law": "（班級自治、公平原則）",
    "explain": "建立輪值打菜與公平分量原則，先平均後開放添加，讓分餐有規則可循。",
    "choices": [
      {
        "label": "輪值打菜先平均再開放添加分量有規則",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "trust": 3,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "由固定幾位同學打菜並設一份基本標準量",
        "tier": "good",
        "note": "效率高，但長期固定打菜易讓人覺得不夠輪流。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "讓打菜的人偷偷多給自己好友少給看不順眼",
        "tier": "illegal",
        "note": "利用職務私心分配，把午餐變成偏心的舞台。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "誰搶得快誰先裝動作慢的人就只能吃剩的",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "老師全程不管讓他們自己每天為分量去吵",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_021",
    "cat": "經營",
    "diff": 1,
    "scenario": "午餐常剩很多菜被倒掉，你想培養惜食又不勉強的氛圍，會怎麼做？",
    "law": "（班級經營、品格教育）",
    "explain": "用適量取餐與惜食宣導引導,設不勉強的添加機制,讓珍惜食物成為共識。",
    "choices": [
      {
        "label": "推適量取餐與惜食宣導設不勉強的添加",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "honor": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "請同學先估食量少裝點不夠再回去添加菜",
        "tier": "good",
        "note": "減少浪費，但每餐回添會稍微拉長用餐時間。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "規定每個人都得吃光否則就罰他留下來吃",
        "tier": "illegal",
        "note": "強迫吃完忽視食量差異，惜食變成了體罰。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "剩多剩少都不管反正倒掉也不會少塊肉吃",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "把吃不完的菜統統硬塞給胃口大的人吃掉",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_022",
    "cat": "經營",
    "diff": 2,
    "scenario": "學校辦整潔秩序競賽，班上想拿名次卻有人不在乎，你怎麼凝聚參與？",
    "law": "（班級經營、班級榮譽）",
    "explain": "把競賽目標化為全班共同任務並分配角色,讓每個人都看見自己的貢獻與意義。",
    "choices": [
      {
        "label": "化競賽為共同任務分配角色人人有貢獻",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          2
        ]
      },
      {
        "label": "設小獎勵激勵達標的組別帶動參與的氣氛",
        "tier": "good",
        "note": "短期有效，但靠獎勵推動較難長出內在榮譽。",
        "effects": {
          "honor": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把沒得名的責任都怪到不認真的那幾個人",
        "tier": "illegal",
        "note": "公開究責特定人，把榮譽變成互相指責的壓力。",
        "effects": {
          "climate": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "為了得名次競賽期間天天罰全班加倍打掃",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得名次不重要叫大家別理會這個競賽了",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_023",
    "cat": "經營",
    "diff": 2,
    "scenario": "整潔競賽連續吊車尾，班上士氣低落還互相埋怨，你會怎麼帶他們翻身？",
    "law": "（班級經營、正向激勵）",
    "explain": "帶全班一起找出失分原因訂改善行動,把焦點放在具體進步而非追究責任。",
    "choices": [
      {
        "label": "一起找失分原因訂行動聚焦進步不追責",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          2
        ]
      },
      {
        "label": "先設一個小目標達成就一起慶祝累積信心",
        "tier": "good",
        "note": "重建士氣有效，但小目標太簡單也可能流於形式。",
        "effects": {
          "honor": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "公開點名掃不乾淨的人罵他害全班丟臉面",
        "tier": "illegal",
        "note": "羞辱式究責,只會讓低落的班級更四分五裂。",
        "effects": {
          "climate": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "拿別班的成績一直酸他們說你們就是最爛",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "什麼都不做反正吊車尾也不會怎樣就算了",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_024",
    "cat": "經營",
    "diff": 2,
    "scenario": "班上各做各的缺乏向心力，你想培養班級榮譽感，會從哪裡著手？",
    "law": "（班級經營、班級認同）",
    "explain": "創造共同目標與班級記憶,從小型合作成功累積,讓我們這個概念慢慢長出來。",
    "choices": [
      {
        "label": "創造共同目標累積合作成功養出我們感",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 5,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "設計班徽班呼讓大家對班級產生認同符號",
        "tier": "good",
        "note": "象徵感不錯，但若沒有實質合作仍易流於口號。",
        "effects": {
          "cohesion": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "只一直誇成績好的那幾個說他們是班招牌",
        "tier": "illegal",
        "note": "榮譽集中在少數人,多數學生反而更被邊緣化。",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "天天拿別班來比較貶低自己班逼大家爭氣",
        "tier": "wrong",
        "effects": {
          "honor": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得向心力是自然的事完全不做任何引導",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_025",
    "cat": "經營",
    "diff": 3,
    "scenario": "班際拔河輸了有人怪隊友太弱，榮譽感變成互相指責，你怎麼引導？",
    "law": "（班級經營、團隊精神）",
    "explain": "帶大家看見每個人的付出,把輸贏轉化為共同經驗,讓榮譽建立在彼此支持上。",
    "choices": [
      {
        "label": "帶大家看見彼此付出把輸贏化成共同經驗",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "honor": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先讓情緒沉澱再開檢討會聚焦下次怎麼配合",
        "tier": "good",
        "note": "處理成熟，但拉到事後檢討當下情緒需先安撫。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "順著大家把責任全推給力氣最小的那個人",
        "tier": "illegal",
        "note": "縱容隊伍找代罪羔羊,徹底破壞團隊的信任。",
        "effects": {
          "climate": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "罵全班輸不起說這種班級根本沒救了算了",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "honor": -4
        },
        "octalysis": []
      },
      {
        "label": "假裝沒事都不提讓互相埋怨的氣氛持續發酵",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_026",
    "cat": "經營",
    "diff": 1,
    "scenario": "早自習常一片散漫，你想規劃有意義的晨間活動，會怎麼安排？",
    "law": "（班級經營、學習氛圍）",
    "explain": "和學生共同設計多元晨間活動並輪流主持,讓早晨成為有期待感的開始。",
    "choices": [
      {
        "label": "共同設計多元晨間活動並由學生輪流主持",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          4
        ]
      },
      {
        "label": "固定排晨讀與短講由老師主導內容與節奏",
        "tier": "good",
        "note": "穩定好掌握，但學生主動性與參與感稍微弱些。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把晨間全拿來罰寫考卷處罰昨天表現差的人",
        "tier": "illegal",
        "note": "用懲罰填滿早晨,讓學生一進教室就帶著抗拒。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "完全放牛吃草愛幹嘛幹嘛吵成一團也不管",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "每天都逼大家罰站到鐘響當作晨間的紀律",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_027",
    "cat": "經營",
    "diff": 2,
    "scenario": "晨間想推班級共讀但學生興趣缺缺，覺得無聊，你會怎麼提升參與意願？",
    "law": "（班級經營、閱讀推動）",
    "explain": "讓學生共選書目並加入分享討論,把共讀從被動讀變成有交流的晨間時光。",
    "choices": [
      {
        "label": "讓學生共選書目加入分享把共讀變成交流",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "改用短篇有趣的文章先養出閱讀的好胃口",
        "tier": "good",
        "note": "降低門檻有用，但仍偏老師選材學生選擇少。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "規定讀不完就罰抄全文逼他們乖乖坐著讀",
        "tier": "illegal",
        "note": "用懲罰逼讀,只會讓學生更討厭閱讀這件事。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "硬指定一本超難的經典要全班一個月內讀完",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "看大家沒興趣就乾脆取消共讀什麼都不推了",
        "tier": "wrong",
        "effects": {
          "roleModel": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_028",
    "cat": "經營",
    "diff": 1,
    "scenario": "想讓聯絡簿成為親師生溝通橋梁，而不只是抄作業，你會怎麼經營？",
    "law": "（班級經營、親師溝通）",
    "explain": "加入每日小語與雙向回饋欄,讓聯絡簿承載鼓勵與對話,成為溫暖的連結。",
    "choices": [
      {
        "label": "加每日小語與雙向回饋讓聯絡簿能對話",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "每週挑幾本寫上鼓勵的話輪流給不同學生",
        "tier": "good",
        "note": "心意有到，但輪流制下有人要等很久才被看見。",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "只拿聯絡簿來公開記過威脅愛遲交作業的人",
        "tier": "illegal",
        "note": "把溝通工具當警告板,孩子會藏著不敢給家長。",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只要求抄作業簽名其他什麼互動都懶得寫",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "在聯絡簿上用紅筆狂寫負評讓家長看了生氣",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_029",
    "cat": "經營",
    "diff": 2,
    "scenario": "有學生常忘抄或漏帶聯絡簿，家長因此漏掉重要通知，你怎麼改善？",
    "law": "（班級經營、習慣養成）",
    "explain": "建立小組互相提醒與多元通知管道,把責任分散又能補位,降低漏接的風險。",
    "choices": [
      {
        "label": "建小組互相提醒並開多元通知管道來補位",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          2
        ]
      },
      {
        "label": "請小老師每天下課前帶大家一起核對抄寫",
        "tier": "good",
        "note": "確實減少漏抄，但長期依賴小老師也增加負擔。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "誰沒抄就當眾罰站給全班看當作不認真示眾",
        "tier": "illegal",
        "note": "用羞辱代替協助,孩子只學到害怕沒學到習慣。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得抄聯絡簿是學生的事漏了就自己承擔吧",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "直接打電話跟家長告狀說你小孩都不抄作業",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_030",
    "cat": "經營",
    "diff": 1,
    "scenario": "想設班級信箱或心情小卡讓學生說心事，你會怎麼建立這個管道？",
    "law": "（班級經營、輔導關懷）",
    "explain": "設匿名信箱並承諾保密與善意回應,讓不敢開口的孩子也有安全的出口。",
    "choices": [
      {
        "label": "設匿名信箱承諾保密與善意回應每封心聲",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 5,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "放心情小卡讓學生想寫就寫定期收件回饋",
        "tier": "good",
        "note": "彈性溫和，但沒承諾保密前學生仍會有顧慮。",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "把信箱內容公開念出來當笑話跟全班一起看",
        "tier": "illegal",
        "note": "洩漏私密心聲,徹底摧毀學生對你的信任。",
        "effects": {
          "trust": -7,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "要求每封信都署名否則一律不予理會或回覆",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "設了信箱卻從來不收信讓它變成牆上的擺設",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_031",
    "cat": "經營",
    "diff": 3,
    "scenario": "心情小卡裡有學生透露被排擠又怕被認出，你會怎麼回應與處理？",
    "law": "（班級經營、保密與輔導）",
    "explain": "嚴守保密以普遍方式介入班級氛圍,私下關懷當事人,必要時連結輔導資源。",
    "choices": [
      {
        "label": "嚴守保密用普遍方式調氛圍再私下關懷他",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先回卡讓他知道有人懂再約時間細談情況",
        "tier": "good",
        "note": "回應溫暖，但只回卡而未介入排擠仍不夠完整。",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "當眾問是誰寫的硬要排擠者跟當事人對質",
        "tier": "illegal",
        "note": "曝光受害者又逼對質,把求助者推向更危險。",
        "effects": {
          "trust": -7,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得小孩子吵架很正常就把這張卡放著不管",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "直接公告全班不准排擠人卻不查實際的狀況",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_032",
    "cat": "經營",
    "diff": 2,
    "scenario": "學期中來了轉學生，人生地不熟坐在角落很拘謹，你會怎麼幫他融入？",
    "law": "（班級經營、友善關懷）",
    "explain": "安排熱心同學當小天使並設計合作機會,讓轉學生自然被接納而非被特別對待。",
    "choices": [
      {
        "label": "派小天使陪伴設合作機會讓他自然被接納",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 5,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "請他簡單自我介紹再安排幾個人主動找他玩",
        "tier": "good",
        "note": "用意良善，但當眾介紹對害羞的孩子壓力不小。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "當眾要他報出舊校成績讓大家評斷他的程度",
        "tier": "illegal",
        "note": "拿成績公開檢視新生,一來就被貼上標籤。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他自己會適應就完全放著不做任何安排",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "一直特別強調他是轉學生反而讓他更格格不入",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_033",
    "cat": "經營",
    "diff": 2,
    "scenario": "轉學生口音被同學偷笑模仿，他開始更退縮不講話，你會怎麼處理？",
    "law": "（班級經營、尊重多元）",
    "explain": "私下安撫當事人並帶全班理解尊重差異,把嘲笑轉化為對多元的好奇與欣賞。",
    "choices": [
      {
        "label": "私下安撫他並帶全班學會尊重彼此的差異",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "找帶頭模仿的人談談請他換位思考並道歉",
        "tier": "good",
        "note": "處理到根源，但只談個別人較難改整體氛圍。",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "叫轉學生別太玻璃心說同學只是開玩笑而已",
        "tier": "illegal",
        "note": "把責任推給受害者,等於默許嘲笑繼續發生。",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當眾要他學標準腔調反而讓他更不敢開口說",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": []
      },
      {
        "label": "覺得這只是同學間的玩笑就完全不出手介入",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_034",
    "cat": "經營",
    "diff": 1,
    "scenario": "想和學生一起訂班級座右銘與願景，你會怎麼帶出大家共同的方向？",
    "law": "（班級自治、班級認同）",
    "explain": "引導全班討論心目中的理想班級並提煉成標語,讓願景由師生共同孕育而生。",
    "choices": [
      {
        "label": "引導全班討論理想班級再提煉成共同願景",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          3
        ]
      },
      {
        "label": "老師先提幾個方向再讓全班票選喜歡的標語",
        "tier": "good",
        "note": "有參與感，但起手式仍由老師框住了想像空間。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "直接用老師自己的人生格言規定大家天天背",
        "tier": "illegal",
        "note": "願景強加於人,與學生無關只會淪為背誦口號。",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "隨便上網抄一句名言貼出來就當班級座右銘",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得座右銘沒什麼用乾脆都不訂也不討論了",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_035",
    "cat": "經營",
    "diff": 2,
    "scenario": "班級願景訂好後就被忘在牆上，沒人放在心上，你會怎麼讓它活起來？",
    "law": "（班級經營、目標管理）",
    "explain": "把願景拆成階段小目標並定期回顧進度,讓抽象口號變成看得見的共同行動。",
    "choices": [
      {
        "label": "把願景拆成階段小目標並定期回顧進度",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 4,
          "climate": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          2
        ]
      },
      {
        "label": "每月班會花幾分鐘對照願景檢視這月做到啥",
        "tier": "good",
        "note": "有持續提醒，但若只是口頭檢視仍易流於形式。",
        "effects": {
          "cohesion": 3,
          "honor": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "只在有人犯錯時拿願景出來罵說你違背班訓",
        "tier": "illegal",
        "note": "把願景當打人的棍子,美好理想變成壓力來源。",
        "effects": {
          "climate": -6,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "重新再訂一個更響亮的口號然後一樣放著爛",
        "tier": "wrong",
        "effects": {
          "honor": -3,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得沒人理就算了從此再也不提這個願景了",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_036",
    "cat": "經營",
    "diff": 2,
    "scenario": "兩個學生為了座位糾紛吵架互不相讓，全班都在看，你會怎麼調解？",
    "law": "（班級經營、衝突調解）",
    "explain": "先分開冷靜再私下各聽說法,引導雙方表達需求並一起找出彼此能接受的方案。",
    "choices": [
      {
        "label": "先分開冷靜各聽說法再引導兩人找方案",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 4,
          "cohesion": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "當場各打五十大板要兩人馬上握手言和算了",
        "tier": "good",
        "note": "快速止血，但沒釐清原委心結容易日後再爆發。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "直接認定平常皮的那個有錯當眾把他罵一頓",
        "tier": "illegal",
        "note": "未審先判憑印象定罪,讓被冤的孩子失去信任。",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫兩人都罰站到願意道歉為止其他都不問",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得小孩吵架很正常就轉頭不管讓他們去吵",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_037",
    "cat": "經營",
    "diff": 3,
    "scenario": "兩名學生衝突牽涉到誰先動手各執一詞，旁觀同學也分成兩派，你怎麼辦？",
    "law": "（班級經營、衝突調解、公正程序）",
    "explain": "分別釐清事實兼聽多方說法,聚焦修復關係與行為改善,避免被人緣左右判斷。",
    "choices": [
      {
        "label": "兼聽多方釐清事實聚焦修復不被人緣左右",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "cohesion": 4,
          "hp": -4
        },
        "octalysis": [
          5,
          1
        ]
      },
      {
        "label": "先各自寫下經過再坐下來逐項比對找出真相",
        "tier": "good",
        "note": "程序嚴謹，但書面對質對情緒激動的當下偏慢。",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "看哪邊人多就信哪邊把少數那派直接判有錯",
        "tier": "illegal",
        "note": "以聲量定是非,把調解變成多數壓迫少數。",
        "effects": {
          "trust": -6,
          "climate": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "懶得查清楚就各記一支警告草草把事情結掉",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "把兩派全部叫來一起罵說你們都很煩夠了喔",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_038",
    "cat": "經營",
    "diff": 2,
    "scenario": "調解後兩人表面和好卻仍冷戰，影響分組合作，你會怎麼幫他們真正修復？",
    "law": "（班級經營、關係修復）",
    "explain": "創造低壓力的合作小任務讓兩人重新建立正向互動,給關係慢慢回溫的空間。",
    "choices": [
      {
        "label": "設低壓合作小任務讓兩人重建正向互動",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          5,
          3
        ]
      },
      {
        "label": "私下分別關心兩人聽聽他們還卡在哪個點上",
        "tier": "good",
        "note": "理解到位，但只談心未創造互動仍難破冷戰。",
        "effects": {
          "climate": 3,
          "trust": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "硬把兩人綁同組逼他們合作不准有任何意見",
        "tier": "illegal",
        "note": "強迫尚未修復的兩人同組,逼出更大反彈。",
        "effects": {
          "climate": -6,
          "cohesion": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他們沒打架就好冷戰是他們自己的事情",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "當眾要兩人擁抱說和好讓他們更尷尬更抗拒",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_039",
    "cat": "經營",
    "diff": 1,
    "scenario": "小組合作時總有同樣的人被排擠或落單，你會怎麼設計分組方式？",
    "law": "（班級經營、合作學習）",
    "explain": "用異質分組搭配輪換並設角色分工,讓每個人都有位置與貢獻,避免長期落單。",
    "choices": [
      {
        "label": "用異質分組輪換並設角色讓人人有貢獻",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "老師先安排好組別再依默契狀況微調人選",
        "tier": "good",
        "note": "兼顧公平，但全由老師決定學生自主感會少些。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "讓學生自己選組沒人要的就丟去隨便湊一組",
        "tier": "illegal",
        "note": "放任自由選組,等於公開讓弱勢學生被挑剩。",
        "effects": {
          "climate": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "永遠照成績把強的湊一組弱的湊一組分死板",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "都讓好朋友自己黏在一起反正他們合作愉快",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_040",
    "cat": "經營",
    "diff": 2,
    "scenario": "小組報告常變成一兩人做完全部，其他人搭便車，你會怎麼設計才公平？",
    "law": "（班級經營、責任分擔）",
    "explain": "明確分工搭配個人貢獻紀錄與互評,讓努力被看見、搭便車的空間被壓縮。",
    "choices": [
      {
        "label": "明確分工加個人紀錄與互評讓努力被看見",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "請各組設組長分配任務並回報每人的進度",
        "tier": "good",
        "note": "有人盯著推進，但成敗易壓在組長一人身上。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "報告好就全組高分搭便車的人照樣坐享其成",
        "tier": "illegal",
        "note": "齊頭式給分,等於變相鼓勵不做事的人偷懶。",
        "effects": {
          "cohesion": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "誰被抓到偷懶就把全組的分數一起扣到很低",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆全部改回個人作業以後都不要分組了吧",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_041",
    "cat": "經營",
    "diff": 2,
    "scenario": "班上愛酸言酸語互相嘲諷成習慣，氣氛變得很尖銳，你會怎麼扭轉班風？",
    "law": "（班級經營、正向氛圍）",
    "explain": "以身作則示範善意語言並建立彼此欣賞的儀式,讓肯定逐漸取代嘲諷成為習慣。",
    "choices": [
      {
        "label": "以身作則示範善意並建立彼此欣賞的儀式",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "設每日一句讚美練習讓大家習慣肯定身邊人",
        "tier": "good",
        "note": "練習有效，但流於形式時讚美也可能變得敷衍。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "誰講酸話就當眾用更難聽的話酸回去壓制他",
        "tier": "illegal",
        "note": "老師帶頭嘲諷,等於認可尖酸成為班級的常態。",
        "effects": {
          "climate": -6,
          "roleModel": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "規定全班都不准講話用沉默來換取表面和平",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得只是同學鬥嘴而已就放著不去理會處理",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_042",
    "cat": "經營",
    "diff": 1,
    "scenario": "想營造願意互助又安心犯錯的正向班風，你會優先從哪些做法著手？",
    "law": "（班級經營、正向氛圍）",
    "explain": "建立心理安全感、鼓勵求助與肯定嘗試,讓學生相信犯錯是學習而非被笑的理由。",
    "choices": [
      {
        "label": "建立心理安全鼓勵求助讓犯錯成為學習",
        "tier": "best",
        "effects": {
          "climate": 5,
          "cohesion": 4,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "公開表揚主動幫助同學的人帶動互助的風氣",
        "tier": "good",
        "note": "示範正向行為，但靠表揚帶動仍偏外在的誘因。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "誰答錯就帶頭笑他想用丟臉逼大家更用功點",
        "tier": "illegal",
        "note": "用羞辱當動力,孩子從此不敢開口更不敢嘗試。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只獎勵做對的人答錯的一律當作沒看到略過",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "把班級氣氛交給運氣完全不刻意去經營引導",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_043",
    "cat": "經營",
    "diff": 1,
    "scenario": "想建立值日生制度維持教室日常運作，你會怎麼設計才公平又順暢？",
    "law": "（班級自治、責任分擔）",
    "explain": "公開排定輪值表並列清楚工作項目,讓每個人都輪到、都清楚自己今天的責任。",
    "choices": [
      {
        "label": "公開排輪值表並列清工作讓人人都輪到",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "trust": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          5
        ]
      },
      {
        "label": "每週抽籤決定值日生並把任務寫在黑板提醒",
        "tier": "good",
        "note": "公平又有變化，但抽籤偶爾會連續抽到同個人。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "固定指派幾個乖學生天天值日其他人都免做",
        "tier": "illegal",
        "note": "讓少數人長期扛責,既不公平也養出旁觀者。",
        "effects": {
          "climate": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "誰上課被抓到講話就罰他隔天當一整天值日",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "都不排值日生反正教室髒亂自然會有人去弄",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_044",
    "cat": "經營",
    "diff": 2,
    "scenario": "值日生常敷衍了事或互相推託沒人擦黑板倒垃圾，你會怎麼改善制度？",
    "law": "（班級經營、責任落實）",
    "explain": "把工作項目細化並設交接檢核,搭配同儕互助與肯定,讓責任清楚又被看見。",
    "choices": [
      {
        "label": "細化項目設交接檢核搭配互助與肯定",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "honor": 4,
          "climate": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "請值日生兩兩搭檔互相補位並下課前驗收",
        "tier": "good",
        "note": "互相補位減少漏做，但兩人也可能一起偷懶。",
        "effects": {
          "cohesion": 3,
          "climate": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "誰沒做好就公開罰他連做一週給全班警惕看",
        "tier": "illegal",
        "note": "用公開重罰逼人,責任變恐懼而非自發承擔。",
        "effects": {
          "climate": -6,
          "trust": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "老師自己默默把沒做的都補完從此不再要求",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "全班一起連坐罰掃逼大家去盯偷懶的值日生",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cm_045",
    "cat": "經營",
    "diff": 2,
    "scenario": "想在教室角落設班級讀書角養成閱讀習慣，你會怎麼規劃與經營這個空間？",
    "law": "（班級經營、閱讀推動）",
    "explain": "和學生共同選書布置並訂簡單借閱規則,讓讀書角成為大家想去的溫暖角落。",
    "choices": [
      {
        "label": "和學生共選書布置並訂簡單的借閱規則",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          3,
          4
        ]
      },
      {
        "label": "老師先擺好書再請愛看書的同學輪流當管理",
        "tier": "good",
        "note": "起步快，但選書由老師主導學生興趣較難對上。",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ]
      },
      {
        "label": "規定只有成績好的人才准進讀書角去看書休息",
        "tier": "illegal",
        "note": "把閱讀變成獎賞特權,反讓更需要的人被排除。",
        "effects": {
          "climate": -6,
          "cohesion": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "擺幾本舊課本就當讀書角從來不更新也不管",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "roleModel": -3
        },
        "octalysis": []
      },
      {
        "label": "把讀書角拿來堆雜物根本沒打算讓學生去用",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_001",
    "cat": "輔導",
    "diff": 2,
    "scenario": "情緒行為障礙生上課突然暴怒摔椅、情緒失控，你第一步該怎麼處理？",
    "law": "特殊教育法／學生輔導法（情緒行為障礙與正向行為支持）",
    "explain": "先確保安全並穩定情緒，事後連結特教與輔導資源研擬行為支持，不當眾責罵或貼標籤。",
    "choices": [
      {
        "label": "先穩住現場安全，再低聲引導他離場冷靜",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "課後私下了解誘發點，記錄通報輔導室",
        "tier": "good",
        "note": "補上行為功能分析才完整，但方向正確",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當著全班吼他「再鬧就記過處分」",
        "tier": "illegal",
        "note": "公開羞辱違反正向支持，會強化對立",
        "effects": {
          "trust": -6,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "要求他立刻去走廊外罰站到下課",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "假裝沒看見，繼續把課上完不理會",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_002",
    "cat": "輔導",
    "diff": 2,
    "scenario": "班上一名學障生閱讀書寫困難、成績長期落後，你怎麼協助他學習？",
    "law": "特殊教育法（學習障礙鑑定與個別化教育計畫）",
    "explain": "依鑑定結果與 IEP 提供調整與替代評量，連結資源班，不以一般標準苛責其努力不足。",
    "choices": [
      {
        "label": "依 IEP 調整作業量並提供報讀替代評量",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先找資源班老師討論可行的學習支持",
        "tier": "good",
        "note": "方向對，記得也要納入家長一起討論",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "在全班面前說他「就是懶不肯背」",
        "tier": "illegal",
        "note": "貼懶惰標籤忽視障礙本質，傷害自尊",
        "effects": {
          "trust": -6,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "要求他放學留下罰寫到背完為止",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "乾脆讓他考試空白，反正也學不會",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_003",
    "cat": "輔導",
    "diff": 1,
    "scenario": "ADHD 學生上課坐不住、不斷衝動插話，你如何兼顧課堂與他的需求？",
    "law": "特殊教育法（注意力不足過動與正向行為支持）",
    "explain": "以結構化提示與正向增強引導，給予合理動態出口，不單純以處罰壓制其過動特質。",
    "choices": [
      {
        "label": "給他傳本與短任務，用手勢提示拉回專注",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "和他約定發言手勢，做到就即時鼓勵",
        "tier": "good",
        "note": "正增強很好，再搭配環境調整更穩",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "罰他整堂課雙手背在後面不准動",
        "tier": "illegal",
        "note": "壓制式處罰違反正向支持原則",
        "effects": {
          "trust": -5,
          "honor": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "每次插話就在黑板記他一支警告",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把他單獨調到教室最後角落去坐",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_004",
    "cat": "輔導",
    "diff": 2,
    "scenario": "自閉特質學生固著於規則、難融入分組活動，你如何協助他參與班級？",
    "law": "特殊教育法（自閉症與融合教育支持）",
    "explain": "理解固著需求並預告流程，安排結構化角色協助參與，不強迫立即社交或當眾糾正。",
    "choices": [
      {
        "label": "先預告活動流程，給他明確固定的小角色",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "安排有耐心的同學當他的固定夥伴",
        "tier": "good",
        "note": "同儕支持很好，記得先徵得雙方同意",
        "effects": {
          "cohesion": 4,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾要求他「別再堅持，要懂變通」",
        "tier": "illegal",
        "note": "否定其特質、公開施壓會加深焦慮",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接讓他自己一組，免得拖累別人",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "強迫他立刻跟陌生組員握手互動",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sn_005",
    "cat": "輔導",
    "diff": 1,
    "scenario": "資優生很快寫完作業後上課放空、干擾他人，你怎麼回應他的學習需求？",
    "law": "特殊教育法（資賦優異與充實加速）",
    "explain": "提供加深加廣的充實任務滿足其能力，連結資優資源，不以「會了就乖坐著」消耗其潛能。",
    "choices": [
      {
        "label": "給他延伸挑戰題或當小老師協助同學",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 3,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "和家長討論申請資優資源或加速方案",
        "tier": "good",
        "note": "方向正確，也別忽略他的社交與情緒需求",
        "effects": {
          "trust": 4,
          "roleModel": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "罵他「都會了還不安靜是欠教訓」",
        "tier": "illegal",
        "note": "否定需求又羞辱，會澆熄學習動機",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他重抄一遍剛寫完的作業打發時間",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "放著不管，反正他成績本來就好",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_006",
    "cat": "輔導",
    "diff": 3,
    "scenario": "班上一名學生連續多日無故缺課、疑似中輟，你身為導師該怎麼啟動處理？",
    "law": "學生輔導法／強迫入學條例（中輟通報與三級輔導）",
    "explain": "依規定三日內通報並啟動中輟輔導機制，結合輔導與社政家訪了解原因，不放任也不私下隱匿。",
    "choices": [
      {
        "label": "依規定通報中輟，並協同輔導室安排家訪",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先電話聯繫家長了解孩子缺課原因",
        "tier": "good",
        "note": "第一步很好，但仍須依時限正式通報",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "怕影響班級數據，私下隱匿不通報",
        "tier": "illegal",
        "note": "隱匿中輟違反通報義務，延誤協助",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接在群組公告他「再不來就退學」",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "認定他自己不想念，不再聯繫追蹤",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_007",
    "cat": "輔導",
    "diff": 3,
    "scenario": "班上學生上週父親驟逝、近日沉默落淚，你身為導師該如何陪伴與協助？",
    "law": "學生輔導法（重大失落事件之發展性與介入性輔導）",
    "explain": "以溫和陪伴與保密尊重其哀傷節奏，連結輔導室提供哀傷輔導，不強迫談論或在班上公開細節。",
    "choices": [
      {
        "label": "私下表達關心，連結輔導室提供哀傷陪伴",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 5,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "給他彈性繳交期限與安靜獨處的空間",
        "tier": "good",
        "note": "體貼到位，仍要持續觀察情緒變化",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "在班會公開他喪父，要全班一起安慰",
        "tier": "illegal",
        "note": "未經同意揭露隱私，造成二度傷害",
        "effects": {
          "trust": -5,
          "honor": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他「節哀振作別影響功課」就結束",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當作沒事，照常要求他補齊所有作業",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_008",
    "cat": "輔導",
    "diff": 2,
    "scenario": "學生因父母離異情緒浮動、上課分心，你如何在不揭隱私下給予支持？",
    "law": "學生輔導法（家庭變動之發展性輔導與保密）",
    "explain": "以同理傾聽與保密為前提提供穩定支持，必要時連結輔導資源，不在班上談論其家務或評論父母。",
    "choices": [
      {
        "label": "私下傾聽他的感受，告訴他學校是後盾",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "觀察情緒並悄悄轉介輔導老師接手",
        "tier": "good",
        "note": "轉介很好，記得讓孩子知道你仍在乎",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "在課堂拿他父母離婚當機會教育案例",
        "tier": "illegal",
        "note": "公開家務違反保密，嚴重傷害學生",
        "effects": {
          "trust": -6,
          "honor": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "勸他「父母的事跟你無關別想太多」",
        "tier": "wrong",
        "effects": {
          "trust": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得家務事不關老師，不予理會",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_009",
    "cat": "輔導",
    "diff": 3,
    "scenario": "學生因父親入獄遭同學議論、自卑退縮，你如何保護他並穩住班級氛圍？",
    "law": "學生輔導法（弱勢處境保密與班級正向氛圍經營）",
    "explain": "嚴守家庭隱私並制止議論與標籤化，私下給予支持與輔導轉介，不公開談論其家庭司法狀況。",
    "choices": [
      {
        "label": "私下安撫並明確制止班上的議論與訕笑",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 3,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "找輔導室合作，為他建立支持與保密機制",
        "tier": "good",
        "note": "合作很對，也要持續關注同儕互動",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "在班上澄清他父親的案情要大家別亂傳",
        "tier": "illegal",
        "note": "複述案情等同二次揭露，傷害更深",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "跟著同學一起問他「你爸是不是關了」",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "認為同學議論很正常，不出面處理",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_010",
    "cat": "輔導",
    "diff": 2,
    "scenario": "你發現一名清寒學生常沒帶午餐錢，想協助又怕傷他自尊，該怎麼做？",
    "law": "學生輔導法／教育部弱勢學生補助規定（保密與資源連結）",
    "explain": "私下協助申請午餐補助等資源並嚴守保密，維護其尊嚴，不在班上公開其家境或補助身分。",
    "choices": [
      {
        "label": "私下協助他申請午餐補助並全程保密",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "budget": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "以全班名義設置匿名愛心便當不點名",
        "tier": "good",
        "note": "顧及尊嚴很好，仍要連結正式補助制度",
        "effects": {
          "cohesion": 4,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "在班上公開募款說明他家很窮需幫忙",
        "tier": "illegal",
        "note": "公開家境羞辱學生，違反保密原則",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他自己跟同學借錢買午餐就好",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "認為不是導師的事，請他問家長",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_011",
    "cat": "輔導",
    "diff": 1,
    "scenario": "學期中轉入一名新生，下課總獨自坐著、難融入班級，你怎麼幫他適應？",
    "law": "學生輔導法（適應性輔導與班級融入支持）",
    "explain": "主動安排引導與夥伴協助其建立連結，營造接納氛圍，不放任孤立或當眾要求他「快點交朋友」。",
    "choices": [
      {
        "label": "安排熱心同學當小天使，帶他熟悉環境",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 4,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "設計需要互助的分組任務讓他自然融入",
        "tier": "good",
        "note": "活動設計很好，也要私下關心他感受",
        "effects": {
          "cohesion": 4,
          "trust": 2
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "當眾要他自我介紹並命令大家交朋友",
        "tier": "illegal",
        "note": "強迫社交造成壓力，反而更退縮",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得適應是他的事，給他時間就好",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "把他安排在最角落避免打擾原本同學",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_012",
    "cat": "輔導",
    "diff": 3,
    "scenario": "學生近期低落、提到「活著好累」，你身為導師察覺後該如何處理？",
    "law": "學生輔導法（自傷風險之介入性輔導與危機處理）",
    "explain": "立即以不評價態度陪伴並通報輔導室啟動危機處理，連結專業資源，不輕忽也不獨自承擔處理。",
    "choices": [
      {
        "label": "立刻通報輔導室並全程陪同不讓他獨處",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 5,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先穩定傾聽情緒，同步聯繫輔導與家長",
        "tier": "good",
        "note": "傾聽很對，但危機個案務必正式通報轉介",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "自己默默觀察處理，怕通報會害他被貼標",
        "tier": "illegal",
        "note": "獨自承擔不轉介，延誤專業介入有風險",
        "effects": {
          "trust": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "勸他「想開一點別人比你更慘」帶過",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是青春期鬧情緒，不需理會",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_013",
    "cat": "輔導",
    "diff": 2,
    "scenario": "你發現班上一名學生被同學集體排擠、刻意冷落，你該如何介入處理？",
    "law": "學生輔導法／校園霸凌防制準則（關係霸凌之介入）",
    "explain": "正視關係霸凌並私下了解雙方、重建班級接納氛圍，必要時啟動防制機制，不歸咎受害者或公開對質。",
    "choices": [
      {
        "label": "私下了解雙方，重建班級接納的規範",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "設計合作任務打破小圈圈並觀察互動",
        "tier": "good",
        "note": "氛圍重建很好，嚴重時仍須啟動霸凌機制",
        "effects": {
          "cohesion": 4,
          "trust": 2
        },
        "octalysis": [
          3
        ]
      },
      {
        "label": "當眾質問他「是不是你自己太難相處」",
        "tier": "illegal",
        "note": "責怪受害者形同二次傷害，加深孤立",
        "effects": {
          "trust": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫被排擠的他自己想辦法合群一點",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得小孩吵架很正常，等他們自己好",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_014",
    "cat": "輔導",
    "diff": 1,
    "scenario": "一名能力不差卻總說「我不行」的學生畏縮不敢嘗試，你如何幫他建立自信？",
    "law": "學生輔導法（發展性輔導與正向自我概念建立）",
    "explain": "以具體可達的小成功與真誠回饋累積成就感，正向增強其能力，不以比較或嘲諷打擊其自我概念。",
    "choices": [
      {
        "label": "拆成小步驟，每完成一步就具體肯定他",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -2
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "給他擅長的小任務讓他在班上被看見",
        "tier": "good",
        "note": "創造成功經驗很好，回饋要對事不空泛",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "當眾說「你看別人都會就你不行」激他",
        "tier": "illegal",
        "note": "比較羞辱會強化習得無助，更不敢試",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "一直幫他做完，省得他卡關難過",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "roleModel": -2
        },
        "octalysis": []
      },
      {
        "label": "覺得沒自信是個性，不用特別處理",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_015",
    "cat": "輔導",
    "diff": 2,
    "scenario": "新住民子女因母親口音被同學取笑、感到羞愧，你如何處理並守護他？",
    "law": "學生輔導法（多元文化尊重與反歧視輔導）",
    "explain": "制止歧視言論並引導欣賞多元文化，肯定其家庭背景的價值，不附和訕笑或要求他隱藏自己的出身。",
    "choices": [
      {
        "label": "明確制止取笑，帶全班認識多元文化之美",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "私下肯定他媽媽的母語是難得的優勢",
        "tier": "good",
        "note": "正向肯定很好，也要處理嘲笑的同學",
        "effects": {
          "trust": 4,
          "roleModel": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "跟著笑說「口音怪怪的也難怪被笑」",
        "tier": "illegal",
        "note": "老師附和歧視，等於認可霸凌行為",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他「別讓媽媽來學校就沒事了」",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得同學開玩笑而已，不必當真",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_016",
    "cat": "輔導",
    "diff": 2,
    "scenario": "班上有一名肢體障礙生使用輪椅，你如何安排讓他平等參與班級活動？",
    "law": "特殊教育法（融合教育與無障礙參與）",
    "explain": "主動調整環境與活動讓他平等參與，培養同儕協助文化，不因不便就將他排除於團體活動之外。",
    "choices": [
      {
        "label": "調整動線與規則，讓他能和同學一起參與",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "和同學討論如何自然協助而非特殊對待",
        "tier": "good",
        "note": "共融意識很好，記得徵詢他本人的意願",
        "effects": {
          "cohesion": 4,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "活動時直接讓他在旁觀看不必參加",
        "tier": "illegal",
        "note": "排除參與違反融合精神，剝奪其權利",
        "effects": {
          "cohesion": -4,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把所有照顧責任丟給同一個同學扛",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "覺得他行動不便，活動就略過他",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_017",
    "cat": "輔導",
    "diff": 2,
    "scenario": "特教生的 IEP 會議即將召開，你身為導師在 IEP 中應扮演什麼角色？",
    "law": "特殊教育法（個別化教育計畫之擬定與執行）",
    "explain": "提供課堂觀察、參與目標訂定並落實調整於日常教學，與團隊家長合作，不缺席或把責任全推給資源班。",
    "choices": [
      {
        "label": "帶課堂觀察出席會議，共訂可落實的目標",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "會後把 IEP 調整確實落實在每天教學裡",
        "tier": "good",
        "note": "落實很關鍵，也要定期回饋執行成效",
        "effects": {
          "trust": 4,
          "roleModel": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "認為那是資源班的事，會議乾脆請假",
        "tier": "illegal",
        "note": "導師缺席 IEP，調整難以在普通班落地",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "會上全程不發言，簽名同意就好",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "roleModel": -2
        },
        "octalysis": []
      },
      {
        "label": "把家長意見當干擾，照自己方式教",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_018",
    "cat": "輔導",
    "diff": 2,
    "scenario": "某生常以破壞行為引起注意，你想用正向行為支持，第一步該怎麼做？",
    "law": "特殊教育法（正向行為支持與行為功能分析）",
    "explain": "先分析行為背後的功能與需求，再教導替代行為並正向增強，不只以處罰壓制表面行為。",
    "choices": [
      {
        "label": "先找出行為想滿足的需求，再教替代方式",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "設計他做到正向行為就立即給予增強",
        "tier": "good",
        "note": "正增強很好，也要記錄追蹤行為變化",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "一犯就重罰，讓他怕到不敢再犯",
        "tier": "illegal",
        "note": "只壓制不教替代，行為常以他形式反彈",
        "effects": {
          "trust": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "沒收他所有的下課時間當作懲罰",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得就是天生壞個性，懶得分析",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_019",
    "cat": "輔導",
    "diff": 2,
    "scenario": "班上一名學生的困擾已超出你能處理的範圍，依三級輔導你該如何轉介？",
    "law": "學生輔導法（三級輔導體制之分工與轉介）",
    "explain": "導師屬發展性輔導，個案超出能力時應轉介專輔教師進入介入性輔導，不獨自硬扛或延誤專業協助。",
    "choices": [
      {
        "label": "評估後轉介專輔教師，持續配合追蹤陪伴",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先把觀察與處理記錄整理好再交給輔導室",
        "tier": "good",
        "note": "資料完整有助銜接，別因整理而拖太久",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "覺得轉介丟臉，硬撐自己處理到底",
        "tier": "illegal",
        "note": "超出能力不轉介，延誤學生該有的協助",
        "effects": {
          "trust": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把學生整包丟給輔導室後就不再過問",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "認為沒嚴重到要轉介，再拖一陣看看",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_020",
    "cat": "輔導",
    "diff": 3,
    "scenario": "你接手一名被列為高關懷的學生，行為與情緒起伏大，你如何穩定經營這段關係？",
    "law": "學生輔導法（高關懷個案之介入性輔導與系統合作）",
    "explain": "以穩定一致的關懷建立信任，跨系統合作並做好記錄，不時鬆時緊或單打獨鬥造成關係斷裂。",
    "choices": [
      {
        "label": "用一致的關懷建立信任，並跨團隊定期會商",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "固定時間找他聊聊，讓他知道有人在乎",
        "tier": "good",
        "note": "穩定陪伴很好，重要進展仍要記錄通報",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "情緒好就理他、鬧脾氣就放生不理",
        "tier": "illegal",
        "note": "時鬆時緊讓高關懷生更難建立安全感",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把他當班上的麻煩，盡量不要碰他",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "私下處理一切，不讓輔導室知道細節",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sn_021",
    "cat": "輔導",
    "diff": 2,
    "scenario": "班上學生有嚴重食物過敏與氣喘，你如何在校園日常中做好安全照顧？",
    "law": "學生輔導法／學校衛生法（特殊健康需求學生照顧）",
    "explain": "建立緊急處置與用藥資訊並讓相關人員知悉，營造支持環境，不輕忽風險也不在班上渲染其病情。",
    "choices": [
      {
        "label": "備妥緊急處置流程，讓任課與同學都清楚",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "和家長校護確認用藥與發作時的處理步驟",
        "tier": "good",
        "note": "跨方確認很對，資訊揭露以照顧需要為限",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "在班上反覆強調他很脆弱不能碰他",
        "tier": "illegal",
        "note": "過度渲染病情標籤化，傷其人際與自尊",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得家長會處理，不用特別準備",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "等到發作時才臨時找人問怎麼辦",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_022",
    "cat": "輔導",
    "diff": 2,
    "scenario": "一名文化刺激不足、家中缺乏學習資源的學生跟不上進度，你如何協助縮短落差？",
    "law": "學生輔導法（文化弱勢學生之補救與資源連結）",
    "explain": "連結補救教學與課後資源、肯定其既有經驗，搭建鷹架縮短落差，不以家境出身貶低其能力或放棄他。",
    "choices": [
      {
        "label": "連結課後補救與資源，從他的經驗搭鷹架",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "肯定他生活中的能力，再補足課業缺口",
        "tier": "good",
        "note": "看見優勢很好，補救要持續且具體追蹤",
        "effects": {
          "trust": 4,
          "roleModel": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "說他「家裡這樣難怪讀不起來」放棄他",
        "tier": "illegal",
        "note": "以出身定其上限，剝奪向上的機會",
        "effects": {
          "trust": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把進度落後全部歸咎他不夠努力",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得補不起來，讓他自然跟到哪算哪",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_023",
    "cat": "輔導",
    "diff": 2,
    "scenario": "ADHD 學生家長猶豫是否就醫用藥、向你求助，你身為導師該如何回應？",
    "law": "學生輔導法／特殊教育法（親師合作與專業分工）",
    "explain": "提供客觀課堂觀察、尊重醫療專業並陪伴家長決策，連結資源，不擅自下醫療診斷或替家長決定用藥。",
    "choices": [
      {
        "label": "提供課堂觀察並陪家長尋求醫療專業評估",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "分享班級可做的支持，減輕家長的焦慮",
        "tier": "good",
        "note": "支持很好，醫療判斷仍交專業，勿越線",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "直接斷言「一定要吃藥不然救不了」",
        "tier": "illegal",
        "note": "非醫療專業卻下診斷指令，逾越分際",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫家長別想太多，孩子長大就會好",
        "tier": "wrong",
        "effects": {
          "trust": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得用不用藥是家務事，不回應",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_024",
    "cat": "輔導",
    "diff": 3,
    "scenario": "一名學生因焦慮拒學、早上常哭著不肯進校門，你身為導師如何協助他回到校園？",
    "law": "學生輔導法（拒學/懼學之介入性輔導與漸進復學）",
    "explain": "以同理建立安全感、跨輔導與家庭設計漸進復學步驟，不強拖入校或單以責備施壓加重其焦慮。",
    "choices": [
      {
        "label": "與輔導家長合作，設計漸進回校的小步驟",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先讓他每天到校待一節，建立安全經驗",
        "tier": "good",
        "note": "漸進很好，需團隊評估焦慮的根本原因",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "命令家長硬把他拖進教室坐好別鬧",
        "tier": "illegal",
        "note": "強制入校加重焦慮，破壞信任與安全感",
        "effects": {
          "trust": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "公開說他「裝病逃學要全班看著」",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "認為他根本不想念，缺課就隨他去",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_025",
    "cat": "輔導",
    "diff": 1,
    "scenario": "同學間私下叫某情緒障礙生「瘋子」、刻意疏遠他，你聽到後該怎麼處理？",
    "law": "學生輔導法（反標籤化與班級正向氛圍）",
    "explain": "立即制止標籤與貶稱、引導同理與理解，保護其尊嚴，不放任污名擴散也不在班上強調其診斷。",
    "choices": [
      {
        "label": "當下制止貶稱，引導同學理解而非害怕",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "私下和帶頭的同學談，化解誤解與恐懼",
        "tier": "good",
        "note": "個別溝通很好，也要持續觀察班級氛圍",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "為了解釋，當眾說明他的精神診斷細節",
        "tier": "illegal",
        "note": "揭露診斷違反保密，反而加深標籤",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他「別人怎麼說你忍一忍就過了」",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得只是綽號，小孩鬧著玩不用管",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_026",
    "cat": "輔導",
    "diff": 3,
    "scenario": "你發現學生身上有不明傷痕、神情閃躲疑似受虐，你身為導師該如何處理？",
    "law": "兒童及少年福利與權益保障法／學生輔導法（責任通報）",
    "explain": "教師為責任通報人，疑似受虐應於法定時限內通報，並保密保護學生，不私下查證家長或隱匿不報。",
    "choices": [
      {
        "label": "依責任通報規定即時通報，並保護其安全",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 5,
          "honor": 3,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先溫和關心傷勢來源，同步知會輔導室",
        "tier": "good",
        "note": "關懷很好，但疑似受虐務必依時限正式通報",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "怕誤會家長，先私下打給家長問清楚",
        "tier": "illegal",
        "note": "自行查證恐打草驚蛇，違反通報義務",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得可能只是跌倒，先觀察不通報",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "認為清官難斷家務事，索性不介入",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_027",
    "cat": "輔導",
    "diff": 2,
    "scenario": "學障生月考申請報讀與延長時間，部分同學抱怨「不公平」，你怎麼回應全班？",
    "law": "特殊教育法（合理調整與評量公平性）",
    "explain": "說明合理調整是讓不同需求者公平競爭而非優待，建立尊重差異的觀念，不取消其法定調整以求表面齊頭。",
    "choices": [
      {
        "label": "向全班說明合理調整是公平而非偏袒特權",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "用生活例子讓同學理解需求不同的道理",
        "tier": "good",
        "note": "比喻很好，也要顧及學障生當下的感受",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "為了平息抱怨，取消他的評量調整",
        "tier": "illegal",
        "note": "剝奪法定合理調整，違反特教權益",
        "effects": {
          "trust": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他自願放棄調整免得被同學討厭",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "不解釋，只說「老師決定就這樣」",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_028",
    "cat": "輔導",
    "diff": 2,
    "scenario": "資優生因一次小失誤崩潰大哭、自我否定強烈，你如何回應他的完美主義困擾？",
    "law": "學生輔導法（資優生情意輔導與壓力調適）",
    "explain": "關注資優生的情意需求，引導接納不完美與調適壓力，必要時連結輔導，不只看重成績而忽略其心理。",
    "choices": [
      {
        "label": "先接住情緒，引導他看見失誤的學習價值",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "和他一起設定彈性目標，鬆綁完美標準",
        "tier": "good",
        "note": "鬆綁很好，壓力過大時記得轉介輔導",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "說「考這麼高還哭是身在福中不知福」",
        "tier": "illegal",
        "note": "否定情緒只看成績，加重其自我苛責",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他「下次更小心就不會錯了」帶過",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得成績好就沒事，不必處理情緒",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_029",
    "cat": "輔導",
    "diff": 2,
    "scenario": "自閉生對巨大聲響與人多場合極度敏感，校慶活動將至，你如何協助他參與？",
    "law": "特殊教育法（感覺需求調整與融合參與）",
    "explain": "預先了解其感覺需求並提供緩衝與替代方案，讓他在可承受範圍參與，不強迫硬撐或乾脆排除他。",
    "choices": [
      {
        "label": "預告流程並備安靜緩衝區，讓他彈性參與",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "安排他做場邊不吵的任務也算一起參與",
        "tier": "good",
        "note": "替代角色很好，事前要徵詢他的意願",
        "effects": {
          "cohesion": 4,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "逼他「忍一下，別人都可以你不行嗎」",
        "tier": "illegal",
        "note": "忽視感覺障礙強迫硬撐，恐情緒崩潰",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "乾脆讓他那天請假待在家裡不要來",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得他會適應，不做任何特別安排",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sn_030",
    "cat": "輔導",
    "diff": 1,
    "scenario": "班上學生因家貧繳不出校外教學費用、難以啟齒，你如何協助又不傷他自尊？",
    "law": "學生輔導法（弱勢補助連結與隱私維護）",
    "explain": "私下協助申請補助或代為處理費用並嚴守保密，讓他能參與，不在班上公開催繳或讓他因缺費被排除。",
    "choices": [
      {
        "label": "私下幫他申請補助，讓他和大家一起出遊",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "budget": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "以匿名方式調度經費，不讓他覺得被施捨",
        "tier": "good",
        "note": "顧尊嚴很好，仍要連結學校正式補助資源",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "在班上點名催他「就差你還沒交錢」",
        "tier": "illegal",
        "note": "公開催繳暴露家境，嚴重傷害自尊",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "直接讓他留校自習，不必參加教學活動",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得繳不出就是家長的事，不處理",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_031",
    "cat": "輔導",
    "diff": 2,
    "scenario": "轉學生因外地口音被取笑、午餐沒人願同桌，你如何同時護他與帶班級？",
    "law": "學生輔導法／校園霸凌防制準則（排擠之介入與融入）",
    "explain": "制止訕笑並重建接納規範、主動營造融入，必要時啟動防制機制，不歸咎轉學生也不放任孤立持續。",
    "choices": [
      {
        "label": "制止取笑並安排輪流同桌，重建班級規範",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "私下了解帶頭者動機，化解排擠的氛圍",
        "tier": "good",
        "note": "溯源很好，孤立嚴重時須啟動霸凌處理",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "叫轉學生「改掉口音同學就會接受你」",
        "tier": "illegal",
        "note": "要受害者改變自己，等於認同排擠行為",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "讓他自己找位子，融不進是他的問題",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "覺得新生本來就難融入，順其自然",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_032",
    "cat": "輔導",
    "diff": 3,
    "scenario": "憂鬱傾向學生求助時要你「答應誰都別說」，但他透露想傷害自己，你怎麼辦？",
    "law": "學生輔導法（保密原則與自傷風險之保密例外）",
    "explain": "保密有界線，涉及自傷風險屬保密例外須通報以保安全，宜誠實向學生說明轉介，不為守密而隱匿風險。",
    "choices": [
      {
        "label": "誠實說明涉安全須通報，再陪他一起面對",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 5,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "肯定他願說出口，溫和帶他連結專輔資源",
        "tier": "good",
        "note": "接住很好，安全風險仍須突破保密通報",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "為了守住承諾，答應他絕對誰都不講",
        "tier": "illegal",
        "note": "自傷風險仍守密，恐錯失救援釀成憾事",
        "effects": {
          "trust": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "嚇他「再亂想就告訴全班讓大家盯你」",
        "tier": "wrong",
        "effects": {
          "trust": -6,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他只是說說，答應保密就算了",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_033",
    "cat": "輔導",
    "diff": 2,
    "scenario": "ADHD 學生衝動下推倒同學引發衝突，對方家長要求嚴懲，你如何公平處理？",
    "law": "特殊教育法／學生輔導法（行為功能考量與合理處置）",
    "explain": "兼顧雙方並考量其衝動特質，給予合理輔導管教與修復，連結支持，不僅以重懲了事或忽視被害方感受。",
    "choices": [
      {
        "label": "先安撫雙方，依特質給輔導管教與修復行動",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "帶兩人對話道歉，同時排正向行為支持",
        "tier": "good",
        "note": "修復很好，也要正視被推同學的委屈",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "不顧特質直接記大過給家長一個交代",
        "tier": "illegal",
        "note": "只為平息怒火重懲，忽視行為功能與支持",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "偏袒過動生說「他控制不住別計較」",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "各打五十大板,叫他們自己和好了事",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_034",
    "cat": "輔導",
    "diff": 1,
    "scenario": "新住民子女中文表達落後、上課不敢開口，你如何協助他的語言與信心？",
    "law": "學生輔導法（文化語言弱勢之學習支持）",
    "explain": "提供語言鷹架與安全的表達機會、肯定其雙語背景，連結補救資源，不嘲諷其表達或要求他隱藏家庭語言。",
    "choices": [
      {
        "label": "給他圖卡鷹架與安全的小組發言機會練習",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "肯定他會說兩種語言是難得的能力",
        "tier": "good",
        "note": "正向肯定很好，搭配補救教學更扎實",
        "effects": {
          "trust": 4,
          "roleModel": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "學他講不標準的中文逗全班笑一笑",
        "tier": "illegal",
        "note": "老師嘲弄學生，重創自信也帶壞班風",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他「回家多練好再來上課」就好",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他自己會慢慢學會，不用管",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_035",
    "cat": "輔導",
    "diff": 1,
    "scenario": "慢性病學生需定期就醫常請假、課業落後又怕同學異樣眼光，你怎麼協助？",
    "law": "學生輔導法／學校衛生法（特殊健康需求與課業協助）",
    "explain": "彈性安排補課與保密其病情，營造支持氛圍，不因頻繁請假責難或在班上公開議論他的身體狀況。",
    "choices": [
      {
        "label": "彈性安排補課並保密病情，讓他安心就醫",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "安排同學幫他整理筆記補上缺課內容",
        "tier": "good",
        "note": "同儕協助很好，也要先徵得他本人同意",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "在班上抱怨他「一直請假進度都被拖累」",
        "tier": "illegal",
        "note": "公開埋怨病情，造成同儕壓力與孤立",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "規定他請假就自己想辦法補不另協助",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得請假是他家的事，課業自己負責",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_036",
    "cat": "輔導",
    "diff": 2,
    "scenario": "高關懷學生對師長充滿戒心、刻意挑釁試探你，你如何不被激怒並建立關係？",
    "law": "學生輔導法（高關懷個案之關係建立與情緒涵容）",
    "explain": "理解挑釁是試探安全感，以穩定不被激怒的態度涵容情緒、持續關懷，不以對立還擊或放棄這名學生。",
    "choices": [
      {
        "label": "穩住情緒不被激怒，用一致關懷慢慢靠近",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "找他做點小事讓他感到被需要與信任",
        "tier": "good",
        "note": "賦予角色很好,進展與風險仍要記錄回報",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當場與他針鋒相對要他「別挑戰老師」",
        "tier": "illegal",
        "note": "以對立還擊正中試探,關係更難修復",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他無可救藥，乾脆減少跟他互動",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "cohesion": -3
        },
        "octalysis": []
      },
      {
        "label": "用威嚴壓他,讓他怕你就不敢造次",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sn_037",
    "cat": "輔導",
    "diff": 2,
    "scenario": "特教生 IEP 訂了正向行為支持目標，但在你班上難落實，你該如何調整推動？",
    "law": "特殊教育法（IEP 執行與正向行為支持落地）",
    "explain": "回到團隊檢視目標可行性並調整策略、在班級一致執行，不擅自放棄計畫或只在被觀課時做做樣子。",
    "choices": [
      {
        "label": "回團隊檢討策略，在班上一致地持續執行",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "把難落實的細節記下，IEP 檢討時提出",
        "tier": "good",
        "note": "回饋很好，過渡期班級仍要維持一致做法",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "覺得太麻煩，私下就不照 IEP 執行",
        "tier": "illegal",
        "note": "擅自棄行 IEP，違反法定執行義務",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只在輔導員來看時才做正向支持",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "roleModel": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把落實的責任全推給資源班老師",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_038",
    "cat": "輔導",
    "diff": 2,
    "scenario": "個案涉及家庭、社政與醫療多方，依三級輔導你身為導師如何在網絡中協作？",
    "law": "學生輔導法（系統合作與網絡資源整合）",
    "explain": "在輔導團隊統籌下提供校內觀察並配合分工、做好資訊保密與紀錄，不越權單獨對外聯繫或洩漏個案隱私。",
    "choices": [
      {
        "label": "在團隊分工下提供觀察並配合網絡資源運作",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "把校內觀察整理給專輔，當好第一線眼睛",
        "tier": "good",
        "note": "第一線資訊很重要，務必落實保密原則",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "自己直接聯絡社工醫師，跳過輔導團隊",
        "tier": "illegal",
        "note": "越權對外破壞分工，易洩漏個案隱私",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得有專輔在，自己完全不必參與",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "把個案細節跟其他老師當話題閒聊",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sn_039",
    "cat": "輔導",
    "diff": 1,
    "scenario": "學障生朗讀結巴被同學笑「白癡」，他羞紅了臉低頭，你當下該如何回應？",
    "law": "學生輔導法（反標籤化與課堂尊重氛圍）",
    "explain": "當下制止貶損、肯定其努力並建立尊重差異的課堂規範，保護其尊嚴，不附和嘲笑或要他「練好再來」。",
    "choices": [
      {
        "label": "立刻制止嘲笑，肯定他願意開口的勇氣",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "私下安撫他，並與全班約定尊重的規範",
        "tier": "good",
        "note": "善後很好，也要讓嘲笑者理解其影響",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "跟著說「真的有夠慢難怪被笑」附和",
        "tier": "illegal",
        "note": "老師附和貶損，徹底擊垮學生自尊",
        "effects": {
          "trust": -6,
          "honor": -5
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫他「回家多練熟一點再來朗讀」",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "假裝沒聽到笑聲，換下一個同學讀",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_040",
    "cat": "輔導",
    "diff": 3,
    "scenario": "情緒障礙學生衝突後情緒爆走、衝出教室揚言不想活，你身為導師當下怎麼做？",
    "law": "學生輔導法（危機事件之即時處理與通報）",
    "explain": "優先確保安全、不讓他獨處並即刻通報啟動危機處理，連結專業，不放任離開或獨自處理延誤救援。",
    "choices": [
      {
        "label": "立刻確保安全跟住他，同步通報危機處理",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 5,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "溫和靠近穩住情緒，並請人通知輔導室",
        "tier": "good",
        "note": "穩定很好，務必確保已正式啟動危機機制",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "怕場面難看，把他單獨關進辦公室冷靜",
        "tier": "illegal",
        "note": "讓高風險生獨處，恐釀無法挽回的後果",
        "effects": {
          "trust": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "放任他衝出去，等他自己氣消回來",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "hp": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "先回頭把班上秩序顧好再說他的事",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_041",
    "cat": "輔導",
    "diff": 2,
    "scenario": "一名資優生同時有 ADHD 特質、表現兩極常被誤解，你如何看見並支持他？",
    "law": "特殊教育法（雙重殊異學生之需求辨識與支持）",
    "explain": "同時看見其優勢與障礙需求、避免以單一面向評斷，提供充實與行為支持，不只責其分心而埋沒其天賦。",
    "choices": [
      {
        "label": "同時回應他的天賦與分心，兩種需求都顧",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "和特教團隊討論充實與行為支持並行做法",
        "tier": "good",
        "note": "雙軌很好，留意別讓他在兩極評價中受傷",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "只盯他分心,罵他「聰明卻不受教浪費」",
        "tier": "illegal",
        "note": "以單面向否定,埋沒天賦也傷害自我認同",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得他夠聰明,分心問題自己會克服",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "hp": -2
        },
        "octalysis": []
      },
      {
        "label": "把他當麻煩學生,只記錄他的違規",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_042",
    "cat": "輔導",
    "diff": 2,
    "scenario": "經濟與文化雙弱勢的學生放學無人照顧、在外遊蕩晚歸，你如何連結資源協助？",
    "law": "學生輔導法（弱勢學生課後照顧與資源連結）",
    "explain": "連結課後照顧、據點或補助等支持系統，與家庭社政合作，不僅責備其晚歸或把問題單純歸為品行不良。",
    "choices": [
      {
        "label": "連結課後據點與補助，給他安全的去處",
        "tier": "best",
        "effects": {
          "trust": 6,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "與家長社工合作，了解放學失照的原因",
        "tier": "good",
        "note": "溯源很好，資源連結要持續追蹤是否落實",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          6
        ]
      },
      {
        "label": "認定他學壞,當眾警告「再遊蕩就送輔導",
        "tier": "illegal",
        "note": "貼品行不良標籤,忽視其失照的結構處境",
        "effects": {
          "trust": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得放學後就不關老師的事,不處理",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "只記他晚歸違規,不去理解背後原因",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "hp": -2
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "sn_043",
    "cat": "輔導",
    "diff": 1,
    "scenario": "班上將迎來一名身障融合生，你如何事先帶班級做好接納的準備？",
    "law": "特殊教育法（融合教育之班級準備與同儕教育）",
    "explain": "事前進行同儕教育、培養理解與自然協助的態度,營造接納文化,不刻意凸顯其不同或將他視為被照顧的負擔。",
    "choices": [
      {
        "label": "事前帶同儕認識差異,建立自然互助的態度",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "和全班討論怎麼相處讓他像一般同學",
        "tier": "good",
        "note": "共識很好,介紹時要尊重他與家長的意願",
        "effects": {
          "cohesion": 4,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "開學就強調他「很特殊大家要多包容他」",
        "tier": "illegal",
        "note": "刻意凸顯不同,反讓他被當異類與負擔",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "什麼都不說,讓同學自己慢慢去適應",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "私下指定幾人「負責看著他」就交差",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_044",
    "cat": "輔導",
    "diff": 2,
    "scenario": "長期拒學的學生終於回到班上，卻緊張又怕被問,你如何幫他穩穩重新融入？",
    "law": "學生輔導法（復學支持與班級接納經營）",
    "explain": "低調營造接納氛圍、減輕被注視壓力並安排支持夥伴,持續陪伴,不公開追問缺席原因或讓他成為焦點。",
    "choices": [
      {
        "label": "低調安排支持夥伴,讓他像平常一樣回座",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "trust": 5,
          "hp": -4
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "事前提醒同學別追問,給他喘息的空間",
        "tier": "good",
        "note": "鋪墊很好,後續仍要追蹤他的適應狀況",
        "effects": {
          "cohesion": 3,
          "trust": 2
        },
        "octalysis": [
          5
        ]
      },
      {
        "label": "當眾要他「說說這陣子怎麼都沒來上課」",
        "tier": "illegal",
        "note": "公開逼問缺席原因,讓他更想逃離班級",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "熱情大喊歡迎回來,讓全班鼓掌歡迎他",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -2
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "假裝他沒消失過,完全不做任何安排",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "trust": -2
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "sn_045",
    "cat": "輔導",
    "diff": 3,
    "scenario": "一名學生同時面臨家變、經濟弱勢與情緒低落多重困境,你如何整體性地協助他?",
    "law": "學生輔導法（多重弱勢個案之系統性介入輔導）",
    "explain": "以個案管理視角整合輔導、社政與補助等資源系統性介入,分工陪伴,不零碎處理或讓導師獨自承擔所有重擔。",
    "choices": [
      {
        "label": "以個案視角整合各資源,團隊分工系統陪伴",
        "tier": "best",
        "effects": {
          "trust": 7,
          "roleModel": 5,
          "cohesion": 2,
          "hp": -5
        },
        "octalysis": [
          1,
          5
        ]
      },
      {
        "label": "先盤點他最急的需求,逐項連結對應資源",
        "tier": "good",
        "note": "分輕重很好,務必納入輔導團隊共同處理",
        "effects": {
          "trust": 4,
          "cohesion": 2
        },
        "octalysis": [
          2
        ]
      },
      {
        "label": "覺得太複雜,索性自己一個人硬扛到底",
        "tier": "illegal",
        "note": "獨自承擔不轉介,易耗竭又延誤專業協助",
        "effects": {
          "trust": -5,
          "hp": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "只處理看得到的成績,忽略背後的困境",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -2
        },
        "octalysis": []
      },
      {
        "label": "覺得問題太多無能為力,放著不管他",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_001",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 1,
    "scenario": "資訊科競賽要選一名選手，兩個學生都很想去，你身為導師該怎麼決定？",
    "law": "（學藝競賽輔導）",
    "explain": "公開透明的選拔標準最能服眾，也讓落選的孩子知道輸在哪、下次怎麼努力。",
    "choices": [
      {
        "label": "公開選拔標準，讓兩人各展實力再決定",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "私下問科任老師意見後直接指定人選",
        "tier": "good",
        "effects": {
          "trust": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ],
        "note": "有專業參考但程序不夠公開，學生易覺得黑箱。"
      },
      {
        "label": "用月考成績高低當唯一標準逕自刷一人",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "競賽能力與學科成績無關，這樣判定並不公平。"
      },
      {
        "label": "兩個都報名讓他們自己去場外比輸贏",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "誰先來找我報名就讓誰代表班上出賽",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_002",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 1,
    "scenario": "班上孩子報名 Scratch 程式競賽，自信滿滿卻卡關到想放棄，你怎麼陪他？",
    "law": "（班級經營原則）",
    "explain": "把大目標拆成小步驟、肯定每一次微進步，比直接給答案更能養出他的耐挫力。",
    "choices": [
      {
        "label": "陪他把難題拆成小步驟，逐關肯定進度",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "找已得獎的學長來分享卡關突破的經驗",
        "tier": "good",
        "effects": {
          "honor": 2,
          "roleModel": 2
        },
        "octalysis": [
          5
        ],
        "note": "同儕榜樣有激勵力，但仍需導師後續陪伴跟進。"
      },
      {
        "label": "直接幫他把程式寫完，先求作品交得出去",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ],
        "note": "代寫剝奪學習也違反競賽誠信，不可取。"
      },
      {
        "label": "叫他別想太多，反正得不得獎都沒差",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "要他回家自己想通，想不通就退賽算了",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_003",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 2,
    "scenario": "機器人競賽選手訓練要佔用每天午休與部分課堂，家長擔心影響功課，你怎麼拿捏？",
    "law": "（學藝競賽輔導）",
    "explain": "和家長談清楚訓練時數與補課配套，讓孩子兼顧課業與興趣，才能走得長久。",
    "choices": [
      {
        "label": "和家長約定訓練時數，並安排課業補強配套",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "roleModel": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "先讓孩子試訓兩週，再依狀況調整時間安排",
        "tier": "good",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "務實漸進但需明訂檢核點，否則容易拖延失控。"
      },
      {
        "label": "不管家長想法，要孩子全力備賽其餘擺一邊",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "漠視家長與課業會破壞親師信任，得不償失。"
      },
      {
        "label": "覺得太麻煩，乾脆勸孩子別參加這次比賽",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "讓孩子自己想辦法蹺課練習都不必跟我說",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_004",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 2,
    "scenario": "資訊課分組做專題，一組裡有人全包、有人完全擺爛，你發現後怎麼處理？",
    "law": "（班級經營原則）",
    "explain": "明確分工加上個人責任區，再公開協作貢獻，能避免有人搭便車、有人被榨乾。",
    "choices": [
      {
        "label": "重新明定分工與責任區，並追蹤每人進度",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "trust": 4,
          "climate": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "私下找擺爛的孩子聊，了解他卡住的原因",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "關懷動機很對，但仍需搭配分工調整才治本。"
      },
      {
        "label": "整組連坐扣分，讓認真的人替擺爛者受罰",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ],
        "note": "連坐懲罰打擊認真的孩子，公平性蕩然無存。"
      },
      {
        "label": "睜一隻眼閉一隻眼，反正作品交得出來就好",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "當眾點名罵擺爛的孩子要他自己看著辦",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_005",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 2,
    "scenario": "校內簡報製作競賽，你班孩子作品很用心卻在台上緊張到忘詞，賽後沮喪不已，你怎麼接？",
    "law": "（班級經營原則）",
    "explain": "先接住情緒、肯定他準備的努力，再一起復盤上台技巧，把挫折轉成下次的養分。",
    "choices": [
      {
        "label": "先肯定他的努力，再陪他復盤上台的技巧",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "找口條好的同學分享克服上台緊張的撇步",
        "tier": "good",
        "effects": {
          "roleModel": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "同儕示範很實用，但別忘了先安撫他的情緒。"
      },
      {
        "label": "當著全班檢討他忘詞，要大家引以為戒",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ],
        "note": "公開檢討等於二次傷害，會澆熄孩子的勇氣。"
      },
      {
        "label": "跟他說緊張很正常，下次自然就好別放心上",
        "tier": "wrong",
        "effects": {
          "climate": -2,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "要他別難過了，反正只是一場小比賽而已",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_006",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 2,
    "scenario": "中文打字輸入比賽，平時最快的孩子賽前一直要求加練，影響到他的睡眠與精神，你怎麼勸？",
    "law": "（學藝競賽輔導）",
    "explain": "幫他訂合理練習量與休息界線，讓他懂得適度比硬練更能穩定發揮，這也是重要一課。",
    "choices": [
      {
        "label": "幫他訂練量與休息界線，穩定比硬練重要",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "請他寫每日練習紀錄，一起檢視疲勞成效",
        "tier": "good",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          3
        ],
        "note": "量化追蹤很好，但要避免反而增加他的壓力感。"
      },
      {
        "label": "鼓勵他熬夜衝刺，反正賽後就能好好補眠",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ],
        "note": "犧牲健康換成績是錯誤示範，導師不該帶頭。"
      },
      {
        "label": "放著不管，他想練多久是他自己的事情",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆禁止他再練，怕出事直接叫他退賽",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_007",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 3,
    "scenario": "網路素養課上，你發現班上孩子私下用 AI 工具代寫資訊作業還互相分享，你怎麼處理？",
    "law": "（班級經營原則）",
    "explain": "把握機會教 AI 使用的界線與誠信，重新設計能驗證歷程的任務，比單純禁止更有效。",
    "choices": [
      {
        "label": "藉機談AI使用界線，改設能驗歷程的任務",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          1,
          2,
          3
        ]
      },
      {
        "label": "請孩子當眾示範AI怎麼用才算輔助非代寫",
        "tier": "good",
        "effects": {
          "roleModel": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "示範教學有價值，但要顧及被點名孩子的感受。"
      },
      {
        "label": "把涉及的孩子全部記過，殺雞儆猴絕後患",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "重罰未教界線只會逼孩子轉入地下，治標不治本。"
      },
      {
        "label": "假裝沒看到，反正現在大家也都這樣用",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "全面禁用AI，誰再碰就直接整組打零分",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "cohesion": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_008",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 3,
    "scenario": "資安競賽選手在團隊訓練中態度強勢，常否定隊友想法導致氣氛緊繃，你怎麼引導？",
    "law": "（學藝競賽輔導）",
    "explain": "肯定他的能力，同時帶他練習傾聽與尊重隊友，讓技術強的孩子也成為團隊的助力。",
    "choices": [
      {
        "label": "肯定他的能力，帶他練習傾聽尊重隊友",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "trust": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "安排他當隊長，用責任感督促他學會帶人",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "roleModel": 2
        },
        "octalysis": [
          4
        ],
        "note": "賦權促成長很妙，但要先確認他願意調整態度。"
      },
      {
        "label": "覺得他能力強就好，叫其他隊友多配合他",
        "tier": "illegal",
        "effects": {
          "cohesion": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "縱容強勢會犧牲團隊，也養壞孩子的人際態度。"
      },
      {
        "label": "當眾數落他太自我，要他收斂否則換人",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "把他調離團隊，讓他自己單打獨鬥去比賽",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_009",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 2,
    "scenario": "創客 maker 競賽報名截止前，孩子的作品因零件壞掉幾乎要做不完，他急得快哭出來，你怎麼陪？",
    "law": "（班級經營原則）",
    "explain": "先穩住他的情緒，再陪他盤點現有資源、找替代方案，過程中的應變力才是真正的收穫。",
    "choices": [
      {
        "label": "先穩住他情緒，再陪他盤點資源找替代方案",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "roleModel": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          6
        ]
      },
      {
        "label": "幫他聯絡其他老師看能否借到備用零件救急",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "動用人脈很實際，但別讓孩子失去自己解題機會。"
      },
      {
        "label": "索性自己動手把作品改好，先求趕上報名",
        "tier": "illegal",
        "effects": {
          "honor": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ],
        "note": "代做違反競賽精神，也剝奪孩子的應變學習。"
      },
      {
        "label": "跟他說做不完就算了，明年再參加也沒關係",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "怪他平常不檢查器材，現在出事只能自己扛",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_010",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 2,
    "scenario": "影片製作競賽，你班兩組都想用同一個拍攝主題，互不相讓開始鬧脾氣，你怎麼協調？",
    "law": "（班級經營原則）",
    "explain": "引導兩組各自說明構想差異，協助找出區隔或合作的可能，把衝突變成創意激盪的契機。",
    "choices": [
      {
        "label": "引導兩組說明構想差異，找出區隔或合作",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "trust": 3,
          "hp": -4
        },
        "octalysis": [
          3,
          5,
          7
        ]
      },
      {
        "label": "用抽籤決定主題歸屬，另一組改做延伸題",
        "tier": "good",
        "effects": {
          "climate": 2,
          "cohesion": 2
        },
        "octalysis": [
          4
        ],
        "note": "抽籤求快又公平，但少了引導溝通的成長機會。"
      },
      {
        "label": "偏袒平時表現好的那組，把主題判給他們",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ],
        "note": "偏心裁決會撕裂班級信任，公平性徹底崩盤。"
      },
      {
        "label": "叫兩組都別吵了，主題我幫你們各指定一個",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "誰再吵就兩組都取消參賽，眼不見為淨省事",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_011",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 3,
    "scenario": "資訊競賽放榜，你班孩子苦練半年仍落選，回到教室一臉失落不發一語，你第一時間怎麼接？",
    "law": "（學藝競賽輔導）",
    "explain": "先讓他知道你看見了他的努力與成長，落選不等於失敗，這份韌性會長成他未來的底氣。",
    "choices": [
      {
        "label": "先讓他知道我看見努力，落選不等於白費",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "陪他回顧這半年累積的進步與學到的本事",
        "tier": "good",
        "effects": {
          "roleModel": 3,
          "climate": 2
        },
        "octalysis": [
          3
        ],
        "note": "聚焦成長很對，但要等他情緒平復後再慢慢談。"
      },
      {
        "label": "跟他說是評審看走眼，這次根本就是黑箱",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "roleModel": -4
        },
        "octalysis": [
          8
        ],
        "note": "甩鍋給評審會教歪心態，無助孩子面對挫折。"
      },
      {
        "label": "叫他別灰心啦，下次再加油就一定有機會",
        "tier": "wrong",
        "effects": {
          "climate": -2,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "跟他說早知道實力不夠，當初就別報名了",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_012",
    "cat": "競賽",
    "sub": "資訊",
    "diff": 2,
    "scenario": "數位作品集成果發表，你班孩子的點子被別班同學公開嘲笑，他當場僵住，你怎麼當下處理？",
    "law": "（班級經營原則）",
    "explain": "立即適度為孩子撐場、肯定他的創意，事後再私下安撫，讓他知道嘗試本身就值得被尊重。",
    "choices": [
      {
        "label": "當下適度替他撐場肯定創意，事後再安撫",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "引導全場討論這個點子的優點，化解尷尬",
        "tier": "good",
        "effects": {
          "climate": 3,
          "roleModel": 2
        },
        "octalysis": [
          3
        ],
        "note": "翻轉氣氛很高明，但要留意別讓他更聚焦壓力。"
      },
      {
        "label": "跟著打圓場說別人也對，叫他別太玻璃心",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "附和嘲笑等於背叛孩子，信任會瞬間崩塌。"
      },
      {
        "label": "假裝沒聽到嘲笑，繼續往下進行發表流程",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "事後才跟他說別人講話本來就比較直白嘛",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_013",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 1,
    "scenario": "生活科技競賽要選一位選手代表班上，兩個孩子手藝都不錯，你身為導師怎麼選？",
    "law": "（學藝競賽輔導）",
    "explain": "用公開的實作評比標準來選，過程透明、結果可被說明，落選的孩子才會心服口服。",
    "choices": [
      {
        "label": "用公開實作評比標準選，過程透明可說明",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "請生科老師依平時作品水準提供推薦排序",
        "tier": "good",
        "effects": {
          "trust": 2,
          "honor": 2
        },
        "octalysis": [
          5
        ],
        "note": "有專業背書，但仍應讓孩子知道評比的依據為何。"
      },
      {
        "label": "看誰跟我熟、平常乖巧就讓誰代表出賽",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "以親疏遠近選人破壞公平，孩子會看在眼裡寒心。"
      },
      {
        "label": "乾脆兩個都不選，省得得罪另外一個孩子",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫兩人猜拳決定，輸的就摸摸鼻子認了吧",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_014",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 2,
    "scenario": "生科課動手做木工作品，有孩子嫌麻煩想草草交差，影響全組進度，你怎麼帶？",
    "law": "（班級經營原則）",
    "explain": "帶他看見作品從粗胚到成形的成就感，把工序拆小、給予即時肯定，動機往往就回來了。",
    "choices": [
      {
        "label": "帶他看見作品成形的成就，工序拆小肯定",
        "tier": "best",
        "effects": {
          "cohesion": 5,
          "climate": 4,
          "roleModel": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "讓他先負責一個他最有興趣的小部件試做",
        "tier": "good",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ],
        "note": "從興趣切入很聰明，但要留意別讓他只挑輕鬆活。"
      },
      {
        "label": "罵他偷懶丟全組臉，要他重做否則整組扣分",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ],
        "note": "羞辱加連坐只會引發反彈，也傷了認真同學的心。"
      },
      {
        "label": "隨他去，反正交得出半成品有分數就行了",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "乾脆把他的部分接手做完，免得拖累全組",
        "tier": "wrong",
        "effects": {
          "trust": -4,
          "cohesion": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_015",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 2,
    "scenario": "生科教室裡有孩子操作電鋸時沒戴護目鏡又嘻笑打鬧，你看到的當下該怎麼處置？",
    "law": "（班級經營原則）",
    "explain": "安全沒有妥協空間，立即停下動作、要求落實防護，再講清楚危險，這是不可退讓的底線。",
    "choices": [
      {
        "label": "立即喊停要求戴好護具，再講清楚危險",
        "tier": "best",
        "effects": {
          "climate": 4,
          "trust": 5,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          6,
          8
        ]
      },
      {
        "label": "先讓他暫停改在旁觀摩，等收心了再上機",
        "tier": "good",
        "effects": {
          "climate": 2,
          "trust": 2
        },
        "octalysis": [
          6
        ],
        "note": "暫停觀摩夠謹慎，但仍要當場把安全規範說明白。"
      },
      {
        "label": "覺得只是小事，叫他小心點就讓他繼續做",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "輕忽工安等於拿孩子的安全冒險，絕不可放行。"
      },
      {
        "label": "當眾大聲羞辱他笨手笨腳，嚇得全班安靜",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "沒收他的工具叫他罰站，整堂課不准再碰",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_016",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 2,
    "scenario": "動力機械競賽訓練要佔用孩子放學後時間，家長擔心耽誤補習與課業，你怎麼溝通？",
    "law": "（學藝競賽輔導）",
    "explain": "和家長攤開訓練排程與課業配套，找出彼此都能接受的平衡點，孩子才不會兩頭為難。",
    "choices": [
      {
        "label": "和家長攤開訓練排程與課業配套找平衡點",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 3,
          "roleModel": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "先排一個月試訓期，再依狀況微調時間",
        "tier": "good",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "漸進試行很穩，但要訂好檢核點避免無限延期。"
      },
      {
        "label": "不顧家長疑慮，硬要孩子天天留下加練到晚",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "無視家庭考量會破壞親師信任，也累壞孩子。"
      },
      {
        "label": "覺得溝通太累，直接勸孩子放棄這次比賽",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "叫孩子自己跟爸媽喬，喬不定就不關我的事",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_017",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 2,
    "scenario": "生科專題分組製作機構作品，有一組分工嚴重不均，動手的累翻、出嘴的納涼，你怎麼介入？",
    "law": "（班級經營原則）",
    "explain": "重新攤開工序、為每人劃定責任區並追蹤產出，讓貢獻被看見，搭便車的空間自然消失。",
    "choices": [
      {
        "label": "重新攤開工序劃責任區，並追蹤實際產出",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "trust": 4,
          "climate": 3,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "私下找納涼的孩子聊，了解他做不來或不想",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          5
        ],
        "note": "先懂原因很重要，但仍得搭配分工調整才解得了。"
      },
      {
        "label": "整組一起扣分連坐，讓認真的人替偷懶扛責",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "cohesion": -4
        },
        "octalysis": [
          8
        ],
        "note": "連坐讓努力的孩子受冤，公平與士氣同時崩盤。"
      },
      {
        "label": "假裝沒看見，反正作品做出來能交差就好",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "當著全組面點名罵納涼的，要他自己看著辦",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_018",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 3,
    "scenario": "創意設計競賽評分，你班作品落後別班，孩子質疑評審偏心、情緒激動快要失控，你怎麼引導？",
    "law": "（學藝競賽輔導）",
    "explain": "先同理他的不甘，再帶他用評分標準客觀比對作品差距，把怒氣轉成下次精進的具體方向。",
    "choices": [
      {
        "label": "先同理他的不甘，再帶他用評分標準比差距",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "陪他把得獎作品一起拆解，看別人贏在哪",
        "tier": "good",
        "effects": {
          "roleModel": 3,
          "climate": 2
        },
        "octalysis": [
          3
        ],
        "note": "拆解學習很實在，但要等他情緒緩和再進行才好。"
      },
      {
        "label": "附和他說評審偏心，這比賽根本不值得認真",
        "tier": "illegal",
        "effects": {
          "roleModel": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ],
        "note": "煽動受害心態會教歪價值觀，無助孩子面對結果。"
      },
      {
        "label": "叫他別計較了，比賽輸贏本來就是家常便飯",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "trust": -3
        },
        "octalysis": []
      },
      {
        "label": "反過來怪他作品做得不夠好還想怪評審",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_019",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 2,
    "scenario": "賽前一週孩子為了趕工機構作品，天天熬夜又翹掉其他課，精神渙散，你怎麼處理？",
    "law": "（學藝競賽輔導）",
    "explain": "幫他重排趕工進度、守住睡眠與正課底線，讓他懂得規劃比硬撐更專業，也更走得遠。",
    "choices": [
      {
        "label": "幫他重排趕工進度，守住睡眠與正課底線",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          5
        ]
      },
      {
        "label": "請他列剩餘工序清單，一起估時砍掉多餘的",
        "tier": "good",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          3
        ],
        "note": "盤點工序很實用，但要避免反而加重他的焦慮感。"
      },
      {
        "label": "默許他翹課熬夜衝刺，反正賽後再補回來",
        "tier": "illegal",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ],
        "note": "縱容犧牲健康與正課，是錯誤示範也害了孩子。"
      },
      {
        "label": "放著不管，他要怎麼趕工是他自己的選擇",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "直接叫他別比了，怕他累壞乾脆退賽省事",
        "tier": "wrong",
        "effects": {
          "cohesion": -4,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_020",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 3,
    "scenario": "生科課孩子操作器材時不慎割傷手，雖然不深但他嚇到發抖，全班也慌了，你怎麼處置？",
    "law": "（班級經營原則）",
    "explain": "先冷靜止血送處理、安撫孩子與全班情緒，事後再帶大家復盤安全程序，把意外變成教材。",
    "choices": [
      {
        "label": "先冷靜止血送處理安撫他，事後再復盤安全",
        "tier": "best",
        "effects": {
          "trust": 6,
          "climate": 4,
          "roleModel": 4,
          "hp": -4
        },
        "octalysis": [
          2,
          6,
          8
        ]
      },
      {
        "label": "立刻請鄰班老師顧班，自己專心陪他去保健",
        "tier": "good",
        "effects": {
          "trust": 3,
          "climate": 2
        },
        "octalysis": [
          6
        ],
        "note": "陪傷者很對，但別忘了同步穩住全班的慌亂情緒。"
      },
      {
        "label": "先怪他不專心才會受傷，要他下次小心點",
        "tier": "illegal",
        "effects": {
          "trust": -6,
          "climate": -4
        },
        "octalysis": [
          8
        ],
        "note": "先究責不救助會加深恐懼，也違背照護的本分。"
      },
      {
        "label": "覺得傷得不深，叫他自己貼OK繃繼續上課",
        "tier": "wrong",
        "effects": {
          "trust": -5,
          "climate": -4
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "當場慌了手腳跟著大叫，讓全班更加恐慌",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_021",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 2,
    "scenario": "團隊製作競賽作品時，孩子們對木作結構設計各有堅持，吵到快翻臉拆夥，你怎麼協調？",
    "law": "（班級經營原則）",
    "explain": "引導他們各自說明設計理由，用作品實測或試做來檢驗優劣，把爭執導向理性的共識。",
    "choices": [
      {
        "label": "引導各自說明設計理由，用試做實測檢驗",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "climate": 4,
          "trust": 3,
          "hp": -4
        },
        "octalysis": [
          3,
          5,
          7
        ]
      },
      {
        "label": "先讓大家暫停冷靜，約下節課帶草圖再談",
        "tier": "good",
        "effects": {
          "climate": 3,
          "cohesion": 2
        },
        "octalysis": [
          4
        ],
        "note": "緩衝降溫很合理，但別讓爭議就這樣不了了之。"
      },
      {
        "label": "直接拍板採用手藝最好那個孩子的設計",
        "tier": "illegal",
        "effects": {
          "cohesion": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ],
        "note": "獨斷壓過討論會讓其他孩子心寒，團隊向心力崩。"
      },
      {
        "label": "叫他們別吵了，設計就照課本範例做省事",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "climate": -3
        },
        "octalysis": []
      },
      {
        "label": "誰再吵就把整組拆掉各做各的，省得吵鬧",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "honor": -3
        },
        "octalysis": [
          8
        ]
      }
    ]
  },
  {
    "id": "cs_022",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 2,
    "scenario": "生科競賽得獎，孩子想獨佔光環，但作品其實是全組合力完成的，你怎麼引導他歸屬榮譽？",
    "law": "（學藝競賽輔導）",
    "explain": "帶他看見每個夥伴的貢獻，公開把功勞歸給團隊，讓他學會分享榮耀，這比獎狀更珍貴。",
    "choices": [
      {
        "label": "帶他看見夥伴貢獻，公開把功勞歸給團隊",
        "tier": "best",
        "effects": {
          "cohesion": 6,
          "honor": 4,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          4
        ]
      },
      {
        "label": "請每位組員分享自己負責部分，讓貢獻現形",
        "tier": "good",
        "effects": {
          "cohesion": 3,
          "honor": 2
        },
        "octalysis": [
          5
        ],
        "note": "讓貢獻現形很好，但仍要點出分享榮耀的重要性。"
      },
      {
        "label": "順著他讓他獨佔光環，反正得獎大家好看",
        "tier": "illegal",
        "effects": {
          "cohesion": -5,
          "honor": -4
        },
        "octalysis": [
          8
        ],
        "note": "縱容獨佔會寒了組員的心，也養壞孩子的價值觀。"
      },
      {
        "label": "當眾糾正他太自私，要他把獎狀分給別人",
        "tier": "wrong",
        "effects": {
          "climate": -4,
          "trust": -3
        },
        "octalysis": [
          8
        ]
      },
      {
        "label": "覺得這沒什麼好計較，誰拿榮譽都無所謂啦",
        "tier": "wrong",
        "effects": {
          "cohesion": -3,
          "honor": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_023",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 1,
    "scenario": "生科課孩子很想多花時間打磨競賽作品，卻擔心會排擠到主科複習時間，跑來問你怎麼辦？",
    "law": "（學藝競賽輔導）",
    "explain": "陪他一起排出兼顧作品與課業的時間表，讓他學會取捨與規劃，這份能力一輩子受用。",
    "choices": [
      {
        "label": "陪他排兼顧作品與課業的時間表，學會取捨",
        "tier": "best",
        "effects": {
          "trust": 5,
          "climate": 4,
          "roleModel": 3,
          "hp": -3
        },
        "octalysis": [
          2,
          3,
          5
        ]
      },
      {
        "label": "請他先列兩邊待辦，再一起判斷輕重緩急",
        "tier": "good",
        "effects": {
          "trust": 2,
          "climate": 2
        },
        "octalysis": [
          3
        ],
        "note": "盤點待辦很實用，但要陪他落實，否則只是空談。"
      },
      {
        "label": "叫他別管課業，作品做到最好得獎更重要",
        "tier": "illegal",
        "effects": {
          "trust": -5,
          "climate": -3
        },
        "octalysis": [
          8
        ],
        "note": "誘導偏廢課業是錯誤引導，會害孩子顧此失彼。"
      },
      {
        "label": "跟他說作品隨便做做，主科顧好成績才真",
        "tier": "wrong",
        "effects": {
          "climate": -3,
          "honor": -3
        },
        "octalysis": []
      },
      {
        "label": "叫他自己想辦法分配，時間都是他自己的",
        "tier": "wrong",
        "effects": {
          "trust": -3,
          "climate": -3
        },
        "octalysis": []
      }
    ]
  },
  {
    "id": "cs_024",
    "cat": "競賽",
    "sub": "生活科技",
    "diff": 2,
    "scenario": "生活科技競賽放榜落選，孩子覺得自己手藝差、再也不想碰工具了，整個人提不起勁，你怎麼接？",
    "law": "（學藝競賽輔導）",
    "explain": "肯定他這段時間磨出的真本事，帶他看見落選只是一站、不是終點，把熱情重新點回來。",
    "choices": [
      {
        "label": "肯定他磨出的真本事，落選只是一站而已",
        "tier": "best",
        "effects": {
          "climate": 5,
          "trust": 5,
          "roleModel": 4,
          "hp": -3
        },
        "octalysis": [
          2,
          5,
          1
        ]
      },
      {
        "label": "陪他回顧作品從無到有的歷程，找進步亮點",
        "tier": "good",
        "effects": {
          "roleModel": 3,
          "climate": 2
        },
        "octalysis": [
          3
        ],
        "note": "聚焦成長很對，但要等他情緒平復後再慢慢談。"
      },
      {
        "label": "跟他說手藝是天生的，沒天分就別硬碰了",
        "tier": "illegal",
        "effects": {
          "roleModel": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ],
        "note": "貼天分標籤會澆熄孩子，也徹底否定後天努力。"
      },
      {
        "label": "叫他別氣餒啦，下次再報名一定會更好的",
        "tier": "wrong",
        "effects": {
          "climate": -2,
          "trust": -2
        },
        "octalysis": []
      },
      {
        "label": "跟他說早看出他不是這塊料，別參加就好",
        "tier": "wrong",
        "effects": {
          "climate": -5,
          "trust": -4
        },
        "octalysis": [
          8
        ]
      }
    ]
  }
];
