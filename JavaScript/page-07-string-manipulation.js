// Common Techniques for manipulating strings in JavaScript

// Concatenation: Using the + operator or concat() method
let str1 = 'Hello';
let str2 = 'World';

let result1 = str1 + " " + str2;
console.log(result1);
// Expected output: Hello World

let result2 = str1.concat(" ", str2);
console.log(result2);
// Expected output: Hello World

console.log("**************************");

// Substring: Using the slice() method or substring() method
let str3 = "Hi, Universe!"

let result3 = str3.slice(4, 12);    // Between index 4 and 12
console.log(result3);
// Expected output: Universe

let result4 = str3.substring(4, 12);
console.log(result4);
// Expected output: Universe

/* string.substring(start, end)
start - Required. Start position. First character is at index 0.
end - Optional. End position (up to, but not including). If omitted: the rest of the string.
*/