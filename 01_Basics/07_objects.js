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

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());