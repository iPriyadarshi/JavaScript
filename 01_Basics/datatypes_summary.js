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

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2 types of memory: Stack(Primitive), Heap(Non-Primitive)

// string -> stored in Stack
let myYTname = "abcdotcom"
let anotherName = myYTname // stores a copy of myYTname in anotherName
anotherName = "xyzdotcom"  // only copy is changed. original myYTname data not changed
console.log(myYTname);  // abcdotcom
console.log(anotherName);   // xyzdotcom

// object -> stored in Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne // doesn't store a copy. Both variable are reference to same object.
userTwo.email = "user@amazon.com" // changing userTwo also changes userOne as they are referring to same object.
console.log(userOne.email); // user@amazon.com
console.log(userTwo.email); // user@amazon.com
