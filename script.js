/* 
Rock Paper Scissors
Copyright 2024 Isaiah Quigley
Completed as part of The Odin Project
*/

// Variables
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

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

// Get the human's schoice
function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors?");

    if (!["rock", "paper", "scissors"].includes(choice.toLowerCase())) {
        console.log(`Error!  Expected rock, paper, or scissors.  Received: ${choice}`);
        getHumanChoice();
    }

    // Check computer choice
    // console.log(`Human: ${choice}`);
    return choice;
}

// Play a round
function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase(); // Remove case sensitivity
    
    // Tie
    if (humanChoice === computerChoice) {
        console.log(`Tie!`);
        tieScore += 1;
        return;
    }

    // Human wins
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        console.log(`Winner! ${humanChoice} beats ${computerChoice}!`);
        humanScore += 1;
        return;
    }

    // Computer wins
    else {
        console.log(`You lose!  ${computerChoice} beats ${humanChoice}!`)
        computerScore += 1;
        return
    }
}

// Play the game!
function playGame() {

    // Play five rounds
    for (let i =0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // show score
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}\nTie: ${tieScore}`);
}

