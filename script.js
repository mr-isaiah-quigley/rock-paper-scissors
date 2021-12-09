/*
Rock, paper, scissors game!  Play rock, paper, scissors against an AI player.
Created by Isaiah Quigley as part of the Odin Project
*/

function computerPlay() {
    /**
     * Begin with a function called computer play that will randomly
     * return rock, paper, or scissors.
     * 
     * BEGIN PSEUDOCODE
     * WHEN it is the computers turn
     * Randomly choose rock, paper, or scissors
     *     Generate a number between 1-3
     *     Let rock, paper, scissor correspond with one of those numbers
     * return the result
     */
    let choice = Math.floor((Math.random() * 3) + 1);
    switch (choice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    /**
     * This function plays a single round of rock, paper, scissors.
     * The players choice and computers choice are taken as parameters.
     * Returns win or loss statement
     * 
     * BEGIN PSEUDOCODE
     * WHEN round begins
     * Compare the results of each player's selection
     *   if there's a tie
     *   player = rock
     *   player = paper
     *   player = scissors
     * Return the results of the comparison
     */

    let winner;
    playerSelection = playerSelection.toUpperCase();
    
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    
    if (playerSelection === "ROCK") {
        return ((computerSelection === "SCISSORS") ? "You win!" : "You lose!");
    }

    if (playerSelection === "PAPER") {
        return ((computerSelection === "ROCK") ? "You win!" : "You lose!")
    }

    if (playerSelection === "SCISSORS") {
        return ((computerSelection === "PAPER") ? "You win!" : "You lose!")
    }
}

const playerSelection = prompt("Rock, paper, scissors, shoot!");
const computerSelection = computerPlay();
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));
