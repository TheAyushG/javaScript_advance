// const a = ayush;
// const b = jaipur;

// let c = 12;

// let x = 12;

// function abc() {
//    var x = 13;
//    console.log(x);
// }
// console.log(x);



// {
//  let x = 14; 
//  console.log(x);
// }
// console.log(x);


// console.log(count);
// var count = 42;

// const person = {
//     age: 12,
//     name: "ayush",
// }

// person.city = "jaipur";

// console.log(person);

// console.log(a);
// let a = 12;

// const arr = [1,2,3];
// arr.push(5);
// console.log(arr);

// let a = 12;
// a = 14;
// console.log(a);

// const name = "ayush";
// const city = "jaipur";
// let age = 12;

// const name = "Ayush";
// const city = "Jaipur";
// let age = 22;

// console.log(name, city, age);

// let a = [1,2,3];
// let b = a;
// b.pop();

// let u1 = Symbol("uid");
// let u2 = Symbol("uid");
// console.log(u1 === u2);

// let obj = {
//     uid : 1,
//     name : "ayush",
//     age : 12,
//     email : "test@test.com",
// }

// let u1 = Symbol("uid");
// obj[u1] = "001";

// console.log(obj);

// let a = [1,2,3];

// let b = a;

// b.pop();
// b.push(5,6,7,8,9);

// let x = 12;
// let y = 20;

// if(x > 4 && y < 25){
//     console.log("A")
// }
// else{
//     console.log("B")
// }


// let isAdmin = true;
// let isLoggedIn = false;

// if (isAdmin || isLoggedIn) {
// console.log("Access granted");
// } 
// else {
// console.log("Access denied");
// }


// let temp = 35;

// if (!(temp < 30)) {
// console.log("Hot");
// } 

// else {
// console.log("Pleasant");
// }


// let a = 0;

// if (a) {
// console.log("Truthy");
// } 
// else {
// console.log("Falsy");
// }


// let score = 78;

// let grade = score >= 90? "A": score >= 75 ? "B": score >=
// 60? "C": "Fail";
// console.log(grade);

// function checkAge(age) {
// if (age < 18) return "Denied";
// return "Allowed";
// }

// function rps(user, computer){
//     if(user === computer)
//         return "draw";
//     if(user === "rock" && computer === "scissor") return "user win";
//     if(user === "paper" && computer === "rock") return "computer win";
//     if(user === "scissor" && computer === "paper") return "user win";

//     return "computer win";
// }

// console.log(rps("paper", "rock"));

// function greet() {
// console.log("Welcome to Sheryians!");
// }
// greet();


// function dance(v1) {
//     console.log(`${v1} is dancing`);
// }

// dance("ayush");
// dance("cat");
// dance("hritik");
// dance("salman")



// function add(a,b){
//     console.log(a+b);
// }

// add(5,4);

// function abc(){

// }

// let fnc = function (){

// }

// let abc = () => {

// }


// function hm(a = 2, b = 1){
//     console.log(a+b);
// }

// hm();



// let fun = function (...val){
//     console.log(val);
// }

// fun(1,2,3,4,5);



// function multiply(a = 1, b = 1) {
// return a * b;
// }

// function sum(...nums) {
// return nums.reduce((acc, val) => acc + val, 0);
// }

// let nums = [1, 2, 3];
// console.log(sum(...nums));

// function abcd(v){
//     return 15 + v;
// }

// let val = abcd(12);
// console.log(val);

// const greet = function() {
//   console.log("Hello!");
// };
// greet(); // Output: Hello!





// function sayHello(fn) {
//   fn(); // calling the passed function
// }

// sayHello(greet); // Output: Hello!

// function outer() {
//   return function() {
//     console.log("Hi from inner!");
//   };
// }

// const inner = outer();
// inner(); // Output: Hi from inner!


// function abcd(val){
   
// }

// abcd(function(){
      
// })



// function abcd (){
//     return function(){

//     }
// }

// abcd()();

// function shout(msg) {
// return msg.toUpperCase();
// }
// function processMessage(fn) {
// console.log(fn("hello"));
// }
// processMessage(shout);


// function abcd(a,b){
//     return a+b;
// }

// console.log(abcd(2,3));

// let x = 10;

// function abcd(y){
//   x += y;
//   return x;
// }

// console.log(abcd(5));
// console.log(abcd(5));



// function outer() {
// let count = 0;
// return function () {
// count++;
// console.log(count);
// };
// }
// let counter = outer();
// counter(); // 1
// counter(); // 2



// function ab(){
//   let a = 12;

//   function cd(){
//     console.log(a);
//   }
//   cd();
// }

// ab();

// (function(){
//  console.log("IIFE executed");
// })();


// abc();

// function abc(){
//   console.log("hello");
// }

// sayHi(); // ❌ Error: sayHi is not a function

// var sayHi = function() {
//   console.log("Hi Ayush!");
// };

// let ds = function(){
//   console.log("hello");
// }



// let abc = (a,b) => {
//   console.log("hello");
// }
// abc();

// function abc(val){
//   console.log(val);
// }

// abc("hello");

// function abc(a,b,c){
//   console.log(a,b);
// }

// abc(1,2);

// function abcd(a = "hello"){
//   console.log("hi", a);
// }

// abcd();


// function abc(...val){
// console.log(val);
// }

// abc(1,2,3,4,5);

// let arr = [1,2,3,4,5];;
// let newArr = [...arr, 6,7,8];
// console.log(newArr);




// function getScore(...score){
//       let total = 0;
//   score.forEach(function(val){
//     total = total + val;
//   })
//   return total;
// }

// console.log(getScore(10,20,30,40));


// function checkAge (age) {
// if (age< 18) {
// console.log("Too young");
// } else {
// console.log("Allowed");
//   }
// }



// function checkAge(age){
//   if(age < 18) return "too young";
//   return "Allowed";
// }

// console.log(checkAge(23));


// function fn(){
//   return;
// }

// console.log(fn());


// let abc = function (val){
//     console.log(val);
// }

// abc(23);



// function abc(val){
//   val();
// }

// abc(function(){

// })

// let total = 0;

// function addTotal(num){
//   total += num;
//   return total;
// }

// console.log(addTotal(6));


// let total = 0;

// function addTotal(num){
//   let newTotal = total;
//   newTotal += num;
// }

// console.log(addTotal(12));


// function outer() {
//   let name = "Ayush"; // outer variable

//   function inner() {
//     console.log("Hello " + name);
//   }

//   return inner;
// }

// const greet = outer(); // outer() runs and returns inner()
// greet(); // Output: Hello Ayush ✅


// function abcd(){
//   let val = 2;
//   return function(){
//     console.log(val);
//     }
// }

// abcd()();

// (function abc(){
//   console.log("hello");
// })();


// abc();
// function abc(){
//   console.log("hello");
// }


// function bmi(weight, height){
//   return weight / (height * height);
// }

// console.log(bmi(55, 1.7).toFixed(2));



// function discountCalculator(discount){
//   return function(price){
//     return price - price * (discount / 100);
//   }
// };

// let discounter = discountCalculator(10);
// console.log(discounter(1000));


// function abc(){
//   let count = 0;
//   return function(){
//     count++;
//     return count;
//   }
// }

// let c = abc();
// console.log(c());
// console.log(c());
// console.log(c());


// function abcd(val){
//   return val * 2;
// }

// console.log(abcd(5));


// (function abcde(){
//    const password = "secret password";
//    console.log(password); 
// })();


// let abc = () => {
//   return "ayush you are going to become rich and ulta successful famosous person with in 2 years";
// }

// console.log(abc());


// greet();
// function greet(){  //works due to function hoisting

// }


// greet();
// let greet = function(){  //does not work due to function expression

// }

// greet(); // ✅ Works

// function greet() {      // Function Declaration
//   console.log("Hello!");
// }

// greet(); //  Error: Cannot access 'greet' before initialization

// let greet = function() {  // Function Expression
//   console.log("Hello!");
// };

// let marks = [90, 85, 78];
// console.log(marks[1]); // 85
// marks[2] = 80; // Update index 2



// let arr = [1, 2, 3, 4];

// arr.push(5); // Add to end
// arr.pop(); // Remove last

// arr.shift(); // Remove first
// arr.unshift(0); // Add to start

// arr.splice(1, 2); // Remove 2 items starting at index 1
// arr.reverse(); // Reverse order

// let arr = [2,3,4,1,5];
// arr.splice(2,2);
// console.log(arr);
//output: [2, 3, 5]

// let newArr = arr.slice(0,4);
// console.log(newArr);

// let arr = [1,2,3,4,5];
// let newArr = arr.slice(1,3);
// console.log(newArr);
// console.log(arr);
// //output: [2, 3]

// let arr1 = [1,2,3];
// arr1.reverse();
// console.log(arr1);

// let arr1 = [5,3,1,4,2];
// let arr = arr1.sort(function(a,b){
//   return b-a; //descending order
// })
// console.log(arr);

// let arr = [12,32,45,65,43];
// arr.forEach(function(val){
//   console.log(val-2);
// })


// let arr = [13,16,23,44,52];
// let newArr = arr.map(function(val){
//    if(val > 20) return val;
// })

// let arr = [43,4,23,12,65,32];
// let newArr = arr.filter(function(val){
//   if(val > 20) return true;
// })
// console.log(newArr);
// //output: [43, 23, 65, 32]

// let arr = [1,2,3,4,5,6];
// let sum = arr.reduce(function(acc, val){
//   return acc + val;
// }, 0);

// console.log(sum);

// let arr = [1,2,3,4,5,6];
// let v1 = arr.find(function(val){
//   return val > 4;
// })

// console.log(v1);
// output: 5

// let arr = [1,2,3,4,5,6];
// let result = arr.some(function(val){
//   if (val > 5) return true;
// })
// console.log(result);

// let result = arr.every(val => val > 20);
// console.log(result);


// let [a,b,c, ...rest] = arr;
// console.log(arr);
// // output: [14, 32, 13, 23, 53, 36]

// let arr = [14,32,13,23,53,36];
// let arr2 = [...arr];
// arr2.pop();
// arr2.push(122,1222);
// console.log(arr2);


// fruit.push("mango");
// fruit.unshift("Pineapple");
// console.log(fruit);


// let fruit = ["apple", "banana"];
// fruit.splice(1,0,"orange","grape");

// let arr = [1,2,3,4,5];
// arr.pop();
// arr.shift();
// console.log(arr);

// Splice Example
// let arr = [1,2,3,4,5];
// arr.splice(1,2);
// console.log(arr);
// // output: [1, 4, 5]

// let arr = ["apple", "banana", "cherry"];
// arr.splice(1, 0, "orange", "grape");
// console.log(arr);
// // output: ["apple", "orange", "grape", "banana", "cherry"]

// let items = [10, 20, 30, 40, 50];
// items.splice(1,2,100,200);
// console.log(items);
// // output: [20, 30, 40]


// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2, 9, 10); 
// console.log(arr); // [1, 9, 10, 4, 5]


// let arr = [3,4,1,5,6];
// let arr1 = arr.map(function(val){
//   return val * val;
// })
// console.log(arr1);
// // output: [9, 16, 1, 25, 36]

// let arr = [2,31,42,5,6];;
// let newArr = arr.filter(function(val){
//   return val > 10;
// })
// console.log(newArr);
// // output: [31, 42]

// let arr = [11,23,31,43,25];
// let sum = arr.reduce(function(acc, val){
//   return acc + val;
// }, 0);
// console.log(sum);
// // output: 133

// let arr = [12,23,5,3,56];
// let result = arr.find(val => val < 10)
// console.log(result);

// let score = [12,23,34,45,56];
// let res = score.some(val => val > 50);
// console.log(res);

// let score1 = [12,23,34,45,56];
// let res1 = score1.some(function(val){
//   return val > 40;
// })
// console.log(res1);

// let arr = [12,22,34,46,56];
// let res = arr.every(function(val){
//   return val % 2 === 0;
// })
// console.log(res);
// // output: true

// let FullName = ["ayush", "gurjar"]
// let [firstName, lastName] = FullName;
// console.log(FullName);

// let a = [1,2];
// let b = [19,4];
// let c = [...a, ...b];
// console.log(c);
// // output: [1, 2, 19, 4]

// let countries = ["USA", "UK", "Canada"];
// let newCountries = ["India", ...countries];
// console.log(newCountries);
// // output: ["India", "USA", "UK", "Canada"]

// let arr = [1,2,3];
// let arr2 = [...arr];
// console.log(arr2);

// let arr = [1, 2, 3];
// arr.forEach(num => console.log(num * 2)); 
// // Output: 2, 4, 6

// let arr = [1, 2, 3];
// let newArr = arr.map(num => num * 2);
// console.log(newArr); // [2, 4, 6]


let arr = [14, 53, 23, 44, 33];
arr.sort(function(a,b) => a-b);
    return b-a;
console.log(arr);