//Step 2
/* 
Algorithm for function getComputerChoice
Create variable x which stores random number between 0 and 1
IF x is smaller than or equal 1/3: return "rock"
IF x is larger than 1/3 and smaller than or equal 2/3: return "paper"
IF x is larger than 2/3: return "scissors"
*/

function getComputerChoice() {
    let x = Math.random();
    if (x <= 1/3) {
        return "rock";
    } else if (x > 2/3) {
        return "scissors";
    }
    return "paper";
}

console.log(getComputerChoice())