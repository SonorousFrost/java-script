
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
const gameArray = [rock, paper, scissors];

const randomSelect = gameArray[Math.floor(Math.random() * gameArray.length)] // Random String Selector


function getComputerChoice() {
    return randomSelect;
};

// console.log(randomSelect);


function playerSelection() {
    var selection = prompt("Rock, Paper or Scissors?").toLowerCase();
        if(selection == rock) {
        console.log(randomSelect);
    }   else if(selection == paper) {
        console.log(randomSelect);
    }   else if(selection == scissors) {
        console.log(randomSelect);
    }   else {
        console.log("Please choose either Rock, Paper or Scissors!");
    }
}

playerSelection();

