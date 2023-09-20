const quizData = [
  {
    grade: "7",
    unit: "1",
    sport: "Baseball",
    questions: [
      {
        imageUrl: "/../assets/baseball/01-baseball.jpg",
        chineseTerm: "棒球",
        answerChoices: [
          { text: "Baseball", isCorrect: true },
          { text: "Soccer", isCorrect: false },
          { text: "Basketball", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/02-baseball.jpg",
        chineseTerm: "全壘打",
        answerChoices: [
          { text: "catch", isCorrect: false },
          { text: "throw", isCorrect: false },
          { text: "home run", isCorrect: true },
          { text: "run", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/03-baseball.jpg",
        chineseTerm: "丟",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "baseball", isCorrect: false },
          { text: "throw", isCorrect: true },
          { text: "catch", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/04-baseball.jpg",
        chineseTerm: "接",
        answerChoices: [
          { text: "throw", isCorrect: false },
          { text: "catch", isCorrect: true },
          { text: "run", isCorrect: false },
          { text: "base", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/05-baseball.jpg",
        chineseTerm: "棒",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "glove", isCorrect: false },
          { text: "helmet", isCorrect: false },
          { text: "bat", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/baseball/06-baseball.jpg",
        chineseTerm: "手套",
        answerChoices: [
          { text: "glove", isCorrect: true },
          { text: "bat", isCorrect: false },
          { text: "ball", isCorrect: false },
          { text: "helmet", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/07-baseball.jpg",
        chineseTerm: "安全帽",
        answerChoices: [
          { text: "glove", isCorrect: false },
          { text: "bat", isCorrect: false },
          { text: "helmet", isCorrect: true },
          { text: "ball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/08-baseball.jpg",
        chineseTerm: "壘",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "base", isCorrect: true },
          { text: "cap", isCorrect: false },
          { text: "glove", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/09-baseball.jpg",
        chineseTerm: "球",
        answerChoices: [
          { text: "base", isCorrect: false },
          { text: "helmet", isCorrect: false },
          { text: "cap", isCorrect: false },
          { text: "ball", isCorrect: true },
        ],
      },
    ],
  },
  {
    grade: "7",
    unit: "2",
    sport: "Volleyball",
    questions: [
      {
        imageUrl: "/../assets/volleyball/01-volleyball.jpg",
        chineseTerm: "排球",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: false },
          { text: "Basketball", isCorrect: false },
          { text: "Volleyball", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/volleyball/02-volleyball.jpg",
        chineseTerm: "手",
        answerChoices: [
          { text: "hand", isCorrect: true },
          { text: "finger", isCorrect: false },
          { text: "arm", isCorrect: false },
          { text: "feet", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/volleyball/03-volleyball.jpg",
        chineseTerm: "手臂",
        answerChoices: [
          { text: "hair", isCorrect: false },
          { text: "hand", isCorrect: false },
          { text: "finger", isCorrect: false },
          { text: "arm", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/volleyball/04-volleyball.jpg",
        chineseTerm: "直的",
        answerChoices: [
          { text: "bump", isCorrect: false },
          { text: "pass", isCorrect: false },
          { text: "straight", isCorrect: true },
          { text: "set", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/volleyball/05-volleyball.jpg",
        chineseTerm: "低手傳球",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "set", isCorrect: false },
          { text: "straight", isCorrect: false },
          { text: "bump", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/volleyball/06-volleyball.jpg",
        chineseTerm: "向上",
        answerChoices: [
          { text: "up", isCorrect: true },
          { text: "down", isCorrect: false },
          { text: "left", isCorrect: false },
          { text: "right", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/volleyball/07-volleyball.jpg",
        chineseTerm: "球",
        answerChoices: [
          { text: "straight", isCorrect: false },
          { text: "ball", isCorrect: true },
          { text: "net", isCorrect: false },
          { text: "line", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/volleyball/08-volleyball.jpg",
        chineseTerm: "網",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "net", isCorrect: true },
          { text: "straight", isCorrect: false },
          { text: "bump", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/volleyball/09-volleyball.jpg",
        chineseTerm: "跳",
        answerChoices: [
          { text: "jump", isCorrect: true },
          { text: "bump", isCorrect: false },
          { text: "straight", isCorrect: false },
          { text: "ball", isCorrect: false },
        ],
      },
    ],
  },
  {
    grade: "7",
    unit: "3",
    sport: "Soccer",
    questions: [
      {
        imageUrl: "/../assets/soccer/01-soccer.jpg",
        chineseTerm: "足球",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: true },
          { text: "Basketball", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/02-soccer.jpg",
        chineseTerm: "腳",
        answerChoices: [
          { text: "feet", isCorrect: true },
          { text: "kick", isCorrect: false },
          { text: "run", isCorrect: false },
          { text: "soccer", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/03-soccer.jpg",
        chineseTerm: "踢",
        answerChoices: [
          { text: "feet", isCorrect: false },
          { text: "soccer", isCorrect: false },
          { text: "kick", isCorrect: true },
          { text: "ball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/04-soccer.jpg",
        chineseTerm: "進攻",
        answerChoices: [
          { text: "defense", isCorrect: false },
          { text: "soccer", isCorrect: false },
          { text: "kick", isCorrect: false },
          { text: "offense", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/soccer/05-soccer.jpg",
        chineseTerm: "防禦",
        answerChoices: [
          { text: "kick", isCorrect: false },
          { text: "shoot", isCorrect: false },
          { text: "defense", isCorrect: true },
          { text: "offense", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/06-soccer.jpg",
        chineseTerm: "跑步",
        answerChoices: [
          { text: "feet", isCorrect: false },
          { text: "soccer", isCorrect: false },
          { text: "run", isCorrect: true },
          { text: "kick", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/07-soccer.jpg",
        chineseTerm: "球門",
        answerChoices: [
          { text: "shoot", isCorrect: false },
          { text: "offense", isCorrect: false },
          { text: "kick", isCorrect: false },
          { text: "goal", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/soccer/08-soccer.jpg",
        chineseTerm: "射門",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "shoot", isCorrect: true },
          { text: "run", isCorrect: false },
          { text: "defense", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/09-soccer.jpg",
        chineseTerm: "球",
        answerChoices: [
          { text: "run", isCorrect: false },
          { text: "offense", isCorrect: false },
          { text: "shoot", isCorrect: false },
          { text: "ball", isCorrect: true },
        ],
      },
    ],
  },
  {
    grade: "8",
    unit: "1",
    sport: "Soccer",
    questions: [
      {
        imageUrl: "/../assets/soccer/01-soccer.jpg",
        chineseTerm: "足球",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: true },
          { text: "Basketball", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/02-soccer.jpg",
        chineseTerm: "腳",
        answerChoices: [
          { text: "feet", isCorrect: true },
          { text: "kick", isCorrect: false },
          { text: "run", isCorrect: false },
          { text: "soccer", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/03-soccer.jpg",
        chineseTerm: "踢",
        answerChoices: [
          { text: "feet", isCorrect: false },
          { text: "soccer", isCorrect: false },
          { text: "kick", isCorrect: true },
          { text: "ball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/04-soccer.jpg",
        chineseTerm: "進攻",
        answerChoices: [
          { text: "defense", isCorrect: false },
          { text: "soccer", isCorrect: false },
          { text: "kick", isCorrect: false },
          { text: "offense", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/soccer/05-soccer.jpg",
        chineseTerm: "防禦",
        answerChoices: [
          { text: "kick", isCorrect: false },
          { text: "shoot", isCorrect: false },
          { text: "defense", isCorrect: true },
          { text: "offense", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/06-soccer.jpg",
        chineseTerm: "跑步",
        answerChoices: [
          { text: "feet", isCorrect: false },
          { text: "soccer", isCorrect: false },
          { text: "run", isCorrect: true },
          { text: "kick", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/07-soccer.jpg",
        chineseTerm: "球門",
        answerChoices: [
          { text: "shoot", isCorrect: false },
          { text: "offense", isCorrect: false },
          { text: "kick", isCorrect: false },
          { text: "goal", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/soccer/08-soccer.jpg",
        chineseTerm: "射門",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "shoot", isCorrect: true },
          { text: "run", isCorrect: false },
          { text: "defense", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/soccer/09-soccer.jpg",
        chineseTerm: "球",
        answerChoices: [
          { text: "run", isCorrect: false },
          { text: "offense", isCorrect: false },
          { text: "shoot", isCorrect: false },
          { text: "ball", isCorrect: true },
        ],
      },
    ],
  },
  {
    grade: "8",
    unit: "2",
    sport: "Roundnet",
    questions: [
      {
        imageUrl: "/../assets/roundnet/01-roundnet.jpg",
        chineseTerm: "迷你排球",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: false },
          { text: "Roundnet", isCorrect: true },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/roundnet/02-roundnet.jpg",
        chineseTerm: "圓形的",
        answerChoices: [
          { text: "hand", isCorrect: false },
          { text: "round", isCorrect: true },
          { text: "run", isCorrect: false },
          { text: "net", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/roundnet/03-roundnet.jpg",
        chineseTerm: "網",
        answerChoices: [
          { text: "hand", isCorrect: false },
          { text: "roundnet", isCorrect: false },
          { text: "net", isCorrect: true },
          { text: "pass", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/roundnet/04-roundnet.jpg",
        chineseTerm: "手",
        answerChoices: [
          { text: "pass", isCorrect: false },
          { text: "net", isCorrect: false },
          { text: "serve", isCorrect: false },
          { text: "hand", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/roundnet/05-roundnet.jpg",
        chineseTerm: "發球",
        answerChoices: [
          { text: "set", isCorrect: false },
          { text: "pass", isCorrect: false },
          { text: "defense", isCorrect: false },
          { text: "serve", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/roundnet/06-roundnet.jpg",
        chineseTerm: "傳球",
        answerChoices: [
          { text: "hand", isCorrect: false },
          { text: "round", isCorrect: false },
          { text: "net", isCorrect: false },
          { text: "set", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/roundnet/07-roundnet.jpg",
        chineseTerm: "殺球",
        answerChoices: [
          { text: "spike", isCorrect: true },
          { text: "kill", isCorrect: false },
          { text: "serve", isCorrect: false },
          { text: "point", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/roundnet/08-roundnet.jpg",
        chineseTerm: "團隊合作",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "offense", isCorrect: false },
          { text: "teamwork", isCorrect: true },
          { text: "defense", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/roundnet/09-roundnet.jpg",
        chineseTerm: "球",
        answerChoices: [
          { text: "kick", isCorrect: false },
          { text: "ball", isCorrect: true },
          { text: "offense", isCorrect: false },
          { text: "spike", isCorrect: false },
        ],
      },
    ],
  },
  {
    grade: "8",
    unit: "3",
    sport: "Basketball",
    questions: [
      {
        imageUrl: "/../assets/basketball/01-basketball.jpg",
        chineseTerm: "籃球",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
          { text: "Basketball", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/basketball/02-basketball.jpg",
        chineseTerm: "傳球",
        answerChoices: [
          { text: "hand", isCorrect: false },
          { text: "ball", isCorrect: false },
          { text: "pass", isCorrect: true },
          { text: "net", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/03-basketball.jpg",
        chineseTerm: "跳",
        answerChoices: [
          { text: "rim", isCorrect: false },
          { text: "shoot", isCorrect: false },
          { text: "pass", isCorrect: false },
          { text: "jump", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/basketball/04-basketball.jpg",
        chineseTerm: "運球",
        answerChoices: [
          { text: "dribble", isCorrect: true },
          { text: "pass", isCorrect: false },
          { text: "shoot", isCorrect: false },
          { text: "pass", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/05-basketball.jpg",
        chineseTerm: "投籃",
        answerChoices: [
          { text: "shoot", isCorrect: true },
          { text: "pass", isCorrect: false },
          { text: "run", isCorrect: false },
          { text: "jump", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/06-basketball.jpg",
        chineseTerm: "籃球框",
        answerChoices: [
          { text: "backboard", isCorrect: false },
          { text: "rim", isCorrect: true },
          { text: "hoop", isCorrect: false },
          { text: "pass", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/07-basketball.jpg",
        chineseTerm: "籃板",
        answerChoices: [
          { text: "dunk", isCorrect: false },
          { text: "slam", isCorrect: false },
          { text: "backboard", isCorrect: true },
          { text: "rim", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/08-basketball.jpg",
        chineseTerm: "球場",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "3-pointer", isCorrect: false },
          { text: "game", isCorrect: false },
          { text: "court", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/basketball/09-basketball.jpg",
        chineseTerm: "球",
        answerChoices: [
          { text: "shoot", isCorrect: false },
          { text: "NBA", isCorrect: false },
          { text: "ball", isCorrect: true },
          { text: "jump", isCorrect: false },
        ],
      },
    ],
  },
  {
    grade: "9",
    unit: "1",
    sport: "Cornhole",
    questions: [
      {
        imageUrl: "/../assets/cornhole/01-cornhole.jpg",
        chineseTerm: "米洞遊戲",
        answerChoices: [
          { text: "Cornhole", isCorrect: true },
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/cornhole/02-cornhole.jpg",
        chineseTerm: "拋",
        answerChoices: [
          { text: "win", isCorrect: false },
          { text: "hole", isCorrect: false },
          { text: "pass", isCorrect: false },
          { text: "toss", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/cornhole/03-cornhole.jpg",
        chineseTerm: "包",
        answerChoices: [
          { text: "toss", isCorrect: false },
          { text: "aim", isCorrect: false },
          { text: "corn", isCorrect: false },
          { text: "bag", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/cornhole/04-cornhole.jpg",
        chineseTerm: "沙子",
        answerChoices: [
          { text: "aim", isCorrect: false },
          { text: "sand", isCorrect: true },
          { text: "toss", isCorrect: false },
          { text: "pass", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/cornhole/05-cornhole.jpg",
        chineseTerm: "木頭",
        answerChoices: [
          { text: "wood", isCorrect: true },
          { text: "sand", isCorrect: false },
          { text: "board", isCorrect: false },
          { text: "hole", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/cornhole/06-cornhole.jpg",
        chineseTerm: "洞",
        answerChoices: [
          { text: "board", isCorrect: false },
          { text: "wood", isCorrect: false },
          { text: "hole", isCorrect: true },
          { text: "sand", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/cornhole/07-cornhole.jpg",
        chineseTerm: "目標",
        answerChoices: [
          { text: "points", isCorrect: false },
          { text: "toss", isCorrect: false },
          { text: "target", isCorrect: true },
          { text: "aim", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/cornhole/08-cornhole.jpg",
        chineseTerm: "瞄准",
        answerChoices: [
          { text: "sand", isCorrect: false },
          { text: "corn", isCorrect: false },
          { text: "aim", isCorrect: true },
          { text: "target", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/cornhole/09-cornhole.jpg",
        chineseTerm: "分數",
        answerChoices: [
          { text: "cornhole", isCorrect: false },
          { text: "hole", isCorrect: false },
          { text: "sand", isCorrect: false },
          { text: "points", isCorrect: true },
        ],
      },
    ],
  },
  {
    grade: "9",
    unit: "2",
    sport: "TRX",
    questions: [
      {
        imageUrl: "/../assets/trx/01-trx.jpg",
        chineseTerm: "TRX",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: false },
          { text: "TRX", isCorrect: true },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/trx/02-trx.jpg",
        chineseTerm: "健身",
        answerChoices: [
          { text: "exercise", isCorrect: false },
          { text: "fitness", isCorrect: true },
          { text: "pull", isCorrect: false },
          { text: "push", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/trx/03-trx.jpg",
        chineseTerm: "緊握",
        answerChoices: [
          { text: "trx", isCorrect: false },
          { text: "pull", isCorrect: false },
          { text: "grip", isCorrect: true },
          { text: "push", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/trx/04-trx.jpg",
        chineseTerm: "推",
        answerChoices: [
          { text: "push", isCorrect: true },
          { text: "pull", isCorrect: false },
          { text: "grip", isCorrect: false },
          { text: "fitness", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/trx/05-trx.jpg",
        chineseTerm: "拉",
        answerChoices: [
          { text: "fitness", isCorrect: false },
          { text: "rope", isCorrect: false },
          { text: "push", isCorrect: false },
          { text: "pull", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/trx/06-trx.jpg",
        chineseTerm: "繩子",
        answerChoices: [
          { text: "pull", isCorrect: false },
          { text: "rope", isCorrect: true },
          { text: "fitness", isCorrect: false },
          { text: "trx", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/trx/07-trx.jpg",
        chineseTerm: "跳",
        answerChoices: [
          { text: "balance", isCorrect: false },
          { text: "pull", isCorrect: false },
          { text: "push", isCorrect: false },
          { text: "jump", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/trx/08-trx.jpg",
        chineseTerm: "平衡",
        answerChoices: [
          { text: "balance", isCorrect: true },
          { text: "push", isCorrect: false },
          { text: "fitness", isCorrect: false },
          { text: "run", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/trx/09-trx.jpg",
        chineseTerm: "核心",
        answerChoices: [
          { text: "exercise", isCorrect: false },
          { text: "core", isCorrect: true },
          { text: "fitness", isCorrect: false },
          { text: "trx", isCorrect: false },
        ],
      },
    ],
  },
  {
    grade: "9",
    unit: "3",
    sport: "Basketball",
    questions: [
      {
        imageUrl: "/../assets/basketball/01-basketball.jpg",
        chineseTerm: "籃球",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
          { text: "Basketball", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/basketball/02-basketball.jpg",
        chineseTerm: "傳球",
        answerChoices: [
          { text: "hand", isCorrect: false },
          { text: "ball", isCorrect: false },
          { text: "pass", isCorrect: true },
          { text: "net", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/03-basketball.jpg",
        chineseTerm: "跳",
        answerChoices: [
          { text: "rim", isCorrect: false },
          { text: "shoot", isCorrect: false },
          { text: "pass", isCorrect: false },
          { text: "jump", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/basketball/04-basketball.jpg",
        chineseTerm: "運球",
        answerChoices: [
          { text: "dribble", isCorrect: true },
          { text: "pass", isCorrect: false },
          { text: "shoot", isCorrect: false },
          { text: "pass", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/05-basketball.jpg",
        chineseTerm: "投籃",
        answerChoices: [
          { text: "shoot", isCorrect: true },
          { text: "pass", isCorrect: false },
          { text: "run", isCorrect: false },
          { text: "jump", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/06-basketball.jpg",
        chineseTerm: "籃球框",
        answerChoices: [
          { text: "backboard", isCorrect: false },
          { text: "rim", isCorrect: true },
          { text: "hoop", isCorrect: false },
          { text: "pass", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/07-basketball.jpg",
        chineseTerm: "籃板",
        answerChoices: [
          { text: "dunk", isCorrect: false },
          { text: "slam", isCorrect: false },
          { text: "backboard", isCorrect: true },
          { text: "rim", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/basketball/08-basketball.jpg",
        chineseTerm: "球場",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "3-pointer", isCorrect: false },
          { text: "game", isCorrect: false },
          { text: "court", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/basketball/09-basketball.jpg",
        chineseTerm: "球",
        answerChoices: [
          { text: "shoot", isCorrect: false },
          { text: "NBA", isCorrect: false },
          { text: "ball", isCorrect: true },
          { text: "jump", isCorrect: false },
        ],
      },
    ],
  },
];

export default quizData;
