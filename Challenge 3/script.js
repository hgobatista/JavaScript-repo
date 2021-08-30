/* 
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times. The winner
with the highest average score wins the a trophy!

1. Calculate the average score for each team, using
the test data below.
2 . Compare the team's average scores to determine the
winner of the competition, and print it to the 
console. Don't forget that there can be a draw, so
test for that as well (draw means they have the same
average score).

3. BONUS 1: Include a requirement for a minimum score
of 100. With this rule, a team only wins if it has a
higher score than the other team, and the same time a
score of at least 100 points. HINT: Use a logical
operator to test for minimum score, as well as
multiple else-if blocks.
4. BONUS 2: Minimum score also applies to a draw! So
a draw only happens when both teams have the same
score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas
score 88, 91 and 110.
TEST DATA BONUS 1: Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 123.
TEST DATA BONUS 2: Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 106.
 */ 


// First challenge
console.log('First Battle');
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log (`Dolphins have ${scoreDolphins} points
and Koalas have ${scoreKoalas} points`);
if (scoreDolphins > scoreKoalas){
    console.log('Dolphins wins the first challenge!');
}else {
    console.log('Koala wins the first challenge!');
}

console.log('——————————————————————————————————————————————');

// Second challenge
console.log('Second Battle');
const scoreDolphins2 = (97 + 112 + 101) / 3;
const scoreKoalas2 = (109 + 95 + 123) / 3;
console.log (`Dolphins have ${scoreDolphins2} points
and Koalas have ${scoreKoalas2} points`)
if (scoreDolphins2 > scoreKoalas2 && scoreDolphins2 >= 100){
    console.log('Dolphins wins with score higher than 100!');
}else if(scoreKoalas2 > scoreDolphins2 && scoreDolphins2 >= 100){
    console.log('Koalas wins with score higher than 100!');
}else{
    console.log('Both win the trophy!');
}
console.log('——————————————————————————————————————————————');

// Thirty challenge
console.log('Thirty Battle');
const scoreDolphins3 = (97 + 112 + 101) / 3;
const scoreKoalas3 = (109 + 95 + 106) / 3;
console.log (`Dolpins have ${scoreDolphins3} points
and Koalas have ${scoreKoalas3} points`);
if (scoreDolphins3 > scoreKoalas3 && scoreDolphins3 >= 100){
    console.log('Dolphins wins with score higher than 100!');
}else if(scoreKoalas3 > scoreDolphins3 && scoreKoalas3 >= 100){
    console.log('Koalas wins with score higher than 100!');
}else if((scoreDolphins3 === scoreKoalas3) && (scoreDolphins3 >= 100) && (scoreKoalas3 >= 100)){
    console.log('Both win the trophy!');
}else{
    console.log('No one wins the trophy!');
}
