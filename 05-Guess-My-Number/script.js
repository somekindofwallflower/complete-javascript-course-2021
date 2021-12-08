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

// Random number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = secretNumber;


// Handle click event on button click
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {

        document.querySelector('.message').textContent = "⛔️ No number!";
    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
   // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📈 Too high!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }

    // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Too low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }
});
