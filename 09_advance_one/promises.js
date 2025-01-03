const promiseOne = new Promise(function (resolve, reject) {
  //do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise is resolved");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ user: "ankit", email: "ankit@gmail.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log("User is", user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "ankit7588", password: "1234" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log("User is", user);
    return user.username;
  })
  .then((username) => {
    console.log("Username is", username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "1234" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});
async function consumePromise() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();
fetch("https://api.github.com/users/ankit7588")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

  Promise.all
