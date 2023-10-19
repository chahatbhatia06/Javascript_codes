// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Chahat",
    "full name": "Chahat Bhatia",
    [mySym]: "mykey1",     // represent symbols in bracket
    age: 18,
    location: "Jaipur",
    email: "Chahat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) // we cant use dot notation for some cases hence we use bracket notation
// console.log(JsUser[mySym])

JsUser.email = "chahat@chatgpt.com"
// Object.freeze(JsUser)   //freezes the content
JsUser.email = "chahat@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this keyword is used to refer the same object
}

//console.log(JsUser.greeting());
//console.log(JsUser.greetingTwo());

// objects as literals and constructor

// const tinderUser = new Object() // singleton object
const tinderUser = {}

tinderUser.id = "user_123"
tinderUser.name = "chahat"
tinderUser.loggedIn = true

//console.log(tinderUser);


//nested objects
const regularUser = {
    email: "chahat@google.com",
    fullname: {
        userfullname: {
            firstname: "chahat",
            lastname: "bhatia"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname) //accessing nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 =(obj1,obj2)

//const obj3 =Object.assign({},obj1,obj2) //one way to merge objects using assign

const obj3 ={...obj1,...obj2} // using spread operator
console.log(obj3);

// database values recieved in array objects
const users = [
{
    id : 1,
    email :"abc@gmail.com"
},

{
    id : 2,
    email : "abc@gmail.com"
},

] 

const access = users[1].email; // to access the objects 
console.log(access);

console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));

 //Destructuring objects and arrays

 const student = {
    Firstname: "chahat",
    rollNo: "06",
    subject: "javascript"
 }

 const {Firstname: YourName} = student  //curly braces inside the statement is used for destructuring
 console.log(YourName);
