//  singleton
    // Object.create
//  objects literals
const mySym = Symbol('key1')

const JsUser = {
    name: "Vijay",
    age: 19,
    [mySym]: "mykey1",
    location: "mumbai",
    email: "vijayshukla@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

console.log(JsUser.name)
console.log(JsUser["email"])
console.log(JsUser[mySym])    // if add doublequotes [""] output will be undefined

//Object.freezr(JsUser)       //  it will freeze the objects

JsUser.greeting = function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(JsUser.greeting())

JsUser.greetingtwo = function(){
    console.log("Hello vijay")
}
console.log(JsUser.greetingtwo())