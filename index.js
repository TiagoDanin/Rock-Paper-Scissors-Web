const rockPaperScissors = require('rock-paper-scissors-ml')

const config = {
	choices: ['rock', 'paper', 'scissors'],
	history: 4,
	lastChoices: []
}
var colors = ['#e91e63', '#f44336', '#6da828', '#ff5722', '#9650a2']
const run = rockPaperScissors(config)

const select = (e) => {
	var answer = e.srcElement.id
	var result = run(answer.replace('bt:', ''))
	var resultText = result.winHumane > 0 ? (result.winHumane == 1 ? 'WIN!' : 'NO ONE WON!') : 'LOST!'
	document.getElementById('sp:you').innerText = result.answerHumane
	document.getElementById('sp:machine').innerText = result.answerMachine
	document.getElementById('h2:result').innerText = resultText
	document.getElementById('h2:result').style.color = colors[0]
	colors = [colors[4], ...colors.splice(0, 4)]
}

document.getElementById('bt:rock').addEventListener('click', select, false)
document.getElementById('bt:paper').addEventListener('click', select, false)
document.getElementById('bt:scissors').addEventListener('click', select, false)
