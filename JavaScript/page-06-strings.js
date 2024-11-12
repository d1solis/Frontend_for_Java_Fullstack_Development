// All of these are types of strings

// Single and Double quotes are essentially the same
let str1 = "This is a string!";     // Double quotes

let str2 = 'This is ALSO a string!';    // Single quotes

// Back-ticks allows us to embed any expression into the string.
// It essentially has some extended functionality
let str3 = `This is a string AS WELL!`;     // Back-ticks

console.log(typeof str1, typeof str2, typeof str3);
// Expected output: string string string

console.log(`1 + 2 = ${1 + 2}`);    // You can embed an expression using ${}
// Expected output: 1 + 2 = 3

console.log(str2.length);       // You can find the length of a string using the .length property
// Expected output: 22

console.log(str2[0]);       // You can access individual characters in a string using  []
// Expected output: T

/* Strings in JavaScript are immutable! 
 This means that once a string is created, its contents cannot be directly changed
 */

