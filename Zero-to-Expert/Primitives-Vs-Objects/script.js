'use strict'

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}
const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log(jessica, marriedJessica)

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
}
const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'
console.log(jessica2,jessicaCopy)