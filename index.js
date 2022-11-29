var readlineSync = require('readline-sync');
var chalk = require('chalk');
var log = console.log;
var right = chalk.bgGreenBright.black;
var wrong = chalk.bgRedBright.black;
var info = chalk.bgBlueBright.black;

var score = 0;
let highScores = [
  {
    name: "Mahek",
    score: "7",
  },
  {
    name: "Ajay",
    score: "8",
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
    question: "What is i like to eat?  \n",
    answer: "chinese"
  },
  {
    question: "where am I born?  \n",
    answer: "porbandar"
  },
  {
    question: "where I completed my bechlor of engineering? \n",
    answer: "bhavnagar"
  },
  {
    question: "How many family members in my family? \n",
    answer: "five"
  },
  {
    question: "what is my favourite color?  \n",
    answer: "pink"
  },
  {
    question: "Currently where am i living? \n",
    answer: "gandhinagar"
  },
  {
    question: "My favourite outdoor game?  \n",
    answer: "cricket"
  }, 
    {
    question: "My Born month name?  \n",
    answer: "january"
  }, 
  {
    question: "what is my favourite movie? \n",
    answer: "kabir singh"
  },
  {
    question: "What kind of clothes do I like to wear? \n",
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
