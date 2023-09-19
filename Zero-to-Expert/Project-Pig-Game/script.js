'use strict';

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
let scores = [0, 0]
let currentValue = 0
let activePlayer = 0

function newGame(){
    activePlayer = 0
    scores = [0, 0]
    currentValue = 0
    diceEl.classList.add('hidden')
    showCurrent()
}

function rollDice(){
    const diceValue = Math.trunc(Math.random() * 6) + 1 
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${diceValue}.png`
    if (diceValue !== 1){
        currentValue += diceValue
        document.getElementById(`current--${activePlayer}`).textContent = currentValue
    }else{
        changePlayer()
        showCurrent()
    }
}
function showCurrent(){
    document.getElementById(`current--0`).textContent = 0
    document.getElementById(`current--1`).textContent = 0
    score0El.textContent = scores[0]
    score1El.textContent = scores[1]
}
function changePlayer(){
    player1.classList.toggle('player--active') 
    player2.classList.toggle('player--active')
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    currentValue = 0
    showCurrent()
}
function holdValue(){
    if(currentValue > 1){
        scores[activePlayer] += currentValue
    }
    if(scores[activePlayer] >= 15){
        console.log(`Player ${activePlayer + 1} Wins`)
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        newGame()
    }
    changePlayer()
    showCurrent()
}

btnRoll.addEventListener('click', rollDice) 
btnHold.addEventListener('click', holdValue)
btnNew.addEventListener('click', newGame)
