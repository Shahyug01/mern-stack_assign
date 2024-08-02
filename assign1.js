// Question 1: Data Types and Variables
// Problem: Write a program that defines and logs different data types
 
let name =  " yug shah"; // declare a variable with type string
console.log(typeof(name));// prints the name 
console.log(name);// gives the type of variable

let x = 10 ;// declares the variable of type number
console.log(typeof(x));// gives the type of variable
console.log(x)//  prints the number
let y = false// declares the variable of type boolean
console.log(typeof(y));//gives the type of variable
console.log(y)// gives output of boolean
let myArray = [1,2,3,4,5];// declares an aaray
console.log(typeof(myArray));//gives the type of variable
console.log(myArray)//prints the array
let iphone  ={
    iphoneXr: {  // creating object of iphone
        price: 75000,// declares the sub objects of iphonexr
        rating: 4.5//declares the sub objects of iphonexr
    },
    iphone12: {//creating object of iphone
        price: 100000,//declares the sub objects of iphone12
        rating: 4.5//declares the sub objects of iphone12
    },
    iphone13: {//creating object of iphone
        price: 120000,//declares the sub objects of iphone13
        rating: 4.5//declares the sub objects of iphone13
    },
    iphone14: {//creating object of iphone
        price: 135000,//declares the sub objects of iphone14
        rating: 4.3//declares the sub objects of iphone14
    }
} 
console.log(typeof(iphone.iphoneXr));  //gives the type of variable
console.log(iphone.iphoneXr)//print the object iphonexr using dot operation
console.log(iphone.iphone12)//print the object iphone12 using dot operation
console.log(iphone.iphone13)//print the object iphone13 using dot operation
console.log(iphone.iphone14)//print the object iphone14 using dot operation


// Question 2: Operators and Expressions
// Problem: Write a program that performs basic arithmetic operations. The program should:
// Prompt the user to enter two numbers.
// Perform addition, subtraction, multiplication, and division on the two numbers.
// Display the results of each operation.


// let a = parseInt(prompt("Enter the first number:"));// takes an  first input using the prompt method and the parseint will convert string to number variable i.e it take input in form of string
// let b = parseInt(prompt("Enter the second number:")); //// takes an first input using the prompt method and the parseint will convert string to number variable i.e it take input in form of string
// let add = a + b;// addition operation
// let sub = a - b;// subtraction operation
// let mul = a * b;// multiplication operation
// let div = a / b;// division operation
// console.log(`Addition of two numbers are : ${add}`);// print result
// console.log(`Subtraction of two numbers are: = ${sub}`);// print result
// console.log(`Multiplication of two numbers are := ${mul}`);// print result
// console.log(`Division of two numbers are : = ${div}`);// print result
//output
//Script snippet #2:7 Addition of two number`s are : 30
// Script snippet #2:8 Subtraction of two numbers are: = 10
// Script snippet #2:9 Multiplication of two numbers are := 200
// Script snippet #2:10 Division of two numbers are : = 2

// Question 3: Conditional Statements
// Problem: Create a program that checks if a number is positive, negative, or zero. The program should:
// Prompt the user to enter a number.
// Use a conditional statement to check if the number is positive, negative, or zero.
// Display an appropriate message based on the result.

// let num = parseInt(prompt("Enter a number:"));//takes an  num input using the prompt method and the parseint will convert string to number variable i.e it take input in form of string
// if (num > 0) {  // checks whether the number is greater than 0 or not if its greater than it will print positive
//     console.log("The number is positive.");
// } else if (num < 0) { // checks whether the number is lesser than 0 or not if its lesser than it will print negative
//    console.log("The number is negative.");
// } else if (num === 0) { // check whether the number is equal to 0 if its 0 it will print 0s
//    console.log("The number is zero.");
// } else {
//   console.log("The input is not a valid number.");
// }

// input:20 The number is positive.
// input:-11 The number is negative.
// input:0 The number is zero.


// Question 4: Control Flow Keywords
// Problem: Write a program that prints all even numbers from 1 to 20. The program should:
// Use a loop to iterate through the numbers from 1 to 20.
// Use a control flow keyword (e.g., continue) to skip odd numbers.
// Log each even number to the console

for (let i = 1; i <= 20; i++) {  // it is the declaration of the loo[p and declare variable i and the range and then increment operation
    
    if (i % 2 !== 0) { // it will chcek whether the number is dividible by 2 or not if its divisible by 2 it will go further
        continue; // it will leave the numbers which are not divisible by 2 and then continue the further loop
    } 
    
    console.log(i); // it will print the even numbers 
}


// Question 5: Combining Concepts
// Problem: Create a program that simulates a simple grading system. The program should:
// Prompt the user to enter a numeric grade (0-100).
// Use conditional statements to determine the letter grade based on the numeric grade:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: F
// Display the letter grade to the user.

// let marks = parseInt(prompt("Enter a numeric grade (0-100):")); // take a input of total marks
//     let lettermark; // to declare the grades ranging 

//     if (marks >= 90 && marks <= 100) {    //check themarks are greater than 90 or not if its greater it will print A grade and if its not fullfilled it will check next condition
//         lettermark = 'A';
//     } else if (marks >= 80 && marks < 90) {   // check the marks are greater than 80 and less than 90 if this condition is fullfilled it will print B if its not fullfilled it will check next condition
//         lettermark = 'B';
//     } else if (marks >= 70 && marks < 80) {   // check the marks are greater than 70 and less than 80 if condition is fullfilled it will print C grade if its not fullfilled it will check next condition
//         lettermark = 'C';
//     } else if (grade >= 60 && marks < 70) {   // check the marks are greater than 60 and less than 70 if this condition is fullfilled it will print D if its not fullfilled it will check next condition
//         lettermark = 'D';
//     } else {
//         lettermark = 'F'; // if any ofthe conditions are not fullfilled it will print this condition
//     }
//      console.log(`The letter grade is: ${lettermark}`); // it will print the grade