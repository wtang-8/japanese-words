// Data for words with definitions and examples
// Generated for ~80 Japanese words from words100.md + onomatope

const WORDS = [
  {
    word: "ぐっすり 😴",
    reading: "gussuri",
    definition: "soundly; deeply (sleeping)",
    category: "onomatope",
    examples: [
      { jp: "昨夜はぐっすり眠れた。", en: "I slept soundly last night." },
      { jp: "赤ちゃんがぐっすり寝ている。", en: "The baby is sleeping deeply." },
      { jp: "疲れていたのでぐっすり眠った。", en: "I was tired, so I slept soundly." }
    ]
  },
  {
    word: "くよくよ 😟",
    reading: "kuyokuyo",
    definition: "worry excessively; brood",
    category: "onomatope",
    examples: [
      { jp: "くよくよしても仕方がない。", en: "There's no use worrying excessively." },
      { jp: "過去のことをくよくよ考えるな。", en: "Don't brood over the past." },
      { jp: "彼女はいつもくよくよしている。", en: "She's always worrying about things." }
    ]
  },
  {
    word: "ぐらぐら 🪑",
    reading: "guragura",
    definition: "wobbly; shaky; unsteady",
    category: "onomatope",
    examples: [
      { jp: "この椅子はぐらぐらする。", en: "This chair is wobbly." },
      { jp: "地震で建物がぐらぐら揺れた。", en: "The building shook shakily in the earthquake." },
      { jp: "歯がぐらぐらしている。", en: "My tooth is loose." }
    ]
  },
  {
    word: "こそこそ 🤫",
    reading: "kosokoso",
    definition: "stealthily; sneakily; furtively",
    category: "onomatope",
    examples: [
      { jp: "こそこそ何をしているの？", en: "What are you doing sneakily?" },
      { jp: "こそこそ隠れないで堂々としなさい。", en: "Don't act furtively, be confident." },
      { jp: "彼らはこそこそ話していた。", en: "They were whispering secretly." }
    ]
  },
  {
    word: "こっそり 🤐",
    reading: "kossori",
    definition: "secretly; quietly; stealthily",
    category: "onomatope",
    examples: [
      { jp: "こっそり部屋を出た。", en: "I left the room quietly." },
      { jp: "彼女にこっそりプレゼントを渡した。", en: "I secretly gave her a present." },
      { jp: "こっそり聞いていた。", en: "I was listening secretly." }
    ]
  },
  {
    word: "しっとり 💧",
    reading: "shittori",
    definition: "moist; damp; graceful and calm",
    category: "onomatope",
    examples: [
      { jp: "肌がしっとりしている。", en: "My skin is moist." },
      { jp: "しっとりとした美しさがある。", en: "There's a graceful beauty about it." },
      { jp: "クリームを塗ったらしっとりした。", en: "It became moist after applying cream." }
    ]
  },
  {
    word: "じわじわ 🐌",
    reading: "jiwajuwa",
    definition: "gradually; slowly but surely",
    category: "onomatope",
    examples: [
      { jp: "じわじわと効果が現れる。", en: "The effects appear gradually." },
      { jp: "痛みがじわじわと広がった。", en: "The pain spread slowly." },
      { jp: "じわじわと人気が出てきた。", en: "Popularity has been growing steadily." }
    ]
  },
  {
    word: "ちやほや 👑",
    reading: "chiyahoya",
    definition: "to be pampered/fawned over",
    category: "onomatope",
    examples: [
      { jp: "彼女はみんなにちやほやされている。", en: "She's being pampered by everyone." },
      { jp: "ちやほやされて調子に乗っている。", en: "He's getting cocky from being fawned over." },
      { jp: "有名人はどこでもちやほやされる。", en: "Celebrities are pampered everywhere." }
    ]
  },
  {
    word: "ちらっと 👀",
    reading: "chiratto",
    definition: "briefly; fleetingly; a quick glance",
    category: "onomatope",
    examples: [
      { jp: "彼女をちらっと見た。", en: "I glanced at her briefly." },
      { jp: "ちらっと聞いた話だが。", en: "It's just something I heard in passing, but..." },
      { jp: "窓の外をちらっと見た。", en: "I took a quick glance outside the window." }
    ]
  },
  {
    word: "ちらりと 👁️",
    reading: "chirarito",
    definition: "fleetingly; briefly; a glimpse",
    category: "onomatope",
    examples: [
      { jp: "彼の顔がちらりと見えた。", en: "I caught a glimpse of his face." },
      { jp: "ちらりと横目で見た。", en: "I glanced sideways briefly." },
      { jp: "彼女の笑顔がちらりと浮かんだ。", en: "Her smile appeared fleetingly." }
    ]
  },
  {
    word: "ちょくちょく 🔄",
    reading: "chokuchoku",
    definition: "often; frequently; every now and then",
    category: "onomatope",
    examples: [
      { jp: "ちょくちょく会いましょう。", en: "Let's meet frequently." },
      { jp: "彼はちょくちょくここに来る。", en: "He comes here often." },
      { jp: "ちょくちょく連絡を取り合っている。", en: "We keep in touch regularly." }
    ]
  },
  {
    word: "テキパキ ⚡",
    reading: "tekipaki",
    definition: "briskly; efficiently; crisply",
    category: "onomatope",
    examples: [
      { jp: "彼女はテキパキと仕事をこなす。", en: "She handles work efficiently." },
      { jp: "テキパキ動いてください。", en: "Please move briskly." },
      { jp: "テキパキした対応が素晴らしい。", en: "The crisp response is wonderful." }
    ]
  },
  {
    word: "とろとろ 🍲",
    reading: "torotoro",
    definition: "thick and creamy; melting; drowsily",
    category: "onomatope",
    examples: [
      { jp: "このスープはとろとろだ。", en: "This soup is thick and creamy." },
      { jp: "とろとろに煮込んだ肉。", en: "Meat simmered until tender." },
      { jp: "眠くてとろとろしている。", en: "I'm drowsy and half asleep." }
    ]
  },
  {
    word: "ドタバタ 💨",
    reading: "dotabata",
    definition: "hectic; chaotic; slapstick",
    category: "onomatope",
    examples: [
      { jp: "朝からドタバタしている。", en: "It's been hectic since morning." },
      { jp: "ドタバタ劇のような一日だった。", en: "It was a chaotic day like a slapstick comedy." },
      { jp: "ドタバタと準備をした。", en: "I prepared things in a rush." }
    ]
  },
  {
    word: "ドロドロ 🌊",
    reading: "dorodoro",
    definition: "muddy; thick; messy (relationships)",
    category: "onomatope",
    examples: [
      { jp: "靴がドロドロになった。", en: "My shoes got muddy." },
      { jp: "ドロドロの人間関係。", en: "Messy interpersonal relationships." },
      { jp: "このスープはドロドロしている。", en: "This soup is thick." }
    ]
  },
  {
    word: "ネチネチ 😤",
    reading: "nechineti",
    definition: "persistently; naggingly; sticky",
    category: "onomatope",
    examples: [
      { jp: "彼はネチネチと文句を言う。", en: "He complains persistently." },
      { jp: "ネチネチした性格が嫌いだ。", en: "I dislike his nagging personality." },
      { jp: "ネチネチ言わないでください。", en: "Please don't go on and on about it." }
    ]
  },
  {
    word: "のびのび 🌱",
    reading: "nobinobi",
    definition: "freely; without constraint; relaxed",
    category: "onomatope",
    examples: [
      { jp: "子供たちがのびのび遊んでいる。", en: "The children are playing freely." },
      { jp: "のびのびと育った。", en: "I grew up without constraints." },
      { jp: "のびのびとした環境が好きだ。", en: "I like a relaxed environment." }
    ]
  },
  {
    word: "どんより ☁️",
    reading: "donyori",
    definition: "gloomy; overcast; dull",
    category: "onomatope",
    examples: [
      { jp: "空がどんより曇っている。", en: "The sky is overcast and gloomy." },
      { jp: "気分がどんよりする。", en: "I feel gloomy." },
      { jp: "どんよりとした天気だ。", en: "It's gloomy weather." }
    ]
  },
  {
    word: "ピンピン 💪",
    reading: "pinpin",
    definition: "lively; energetic; in great shape",
    category: "onomatope",
    examples: [
      { jp: "おじいちゃんは90歳だけどピンピンしている。", en: "Grandpa is 90 but still lively." },
      { jp: "元気にピンピン飛び跳ねている。", en: "Jumping around energetically." },
      { jp: "病気だったのにもうピンピンしている。", en: "He was sick but is now in great shape." }
    ]
  },
  {
    word: "ひんやり ❄️",
    reading: "hinyari",
    definition: "cool; chilly; refreshingly cold",
    category: "onomatope",
    examples: [
      { jp: "朝の空気がひんやりしている。", en: "The morning air is cool." },
      { jp: "ひんやりとした風が吹いた。", en: "A chilly breeze blew." },
      { jp: "部屋の中はひんやりしていた。", en: "Inside the room was refreshingly cool." }
    ]
  },
  {
    word: "ぶらぶら 🚶",
    reading: "burabura",
    definition: "aimlessly; idly; dangling",
    category: "onomatope",
    examples: [
      { jp: "休日は街をぶらぶら歩いた。", en: "I wandered around town aimlessly on my day off." },
      { jp: "足をぶらぶらさせている。", en: "My legs are dangling." },
      { jp: "ぶらぶらと時間を過ごした。", en: "I spent time idly." }
    ]
  },
  {
    word: "ぼうっと 😶",
    reading: "bōtto",
    definition: "absentmindedly; vacantly; blankly",
    category: "onomatope",
    examples: [
      { jp: "ぼうっとして聞いていなかった。", en: "I was spacing out and wasn't listening." },
      { jp: "窓の外をぼうっと見ていた。", en: "I was staring vacantly outside the window." },
      { jp: "ぼうっとしている時間が好きだ。", en: "I like time spent spacing out." }
    ]
  },
  {
    word: "ほっと 😌",
    reading: "hotto",
    definition: "relieved; feeling at ease",
    category: "onomatope",
    examples: [
      { jp: "試験が終わってほっとした。", en: "I felt relieved when the exam ended." },
      { jp: "無事だと聞いてほっとした。", en: "I was relieved to hear everyone was safe." },
      { jp: "ほっと一息ついた。", en: "I took a breath of relief." }
    ]
  },
  {
    word: "ぼつぼつ ⏰",
    reading: "botsubotsu",
    definition: "gradually; little by little; spots/bumps",
    category: "onomatope",
    examples: [
      { jp: "ぼつぼつ始めましょうか。", en: "Shall we get started gradually?" },
      { jp: "肌にぼつぼつができた。", en: "Bumps appeared on my skin." },
      { jp: "ぼつぼつ帰る時間だ。", en: "It's about time to head home." }
    ]
  },
  {
    word: "ぽつぽつ 🌧️",
    reading: "potsupotsu",
    definition: "sparsely; bit by bit; drops (of rain)",
    category: "onomatope",
    examples: [
      { jp: "雨がぽつぽつ降り始めた。", en: "Rain started falling in drops." },
      { jp: "人がぽつぽつ集まってきた。", en: "People gathered bit by bit." },
      { jp: "ぽつぽつと話し始めた。", en: "He started speaking hesitantly." }
    ]
  },
  {
    word: "みるみる 🚀",
    reading: "mirumiru",
    definition: "visibly; rapidly before one's eyes",
    category: "onomatope",
    examples: [
      { jp: "顔色がみるみる良くなった。", en: "His complexion improved visibly." },
      { jp: "みるみる上達した。", en: "He improved rapidly." },
      { jp: "氷がみるみる溶けた。", en: "The ice melted before our eyes." }
    ]
  },
  {
    word: "めきめき 📈",
    reading: "mekimeki",
    definition: "remarkably; rapidly (improving)",
    category: "onomatope",
    examples: [
      { jp: "彼の実力はめきめき上がっている。", en: "His ability is improving remarkably." },
      { jp: "めきめき頭角を現した。", en: "He rapidly distinguished himself." },
      { jp: "練習のおかげでめきめき上達した。", en: "Thanks to practice, I improved rapidly." }
    ]
  },
  {
    word: "めそめそ 😢",
    reading: "mesomeso",
    definition: "whimpering; sniveling; tearfully",
    category: "onomatope",
    examples: [
      { jp: "めそめそ泣いている。", en: "She's whimpering." },
      { jp: "めそめそするな。", en: "Don't snivel." },
      { jp: "子供がめそめそしている。", en: "The child is crying tearfully." }
    ]
  },
  {
    word: "やんわり 🤗",
    reading: "yanwari",
    definition: "gently; softly; tactfully",
    category: "onomatope",
    examples: [
      { jp: "やんわりと断った。", en: "I declined tactfully." },
      { jp: "やんわりと注意する。", en: "Give a gentle warning." },
      { jp: "彼女はやんわりと話す。", en: "She speaks softly." }
    ]
  },
  {
    word: "うんざり 😫",
    reading: "unzari",
    definition: "fed up; sick of; disgusted",
    category: "onomatope",
    examples: [
      { jp: "毎日同じ仕事でうんざりだ。", en: "I'm fed up with the same work every day." },
      { jp: "彼の態度にうんざりした。", en: "I'm disgusted with his attitude." },
      { jp: "もううんざりだ。", en: "I'm sick of it." }
    ]
  },
  {
    word: "じっくり 🔍",
    reading: "jikkuri",
    definition: "carefully; thoroughly; deliberately",
    category: "onomatope",
    examples: [
      { jp: "じっくり考える時間が必要だ。", en: "I need time to think carefully." },
      { jp: "じっくり話し合いましょう。", en: "Let's discuss it thoroughly." },
      { jp: "じっくり煮込んだスープ。", en: "Soup simmered slowly." }
    ]
  },
  {
    word: "きょろきょろ 👁️👁️",
    reading: "kyorokyoro",
    definition: "looking around restlessly; glancing about",
    category: "onomatope",
    examples: [
      { jp: "彼はきょろきょろ周りを見ていた。", en: "He was looking around restlessly." },
      { jp: "道に迷ってきょろきょろしている。", en: "I'm lost and glancing around." },
      { jp: "きょろきょろしないで落ち着きなさい。", en: "Stop looking around and calm down." }
    ]
  },
  {
    word: "ちょっぴり 🤏",
    reading: "choppiri",
    definition: "a little bit; slightly; a tad",
    category: "onomatope",
    examples: [
      { jp: "ちょっぴり悲しい。", en: "I'm a little bit sad." },
      { jp: "ちょっぴり辛いけど美味しい。", en: "It's slightly spicy but delicious." },
      { jp: "ちょっぴり心配だ。", en: "I'm a tad worried." }
    ]
  },
  {
    word: "つくづく 💭",
    reading: "tsukuzuku",
    definition: "keenly; deeply; really",
    category: "onomatope",
    examples: [
      { jp: "つくづく思う。", en: "I think deeply about it." },
      { jp: "つくづく運が良かったと感じる。", en: "I really feel I was lucky." },
      { jp: "つくづく疲れた。", en: "I'm truly exhausted." }
    ]
  },
  {
    word: "はっと 😲",
    reading: "hatto",
    definition: "with a start; suddenly realizing",
    category: "onomatope",
    examples: [
      { jp: "彼の言葉にはっとした。", en: "His words made me realize with a start." },
      { jp: "はっと気づいた。", en: "I suddenly realized." },
      { jp: "はっと振り返った。", en: "I turned around with a start." }
    ]
  },
  {
    word: "はるばる 🛤️",
    reading: "harubaru",
    definition: "all the way; from afar; over a great distance",
    category: "onomatope",
    examples: [
      { jp: "はるばる日本から来ました。", en: "I came all the way from Japan." },
      { jp: "はるばる訪ねてきた。", en: "He came from afar to visit." },
      { jp: "はるばるありがとうございます。", en: "Thank you for coming such a long way." }
    ]
  },
  {
    word: "ひょっとして 🤔",
    reading: "hyottoshite",
    definition: "by any chance; perhaps; possibly",
    category: "onomatope",
    examples: [
      { jp: "ひょっとして、田中さんですか？", en: "By any chance, are you Mr. Tanaka?" },
      { jp: "ひょっとしたら間違っているかもしれない。", en: "Perhaps I might be wrong." },
      { jp: "ひょっとして知っているの？", en: "Do you possibly know about it?" }
    ]
  },
  {
    word: "長々 ⏳",
    reading: "ながなが (naganaga)",
    definition: "at great length; for a long time",
    category: "onomatope",
    examples: [
      { jp: "長々とお待たせしました。", en: "I've kept you waiting for a long time." },
      { jp: "長々と話してしまった。", en: "I ended up talking at great length." },
      { jp: "長々と説明する必要はない。", en: "There's no need to explain at length." }
    ]
  },
  {
    word: "ガッチリ 🏋️",
    reading: "gatchiri",
    definition: "solidly built; firmly; tightly",
    category: "onomatope",
    examples: [
      { jp: "彼はガッチリした体格だ。", en: "He has a solidly built physique." },
      { jp: "ガッチリ握手した。", en: "We shook hands firmly." },
      { jp: "ガッチリ固定してください。", en: "Please secure it tightly." }
    ]
  },
  {
    word: "がさがさ 🍂",
    reading: "gasagasa",
    definition: "rustling; rough/dry; scratchy sound or texture",
    category: "onomatope",
    examples: [
      { jp: "枯れ葉が風に吹かれてがさがさと音を立てた。", en: "The dry leaves made a rustling sound in the wind." },
      { jp: "手ががさがさしているから、ハンドクリームを塗った。", en: "My hands are rough and dry, so I put on hand cream." },
      { jp: "古い紙袋ががさがさと机の下で動いた。", en: "An old paper bag rustled under the desk." }
    ]
  },
  {
    word: "おどおど 😰",
    reading: "odoodo",
    definition: "timidly; nervously; hesitantly",
    category: "onomatope",
    examples: [
      { jp: "彼は上司の前でおどおどと話した。", en: "He spoke nervously in front of his boss." },
      { jp: "初めての発表でおどおどしてしまった。", en: "I became timid during my first presentation." },
      { jp: "彼女は知らない人に話しかけられておどおどしている。", en: "She looks nervous when a stranger talks to her." }
    ]
  },
  {
    word: "うとうと 😪",
    reading: "utouto",
    definition: "dozing; nodding off lightly",
    category: "onomatope",
    examples: [
      { jp: "電車の中でうとうとして乗り過ごしそうになった。", en: "I dozed on the train and almost missed my stop." },
      { jp: "午後になるといつもうとうとしてしまう。", en: "I tend to nod off in the afternoon." },
      { jp: "赤ちゃんがミルクを飲みながらうとうとしている。", en: "The baby is dozing while drinking milk." }
    ]
  },
  {
    word: "うっとり 😍",
    reading: "uttori",
    definition: "entranced; spellbound; absorbed in delight",
    category: "onomatope",
    examples: [
      { jp: "美しい音楽を聞いてうっとりしてしまった。", en: "I became entranced listening to the beautiful music." },
      { jp: "彼女は夜景にうっとり見入っていた。", en: "She gazed at the night view, spellbound." },
      { jp: "香りのよい花にうっとりと顔を近づけた。", en: "I leaned in, entranced by the fragrant flowers." }
    ]
  },
  {
    word: "ぼんやり 🌫️",
    reading: "bonyari",
    definition: "absentmindedly; vaguely; idly; hazily",
    category: "onomatope",
    examples: [
      { jp: "窓の外をぼんやり眺めて時間が過ぎた。", en: "Time passed as I stared vacantly out the window." },
      { jp: "朝は頭がぼんやりして集中できない。", en: "My head feels hazy in the morning and I can't focus." },
      { jp: "遠くに山がぼんやりと見える。", en: "The mountains are visible faintly in the distance." }
    ]
  },
  {
    word: "御子息",
    reading: "ごしそく (goshisoku)",
    definition: "your son (honorific)",
    category: "regular",
    examples: [
      { jp: "御子息は今年大学を卒業されるとお聞きしました。", en: "I heard your son will graduate from university this year." },
      { jp: "御子息の進路について相談させていただけますか。", en: "May I consult with you about your son's career path?" },
      { jp: "御子息はどちらの会社にお勤めですか。", en: "Which company does your son work for?" }
    ]
  },
  {
    word: "明朝",
    reading: "みょうちょう (myōchō)",
    definition: "tomorrow morning",
    examples: [
      { jp: "明朝、駅前で待ち合わせましょう。", en: "Let's meet in front of the station tomorrow morning." },
      { jp: "明朝７時に出発する予定です。", en: "We plan to depart at 7 AM tomorrow morning." },
      { jp: "明朝までにこの資料を完成させなければならない。", en: "I must finish this document by tomorrow morning." }
    ]
  },
  {
    word: "御行",
    reading: "ごぎょう (gogyō)",
    definition: "your going/trip (honorific)",
    examples: [
      { jp: "御行の際はお気をつけてお出かけください。", en: "Please be careful on your trip." },
      { jp: "明日の御行をお待ちしております。", en: "We look forward to your visit tomorrow." },
      { jp: "御行の日程をお知らせください。", en: "Please inform us of your travel schedule." }
    ]
  },
  {
    word: "ご健勝",
    reading: "ごけんしょう (gokenshō)",
    definition: "good health (respectful wish)",
    examples: [
      { jp: "ご健勝とご活躍をお祈り申し上げます。", en: "I pray for your good health and success." },
      { jp: "皆様のご健勝を心よりお祈りいたします。", en: "I sincerely wish everyone good health." },
      { jp: "ご健勝でお過ごしのことと存じます。", en: "I trust you are in good health." }
    ]
  },
  {
    word: "何なりとお申し付けください",
    reading: "なんなりとおもうしつけください (nan nari to o-mōshitsuke kudasai)",
    definition: "please let me know if there's anything (I can do)",
    examples: [
      { jp: "ご不明な点がございましたら、何なりとお申し付けください。", en: "If you have any questions, please feel free to ask." },
      { jp: "お困りのことがあれば何なりとお申し付けください。", en: "If you need anything, please don't hesitate to ask." },
      { jp: "滞在中、何なりとお申し付けください。", en: "Please let us know if you need anything during your stay." }
    ]
  },
  {
    word: "何卒よろしくお願いします",
    reading: "なにとぞよろしくおねがいします (nanitozo yoroshiku onegai shimasu)",
    definition: "please kindly (formal request)",
    examples: [
      { jp: "今後とも何卒よろしくお願いします。", en: "We kindly ask for your continued support." },
      { jp: "ご検討のほど、何卒よろしくお願いします。", en: "We kindly ask for your consideration." },
      { jp: "ご協力を何卒よろしくお願いします。", en: "We sincerely request your cooperation." }
    ]
  },
  {
    word: "取り急ぎご連絡させていただきました",
    reading: "とりいそぎごれんらくさせていただきました (tori-isogi go-renraku sasete itadakimashita)",
    definition: "I'm contacting you urgently/quickly",
    examples: [
      { jp: "詳細は後ほどお知らせしますが、取り急ぎご連絡させていただきました。", en: "I'll provide details later, but wanted to contact you right away." },
      { jp: "まずは取り急ぎご連絡させていただきました。", en: "This is just a quick message for now." },
      { jp: "取り急ぎご連絡させていただきましたが、何かご不明点はございますか。", en: "I've contacted you quickly, but do you have any questions?" }
    ]
  },
  {
    word: "お気になさらないでください",
    reading: "おきになさらないでください (o-ki ni nasaranai de kudasai)",
    definition: "please don't worry about it",
    examples: [
      { jp: "遅刻については、どうぞお気になさらないでください。", en: "Please don't worry about being late." },
      { jp: "お気になさらないでください。問題ありません。", en: "Please don't worry about it. It's not a problem." },
      { jp: "その件はもうお気になさらないでください。", en: "Please don't concern yourself with that matter anymore." }
    ]
  },
  {
    word: "お力添えありがとうございます",
    reading: "おちからぞえありがとうございます (o-chikarazoe arigatō gozaimasu)",
    definition: "thank you for your assistance/support",
    examples: [
      { jp: "プロジェクト成功のためのお力添えありがとうございます。", en: "Thank you for your support in making the project a success." },
      { jp: "いつもお力添えありがとうございます。", en: "Thank you for always helping us." },
      { jp: "皆様のお力添えありがとうございます。", en: "Thank you everyone for your assistance." }
    ]
  },
  {
    word: "くれぐれもお気をつけください",
    reading: "くれぐれもおきをつけください (kureguremo o-ki wo tsukete kudasai)",
    definition: "please take good care (of yourself)",
    examples: [
      { jp: "寒い日が続きますので、くれぐれもお気をつけください。", en: "It's been cold, so please take good care of yourself." },
      { jp: "お帰りの際は、くれぐれもお気をつけください。", en: "Please be careful on your way home." },
      { jp: "体調にはくれぐれもお気をつけください。", en: "Please take good care of your health." }
    ]
  },
  {
    word: "ご贔屓いただきありがとうございます",
    reading: "ごひいきいただきありがとうございます (go-hiiki itadaki arigatō gozaimasu)",
    definition: "thank you for your patronage/continued support",
    examples: [
      { jp: "いつもご贔屓いただきありがとうございます。", en: "Thank you for your continued patronage." },
      { jp: "長年ご贔屓いただきありがとうございます。", en: "Thank you for your long-standing support." },
      { jp: "今後ともご贔屓いただきありがとうございます。", en: "Thank you for your continued patronage in the future." }
    ]
  },
  {
    word: "ご厚意に感謝いたします",
    reading: "ごこういにかんしゃいたします (go-kōi ni kansha itashimasu)",
    definition: "I'm grateful for your kindness",
    examples: [
      { jp: "温かいご厚意に感謝いたします。", en: "I'm grateful for your warm kindness." },
      { jp: "このたびのご厚意に感謝いたします。", en: "I appreciate your kindness on this occasion." },
      { jp: "皆様のご厚意に感謝いたします。", en: "I'm thankful for everyone's kindness." }
    ]
  },
  {
    word: "ご無沙汰しております",
    reading: "ごぶさたしております (go-busata shite orimasu)",
    definition: "it's been a long time (since we last met)",
    examples: [
      { jp: "大変ご無沙汰しております。お元気でしたか。", en: "It's been a long time. How have you been?" },
      { jp: "ご無沙汰しております。また連絡させていただきます。", en: "Sorry for not being in touch. I'll contact you again." },
      { jp: "ご無沙汰しておりますが、変わらずお過ごしでしょうか。", en: "It's been a while, but I hope you're doing well as always." }
    ]
  },
  {
    word: "ご愛好にいただきありがとうございます",
    reading: "ごあいこうにいただきありがとうございます (go-aikō ni itadaki arigatō gozaimasu)",
    definition: "thank you for your patronage/love (of our products)",
    examples: [
      { jp: "当店の商品をご愛好にいただきありがとうございます。", en: "Thank you for loving our products." },
      { jp: "長年ご愛好にいただきありがとうございます。", en: "Thank you for your long-time patronage." },
      { jp: "いつもご愛好にいただきありがとうございます。", en: "Thank you for always supporting us." }
    ]
  },
  {
    word: "頭打ちになる",
    reading: "あたまうちになる (atamauchi ni naru)",
    definition: "to reach a ceiling/plateau; to peak",
    examples: [
      { jp: "売上が頭打ちになってしまった。", en: "Sales have reached a plateau." },
      { jp: "経済成長が頭打ちになる兆候が見られる。", en: "There are signs that economic growth is peaking." },
      { jp: "このままでは成績が頭打ちになるだろう。", en: "At this rate, my grades will hit a ceiling." }
    ]
  },
  {
    word: "波に乗る",
    reading: "なみにのる (nami ni noru)",
    definition: "to ride the wave; to gain momentum",
    examples: [
      { jp: "彼のビジネスは波に乗っている。", en: "His business is riding a wave of success." },
      { jp: "最近、仕事が波に乗ってきた。", en: "Lately, my work has been gaining momentum." },
      { jp: "チームが波に乗り始めた。", en: "The team has started to build momentum." }
    ]
  },
  {
    word: "鼻をつく",
    reading: "はなをつく (hana wo tsuku)",
    definition: "to be pungent/offensive (smell); to be irritating",
    examples: [
      { jp: "この匂いは鼻をつく。", en: "This smell is pungent." },
      { jp: "彼の態度が鼻をつく。", en: "His attitude is irritating." },
      { jp: "強い香水の匂いが鼻をついた。", en: "The strong perfume smell was offensive." }
    ]
  },
  {
    word: "本末転倒",
    reading: "ほんまつてんとう (honmatsu-tentō)",
    definition: "putting the cart before the horse; reversing priorities",
    examples: [
      { jp: "お金のために健康を犠牲にするのは本末転倒だ。", en: "Sacrificing health for money is putting the cart before the horse." },
      { jp: "それは本末転倒な考え方です。", en: "That's a backwards way of thinking." },
      { jp: "目的と手段が本末転倒している。", en: "The means and ends are reversed." }
    ]
  },
  {
    word: "目に見える",
    reading: "めにみえる (me ni mieru)",
    definition: "visible; obvious; noticeable",
    examples: [
      { jp: "彼の努力は目に見える形で現れている。", en: "His efforts are showing in visible ways." },
      { jp: "目に見える成果が出始めた。", en: "Visible results have started to appear." },
      { jp: "変化が目に見えてわかる。", en: "The changes are clearly visible." }
    ]
  },
  {
    word: "お祭りムード一色",
    reading: "おまつりムードいっしょく (omatsuri mūdo isshoku)",
    definition: "entirely in a festive mood",
    examples: [
      { jp: "街はお祭りムード一色だ。", en: "The town is entirely in a festive mood." },
      { jp: "会場はお祭りムード一色に包まれた。", en: "The venue was filled with a festive atmosphere." },
      { jp: "年末になると、街はお祭りムード一色になる。", en: "At year-end, the town becomes entirely festive." }
    ]
  },
  {
    word: "会心の一撃",
    reading: "かいしんのいちげき (kaishin no ichigeki)",
    definition: "a critical hit; a satisfying blow",
    examples: [
      { jp: "彼は会心の一撃を放った。", en: "He delivered a critical hit." },
      { jp: "この提案が会心の一撃となった。", en: "This proposal was the decisive blow." },
      { jp: "会心の一撃で試合を決めた。", en: "He won the match with a critical strike." }
    ]
  },
  {
    word: "みるみるうちに",
    reading: "みるみるうちに (mirumiru uchi ni)",
    definition: "in the blink of an eye; rapidly",
    examples: [
      { jp: "雪がみるみるうちに積もった。", en: "The snow piled up in the blink of an eye." },
      { jp: "彼の体調はみるみるうちに良くなった。", en: "His health improved rapidly." },
      { jp: "水がみるみるうちに蒸発した。", en: "The water evaporated before our eyes." }
    ]
  },
  {
    word: "お年を召す",
    reading: "おとしをめす (o-toshi wo mesu)",
    definition: "to be elderly (respectful)",
    examples: [
      { jp: "お年を召されても、元気でいらっしゃいますね。", en: "Even though you're elderly, you're still energetic." },
      { jp: "お年を召した方には席をお譲りください。", en: "Please offer your seat to elderly people." },
      { jp: "お年を召されてもお元気で何よりです。", en: "I'm glad you're healthy despite your age." }
    ]
  },
  {
    word: "先入観",
    reading: "せんにゅうかん (sennyūkan)",
    definition: "preconception; prejudice; bias",
    examples: [
      { jp: "先入観を持たずに判断すべきだ。", en: "We should judge without preconceptions." },
      { jp: "彼に対する先入観を捨てた。", en: "I abandoned my prejudice toward him." },
      { jp: "先入観が邪魔をすることがある。", en: "Preconceptions can sometimes get in the way." }
    ]
  },
  {
    word: "首都圏",
    reading: "しゅとけん (shutoken)",
    definition: "metropolitan area (around the capital)",
    examples: [
      { jp: "首都圏では人口が増え続けている。", en: "The population in the metropolitan area continues to grow." },
      { jp: "彼は首都圏で働いている。", en: "He works in the capital region." },
      { jp: "首都圏の交通網は発達している。", en: "The transportation network in the metropolitan area is well-developed." }
    ]
  },
  {
    word: "アジア圏",
    reading: "アジアけん (Ajia-ken)",
    definition: "Asian region/sphere",
    examples: [
      { jp: "アジア圏での売上が伸びている。", en: "Sales in the Asian region are growing." },
      { jp: "アジア圏には多様な文化がある。", en: "The Asian sphere has diverse cultures." },
      { jp: "彼はアジア圏を担当している。", en: "He's in charge of the Asian region." }
    ]
  },
  {
    word: "主導権",
    reading: "しゅどうけん (shudōken)",
    definition: "leadership; initiative; control",
    examples: [
      { jp: "プロジェクトの主導権を握る。", en: "To take the lead on the project." },
      { jp: "彼らは市場の主導権を持っている。", en: "They have control of the market." },
      { jp: "主導権を失わないようにしなければならない。", en: "We must not lose the initiative." }
    ]
  },
  {
    word: "選挙権",
    reading: "せんきょけん (senkyoken)",
    definition: "right to vote; suffrage",
    examples: [
      { jp: "18歳で選挙権を得る。", en: "You gain the right to vote at 18." },
      { jp: "選挙権を行使することは重要だ。", en: "Exercising your voting rights is important." },
      { jp: "全ての成人に選挙権がある。", en: "All adults have suffrage." }
    ]
  },
  {
    word: "供給源",
    reading: "きょうきゅうげん (kyōkyūgen)",
    definition: "source of supply",
    examples: [
      { jp: "新しい供給源を見つける必要がある。", en: "We need to find a new source of supply." },
      { jp: "この地域は水の供給源だ。", en: "This area is a water supply source." },
      { jp: "エネルギーの供給源を多様化する。", en: "Diversify energy supply sources." }
    ]
  },
  {
    word: "発信源",
    reading: "はっしんげん (hasshingen)",
    definition: "source of transmission/origin",
    examples: [
      { jp: "情報の発信源を確認する。", en: "Verify the source of the information." },
      { jp: "このニュースの発信源はどこですか。", en: "What's the origin of this news?" },
      { jp: "発信源を特定することができた。", en: "We were able to identify the transmission source." }
    ]
  },
  {
    word: "発生源",
    reading: "はっせいげん (hasseigen)",
    definition: "source (of occurrence); origin",
    examples: [
      { jp: "問題の発生源を調査している。", en: "We're investigating the source of the problem." },
      { jp: "臭いの発生源を見つけた。", en: "I found the source of the smell." },
      { jp: "ウイルスの発生源は不明だ。", en: "The origin of the virus is unknown." }
    ]
  },
  {
    word: "触り心地",
    reading: "さわりごこち (sawarigokochi)",
    definition: "texture; how something feels to touch",
    examples: [
      { jp: "この布は触り心地が良い。", en: "This fabric has a nice texture." },
      { jp: "触り心地が柔らかい素材を選んだ。", en: "I chose a material with a soft feel." },
      { jp: "触り心地にこだわった商品です。", en: "This is a product that focuses on texture." }
    ]
  },
  {
    word: "書き心地",
    reading: "かきごこち (kakigokochi)",
    definition: "writing feel; how a pen feels to write with",
    examples: [
      { jp: "このペンは書き心地が良い。", en: "This pen has a nice writing feel." },
      { jp: "書き心地にこだわって選んだ。", en: "I chose it based on how it feels to write with." },
      { jp: "滑らかな書き心地が特徴です。", en: "Its smooth writing feel is its feature." }
    ]
  },
  {
    word: "検索隊",
    reading: "けんさくたい (kensakutai)",
    definition: "search party/team",
    examples: [
      { jp: "検索隊が山に入った。", en: "The search party entered the mountain." },
      { jp: "検索隊を組織する必要がある。", en: "We need to organize a search team." },
      { jp: "検索隊は朝から捜索を続けている。", en: "The search party has been searching since morning." }
    ]
  },
  {
    word: "流通網",
    reading: "りゅうつうもう (ryūtsūmō)",
    definition: "distribution network",
    examples: [
      { jp: "全国に流通網を持っている。", en: "They have a distribution network nationwide." },
      { jp: "流通網を拡大する計画だ。", en: "We plan to expand the distribution network." },
      { jp: "効率的な流通網を構築した。", en: "We built an efficient distribution network." }
    ]
  },
  {
    word: "空欄",
    reading: "くうらん (kūran)",
    definition: "blank space; blank (on a form)",
    examples: [
      { jp: "空欄に記入してください。", en: "Please fill in the blanks." },
      { jp: "空欄がないか確認してください。", en: "Please check if there are any blank spaces." },
      { jp: "この空欄には何を書けばいいですか。", en: "What should I write in this blank?" }
    ]
  },
  {
    word: "これといった",
    reading: "これといった (kore to itta)",
    definition: "particular; special; noteworthy",
    examples: [
      { jp: "これといった問題はありません。", en: "There are no particular problems." },
      { jp: "これといった趣味がない。", en: "I don't have any special hobbies." },
      { jp: "これといった理由はない。", en: "There's no particular reason." }
    ]
  },
  {
    word: "さじを投げる",
    reading: "さじをなげる (saji wo nageru)",
    definition: "to give up; to throw in the towel",
    examples: [
      { jp: "医者もさじを投げた。", en: "Even the doctor gave up." },
      { jp: "彼の態度にさじを投げた。", en: "I gave up on his attitude." },
      { jp: "もうさじを投げるしかない。", en: "There's nothing left but to give up." }
    ]
  },
  {
    word: "そっぽを向く",
    reading: "そっぽをむく (soppo wo muku)",
    definition: "to look away; to turn one's back; to ignore",
    examples: [
      { jp: "彼は私の話にそっぽを向いた。", en: "He turned away from my story." },
      { jp: "そっぽを向かれて悲しかった。", en: "I was sad when they ignored me." },
      { jp: "助けを求めたが、みんなそっぽを向いた。", en: "I asked for help, but everyone looked away." }
    ]
  },
  {
    word: "鼻にかける",
    reading: "はなにかける (hana ni kakeru)",
    definition: "to be proud/boastful (of something)",
    examples: [
      { jp: "彼は学歴を鼻にかけている。", en: "He's proud of his academic background." },
      { jp: "お金持ちだからと鼻にかけるな。", en: "Don't be boastful just because you're rich." },
      { jp: "成功を鼻にかける人は嫌いだ。", en: "I dislike people who boast about their success." }
    ]
  },
  {
    word: "腑に落ちる",
    reading: "ふにおちる (fu ni ochiru)",
    definition: "to make sense; to be convinced",
    examples: [
      { jp: "彼の説明は腑に落ちた。", en: "His explanation made sense." },
      { jp: "どうしても腑に落ちない。", en: "I just can't be convinced." },
      { jp: "ようやく腑に落ちる答えが見つかった。", en: "I finally found an answer that makes sense." }
    ]
  },
  {
    word: "顔が広い",
    reading: "かおがひろい (kao ga hiroi)",
    definition: "to have many connections/contacts",
    examples: [
      { jp: "彼は業界で顔が広い。", en: "He has many connections in the industry." },
      { jp: "顔が広い人に紹介してもらった。", en: "I was introduced by someone with many contacts." },
      { jp: "政治家は顔が広い必要がある。", en: "Politicians need to have extensive networks." }
    ]
  },
  {
    word: "口出し",
    reading: "くちだし (kuchidashi)",
    definition: "interference; meddling; butting in",
    examples: [
      { jp: "余計な口出しはしないでください。", en: "Please don't meddle unnecessarily." },
      { jp: "彼は口出しが多い。", en: "He interferes a lot." },
      { jp: "口出しせずに見守ることにした。", en: "I decided to watch without butting in." }
    ]
  },
  {
    word: "超特急",
    reading: "ちょうとっきゅう (chō-tokkyū)",
    definition: "super express; ultra-fast",
    examples: [
      { jp: "超特急で仕上げてください。", en: "Please finish it ultra-fast." },
      { jp: "超特急で駆けつけた。", en: "I rushed over at top speed." },
      { jp: "超特急で処理します。", en: "I'll process it super quickly." }
    ]
  },
  {
    word: "被雇用者",
    reading: "ひこようしゃ (hikoyōsha)",
    definition: "employee; employed person",
    examples: [
      { jp: "被雇用者の権利を守る。", en: "Protect employees' rights." },
      { jp: "被雇用者として働いている。", en: "I work as an employee." },
      { jp: "被雇用者数が増加している。", en: "The number of employees is increasing." }
    ]
  },
  {
    word: "被扶養者",
    reading: "ひふようしゃ (hifuyōsha)",
    definition: "dependent (family member)",
    examples: [
      { jp: "被扶養者として登録する。", en: "Register as a dependent." },
      { jp: "被扶養者の人数を申告してください。", en: "Please declare the number of dependents." },
      { jp: "配偶者は被扶養者になります。", en: "Your spouse becomes a dependent." }
    ]
  },
  {
    word: "無自覚",
    reading: "むじかく (mujikaku)",
    definition: "unconscious; unaware",
    examples: [
      { jp: "彼は自分の問題に無自覚だ。", en: "He's unaware of his own problems." },
      { jp: "無自覚のうちに迷惑をかけていた。", en: "I was causing trouble without realizing it." },
      { jp: "無自覚な行動が多い。", en: "There are many unconscious behaviors." }
    ]
  },
  {
    word: "猛勉強",
    reading: "もうべんきょう (mō-benkyō)",
    definition: "intensive study; cramming hard",
    examples: [
      { jp: "試験前に猛勉強した。", en: "I studied intensively before the exam." },
      { jp: "一週間猛勉強を続けた。", en: "I kept up intensive studying for a week." },
      { jp: "猛勉強のおかげで合格できた。", en: "I passed thanks to my hard cramming." }
    ]
  },
  {
    word: "猛暑日",
    reading: "もうしょび (mōshobi)",
    definition: "extremely hot day (35°C+)",
    examples: [
      { jp: "今日は猛暑日になる予報だ。", en: "Today is forecast to be an extremely hot day." },
      { jp: "猛暑日が続いている。", en: "Extremely hot days continue." },
      { jp: "猛暑日には外出を控えましょう。", en: "Avoid going out on extremely hot days." }
    ]
  },
  {
    word: "猛特訓",
    reading: "もうとっくん (mō-tokkun)",
    definition: "intensive training; rigorous practice",
    examples: [
      { jp: "試合前に猛特訓した。", en: "I trained intensively before the match." },
      { jp: "毎日猛特訓を続けている。", en: "I continue rigorous training every day." },
      { jp: "猛特訓の成果が出た。", en: "The intensive training paid off." }
    ]
  },
  {
    word: "温暖化",
    reading: "おんだんか (ondanka)",
    definition: "global warming",
    examples: [
      { jp: "地球温暖化が深刻な問題だ。", en: "Global warming is a serious problem." },
      { jp: "温暖化対策を進める必要がある。", en: "We need to advance measures against warming." },
      { jp: "温暖化の影響で気候が変わっている。", en: "The climate is changing due to global warming." }
    ]
  },
  {
    word: "応接室",
    reading: "おうせつしつ (ōsetsushitsu)",
    definition: "reception room; parlor",
    examples: [
      { jp: "お客様を応接室にご案内する。", en: "I'll guide the guests to the reception room." },
      { jp: "応接室でお待ちください。", en: "Please wait in the parlor." },
      { jp: "応接室で会議を行う。", en: "We'll hold the meeting in the reception room." }
    ]
  },
  {
    word: "配偶者",
    reading: "はいぐうしゃ (haigūsha)",
    definition: "spouse",
    examples: [
      { jp: "配偶者の氏名を記入してください。", en: "Please fill in your spouse's name." },
      { jp: "配偶者控除を申請する。", en: "Apply for a spousal deduction." },
      { jp: "配偶者と一緒に参加します。", en: "I'll attend with my spouse." }
    ]
  },
  {
    word: "統率者",
    reading: "とうそつしゃ (tōsotsusha)",
    definition: "leader; commander",
    examples: [
      { jp: "彼はチームの統率者だ。", en: "He's the team leader." },
      { jp: "優れた統率者が必要だ。", en: "We need an excellent commander." },
      { jp: "統率者としての資質がある。", en: "He has the qualities of a leader." }
    ]
  },
  {
    word: "耐久性",
    reading: "たいきゅうせい (taikyūsei)",
    definition: "durability; endurance",
    examples: [
      { jp: "この素材は耐久性が高い。", en: "This material has high durability." },
      { jp: "耐久性に優れた製品です。", en: "It's a product with excellent endurance." },
      { jp: "耐久性をテストする。", en: "Test the durability." }
    ]
  },
  {
    word: "植民地",
    reading: "しょくみんち (shokuminchi)",
    definition: "colony",
    examples: [
      { jp: "多くの国が植民地を持っていた。", en: "Many countries had colonies." },
      { jp: "植民地から独立した。", en: "They gained independence from the colony." },
      { jp: "植民地時代の歴史を学ぶ。", en: "Learn about colonial history." }
    ]
  },
  {
    word: "保守派",
    reading: "ほしゅは (hoshuha)",
    definition: "conservative faction",
    examples: [
      { jp: "彼は保守派の政治家だ。", en: "He's a conservative politician." },
      { jp: "保守派と革新派が対立している。", en: "Conservatives and progressives are in conflict." },
      { jp: "保守派の意見も聞くべきだ。", en: "We should also hear the conservatives' opinions." }
    ]
  },
  {
    word: "廃棄物",
    reading: "はいきぶつ (haikibutsu)",
    definition: "waste; refuse; garbage",
    examples: [
      { jp: "産業廃棄物の処理が問題だ。", en: "Industrial waste disposal is a problem." },
      { jp: "廃棄物を減らす努力をしている。", en: "We're making efforts to reduce waste." },
      { jp: "廃棄物の分別をしてください。", en: "Please sort your garbage." }
    ]
  },
  {
    word: "競争率",
    reading: "きょうそうりつ (kyōsōritsu)",
    definition: "competition ratio; application rate",
    examples: [
      { jp: "この大学は競争率が高い。", en: "This university has a high competition ratio." },
      { jp: "競争率が3倍を超えた。", en: "The competition rate exceeded 3 to 1." },
      { jp: "競争率を確認してから出願する。", en: "Check the application rate before applying." }
    ]
  },
  {
    word: "仕事がらみ",
    reading: "しごとがらみ (shigoto-garami)",
    definition: "work-related; connected to work",
    examples: [
      { jp: "仕事がらみの付き合いが多い。", en: "I have many work-related relationships." },
      { jp: "仕事がらみで知り合った。", en: "We met through work." },
      { jp: "仕事がらみの飲み会に参加する。", en: "I'll attend a work-related drinking party." }
    ]
  },
  {
    word: "家族ぐるみ",
    reading: "かぞくぐるみ (kazoku-gurumi)",
    definition: "with the whole family; family-inclusive",
    examples: [
      { jp: "家族ぐるみで付き合っている。", en: "Our families socialize together." },
      { jp: "家族ぐるみの旅行を計画している。", en: "We're planning a trip with both families." },
      { jp: "家族ぐるみの友達です。", en: "We're family friends." }
    ]
  },
  {
    word: "繁華街",
    reading: "はんかがい (hankagai)",
    definition: "busy shopping district; downtown area",
    examples: [
      { jp: "繁華街で買い物をした。", en: "I shopped in the downtown area." },
      { jp: "この繁華街は夜も賑やかだ。", en: "This shopping district is lively even at night." },
      { jp: "繁華街に新しい店ができた。", en: "A new store opened in the busy district." }
    ]
  },
  {
    word: "リストアップ",
    reading: "リストアップ (risuto-appu)",
    definition: "to list up; to make a list",
    examples: [
      { jp: "候補者をリストアップしてください。", en: "Please list up the candidates." },
      { jp: "問題点をリストアップした。", en: "I listed the issues." },
      { jp: "参加者をリストアップする必要がある。", en: "We need to make a list of participants." }
    ]
  },
  {
    word: "ミスプリント",
    reading: "ミスプリント (misu-purinto)",
    definition: "misprint; typo",
    examples: [
      { jp: "この本にはミスプリントが多い。", en: "This book has many misprints." },
      { jp: "ミスプリントを見つけた。", en: "I found a typo." },
      { jp: "ミスプリントがないか確認してください。", en: "Please check for misprints." }
    ]
  },
  {
    word: "マスコミ",
    reading: "マスコミ (masukomi)",
    definition: "mass media; the press",
    examples: [
      { jp: "マスコミが大きく報道した。", en: "The mass media reported it extensively." },
      { jp: "マスコミの影響力は大きい。", en: "The influence of the press is great." },
      { jp: "マスコミに取り上げられた。", en: "It was covered by the media." }
    ]
  },
  {
    word: "レントゲン",
    reading: "レントゲン (rentogen)",
    definition: "X-ray; radiograph",
    examples: [
      { jp: "レントゲンを撮りましょう。", en: "Let's take an X-ray." },
      { jp: "レントゲン写真を見せてください。", en: "Please show me the X-ray." },
      { jp: "レントゲン検査を受けた。", en: "I had an X-ray examination." }
    ]
  },
  {
    word: "ワンパターン",
    reading: "ワンパターン (wan-patān)",
    definition: "one-pattern; monotonous; predictable",
    examples: [
      { jp: "彼のやり方はいつもワンパターンだ。", en: "His methods are always predictable." },
      { jp: "ワンパターンな生活に飽きた。", en: "I'm tired of a monotonous life." },
      { jp: "ワンパターンの攻撃では勝てない。", en: "You can't win with a one-pattern attack." }
    ]
  },
  {
    word: "ワンマン",
    reading: "ワンマン (wan-man)",
    definition: "one-man (dictatorial); autocratic",
    examples: [
      { jp: "ワンマン経営の会社だ。", en: "It's a company with one-man management." },
      { jp: "彼はワンマンな社長だ。", en: "He's an autocratic president." },
      { jp: "ワンマン体制に問題がある。", en: "There are problems with the dictatorial system." }
    ]
  },
  {
    word: "したがって",
    reading: "したがって (shitagatte)",
    definition: "therefore; accordingly; consequently",
    examples: [
      { jp: "彼は忙しい。したがって、来られない。", en: "He's busy. Therefore, he can't come." },
      { jp: "雨が降った。したがって、試合は中止だ。", en: "It rained. Consequently, the match is canceled." },
      { jp: "したがって、この計画は実行できない。", en: "Accordingly, this plan cannot be executed." }
    ]
  },
  {
    word: "すなわち",
    reading: "すなわち (sunawachi)",
    definition: "namely; that is to say; in other words",
    examples: [
      { jp: "私の意見、すなわち賛成です。", en: "My opinion, that is to say, I agree." },
      { jp: "彼は社長、すなわちこの会社のトップだ。", en: "He's the president, namely the top of this company." },
      { jp: "すなわち、これが結論です。", en: "In other words, this is the conclusion." }
    ]
  },
  {
    word: "誤操作",
    reading: "ごそうさ (gosōsa)",
    definition: "misoperation; operational error",
    examples: [
      { jp: "誤操作でデータが消えた。", en: "The data was deleted by misoperation." },
      { jp: "誤操作に注意してください。", en: "Please be careful of operational errors." },
      { jp: "誤操作を防ぐシステムを導入した。", en: "We introduced a system to prevent misoperations." }
    ]
  },
  {
    word: "誤作動",
    reading: "ごさどう (gosadō)",
    definition: "malfunction; false operation",
    examples: [
      { jp: "機械が誤作動を起こした。", en: "The machine malfunctioned." },
      { jp: "誤作動の原因を調べている。", en: "We're investigating the cause of the malfunction." },
      { jp: "誤作動を防ぐために点検する。", en: "Inspect to prevent malfunctions." }
    ]
  },
  {
    word: "超満員",
    reading: "ちょうまんいん (chō-man'in)",
    definition: "extremely crowded; packed full",
    examples: [
      { jp: "電車は超満員だった。", en: "The train was extremely crowded." },
      { jp: "会場は超満員で入れなかった。", en: "The venue was packed and I couldn't get in." },
      { jp: "ライブは超満員の盛況だった。", en: "The live show was a hit with a packed crowd." }
    ]
  },
  {
    word: "カルテ",
    reading: "カルテ (karute)",
    definition: "medical chart/record (from German Karte)",
    examples: [
      { jp: "カルテを確認してください。", en: "Please check the medical chart." },
      { jp: "電子カルテを導入した。", en: "We introduced electronic medical records." },
      { jp: "カルテには病歴が記録されている。", en: "The medical history is recorded in the chart." }
    ]
  },
  {
    word: "シビア",
    reading: "シビア (shibia)",
    definition: "severe; strict; harsh",
    examples: [
      { jp: "この先生の評価はシビアだ。", en: "This teacher's evaluations are strict." },
      { jp: "シビアな条件を提示された。", en: "I was presented with harsh conditions." },
      { jp: "現実はシビアだ。", en: "Reality is severe." }
    ]
  }
];
