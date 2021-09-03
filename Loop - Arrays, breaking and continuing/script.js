'use strict';

const hugo = [
    'Hugo',
    'Batista',
    2021 - 1994,
    'student',
    ['Michael', 'Pedro', 'Leonardo'],
    true
];
const types = [];

// console.log(hugo[0])
// console.log(hugo[1])
// ...
// console.log(hugo[4])
// hugo[5] não existe

for(let i = 0; i < hugo.length; i++) {
    // Reading from hugo array    
    console.log(hugo[i], typeof hugo[i]);
    //creating a new array (types) which contains all types of this array
    
    // Filling types array
    // types [i] = typeof hugo[i]

    types.push (typeof hugo[i]);
}

console.log(types);

const years = [1994, 2007, 1956, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]); // Desta forma, cada ano foi calculado individualmente
}
console.log(ages);

// Continue and Break
console.log('--- ONLY STRINGS ---');
for(let i = 0; i < hugo.length; i++) {
    if(typeof jonas[i !== 'string']) continue;

    console.log(hugo[i], typeof hugo[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < hugo.length; i++) {
    if(typeof jonas[i === 'number']) break;

    console.log(hugo[i], typeof hugo[i]);
}