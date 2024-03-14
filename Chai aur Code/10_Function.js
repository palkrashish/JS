function addition(num, num1) {
  //   console.log("Additon:", num + num1);

  return num + num1;
}

// addition(1, 2);

// console.log(addition(1,2))

function sayHello(user) {
  if (!user) {
    console.log("Kindly inpur user name");
    return
  }
  return ` ${user} loging successfully. `;
}
// console.log(sayHello('Ashish'));
console.log(sayHello());
