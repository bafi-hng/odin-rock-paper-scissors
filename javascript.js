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




// Step 6

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1).toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
            return;
        }
    
        humanWon = (humanChoice === "Paper" && computerChoice == "Rock" ||
            humanChoice === "Rock" && computerChoice === "Scissors" ||
            humanChoice === "Scissors" && computerChoice === "Paper")
    
        if (humanWon) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return;
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return;
        }
    }

    for (let rounds = 0; rounds < 5; rounds++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    } 

    if (humanScore > computerScore) {
        console.log(`You win the game! The score is ${humanScore} to ${computerScore}`);
        return;
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! The score is ${humanScore} to ${computerScore}`);
        return;
    }
    console.log(`The game is tied! The score is ${humanScore} to ${computerScore}`);
    return;
}

playGame()