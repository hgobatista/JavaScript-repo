//Type conversion

const inputYear = '1991';
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//-------------

// Type coercion - sempre que tiver string e números,

// estes números serão convertidos em string
console.log("I'm a number " + 23 + ' years old')

// o contrário acontece também, quando tem o operador - (menos)
// isso não acontece com + (mais), que contatena os itens
console.log('23' - 10 - '3');
console.log('23' + 10 + '3');
console.log('23' > '18');