const anything = require("randomstring");
const joke = require('give-me-a-joke');

joke.getRandomDadJoke(function (joke) {
    console.log(joke);
});

console.log(anything.generate());


// create a folder
// go inside the folder
// npm init -y
// install the package
// import the package in your javascript file 
// use the package