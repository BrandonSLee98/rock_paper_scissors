

function computerPlay() {
    const randomNumber = Math.random();

    if (randomNumber <= .34) {
        return "Rock";
    } else if (randomNumber < .64) {
        return "Paper";
    } else {
        return "Scissors";
    }
}



let playerScore = 0;
let computerScore = 0;

let input = prompt("Input: Rock, Paper, or Scissors");

let computerSelection = computerPlay();
let playerSelection = input;

function playRound(playerSelection, computerSelection) {

    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "Tie";
    } else if (player === "rock") {
        if (computer === "paper") {
            computerScore += 1;
            return "You lose this round. Paper beats rock.";
        } else if (computer === "scissors") {
            playerScore += 1;
            return "You win this round. Rock beats scissors.";
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            computerScore += 1;
            return "You lose this round. Rock beats Scissors.";
        } else if (computer === "paper") {
            playerScore += 1;
            return "You win this round. Scissors beat paper.";
        }
    } else if (player === "paper") {
        if (computer === "scissors") {
            computerScore += 1;
            return "You lose this round. Scissors beat Paper.";
        } else if (computer === "rock") {
            playerScore += 1;
            return "You win this round. Paper beats rock.";
        }
    }

}

console.log(playRound(playerSelection, computerSelection));

function game() {

    playRound();

    if (playerScore > 4) {
        console.log("You win the game!");
    } else if (computerScore > 4) {
        console.log("You lose :(");
    }

}





function convertScore() {

    if (playerScore = 0) {
        return "0"
    }
}
convertScore();

document.getElementById("score").innerHTML = convertScore