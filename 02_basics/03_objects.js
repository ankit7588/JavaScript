// singleton
// object.creator

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Ankit",
  "Full Name": "Ankit Anghan",
  [mySym]: "myKey1",
  age: 24,
  location: "Surat",
  email: "ankit@google.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Friday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ankit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ankitanghan@gmail.com"
// console.log(JsUser);
 
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

