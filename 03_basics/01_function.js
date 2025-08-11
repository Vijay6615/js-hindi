// function addTwoNumbers (number1, number2, number3){
//     console.log(number1 + number2 + number3)
// }

function addTwoNumbers (number1, number2, number3){

    // let result = number1 + number2 + number3     // method 1
    // return result
    return number1 + number2 + number3              // method 2 (easy)
}
const result = addTwoNumbers(10,10,10)
//console.log('result:', result);

function addCartValue(...num1){
    return num1
}
// console.log(addCartValue(100, 200, 300, 400, 500))

const user = {
    usernme: 'vijay',
    price: 199
}
function getUser(anyUser){
    console.log(`username is ${anyUser.usernme} and the price is ${anyUser.price}`)
}
console.log(user)       // { usernme: 'vijay', price: 199 }
getUser(user)           // username is vijay and the price is 199