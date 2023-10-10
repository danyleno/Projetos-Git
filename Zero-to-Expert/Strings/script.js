"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const line of flights.split("+")) {
  const [type, from, to, time] = line.split(";");
  const finalLine = [
    `${type.includes('Delayed') ? "🔴" : ""}` +
      type.replaceAll("_", " ") +
      " from " +
      from.toUpperCase().slice(0, 3) +
      " to " +
      to.toUpperCase().slice(0, 3) +
      " (" +
      time.replace(":", "h") +
      ")",
  ].join();
  console.log(finalLine.padStart(50));
}
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
