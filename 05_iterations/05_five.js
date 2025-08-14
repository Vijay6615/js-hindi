//const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const newNum = myNumber
                    // .map( (num) => num * 10 )
                    // .map( (num) => num + 1 )
                    // .filter( (num) => num >=50)
//console.log(newNum);

// const myNum = [1,2,3]
// const total = myNum.reduce( (acc, curr) => acc+curr, 0) 
// console.log(total);


const shoppingCart = [
    {
        courseName: 'javascript',
        price: 999
    },
    {
        courseName: 'html',
        price: 500,
    },
    {    
        courseName: 'python',
        price: 1200,
    },
]
const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(total);
