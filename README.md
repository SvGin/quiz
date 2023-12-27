# [Christmas Quiz](<https://svgin.github.io/quiz/>)

It is a Quiz game bout Chrismas. All questions are related to Christmas and it is fun to test your knowlage about this Holiday. Its purpose is for the user to have fun and test their general knowlage on this subject.
This site is tageted towards children and adults.

![Different screen devices with Christmas Quiz web page](/assets/media/Responsive_xmasQuiz.png)

## Features
 - ### Header
   - Displays the name of the game - Christmas Quiz. 
   - By reading the name of the game it is clear what game the user is about to play.
  
       ![Header of the Christmas Quiz game](/assets/media/Header_xmasQuiz.png)

 - ### Questions
   - Questions are displayed one at the time.
   - When the answer is selected new question will apear.
   - Each question will have a number to it from 1-10
   - Written in a clear languafe and readable font
        ![Question area of the Christmas Quiz game](/assets/media/Questions.png)
        
 - ### Answer options
   - Each question has 2 answer options
   - Answers are inside the button and are selected by pressin on the chosent answer

        ![Answer options of the Christmas Quiz game](/assets/media/Answer_options.png)

   - When correct answer is selected the message pops up to congratulate the user

        ![allert message for correct answer](/assets/media/correct_answer.png)

   - Wnen incorrect answer is selected message will say 
 - "Sorry the answer is wrong!"

        ![allert message for incorrect answer](/assets/media/incorrect_answer.png)

 - ### Next button
   - After the answer been selected Next button will be displayed and when clicked on will open new question and answer options.
      ![Next button](/assets/media/next_button.png)

- ### End of the Quiz
  - After las question been answered "Thank you for playing!" message will appear indicating that the quiz is finished.
  - Next button will change to Reset button, when chiked on will start the Quiz from the beginning.
  - The score will appear below the Reset button to show the user the total score

     ![Thank you for playing message with the score and reset button ](/assets/media/thank_you_for_playing.png)

## Features to implement
 - Add Start button at the beginnig of the quiz
- Add Username input before the quiz starts
- Add keydown to the Next button so when Enter is pressend on the keyboard its automatically selects Next.
- Remove alert messages when the answer option is selected and instead change color of the selected answer. red when incorrect ans green when answer is selected correctly.
- When asnswer is chosen to no allow to choose a different answ 
- Change design on the quiz so it appears more festive

## Testing

### Feature and device responsivness testing
- Played the game on different devices to make sure all the implemented features are working
- Tested to make sure thatt the quiz result is always correct
- Run the page through lighthouse in devtools to confirm colors and fonts are accessible.

 ![Lighthouse results](/assets/media/lighthouse%20results.png)

### Validator testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsvgin.github.io%2Fquiz%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsvgin.github.io%2Fquiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)
- JSHint
  - No errors found, have 18 warnings [JsHints](https://jshint.com/)

## Deployment

  The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://svgin.github.io/quiz/>

## Credits

- ### Content
  - Text for the quiz questions were taken form :
    - [Cosmopolitan](https://www.cosmopolitan.com/uk/worklife/a34747711/christmas-quiz-questions/)
 - Instructions on how to implement form validation on the Sign Up page was taken from [Code Institute](https://codeinstitute.net./)
 - The icons for the Header are from [Fontawsome](https://fontawesome.c

- Font style : [Google fonts](https://fonts.google.com/specimen/Raleway?query=rale)
- Some of the code was adapted form :
  - [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/README.md#starter-maths-game)
  - [Coding Ninjas](https://www.codingninjas.com/studio/library/how-to-create-a-javascript-quiz-code)
  - [sitepoint](https://www.sitepoint.com/simple-javascript-quiz/);
  - Youtube channels:
    - [Web Dwv Simplifide](https://www.youtube.com/watch?v=riDzcEQbX6k)
    - [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=2s)
- To show responsivness of the page used [I am responsive](https://ui.dev/amiresponsive?url=https://svgin.github.io/quiz/)
