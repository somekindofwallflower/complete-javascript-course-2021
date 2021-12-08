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


// Using query selector select button element
document.querySelector('.check');

// Handle click event on button click
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = "⛔️ No number!";
    }
});
