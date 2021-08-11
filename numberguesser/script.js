let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Generating a target number
const generateTarget = () => {
    return Math.floor(Math.random() * Math.floor(9));
}

const compareGuesses = (humanGuess, target, computerGuess) => {
    if (Math.abs(humanGuess - target) <=  Math.abs(computerGuess - target)) {
        return true;
    } if  (Math.abs(humanGuess - target) >=  Math.abs(computerGuess - target)){
        return false;
    }
}

const updateScore = (winner)=> {
    if (winner == 'human') {
        return humanScore++
    } if (winner == "computer") {
        return  computerScore++
    } else {

    }
}

const advanceRound = ()=>{
    return currentRoundNumber++
}