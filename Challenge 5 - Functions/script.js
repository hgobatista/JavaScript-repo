/*
Back to the two gymsnastics teams, the Dolphins and
the Koalas! There is a new gymnsastics discipline,
which works differently.
Each team competes 3 times, and then the average of
the 3 scores is calculated (so one average score per
team).
A team ONLY wins if it has at least DOUBLE the
average score of the other team. Otherwise, no team
wins!

1. Create an arrow function 'calcAverage' to
calculate the average of 3 scores.
2. Use the function to calculate the average for both
teams.
3. Create a function 'checkWinner' that takes the
average score of each team as parameters
('avgDolphins' and 'avgKoalas'), and then logs the
winner to the console, together with the victory
points, according to the rule above. Example: "Koalas
win (30 vs 13)".
4. Use the 'checkWinner' function to determine the
winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas
score 65, 54 and 49.
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas
score 23, 34 and 27.

HINT: To calculate average of 3 values, add tem all
together and divide by 3.
HINT: To check if number A is at least double number
B, check for A >= 2 * B. Apply this to the team's
average scores.
*/

'use strict';
const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner (dolphinsAvg, koalasAvg){
    if(dolphinsAvg >= koalasAvg * 2){
        console.log(`Dolphins wins (${dolphinsAvg} vs ${koalasAvg})`)
    }else if(koalasAvg >= 2 * dolphinsAvg){
        console.log(`Koalas wins (${koalasAvg} vs ${dolphinsAvg})`)
    }else{
        console.log('No team won the game');
    }
}
console.log('First Game');
const dolphinsAvg = calcAverage(44, 23, 71);
console.log(`In the first game, Dolphins make ${dolphinsAvg} points`);
const koalasAvg = calcAverage(65, 54, 49);
console.log(`In the first game, Dolphins make ${koalasAvg} points`);
checkWinner(dolphinsAvg, koalasAvg);

console.log('');

console.log('Second Game');
const dolphinsAvg2 = calcAverage(85, 54, 41);
console.log(`In the second game, Dolphins make ${dolphinsAvg2} points`);
const koalasAvg2 = calcAverage(23, 34, 27);
console.log(`In the second game, Koalas make ${koalasAvg2} points`);
checkWinner(dolphinsAvg2, koalasAvg2);