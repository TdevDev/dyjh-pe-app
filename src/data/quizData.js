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
        chineseTerm: "丟",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "baseball", isCorrect: false },
          { text: "throw", isCorrect: true },
          { text: "catch", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/03-baseball.jpg",
        chineseTerm: "接",
        answerChoices: [
          { text: "throw", isCorrect: false },
          { text: "catch", isCorrect: true },
          { text: "run", isCorrect: false },
          { text: "base", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/04-baseball.jpg",
        chineseTerm: "手套",
        answerChoices: [
          { text: "glove", isCorrect: true },
          { text: "bat", isCorrect: false },
          { text: "ball", isCorrect: false },
          { text: "helmet", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/05-baseball.jpg",
        chineseTerm: "滾地球",
        answerChoices: [
          { text: "fly ball", isCorrect: false },
          { text: "throw", isCorrect: false },
          { text: "ground ball", isCorrect: true },
          { text: "run", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/06-baseball.jpg",
        chineseTerm: "高飛球",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "glove", isCorrect: false },
          { text: "ground ball", isCorrect: false },
          { text: "fly ball", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/baseball/07-baseball.jpg",
        chineseTerm: "壘",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "base", isCorrect: true },
          { text: "cap", isCorrect: false },
          { text: "glove", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/08-baseball.jpg",
        chineseTerm: "出局",
        answerChoices: [
          { text: "ground ball", isCorrect: false },
          { text: "safe", isCorrect: false },
          { text: "out", isCorrect: true },
          { text: "ball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/baseball/09-baseball.jpg",
        chineseTerm: "安全上壘",
        answerChoices: [
          { text: "base", isCorrect: false },
          { text: "glove", isCorrect: false },
          { text: "out", isCorrect: false },
          { text: "safe", isCorrect: true },
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
    grade: "7",
    unit: "4",
    sport: "Pickleball",
    questions: [
      {
        imageUrl: "/../assets/pickleball/01-pickleball.jpg",
        chineseTerm: "球拍",
        answerChoices: [
          { text: "strings", isCorrect: false },
          { text: "paddle", isCorrect: true },
          { text: "net", isCorrect: false },
          { text: "ball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/pickleball/02-pickleball.jpg",
        chineseTerm: "喉嚨",
        answerChoices: [
          { text: "finger", isCorrect: false },
          { text: "throat", isCorrect: true },
          { text: "arm", isCorrect: false },
          { text: "feet", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/pickleball/03-pickleball.jpg",
        chineseTerm: "身體",
        answerChoices: [
          { text: "hair", isCorrect: false },
          { text: "body", isCorrect: true },
          { text: "hand", isCorrect: false },
          { text: "finger", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/pickleball/04-pickleball.jpg",
        chineseTerm: "網子",
        answerChoices: [
          { text: "out", isCorrect: false },
          { text: "line", isCorrect: false },
          { text: "set", isCorrect: false },
          { text: "net", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/pickleball/05-pickleball.jpg",
        chineseTerm: "線",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "set", isCorrect: false },
          { text: "net", isCorrect: false },
          { text: "line", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/pickleball/06-pickleball.jpg",
        chineseTerm: "球場",
        answerChoices: [
          { text: "place", isCorrect: false },
          { text: "court", isCorrect: true },
          { text: "pickleball", isCorrect: false },
          { text: "line", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/pickleball/07-pickleball.jpg",
        chineseTerm: "發球",
        answerChoices: [
          { text: "hit", isCorrect: false },
          { text: "net", isCorrect: false },
          { text: "line", isCorrect: false },
          { text: "serve", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/pickleball/08-pickleball.jpg",
        chineseTerm: "分數",
        answerChoices: [
          { text: "line", isCorrect: false },
          { text: "straight", isCorrect: false },
          { text: "serve", isCorrect: false },
          { text: "score", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/pickleball/09-pickleball.jpg",
        chineseTerm: "犯規",
        answerChoices: [
          { text: "set", isCorrect: false },
          { text: "fault", isCorrect: true },
          { text: "straight", isCorrect: false },
          { text: "serve", isCorrect: false },
        ],
      },
    ],
  },
  {
    grade: "7",
    unit: "5",
    sport: "Frisbee",
    questions: [
      {
        imageUrl: "/../assets/frisbee/01-frisbee.jpg",
        chineseTerm: "飛盤",
        answerChoices: [
          { text: "Frisbee", isCorrect: true },
          { text: "Baseball", isCorrect: false },
          { text: "Basketball", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/02-frisbee.jpg",
        chineseTerm: "丟",
        answerChoices: [
          { text: "kick", isCorrect: false },
          { text: "frisbee", isCorrect: false },
          { text: "toss", isCorrect: false },
          { text: "throw", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/03-frisbee.jpg",
        chineseTerm: "接",
        answerChoices: [
          { text: "throw", isCorrect: false },
          { text: "catch", isCorrect: true },
          { text: "run", isCorrect: false },
          { text: "ball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/04-frisbee.jpg",
        chineseTerm: "正手",
        answerChoices: [
          { text: "catch", isCorrect: false },
          { text: "throw", isCorrect: false },
          { text: "forehand", isCorrect: true },
          { text: "backhand", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/05-frisbee.jpg",
        chineseTerm: "反手",
        answerChoices: [
          { text: "forehand", isCorrect: false },
          { text: "backhand", isCorrect: true },
          { text: "shoot", isCorrect: false },
          { text: "throw", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/06-frisbee.jpg",
        chineseTerm: "瞄準",
        answerChoices: [
          { text: "throw", isCorrect: false },
          { text: "backhand", isCorrect: false },
          { text: "look", isCorrect: false },
          { text: "aim", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/07-frisbee.jpg",
        chineseTerm: "樞軸",
        answerChoices: [
          { text: "pivot", isCorrect: true },
          { text: "step", isCorrect: false },
          { text: "throw", isCorrect: false },
          { text: "jump", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/08-frisbee.jpg",
        chineseTerm: "分數",
        answerChoices: [
          { text: "run", isCorrect: false },
          { text: "end zone", isCorrect: false },
          { text: "win", isCorrect: false },
          { text: "score", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/09-frisbee.jpg",
        chineseTerm: "端區",
        answerChoices: [
          { text: "point", isCorrect: false },
          { text: "win", isCorrect: false },
          { text: "end zone", isCorrect: true },
          { text: "defense", isCorrect: false },
        ],
      },
    ],
  },
  {
    grade: "7",
    unit: "6",
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
          { text: "run", isCorrect: false },
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
          { text: "run", isCorrect: false },
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
    grade: "8",
    unit: "4",
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
    grade: "8",
    unit: "5",
    sport: "Badminton",
    questions: [
      {
        imageUrl: "/../assets/badminton/01-badminton.jpg",
        chineseTerm: "羽毛球",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Soccer", isCorrect: false },
          { text: "Badminton", isCorrect: true },
          { text: "Basketball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/badminton/02-badminton.jpg",
        chineseTerm: "羽毛球的球",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "birdie", isCorrect: true },
          { text: "eagle", isCorrect: false },
          { text: "feather", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/badminton/03-badminton.jpg",
        chineseTerm: "球拍",
        answerChoices: [
          { text: "racket", isCorrect: true },
          { text: "birdie", isCorrect: false },
          { text: "strings", isCorrect: false },
          { text: "neck", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/badminton/04-badminton.jpg",
        chineseTerm: "握把",
        answerChoices: [
          { text: "aim", isCorrect: false },
          { text: "net", isCorrect: false },
          { text: "racket", isCorrect: false },
          { text: "grip", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/badminton/05-badminton.jpg",
        chineseTerm: "脖子",
        answerChoices: [
          { text: "birdie", isCorrect: false },
          { text: "strings", isCorrect: false },
          { text: "neck", isCorrect: true },
          { text: "body", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/badminton/06-badminton.jpg",
        chineseTerm: "線",
        answerChoices: [
          { text: "birdie", isCorrect: false },
          { text: "racket", isCorrect: false },
          { text: "strings", isCorrect: true },
          { text: "neck", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/badminton/07-badminton.jpg",
        chineseTerm: "發球",
        answerChoices: [
          { text: "strings", isCorrect: false },
          { text: "serve", isCorrect: true },
          { text: "net", isCorrect: false },
          { text: "line", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/badminton/08-badminton.jpg",
        chineseTerm: "長球",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "neck", isCorrect: false },
          { text: "clear", isCorrect: true },
          { text: "smash", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/badminton/09-badminton.jpg",
        chineseTerm: "殺球",
        answerChoices: [
          { text: "bump", isCorrect: false },
          { text: "smash", isCorrect: true },
          { text: "clear", isCorrect: false },
          { text: "ball", isCorrect: false },
        ],
      },
    ],
  },
  {
    grade: "8",
    unit: "6",
    sport: "Frisbee",
    questions: [
      {
        imageUrl: "/../assets/frisbee/01-frisbee.jpg",
        chineseTerm: "飛盤",
        answerChoices: [
          { text: "Frisbee", isCorrect: true },
          { text: "Baseball", isCorrect: false },
          { text: "Basketball", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/02-frisbee.jpg",
        chineseTerm: "丟",
        answerChoices: [
          { text: "kick", isCorrect: false },
          { text: "frisbee", isCorrect: false },
          { text: "toss", isCorrect: false },
          { text: "throw", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/03-frisbee.jpg",
        chineseTerm: "接",
        answerChoices: [
          { text: "throw", isCorrect: false },
          { text: "catch", isCorrect: true },
          { text: "run", isCorrect: false },
          { text: "ball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/04-frisbee.jpg",
        chineseTerm: "正手",
        answerChoices: [
          { text: "catch", isCorrect: false },
          { text: "throw", isCorrect: false },
          { text: "forehand", isCorrect: true },
          { text: "backhand", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/05-frisbee.jpg",
        chineseTerm: "反手",
        answerChoices: [
          { text: "forehand", isCorrect: false },
          { text: "backhand", isCorrect: true },
          { text: "shoot", isCorrect: false },
          { text: "throw", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/06-frisbee.jpg",
        chineseTerm: "瞄準",
        answerChoices: [
          { text: "throw", isCorrect: false },
          { text: "backhand", isCorrect: false },
          { text: "look", isCorrect: false },
          { text: "aim", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/07-frisbee.jpg",
        chineseTerm: "樞軸",
        answerChoices: [
          { text: "pivot", isCorrect: true },
          { text: "step", isCorrect: false },
          { text: "throw", isCorrect: false },
          { text: "jump", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/08-frisbee.jpg",
        chineseTerm: "分數",
        answerChoices: [
          { text: "run", isCorrect: false },
          { text: "end zone", isCorrect: false },
          { text: "win", isCorrect: false },
          { text: "score", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/frisbee/09-frisbee.jpg",
        chineseTerm: "端區",
        answerChoices: [
          { text: "point", isCorrect: false },
          { text: "win", isCorrect: false },
          { text: "end zone", isCorrect: true },
          { text: "defense", isCorrect: false },
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
          { text: "run", isCorrect: false },
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
    unit: "4",
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
    grade: "9",
    unit: "5",
    sport: "Tennis",
    questions: [
      {
        imageUrl: "/../assets/tennis/01-tennis.jpg",
        chineseTerm: "網球",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Basketball", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
          { text: "Tennis", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/tennis/02-tennis.jpg",
        chineseTerm: "球拍",
        answerChoices: [
          { text: "tennis", isCorrect: false },
          { text: "racket", isCorrect: true },
          { text: "strings", isCorrect: false },
          { text: "paddle", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tennis/03-tennis.jpg",
        chineseTerm: "網球的球",
        answerChoices: [
          { text: "baseball", isCorrect: false },
          { text: "soccer ball", isCorrect: false },
          { text: "racket", isCorrect: false },
          { text: "tennis ball", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/tennis/04-tennis.jpg",
        chineseTerm: "握把",
        answerChoices: [
          { text: "grip", isCorrect: true },
          { text: "hit", isCorrect: false },
          { text: "racket", isCorrect: false },
          { text: "neck", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tennis/05-tennis.jpg",
        chineseTerm: "脖子",
        answerChoices: [
          { text: "neck", isCorrect: true },
          { text: "hit", isCorrect: false },
          { text: "strings", isCorrect: false },
          { text: "racket", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tennis/06-tennis.jpg",
        chineseTerm: "線",
        answerChoices: [
          { text: "step", isCorrect: false },
          { text: "racket", isCorrect: false },
          { text: "grip", isCorrect: false },
          { text: "strings", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/tennis/07-tennis.jpg",
        chineseTerm: "球場",
        answerChoices: [
          { text: "win", isCorrect: false },
          { text: "court", isCorrect: true },
          { text: "place", isCorrect: false },
          { text: "play", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tennis/08-tennis.jpg",
        chineseTerm: "網子",
        answerChoices: [
          { text: "ball", isCorrect: false },
          { text: "line", isCorrect: false },
          { text: "net", isCorrect: true },
          { text: "racket", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tennis/09-tennis.jpg",
        chineseTerm: "分數",
        answerChoices: [
          { text: "lose", isCorrect: false },
          { text: "win", isCorrect: false },
          { text: "score", isCorrect: true },
          { text: "game", isCorrect: false },
        ],
      },
    ],
  },
  {
    grade: "9",
    unit: "6",
    sport: "Tug-of-war",
    questions: [
      {
        imageUrl: "/../assets/tug-of-war/01-tug-of-war.jpg",
        chineseTerm: "拔河",
        answerChoices: [
          { text: "Baseball", isCorrect: false },
          { text: "Tug-of-war", isCorrect: true },
          { text: "Basketball", isCorrect: false },
          { text: "Volleyball", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tug-of-war/02-tug-of-war.jpg",
        chineseTerm: "繩子",
        answerChoices: [
          { text: "string", isCorrect: false },
          { text: "pull", isCorrect: false },
          { text: "rope", isCorrect: true },
          { text: "cowboy", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tug-of-war/03-tug-of-war.jpg",
        chineseTerm: "團隊",
        answerChoices: [
          { text: "team", isCorrect: true },
          { text: "friends", isCorrect: false },
          { text: "work", isCorrect: false },
          { text: "win", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tug-of-war/04-tug-of-war.jpg",
        chineseTerm: "抓住",
        answerChoices: [
          { text: "hold", isCorrect: true },
          { text: "team", isCorrect: false },
          { text: "pull", isCorrect: false },
          { text: "work", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tug-of-war/05-tug-of-war.jpg",
        chineseTerm: "拉",
        answerChoices: [
          { text: "help", isCorrect: false },
          { text: "rope", isCorrect: false },
          { text: "team", isCorrect: false },
          { text: "pull", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/tug-of-war/06-tug-of-war.jpg",
        chineseTerm: "平衡",
        answerChoices: [
          { text: "hold", isCorrect: false },
          { text: "whistle", isCorrect: false },
          { text: "grip", isCorrect: false },
          { text: "balance", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/tug-of-war/07-tug-of-war.jpg",
        chineseTerm: "領導者",
        answerChoices: [
          { text: "tug-of-war", isCorrect: false },
          { text: "rope", isCorrect: false },
          { text: "leader", isCorrect: true },
          { text: "team", isCorrect: false },
        ],
      },
      {
        imageUrl: "/../assets/tug-of-war/08-tug-of-war.jpg",
        chineseTerm: "哨",
        answerChoices: [
          { text: "win", isCorrect: false },
          { text: "balance", isCorrect: false },
          { text: "team", isCorrect: false },
          { text: "whistle", isCorrect: true },
        ],
      },
      {
        imageUrl: "/../assets/tug-of-war/09-tug-of-war.jpg",
        chineseTerm: "裁判",
        answerChoices: [
          { text: "balance", isCorrect: false },
          { text: "whistle", isCorrect: false },
          { text: "game", isCorrect: false },
          { text: "referee", isCorrect: true },
        ],
      },
    ],
  },
];

export default quizData;
