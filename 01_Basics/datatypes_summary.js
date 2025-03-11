// Primitive: call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol (ES6)(unique and immutable), BigInt (ES11)


// Reference (Non-Primitive)
const nums = [1, 2, 3, 4] //Array
console.log(typeof nums);       //object

let myObj = { name: "John", age: 30 }     // Object
console.log(typeof myObj);      //object

const myFunction = function add(x, y) { return x + y; }       // Function
console.log(typeof myFunction);     // function

// Date
// RegExp

// JavaScript is dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of variable before using it. You can assign different types of values to a variable during its lifetime.
let x = 10;
x = "hello";
x = true;

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp);        //object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);       // false

const bigNumber = 632565435645563254364531353n
console.log(typeof bigNumber);      // bigint
