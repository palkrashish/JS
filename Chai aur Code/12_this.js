const user = {
  name: "Ashish",
  middleName: "kumar",
  welcome: function () {
    // console.log(`${this.name}, Welcome to my page`)
    // console.log(this)
  },
};

// this keyword use for current object context. In the browser this keyword denoted the window object and in the node environment this keyword denoted '{}' empty object

user.welcome();
// console.log(this)

function exmaple() {
  const name = "Ashish kr pal";
  // console.log(name) // Ashish kr pal
  // console.log(this.name) // undefined
}
exmaple();

// declartion of arrow function

const nameFul = () => {
  let userName = "Ashish Pal";
  console.log(userName); // Ashish Pal
  // console.log(this.userName) // undefined
};

// nameFul()

// Arrow function declarations  '() =>{}'

const addTwo = (num1, num2) => {
  return num1 + num2;
};

// console.log(addTwo(13, 34));
// Example of implicit (means that you are returning only one statements)
// const addTwoOther = (num1, num2) => num1 +num2 // OR
// const addTwoOther = (num1, num2) => (num1 +num2)
// console.log(addTwoOther(13, 34));

// If you want to return object then
const addTwoOther = (num1, num2) => ({ user: "Ashish" });
// console.log(addTwoOther(13, 34)); //{ user: 'Ashish' }

// 24th video IIFE

// function chai (){
//     console.log('Lets have a cup of tea')
// }
// chai()
// example IIFE ()()
(function chai() {
  console.log("Lets have a cup of tea");
})();

(()=>{
    console.log(`Using arrow function we can use IIFE`)
})()
