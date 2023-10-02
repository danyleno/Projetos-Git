"use strict";

/*Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL

*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events)

// 2.
gameEvents.delete(64);
//console.log(gameEvents);

// 3.
console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

// 4.
for (const [time, event] of gameEvents) {
  console.log(
    `[${time < 45 ? "FIRST HALF" : "SECOND HALF"}] ${time}: ${event}`
  );
}
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const printGoals = function (...playerName) {
  console.log(`${playerName} scored a total of ${playerName.length} goals`);
};
// 1.
const [players1, players2] = game.players;
// 2.
const [gk, ...fieldPlayers] = players1;
// 3.
const allPlayers = [...players1, ...players2];
// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
// 6.
printGoals(...game.scored);
// 7.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
// Challenge 2
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(average);
// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamOdd = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of victory ${teamOdd}: ${odd}`);
}
// 4.
const scorers = {};
for (const scorerName of game.scored) {
  scorers[scorerName] ? scorers[scorerName]++ : (scorers[scorerName] = 1);

  console.log(scorerName);
}
console.log(scorers);
