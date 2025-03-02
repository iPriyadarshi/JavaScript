let num_in_str = "33"
console.log(typeof (num_in_str));     // string
let valueInNumber = Number(num_in_str)
console.log(typeof valueInNumber)   //number
console.log(valueInNumber)      // 33
// "33" => 33

let num_str_in_str = "33abc"
console.log(typeof (num_str_in_str));    // string
let valueInNumber2 = Number(num_str_in_str)
console.log(typeof valueInNumber2)   // number
console.log(valueInNumber2)     // NaN
// "33abc" => NaN

let str_in_str = "abcde"
console.log(typeof (str_in_str));    // string
let valueInNumber3 = Number(str_in_str)
console.log(typeof valueInNumber3)   // number
console.log(valueInNumber3)     // NaN
// "abcde" => NaN

let null_as_val = null
console.log(typeof (null_as_val));    // object
let valueInNumber4 = Number(null_as_val)
console.log(typeof valueInNumber4)   // number
console.log(valueInNumber4)     // 0
// null => 0

let undefined_as_val = undefined
console.log(typeof (undefined_as_val));    // undefined
let valueInNumber5 = Number(undefined_as_val)
console.log(typeof valueInNumber5)   // number
console.log(valueInNumber5)     // NaN
// undefined => NaN

let boolean_as_val = true
console.log(typeof (boolean_as_val));    // boolean
let valueInNumber6 = Number(boolean_as_val)
console.log(typeof valueInNumber6)   // number
console.log(valueInNumber6)     // 1
// true => 1  // false => 0


let isLoggedIn = 1
console.log(typeof isLoggedIn)  // number
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)   // boolean
console.log(booleanIsLoggedIn)  // true
// 1 => true // 0 => false

let isLoggedIn2 = ""    // empty string
console.log(typeof isLoggedIn2)  // string
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(typeof booleanIsLoggedIn2)   // boolean
console.log(booleanIsLoggedIn2)  // false
// "" => false

let isLoggedIn3 = "0"  // non-empty string
console.log(typeof isLoggedIn3)  // string
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(typeof booleanIsLoggedIn3)   // boolean
console.log(booleanIsLoggedIn3)  // true
// "0" => true  // "radhe" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)       // 33
console.log(typeof stringNumber)    // string