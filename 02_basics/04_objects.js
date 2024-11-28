// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ankit@gmail.com",
    username: "ankit7588",
    fullname: {
        firstname: "Ankit",
        lastname: "Anghan"
    }
}

// console.log(regularUser.fullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = { obj1, obj2, obj3 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "n@gmail.com"
    },
    {
        id: 3,
        email: "k@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "javascript in hindi",
    price: "999",
    courseInstructor: "ankit"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// {
//     "name": "Ankit",
//     "coursename": "javascript in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]