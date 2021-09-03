// Coding Challenge

/*
Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the
calculations. Remember: BMI = mass / height ** 2 =
mass / (height * height). (Mass in kg and height in
meter).

1. For each of them, create an object with properties
for their full name, mass, and height (Mark Miller
and John Smith).
2. Create a calcBMI' method on each object to
calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it
from the method.
3. Log to the console who has the higher BMI, 
together with the full name and the respective BMI.
Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

TEST DATA: 
    Marks weights 78 kg and is 1.69 m tall.
    Johns weights 92 kg and is 1.95 m tall.
*/
'use strict';

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,    
    calcBMI: function(){
        return this.mass / this.height ** 2
    }  
};

const john = {
    fullName: 'John Jones',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.mass / this.height ** 2
    }
};

const higherBMI = function() {
    if(mark.calcBMI() > john.calcBMI()){
        return `${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName} (${john.calcBMI()})!`
    }else{
        return `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName} (${mark.calcBMI()})!`
    }
}
console.log(higherBMI());
