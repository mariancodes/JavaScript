// Operators

// 1. Mathematical operators
// Addition operator (+)
let num1 = 20;
let num2 = 10;
let sum = num1 + num2;
console.log(sum); // additional operator usage
let differenc = num1 - num2; // subtractionoperator usage
let product = num2 * num2; // multiplication operator usage
let quotient = num1 / num2; // division operator usage
let reminder = num1 % num2; // modulus operator usage

console.log(sum);
console.log(differenc);
console.log(product);
console.log(quotient);
console.log(reminder);

//Comparsion operator
console.log(num1 > num2); // Greater than operator usage
console.log(num1 < num2); //Less than operator usage
console.log(num1 >= num2); //Greater than or Equal operator usage
console.log(num1 <= num2); //Less than or Equal operator usage
console.log(num1 == num2); //Equal to operator or Loose Equal usage
console.log(num1 === num2); //Equal to Operator or Strict Equal usage

console.log("---------------");

let number = "9";
console.log(number == 9); // True - Loose equality check
console.log(number === 9); // False - strict equality check

// Logical operator
let email = "amkam@lenosol.com";
let password = "123456789";

// The Logical AND (&) Operator
console.log(email === "amadu@lenosol.com" && password === "123456789"); // False
console.log(email === "amkam@lenosol.com" && password === 123456789); // False
console.log(email === "amkam@lenosol.com" && password === "123456789"); //True

console.log("--------------")


// The Logical OR(|||) - Only return true when at least one condition is true when at least one conditon is true and false when all conrditions are false false
console.log(email === "amadu@lenosol.com" || password === "123456789") // true
console.log(email === "amkam@lenosol.com" || password === 123456789) // true
console.log(email === "amadu@lenosol.com" || password === "1234$5679") // false

console.log("-----------")



// The Logical Not (!)
    let abuAge = 34
    let marieAge = 24
    let fodayAge = "34"


    console.log(abuAge != marieAge) // true
    console.log(abuAge != fodayAge) //fa0lse
    console.log(abuAge !== fodayAge)//true
    