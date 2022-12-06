const gameArray = ["Rock", "Paper", "Scissors"];

const randomSelect = gameArray[Math.floor(Math.random() * gameArray.length)]

function getComputerChoice(gameArray) {
    return randomSelect;
};

console.log(randomSelect);


