const myArr = [0, 1, 2, 3, 4, 5]
const colors = ["blue", "pink","green"]

const myArr2 = new Array(1, 2, 3, 4) // another way to introduce an array
// console.log(myArr[1]);

 //Array methods

 myArr.push(6)
 myArr.push(7)
 myArr.pop()

 myArr.unshift(9)
 myArr.shift()

 //console.log(myArr.includes(9));
 //console.log(myArr.indexOf(3));

 const newArr = myArr.join()  // join method converts the array in string and puts between the commas

 //console.log(myArr);
 //console.log( newArr);

 // slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
//console.log(myn1);

//console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)

//console.log("C ", myArr);
//console.log(myn2);

//IMPORTANT CONCEPTS

const places = ["new delhi" ,"mumbai" ,"gujrat","hyderabad"]
const countries =["amsterdam" ,"new york","australia","london"]

//concatination in arrays
//const combinePlaces = places.concat(countries)
//console.log(combinePlaces);

// spread operators
const combinePlaces = [...colors,...countries]
//console.log(combinePlaces);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("chahat"))
console.log(Array.from("chahat"))
console.log(Array.from({name: "chahat"})) // it wont be showing any output as it is an object which cant be refrenced

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));