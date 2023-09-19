'use strict';

function calcAge(birthYear) {
    const age = 2023 - birthYear
    function printAge(){
        const output = `${firstName} you are ${age}, born in ${birthYear}`
        console.log(output)
        if(birthYear <= 1996 && birthYear >= 1981){
            var str = `Oh, and you're a millenial`
            
        }
        console.log(str)
    }
    printAge()
    console.log(firstName)
    return age
}
const firstName = 'Daniel'
calcAge(1996)