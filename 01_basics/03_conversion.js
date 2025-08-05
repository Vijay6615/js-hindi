
let score = "33 abc"

console.log(typeof score); 
console.log(typeof (score)); // we can write in this way also

// to make string into number OR number into string then write this

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // this is for type of output
console.log(valueInNumber); //this is for the output

// what if i remove the (typeof) part and (add) in the line no(2) [33abcd] 

//output => number
//          NaN  (not a number)

// line no 2 (null)
// output => 0 zero
//----------------------------------------------------------------------------------------

let isLoggedIn = 0

let valueInBoolean = Boolean(isLoggedIn)

console.log(valueInBoolean);