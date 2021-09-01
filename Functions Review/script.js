'use strict';

const calcAge = function(birthYear) {
    return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return 0;
    }
}

console.log(yearsUntilRetirement(1994, 'Hugo'));
console.log(yearsUntilRetirement(1945, 'Eloy'));

//Review
    /*Three different ways of writing, but they all work in a similar way: receive 'input' data, 'transform' data
    and then 'output' data.*/

/*  Function declaration:
        - function that can be used before it's declared.*/
function calcAge2(birthYear2){
    return 2021 - birthYear2;
};

/*  Function expression
        - essentially a function value stored in a variable.*/
function calcAge3(birthYear2){
    return 2021 - birthYear2;
};

/*  Arrow function
        - great for a quick one-line functions. Has no this keyword (more later...) */