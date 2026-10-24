let university = "Limkokwing"
console.log(university);

let fullName = "Marian Kargbo"
let myFaculty = "DICT"
let gender = "Female"

console.log(fullName);
console.log(myFaculty);
console.log(gender);


// 1. string concatention
console.log ("**** PERSON INFORMATION ****");
console.log("University:" + university);
console.log("Person Name:" + fullName);
console.log("Gender:" + gender);
console.log("MyFaculty:" + myFaculty);

let fullNames = "My name is Marian Kargbo"
let myUniversity ="I am a student at Limkokwing University"
let myDepartment = "And I am in the DICT department"

console.log("**** MY INFORMATION");
console.log("Person name:" + fullNames);
console.log("University:" + myUniversity);
console.log("Department:" + myDepartment);



// string length
let personName = "Marian Kargbo"
console.log(personName.length)

// Getting a character from a string by its index
console.log(personName[3])
console.log(personName[7])
console.log(personName[10])
console.log(personName[11])
console.log(personName[1])



let str1 = "Marian Kargbo"
let str2 = "Aisha Kamara"
let str3 = "Rian Kay"
let str4 = "Aria Sesay"
let str5 = "Mria Ria Kanu"

let abvr1 = str1 [0] + str1 [7]
let abvr2 = str2 [0] + str2 [6]
let abvr3 = str3 [0] + str3 [5]
let abvr4 = str4 [0] + str4 [5]
let abvr5 = str5 [0] + str5 [5] + str5 [9]

// string method
let strVal = "Marian Kargbo"
console.log(strVal)

// Convert to uppercase
console.log(strVal.toUpperCase());
console.log(strVal.toLowerCase());

// string Formating
console.log("\t Marian Kargbo"); // \t is used to tab
console.log("\n Marian Kargbo"); // \n is used to break to new line

// Template Literal / String literal
let num1 = 20;
let num2 = 13;
let num3 = 24;
let average = (num1 + num2 + num3)/3;
console.log(average)
console.log(`The average of ${num1} + ${num2} + ${num3} = ${average}`);

// checking if a value exists in a string
let email = "MArian@lenosol.com"
console.log(email.includes("@"))

// method changing
console.log(email.toLocaleLowerCase().includes("marian"))
