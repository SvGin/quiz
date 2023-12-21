document.addEventListener("DOMContentLoaded", function () {
    let submit = document.getElementsByTagName("button");

    
    submit.addEventListener("click", function () {
                alert("You clicked Submit!");
        });
    
});

let questions = [
    {
        question: 'What country has the highest life expectancy?',
        answers: {
            a: 'Hong Kong',
            b: 'Paris',
            c: 'London'
        },
        correctAnswer: 'a'
    },
]