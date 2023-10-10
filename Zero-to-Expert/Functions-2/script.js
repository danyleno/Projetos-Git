'use strict';

// Functions challenge 1
/*let answerCounter = 0;
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    for (let i = 0; i < 1; ) {
      answerCounter = Number(
        prompt(
          `${this.question} \n${this.options.join('\n')} \n(Write option number)`
        )
      );
      if (answerCounter >= 0 && answerCounter <= 3) {
        i++;
      }
    }
    this.answers[answerCounter] += 1;
    this.displayResults();
  },
  displayResults(type = 'array') {
    if(type === 'array'){
      console.log(this.answers);
      
    }else {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
    
  },
};

poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string')
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// Setting default values
const bookings = [];
// ES6
const createBooking = function (
  flightNum = 'LH123',
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //numPassengers = numPassengers || 1;
  //price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking(undefined, 2);

const flight = 'LH234';
const daniel = {
  name: 'Daniel Botelho',
  passport: 6516145614,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 777) {
    alert('Checked in!');
  } else {
    alert('Wrong passport!');
  }
};
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(daniel)
checkIn(flight, daniel)


// Callback function
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase;
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// High-order function
const transformer = function(str, fn){
    console.log(`Transformed string: ${fn(str)}`)
}

transformer('JavaScript is the best!', upperFirstWord)

// Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');
greeterHey('Daniel');
greet('Hello')('Eduardo');


const azul = {
  airline: 'Azul',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }, 
}; 
azul.book(421, 'Daniel Botelho');

const azulElite = {
  airline: 'Eurowings',
  iataCode: 'EL',
  bookings: [],
};
const book = azul.book;
// Call method
book.call(azulElite, 85, 'Daniel Botelho');

const flightData = [465, 'Eduardo Ramon'];
console.log(book.call(azul, ...flightData));

// Bind method
const bookEL = book.bind(azulElite);
bookEL(45, 'Alan Rivers');

const bookEL50 = book.bind(azulElite, 50);
bookEL50('Saul Goodman');

// With event listeners
azul.planes = 300;
azul.buyPlanes = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', azul.buyPlanes.bind(azul));
 
// Partial application
const addTax = rate => value => value + value * rate

const icmsTax = addTax.bind(null, 0.23)
//const icmsTax = addTax(0.18)
console.log(icmsTax(100))

// Immediately invoked Function Expressions (IIFE)
(function () {
  console.log('This will never run again');
})();
// Arrow
(() => console.log('This will also never run again'))();

// Closures
const secureBooking = function(){
  let passengerCount = 0
  return function (){
    passengerCount++
    console.log(`${passengerCount} passengers`)
  }
}
const booker = secureBooking()
booker()

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

// Example 2
const boardPassengers = function(n, wait){
  const perGroup = n / 3
  setTimeout(function(){
    console.log(`We are boarding all ${n} passengers`)
    console.log(`There are 3 groups, each with ${perGroup} passengers`)
  }, wait * 1000)
  console.log(`Will start boarding in ${wait} seconds`)
}
boardPassengers(150, 3)

1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/

 (function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';
 document.querySelector('body').addEventListener('click', function () {
header.style.color = 'blue'
 })
 })();
