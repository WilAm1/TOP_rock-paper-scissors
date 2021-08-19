function computerPlay() {
    // returns the random index of choices by maths.
    let choosenHandIndex = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[choosenHandIndex]
}

function getResult(player, computer) {
    const playerWins = `${player} > ${computer}! player wins!`,
        computerWins = `${computer} > ${player}! player loses!`,
        draw = `Both are ${player}. It's a draw!`;
    if (player === computer) {
        return draw
    } else if ((player === 'rock' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return playerWins
    } else {
        return computerWins
    }
}

// Main Game Function
function playGame(playerValue) {
    const playerSelection = playerValue.toLowerCase();
    const computerSelection = computerPlay();
    // Will 
    const guideDiv = document.querySelector('.guide-div');
    playDescription.textContent = `You played ${playerSelection}. The computer played ${computerSelection}`;
    guideDiv.appendChild(playDescription);
    console.log(`You played ${playerSelection}. The computer played ${computerSelection}`);
    // Runs for 1 round and returns the outcome to result variable
    let result = getResult(playerSelection, computerSelection);
    resultText.textContent = result;

    if (result.includes('wins')) {
        playerScore += 1
    } else if (result.includes('loses')) {
        computerScore += 1
    }
    announcement.textContent = `Result: Player Score: ${playerScore}/5\nComputer Score: ${computerScore}/5`;

    if (playerScore === 5 || computerScore === 5) {
        resultText.textContent = "Game Over";
        announcement.textContent = `Final Scores!\nPlayer Score: ${playerScore}/5\nComputer Score: ${computerScore}/5`;
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
        weapons.forEach(weapon => weapon.disabled = true);
    }
}

const CHOICES = ["rock", "paper", "scissors"];
const announcement = document.querySelector('.announcer');
const resultText = document.querySelector('.result');
const titleText = document.querySelector('.final-result');
const playDescription = document.createElement('p');

// Scores
let playerScore = 0,
    computerScore = 0;

const weapons = Array.from(document.querySelectorAll('button.weapon'));
weapons.forEach(weapon => {
    weapon.addEventListener('click', e => playGame(e.target.textContent));
});