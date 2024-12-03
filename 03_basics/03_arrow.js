const user = {
    username: "ankit",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "mihir"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "ankit"
//     console.log(this.username);    
// }

// chai()

// const chai = function () {
//     let username = "ankit"
//     console.log(this.username);

// }

const chai =  () => {
    let username = "ankit"
    console.log(this);

}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }                                    basic arrow function

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "ankit"})

console.log(addTwo(18, 45));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()