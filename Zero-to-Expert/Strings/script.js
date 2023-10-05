'use strict'
/*Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!*/

document.body.append(document.createElement('textarea'))
document.body.append(document.createElement('button'))
const text = document.querySelector('textarea').value

/*const airline = 'TAP Azul Brasil'
const plane = 'A320'
console.log(airline.slice(airline.lastIndexOf(' '), airline.lastIndexOf('')))
console.log(airline.slice(-4))
console.log(airline.slice(1, -1))

const checkMiddleSeat = function(seat) {
    const s = seat.slice(-1)
    if(s === 'B' || s === 'E'){
        console.log(`You're in the middle seat`)
    }else{
        console.log(`You got lucky`)
    }

}
checkMiddleSeat('11E')
console.log('11B'.slice(-1)) 

// Fix capitalization in name
const passenger = 'dAniEl' //Daniel
const passengerLower = passenger.toLowerCase()
const fixedName = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(fixedName)

// Comparing emails
//const lowerEmail = loginEmail.toLowerCase()
//const trimmedEmail = lowerEmail.trim()
const emailChecker = function (email, loginEmail){
    const normalizedEmail = loginEmail.toLowerCase().trim()
    return normalizedEmail === email? true : false
}
console.log(emailChecker('hello@daniel.com', '   hEllo@DaniEl.cOm  \n'))

// replacing
const priceGB = '288,97£'
const priceBR = priceGB.replace(',', '.').replace('£', '$')
console.log(priceBR)

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'
//console.log(announcement.replaceAll('door', 'gate'))
console.log(announcement.replace(/door/g, 'gate'))

// Booleans
const airplane = 'A320neo'
console.log(airplane.includes('neo'))
console.log(airplane.includes('Gol'))
console.log(airplane.startsWith('A3'))

if (airplane.startsWith('Airbus') && airplane.endsWith('neo')){
    console.log('Part of the NEW Airbus family')
}

// Practice exercise
const checkBaggage = function(items){
    const lowerItems = items.toLowerCase()
    if(lowerItems.includes('gun') || lowerItems.includes('knife')){
        console.log('You are not allowed on board')
    } else{
        console.log('Welcome aboard')
    }
}
checkBaggage(' gun')
checkBaggage('soap')

// Split
console.log('a+very+nice+string'.split('+'))
console.log('Daniel Botelho'.split(' '))
const [firstName, lastName] = 'Daniel Botelho'.split(' ')
console.log(firstName, lastName)

// Join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName)

const capitalizeName = function(name){
    const eachName = name.split(' ')
    let namesUpper = []
    for(const i of eachName){
        // namesUpper.push(i[0].toUpperCase() + i.slice(1))
        namesUpper.push(i.replace(i[0], i[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '))
}
capitalizeName('daniel botelho souza')

// Padding
const message = 'Go to gate 20!'
console.log(message.padStart(20, '+').padEnd(25, '+'))

const maskCreditCard = function(number){
    const str = String(number);
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};
console.log(maskCreditCard(55554444666688887777n))

// Repeat 
const planesInLine = function (n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}
planesInLine(4)*/