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
const message = document.getElementById('message')

function oneAnswer() {
    questionOneContainer.style.display = 'none'
    questionTwoContainer.style.opacity = '1'
}

function twoAnswer() {
    questionTwoContainer.style.display = 'none'
    questionThreeContainer.style.opacity = '1'
}

function threeAnswer() {
    questionThreeContainer.style.display = 'none'
    questionFourContainer.style.opacity = '1'
}

function fourAnswer() {
    questionFourContainer.style.display = 'none'
    answersheet.style.opacity = '1'
}

questionOneContainer.addEventListener('click', oneAnswer, true)
questionTwoContainer.addEventListener('click', twoAnswer, true)
questionThreeContainer.addEventListener('click', threeAnswer, true)
questionFourContainer.addEventListener('click', fourAnswer, true) 

function correctAnswer() {
    answers++
    score.innerHTML = answers + ' / 4'
    
    switch(answers) {
        case 0:
            message.innerHTML = "Sorry, try again."
            break;
        case 1:
            message.innerHTML = "It's a good start, but you can do better."
            break;
        case 2: 
            message.innerHTML = "Nearly there. Nice try!"
            break;
        case 3:
            message.innerHTML = "So close."
            break;
        case 4:
            message.innerHTML = "Congratulations! You've made some fine choices!"
    }
}

const questions = document.querySelectorAll('.answer')

questions.forEach(question => question.addEventListener('click', correctAnswer))



