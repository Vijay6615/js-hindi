
const name = "Vijay "
const repoCount = 01
console.log(name + repoCount);  // this is old type
console.log(`hello my name is ${name} my repo count is ${repoCount}`);  // use this type

const gameName = "free fire"
console.log(gameName.length);
console.log(gameName.toUpperCase());    //  original value not changes
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = "   vijay   "
console.log(newString);         //  this keeps as is it
console.log(newString.trim())   //  this removes extraspaces

const url = "https://vijay.com/vijay%20shukla"
console.log(url.replace('%20', '-'));            //  replaces value
console.log(url.includes('vijay'));             //  to find the letter or word

console.log(gameName.split('-'));       // converts strings to Array