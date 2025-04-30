//--------------------------Concurrency-----------------------------
// concurrency
// callbacks
// async/await
//====================callbacks===========
// function doSomethings(callbacks){
//     callbacks();
// }
// function sayHi(){
//     console.log("hello!");
// }
// doSomethings(sayHi);

// function judge(grade) {
//     switch (true) {
//         case grade == "A" :
//             console.log("you got a", grade, ":amazing");
//             break;
//             case grade == "B" :
//                 console.log("you got a", grade, ":well done");
//                 break;
//                 case grade == "C" :
//             console.log("you got a", grade, ":alright");
//             break;
//             case grade == "D" :
//             console.log("you got a", grade, ":hmm!");
//             break;
//             default:
//                 console.log("an", grade,"!what");

//     }
// }
// judge("D");

// function judge(marks) {
//     switch (true) {
//         case marks >= 90:
//             console.log("you got an A : amazing");
//             break;
//         case marks >= 80:
//             console.log("you got a B : well done");
//             break;
//         case marks >= 70:
//             console.log("you got a C : alright");
//             break;
//         case marks >= 60:
//             console.log("you got a D : hmm!");
//             break;
//         default:
//             console.log("you got an F : what!");
//     }
// }

// function judge(marks) {
//     switch (true) {
//         case marks >= 90:
//             console.log("you got an A : amazing");
//             break;
//         case marks >= 80:
//             console.log("you got a B : well done");
//             break;
//         case marks >= 70:
//             console.log("you got a C : alright");
//             break;
//         case marks >= 60:
//             console.log("you got a D : hmm!");
//             break;
//         default:
//             console.log("you got an F : what!");
//     }
// }

// judge(85); 

//====================Setinterval===========================
        //basic syntax  setInterval(function, milliseconds);
// setInterval(() => {
//     console.log("Hello");
// }, 2000);

// function judge(marks) {
//     switch (true) {
//         case marks >= 90:
//             console.log("you got an A : amazing");
//             break;
//         case marks >= 80:
//             console.log("you got a B : well done");
//             break;
//         case marks >= 70:
//             console.log("you got a C : alright");
//             break;
//         case marks >= 60:
//             console.log("you got a D : hmm!");
//             break;
//         default:
//             console.log("you got an F : what!");
//     }
// }

// setInterval(() => {
//     const randomMarks = Math.floor(Math.random() * 101); //random number between 0–100
//     console.log("Marks:", randomMarks);
//     judge(randomMarks);
// }, 3000);
// // To stop it
// const intervalId = setInterval(() => {
//     // your code here
// }, 3000);

//=====================Promises========================
//  This function need two parameter (resolve,reject)

// let promise = new Promise(function(resolve, reject) {
//     let x = 20;
//     if (x > 10){
//         resolve(x);
//     }else{
//         reject("Too low");
//     }

// });
// promise.then(
//     function(value){
//     console.log("Success:", value);
// },
//  function (error) {
//     console.log("Error:", error);
// });
  

// const promise = new Promise((resolve,reject) => {
//     resolve("success!");
// })
// .then(value => {
//     console.log(value);
//     return "we";
// })
// .then(value => {
//     console.log(value);
//     return "can";
// })
// .then(value => {
//     console.log(value);
//     return "chain";
// })
// .then(value => {
//     console.log(value);
//     return "promises";
// })
// .then(value => {
//     console.log(value);
// })
// .catch(value => {
//     console.log(value);
// })
//========================== async and await =============================================
// function saySomething(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something " + x);
//         }, 2000);
//     });
// }

// async function Talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }

// Talk(2);
// Talk(4);
// Talk(8);
//===========================Event loop========================
//call stack and callback queue
// console.log("hi there ");
// add(4,5);
// function add(x, y){
//     return x + y;
// }

// console.log("hi there");
// setTimeout(() => console.log("sorry i am late"), 1000); 
// console.log(add(4, 5));
// function add(x, y) {
//     return x + y;
// }
