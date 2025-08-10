//const viUser = new Object()   // singleton obj
const viUser = {}               // non-singleton obj
viUser.id = '12345'
viUser.name ='Vijay'
viUser.loggedIn = false


//console.log(viUser)

const regularUser = {
    email:'vijay@gmail.com',
    fullName:{
        userfullName:{
            firstname:'vijay',
            lastname:'shukla'
        }
    }
}
// console.log(regularUser.fullName.userfullName.firstname)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

//const obj4 = Object.assign({}, obj1, obj2, obj3)    // [ Target , Source ]
const obj4 = {...obj1,...obj2,...obj3}                // easy and new most use 
//console.log(obj4);

console.log(Object.keys(viUser));
console.log(Object.values(viUser));
console.log(Object.entries(viUser));
console.log(viUser.hasOwnProperty('loggedIn'));