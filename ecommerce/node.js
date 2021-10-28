console.log("node app");

var a= 10;
var b = 5;


// module
const os = require('os');
console.log(os.type())
console.log(os.release())
console.log(os.platform())

const car = require('./car.js');
console.log(car)

const _ = require("loadsh");
const { promises } = require('stream');

const bar = () => console.log("i am bar");
const baz = () => console.log("bazzzzz");

const foo = () => {
    console.log("foo");
    setTimeout(bar, 3000);
    setInterval(baz, 1000);
    baz();

}

function getMessage(msg, callback) {
    setTimeout(()=> { 
        console.log(msg);
        callback();
    },1000)
}

function displayMessage() {
    console.log("Dispaly message");
}
// getMessage("this is some message", displayMessage)
// 
// promises

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("run befoer")
    }, 1000)
})

promise.then(
    result => {
        console.log(result)
    }, 
    error => console.log(error)
)



function clone(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("set icon"), 1000)
    })
}

async function msg(callback) {
    const msg =await  clone();
    console.log("message: ", msg);
    callback();
}

msg(result);


function result() {
    console.log("execute after");
}