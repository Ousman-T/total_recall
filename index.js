// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
// 1- const oldVariable = value; 2- let newVaraible = newValue; 3- let newVariable = oldVariable; 4- declare is to create a new variable without assigning value, assign is to assign the variable a value, define is to call the variable. 5- pseudocoding is the practice of understanding the logic and methods used before implementing any code. 6- 60-70% should be spent formulating a plan. 40-30% should be spent executing.
// B. Strings
let firstVariable = "Hello world";
firstVariable = 23;
let secondVariable = firstVariable;
console.log(secondVariable);
console.log(firstVariable);
secondVariable = "Yessir!"
console.log(secondVariable);
23;
let myName = "Ousman";
console.log(`Hello, my name is ${myName}`);
// C. Booleans
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a < b && c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');
// D. The Farm
let animal = "cow";
if (animal === "cow"){
    console.log("moooo");
}else{
    console.log("Hey, you are not a cow!");
}
animal = "cat";
if (animal === "cow"){
    console.log("moooo");
}else{
    console.log("Hey, you are not a cow!");
}
console.log(animal);

// E. Driver's Ed
const personAge = 16;
let age = 16;
if(personAge >= 16){
    console.log("Here are the keys!");
}else{
    console.log("Sorry young buck!");
}
console.log(personAge);






// II. Loops
// A. The Basics
for(let i = 0; i <= 10; i++){
    console.log(i);
}
for(let j = 10; j <= 400; j++){
    console.log(j);
}
for(let k = 12; k <= 4000; k = k+3){
    console.log(k);
}
// B. Get even
for(let l = 0; l < 100; l++){
    if(l % 2 === 0){
        console.log(`${l} is an even number`);
    }else{
        console.log(`${l} is an odd number`);
    }
}
// C. Give me Five
for(let m = 0; m <= 100; m++)
if(m % 5 === 0){
    console.log(`I found a ${m}. Hight five!`);
    if(m % 3 === 0){
        console.log(`I found a ${m}. Three is a crowd`);
    }else{
        console.log(m);
    }
}
// D. Savings account
//_____________________________________________________________
bank_account = 0 
for(let i = 0; i <= 10; i++){
    bank_account += i;
} console.log(bank_account);
bonus_bank_acc = 0;
for(let j = 0; j <= 100; j++){
    bonus_bank_acc += j * 2;
}console.log(bonus_bank_acc);







// III. Arrays & Control Flow
// A. Talk about it: 
// 1- index, 2- yes, 3- shopping list
// B. Easy Does It
let quotes = ["Hooray", "Hoorah", "Heya"]
console.log(quotes);
// C. Accessing elements
const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);
randomThings[2] = "World";
console.log(randomThings[2]);
// D. Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2]);
ourClass[4] = "Octocat";
console.log(ourClass[4]);
ourClass.push = "Cloud City";
console.log(ourClass);
// E. Mix It Up
const myArray = [5, 10, 500, 20];
myArray.push("Aegeon", "my array");
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);
// reverse() reversed the order of the array.
// F. Biggie Smalls
let biggieSmalls = 2;
if(biggieSmalls < 100){
    console.log("little number");
} if(biggieSmalls >= 100){
    console.log("big number");
}
console.log(biggieSmalls);

// G. Monkey in the Middle
monkey = 2;
if(monkey < 5){
    console.log("little number");
}else if(monkey > 10){
    console.log("big number");
}else{
    console.log("monkey!");
}console.log(monkey);
// H. What's in Your Closet?
//_____________________________________________________________








// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________






// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________


// Extra
