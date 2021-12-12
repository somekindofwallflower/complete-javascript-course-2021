"use strict";

/*//Read the content of a html element
document.querySelector('.message').textContent;
// Change the content of a html element
document.querySelector('.message').textContent = 'Correct number';
// Read the updated content
document.querySelector('.message').textContent;
// Manipulate the content of html element with class .number
document.querySelector('.number').textContent = 13;
// Manipulate the content of html element with class .score
document.querySelector('.score').textContent = 20;
// Read the content of html element with class .guess
document.querySelector('.guess').value;
// Manipulate the content of html element with class .guess
document.querySelector('.guess').value = 20;*/
// // Using query selector select button element
// document.querySelector('.check');

// Create a variable to store random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// Create a variable score with initial value of 20
let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
// Guess number logic game

const displayMessage = (message) => {
    return document.querySelector('.message').textContent = message;
}

// Handle click event on button click
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
        displayMessage("⛔️ No number!")
        // When player wins
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!")
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }// When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!")
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("💥 You lost the game!")
            document.querySelector('.score').textContent = 0;
        }
    }
});


/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
    // Restore initial values of the 'score'
    score = 20;
    document.querySelector('.score').textContent = score;
    // Restore initial values of the 'secretNumber'
    secretNumber = Math.trunc(Math.random() * 20) + 1
    // Restore the initial conditions of the guess value
    document.querySelector('.guess').value = '';
    // Restore the original background color (#222) and number width (15rem)
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // Restore the initial conditions of the message
    displayMessage("Start guessing...")
    // Restore the initial conditions of the number
    document.querySelector('.number').textContent = "?";
})
