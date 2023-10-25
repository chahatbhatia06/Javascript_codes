 //Example 1 showing how functions works using parameters and return

function addNumbers(num1,num2){ //these are parameters which are used in the function
    return num1+num2;
}
const result = addNumbers(4,5)  // whereas these are arguments used to call the function 
 //console.log("Result: ", result);

//Example 2 function shows how string interpolation are used
 function greetMsg(username){
    return `Welcome ${username}!`
 }

 //console.log(greetMsg("Chahat"))

 function calculateCartPrice( ...num1){ // ..operator here signifies that a rest operator is being used(rest and spread looks the same)
    return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))