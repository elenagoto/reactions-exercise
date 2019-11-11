// ****************************************************************************
// Welcome to the JavaScript code for the Reactions Game!  You can skip down to
// line 67 to start on the exercise tasks, and the first task is to replace
// the last line of the file with an interval.
// ****************************************************************************

const gameButtons = document.getElementsByClassName('flash');
let score = 0;


// Starts a new go in the game by hiding the visible button
// and randomly displaying another button.
const nextGo = function() {
  hideTheVisibleButton();
  displayARandomButton();
};

// Resets the player's score
const resetScore = function(){
  score = 0;
  document.getElementById('score').textContent = score;
};

// Adds one to the player's score.
const addOneToScore = function(event) {
  score++;
  let scoreDisplay = document.getElementById('score');
  scoreDisplay.textContent = score;
};

// Displays a random button by adding the visible CSS class to the
// other two classes needed for the button.
const displayARandomButton = function() {
  let button = getRandomButton();
  button.className = 'button flash visible';
};

// This function returns a random button from the NodeList of buttons.
// It uses Math.random() to do this, which you can read about on MDN
// here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomButton = function() {
  let numberOfButtons = gameButtons.length;
  let randomButtonIndex = Math.floor(Math.random() * Math.floor(numberOfButtons));
  return gameButtons[randomButtonIndex];
};

// Displays the game over message, along with the player's final score.
const displayGameOverMessage = function(){
  document.getElementById('finalScore').textContent = score;
  document.getElementById('gameOver').className = '';
};

// Hides the game over message.
const hideGameOverMessage = function(){
  document.getElementById('gameOver').className = 'hide';
};

// bind the function that will start the next go at the game, and separately the
// the function that will add one to the player's score to the click event of all
// game buttons
for(var i=0; i<gameButtons.length; i++){
  gameButtons[i].addEventListener('click', nextGo);
  gameButtons[i].addEventListener('click', addOneToScore);
}

// *********************************************************************
// No changes need to be made above this line.  But have a look through
// the code to understand how the different methods work.  You'll need
// to use some of them to complete the exercise.  There might also be
// some new things to learn and improve your JavaScript knowledge.
// *********************************************************************

// ** Make your changes below **

// Hides the currently visible button, which is done by finding the button that
// has the visible CSS class and removing that class.  This function is unsafe
// however, because it always expects to find at least one button that has the
// visible class.
const hideTheVisibleButton = function() {
  // TASK 1 - Needs to have error handling in task 1
  try {
    let button = document.querySelector('.visible');
    button.className = 'button flash';
  } catch(error) {
    console.log('Unable to find any visible buttons');
  }
  // let button = document.querySelector('.visible');
  // button.className = 'button flash';
};




// Used to start a new game
const startTheGame = function() {
   // TASK 5 - needs to be completed in task 5...
  if (intervalId == 0) {
    resetScore();
    hideGameOverMessage();
    intervalId = setInterval(nextGo, 1000);
    timeOutid = setTimeout(stopTheGame, twoMinutes);
  }
};


// Used to stop the current game
const stopTheGame = function() {
  // TASK 4 - needs to be completed in task 4...
  displayGameOverMessage();
  hideTheVisibleButton();
  clearInterval(intervalId);
  intervalId = 0;
  clearTimeout(timeOutid);
  timeOutid = 0;
};

// get the stop button and bind a click event that can stop the game
let stopButton = document.getElementById('stop');
stopButton.addEventListener('click', stopTheGame);

let startButton = document.getElementById('start');
startButton.addEventListener('click', startTheGame);


// TASK 2 - start the game!  Needs to be replaced in task 2.

// setting interval to change the start of the game
let intervalId = setInterval(nextGo, 1000);

// TASK 3 - Stop the game after 2 minutes

const twoMinutes = 120000;
let timeOutid = setTimeout(stopTheGame, twoMinutes);


