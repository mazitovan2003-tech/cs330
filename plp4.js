// 1) multiply two numbers and return the result
function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("multiply expects two numbers");
  }
  return a * b;
}

// 2) recursive factorial (n!)
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError("factorial expects a non-negative integer");
  }
  if (n === 0 || n === 1) return 1;      // base cases
  return n * factorial(n - 1);           // recursive step
}

// 3) split a string into two strings and return both
//    Strategy: split at the first space if one exists; otherwise split in half.
function splitInTwo(str) {
  if (typeof str !== "string") {
    throw new TypeError("splitInTwo expects a string");
  }
  const firstSpace = str.indexOf(" ");
  if (firstSpace !== -1) {
    return { first: str.slice(0, firstSpace), second: str.slice(firstSpace + 1) };
  }
  const mid = Math.floor(str.length / 2);
  return { first: str.slice(0, mid), second: str.slice(mid) };
}

// 4) call the functions and save results in variables
const product = multiply(6, 7);                 // 42
const fact5 = factorial(5);                     // 120
const parts = splitInTwo("hello world");        // { first: "hello", second: "world" }
const partsNoSpace = splitInTwo("abcdef");      // { first: "abc", second: "def" }

// 5) pass-by-value vs pass-by-reference test
function mutateThings(x, obj) {
  // Try to change the primitive:
  x = x + 1;

  // Try to change a property of the object:
  obj.count = (obj.count ?? 0) + 1;

  // Try to reassign the parameter to a different object entirely:
  obj = { count: 999 }; // local rebinding only; caller won't see this

  return { xInside: x, objInside: obj };
}

// Experiment:
let prim = 10;
let box = { count: 0 };

const resultInside = mutateThings(prim, box);

// Observe after the call:
const primAfter = prim;          // still 10 (primitive not changed in caller)
const boxAfter = { ...box };     // { count: 1 } (its property was mutated)
const insideSnapshot = resultInside; // { xInside: 11, objInside: { count: 999 } }

// Quick printout to verify behavior (uncomment if running in Node)
// console.log({ product, fact5, parts, partsNoSpace });
// console.log({ primAfter, boxAfter, insideSnapshot });