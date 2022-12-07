
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
const gameArray = [rock, paper, scissors];

const randomSelect = gameArray[Math.floor(Math.random() * gameArray.length)] // Random String Selector


function computerSelection() {
    return randomSelect;
};

// console.log(randomSelect);  // test output


function playerSelection() {
    var selection = prompt("Rock, Paper or Scissors?").toLowerCase();

    if(selection == rock) {
        //console.log(randomSelect);
    }   else if(selection == paper) {
        //console.log(randomSelect);              // Player Input Function
    }   else if(selection == scissors) {
        //console.log(randomSelect);
    }   else {
        console.log("Please choose either Rock, Paper or Scissors!");
    }
    return selection;
}

const draw = "Draw";
const win = "You Win!";
const lose = "You Lose!";

function playRound(playerSelection, computerSelection) {
    var round = playerSelection() + computerSelection();
    if(round == rock + rock) {
        console.log(draw)             // Game round function
    } else if (round == paper + paper) {
        console.log(draw);
    } else if (round == scissors + scissors) {
        console.log(draw);
    } else if (round == scissors + rock) {
        var loseScissors = " Rock beats Scissors!";
        console.log(lose + loseScissors);
        addComScore();  
    } else if (round == rock + paper) {
        var loseRock = " Paper beats Rock!";
        console.log(lose + loseRock);
        addComScore();
    } else if (round == paper + scissors) {
        var losePaper = " Scissors beats Paper!";
        console.log(lose + losePaper);
        addComScore();
    } else if (round == paper + rock) {
        var winPaper = " Paper beats Rock!";
        console.log(win + winPaper);
        addPlayerScore();
    } else if (round == rock + scissors) {
        var winRock = " Rock beats Scissors!";
        console.log(win + winRock);
        addPlayerScore();
    } else if (round == scissors + paper) {
        var winScissors = " Scissors beats Paper!";
        console.log(win + winScissors);
        addPlayerScore();
    }
    // return round;
}

var playerScoreInfo = "You have ";
var comScoreInfo = "Com has ";
var playerScore = 0;
var comScore = 0;

function addPlayerScore() {
    var playerScoreBoard = playerScoreInfo + (playerScore + 1) + " Points!";
    console.log(playerScoreBoard);
}

function addComScore() {
    var comScoreBoard = comScoreInfo + (comScore + 1) + " Points!";
    console.log(comScoreBoard);
}

function game(playRound) {
    for (let playRound = 0; playRound < 5; playRound++){
    }   console.log(playRound);
}

console.log(playRound(playerSelection, computerSelection, game));