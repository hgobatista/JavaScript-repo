// Mark and John are comparing their BMI
// BMI is calculated using: mass / height ** 2 = mass / height * height
//------------
// Mark weight 75kg 1.69m height
// John weight 92kg 1.95m height
//------------
// Mark weight 95kg 1.88m height
// John weight 85kg 1.76m height

const markWeight = 78;
const markHeight = 1.69;
const markBmi = markWeight / markHeight ** 2;
console.log('In the first DATA, Mark BMI is ' + markBmi);

const johnWeight = 92;
const johnHeight = 1.95;
const johnBmi = johnWeight / johnHeight ** 2;
console.log ('In the first Data, John BMI is ' + johnBmi);

const higherBmi = markBmi > johnBmi;
console.log ('In DATA 1, Mark has a higher BMI than John: ' + higherBmi);

// Second data

const markWeightTwo = 95;
const markHeightTwo = 1.88;
const markBmiTwo = markWeightTwo / markHeightTwo ** 2;
console.log('');
console.log('In the second DATA, Mark BMI is ' + markBmiTwo);

const johnWeightTwo = 85;
const johnHeightTwo = 1.76;
const johnBmiTwo = johnWeightTwo / johnHeightTwo ** 2;
console.log('In the second DATA, John BMI is ' + johnBmiTwo);

const higherBmiTwo = markBmiTwo > johnBmiTwo;
console.log('In DATA 2, Mark has a higher BMI than John: ' + higherBmiTwo);

