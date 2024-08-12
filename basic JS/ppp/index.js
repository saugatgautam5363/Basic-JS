// for(i = 0; i<=20; i++){
//     console.log("I love you baby");
// }

// let food = ["apple","banana","mango"];
// for(i = 0; i<food.length;i++){
//     console.log(food[i]);
// }

// let i = 0;

// while(i<3){
//     console.log(i);
//     i+=1;
// }

// function hello(){
//     console.log("hello world!");
// }

// let displayIP = function(){
//     console.log(566.67);
// }

// hello()
// displayIP()



// function name(Name){
//     console.log(`hello ${Name}`);
// }
// name("saugat");

// function addNumder(num1, num2, num0, num3){
//    let sum = num1 + num2;
//    let sum1 = num0 + num3;
//    console.log(`sum is  = ${sum}\n ${sum1}`);
// }

// addNumder(2,3, 4,5);

// let arr =["saugat","bishal","reshem","ishwor"];
// arr.push("achyut");
// console.log(arr);


// let arr =["saugat","bishal","reshem","ishwor"];

// let newArray = arr.map(name=>{
//     if(name === "saugat"){
//         return "kirpa";
//     }
//     return name;
// });
// console.log(newArray);
// console.log(arr);


// let sumArray1 = ([1, 2, 3, 4, 5]);
//  function sumArray(num1 , num2 ,num3,num4,num5){
//     let sum = num1 + num2 + num3 + num4 + num5;

//     console.log(sum);
//  }
//  sumArray(1,2,3,4,5);


// function capitalizeWords(str) {
//     return str
//         .split(' ')  // Split the string into an array of words
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
//         .join(' ');  // Join the array back into a string
// }

// // Test the function
// console.log(capitalizeWords("hello world")); 
// console.log(capitalizeWords("javascript is awesome"));
// console.log(capitalizeWords("capitalize each word")); 




// let count = 1;
// myArray = [];

// function pushArray(element){
//     myArray.push(`${count} ${element}`)
//  count++
// }
// pushArray("apple");

// console.log(myArray);


// Problem: Write a function removeDuplicates that takes an array and returns a new array with duplicate elements removed
// let count = 1;
// let arr = [];

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1,1,2,1,2,1,34,45,454,45,45,454545,45467776,7,7,78,8,8,8]));





// Problem: Write a function factorial that takes a number as input and returns its factorial.

// function factorial(n){
//     if (n<0) return "Factorial is not defined for negative numbers.";
//     if (n===0 || n===1) return 1;
//     return n *factorial(n-1);
// }
// console.log(factorial(3));



// Problem: Write a function reverseString that takes a string as input and returns the string reversed.

// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("saugat"));

// Problem: Write a conditional statement to check if a number n is greater than 10. If true, print "Greater than 10", otherwise print "10 or less".

// let n = 1;

// if(10>n){
//     console.log("greater then 10")
// }
// else{
//     console.log("10 or less");
// }
//Problem: Given two variables, x and y, write a conditional statement to check if x is greater than y. If so, print "x is greater". If x is less than y, print "x is less". If they are equal, print "x is equal to y".

// let x = 11;
// let  y = 10;

// if(x>y){
//     console.log("x is greater");
// }
// else if(x<y){
//     console.log("x is less");
// }
// else{
//     console.log("x is equql to y");
// }


//Problem: Write a conditional statement to check if a number n is positive, negative, or zero. Print "Positive", "Negative", or "Zero" based on the value of n.

// let n = -12;

// if(n>0){
//     console.log("positive");
// }
// else if(n<0){
//     console.log("Negative");
// }
// else{
//     console.log("Zero");
// }

//Here’s how you can use the ternary operator to check if a variable age is 18 or older and assign the appropriate status:


// let age = 22; 

// let status = age >= 18 ? "Adult" : "Minor";

// console.log(status); 





//Here’s how you can write a switch statement in JavaScript to check the value of a variable day and print the name of the day of the week:

// let day = 3; 

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }



//Problem: Write a conditional statement to check if a number n is between 10 and 20 (inclusive). Print "In range" if true, otherwise print "Out of range".

// let n = 100;

// if(n<20){
//     console.log("In range");
// }
// else{
//     console.log("Out of range")
// }



//Problem: Given two boolean variables isWeekend and isHoliday, write a conditional statement to check if it's either a weekend or a holiday. If true, print "Enjoy your day!", otherwise print "Back to work".

// let isWeekend = false;
// let isHoliday = true;

// if(isWeekend || isHoliday){
//     console.log("Enjoy your day");
// }
// else{
//    console.log("Back to work");
// }


/*Problem: Write an else if ladder to determine the grade based on a score variable score. Use the following ranges:
90-100 for "A"
80-89 for "B"
70-79 for "C"
60-69 for "D"
Below 60 for "F"*/


// let score = 85; 

// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 80 && score < 90) {
//     grade = "B";
// } else if (score >= 70 && score < 80) {
//     grade = "C";
// } else if (score >= 60 && score < 70) {
//     grade = "D";
// } else if (score < 60) {
//     grade = "F";
// } else {
//     grade = "Invalid score"; 
// }

// console.log(`Grade: ${grade}`);


//Problem: Write a conditional statement to check if a character char is a vowel (i.e., 'a', 'e', 'i', 'o', 'u'). Print "Vowel" if it is, otherwise print "Not a vowel".

// let char = 'j'; 

// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     console.log("Vowel");
// } else {
//     console.log("Not a vowel");
// }

//Problem: Write a conditional statement to check if a variable value is truthy or falsy. Print "Truthy" if value is truthy, otherwise print "Falsy".

// let value = navigator; 

// if (value) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }



function speak(){
    var text = document.getElementById('input').value;
    var utterence = new SpeechSynthesisUtterance(text)

    speechSynthesis.speak(utterence);
}




