
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

function playRound(playerSelection, computerSelection) {
    var round = playerSelection() + computerSelection();
    if(round == rock + rock) {
        console.log("Draw!");               // Game round function
    } else if (round == paper + paper) {
        console.log("Draw!");
    } else if (round == scissors + scissors) {
        console.log("Draw!");
    } else if (round == rock + scissors) {
        console.log("You win! Rock beats Scissors!");
    } else if (round == scissors + rock) {
        console.log("You lose! Rock beats Scissors!");
    } else if (round == rock + paper) {
        console.log("You lose! Paper beats Rock!");
    } else if (round == paper + rock) {
        console.log("You win! Paper beats Rock!");
    } else if (round == paper + scissors) {
        console.log("You lose! Scissors beats Paper!");
    } else if (round == scissors + paper) {
        console.log("You win! Scissors beats Paper!");
    }
    // return round;
}
console.log(playRound(playerSelection, computerSelection));
