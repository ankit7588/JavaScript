//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "ankit"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()   
}

// one()

if (true) {
    const username = "ankit"
    if (username === "ankit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   
}
// console.log(username);

//  +++++++++++++++++++++++ interesting +++++++++++++++++++++

console.log(addOne(6))
function addOne(num) {
    return num + 1
}

addTwo()
const addTwo = function(num) {
    return num + 2
}
