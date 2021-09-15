"Use strict";

/*  Deixaremos de lado o restaurante e agora partiremos
para uma empresa de transportes aéreos! */

const airline = "TAP Air Portugal";
const plane = "A320";

//-----------------------------------------------------
// Como DESCOBRIR a LETRA de uma POSIÇÃO em uma string:
console.log(plane[0]);
console.log(plane[2]);
console.log(plane[3]);
console.log("B737"[0]);
/* Console:
    A
    2
    0
    B
Obs:
Note que é muito similar ao array.
Os NÚMEROS continuam sendo STRINGS,
se quisermos fazer cálculos devemos
CONVERTÊ-LOS.
*/
console.log("");
//-----------------------------------------------------
// Podemos descobrir o COMPRIMENTO de uma string:
console.log(airline.length);
console.log("B737".length);
/* Console:
    16
    4
*/
console.log("");
//-----------------------------------------------------

/*                      ~//~                       */

//     MÉTODOS \ MÉTODOS \ MÉTODOS  <==================

// Podemos descobrir a POSIÇÃO de uma LETRA:
console.log(airline.indexOf("r"));
console.log("Hugo".indexOf("g"));
console.log("Fernando".indexOf("n"));
/* Console:
    6
    2
    3
*/
console.log("");
//-----------------------------------------------------
// Podemos descobrir a ÚLTIMA POSIÇÃO de uma letra:
console.log("Fernando".lastIndexOf("n"));
/* Console:
    5
*/
console.log("");
//-----------------------------------------------------
// Podemos ainda descobrir uma PALAVRA INTEIRA em uma string:
console.log("Hugo Fernando Batista, brasileiro, 26 anos".indexOf("Batista"));
/* Console:
    14
*/
console.log("");
//-----------------------------------------------------

/*                      ~//~                       */

/*   
    PARA QUÊ PODEMOS USAR STRINGS?   <================== 
*/

console.log(airline.slice(4));
/* Console:
        Air Portugal    ( É chamado se sub-string, pois é uma parte da string original)

    [Lembrando que a string original é: "TAP Air Portugal"]
    (Começa com 0, assim como arrays, e o número 4 se refere
    ao começo da puxada da string. )
*/
console.log(airline.slice(4, 7));
/* Console:
        Air    

        (Começa no 4 e termina no 7)
*/
console.log("");
//-----------------------------------------------------

/* Às vezes, não sabemos nada sobre a string que recebemos,
então vamos tentar extrair a primeira palavra da string sem saber
nenhum índice da mesma.
- Agora é onde os métodos indexOf() | lastiIndexOf()
realmente importam! */

// Descobrir a PRIMEIRA PALAVRA <==================
// - Para isso, chamaremos a primeira letra (índice 0) e como
// última letra usaremos o ESPAÇO (' '):
console.log(airline.slice(0, airline.indexOf(' ')));
/* Console:
        TAP
*/
// Descobrir a ÚLTIMA PALAVRA <==================
// - Para isso, começamos com o ÚLTIMO ESPAÇO como primeiro índice
// e como último índice deixaremos sem nada:
console.log(airline.slice(airline.lastIndexOf(' ')));
/* Console:
         Portugal
    [Porém, note que há um espaço ' ' no começo da palavra,
    para resolver isso acrescentaremos +1]
*/
console.log(airline.slice(airline.lastIndexOf(' ') + 1))
/* Console:
        Portugal
    [Pronto, agora tá show!]
*/

//-----------------------------------------------------

/*         Os fundamentos foram estes acima          */
//      Porém, há outras possibilidades:

// Podemos usar argumentos NEGATIVOS
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
/* Console:
    al
    AP Air Portuga
*/
console.log("");
//-----------------------------------------------------
/*  Bora treinar:
    Escreva uma função que checará se a poltrona escolhida
    fica no meio ou não.
*/
const checkMiddleSeat = function(seat){
    if(seat.slice(-1) === 'b' || seat.slice(-1) === 'e'){
        console.log('Sua poltrona não fica no meio 😎😎');
    }else{
        console.log('Sua poltrona fica no meio 😢');
    }
}
checkMiddleSeat('11b');

/*                      ~//~                       */

//---------------------------------------------------
/*
    Sabemos que strings são tipos primitivos, mas por que
    eles tem métodos, assim como arrays?

    Sempre que chamamos um método em uma string, o JS converte
    esta string em um objeto com o mesmo conteúdo por trás
    das cenas. Em seguida, ele converte para string novamente.

    Este processo é chamado de 'Boxing', pois basicamente
    ele pega a string e a coloca em uma caixa, que é o objeto.

    Basicamente, o que acontece é isso: */
console.log(new String('Hugo'));
console.log(typeof new String('Hugo'));
/* Console:
    String {'Hugo'}
        0: "H"
        1: "u"
        2: "g"
        3: "o"
        length: 4
        [[Prototype]]: String
        object
*/
