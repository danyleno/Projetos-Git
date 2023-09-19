'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function({starterIndex = 1, mainIndex = 0, address, time = '20:00'}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`This is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient)
    console.log(otherIngredients)
  }
};

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

/*const [first, , , fourth] = restaurant.categories
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
