let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, target) => {

//workout and set the difference between user and target
if( target > userGuess ) {
  userGuess = target - userGuess;
} else {
  userGuess = userGuess - target;
}

// workout and set the difference between computer and target
if( target > computerGuess ) {
  computerGuess = target - computerGuess;
} else {
  computerGuess = computerGuess - target;
}

// compare the valuess
// draw returns true (user win)
// or the smallest number wins, as its the closet to the target
if (userGuess === computerGuess) {
    return true;
  } else if (userGuess < computerGuess) {
      return true;
  } else {
      return false;
  }
  
}

//test the numbers
//compareGuesses(6, 2, 1);
//test the true false outputs
//console.log(compareGuesses(6, 2, 1));



const updateScore = winner => {
  if(winner === 'human') {
    humanScore++;
  } else if(winner === 'computer') {
    computerScore++;
  }
}



const advanceRound = () => {
  currentRoundNumber++;
}


compareGuesses(6, 2, 1);
console.log(humanScore, computerScore, currentRoundNumber);
