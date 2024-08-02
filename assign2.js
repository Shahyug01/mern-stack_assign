// Question 1: Multiplication Table Generator

let num = 3; // take the number for which we want to generate the multiplication table
let result; // Variable to store the result of each multiplication
for (let i = 1; i <= 10; i++) // Outer loop to iterate from 1 to 10 (i)
{
    // Inner loop to iterate from 1 to 10 (j)
    for (let j = 1; j <= 10; j++)// Inner loop to iterate from 1 to 10 for the second factor (j)
     {
        result = num * i; // Calculate the result of num multiplication
    }

    // Display the multiplication table console
    console.log(`${num} * ${i} = ${result}`);
}


// Question 2: Sum of Numbers in an Array
let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];// Define an array of numbers
let sumOfArray = 0;// Create a variable for the sumOfArray and initialize it to 0
for (let i of numbers) { // Add each element of the array to the sumOfArray variable
sumOfArray += i;
}
console.log(`The sum of the numbers in the array is: ${sumOfArray}`);//print sumOfArray


// Question 3: Palindrome Checker

let str = "LEVEL";//define a string
let rev = "";//taking a variable to reverse the string 
for(let i=str.length-1;i>=0;i--) 
{rev += str[i];
}
if(str===rev)//chceck if the revered string is eual to the string
{
console.log("The string is a palindrome.");
}else{ 
console.log("The string is not a palindrome.");
}

// Question 4: 
const number = 100; // Define the limit for Fibonacci series
let a = 0; // Initialize the first Fibonacci num
let b = 1; // Initialize the second Fibonacci num
let fn = a + b; // Initialize the next Fibonacci num
let fibonacci = [a, b]; // Initialize an array to store Fibonacci numbers

// Loop to generate Fibonacci numbers until fn reaches the limit
while (fn < number) {
  // Add next Fibonacci number to the fibonacci array
  fibonacci.push(fn);
  // Update a and b to generate the next Fibonacci number
  a = b; // Update a to the current b
  b = fn; // Update b to the current fn
  fn = a + b; // Calculate the next Fibonacci number
}

// Print the array containing Fibonacci numbers up to 'number'
console.log("Fibonacci numbers up to", number, ":", fibonacci);



// Question 5: Block Scope with Let and Const

function Scopes() {
  // Here we are using function scopes
  if (true) {
    var Var1 = "I am a var variable"; // Function-scoped, can be accessed anywhere in Scopes
    let Variable2 = "I am a let variable"; // Block-scoped, can only be accessed within this block
    const Var3 = "I am a const variable"; // Block-scoped, can only be accessed within this block
  }
  console.log(Var1); // This will work because Var1 is function-scoped
  // console.log(Variable2); // This will show an error because Variable2 is block-scoped
  // console.log(Var3); // This will show an error because Var3 is block-scoped
}

Scopes(); // Calling the function
