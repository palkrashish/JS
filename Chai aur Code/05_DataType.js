// Primitive - (Call by value hota hai)
//  7-  String, Number, Boolean, BigInt , null {empty}, undefined, Symbol -{kisi value ko unique banane ke liye use}

// Non-primitive ( reference type or Call by reference)

//memory allocation in references

// Array, Object

// Example of Symbol

let id = Symbol("123");
let anotherId = Symbol("123");

// console.log(id === anotherId) // false
// -----------------------------------------------------

let heroName = ["Mahesh", "RajaniKant", "Surya"]; // array declarations
// console.log(heroName)
let moviesName = {
  moviesYear: 2013,
  Hero: "SanjayDat",
};

// console.log(moviesName)
// -------------------------------------------

// const sayHello = function () {
//     console.log('Welcome to the function')
// };

// OR

const sayHello = () => {
  console.log("Declartion of  using array function AKA fat arrow");
};
sayHello();
