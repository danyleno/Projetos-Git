'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
<div class="movements__value">${mov}€</div>
</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySumary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySumary(acc);
};

// Event handler
let currentAcount;
btnLogin.addEventListener('click', function (e) {
  // Prevenir de recarregar a página por submitt
  e.preventDefault();
  currentAcount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAcount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${
      currentAcount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAcount);
  }
});

// Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => inputTransferTo.value === acc.username
  );
  if (
    amount > 0 &&
    receiverAcc &&
    currentAcount.balance >= amount &&
    receiverAcc.username !== currentAcount.username
  ) {
    currentAcount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAcount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAcount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAcount.movements.push(amount);
    // Update UI
    updateUI(currentAcount);
  }
  inputLoanAmount.value = '';
});

// Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAcount.username === inputCloseUsername.value &&
    currentAcount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAcount.username
    );

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAcount.movements, !sorted);
  sorted = !sorted
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);
/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e']

// Splice
arr.splice(1, 1)
console.log(arr)

// Reverse
arr = ['a', 'b', 'c', 'd', 'e']
let arr2 = ['j', 'i', 'h', 'g', 'f']
console.log(arr2.reverse())
 
// Concat
const letters = arr.concat(arr2)
console.log(letters)

// Join
console.log(letters.join(' - '))

// At
const arr = [23, 44, 87]
console.log(arr.at(-1))

// forEach
for (const move of movements){
  console.log(`The user ${move > 0? 'deposited' : 'withdrew'} ${move} U$`)
}

movements.forEach(function(movement, counter){
  console.log(`${counter + 1} The user ${movement > 0? 'deposited' : 'withdrew'} ${movement} U$`)

})

// forEach on Maps
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`)
})

// forEach on Sets
const currenciesUnique = new Set(['USD', 'GBP', 'EUR'])
currenciesUnique.forEach(function(value, key, map){
  console.log(`${key}: ${value}`)

})
// Dogs Challenge
const juliaData = [9, 16, 6, 8, 3];
const kateData = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, 3);
  const allDogs = dogsJuliaCorrected.concat(dogsKate)
  allDogs.forEach(function (dogAge, i) {
    const puppyOrAdult =
      dogAge >= 3 ? `an adult, and is ${dogAge} years old` : 'still a puppy 🐶';
    console.log(`Dog number ${i + 1} is ${puppyOrAdult}`);
  });
  console.log(allDogs);
};
checkDogs(juliaData, kateData);

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : age * 4 + 16))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// Map() Method
const eurToUsd = 1.1
const movementsUSD = movements.map(mov => mov * eurToUsd)
console.log(movementsUSD)

const movementsDescription = movements.map(function(mov, i, arr){
 return `Movement ${i + 1}: You ${mov > 0? 'deposited' : 'withdrew'} ${mov}`
})
console.log(movementsDescription)

// Filter() Method
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(mov => mov < 0)
console.log(deposits, withdrawals);

// Reduce() Method
const balance = movements.reduce((accumulator, current) => accumulator + current, 0);
console.log(balance);

const maximumValue = movements.reduce((acc, mov) => acc > mov? acc :  mov, movements[0])
console.log(maximumValue) 

// Find() Method
const firstWithdrawal = movements.find(mov => mov < 0)
console.log(firstWithdrawal)

const account = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(account)

let account = ''
for (const acc of accounts){
  acc.owner === 'Jessica Davis'? account = acc : ''
}
console.log(account)

// Equality
console.log(movements.includes(-130))
 
// Some: Condition
const anyDeposits = movements.some(mov => mov > 3500)
console.log(anyDeposits)

// Every
// Separate callback
const deposit = mov => mov > 0
console.log(movements.every(deposit))

// Flat 
const arr = [[1,2,3], [4], 5]
console.log(arr.flat())
// Second level of nesting
const arrDeep = [[[1, 2], 3], [[4], 5], 6]
console.log(arrDeep.flat(2))

// FlatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overalBalance2);

// Sort
// Strings
const owners = ['Daniel', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
// Numbers

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
//movements.sort((a, b) => {
//  if (a > b) return 1;
//  if (a < b) return -1;
//});
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
movements.sort((a, b) => b - a);
console.log(movements);
*/
