'use strict';

const hugo = [
    'Hugo',
    'Batista',
    2021 - 1994,
    'student',
    ['Michael', 'Pedro', 'Leonardo']
]

/* Backwards */
// Iremos printar na ordem contrária, de baixo para cima
// 0, 1, ..., 4
// 4, 3, ..., 0
for(let i = hugo.length - 1; i >= 0; i--) {
    console.log(i, hugo[i]);
}

/* Loops in Loops */
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`—————————— Starting exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}