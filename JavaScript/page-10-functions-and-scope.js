/* Functions allow you to store a piece of code that does a single task inside a defined block,
and then call that code whenever you need it using a single short command -- rather than having
to type out the same code multiple times.
*/

// Declaring and initilizing a function
function addNumbers(num1, num2){
    let sum = num1 + num2;
    return sum;
}

console.log(addNumbers(5, 10));
// Expected output: 15

console.log("*********");

/* Scope is the set of rules that determines where variables and functions are 
accessible in your program. In JavaScript, there are two types: Global Scope and Local Scope.

Variables and functions declared outside of any function or block have GLOBAL SCOPE, meaning
they are accessible from anywhere in your program.

LOCAL SCOPE refers to the variables that are declared inside a function or block.
*/
let globalVariable = "I am a GLOBAL variable";

function printBothVariables(){
    let localVariable = "I am a LOCAL variable";

    console.log(globalVariable);
    console.log(localVariable);
}
printBothVariables();       // This is function invocation
console.log(globalVariable);
//console.log(localVariable);    // Not accessible since this is a LOCAL variable
                                // It does not abide to the local scope rules
                                // Hence, we are given an error

/* Expected output:
                    I am a GLOBAL variable
                    I am a LOCAL variable
                    I am a GLOBAL variable
                    *some error*
*/