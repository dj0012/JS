const user = {
    username: "dhananjay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = 
    
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("dhananjay", 12, true)  
const userTwo = new User("chaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);
