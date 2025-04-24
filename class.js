// reduse of code is inheritance 

// class ClassName{
//      constructor(prop1 , prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//      }
// }

// let obj = new ClassName("arg1" , "arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// this keyword refer to obj refers to the obj it belong to 




// class Dog{
//     constructor(dogname , color , weight , breed){
//         this.dogname = dogname;
//         this.color = color;
//         this.weight = weight;
//         this.breed = breed;
//     }
// }
 
// let dog = new Dog("tomy" , "black" ," 5.5" , " german");
// console.log(dog.dogname , dog.breed, dog.color ,dog.weight);


//------------------------------------  ***CLASSES***  ---------------------------------------------------//

// it is imp to class name is capital 

// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let p = new Person("Shivam" , "Verma");
// console.log(p.firstname , p.lastname);




///----------- *** Method :- function on a class is called a method 


// class Person{
//     constructor(firstname , lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }


// greet(){
//     console.log("Hii there hlo ",this.firstname);
    
// }

// }
// let p = new Person("saurabh" , "singh");
// p.greet();


// compliment methods
// class person{
//     constructor(firstname , lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi there! i am here");
//     }
//     compliment(name,object){
//         return "this is a beautiful" + object +"," + name;
//     }
// }
// let p= new person("saurabh","singh");
// let compliment = p.compliment("saurabh","singh");
// console.log(compliment);

//Properties
//properties, sometimes also called fields, hold the data of the class

//why we use oops language- because of security
// to make the properties private we use # to define instance variables
// properties must be only Accesible by methods
// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){//constructor is a method so, it can access properties
//         this.#firstname=firstname;
//         this.#lastname=lastname;
//     }
// }
// let p=new person("saurabh","singh");
// console.log(p.firstname);//undefined


// -----------------------Inheritance------------------------

// type of inheritance two 
// single and multilavel

// class Vehicle {
//         constructor(color, currentSpeed, maxSpeed) {
//        this.color = color; // Fixed the parameter name to match
//           this.currentSpeed = currentSpeed; // No changes needed here
//            this.maxSpeed = maxSpeed; // No changes needed here
//         }
        
//         move() {
//             console.log("moving at", this.currentSpeed);
//         }
        
//        accelerate(amount) {
//             this.currentSpeed += amount;
//         }
//     }
    
//     class Motorcycle extends Vehicle {
//         constructor(color, currentSpeed, maxSpeed, fuel) {
//             super(color, currentSpeed, maxSpeed); 
//         }
        
//         doWheelie() {
//             console.log("driving on one wheel!");
//         }
//     }
    
//     // Create an instance of Motorcycle
//     let motor = new Motorcycle("black", 100, 400, "petrol"); 
//     console.log(motor.color); 
//     motor.accelerate(50); 
//     motor.move(); 

 // Prototypes
// A prototyope is the mechanism in js that makes it possible to have object
// class person{
//     constructor(firstname,lastname="Maurya"){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("Hi there! I'm",this.firstname,this.lastname);
        
//     }
// }

// person.prototype.introduce=()=>{
//     console.log("Hi! I am ",this.firstname);
// }
// person.prototype.favoritecolor="green";
// let p=new person("Priyanshu");
// console.log(p.favoritecolor);
// p.introduce();
// sarabjjjbwjfebnf;ml
// git 