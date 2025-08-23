const user = {
    username: "dhananjay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to webside`);
        console.log(this);
    }

}

// user.welcomeMessage
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//    let username = "dhananjay"
//    console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "dhananjay"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "dhananjay"
//     console.log(this);
// }

// chai()

// basic arroy function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implesite return
// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => ({username: "dhananjay"})

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()