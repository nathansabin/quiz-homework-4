//TODO
    // make the correct amount add to the database
    // fix next question

// setting varriables
var amountCorrect; 

var timerInterval;
var timerSeconds = 30;
var timer;

var text;
var questions;
var answer = [];
var quizAnswers = [];
var selectedAnswer;

var buttons;

var scoreboard;
var names;
var scores;
text = document.createElement("h2");

// Start will render in the start button and and a short discription.
function start(){
    amountCorrect = 0;
    timerSeconds = 30;
    text.textContent = "Press the button bellow to begin the quiz";
    startButton = document.createElement("h2");
    startButton.textContent = "Start";
    startButton.setAttribute("class", "start-button");
    startButton.addEventListener("click", quizOne);

    document.body.append(text);
    document.body.append(startButton);
}

// handles event listner for all of the question buttons
function nextQuestion(nextSlide, index){
    for (var i = 0; i < quizAnswers.length; i++) {
        questions.children[i].addEventListener("click", function(event) {
        selectedAnswer = event.target;

        // if (selectedAnswer.getAttribute("id") === "correct"){
        //     amountCorrect++;
        //     nextSlide()
        //     }
        //     else {
        //         timerSeconds = timerSeconds - 5;
        //         nextSlide()
        //         }
        // })}
        
        if (selectedAnswer == questions.children[index]){
            amountCorrect++;
            nextSlide()
            }
            else {
                timerSeconds = timerSeconds - 5;
                nextSlide()
                }
        })}

            

}

// timmerCount will start a timer and added it to the botom right of the screen then check if it is equal to 0. If it is equal to 0 then it will take you to the leader board.
function timerCount(){
     timerInterval = setInterval(function () {
        timer.textContent = "Timer:" + timerSeconds;
        timerSeconds--;

        if (timerSeconds <= 0){
            scoreboard();
        }
    }, 1000);
}

// Quiz will render in the qustions, start the timer, keep track of how many are correct. if all question are completed then it will load in the scoreboard function
function quizOne(){
    timer = document.createElement("h3");
    timer.setAttribute("class", "timer");
    document.body.append(timer);
    timerCount();
    startButton.remove();

    questions = document.createElement("ol");
    quizAnswers = ["A type of soap", "My nickname", "IDK", "American Standard Code for Information Interchange"];
    for (var i = 0; i < quizAnswers.length; i++){
        answer[i] = document.createElement("li");
        answer[i].setAttribute("class", "quiz-button");
        answer[i].textContent = quizAnswers[i];
        questions.appendChild(answer[i]);
    }

    //answer[3].setAttribute("id", "correct");
    document.body.append(questions);
    for (var i = 0; i < quizAnswers.length; i++){
        questions.appendChild(answer[i]);
    }

    text.textContent = "what is an ASCII value?";

    nextQuestion(quizTwo, 3);
}

// Updates question and the id correct
function quizTwo(){
    answer[3].removeAttribute("id");
    text.textContent = "How many bytes are in a bit?";

    quizAnswers = ["Two", "500", "Eight", "At least one"];
    for (var i = 0; i < answer.length; i++){
        answer[i].textContent = quizAnswers[i];
    }
    
    // answer[2].setAttribute("id", "correct")
    nextQuestion(quizThree, 2);
}   

// Updates question and the id correct
function quizThree(){
    answer[2].removeAttribute("id");
    text.textContent = "What is Python named after?";

    quizAnswers = ["Monty Python", "Danny Devito", "Playstation one", "A Snake"];
    for (var i = 0; i < answer.length; i++){
        answer[i].textContent = quizAnswers[i];
    }
    
    //answer[0].setAttribute("id", "correct")
    nextQuestion(scoreboard, 0);
}

// Highscore function this function will handle storing the ammount correct then ask for a name and finally render in the highscore with names
function scoreboard(){
    questions.remove();
    timer.remove();
    text.textContent = "Score Board";
    clearInterval(timerInterval);
   
    name = prompt("What are your intials?");
    if (name !== "null"){
        scores = JSON.parse(localStorage.getItem("scores")) || [];
        scores.push({name: name, score: amountCorrect});
        localStorage.setItem("scores", JSON.stringify(scores));

        scoreboard = document.createElement("ul");
        scoreboard.setAttribute("class", "score-board");
        document.body.append(scoreboard);

        for (var i = 0; i < scores.length; i++){
            var scoreEntry = document.createElement("li");
            scoreEntry.setAttribute("class", "score-box");
            scoreEntry.textContent = scores[i].name + ": " + scores[i].score;
            scoreboard.appendChild(scoreEntry);
        }

        startButton = document.createElement("h2");
        startButton.textContent = "Start";
        startButton.setAttribute("class", "start-button");
        document.body.append(startButton);

        startButton.addEventListener("click", reset);
    }
    else{
        start();
    }
    }

// This function will remove the scoreboard and reset the data so it can be grabbed again, then it will call start again
function reset(){
    //scoreboard.remove();
    //startButton.remove();
   location.reload();
    //start();
    //localStorage.clear();
    }

start()