



// Object



// const item ={
//    "harry":true,
//    "saugat": true,
//    "sudip": false,
//    "hello":  90,
//    "hiiii": undefined,

// }
// console.log(item["sudip"]);



// // chapter 1 Q1

// let a = "saugat";
// let b = 18;

// console.log(a + b);

// // Q2

// console.log(typeof(a+b));



// Expression and conditionals


// let a = 5;
// let b = 4;
// console.log("a + b = ", a+b )
// console.log("a - b = ", a-b )
// console.log("a / b = ", a/b )
// console.log("a % b = ", a%b )
// console.log("a ** b = ", a**b )
// console.log("++a = ", ++a )
// console.log("a++ = ", a++ )
// console.log("--a = ", --a )
// console.log("a-- = ", a--)
// console.log("a = ", a )
// console.log("a-- = ", a-- )



// Assignment operators


// let a = 10;

// a *= 5;
// console.log(a);




// comparison operators

// let comp = 6;
// let comp1 = 7;

// console.log("comp == comp1 is",comp == comp1);
// console.log("comp != comp1 is",comp != comp1);
// console.log("comp === comp1 is",comp === comp1);
// console.log("comp !== comp1 is",comp !== comp1);
// console.log("comp < comp1 is",comp < comp1);


// let a = prompt('hey whats your age');
//  a = parseInt(a);

//  if(a<0){
//    alert('this is unvalid age');
//  }
//  else if(a<9){
//    alert('your age a kind your cannot join the office');
// }
// else if(a<18 && a>9){
//    alert('your age a kind your cannot join the office');
// }
// else if(a>65){
//    alert('your retire time for office');
// }
// else if(a>40){
//    alert('you cannot join the office');
// }

// else{
// alert('you can join the office');
// }


//                                                        project

// let a = prompt("hey enter the your age");
//  a = parseInt(a);

// if(a<0){
//    console.log("unvalid age");

// }
// else if(a<9){
//    console.log('your are a kind does not join the office');
// }
// else if(a<18 && a>9){
//    console.log('your are a kind does not join the office');
// }
// else if(a>65){
//    console.log('your retire time for office');
// }
// else if(a>40){
//    console.log('you connot join the office');
// }
//  else if (isNaN(a) || a === null  ) {
//    console.log("Error: You must enter a valid number.");
// }
// else{
//    console.log('you can join the office');
// }


//chapter 2 practice set    chapter 2 practice set   chapter 2 practice set  chapter 2 practice set  chapter 2 practice set


// problem no 1

// let age = prompt("what is your age?");

// if(age>10 && age<20){
//    console.log('your age lies between 10 and 20');
// }

// else{
//    console.log('your age doesnt lies between 10 and 20');

// }

//   switch-statement  switch-statement switch-statement switch-statement


// let trafficLight = "green";
// message = ""

// switch(trafficLight){
//     case  "red":
//       message = "stop immediately"
// break;
//    case "yellow":
//       message = "prepare to stop";
// break;
//       case "green":
//          message = "Proceed or continue driving."
// break;
//       default:
//          message ="Invalid traffic light color."
// }
// console.log(message);



// for loop ffor loop for loop for loop or loop for loop for loop for loop for loop for loop for loop for loop



// for (let i = 0 ; i<=5; i++){
//     console.log(i);
// }

// let sum = 0;
// const n = 10;

// for(let i = 1 ; i<=n; i++){

//     sum+= i;
// }
// console.log(`sum:${sum}`) ;


// let sum = 0 ;
// const n = 100;

// for(let i = 0; i<n; i++){
//     sum += i;
// }
// console.log(`sum: ${sum}`);


// for in lopp for in lopp for in lopp for in lopp for in lopp for in lopp

// let obj ={
//     saugat: 80,
//     harry:95,
//     gautam :100,
//     subhm:45,
//     hello : 79,
// }
// console.log(obj);
// for (let a in obj){
//     // console.log(a);
//     console.log("Marks of "+a + " are " +  obj[a]);
// }

// for of loop for of loop for of loop




// while loop  while loop  while loop  while loop


// let n = prompt("enter the your number");
// a = Number.parseInt(n);
// let i = 1;
// while ( i <=n) {
//     console.log(i);
//     i++
// }


// let i = i;

// do {
//     console.log(i);
//     i++
// }while(i<34);


// let i = 0;
// const name = "i love you baby";

// do {
//     console.log( i+ " " + name);
//     i++;
// } while (i < 34);


// funcation funcation funcation funcation funcation funcation


// function onePlusAvg(x,y){
//     console.log("done")
//     return 1 + (x + y )/2
// }
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(`one plus Average of a and b `,onePlusAvg(a,b))
// console.log(`one plus Average of a and b `,onePlusAvg(b,c))
// console.log(`one plus Average of a and b `,onePlusAvg(a,c))



// function hello(name){
//     console.log(`hello ${name}`);
// }

// hello("saugat gautam");

// hello("achyut gautam");

// function addNumber(num1 , num2){
//     let add = num1+num2;
//     console.log(add)
// }
// addNumber(3,4);

// function findSquare(num){
//     return num * num;
// }
// let square  = findSquare(5);
// console.log(square);



// let squareRoot = Math.sqrt(4);
// console.log(`square of root 4 is ${squareRoot}`);

// let power = Math.pow( 3,4);

// console.log(`3 power of 4 is ${power}`)


// chater 3 question chater 3 question chater 3 question


// let obj = {
//     harry : 98,
//     saugat : 70,
//     Achyut : 65,
// }
// console.log(obj.Achyut)


// string string string string string string

// let str2 = "please give Rs 1000";
// let amount = Number.parseInt(str2.slice("please give Rs".length));
// console.log(amount);
// console.log(typeof amount);



//  Array Array Array Array Array ArrayArray ArrayArray Array

// let num = [34,45,56,45,];
// num[5] = 34;
// console.log(`length is number are ${num.length}`);



// let num = [3, 4,5, 6, 7,4,8,10]

// for(let  i = 0; i<num.length; i++){
//     console.log(i);
// }

// num.forEach((element)=>{
//     console.log(element + element)
// })


// Array map  Array map  Array map  Array map  Array map  Array map  Array map


// const employees = [
//     { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
//     { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
//     { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
//     { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
// ];

// let calAmt = (obj) =>{
//     newobj = {};
//     newobj.name = obj.name;
//     newobj.TotalErning = obj.salary+obj.bonus-obj.tax;
//     return newobj;
// }
// let nwearr = employees.map(calAmt);
// console.log(nwearr);



// let arr = [4,5,6,7];
// let newarr = arr.map((it)=> it*2);
// console.log(newarr);


//  array filte


// let  arr = [45,56,673, 6,4,3,2,5,7,10];
//  let arr2 = arr.filter((value) =>{
// return value<=10
//  })
//     console.log(arr2);


// Array reduce Array reduce Array reduce Array reduce Array reduce Array reduce Array reduce Array reduce

// let number = [23,45,45,2];
// let arr2 = number.reduce((h1, h2)=>{
// return h1+h2;
// })
// console.log(arr2);

// let arr = [3,4,5,6,7]
// let a;
// do{
//     a = prompt("enter the number");
//     a = Number.parseInt(a);
//     arr.push;
// }while(a !=0);
// console.log(arr);


// let arr = [3,4,5,6,70 ,45,56,576]
// let n = arr.filter((x)=>{
//     return x%10 ==0
// }
// )
// console.log(n);

// let arr = [3,4,5,6,70 ,45,56,576];
// let a = arr.map((x)=>{
// return x*x;
// })
// console.log(a)

// let age = prompt("enter your age");
// age = Number.parseInt(age)
// if(age<18){
//     console.log("you cannot drive");
// }
//  else if(age>18){
//     console.log("your age valid you can drive");
//  }
//  else{
//     console.log("Invalid age")
//  }

///////////////////////////////////////////////////////////////////game///////////////////////////

// let color = prompt("enter the color");
// document.body.style.background = color;

// let words=["snake","water","gun"];

// let random=words[Math.floor(Math.random()*words.length)]
// let input;
// let points=0;
// let chances=0
// while(true){
//     input=prompt("enter a word");
//     if(input==random){
//         console.log("draw");
//         chances++;
//     }
//        else if(input=="snake"&& random=="water"){
//         console.log("you win");
//         points++;
//         chances++;
//     } else if(input=="water"&& random=="snake"){
//         console.log("oops there is a snake try agan");
//         chances++;
//     } else if(input=="water"&& random=="gun"){
//         console.log("you win")
//         points++;
//         chances++;
//     } else if(input=="snake"&& random=="gun"){
//            console.log("oops lose! there is gun  try again");
//            chances++;
//     } else if(input=="gun" && random=="water"){
//         console.log("oops lose! there is water try again")
//         chances++;
//     } else if(input=="gun" && random=="snake"){
//         console.log("you win");
//         points++;
//         chances++;
//     } else{
//         console.log("wrong input");
// chances++;
//     }

//     if(chances==5){
//         break;
//     }
// };
// console.log("your points are "+points);
// console.log("chances used in game "+chances);




//c create 3 div with common class name - box .Access them & add some un text of them

// let divs = document.querySelectorAll(".box");
// let idx = 1;

// for (divs of divs) {
//     divs.innerText = `new unique value of div ${idx}`;
//     idx++;
// }


// Create a H2 heading element with text - "Hello javascript". Append "from Appna college students" to this text using JS.
//  let h2 = document.querySelector("h2");
//  console.dir(h2.innerText);

//  h2.innerText = h2.innerText + " from appna college";



/*create a new button element given it a "click me!", background color of
 red & text color of white 
 
 insert the button as the first element inside the body tag.
 */

// let newBtn = document.createElement("button");
// newBtn.innerText = "click Me!";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// let button = document.querySelector("body");
// button.append(newBtn);


/* create a <P> tag in HTML given it a class & some styling. now create a new class in css and try
 to append this class to the <P> element.
 did you nitice how you overwrite the classname when you add a new one? Solve this problem using classList. */

/* create a toogle button that screen to dark-mode when 
                                      clicked & light-mode when cliked again */

// document.addEventListener('DOMContentLoaded', () => {
//     const toggleButton = document.getElementById('toggle-button');
//     const body = document.body;

//     toggleButton.addEventListener('click', () => {
//         if (body.classList.contains('light-mode')) {
//             body.classList.remove('light-mode');
//             body.classList.add('dark-mode');
//         } else {
//             body.classList.remove('dark-mode');
//             body.classList.add('light-mode');
//         }
//     });

//     // Set the initial mode
//     body.classList.add('light-mode');
// });




/* write a program to show differet alerts when different button are clicked */

// let button = document.createElement("button");
// button.innerText = "click me!";

// let body = document.querySelector("body");
// body.append(button);


//JavaScript’s Prototype JavaScript’s Prototype JavaScript’s Prototype 

// const student = {
//     fullName : "saugat gautam",
//     marks : 78,
//     printMarks : function(){
//         console.log("marks= ",this.marks);
//     }
// }

// let student ={
//     fullName : "Saugat gautam",
//     marks : 98,
//     printMarks : function(){
//         console.log("marks = ",this.student);
//     }
// }


//      class car{
//         start(){
//             console.log("start");
//         }
//         stop(){
//             console.log("stop");
//         } 
//      }
// let fortuner = new car();



//                      class and objects

//    class RailwayFrom{
//     submit(){
//         alert("from submitted");
//     }
//     cancel(){
//         alert("This from is canced")
//     }
//    }
//    let saugat = new RailwayFrom()
//    let Bibash = new RailwayFrom()

//    saugat.submit()
//    Bibash.submit()
//    Bibash.cancel()



//JavaScript Classes
// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     geet(){
//         console.log(`hello,My name is ${this.name}, I am ${this.age} years old`);
//     }
// }

// let person1 = new person("saugat", 17);
// let person2 = new person("Bishal", 17);

// person1.geet();
// person1.geet();


//                      extends KeyboardEvent



// class Animal {
//     constructor(Name, color) {
//         this.Name = Name
//         this.color = color
//     }
//     geet(){
//         console.log(`this Animal name is ${this.Name}`)
//     }

// }

// class dog extends Animal{
//     hello(){
//         console.log(`this animal color is ${this.color}`)
//     }
// }
// let dogs = new dog("Rover","White")

// dogs.geet()
// dogs.hello()


//                                     super Keywods

// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// // inheriting parent class
// class Student extends Person {

//     constructor(name) {

//         console.log("Creating student class");

//         // call the super class constructor and pass in the name parameter
//         super(name);
//     }

// }

// let student1 = new Student('Jack');
// student1.greet();




//////////////////////////////////// method overriding


// class employees{
//     login(){
//         console.log(`Employee has logged in`);
//     }
//     logout() {
//         console.log(`Employee has logged out`);
//     }
//     requestLeaves(leaves){
//         console.log(`Employee has requested ${leaves} dayes leave - Auto approve`);
//     }
// }

// class programmer extends employees{
//     requestCoffee(x){
//         console.log(`employee has requested ${x} coffees`);
//     }
//     requestLeaves(leaves) {
//         super.requestLeaves(3)
//         console.log(`one extra is granted`);
//         // console.log(`Employee has requested ${leaves + 1} dayes leave (one extra)`);

//     }
// }


// let e = new programmer()
// e.login()
// e.requestLeaves(3)
// e.requestCoffee(1)



// class tesla {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }

//     fumcation() {
//         console.log(`start engine... for car`);
//     }
// }

// class teslaModel2 extends tesla {
//     fumcation() {
//         console.log(`start engine... for teslaModel2`);
//     }
// }

// let car = new teslaModel2();
// car.fumcation();


// class student{
//     constructor(name,age,markss){
//         this.name = name;
//         this.age = age;
//         this.markss = markss;
//     }
//     geet(){
//         console.log(`student name is ${this.name}`);
//         console.log(`student age ${this.age}`);
//     }

//     studentAge(){
//         console.log(`student age : ${this.markss}`);
//     }

// }
// class marks extends student{
//     geet() {
//         console.log(`student name is ${this.name} and marks are ${this.markss}`);
//     }
// }

// let sub = new marks("hari",23,78);

// sub.geet()
// sub.studentAge()


///////////////////////////////// static methods
// class mathUnits{
//     static square(number){
//         return number*number;
//     }
// }

// console.log(mathUnits.square(4));


// class mathUnits {
//     static add(a, b) {
//         return a + b;
//     }
//     static sub(a,b){
//      return a-b;
//     }
// }
// console.log(mathUnits.add(3,4));
// console.log(mathUnits.sub(44, 4));


// class user{
//     constructor(name){
//         this.name = name;
//     }
//     static newUser(){
//         return new user("saugat gautam" );
//     }
// }
// let NewUser = user.newUser();
// console.log(NewUser.name);

//   class mathUnits{
//     static plush(a,b){
//         return a+b;
//     }
//     static sud(a,b){
//     return a-b;
//     }
//   }
//   let add = mathUnits.plush(4,5);
//   console.log(add);
//  let sud = mathUnits.sud(4, 5);
//  console.log(sud);



// class car{
//     constructor(brand,model,year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//     dispayModelYearBrand(){
//         console.log(`${this.brand} ${this.model} ${this.year}`);
//     }
//     static createElectricCar(model,year){
//         return car (brand,model,year);
//     }
// }

// let mycar = new car('Toyota','corola',2020);
// mycar.dispayModelYearBrand();

// let myElectricCar = new car('Tesla','model s',2023);
// myElectricCar.dispayModelYearBrand();


// class user {
//     constructor(userName,email){
//         this.userName = userName;
//         this.email = email;
//     }
//     displayuserInfo(){
//         console.log(`username: ${this.userName} email: ${this.email}`);
//     }
//     static isValidemail(email){
//         let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//          return emailRegex.test(email);
//     }
// }
// let user1 = new user('saugat gautam\n','saugatgautam752@gmail.com');
// user1.displayuserInfo();

// console.log(user.isValidemail("saugatgautam752@gmail.com"));
// console.log(user.isValidemail("saugatgautam"));


