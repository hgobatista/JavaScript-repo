/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each
player name to the console, along with the goal
number (Example: "Goal 1: Lewandowski");

2. Use a loop to calculate the average odd and log it
to the console (we already studied how to calculate
averages, you can go check if you don't remenber);

3. Print the 3 odds to the console, but in a nice
formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5


Get the team names directly from the game object,
don't hardcode them (except for 'draw'). HINT: Note
how the odds and the game objects have the same
property names 😃.
*/

"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
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
  date: "Nov 9th, 2021",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1.
for (const [g, j] of game.scored.entries()){
  console.log(`Goal ${g + 1}: ${j}`);
}

// Task 2.
const average = game.odds;
//console.log(average);
const [a, b, c] = Object.values(average);
console.log(`The average of games is ${((a + b + c)/3)}`);

// Task 3.
console.log(`Odd of victory ${game.team1}: ${a}`);
console.log(`Odd of draw ${b}`);
console.log(`Odd of victory ${game.team2}: ${c}`);