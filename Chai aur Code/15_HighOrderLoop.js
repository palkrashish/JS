const array = [1, 2, 3, 4, 5, 6];

for (const value of array) {
  //   console.log(value);
}

const greetings = "Hello World JS";

for (const greet of greetings) {
  //   console.log(greet);
}

const myObject = {
  js: "javasscipt",
  cp: "c++",
  java: "java",
  node: "node.js",
};

// for iteratior

for (const key in myObject) {
  console.log(`${key} and fullName of : ${myObject[key]} `);
}
