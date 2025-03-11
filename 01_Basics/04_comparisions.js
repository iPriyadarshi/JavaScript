console.log(2 > 1)      // true
console.log(2 >= 1)     // true
console.log(2 < 1)      // false
console.log(2 == 1)     // false
console.log(2 != 1)     // true

console.log("2" > 1);     // true
console.log("02" > 1);    // true

console.log(null > 0);        // false
console.log(null == 0);       // false
console.log(null >= 0);       // true 
// Reason: Equality check("==") and comparisons("<",">","<=",">=") work differently. Comparisons convert "null" to a number, treating it as 0.

console.log(undefined > 0);        // false
console.log(undefined == 0);       // false
console.log(undefined >= 0);       // false

console.log("2" == 2)         // true
console.log("2" === 2)        // false // Reason: === checks data type alse
