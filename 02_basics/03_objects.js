// singleton
// Object.create

// object lierals

const mySym = Symbol("key1")


const JsUser = {
    name: "Dhananjay",
    "full nmae": "Dhananjay singh",
    [mySym]: "mykey1",
    age: 22,
    location: "Dhanbad",
    email: "dhananjay@google.com",
    isLoggedIn: false,
    lastLoginDys: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "dhananjay@chatgpyt.com"
// Object.freeze(JsUser)
JsUser.email = "dhananjay@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");    
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
