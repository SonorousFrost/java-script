
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
const gameArray = [rock, paper, scissors];

const randomSelect = gameArray[Math.floor(Math.random() * gameArray.length)] // Random String Selector


function computerSelection() {
    return randomSelect;
};

function playerSelection() {
    var selection = prompt("Rock, Paper or Scissors?").toLowerCase();

    if(selection == rock) {
    }   else if(selection == paper) {             // Player Input Function
    }   else if(selection == scissors) {
    }   else {
        console.log("Please choose either Rock, Paper or Scissors!");
    }
    return selection;
}

const draw = "Draw";
const win = "Win!";
const lose = "Lose!";

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
}

var playerScoreInfo = "You have ";
var comScoreInfo = "Com has ";
var playerScore = 0;
var comScore = 0;

function addPlayerScore() {
    var playerScoreBoard = playerScoreInfo + (playerScore += 1) + " Points!";
    return playerScoreBoard;
}

function addComScore() {
    var comScoreBoard = comScoreInfo + (comScore += 1) + " Points!";
    return comScoreBoard;
}

const totalRounds = 5;

function game() {
    for (let i = 0; i < totalRounds; i++) {
        console.log(playRound(playerSelection, computerSelection, addPlayerScore, addComScore))
        if (i === 0) {
        } else if (i === 1) {
        } else if (i === 2) {
        } else if (i === 3) {
        } else if (i === 4) {
            scoreBoard();
        } 
    }
} 

function scoreBoard() {
    if (playerScore > comScore ) {
        console.log("You Win!");
        console.log(" With... " + playerScore + " Points!")
        return;
    } else if (comScore > playerScore) {
        console.log("Computer Wins...");
        console.log(" With... " + comScore + " Points </3")
        return;
    }
}

console.log(game(scoreBoard));