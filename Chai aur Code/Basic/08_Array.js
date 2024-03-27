const array = [1,2,3,4,5,6,7,8,9,10]
const array1 = [11,12,13,14,15,16,17]

// console.log(array)
// console.log(array[0])

// console.log(array)
const newArray = new Array(10,9,8,7,6,5,4,3,2,1)
// console.log(newArray)

// console.log(typeof newArray)

const newArr = array.push(11)
// console.log(newArr) //11
// console.log(array)

// console.log(array.includes(1)) // true

// console.log(array.indexOf(1)) //0
// console.log(array1.join('-'))


//---------------------slice(), splice()---------------

console.log(array)
console.log(array.slice(1,3))   //[2,3] // last index does not include

console.log(array.splice(1,3)) // [2,3,4] // last index value included and cut array of value
console.log(array)

const data = ['a','b','c']
// console.log(data)

// console.log(Object.keys(data)) //[0,1,2]

const result = Object.keys(data)

for (const key of result) {
    // console.log(key)
    
}
// console.log(array1.reverse())

// ---Concat

// const resultArray = array.concat(array1)
// console.log(resultArray)
// 
// spread operator
// console.log(...array, ...array1)

// -------------Checking array 

// console.log(Array.isArray('Ashish')) // false
//---- how to make array
// console.log(Array.from('Ashish')) // false