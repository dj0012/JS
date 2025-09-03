// let myName = " dhananjay "
// let mychannel = " abc "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is $(this.spiderman)`);
    }
}

Object.prototype.dhananjay = function(){
    console.log(`dhananjay is present in all objects`);
    
}

Array.prototype.heydhananjay = function (){
    console.log(`dhananjay says hello`);
    
}

// heroPower.dhananjay()
// myHeros.dhananjay()
// myHeros.heydhananjay()
// heroPower.heydhananjay()

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const Teachingsupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: Teachingsupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(Teachingsupport, Teacher )

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dhananjay".trueLength()
"iceTea".trueLength()