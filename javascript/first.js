// declaration of variable
// hoisting
// const c = 10.9;
// const d = [1, 2, 3, 4];
// // 0 1 2 4

// let e = {
//     "a": 1,
//     "b": 2,
//     "c": [1, 2, 3, 4],
//     "d": 4
// }

// e['e'] = 5;

// let f = {
//     ...e,
//     "e": 7
// }

// console.log(f['a']);

// 
let list = [1, 2, 3, 5, 6];
list.forEach((n) => {
    console.log(n);
})
let out = list.map((num) => {
    return num * 2;
})
console.log(out);
// function insidemap(item) {
//     console.log(item)
// }
// list.map(insidemap);
// list.map((num) => {
//     console.log(num);
// })



// for (let i = 0; i < list.length; i++) {
//     console.log(list[i] * 2);
// }

// let i = 0;
// while (i < list.length) {
//     console.log(list[i]);
//     i++;
// }

// let iamavariable = 30;

// function iamafunction(iamaparameter) {
//     let iamavariable = 10;
//     console.log("I am a function with value ", iamavariable, iamaparameter);
// }

// const iamafunction = () => {
//     console.log("I am a function with value ", iamavariable);
// }



// iamafunction();


// const funca = (func) => {
//     func();
//     console.log("i am function 1");
// }

// const funcb = () => {
//     console.log("i am function 2");
// }

// funca(funcb);



// variable declaration - var , let , const
// variable initialisation
// hoisiting
// objects - print a value , insert a value , spread operaton (...)
// functions - declaration , expression , arrow function 
// passing function as a parameter
// while loop and for loop
// array - forEach , map , filter 

let newlist = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
names = names.filter((name) => {
    return name[0] === 'a'
})
console.log(names);

newlist = newlist.filter((num) => {
    return num % 2 == 0;
});

console.log(newlist);

// let i = 0;
// let n = 10;
// while (i < n) {
//     console.log(i);
//     i++;
// }


// - dom manipulation 
// - document.getElementById 
// - onclick 
// - button
// - how to create a element using javascript
// - how to change styles using javascript
// - how to hide any tag 
// - how to handle the input provided by the user