// Symbol declare

const mySym = Symbol("key1");

const User = {
  name: "Ashish",
  "full name": "Ashish Kr Pal",
  age: 19,
  [mySym]: "mykey1",
  college: "IMS",
  email: "example@gmail.com",
  islogged: "yes",
  // details: ('Monday', 'Tuesday','Wednesday','Thursday') // it will print Thursday
  details: ["Monday", "Tuesday", "Wednesday", "Thursday"],
};

// console.log(User)
// console.log(User.email) // example@gmail.com
// console.log(User.details[0]) // Monday

// console.log(User["full name"]) // Ashish Kr Pal

// console.log(User[mySym])

User.email = "js@gmail.com";
// console.log(User);

User.geet = function () {
  console.log(`Welcome to the page  '${this.name}' `);
};
console.log(User.geet())
