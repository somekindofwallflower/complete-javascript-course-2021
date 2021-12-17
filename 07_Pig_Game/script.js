'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
// Note: getElementById works a bit faster than querySelector
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

