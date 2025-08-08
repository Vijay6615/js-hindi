
const marvelHeros = ["spiderman", "Thor", "Ironman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);   // [ 'spiderman', 'Thor', 'Ironman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros.length);   // 4

//const allHeros = [marvelHeros, dcHeros]         // [
                                                //   [ 'spiderman', 'Thor', 'Ironman' ],
                                                //   [ 'superman', 'flash', 'batman' ]
                                                // ]

const allHeros = [...marvelHeros, ...dcHeros]   // [ 'spiderman', 'Thor', 'Ironman', 'superman', 'flash', 'batman' ]
// console.log(allHeros);
// console.log(allHeros.length);       //  6


const newArr = [1, 2, 3, 4, [4, 5], 6, [6, 7, [8]]]
const combine_Arr = newArr.flat(Infinity)
//console.log(combine_Arr);


console.log(Array.isArray("Vijay"))
console.log(Array.from("Vijay"))
console.log(Array.from({name: "Vijay"}))        // interesting

score1 = 100
score2 = 200
score3 = 300
console.log(Array.of(score1, score2, score3));