let a = 300 
const b = 20 
// var c = 30        // global scope 

if (true) {      // block scope
    let a = 10 
    const b = 20
    // console.log("INNER: ", a);
          
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Dhananjay"
    
    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    
    two()

}

one()

if (true) {
    const username = "dhananjay"
    if (username === "dhananjay") {
        const website = " youtube" 
        // console.log(username + website);    
    }
    //console.log(webside);    
}

// console.log(username);


// ++++++++++++++++++ instresting ++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

