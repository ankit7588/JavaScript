const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const initialValue = 0

// const myTotal = myNum.reduce(function (accumulator, currentValue) {
//       console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//       return accumulator + currentValue
      
// }, initialValue)

const myTotal = myNum.reduce( (acc, currval) => acc + currval, 0)

console.log(myTotal);

const shoppingCart = [
    {
        courseName: "JavaScript Course",
        price: 3999
    },
    {
        courseName: "Python Course",
        price: 2999
    },
    {
        courseName: "Mobile Dev Course",
        price: 4999
    },
    {
        courseName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, currval) => {
    return acc + currval.price
}, 0)

console.log(priceToPay);
