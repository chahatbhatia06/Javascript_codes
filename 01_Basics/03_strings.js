const firstName = "Chahat";
const rollNumber = 06;

console.log(`My name is ${firstName} and my roll no is ${rollNumber}`)

const gameName = new String('i-am-learning-javascript')
console.log(gameName.charAt((4)));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Chahat Bhatia    "
console.log(newStringOne.charAt(4));
console.log(newStringOne.trim());

const url = "https://google.com/facebook%20com"

console.log(url.replace('%20', '-'))//(replace replaced)

console.log(url.includes('facebook')) //false