const readlineSync= require('readline-sync');
 const chalk= require('chalk');

console.log(chalk.black.bgRed("Welcome to the Suits Quiz \n"));

const userName= readlineSync.question(chalk.cyanBright("May I know your Instagram username? "), {
});

console.log(chalk.hex('#DEADED')("\nHi "+userName+". Let's get started. \nEnter a/ b/ c for each question to answer"));


let score=0;

const question1={
  que: "Suits is set in a fictional law firm in ________? \na.Atlanta \nb.New York City \nc.Chicago",
  ans: "b"
};

const question2={
  que: "What network airs 'Suits?' \na.CBS \nb.NBC \nc.USA ",
  ans: "c"
};
const question3={
  que: "Who is the female shark in charge of the 'Suits' law firm? \na.Donna \nb.Rachel \nc.Jessica Pearson",
  ans: "c"
};
const question4={
  que: "The firm hires law graduates from ________? \na.Harward \nb.Stanford \nc.MIT",
  ans: "a"
};
const question5={
  que: "_____ is the firm's expert on all financial matters?? \na.Louis \nb.Robert \nc.Harvey",
  ans: "a"
};
const question6={
  que: "Harvey Specter is a brilliant __________ lawyer? \na.Criminal \nb.Consumer \nc.Corporate",
  ans: "c"
};
const question7={
  que: "Harvey's unusual middle name is _______? \na.Martha \nb.Pearson \nc.Reginald",
  ans: "c"
};



const questionSet=[question1, question2, question3, question4, question5, question6, question7];


let highScore=[
  {nameH:"Ayan", scoreH:"6"},
  {nameH:"Anik", scoreH:"5"}
];


for(let i=0; i<questionSet.length; i++){
checkScore(i+1,questionSet[i].que, questionSet[i].ans);
}


console.log(chalk.keyword('orange').bold("\n*****Leaderboard*****"));
let scoreBeaten=false;
for(let i=0; i<highScore.length; i++){
  console.log(chalk.keyword('orange').bold(highScore[i].nameH+" : " +highScore[i].scoreH));

  if(score>=highScore[i].scoreH){
    scoreBeaten=true;
  }
}
console.log('----------------------------')


console.log(chalk.hex('#DEADED').bold("Here is Your Final Score: "+score));


let posnInsert =0;
if(scoreBeaten){
  console.log(chalk.bold.italic.keyword('pink')("*******Congratulations "+userName+", you have beaten the high Score*******"));
  
  console.log(chalk.keyword('orange').bold("\n*****Leaderboard*****"));
  
  if(score>=highScore[0].scoreH){
    posnInsert=0;
  }
  else if(score>=highScore[1].scoreH){
    posnInsert=1;
  }
  highScore.splice(posnInsert, 0, {nameH:`${userName}`, scoreH:`${score}`});
  
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.keyword('orange').bold(highScore[i].nameH+" : " +highScore[i].scoreH));
  }

}
else{
  console.log(chalk.bold.hex('#DEADED')("Sorry "+userName+", you have not beaten the high score :( "))
}


function checkScore(queNo, checkQue, checkAns){
  
  let userAns= readlineSync.keyIn(chalk.cyanBright("\n"+queNo+") "+checkQue+ "\n"),{limit: '$<a-c>'});
  if(userAns===checkAns){
    console.log(chalk.green("Your answer is right"));
    score++;
  }
  else{
    console.log(chalk.redBright("Your answer is wrong"));
    console.log(chalk.yellowBright(`Correct answer is ${checkAns}`));
    score--;
  }
  console.log(chalk.yellowBright("Your current score is " +score));
  console.log('---------------------\n');

}