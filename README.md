# PLP 1: JavaScript Overview and Setup

## History

### What is the name of your language?
The programming language I selected is JavaScript, which is one of the most widely used languages in computer science and software development today.

### When/where was it created, and by whom? Was it written to address a particular problem or need?
JavaScript was created in 1995 by Brendan Eich while he was working at Netscape Communications Corporation. At the time, most websites were static; they displayed text and images but did not respond to user interactions in real-time. Netscape wanted a way to make its browser more interactive and competitive. To solve this, Eich designed JavaScript in just 10 days.

The problem JavaScript addressed was the need for a lightweight, interpreted scripting language that could run inside the browser and allow web pages to react dynamically. It was not designed to replace large-scale programming languages like Java or C++, but rather to complement them by focusing on client-side interactivity. For example, instead of requiring a full page reload when a user clicked a button, JavaScript could update the page instantly. Over time, its scope grew dramatically beyond this original purpose.

### What types of programming is your language primarily used for?
JavaScript started off as a web browser scripting language, but today it is a general-purpose, multi-paradigm language. It supports imperative, functional, and object-oriented styles of programming. Some of its major uses include:

- Web development (front-end): JavaScript runs natively in every modern browser, which makes it the standard for creating interactive websites. Frameworks like React, Angular, and Vue expand its capabilities.  
- Web development (back-end): With the introduction of Node.js in 2009, JavaScript could run on servers. This made it possible to write entire full-stack applications using just one language. Popular frameworks include Express.js and Next.js.  
- Mobile applications: Tools like React Native and Ionic allow developers to build mobile apps for iOS and Android using JavaScript.  
- Desktop applications: Electron, which powers apps like Slack, Discord, and Visual Studio Code, uses JavaScript and web technologies to create cross-platform desktop software.  
- Game development: JavaScript has libraries like Phaser.js that make it possible to build browser-based games.  
- Machine learning and data science: Although not as common as Python, JavaScript has libraries like TensorFlow.js that bring machine learning models into the browser.  

### Where will you get information about this language when it’s time to start programming in it?
- https://developer.mozilla.org/en-US/docs/Web/JavaScript  
- https://javascript.info/  
- https://www.w3schools.com/js/  
- https://www.codecademy.com/catalog/language/javascript  

---

## Getting Started

### What did you need to do to install the language?
One of the advantages of JavaScript is that it is built directly into every modern web browser, so technically, no installation is needed to start running JavaScript code. You can open your browser’s developer tools and immediately run JavaScript in the console.

### Does this language come with a recommended programming environment? What is it? If not, how did you pick the one that you’ll be using?
JavaScript itself does not come with an official environment, because you can run it in any text editor and execute it in a browser or Node.js. But the most widely recommended editor is Visual Studio Code (VS Code).

I chose VS Code because:

- It has good built-in support for JavaScript.  
- It integrates seamlessly with Git and GitHub.  
- It offers debugging tools, auto-completion, and error checking.  

Other environments like WebStorm or Atom could also work, but VS Code is free and the industry standard.

### How do you run programs in that language?
There are two main ways to run JavaScript:

#### In the browser:
Create an `.html` file and include JavaScript in a `<script>` tag. For example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Hello JavaScript</title>
</head>
<body>
    <script>
        alert("Hello, World!");
    </script>
</body>
</html>
// This is a single-line comment
/* This is a
   multi-line comment */
```

# PLP 2: Data Types and Naming Conventions (JavaScript)

## Naming Rules & Conventions

### Rules (required by the language)
- JavaScript identifiers are case sensitive. 'myVar' and 'myvar' are different.
- An identifier cannot start with a digit. It may start with a letter, $, or _. 
Subsequent characters may include digits and Unicode letters. 
- Reserved keywords (e.g., 'for', 'class', 'return', 'let') can't be used as identifiers.

### Community Conventions
- camelCase: variables and functions (myVariable, calculateTotal).
- PascalCase: class/constructor names (Person, ShoppingCart).
- UPPER_SNAKE_CASE: constants (style-dependent). 'snake_case' is less common, mostly in configs.
- Conventions are enforced by linters, not the runtime. 



## JavaScript Data Types

Primitive: string, number, bigint, boolean, undefined, symbol, null
Non-primitive: object (arrays, objects, functions, dates, etc.) 


## Typing

- Dynamically typed: type determined at runtime 
- Weakly typed: JS performs implicit coercion


## Mutability & Declarations

- let: block-scoped, reassignable  
- const: block-scoped, immutable binding (object/array values can still mutate)  
- var: function-scoped 


## Operators 

- Arithmetic: '+ - * / % ** ('+' can concatenate strings)
- Comparison: '==' (coercive), '===' (strict, no coercion) 
- BigInt cannot mix with Number without conversion


Assignment Example: "5" + 6

- "5" + 6 → `"56"` (string concatenation)  
- Use Number("5") + 6 for numeric addition


## Discussion Answers

1. Keywords/reserved words: Yes, many (if, else, class, return, let, etc.). 
2. Naming requirements: Start with letter/$/_; subsequent chars may include digits; can't use reserved words 
3. Naming conventions enforced? Community standards, enforced by linters 
4. Static or dynamic typing? Dynamic 
5. Strongly or weakly typed? Weak, due to coercion 
6. Mutability: const makes binding immutable; object/array values can still mutate 
7. Operators: Arithmetic, bitwise (Numbers/BigInt), concatenation (strings), property access/methods (objects/arrays)
8. Mixed type operations: Allowed with coercion; BigInt cannot mix with Number 
9. Binding time: var hoisted with undefined, let/const hoisted but uninitialized (TDZ) 
10. Explicitly typed? Implicitly typed; runtime values carry types

## Limitations & Pitfalls

- Floating-point precision issues (`0.1 + 0.2 !== 0.3`) 
- Implicit coercion surprises (==, +), prefers strict operators and explicit conversion 
- Common complex types: Objects, Arrays, Map, Set, TypedArray, Date, Promise 

## Sources 

https://developer.mozilla.org/en-US/docs/Glossary/Identifier
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Reserved_identifier
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar
https://developer.mozilla.org/en-US/docs/Glossary/Primitive
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators
https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion
https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures


# PLP 3: Selection, Loops, and Conditionals

## 1) Boolean values in JavaScript
The boolean literals are **true** and **false**.

In conditionals, non-boolean expressions are coerced into boolean using JavaScript’s
“truthy/falsy” rules.

**Falsy values include:**  
0, "", null, undefined, NaN, false.  
Everything else is truthy.

---

## 2) Types of conditional statements in JavaScript
- **if**, **else if**, **else**  
- **switch / case / default**  
- **Ternary operator:** `condition ? valueA : valueB`  

JavaScript does *not* have `elseif` or `unless`.

---

## 3) How code blocks are delimited
JavaScript uses **curly braces `{ }`** to group statements.

While single-line statements may omit `{}`, best practice is to always use braces.

---

## 4) Short-circuit evaluation
JavaScript supports short-circuiting:

- `&&` stops on the first **falsy** value  
- `||` stops on the first **truthy** value  
- `??` stops if the left operand is **not null or undefined**  
- Optional chaining `?.` stops if the left operand is nullish  

**Example of the dangling else problem:**

```js
if (x)
  if (y) doA();
  else doB();   // this else belongs to the inner if
// Clearer:
if (x) {
  if (y) { doA(); }
  else { doB(); }
}
```

## 6) switch details: break, continue, evaluating all conditions
In JavaScript switch, you typically use break to prevent fall-through; without a break, execution continues into the next case (fall-through), which can be intentional. A return also exits a function (no break needed).

You cannot “continue” through all cases to force evaluation; continue inside a switch (not inside a loop) is a syntax error. Inside a loop that contains a switch, continue applies to the loop, not the switch.  

## 7) Loop types (and how they differ)
- while (cond) { ... }: checks condition before each iteration.
- do { ... } while (cond): runs the body at least once, checks condition after.  
- for (init; cond; step) { ... }: classic counter loop.
- for...of: iterates values of an iterable (arrays, strings, Maps, Sets, etc.).  
- for...in: iterates enumerable property keys of an object (use with care and typically with hasOwnProperty).  


## 8) Are loop code-block variables treated differently than function code blocks?
Yes, by choice of declaration:
- var is function-scoped (or global if outside a function) and ignores block boundaries.
- let and const are block-scoped — including loop blocks — and create a new binding per iteration in for loops (useful for closures).  
- Practical effect: for (var i...) leaves i visible after the loop; for (let i...) does not.

# PLP 4: Functions in JavaScript

## 1) What is the syntax for declaring a function in JavaScript?

JavaScript supports **function declarations**, **function expressions**, and **arrow functions**.

```js
// function declaration (hoisted)
function add(a, b) { return a + b; }

// function expression (not hoisted as a callable)
const addExpr = function (a, b) { return a + b; };

// arrow function (expression form; concise syntax)
const addArrow = (a, b) => a + b;
```

Function declarations are **hoisted**, so you can call them earlier in the file.  
Function expressions and arrow functions **must be defined before use**.

### Placement rules
- In classic scripts: function declarations can appear anywhere and still be used earlier.
- In ES modules: declarations are hoisted, but proper `import/export` is required.

---

## 2) Are there rules about where the function has to be placed so it can run?

- Function declarations → **can be placed below their first use** (hoisted).  
- Function expressions & arrow functions → **must be defined before use**.  
- In modules → you must export/import correctly for visibility.

---

## 3) Does JavaScript support recursive functions?

Yes. Any function can call itself:

```js
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
```

*Note:* ES2015 defined proper tail calls, but most engines don’t implement them.

---

## 4) Can functions accept multiple parameters? Can they be different types?

Yes. JavaScript is dynamically typed.

Supports:
- **Default parameters:** `function f(x = 0) { ... }`
- **Rest parameters:** `function sum(...nums) { ... }`

Example:

```js
function mix(a, b, c = 0) {
  return [typeof a, typeof b, typeof c];
}
```

---

## 5) Can functions return multiple values?

JavaScript only returns **one value**, but that value can be an array or object.

```js
function coords() { return { x: 10, y: 20 }; }
const { x, y } = coords();

function pair() { return [10, 20]; }
const [first, second] = pair();
```

Returning objects is self-documenting.

---

## 6) Is JavaScript pass-by-reference or pass-by-value?

JavaScript is **pass-by-value**.

However, objects/arrays/functions are **references**, and the reference itself is passed by value.

Meaning:
- Reassigning a parameter does **not** affect caller.
- Mutating a property **does** affect caller.

Behavior shown by `mutateThings()`:
- Primitive stays unchanged.
- Object property changes persist.

---

## 7) Where are arguments, parameters, and locals stored?

Conceptually:
- Each function call creates a **stack frame** (execution context).
- Objects/arrays/functions live on the **heap**.
- Stack frames hold **references** to heap objects.

Mental model: **primitives → stack**, **objects → heap**.

---

## 8) What are JavaScript’s scoping rules?

- **Lexical scope**: variables resolved by where code is written.
- **var** → function-scoped  
- **let/const** → block-scoped  
- If an inner function uses an outer variable → **closure** preserves it.

Example:

```js
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
```

`count` persists.

---

## 9) Are side effects possible? Any guard rails?

Yes. JavaScript frequently has side effects.

Guard rails:
- `"use strict"` or ES modules stop unsafe patterns.
- `const` prevents rebinding.
- `Object.freeze()` prevents mutation.
- Functional style helps avoid side effects.

---

## 10) Where are local variable values stored (stack vs heap)?

- Primitives → stored directly in the stack frame.
- Objects/functions/arrays → stored on the heap.
- Closures can preserve variables beyond a single call.

---

## 11) Other important aspects

- **Hoisting:** declarations hoisted; expressions & arrows not callable early.
- **Spread & rest** help avoid mutation.
- **Async/await** essential for non-blocking I/O.
- **Modules** improve structure.
- **Error handling** with `throw` and `try/catch`.

---

## How the provided code satisfies the assignment

- `multiply(a, b)` → returns number.  
- `factorial(n)` → demonstrates recursion.  
- `splitInTwo(str)` → returns two values via object.  
- Variables store returned values.  
- `mutateThings(prim, box)` → demonstrates reference vs primitive behavior.

---

## Sources

1. MDN — Functions  
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
2. MDN — Objects, reference vs value  
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
3. MDN — Memory management  
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

# PLP 5: Classes and Inheritance 

## 1. Does JavaScript support objects or something similar?
Yes. JavaScript is an object-oriented language with a prototype-based model.  
Objects can be created using object literals (`{}`), constructor functions, or ES6 classes.  
Unlike class-based languages like Java or C++, JavaScript objects inherit from other objects via the prototype chain.

## 2. Naming conventions for objects, instance variables, and functions
- Constructor functions and classes use **PascalCase** (e.g., `Person`, `Student`).  
- Object properties and methods use **camelCase** (e.g., `firstName`, `getAge`).  
- Private fields (ES2022+) may use the `#` prefix, e.g. `#balance`.

These conventions are not enforced by the language but are standard in the community.

## 3. Standard methods similar to Java’s toString() or Python’s __str__
Yes.  
Every JavaScript object inherits `toString()` from `Object.prototype`, which can be overridden in classes.  
There are also optional conventions like:
- `valueOf()` for numeric coercion  
- Custom `toJSON()` used automatically by `JSON.stringify()`

## 4. How does inheritance work? Does JS support multiple inheritance?
JavaScript uses **single inheritance through the prototype chain**, implemented through:
- `extends` keyword in ES6 classes  
- `Object.create()` for manual prototype inheritance  

JavaScript does **not** support multiple inheritance of classes.  
However, it supports **mixins**, which allow composing behavior from multiple sources.

## 5. How does JavaScript resolve overloaded method names?
JavaScript does not support true method overloading (same name, different signatures).  
If you redefine a method in a subclass, it **overrides** the parent method.  
Resolution happens through the prototype chain:
- First look on the instance
- Then the class prototype
- Then the parent class prototype  
- Continue up the chain until `Object.prototype`

If not found, JS throws a TypeError when calling the method.

## 6. Other important details
- Methods inside classes use a hidden `[[HomeObject]]` binding so `super.method()` works.
- Arrow functions **cannot be used** as class methods when `this` is required, because they don’t bind `this`.
- Everything in JavaScript is an object except primitive values, but primitives temporarily “box” into objects when accessing methods (e.g., `"hi".toUpperCase()`).

## Sources
MDN Web Docs — Classes  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes  
MDN Web Docs — Inheritance and the Prototype Chain  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain  
MDN Web Docs — Object toString()  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString  

