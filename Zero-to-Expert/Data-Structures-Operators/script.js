'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `This is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Maps
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'], 
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
])
// Convert object to map
console.log(Object.entries(openingHours))
const objectToMap = new Map (Object.entries(openingHours))
console.log(objectToMap)

// Quiz app
console.log(question.get('question'))
for (const [key, value] of question){
  if(typeof key === 'number')console.log(`Answer ${key}: ${value}`)   
} 
const answer = 3 //Number(prompt('Your Answer'))
console.log(question.get(question.get('correct') === answer))

// Convert map to array
console.log(question)
console.log([...question])

/*const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisboa, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 24)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');
  console.log(rest.get('name'))
  console.log(rest.get(false))
  console.log(rest.get(1))

  const time = 19
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')))
  rest.delete(2)
  //rest.clear()
  console.log(rest)
  console.log(rest.size)
  // Atribuíndo array como key
  const arr = [1, 2]
  rest.set(arr, 'Test')
  console.log(rest.get(arr))
  // Atribuindo um h1 com key
  console.log(rest.set(document.querySelector('h1'), 'Cabeçalho'))
/*
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

// Example
const staff = ['Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const newStaff = new Set(staff);
const newStaff = [...new Set(staff)];
console.log(newStaff);
console.log(new Set(['Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('danielbotelho').size)

/*
// Property NAMES
const properties = Object.keys(openingHours)
console.log(properties)
let openStr = `We are open on ${properties.length} days: `
for (const day of properties){
  openStr += `${day}, `
}
console.log(openStr)
// Property values
const values = Object.values(openingHours) 
console.log(values)
// Entire object
const entries = Object.entries(openingHours)
console.log(entries)
for (const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}
// Without optional chaining
//console.log(restaurant.openingHours.mon.open)
// With optional chaining 
console.log(restaurant.openingHours.mon?.open)
// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'close'
  console.log(`On ${day} we open at ${open}`)
}
// Optional chaining in methods 
console.log(restaurant.order?.(0, 2) ?? 'Method does not exist')
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist")
// Optional chaining in arrays
const users = [{name: 'Daniel', email: 'hiDaniel@gmail.com'}]
console.log(users[1]?.name ?? 'this array is empty')

// For-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
for (const item of menu) console.log(item)

for (const [i, el] of menu.entries()) {
  console.log(`${i[0] + 1}: ${el}`)
}
//Logical Assignment Operators
const rest1 = {
  name: "Roby's",
  numGuests: 0
}
const rest2 = {
  name: "Pit Stop",
  owner: 'Lucca' 
}
// Operador de atribuíção OR
//rest2.numGuests = rest2.numGuests || 10
//rest1.numGuests = rest1.numGuests || 10
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// nullish assignment operator (nulo ou indefinido)
rest1.numGuests ??= 10
rest2.numGuests ??= 10

rest1.owner &&= "<ANONYMOUS>"
rest2.owner &&= "<ANONYMOUS>"
console.log(rest1, rest2)

/*
//Short-circuiting ---OR---
console.log(3 || 'Daniel')
console.log('', 'Daniel')
console.log(undefined || 0 || '' || 'Hello' || 23 || null)
restaurant.numGuests = 0
const guests1 = restaurant.numGuests? restaurant.numGuests : 10
const guests2 = restaurant.numGuests || 10
console.log(guests1, guests2)

//---AND---
console.log(0 && 'Daniel')
console.log(7 && 'Daniel')
console.log(7 && 'Hello' && null && 'Daniel')

//Exemplo prático
if (restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach')}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')

/*
// Nullish: nulo e indefinido (0 e '' são considerados valores verdadeiros)
const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole 21',
  mainIndex: 2,
  starterIndex: 2
})
restaurant.orderDelivery({
  address: 'Via del Sole 21',
  starterIndex: 1
})
//SPREAD por está do ado direito do =
const arr1 = [1, 2, ...[3, 4]]
//REST porque está do lado esquerdo do =
const [a, b, ...others] = [1, 2, 3, 4, 5]
const [recipe1, , recipe2, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]

//Spread operator
const arr = [7, 8, 9]
const newArr = [1, 2, ...arr]
const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)
//Copy arrays 
const mainMenuCopy = [...restaurant.mainMenu]
//Join 2 arrays
const jointMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]
const ingredients = [
  // prompt("lets make pasta! Ingredient 1"),
  // prompt("Ingredient 2"),
  // prompt("Ingredient 3")
]
restaurant.orderPasta(...ingredients)

//Spread operator on objects
const newRestaurant = {Rated: '4 Stars', ...restaurant, Owner: 'Danie'}
//Copying a object and changing the copy properties
const restaurantCopy= {...restaurant}
restaurantCopy.name = 'Ristorante Roma'
//REST on objects 
const {thu, fri, ...weekend} = {...restaurant.openingHours}
//Functions REST
const add = function(...numbers){
  let sum = 0
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
console.log(sum)
}
add(2, 3)
const x = [5, 8, 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
/*
//const {name, openingHours, categories} = restaurant
const {name, openingHours, categories} = restaurant
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
console.log(restaurantName, hours, tags)

//Setting default values
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

//Mutating variables
let a = 999
let b = 111
const obj = { a: 23 , b: 7 , c: 14 };
({a, b } = obj);
console.log(a, b);

//Nested objects (objetos num ninho)
const {fri: {open, close},
} = openingHours;
console.log(open, close)

const [first, , , fourth] = restaurant.categories
console.log(first, fourth)

//Return 2 values from a function
const [firstValue, secondValue] = restaurant.order(2, 0)
console.log(firstValue, secondValue)

const nested = [2, 4, [5, 6]]
// const [i, , j] = nested
// console.log(i, j)
const [i,,[,j]] = nested
console.log(i, j)

//Setting default values
const [p=1, q=1, r=1, s=1] = [8, 9]
console.log(p, q, r, s)*/
