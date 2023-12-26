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
    },
    {
        question: 'In which country is it tradition to eat KFC for Christmas dinner?',
        answers: [
            { text: 'Cananda', correct: false },
            { text: 'Japan', correct: true }
        ]
    },
    {
        question: 'Which country started the tradition of putting up a Christmas tree?',
        answers: [
            { text: 'Latvia', correct: false },
            { text: 'Germany', correct: true }
        ]
    },
    {
        question: 'What time is the King’s speech traditionally broadcast on Christmas Day?',
        answers: [
            { text: '3pm', correct: true },
            { text: '6am', correct: false }
        ]
    },
    {
        question: 'What is the Grinch\'s dog called?',
        answers: [
            { text: 'Bob', correct: false },
            { text: 'Max', correct: true }
        ]
    },
    {
        question: 'What colour are mistletoe berries?',
        answers: [
            { text: 'White', correct: true },
            { text: 'Red', correct: false }
        ]
    },
    {
        question: 'What colour suit did Santa wear until Coca Cola rebranded him in red?',
        answers: [
            { text: 'Orange', correct: false },
            { text: 'Green', correct: true }
        ]
    },
    {
        question: 'What decoration do elves traditionally have on their shoes?',
        answers: [
            { text: 'Bells', correct: true },
            { text: 'Ribbons', correct: false }
        ]
    }
];

let currentQuestionInd = 0;
let score = 0;

let questionText = document.getElementById('question-text');
let answerBtns = document.getElementById('answer-options');
let nextBtn = document.getElementById('next-btn');
let scoreArea = document.getElementById('area');

/**
 * This function starts the quiz
 */
function beginQuiz() {
    currentQuestionInd = 0;
    score = 0;
    scoreArea.classList.add('hide'); //hides the final score
    nextBtn.innerHTML = 'Next';
    displayQuestion();
}

/**
 * Function displays question with a nuber and possible answers; 
 */
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

/**
 * Resets the questions and answers. Replaces current with next one.
 */
function resetState() {
    nextBtn.style.display = 'none';
    while(answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

/**
 * When answer selected will display alert message to show if the chousen aswer is correct 
 */
function selectAnswer(e) {
    let selectedOption = e.target;
    let isCorrect = selectedOption.dataset.correct === 'true';
    if(isCorrect){
        selectedOption.classList.add('correct');
        alert("Hey! You got it right! :D");
        score++;
    
    } else {
        selectedOption.classList.add('incorrect');
        alert(`Sorry, the answer is wrong!`);
    }
    nextBtn.style.display = 'block';
}

/**
 * will display next answer or the final score after completing last question
 */
function showScore() {
    resetState();
    questionText.innerHTML = `Thank you for playing`;
    nextBtn.innerHTML = 'Reset';
    nextBtn.style.display = 'block';
    scoreArea.classList.remove('hide');
    scoreArea.innerText = `Correct answers ${score} out of ${questions.length}!`;
}

/**
 * Next button to appear after answer is selected or display final score after last question
 */
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
});

beginQuiz();