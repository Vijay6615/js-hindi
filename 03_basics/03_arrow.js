const user = {
    username: 'vijay',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = 'ajay'
// user.welcomeMessage()

//console.log(this);          // this gives empty obj 


// const addTwo = (number1 , number2) => {
//     return number1 + number2                        // basic arrow function or in curly brackey we need to write return function
// }

// const addTwo = (number1 , number2) => number1 + number2     // implesit arrow function     

const addTwo = (number1 , number2) => (number1 + number2 )         // more and more use in react or no need to write return function

const addATwo = (number1 , number2) =>( {username: "Vijay"}  )       // for objects required paranthesis

console.log(addTwo(2,8))
console.log(addATwo())          // [Function: addATwo]
console.log(addATwo)            // { username: 'Vijay' }