/*
Métodos são funções adicionadas aos objetos a fim atingir diferentes funcionalidades

*/

'use strict';

const hugo = {
    firstName: 'Hugo',
    lastName: 'Batista',
    birthYear: '1994',
    job: 'student',
    friends: ['Michael', 'Leonardo', 'Pedro'],
    hasDriversLicense: true, 
    /*calcAge: function (birthYear) {     // Esta forma (uma expressão) é um pouco 
        return 2021 - birthYear;        diferente de uma função fora de um objeto;
    },*/
    /*function calcAge(birthYear) {     // Esta forma, usada para fora, não funciona dentro de um objeto;
        return 2021 - birthYear;
    }*/
    /*calcAge: function (birthYear) {
        return 2021 - birthYear;        // Forma sem o this, explicado abaixo, que coloca o método igual ao mesmo do objeto;
    }*/
    calcAge: function() {
        return 2021 - this.birthYear;
    },
    driversLicense: function() {
        if(this.hasDriversLicense === true){
            return "has a driver's license"
        }else{
            return "haven't a driver's license";
        }
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.driversLicense()}.`;
    }
};
//console.log(hugo.calcAge(1991));  // Podemos usar dot;
//console.log(hugo['calcAge'](1991)); // Também podemos usar o bracket
// Chamar um objeto da forma acima é incorreta, pois já utilizamos o 1991 dentro do objeto, pois alguma informação pode ser errada / repetir é errado;
// Para isso, podemos usar a variável 'this';

//console.log(hugo.calcAge());
// Variação um pouco mais aprofundada (digamos que precisamos repetir várias vezes o chamado);

// A cada vez que fizer o chamado, o computador precisará calcular novamente, aumentando o tempo de resposta;
// Para resolver isso, podemos usar:
/*
    Dentro do objeto, basta mudar para:
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
    // Assim, o cálculo ficará guardado dentro do objeto e nao será necessário calcular todas as vezes que for chamado
    console.log(jonas.age); -> chamando, pra fora do objeto, apenas o item que você quiser;
*/


/* ///////////////////////////////
    //////////////////////////////// Challenge
    
    I want to write a method called 'getSummary', and this method should return a string which can summarize
    the Data about Hugo. The result have to be: "Hugo is a 26-year old student, and he has a/no driver's license".
*/

console.log(hugo.getSummary());