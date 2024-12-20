# JavaScript and Classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## Why use OOP
### **1. Code Reusability**
- Benefit: OOP promotes reusing code through inheritance and polymorphism, reducing duplication and saving time.
- Example: A parent class can define common behaviors and properties that child classes inherit, avoiding the need to write repetitive code.
```javascript

class Vehicle {
  start() {
    console.log("Vehicle started");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("Car is driving");
  }
}

const myCar = new Car();
myCar.start(); // Reuses code from Vehicle class
myCar.drive();

```
### **2. Modularity**
- Benefit: OOP organizes code into objects and classes, making the software modular. This makes it easier to break down complex problems and work on them independently.
- Example: A project can have separate classes for User, Order, and Payment, each handling its own logic.
```javascript

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

class Order {
  placeOrder() {
    return "Order placed successfully";
  }
}

```
### **3. Scalability**
- Benefit: OOP is ideal for building large, scalable systems. You can easily extend functionality by creating new classes or modifying existing ones without affecting unrelated parts of the code.
- Example: If you want to add a new type of payment (e.g., PayPal) to an e-commerce system, you can extend the Payment class without disrupting the rest of the system.
### **4. Maintainability**
- Benefit: Encapsulation ensures that changes in one part of the program have minimal impact on other parts, making it easier to fix bugs and update the system.
- Example: By restricting access to private fields, you prevent accidental modifications and ensure that changes only occur through well-defined methods.
```javascript

class Account {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

```
### **5. Abstraction**
- Benefit: By hiding unnecessary details and exposing only the required functionality, OOP reduces complexity for users and developers.
- Example: When you use an object like a Car, you don't need to know how the engine or transmission works; you just call methods like startEngine.
### **6. Improved Collaboration**
- Benefit: OOP's modular structure allows teams to work on different parts of the program independently, improving collaboration and productivity.
- Example: One team can work on a Database module while another team works on the UserInterface module.
### **7. Easier to Debug**
- Benefit: With OOP, each object is a self-contained unit, making it easier to isolate and debug issues.
- Example: If there's an error in the Payment class, you only need to look at that class rather than debugging the entire system.
### **8. Real-World Mapping**
- Benefit: OOP aligns closely with real-world concepts, making it intuitive. Objects and classes model real-world entities, such as a Car, Person, or Order.
- Example: A Dog class can have properties like name and breed and methods like bark.
### **9. Flexibility and Extensibility**
- Benefit: Polymorphism allows you to write flexible code that can work with objects of different types, and inheritance makes it easy to extend functionality.
- Example: A Shape class can have multiple child classes (Rectangle, Circle) that implement their own version of an area method.
```javascript

class Shape {
  calculateArea() {
    throw new Error("Method not implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const myRectangle = new Rectangle(10, 20);
console.log(myRectangle.calculateArea()); // 200

```
### **10. Standardized Approach**
- Benefit: OOP provides a standardized way of structuring code, which can make it easier to understand and maintain across projects and teams.

## Parts of OOP
### Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 Pillars of JavaScript
### **1. Abstraction**
- Definition: Abstraction is about hiding unnecessary details and exposing only the essential features of an object. It helps focus on what an object does rather than how it does it.
- You can achieve abstraction by using classes, functions, or modules that expose only what is necessary through public methods while hiding implementation details.

```javascript

class Car {
  startEngine() {
    console.log("Engine started");
  }

  drive() {
    console.log("Car is moving");
  }
}

// Usage
const myCar = new Car();
myCar.startEngine(); // Abstracts away the internal workings
myCar.drive();       // No need to know how 'drive' works internally

```

### **2. Encapsulation**
- Definition: Encapsulation is the process of bundling data and methods that operate on that data within one unit (e.g., a class) and restricting direct access to some of the object's components.
- Encapsulation can be enforced using private fields (denoted by #) or closures.

```javascript

class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

// Usage
const myAccount = new BankAccount(100);
myAccount.deposit(50);
console.log(myAccount.getBalance()); // 150
// console.log(myAccount.#balance); // Error: Private field is not accessible

```

### **3. Inheritance**
- Definition: Inheritance is a mechanism where one class (child) can inherit properties and methods from another class (parent), promoting code reuse.
- JavaScript supports inheritance using the extends keyword with classes.

```javascript

class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

// Usage
const myDog = new Dog();
myDog.speak(); // Output: Dog barks

```
### **4. Polymorphism**
- Definition: Polymorphism allows objects of different types to be treated the same way. Methods in derived classes can override methods in their base class, providing specialized behavior.
- You can override methods in child classes to achieve polymorphism.

```javascript

class Shape {
  calculateArea() {
    console.log("Area is not defined");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Usage
const shapes = [new Rectangle(10, 20), new Circle(10)];

shapes.forEach(shape => console.log(shape.calculateArea()));

```
| Pillar        | What It Does                                                | JavaScript Feature Used          |
| :------------ | :---------------------------------------------------------: | -------------------------------: |
| Abstraction   | Hides complexity and shows only the essentials              | Classes, Modules, Public Methods |
| Encapsulation	| Protects and restricts access to object details             | Private Fields, Closures         |
| Inheritance   | Reuses properties and methods of a parent class             | extends Keyword                  |
| Polymorphism  | Allows one interface to be used for different types of data | Method Overriding                |