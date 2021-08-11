function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"]
        // returns the random index of choices by maths.
    let choosenHandIndex = Math.floor(Math.random() * choices.length)
    return choices[choosenHandIndex]
}

console.log(computerPlay())