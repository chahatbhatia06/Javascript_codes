//A JavaScript variable is simply a name of storage location. There are two types of variables in JavaScript : local variable and global variable.

// we use var ,let , const where var is globally scoped and let and var are blocked scoped.

/* IMPORTANT NOTES

typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true

*/

//There are 7 types of datatype in javascript

//1.Number
let uniqueID = 23;
console.log(uniqueID);
console.log(typeof uniqueID)

//2.String
let firstName = "Chahat";
console.log(firstName);
console.log(typeof firstName)

//3.Boolean
let canDrive = true;
console.log(canDrive);
console.log(typeof canDrive)

//4.BigInt
const previouslyMaxSafeInteger = 9007199254740991n;
console.log(previouslyMaxSafeInteger);
console.log(typeof previouslyMaxSafeInteger)

//5.Null
let a = null;
console.log(a);
console.log(typeof a)

//6.Null
let b;
console.log(b);
console.log(typeof b);

//7.Symbol
let value = Symbol('hello');
console.log(value);
console.log(typeof value);
