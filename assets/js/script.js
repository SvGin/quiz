


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

let currentQuestionInd = 0;
let score = 0;

let questionText = document.getElementById('question-text');
let answerBtns = document.getElementById('answer-options');
let nextBtn = document.getElementById('next-btn');
let questionArea = document.getElementById('question-area');
let scoreArea = document.getElementById('area');


function beginQuiz() {
    
    currentQuestionInd = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerBtns.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    };
}

function selectAnswer(e) {
    let selectedOption = e.target;
    let isCorrect = selectedOption.dataset.correct === 'true';
    if(isCorrect){
        selectedOption.classList.add('correct');
        alert("Hey! You got it right! :D");
        score++;
    
    } else {
        selectedOption.classList.add('incorrect');
        alert(`The correct answer was ${isCorrect.innerText}!`);
    
    }
    nextBtn.style.display = 'block';
}

function showScore() {
    resetState();
    questionText.innerHTML = `Thank you for playing`;
    nextBtn.innerHTML = 'Reset';
    nextBtn.style.display = 'block';
    scoreArea.innerText = `Correct answers ${score} out of ${questions.length}!`;
}

function handleNextButton(){
    currentQuestionInd++;
    if(currentQuestionInd < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}


nextBtn.addEventListener('click', ()=> {
    if(currentQuestionInd < questions.length){
        handleNextButton();
    } else {
        beginQuiz();
    }
})


beginQuiz();