// clousre concept
function Employee() {
  var name = "Sana";
  function Salary() {
    console.log("Empolyee whose salary is greater" + name);
  }

  return Salary;
}
var funcClosure = Employee();
funcClosure();

// Hosisting
console.log(university); // undefined  as the value is not initialized
university = "pucit";
console.log("var " + university); // with var we can access the value before declaration
var university;

//console.log(uni); Temporal dead zones ,whwre variables are access without decalaraion in case of let and const
university = "pucit";
// console.log("let " + uni); // with let and const hositing can be done, but we enter in dead zone, so when we access the value,it throws refernce error.
// let uni;

// Lexical scoping

// its like fuctional scope, the scope of varaible in block only,and in js scope can be decided at runtime.or duncamically.

// Impicict and explicit coericons (type conversion)
var salary = 200;
console.log("salary is" + 10 + salary + 10); // implicit
console.log(Number(salary)); // explicit

// self invoking functions or immediate invoked functions expression
(function (salary) {
  console.log("The emplyee salary is :" + salary);
})(salary);

// Arrows functions are shorter syntax functions , mostly for aysnc and await
const name = (...name) => console.log(name); // rest operator , to get rest argumnets
name("sana");

// rest and spread opreators are used with arrays , such as
const array = ["sana", "se", "pucit"];
name(...array); // spread operator to expand array

// Promises either rejected,fullfilled or pending
const myPromise = new Promise((resolve, reject) => {
  if (true) {
    //  resolve(result);
  } else {
    // reject(error);
  }
});

// async and await
// async and wait , waits for a promise to resolve and return when any of its state is achieved.
async function call() {
  try {
    const result = await myPromise();
  } catch (error) {}
}

// HOF high order functions are functions that takes one or more functions as a argument or return a function;
function add(a, b) {
  return operation(a, b, "+");
}
function operation(a, b, operation) {
  return operation == "+" ? a + b : 0;
}

console.log(add(4, 3));
