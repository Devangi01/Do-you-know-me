var readlineSync = require('readline-sync');
var chalk = require('chalk');
var log = console.log;
var right = chalk.bgGreenBright.black;
var wrong = chalk.bgRedBright.black;
var info = chalk.bgBlueBright.black;

var score = 0;
let highScores = [
  {
    name: "Devangi",
    score: "5",
  },
  {
    name: "Ajay",
    score: "3",
  },
];
var user = readlineSync.question("What is your name? ");
log("Welcome ", user, "to Do YOU KNOW Devangi QUIZ ? ");

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns.toLocaleLowerCase() === answer) {
    log(right("Yay, You are right :)"));
    score = score + 1;
  } else {
    log(wrong("off, You are  wrong"));
  }
}

var questions = [
  {
    question: "where do I live?  \n",
    answer: "porbandar"
  },
  {
    question: "what is my favourite color?  \n",
    answer: "pink"
  },
  {
    question: "My favourite outdoor game?  \n",
    answer: "chess"
  }, {
    question: "what is my favourite movie? \n",
    answer: "kabir singh"
  },
  {
    question: "What kind of clothes do I not like to wear? \n",
    answer: "kurties"
  }
]

for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer)
}
function checkHighScore(score) {
  highScores.forEach((data) => {
    if (score > data.score) {
      log(
        right(
          "Contragts, You made a highscore By beating",
          chalk.bgCyanBright.black(data.name)
        )
      );
      highScores.push({
        "name": user,
        "score": score
      });
    }
  });
}
checkHighScore(score);
console.log("Your Final Score : ", score);

highScores.map(val => {
  log(right(val.name + " know Devangi very well"));
})