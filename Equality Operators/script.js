// == converte o primeiro número
// para se igualar ao segundo

// === confere estritamente se os (sempre usar esse!!!)
// dois números são iguais

const favourite = Number(prompt("What's your favourite number?"));
;
if (favourite === 10) {
    console.log('Cool! Your number is very high!');
} else {
    console.log('You should choose a higher number, sorry.');
}

// !== significa diferente

const favourite2 = Number(prompt('Choose another number.'));

if (favourite2 !== 11) {
    console.log('Why not 23?');
}