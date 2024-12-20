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


# 4 pillars
## Abstraction
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
## Encapsulation
## Inheritance
## Polymorphism