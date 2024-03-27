let userName = 'Ashish-Kr-Pal'
console.log(userName)

console.log(`My name is '${userName}' and lives in Delhi `)

// another way string declare

let anotherWay = new String('Ashish')
// console.log(anotherWay.__proto__)

console.log(userName.length) //6
console.log(userName.toUpperCase()) // ASHISH
console.log(userName) //ashish

// charAt() 
console.log(userName.charAt(0))
//lastIndexOf()
console.log(userName.lastIndexOf('h'))

let name = '      Ashish           '

console.log(name)
console.log(name.trim())

console.log(userName.includes('sh')) //true

console.log(userName.slice(0,3)) //Ash
let array = [1,2,3,4,5,6]

console.log(array.splice(0,2)) //[1,2]

console.log(userName.split('-')) //[ 'Ashish', 'Kr', 'Pal' ]

