// Any string that is empty, undefined or 0 is falsy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Hugo'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job!');
}

let height;
if (height){
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}
let height2 = 123;
if (height2){
    console.log('YAY! Height is DEFINED');
} else {
    console.log('Height is UNDEFINED');
}
