'use strict';

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
let scoreP1 = 0
let scoreP2 = 0
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')
const scores = [0, 0]
let currentP1 = 0
let currentP2 = 0
let activePlayer = 0

function newGame(){
    changePlayer()
    scoreP1 = 0
    scoreP2 = 0

}
/*function showDice(){
    for(let i = 0; )
}*/
function checkWinner(){
    if(scoreP1 >= 15){
        console.log('Player 1 Wins')
        newGame()
    }else if(scoreP2 >= 15){
        console.log('Player 2 Wins')
        newGame()
    }
}
function holdValue(){
    if(activePlayer === 0 && currentP1 > 1){
        scores[0] += currentP1
        changePlayer()
    }else if(currentP2 > 1){
        scores[1] += currentP2
        changePlayer()
    }
    checkWinner()
    showCurrent()
}
function changePlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    currentP1 = 0
    currentP2 = 0
    showCurrent()
}
function showCurrent(){
    current0.textContent = currentP1
    current1.textContent = currentP2
    score0El.textContent = scores[0]
    score1El.textContent = scores[1]
}
function rollDice(){
    const diceValue = Math.trunc(Math.random() * 6) + 1 
    diceEl.src = `dice-${diceValue}.png`
    if (diceValue > 1 && activePlayer === 0){
        currentP1 += diceValue
        showCurrent()
    }else if(diceValue > 1 && activePlayer === 1){
        currentP2 += diceValue
        showCurrent()
    }else {
        changePlayer()
    }
    showCurrent()
}
btnRoll.addEventListener('click', rollDice) 
btnHold.addEventListener('click', holdValue)
btnNew.addEventListener('click', newGame)
//diceEl.classList.add('dice--6')
