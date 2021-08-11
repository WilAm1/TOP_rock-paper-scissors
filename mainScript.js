function computerPlay() {
    let choices = ["rock", "paper", "scissors"]
        // returns the random index of choices by maths.
    let choosenHandIndex = Math.floor(Math.random() * choices.length)
    return choices[choosenHandIndex]
}

function playRound(player, computer) {
    console.log(`You played ${player}. The computer played ${computer}`)
    let playerWins = `${player} > ${computer}! player wins!`,
        computerWins = `${computer} > ${player}! computer wins!`,
        draw = `Both are ${player}. It's a draw!`
    if (player == computer) {
        return draw
    } else if (player == 'rock' && computer == 'paper') {
        return playerWins
    } else if (player == 'paper' && computer == 'rock') {
        return playerWins
    } else if (player == 'scissors' && computer == 'paper') {
        return playerWins
    } else {
        return computerWins
    }
}


let playerSelection = prompt("Pick Rock, Paper, Scissors!   ").toLowerCase()
let computerSelection = computerPlay()
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))