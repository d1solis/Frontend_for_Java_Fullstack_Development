// Initialize and declare a function called divide with parameters numerator and denominator
function divide(numerator, denominator){
    if(denominator === 0){
        throw new Error("ERROR: Division by zero");
    }

    return numerator / denominator;
}

try{
    const result = divide(10, 0);
    console.log(result);
    // If the parameters were divisible, we would expect an actual number as a result
}catch(error){
    console.log(error.message);
    // Expected output: ERROR: Division by zero
}

