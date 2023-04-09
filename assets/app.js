// setting varriables
var correct; 
var incorrect;

var timerSeconds = 30;
var timer;

var text;
var start;
text = document.createElement("h2");

// Start will render in the start button and and a short discription.
function start(){
    text.textContent = "Press the button bellow to begin the quiz";
    startButton = document.createElement("h2");
    startButton.textContent = "Start";
    startButton.setAttribute("class", "start-button");

    document.body.append(text);
    document.body.append(startButton);
}

// timmerCount will start a timer and added it to the botom right of the screen then check if it is equal to 0. If it is equal to 0 then it will take you to the leader board.
function timerCount(){
     var timerInterval = setInterval(function () {
        timer.textContent = "Timer:" + timerSeconds;
        timerSeconds--;

        if (timerSeconds === 0){
            scoreboard();
        }
    }, 1000);

    // if timer = 0 stop quiz call highscore function

}

// TODO
// Quiz will render in the qustions, start the timer, keep track of how many are correct. if all question are completed then it will load in the scoreboard function
function quiz(){
    timer = document.createElement("h3");
    timer.setAttribute("class", "timer");
    document.body.append(timer);

    timerCount();
    text.textContent = "what is an ASCII value?";
}

//TODO
// Highscore function this function will handle storing the ammount correct then ask for a name and finally render in the highscore with names
function scoreboard(){
    text.textContent = "Highscores";

    // append your total ammount correct 

    // for loop through the list of all store data
    
}

// This function will put all of the other functions together, and handle all event listeners
function init(){
    start();
    startButton.addEventListener("click", quiz);
}

init()