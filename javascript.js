// Step 2
/* 
Algorithm for function getComputerChoice
Create variable x which stores random number between 0 and 1
IF x is smaller than or equal 1/3: return "rock"
IF x is larger than 1/3 and smaller than or equal 2/3: return "paper"
IF x is larger than 2/3: return "scissors"
*/

function getComputerChoice() {
    const x = Math.random();
    if (x <= 1/3) {
        return "rock";
    } else if (x > 2/3) {
        return "scissors";
    }
    return "paper";
}


// Step 3
/*
Algorithm for function getComputerChoice
Store user input in variable "choice"
Return "choice"
*/

function getHumanChoice() {
    const choice = prompt('Enter "rock", "paper" or "scissors.');
    return choice;
}


// Step 4
//Create score for computer and human

let humanScore = 0;
let computerScore = 0;

// Step 5
/*
Algorithm for function playRound
Take to parameters humanChoice and computerChoice
Correct case sensitivity by turning first letter to uppercase, rest to lowercase
IF humanChoice beats computerChoice meaning:
    humanChoice = paper and computerChoice = rock
    humanChoice = rock and computerChoice = scissors
    humanChoice = scissors and computerChoice = paper
    return win message
Or opposite
IF both have same then to nothing
*/

const body = document.querySelector("body")

const div = document.querySelector("#result")


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1).toLowerCase();


    if (humanChoice === computerChoice) {
        div.textContent = "It's a tie!";
        return;
    }

    humanWon = (humanChoice === "Paper" && computerChoice == "Rock" ||
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Paper")

    if (humanWon) {
        humanScore++;
        div.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        return;
    } else {
        computerScore++;
        div.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        return;
    }

}




const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

