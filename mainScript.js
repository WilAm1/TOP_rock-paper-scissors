function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
        // returns the random index of choices by maths.
    let choosenHandIndex = Math.floor(Math.random() * choices.length)
    return choices[choosenHandIndex]
}

function playRound(player, computer) {
    let playerWins = `${player} beats ${computer}! player wins!`,
        computerWins = `${computer} beats ${player}! computer wins!`,
        draw = `Both are ${player}. It's a draw!`
    if (player == 'rock' && computer == 'paper') {
        return
    }
}


let playerSelection = prompt("Pick Rock, Paper, Scissors!   ").toLowerCase()
let computerSelection = computerPlay()
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))