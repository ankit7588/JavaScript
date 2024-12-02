function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result 
    return number1 + number2  
}

const result = addTwoNumbers(45, 24)
// addTwoNumbers(45, "24")

// console.log("Result: ", result)

function loginUserMessage(username = "ankit") {
    if (!username) {
        console.log("Please enter a username");
        return      
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("pintu"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log.(calculateCartPrice(2))
// console.log(calculateCartPrice(200, 400, 600, 800, 1000))

const user = {
    username: "ankit",
    price: 299
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); 
}

// handleObject(user)
handleObject({
    username: "pintu",
    price: 399
})

const myNewArra = [200, 400, 800, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArra));
console.log(returnSecondValue([200, 400, 600]));
