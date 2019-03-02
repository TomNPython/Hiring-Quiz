const questionOneContainer = document.getElementById('question-one-container')
const questionTwoContainer = document.getElementById('question-two-container')
const questionThreeContainer = document.getElementById('question-three-container')
const questionFourContainer = document.getElementById('question-four-container')

const answerOne = document.getElementById('answer-one')
const answerTwo = document.getElementById('answer-two')
const answerThree = document.getElementById('answer-three')
const answerFour = document.getElementById('answer-four')

const answerSheet = document.getElementById('answersheet')
let answers = 0
const score = document.getElementById('score')

function oneAnswer() {
    questionOneContainer.style.opacity = '0'
    questionOneContainer.style.height = '0'
    questionOneContainer.style.visibility = 'hidden'
    questionTwoContainer.style.opacity = '1'
}

function twoAnswer() {
    questionTwoContainer.style.opacity = '0'
    questionTwoContainer.style.height = '0'
    questionTwoContainer.style.visibility = 'hidden'
    questionThreeContainer.style.opacity = '1'
}

function threeAnswer() {
    questionThreeContainer.style.opacity = '0'
    questionThreeContainer.style.height = '0'
    questionThreeContainer.style.visibility = 'hidden'
    questionFourContainer.style.opacity = '1'
}

function fourAnswer() {
    questionFourContainer.style.opacity = '0'
    questionFourContainer.style.height = '0'
    questionFourContainer.style.visibility = 'hidden'
    answersheet.style.opacity = '1'
}


questionOneContainer.addEventListener('click', oneAnswer, true)
questionTwoContainer.addEventListener('click', twoAnswer, true)
questionThreeContainer.addEventListener('click', threeAnswer, true)
questionFourContainer.addEventListener('click', fourAnswer, true)

function correctAnswer() {
    answers++
    score.innerHTML = answers + ' / 4'
}

answerOne.addEventListener('click', correctAnswer)
answerTwo.addEventListener('click', correctAnswer)
answerThree.addEventListener('click', correctAnswer)
answerFour.addEventListener('click', correctAnswer)


