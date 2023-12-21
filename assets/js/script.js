// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(startQuiz);
            }
        });
    }
});
let currentQestion = 0;
let score = 0;


let questions = [
    {
        question: 'What country has the highest life expectancy?',
        answers: [
            {option:"Hong Kong", answer:true},
            {option:"London", answer:false}
        ]
    },
    {
        question: 'Where would you be if you were standing on the Spanish Steps?',
        answers: [
            {option:"Rome", answer:true},
            {option:"Madrid", answer:false}
        ]  
    },
    {
        question: 'Which language has the more native speakers: English or Spanish?',
        answers: [
            {option:"English", answer:false},
            {option:"Spanish", answer:true}
        ]    
    }
]

let questionText = document.getElementById('question-text');
let trueButton = document.getElementById('true');
let falseButton = document.getElementById('false');

function startQuiz(){
    currentQestion = 0;
    questionText.innerHTML = questions[currentQestion].question;
    trueButton.innerHTML = questions[currentQestion].answers[0].option;
    falseButton.innerHTML = questions[currentQestion].answers[1].option;
    
}

beginQuiz();