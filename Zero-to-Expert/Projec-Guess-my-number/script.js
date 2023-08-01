'use strict';
/*
console.log(document.querySelector('.message').textContent = 'start guessing')
document.querySelector('.number').textContent = 13 
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
*/
function randomNum(){return Math.trunc(Math.random() * 20) + 1}
let secretNumber = randomNum()
document.querySelector('.number').textContent = secretNumber
function newGame(){
    score = 20
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = '20'
    document.querySelector('.guess').value = ''
    result = ''
    secretNumber = randomNum()
}
function scoreMessage(scoreVal, messageVal){
    document.querySelector('.score').textContent = scoreVal
    document.querySelector('.message').textContent = messageVal
}
let score = 20
let result = ''
let highscore = 0
document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    if( score > 1 && guess !== secretNumber){
        //When there is no input
    if(guess > 20 || guess < 1){
        scoreMessage(score, 'Invalid number')
        //When the guess is too high or too low
    }else if(guess !== secretNumber){
        score--
        document.querySelector('.score').textContent = score
        scoreMessage(score , guess > secretNumber? '📈 Too high!' : '📉 Too low!')
    }
}    
//When user wins
else if(guess == secretNumber){
    scoreMessage(score , '🎉 Correct Number!')
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
    result = 'restart'
    highscore = score > highscore? score : highscore
    document.querySelector('.highscore').textContent = highscore
}
//When user looses
    else if(score > 0){
        score--
        scoreMessage(score , 'You lost the game💥')
        result = 'restart'
    }

})
document.querySelector('.again').addEventListener('click', function(){
    if(result === 'restart'){
        console.log('working')
        newGame()
    }else{
        console.log('You need to finish')
    }
})
