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
    } else if ((player === 'rock' && computer === 'scissors') ||
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
    const botImage = document.querySelector('.bot-image');
    botImage.src = `assets/${computerSelection}.png`;
    // Will 

    playDescription.textContent = `You played ${playerSelection}. The computer played ${computerSelection}`;
    divAnnouncement.insertBefore(playDescription, resultText);
    console.log(`You played ${playerSelection}. The computer played ${computerSelection}`);
    // Runs for 1 round and returns the outcome to result variable
    let result = getResult(playerSelection, computerSelection);
    resultText.textContent = result;

    if (result.includes('wins')) {
        playerScore += 1
    } else if (result.includes('loses')) {
        computerScore += 1
    }
    announcement.textContent = `Scores: Player Score: ${playerScore}/5\nComputer Score: ${computerScore}/5`;

    if (playerScore === 5 || computerScore === 5) {
        showFinalScore()
        playAgain()
    }
}

function showFinalScore() {
    resultText.textContent = "Game Over";
    announcement.textContent = `Final Scores!\nPlayer Score: ${playerScore}/5\nComputer Score: ${computerScore}/5`;

    const finalResult = (playerScore == computerScore) ? "Its a Tie!" :
        (playerScore > computerScore) ? "Player Wins!!" : 'Player loses. Computer Bot wins!';

    h2Element.textContent = finalResult;
    weapons.forEach(weapon => weapon.disabled = true);
}



function playAgain() {
    const restartDiv = document.createElement('div'),
        restartP = document.createElement('p'),
        restartBtn = document.createElement('button');
    restartP.textContent = 'Do you want to Start Again?';
    restartBtn.textContent = 'Press Me';
    restartBtn.classList.add("restart-btn");

    restartDiv.appendChild(restartP);
    restartDiv.appendChild(restartBtn);
    divAnnouncement.appendChild(restartDiv);

    restartBtn.addEventListener('click', () => {

        restartDiv.remove();
        window.location.reload();
        // If we don't use location.reload function
        // computerScore = 0;
        // playerScore = 0;
        // weapons.forEach(weapon => weapon.disabled = false);
        // h2Element.textContent = 'Choose your weapon!';
        // resultText.textContent = '';
        // playDescription.textContent = '';
        // announcement.textContent = 'Result:';
    });

}

// Scores
let playerScore = 0,
    computerScore = 0;

const CHOICES = ["rock", "paper", "scissors"];
const h2Element = document.querySelector('h2');
const resultText = document.querySelector('.result');
const divAnnouncement = document.querySelector('.announcement');
const announcement = document.querySelector('.announcer');
const playDescription = document.createElement('p');
const weapons = Array.from(document.querySelectorAll('button.weapon'));
weapons.forEach(weapon => {
    weapon.addEventListener('click', e => playGame(e.target.textContent));
});