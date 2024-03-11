const arrayOne = ['Ashish', 'Mohan']

const arrayTwo = ['Jay', 'Ram', 'Shyam','Anant','Ramveer']

// arrayOne.push(arrayTwo)

// console.log(arrayOne)


//concat

const newArr = arrayOne.concat(arrayTwo)
// console.log(newArr)

// Or  (...) spread operator


const allArray = [...arrayOne, ...arrayTwo]
// console.log(allArray)

const numberArray = [1,2,3,4,[5,6,7,9,10],[11],[12]]
// Multiple array to give a single output of array
const newNumberOfArray = numberArray.flat(Infinity)
// console.log(newNumberOfArray)

// array checkcing


console.log(Array.isArray('Ashish')) // Array checking, you must write Array.isArray() if you change Variable any other doesn't work


console.log(Array.from('Ashish kumar pal'))

