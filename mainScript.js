function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"]
    let choosenHandIndex = Math.floor(Math.random() * choices.length)
    return choices[choosenHandIndex]
}

console.log(computerPlay())