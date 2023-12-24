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

/**
 * Gets the question from variable questions
 */
function showQuestion(question) {
    questionElem.innerText = question.question;

};

let questions = [
    {
        question: 'In Home Alone, how many siblings does Kevin have?',
        answers: [
            {text: '4', correct: true},
            {text: '7', correct: false}
        ]
    }
]