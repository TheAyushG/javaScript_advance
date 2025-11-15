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
// gf

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


// let arr = [14, 53, 23, 44, 33];
// arr.sort(function(a,b) => a-b);
//     return b-a;
// console.log(arr);

// const user = {
//     name : "ayush",
//     age : 20,
//     address : {
//         city : "jaipur",
//         state : "rajasthan",
//         location : {
//             lat : 123,
//             lang : 456,
//         },
//     },
// };

// let {lat, lang} = user.address.location;
// console.log(lang);
// student["full name"] = "Ravi Kumar"; // ✅
// student.course = "JavaScript"; // ✅

// let obj2 = {...obj};
// let newOne = Object.assign({netWorth : Infinity}, obj);
// console.log(newOne);

// let obj = {
//     name: "ayush",
//     age: 20,
//     email : "jiaauisj@gmail.com",
//     address : {
//         city: "jaipur",
//     },
// };

// let obj2 = {...obj};
// console.log(obj2);
// obj2.address.city = "delhi";
// console.log(obj);


// let obj = {
//     name: "ayush",
//     age: 20,
//     email : "jiaayush256@gmail.com",
//     address : {
//         city: "jaipur",
//     },
// };

// let obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj2);

// obj2.address.city = "delhi";

// console.log(obj);
// console.log(obj2);



// let obj = {
//   name: "Ayush",
//   age: 20,
//   address: {
//     city: "Jaipur",
//   },
// };

// Deep copy using JSON method
// let obj2 = JSON.parse(JSON.stringify(obj));

// obj2.address.city = "Delhi";

// console.log(obj.address.city); // Jaipur
// console.log(obj2.address.city); // Delhi


// let role = "admin";

// let user = {
//   name: "Ayush",
//   address: {
//     city: "Jaipur"
//   },
//   [role] : "salman",
// };

// console.log(user);


// let obj = {
//     name : "ayush",
//     age : 20,
//     isEnroled : true,
// }
// console.log(obj);

// let obj = {
//     name : "ayush",
//     true : "yes",
//     20 : "age",
// }

// console.log(obj[20]);

// let user = {
//     "first-name" : "ayush",
// }

// let user1 = user["first-name"];
// console.log(user1);


// let locations = {
//     city : "jaipur",
//     coordinates : {
//         lat : 23.4,
//         lng : 43.3,
//     },
// }

// let a = locations?.coordinates?.lat;
// console.log(a);


// const locations = {
// city: "jaipur",
// coordinate: {
// lat: 23.2,
// lng: 77.4,
// },
// };

// let {city} = locations;
// let {lat} = locations.coordinate;

// console.log(city);
// console.log(lat);


// let user = {
//     "first-name" : "ayush",
// };

// let {"first-name" : firstName} = user;

// console.log(firstName);


// let success = {
//     money : "10 million",
//     fame : "100 million", 
// };

// Object.entries(success).forEach(function(val){
//     console.log(val[0] + ":" + val[1]);
// })

// const original = {a :1, b :2};
// const copy = {...original};
// console.log(copy);

// let obj = {
//     name : "ayush",
//     age : 20,
//     address : {
//         city : "jaipur",
//     },
// };

// let obj2 = JSON.parse(JSON.stringify(obj));

// obj2.address.city = "delhi";

// console.log(obj.address.city);
// console.log(obj2.address.city);

// const person = {};
// console.log(person?.profile?.name);
// //output is undefine

// let age = "x";

// let person = {
//     name : "ayush",
//     [age] : 20,
// }

// console.log(person);

// let a = {score : 90};
// let b = {...a};
// b.score = 70;

// let c = JSON.parse(JSON.stringify(a));
// let 
// console.log(c.score);



// let obj = {
//   name: "Ayush",
//   address: {
//     city: "Jaipur"
//   }
// };

// let shallowCopy = { ...obj }; // or Object.assign({}, obj)
// shallowCopy.address.city = "Delhi";

// console.log(obj.address.city); // Output: Delhi (also changes)


// let obj = {
//   name: "Ayush",
//   address: {
//     city: "Jaipur"
//   }
// };

// // Deep copy using structuredClone (modern method)
// let deepCopy = structuredClone(obj);

// deepCopy.address.city = "Delhi";

// console.log(obj.address.city); // Output: Jaipur (no change)


// let abcd = document.getElementById("abcd");
// console.log(abcd);

// let abcd = document.getElementsByClassName("abcd");
// console.log(abcd);

// let abcd = document.querySelector("h1");
// console.dir(abcd);

// let abcd = document.querySelectorAll("h1");
// console.dir(abcd);




{/* <p class="text">First</p>
<p class="text">Second</p>
<script>
  let elements = document.getElementsByClassName("text");
  console.log(elements); // HTMLCollection of 2 <p> elements
</script> */}


{/* <p class="text">Hello</p>
<p class="text">World</p>
<script>
  let el = document.querySelector(".text");
  console.log(el); // First <p class="text">Hello</p>
</script> */}

{/* <p class="text">Hello</p>
<p class="text">World</p>
<script>
  let els = document.querySelectorAll(".text");
  console.log(els); // NodeList of both <p> elements
</script> */}


// let h1 = document.querySelectorAll("h1");
// console.dir(h1);

// let h1 = document.querySelector("h1");
// h1.textContent = "Hello Ayush kaise ho";

// let h1 = document.querySelector("h1");
// console.dir(h1);
// let h1 = document.querySelector("h1");
// h1.innerHTML = "ayush gurjar is a rich guy"

// let h1 = document.querySelector("h1");
// h1.innerHTML = "<i>ayush</i>";

// let a = document.querySelector("a");
// console.dir(a);

// let a = document.querySelector("a");
// a.href = "https://www.google.com";


// 50 lpa plus in tech job with in 2 year
// 100 coror net worth by 25 by doing startup

// let a = document.querySelector("a");
// a.removeAttribute("href");

// let h1 = document.createElement("h1");
// h1.textContent = "I am a Student";
// document.body.prepend(h1);
// document.body.append(h1);

// let h1 = document.querySelector("h1");
// h1.remove(h1);

// let h1 = document.createElement("h1");
// h1.textContent = "I have created a AI bot";
// let h = document.querySelector("div");
// h.prepend(h1); 

// let h1 = document.createElement("h1");
// h1.textContent = "I am amazing";
// document.querySelector("div").prepend(h1);
// document.querySelector("div").append(h1);

// let h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "blue";
// h1.style.fontFamily = "Arial";
// h1.style.textTransform = "capitalize";

// let h1 = document.querySelector("h1");
// console.dir(h1);

// let h1 = document.querySelector("h1");
// h1.classList.toggle("himi");


// let cl = document.getElementsByClassName("color");
// console.log(cl);

// let buynow = document.querySelectorAll(".buy-now");
// console.log(buynow);

// let heading = document.querySelector("#heading");
// heading.textContent = "welcome to this website";

// //HTML 
// <h1 class="heading">some important information</h1> 

// //javascript 
// let heading = document.querySelector("#heading");
// heading.textContent = "welcome to this website";

// let lis = document.querySelectorAll("li");
// lis.forEach(function(val){
//   console.log(val.textContent);
// });

// let p = document.querySelector("p");
// p.innerHTML = "<b> Update </b> by javascript";

// let img = document.querySelector("img");
// //console.log(img.src);
// console.log(img.getAttribute("src"));

// document
//   .querySelector("img")
//   .setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1762809675965-9c60ecb1d5d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8")

// let a = document.querySelector("a");
// a.href = "https://www.google.com";

// let div = document.querySelector("div");
// div.setAttribute("title", "Some info");

// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// let h1 = document.createElement("h1");
// console.log(h1);

// let h1 = document.createElement("h1");
// h1.textContent = "I am a Student";
// document.body.prepend(h1);
// console.log(h1);

// let watch = document.querySelector(".watch");
// let h = document.querySelector("div").removeChild(watch);

// let ul = document.querySelector("ul");
// let li =document.createElement("li");
// li.textContent = "New Item";
// ul.appendChild(li);
// console.log(ul);

// Apple 1
// Apple 2
// Apple 3
// Apple 4
// New Task

// let img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1762809675965-9c60ecb1d5d6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8");
// img.classList.add("size");
// document.querySelector("div").prepend(img);

// let ul = document.querySelector("ul");
// let li = document.querySelector("li");

// ul.removeChild(li);

// element.style.backgroundColor = "red";
// element.style.backgroundColor = "red";

// let li = document.querySelectorAll("ul li:nth-child(2n)");
// li.forEach(function(val){
//   val.classList.add("highlight");
// })

// let p = document.querySelectorAll("p");
// p.forEach(function(val){
//   val.style.fontSize = "38px";
// })





// let h1 = document.querySelector("h1");
// h1.addEventListener("dblclick", function(){
//   h1.style.color = "red";
// });

// function sayHello(){
//   console.log("Hello Ayush!");
// }

// let btn = document.querySelector(".btn");
// let remove = document.querySelector(".remove");

// btn.addEventListener("click", sayHello);

// remove.addEventListener("click", function(){
//   btn.removeEventListener("click", sayHello);
//   console.log("Event Listener removed");
// })

// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//   p.style.color = "red";
// })


// let input = document.querySelector("input");
// input.addEventListener("input", function(details){
//   if(details.data !== null){
//     console.log(details.data);
//   }
// })



// let sel = document.querySelector("select");
// let device = document.querySelector("#device");
// sel.addEventListener("change", function(details){
//   device.textContent = `${details.target.value} is selected`;
//   console.log(details.target.value);
// }) 

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");
// sel.addEventListener("change", function(details){
//   device.textContent = `${details.targ et.value} is selected`;
//   console.log(details.target.value);
// })


// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function(dets){
//  // h1.textContent = dets.key;
//  if(dets.key === " "){
//   h1.textContent = "SPC";
//  }

//  else{
//   h1.textContent = dets.key;
//  }
// });



// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(dets){
//     if(dets.key === " "){
//       h1.textContent = "I love you"
//     }
//     else{
//       h1.textContent = dets.key;
//     }
// })

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
  fileinp.click();
});

fileinp.addEventListener("change", function(dets){
  btn.textContent = dets.target.files[0].name;
});