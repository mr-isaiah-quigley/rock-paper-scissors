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
//function playGame() {

    // Play a round

    

    // show score
    //console.log(`Human: ${humanScore}\nComputer: ${computerScore}\nTie: ${tieScore}`);
//}

//playGame();