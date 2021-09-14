"use strict";
const openingHours = {
  thu: {
    open: 22,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
  },
};

// Start here <----------

/*  Outro jeito de criar mapas */
//  Vamos criar um quiz para demonstrar

const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct😎"],
  [false, "Try again!"],
]);
console.log(question);
/* Console:
    Map(7) {'question' => 'What is the best programming language?', 1 => 'C', 2 => 'Java', 3 => 'JavaScript', 'correct' => 3, …}
      [[Entries]]
        0: {"question" => "What is the best programming language?"}
        1: {1 => "C"}
        2: {2 => "Java"}
        3: {3 => "JavaScript"}
        4: {"correct" => 3}
        5: {true => "Correct😎"}
        6: {false => "Try again!"}
*/
console.log("");
// -------------------------------------
// Essa estrutura é muito semelhante a de um array
// de arrays, como esta:
console.log(Object.entries(openingHours));
console.log(openingHours);
/* Console: 
    (3) [Array(2), Array(2), Array(2)]
      0: (2) ['thu', {…}]
      1: (2) ['fri', {…}]
      2: (2) ['sat', {…}]
*/
console.log("");
// -------------------------------------
// É muito fácil CONVERTER OBJETO em um MAPA:
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
/* Console:
    Map(3) {'thu' => {…}, 'fri' => {…}, 'sat' => {…}}
      [[Entries]]
        0: {"thu" => Object}
        1: {"fri" => Object}
        2: {"sat" => Object}
*/
console.log("");
// -------------------------------------
// Iteration - FOR LOOP
// Neste exemplo, queremos logar apenas os 3 primeiros itens
// do mapa
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}
/* Console:
    Answer 1: C
    script.js:80 Answer 2: Java
    script.js:80 Answer 3: JavaScript
*/
// Vamos obter esta resposta através de um prompt:
// const answer = Number(prompt("Your answer"));
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));
console.log("");
// -------------------------------------
// Para CONVERTER = MAPA -> ARRAY
console.log([...question]);

/* Console:
    (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
      0: (2) ['question', 'What is the best programming language?']
      1: (2) [1, 'C']
      2: (2) [2, 'Java']
      3: (2) [3, 'JavaScript']
      4: (2) ['correct', 3]
      5: (2) [true, 'Correct😎']
      6: (2) [false, 'Try again!']
*/

console.log("");
// -------------------------------------
// MÉTODOS que temos em MAPS:
console.log([...question.keys()]);
console.log([...question.values()]);