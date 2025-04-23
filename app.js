// ***** Arrow Function **** //




//** */ Spread OPERATOR **//

//  let spread =["so", "much" ,"fun"];
//  let message1 =["Javascript" , "is" , spread, ];
//  let message =["Javascript" , "is" , ...spread, ];
//  console.log(message1);
//  console.log(message);


// let spread =["so", "much" ,"fun"];
//  let message1 =["Javascript" , "is" , spread, "and" , "very" ,"powerful"];
//  let message2 =["Javascript" , "is" , ...spread, "and" , "very" ,"powerful"];
//  console.log(message1);
// console.log(message2);

 
// function addTwonum(x,y) {
//     console.log(x+y);
    
// }
// // let arr = [5,9];
// // addTwonum(...arr);







// function addFournum(x,y,z,a) {
//     console.log(x+y+z+a
//     );
    
// }
// let arr1 = [5,9];
// let arr2 = [3,1];

// addFournum(...arr1 , ...arr2);

//***   REST PARAMETER  ***//

// function and defination 

// function someFunction(param1 ,...param2) {
//     console.log(param1,param2);
    
// }
// someFunction("hi" , "there" ,"how are you");


// function addTwonum(x,y) {
//     console.log(x+y);
    
// }

// let result = addTwonum(4,5);
// console.log(result);


// arrow function se add two number
//  let addTwonum = (x,y) => .console.log(x+y);
//  ;
// // addTwonum(3,5);


// // find output 
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwonum(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);





// *** Returing array function ***/// 

// let addTwonum = (x,y) => x+y;
// // addTwonum(3,5);


// // find output 
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwonum(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);






//** LOCAL VARIABLE IN FUNCTION  **//
// function TestAvailability(x) {
//     console.log("Not Available here" , x);
    
    
// }
// TestAvailability("hiii");
// console.log("Not Available here " , x);

// function TestAvailability() {
//     let y = "localVariable "
//     console.log("Not Available here" , y);
    
    
// }
// TestAvailability("hiii");
// console.log("Not Available here " , y);

// function TestAvailability(y) {
//     let y = "'i' ll return ";
//     console.log("Not Available here" ,y );
//     return y;
    
// }
// let z = TestAvailability();
// console.log("outside the function " , z);
// console.log("not access " , y);







//**  LET VERSUS VAR VARIABLE  **//

// function Doingstuff(params) {
//     if(true){
//         console.log(x);
        
//         var x = "local";
//     }
// }
// Doingstuff();

// function Doingstuff(params) {
//     if(true){
//         console.log(x);
        
//         let x = "local";
//     }
// }
// Doingstuff();

//**   Constant Scope  **//
// function Doingstuff(params) {
//     if(true){     
//         const x = "local";
//     }
//     console.log(x);
    
// }
// Doingstuff();





//**    Global Variable  **//

// let globalvar = "Accessible everywhere";
// console.log("outside function ", globalvar);

// function creatingNewScope(x) {
//      console.log();
     
    
// }

// let x = "global";
// function Doingstuff() {
//     let x = "local"; // when remove let it output are local and local 
//     console.log(x);
    
// }
// Doingstuff();
// console.log(x);


// let x = "global";
//  function Doingstuff(x) {
//     console.log(x);
    
//  }
//  Doingstuff("Params");





                                       //** output find **//

// function config() {
//     x = "guss my scope ";
//     console.log("Inside the function " , x);
    
// } 
//  config();
//  console.log("outside  the function " , x);
 




                                    //*** */ Immediate involved function Expression -- IIFE  ***//
//**   (); is used to involve function **/
// (function () {
//     console.log("TTTTTT");
    
// })();



                                                 //** Arrow function  */
// (()=>{
//     console.log("run that path");
    
// }

// )();






                                                //*** Recursive Functions  ***//
                                                    
// 



// function getRecursive(nr) {
    
//     if(nr>0){
//     getRecursive(--nr);
//     }                                 //** output 0 0 1 2 // 
   
//     console.log(nr);
// }

//  getRecursive(3);





// function logRecursive(nr) {
//     console.log("started function ", nr);                                 
//     if(nr>0){
//     logRecursive(nr-1);
//     }else{
//         console.log("done with recursion");
        
//     }
//     console.log("Ended fun" , nr);
    
// }

// logRecursive(3);
//** output of above code  */
// started function  3
// started function  2
// started function  1
// started function  0
// done with recursion
// Ended fun 0
// Ended fun 1
// Ended fun 2
// Ended fun 3





//**                                       **** Nested Function ***************               */

// function doOuterFunctionStuff(nr){
//     console.log("Outer function ");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log(" I Can  acess outer variable " , nr);
        
        
//     }
    
// }
// doOuterFunctionStuff(2)





//**   Anonymous function  
   

///***                                             Function Callback   */

// let functionVariable = function () {
//     console.log("not so ");
    
// };
// functionVariable();

// function doFlexibleStuff(executesStuff) {
//     executesStuff();
//     console.log("Inside do ");
    
// }
// doFlexibleStuff();


//***         *****                in javascript my build in function  some example are given          *****        */




// let youGotthis = function () {
//     console.log("you are doing well ");
    
// };

// setTimeout(youGotthis , 1000);


// let youGotthis = function () {
//     console.log("you are doing well ");
    
// };

// setInterval(youGotthis , 1000);


// let val = 10;
// function tester(val) {
//     val += 10;
//     if(val<100){
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val);



//.................                    ..................//