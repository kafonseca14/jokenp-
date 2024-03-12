const textResult = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    result(humanChoice, playMachine())
    
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const result = (human, machine) => {
    if (human === machine) {
        textResult.innerHTML = 'Empate!'
    } else if (human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissor' || human === 'scissor' && machine === 'paper') {
        textResult.innerHTML = 'Você ganhou!'
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        textResult.innerHTML = 'A Alexa ganhou!'
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}