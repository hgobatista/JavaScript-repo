'use strict';

//Function declaration
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1991);

//Function expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

//Arrow function
//Muito mais fácil e rápida de ser feita

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

//Outro exemplo, desta vez um pouco maior e com mais parâmetros
//Nesta, é calculado quantos anos faltam para a aposentadoria

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1994, 'Hugo'));
console.log(yearsUntilRetirement(1987, 'Dany'));