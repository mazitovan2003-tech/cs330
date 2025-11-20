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
