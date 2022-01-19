console.log("Hello World");
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(null === undefined); // false
console.log(typeof function () {}); // function

/*
 *    if it's not a primitive, it's an object
 */
function x() {
  return null;
}

let x = {}; // define

x["foo"] = "bar"; // mutate

console.log(x); // { foo: 'bar' }

/*
 *    primitive wrapper objects
 */

var foo = Boolean(false);

var foo = String("foo");

/*
 *  Chapter 3: Control Flow TruthyFalsy
 */

var truthy;

if (truthy) {
  console.log("truthy");
} else if (truthy == null) {
  console.log("null");
} else {
  console.log("falsy");
}

// every it's an object it's truthy
console.log(true); // true
console.log(!!{}); // true
console.log(!![]); // true

// you need to watch off with strings and numbers
console.log(!!""); // false
console.log(!!"hi"); // true

console.log(!!0); // false

// !! you can use it to convert to boolean if you have doubts about the value

/*
 *  Operators
 */

// ! not operator
var x = !true; // false
var x = !!true; // true
var x = !!!true; // false
var x = !!!!true; // true

// && logical and operator
var x = true && false; // false
// || logical or operator
var x = true || false; // true

// two different equality operators
// abstract comparison operators, search equality only in the same type
var x = true == "true"; // true
// strict comparison operators, search equality both the type and the value
var x = "23" === 23; // false

/*
 *  Ternary operator
 */

var x = truthy ? 1 : 2;

/*
 * Switch statement
 */

var expression = "dog";

switch (expression) {
  case "cat":
    console.log("meow");
    break;
  case "dog":
    console.log("woof");
    break;
  default:
    console.log("unknown");
}

/*
 * Try / Catch
 */

try {
  throw new Error();
  console.log("works");
} catch (e) {
  console.log("Broke!");
} finally {
  console.log("always works");
}

/*
 *  Chapter 4: Variables
 */

// difference between let var and const

// excution context
var g = "global";

function app() {
  g2 = "global";
  var l = "local";
  console.log(g); // global
}

console.log(l); // undefined
console.log(g2); // global

app();

// Hoisting

// var

var x = "a";

function app() {
  if (true) {
    var x = "b";
  }

  var x = "b";
}

// var it keeps very hard to keep the scope of variables not recommended

if (true) {
  // block
  let x = 23;
  const y = 28;
}

// when it comes to variables it's better to use let and const

/*
 *  Chapter 5: Functions
 */

// a function is a piece of code that takes an input and returns an output

function hello(input) {
  const output = "hello " + input;
  return output;
}

console.log(hello("world"));

// arrow syntax, modern javascript

const hello = (input) => output;

// Anonymous vs. named

function someName() {
  // do something
}

const someNameFunction = () => {
  // do something
};

// javscript supports higher order functions

// we can provide a function as an argument to another function

function cool(fun) {
  fun();
}

cool(() => console.log("hello"));

// javascript event loop and callbacks
// often used anonymous functions as arguments to other functions you will call later after some asynchronous code has been executed

//you can define new functions inside other functions

function outer() {
  function inner() {
    // do something
  }
}

// closures

function outer() {
  const fish = "cod";
  let count = 0;
  function inner() {
    count++;
    return `${fish} ${count}`;
  }

  return inner;
}

// what makes this special is that the inner function has access to the variables of the outer function

const fun = outer();

console.log(fun()); // cod 1
console.log(fun()); // cod 2
console.log(fun()); // cod 3

// a closure its very similar to a class instance
// you can have a function that can contains a state and you have an inner function that can operate and change the state
// the same way a class instance have some properties and methods that can change that properties
// class keyword is just sintax sugar for functions and closures
class Outer {
  constructor(fish = "cod", count = 0) {}

  inner() {
    this.count++;
    return `${this.fish} ${this.count}`;
  }
}

const instance = new Outer();

inner(); // cod 1
