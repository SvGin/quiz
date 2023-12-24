let startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);

let questionAreaElement = document.getElementById('question-area');

let shuffled, currentQuestion;

/**
 * Starts the fame and displays questions after pressinf Start Button
 */
function startQuiz() {
    startButton.classList.add('hide');
    questionAreaElement.classList.remove('hide');
    shuffled = questions.sort(() => Math.random()); //makes the chosen question random form the question list
    currentQuestion = 0;
    setNextQuestion();
}

/**
 * Displays the question formt the created random question array 
 */
function setNextQuestion() {
    showQuestion(shuffled[currentQuestion]);
}

let questionElem = document.getElementById('question-text');
let answerBtnElem = document.getElementById('answer-options');
let truBtn = document.getElementById('true');
let falseBtn = document.getElementById('false');
/**
 * Gets the question from variable questions, creates new button and removes the previouse 
 */
function showQuestion(question) {
    questionElem.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn-option');
        if (answer.corret){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerBtnElem.appendChild(button);
    });

}

function selectAnswer(e){

}

let questions = [
    {
        question: 'In Home Alone, how many siblings does Kevin have?',
        answers: [
            {text: '4', correct: true},
            {text: '7', correct: false}
        ]
    }
]