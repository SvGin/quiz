let questions = [
    {
        question: 'In Home Alone, how many siblings does Kevin have?',
        answers: [
            { text: '4', correct: true },
            { text: '8', correct: false }
        ]
    },
    {
        question: 'In which country did eggnog originate?',
        answers: [
            { text: 'Britain', correct: true },
            { text: 'Russia', correct: false }
        ]
    },
    {
        question: 'How many gifts were given in total in "The Twelve Days of Christmas" song?',
        answers: [
            { text: '598', correct: false },
            { text: '364', correct: true }
        ]
    }
];

let questionText = document.getElementById('question-text');
let answerBtns = document.getElementById('answer-options');
let startButton = document.getElementById('start-btn');
let nextBtn = document.getElementById('next-btn');
let questionArea = document.getElementById('question-area');

let currentQuestionInd = 0;
let score = 0;

startButton.addEventListener('click', beginQuiz);


function beginQuiz() {
    startButton.classList.add('hide');
    //questionArea.classList.remove('hide');
    //nextBtn.classList.remove('hide');
    currentQuestionInd = 0;
    score = 0;
    //nextBtn.innerHTML = 'Next';
    displayQuestion();
}

function displayQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionInd];
    let questionNo = currentQuestionInd + 1;
    questionText.innerHTML = questionNo + ". " + currentQuestion.question;
 
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtns.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}

function selectAnswer(e) {
    let selectedOption = e.target;
    let isCorrect = selectedOption.dataset.correct === 'true';
    if(isCorrect){
        //selectedOption.classList.add('correct');
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
       // selectedOption.classList.add('incorrect');
        alert(`The correct answer was ${isCorrect.innerText}!`);
        incrementWrongAnswer();
    }
    nextBtn.style.display = 'block';
}

beginQuiz();

function incrementScore() {

    let oldScore = document.getElementById('correct').innerText;
    document.getElementById('correct').innerText = ++oldScore;

}

function incrementWrongAnswer() {

    let oldScore = document.getElementById('incorrect').innerText;
    document.getElementById('incorrect').innerText = ++oldScore;
}
