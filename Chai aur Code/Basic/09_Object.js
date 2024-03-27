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
// console.log(User.geet());
// --------------------------------------------------------------------------------

//--------------------------------2nd Part Videos-------------------------

const user = {
  name: "Ashish",
  middleName: "Kumar",
  fullName: {
    complete: "Ashish kumar pal",
    address: {
      location: "Ghz",
    },
  },
};


// console.log(user.fullName.complete)

const obj ={1:'A', 2: 'B', 3: 'C'}

const obj1 = {4:'d', 6:'e', 7:'f'}

const allObj = Object.assign({}, obj, obj1)
// console.log(allObj)


// ------------------------------------3rd Part videos--------------------


const course = {
  courseName: 'JS hindi',
  courseInstructior: 'Hitesh',
  price: 'free'
}

// console.log(course.courseInstructior) // Hitesh

// -----------------OR we can destructure of code--------------
// cosnt {} = objectName
const {courseInstructior,courseName,price} = course; 

// console.log(courseInstructior) //Hitesh

// console.log(courseName)
// console.log(price)

// Or we can write

// console.log(courseName,price,courseInstructior)


// array Object 

// [
//   {},
//   {},
//   {},
//   {},
//   {},
// ]

// jsone examle "Json will be written in string format "key" and "values" both exmaple "

// [
//   {
//     'name': 'ashish',
//     'roll': 2
//   },
//   {
//     'gender': 'male'
//   }
// ]
