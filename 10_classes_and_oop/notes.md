# javascript and classes

## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
1. Abstraction
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

2. Encapsulation
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

3. Inheritance
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
4. Polymorphism
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