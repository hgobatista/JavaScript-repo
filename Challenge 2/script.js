const markWeight = 78;
const markHeight = 1.69;
const markBmi = markWeight / markHeight ** 2;

const johnWeight = 92;
const johnHeight = 1.95;
const johnBmi = johnWeight / johnHeight ** 2;

if(markBmi > johnBmi){
    console.log(`Mark's BMI ${markBmi} is higher than John's BMI ${johnBmi}! `)
} else {
    console.log(`John's BMI ${johnBmi} is higher than Mark's BMI ${markBmi}! `)
};