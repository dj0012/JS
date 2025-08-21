const name = "dj"
const repoCount = 4

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('dhananjay-ha')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   dhananjay    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dhananjay.com/dhananjay%22singh"

console.log(url.replace('%22', '-'))

console.log(url.includes('dhananjay'))

console.log(gameName.split('-'));
