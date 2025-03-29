const myName = "priyadarshi"
const repoCount = 10

// console.log(myName + repoCount + " Value");
console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String("iPriyadarshi-pk");

console.log(gameName[0]);   // i
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());    // doesn't change original string as string is primitive, so stored in stack
console.log(gameName.charAt(1)); // enter index
console.log(gameName.indexOf('r')); // enter character whose index you want to find

const newString = gameName.substring(0, 5) // last index is not included // if start is given neg index, it ignores it and start from 0
console.log(newString); // iPriy

const anotherString = gameName.slice(-13, 8) // neg indexing allowed, starts from -1
console.log(anotherString); // riyada

const newStringOne = "     abcde.n    "
console.log(newStringOne);
console.log(newStringOne.trim());   // removes starting and ending spaces

const url = "https://pk.com/pk%20priyadarshi"
console.log(url.replace("%20", "-"));       // doesn't change original url
console.log(url);       // https://pk.com/pk%20priyadarshi

console.log(url.includes("adarsh"));        // true

const anotherGameName = new String("priyadarshi-kumar-github");
console.log(anotherGameName.split("-"))     // [ 'priyadarshi', 'kumar', 'github' ]

// create a string in browser console using "new" and read about all string methods under Prototype section on internet(MDN docs)
// const gameName = new String("iPriyadarshi-pk");
