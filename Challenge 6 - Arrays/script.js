/*
Coding Challenge 5 - Arrays

Steven is still building his tip calculator, using
the same rules as before: Tip 15% of the bill if the
bill value is between 50 and 300, and if the value is
different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill
value as an input and returns the corresponding tip,
calculated based on the rules above (you can check
out the code from first tip calculator challenge if
you need to). Use the function type you like the
most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array
'bills' containing the test data below.
3. Create an array 'tips' containing the tip value
for each bill, calculated from the function you
created before.
4. BONUS: Create an array 'total' containing the
total values, so the bill + tip.

TEST DATA: 125, 555 and 44.
*/
'use strict';
function calcTip(tip){
    if((tip >= 50) && (tip <= 300)){
        return tip * 0.15;
    }else{
        return tip * 0.20;
    }
}
// const testFunction = console.log(`Teste ${calcTip(100)}`);
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(`The first Steven's bill is R$ ${bills[0]}.`);
console.log(`The second Steven's bill is R$ ${bills[1]}.`);
console.log(`The thirty Steven's bill is R$ ${bills[2]}.`);
console.log('');
console.log(`The first tip is R$ ${tips[0]}.`);
console.log(`The second tip is R$ ${tips[1]}.`);
console.log(`The thirty tip is R$ ${tips[2]}.`);
console.log('');
const total = [bills[0] + tips [0], bills[1] + tips [1], bills [2] + tips[2]];
const allTotal = total[0] + total[1] + total[2];
console.log(`Steven spent the first day (bill + tip): R$ ${total[0]}.`);
console.log(`Steven spent the second day (bill + tip): R$ ${total[1]}.`);
console.log(`Steven spent the first day (bill + tip): R$ ${total[2]}.`);
console.log('');
console.log(`During all days, Steven spend R$ ${allTotal}.`);