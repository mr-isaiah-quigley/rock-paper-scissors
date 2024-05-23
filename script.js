/* 
Rock Paper Scissors
Copyright 2024 Isaiah Quigley
Completed as part of The Odin Project
*/

// Variables
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
let humanSelection = "";
let computerSelection = "";

const rpsButtons = document.querySelector("#btns");

rpsButtons.addEventListener("click", (event) => {
    const target = event.target;

    switch(target.id) {
        case "rock":
            humanSelection = "rock";
            break;
        case "paper":
            humanSelection = "paper";
            break;
        case "scissors":
            humanSelection = "scissors";
            break;
    }
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

// Get the computer's choice
function getComputerChoice() {
    let randomNumber = parseInt(Math.random() * 3);
    let choice;
    switch(randomNumber) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }

    // Check computer choice
    // console.log(`Computer: ${choice}`);
    return choice;
}

// Play a round
function playRound(humanChoice, computerChoice) {

    // Get the necessary elements from the DOM
    const humanChoiceID = document.querySelector("#humanChoice");
    const computerChoiceID = document.querySelector("#computerChoice");
    const roundWinnerID = document.querySelector("#roundWinner");
    const humanScoreID = document.querySelector("#humanScore");
    const computerScoreID = document.querySelector("#computerScore");
    const overallWinner = document.querySelector("#overallWinner");

    // Reset DOM elements as needed
    humanChoiceID.textContent = "Human Choice: ";
    computerChoiceID.textContent = "Computer Choice: ";
    roundWinnerID.textContent = "Round Winner: ";
    
    // Tie
    if (humanChoice === computerChoice) {
        humanChoiceID.textContent += humanChoice;
        computerChoiceID.textContent += computerChoice;
        roundWinnerID.textContent += "Tie!"
        return;
    }

    // Human wins
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        humanChoiceID.textContent += humanChoice;
        computerChoiceID.textContent += computerChoice;
        roundWinnerID.textContent += "Human!";
        humanScore += 1;
        humanScoreID.textContent = "Human Score: "
        humanScoreID.textContent += humanScore;
        computerScoreID.textContent = "Computer Score: "
        computerScoreID.textContent += computerScore;
        if (humanScore == 5) {
            overallWinner.textContent = "Human player wins!!!\nRefresh the page to play again.";
            let buttons = document.querySelectorAll("button");
            buttons.forEach((button) => {button.disabled = true;});

        }
        return;
    }

    // Computer wins
    else {
        humanChoiceID.textContent += humanChoice;
        computerChoiceID.textContent += computerChoice;
        roundWinnerID.textContent += "Computer!";
        computerScore += 1;
        humanScoreID.textContent = "Human Score: "
        humanScoreID.textContent += humanScore;
        computerScoreID.textContent = "Computer Score: "
        computerScoreID.textContent += computerScore;
        if (computerScore == 5) {
            overallWinner.textContent = "Computer player wins!!!\nRefresh the page to play again.";
            let buttons = document.querySelectorAll("button");
            buttons.forEach((button) => {button.disabled = true;});
        }
        return
    }
}