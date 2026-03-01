//Factorial Of Number 
// !4=4*3*2*1=24

function factorial(num) {

    let fact = 1;
    for (let i = num; i > 1; i--) {
        fact *= i

    }


    return fact
}

console.log(factorial(2))


// edge cases


// function factorial(n) {
//   // check type
//   if (typeof n !== "number" || Number.isNaN(n)) {
//     throw new TypeError("Input must be a valid number");
//   }

//   // check integer
//   if (!Number.isInteger(n)) {
//     throw new RangeError("Factorial is only defined for integers");
//   }

//   //  negative check
//   if (n < 0) {
//     throw new RangeError("Factorial is not defined for negative numbers");
//   }

//   //  base cases
//   if (n === 0 || n === 1) return 1;

//   //  large number warning (optional but professional)
//   if (n > 170) {
//     throw new RangeError("Result exceeds JavaScript number limit");
//   }

//   //  iterative (better than recursion for interviews)
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5));    // 120
// console.log(factorial(0));    // 1
// console.log(factorial(1));    // 1

// Edge cases
// factorial(-3) → error
// factorial(2.5) → error
// factorial("5") → error
// factorial(200) → error