// const score = 400
// console.log(score);

// const balance = new Number(400)     //  this specially says that there is a number only
// console.log(balance);   //  [Number: 400]
// console.log(balance.toString());    // number to string (typeof)
// console.log(typeof balance.toString());     // object to string converts
// console.log(balance.toFixed(1));            //it increases point(.) decimal values as per the number (1)

// const otherNumber = 123.546             
// console.log(otherNumber.toPrecision(3)) // 124

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

//------------------------    MATHS   -----------------------------

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9));   
console.log(Math.max(5, 3, 7, 1, 8));
console.log(Math.min(5, 3, 7, 1, 8));

console.log(Math.random());             //  0 /1                            most use
console.log((Math.random()* 10) +1)         // more then 1 values to get

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)         // this will give me values moer then 10




