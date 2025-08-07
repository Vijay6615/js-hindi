const myArr = [1, 2, 3, 4, 5]
//const myArr2 =[17, 19]
//console.log(myArr[1]);

//const newArr = new Array["Ajay","vijay","Abhay"]
// console.log(newArr[0])
// const newArr = new Array("Ajay","vijay","Abhay")
// console.log(newArr[1])

 //Array Methods
myArr.push(6)       // add values
//myArr.pop()         // removes last value
myArr.unshift(0)    // Add mentioned values at starting  
//myArr.shift()       // removes the first value it could be mentioned one also

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(4));
// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//  slice splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2)