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

    playerSelection = playerSelection.toUpperCase();
    
    if (playerSelection === computerSelection) {
        return "TIE"
    }
    
    if (playerSelection === "ROCK") {
        return ((computerSelection === "SCISSORS") ? "PLAYER" : "COMPUTER");
    }

    if (playerSelection === "PAPER") {
        return ((computerSelection === "ROCK") ? "PLAYER" : "COMPUTER")
    }

    if (playerSelection === "SCISSORS") {
        return ((computerSelection === "PAPER") ? "PLAYER" : "COMPUTER")
    }
}

function game() {
    /**
     * Play five rounds of RPS, keeping track of the winner and loser of each round
     * as well as the overall winner.
     * 
     * BEGIN PSEDOCODE:
     * When the game begins, play a round
     * Notify what each player chose
     * Notify win/loss
     * Increment score counter for appropriate player
     * After five rounds, declare a winner
     */

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, scissors, shoot!");
        console.log(`You chose ${playerSelection.toUpperCase()}`);
        const computerSelection = computerPlay();
        console.log(`Computer chose ${computerSelection}`);
        let winner = playRound(playerSelection, computerSelection);
        if (winner === "PLAYER") {
            playerScore += 1;
        } else if (winner === "COMPUTER") {
            computerScore += 1;
        } else {
            playerScore += 1;
            computerScore += 1;
        }
        console.log(`The winner is: ${winner}!`);
    }

    console.log("====================");
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("PLAYER wins!");
    } else if (computerScore > playerScore) {
        console,log("COMPUTER wins!");
    } else {
        console.log(" It's a TIE!")
    }
}

game();