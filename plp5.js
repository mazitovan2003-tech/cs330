// Base class: Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}.`;
  }

  toString() {
    return `Person{name=${this.name}, age=${this.age}}`;
  }
}

// Subclass: Student inherits from Person
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);        // call parent constructor
    this.major = major;
  }

  study() {
    return `${this.name} is studying ${this.major}.`;
  }

  // override parent method
  toString() {
    return `Student{name=${this.name}, age=${this.age}, major=${this.major}}`;
  }
}

// Instantiate both objects
const alice = new Person("Alice", 30);
const bob = new Student("Bob", 20, "Computer Science");

// Test variables and functions
console.log(alice.greet());
console.log(bob.greet());
console.log(bob.study());

// Modify attributes
bob.major = "Math";
console.log(bob.toString());
