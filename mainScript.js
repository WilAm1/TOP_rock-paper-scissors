function computerPlay() {
    // returns the random index of choices by maths.
    let choosenHandIndex = Math.floor(Math.random() * choices.length);
    return choices[choosenHandIndex]
}

function playRound(player, computer) {
    console.log(`You played ${player}. The computer played ${computer}`)
    let playerWins = `${player} > ${computer}! player wins!`,
        computerWins = `${computer} > ${player}! player loses!`,
        draw = `Both are ${player}. It's a draw!`;
    if (player === computer) {
        return draw
    } else if (player === 'rock' && computer === 'paper') {
        return playerWins
    } else if (player === 'paper' && computer === 'rock') {
        return playerWins
    } else if (player === 'scissors' && computer === 'paper') {
        return playerWins
    } else {
        return computerWins
    }
}


function getPlayerSelection(e) {
    return e.target.textContent.toLowerCase()
};

const choices = ["rock", "paper", "scissors"];
const announcement = document.querySelector('.announcer');
const resultText = document.querySelector('.result');

let playerScore = 0,
    computerScore = 0;

function playGame(playerValue) {

    const playerSelection = playerValue.toLowerCase();

    const computerSelection = computerPlay();

    // Runs for 1 round and returns the outcome to result variable
    let result = playRound(playerSelection, computerSelection)
    resultText.textContent = result;

    console.log(result);
    if (result.includes('wins')) {
        playerScore += 1
    } else
    if (result.includes('draw')) {
        computerScore += 1
        playerScore += 1
    } else {
        computerScore += 1
    }
    announcement.textContent = `Result: Player Score: ${playerScore}/5\nComputer Score: ${computerScore}/5`;
    console.log(`Player Score: ${playerScore}/5\nComputer Score: ${computerScore}/5`);

    if (playerScore === 5 || computerScore === 5) {
        console.clear();
        resultText.textContent = "Game Over";
        announcement.textContent = `Final Scores!\nPlayer Score: ${playerScore}/5\nComputer Score: ${computerScore}/5`;
        console.log('Game over');
        console.log(`Final Scores!\nPlayer Score: ${playerScore}/5\nComputer Score: ${computerScore}/5`)
        const titleText = document.querySelector('.title-text');
        let finalResult = '';
        if (playerScore == computerScore) {
            alert("Its a Tie!");
            finalResult = "Its a Tie!";
        } else if (playerScore > computerScore) {
            alert('Player Wins!');
            finalResult = "Player Wins!!";

        } else {
            alert('Player loses. Computer Bot wins!');
            finalResult = 'Player loses. Computer Bot wins!';
        }
        titleText.textContent = finalResult;
    }
}


const weapons = Array.from(document.querySelectorAll('button.weapon'));
weapons.forEach(weapon => {
    weapon.addEventListener('click', e => playGame(e.target.textContent));
});