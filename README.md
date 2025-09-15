PLP 1: JavaScript Overview and Setup

History

What is the name of your language?

The programming language I selected is JavaScript, which is one of the most widely used languages in computer science and software development today.

When/where was it created, and by whom? Was it written to address a particular problem or need?

JavaScript was created in 1995 by Brendan Eich while he was working at Netscape Communications Corporation. At the time, most websites were static; they displayed text and images but did not respond to user interactions in real-time. Netscape wanted a way to make its browser more interactive and competitive. To solve this, Eich designed JavaScript in just 10 days.

The problem JavaScript addressed was the need for a lightweight, interpreted scripting language that could run inside the browser and allow web pages to react dynamically. It was not designed to replace large-scale programming languages like Java or C++, but rather to complement them by focusing on client-side interactivity. For example, instead of requiring a full page reload when a user clicked a button, JavaScript could update the page instantly. Over time, its scope grew dramatically beyond this original purpose.

What types of programming is your language primarily used for?
JavaScript started off as a web browser scripting language, but today it is a general-purpose, multi-paradigm language. It supports imperative, functional, and object-oriented styles of programming. Some of its major uses include:

Web development (front-end): JavaScript runs natively in every modern browser, which makes it the standard for creating interactive websites. Frameworks like React, Angular, and Vue expand its capabilities.

Web development (back-end): With the introduction of Node.js in 2009, JavaScript could run on servers. This made it possible to write entire full-stack applications using just one language. Popular frameworks include Express.js and Next.js.

Mobile applications: Tools like React Native and Ionic allow developers to build mobile apps for iOS and Android using JavaScript.

Desktop applications: Electron, which powers apps like Slack, Discord, and Visual Studio Code, uses JavaScript and web technologies to create cross-platform desktop software.

Game development: JavaScript has libraries like Phaser.js that make it possible to build browser-based games.

Machine learning and data science: Although not as common as Python, JavaScript has libraries like TensorFlow.js that bring machine learning models into the browser.



Where will you get information about this language when it’s time to start programming in it?

https://developer.mozilla.org/en-US/docs/Web/JavaScript

https://javascript.info/

https://www.w3schools.com/js/

https://www.codecademy.com/catalog/language/javascript

Getting Started

What did you need to do to install the language?

One of the advantages of JavaScript is that it is built directly into every modern web browser, so technically, no installation is needed to start running JavaScript code. You can open your browser’s developer tools and immediately run JavaScript in the console.

Does this language come with a recommended programming environment? What is it? If not, how did you pick the one that you’ll be using?

JavaScript itself does not come with an official environment, because you can run it in any text editor and execute it in a browser or Node.js. B,ut the most widely recommended editor is Visual Studio Code (VS Code).

I chose VS Code because:

It has good built-in support for JavaScript.

It integrates seamlessly with Git and GitHub.

It offers debugging tools, auto-completion, and error checking.


Other environments like WebStorm or Atom could also work, but VS Code is free and the industry standard.

How do you run programs in that language?

There are two main ways to run JavaScript:

In the browser:
Create an .html file and include JavaScript in a <script> tag. For example:

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


Opening this file in a browser will show a popup alert with the message.

With Node.js (outside the browser):
Save your code in a .js file (for example, hello.js):

console.log("Hello, World!");


Then run it in the terminal with:

node hello.js


How do you write comments in your language?

JavaScript has two types of comments:

Single-line comments use //.

// This is a single-line comment


Multi-line comments use /* */.

/* This is a
   multi-line comment */

Example: 

hello.js

// This program prints "Hello, World!" to the console
console.log("Hello, World!");


To run:

node hello.js


Expected output:

Hello, World!

Sources

https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://javascript.info/
https://www.w3schools.com/js/js_history.asp
