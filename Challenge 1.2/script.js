
// Renato, Pedro, Flávio and Jean are comparing their BMI
// BMI is calculated using: mass / height ** 2 = mass / height * height
//------------
// Renato weight 60kg 1.75m height
// Pedro weight 98kg 1.95m height
//------------
// Flávio weight 85kg 1.80m height
// Jean weight 90kg 1.70m height
//------------
// 18.5 = magro
// 18.5 a 24.9 = normal
// 24.9 a 30 = sobrepeso
// > 30 = obeso

'use strict';

const renatoWeight = 58;
const renatoHeight = 1.75;

const pedroWeight = 98;
const pedroHeight = 1.95;

const flavioWeight = 85;
const flavioHeight = 1.80;

const jeanWeight = 90;
const jeanHeight = 1.70;

function calcBMI(mass, height, name){
    const bmi = mass / height ** 2;
    if(bmi <= 18.5){
        return `${name} possui o IMC de ${bmi} kg/m2 e está abaixo de seu peso ideal.`
    } else if((bmi > 18.5) && (bmi <= 24.9)){
        return `${name} possui o IMC de ${bmi} kg/m2 e está no seu peso ideal.`
    } else if((bmi > 24.9) && (bmi <= 30)){
        return `${name} possui o IMC de ${bmi} kg/m2 e está acima de seu peso ideal.`
    } else{
        return `${name} possui o IMC de ${bmi} kg/m2 e está muito acima de seu peso ideal.`
    }
}

// Renato
const renatoBMI = calcBMI(renatoWeight, renatoHeight, 'Renato');
console.log(renatoBMI);

// Pedro
const pedroBMI = calcBMI(pedroWeight, pedroHeight, 'Pedro');
console.log(pedroBMI);

// Flávio
const flavioBMI = calcBMI(flavioWeight, flavioHeight, 'Flávio');
console.log(flavioBMI);

// Jean
const jeanBMI = calcBMI(jeanWeight, jeanHeight, 'Jean');
console.log(jeanBMI);