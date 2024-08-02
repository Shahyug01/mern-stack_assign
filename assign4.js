// Question 1
// Task: Write a function that takes an object and returns an array of the object's keys and values.
let obj1 = { name: "YUG", age: 17, gender: "male" }; // Define an object
function value(obj) {
  // Define a function that converts an object's properties into an array of key-value pairs
  let arr = []; // Initialize an empty array to store the key-value pairs
  for (let i in obj1) {
    // Iterate over each property in the object
    arr.push([i, obj1[i]]); // Push an array containing the key and its corresponding value to the array
  }
  return arr; // Return the array of key-value pairs
}

console.log(value(obj1)); //call the function

// Question 2
// ● Task: Create a function to convert a string to title case without converting it into array
let string = "yug shah"; // Define a string
function string_Capitalize(string) {
  // Define a function that capitalizes the first letter of each word in a string
  string = string.split(" "); // Split the string into an array of words
  for (
    let i = 0;
    i < string.length;
    i++ // Iterate over each letter in the array
  ) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1); // Capitalize the first letter of each letter and concatenate it with the rest of the letter
  }
  return string; // Return the array of words
}

console.log(string_Capitalize(string)); //calling the function

// Question 3
// ● Task: Implement a function that checks if an object is empty.

let obj2 = { name: "YUG", age: 17, gender: "male" }; // Define an object with properties name, age, and gender

function isEmpty(obj1) {
  // Define a function to check if an object is empty
  for (let i in obj1) {
    // Iterate over each property in the object
    return false; // If a property is found, return false (object is not empty)
  }
  return true; // If a property is not found i.e object is empty
}
console.log(isEmpty(obj1)); //calling function

// Question 4
// ● Task: Write a function to count the number of occurrences of each character in a string.
//  console.log(charCount("hello"));

let str2 = "yug shah"; // Define a string

function charCount(str2) {
  // Define a function to count the number of occurrences of each character in a string
  let obj1 = {}; //initialize a object
  for (
    let i = 0;
    i < str2.length;
    i++ // Iterate over each character in the string
  ) {
    if (obj1[str2[i]]) {
      // Check if the character is already a key in the object
      obj1[str2[i]]++; // If the character is already a key, increment its value by 1
    } else {
      obj1[str2[i]] = 1; // If the character is not a key, add it to the object with a value of 1
    }
  }
  return obj1; //return the object
}
console.log(charCount(str2)); //calling the function 
