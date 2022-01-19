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

console.log(!!""); // false
console.log(!!"hi"); // true
