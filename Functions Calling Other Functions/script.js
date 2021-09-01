'use strict';
//Usaremos uma função já usada para exemplificar
/*Desta vez, o processador de frutas consegue apenas
processar pedaços pequenos de frutas, desta forma
será necessário usar outra máquina para cortar as frutas
e entregar os pedaços pequenos de frutas */

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));