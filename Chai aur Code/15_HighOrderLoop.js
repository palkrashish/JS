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
  // console.log(`${key} and fullName of : ${myObject[key]} `);
}


const studentName = ['Ashish', 'Sunny', 'Marray', 'Rahul']

studentName.forEach( (name,index, arr)=>{ // in forEach we have 3 parameter.
  // console.log(name)
  // console.log(name,index,arr)

} )

const collegeName =[
  {
    collegeNameDelhi: 'DPS',
    collegStrengh: 100
  },
  {
    collegeNameDelhi: 'PSB',
    collegStrengh: 123
  },
]

collegeName.forEach( (list)=>{
  console.log(`${list.collegeNameDelhi} and Student strength ${list.collegStrengh} `)
} )