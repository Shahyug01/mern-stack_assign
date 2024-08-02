//[1.]● Task: Write a function that returns a closure which adds a specific number to its argument.

function add_num(baseValue) {
  return function (extraValue) {
    return baseValue + extraValue;
  };
}

const add = add_num(5);
console.log(add(10)); //call the function

//[2.]
// Task: Create a function using closure to keep track of how many times it has been called.

function trackCalls() {
  let count = 0;

  return function () {
    count++;
    console.log("Function called " + count + " time");
  };
}

const track = trackCalls();
track(); // Output: Function called 1 time
track(); // Output: Function called 2 time

//[3.]Task: Implement a prototype method to calculate the area of a rectangle object.

function Rectangle(w, h) {
  this.w = w; // Set width
  this.h = h; // Set height
}

Rectangle.prototype.area = function () {
  return this.w * this.h; // Calculate and return area
};

// Example usage
const rect = new Rectangle(5, 10); // New Rectangle object
console.log(rect.area()); // Output: 50

//[4.]Task: Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.

function Circle(r) {
  this.r = r; // Set radius
}

Circle.prototype.perimeter = function () {
  console.log("Perimeter: " + 2 * 3.14 * this.r); // Print perimeter
  };

Circle.prototype.area = function () {
  console.log("Area: " + 3.14 * this.r * this.r); // Print area
};

// Usage
let myCircle = new Circle(5); // Create Circle object
myCircle.perimeter(); // Output perimeter
myCircle.area(); // Output area

//[5.]Task
//Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. Each function should be able to modify or access the private counter, demonstrating a more complex use of closures.

function createc() {
  let c = 0;
  function getValue() {
    return c;
  }
  function increment() {
    c++;
    console.log(c);
  }
  function decrement() {
    c--;
    console.log(c);
  }
  function reset() {
    c = 0;
    console.log(c);
  }

  return {
    increment,
    decrement,
    reset,
  };
}
const c = createc();
c.increment(); // Output: 1
c.increment(); // Output: 2
c.decrement(); // Output: 1
c.reset(); // Output: 0
