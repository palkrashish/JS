function addition(num, num1) {
  //   console.log("Additon:", num + num1);

  return num + num1;
}

// addition(1, 2);

// console.log(addition(1,2))

function sayHello(user = "Guest") {
  if (!user) {
    // console.log("Kindly inpur user name");
    return;
  }
  return ` ${user} loging successfully. `;
}
// console.log(sayHello('Ashish'));
// console.log(sayHello());

// ----------------------------------2nd Video function-------------------

function cardItemAdditon(val1, ...val) {
  return val;
}

// console.log(cardItemAdditon(1,12,13,14,15,16,17))

const detailsofHotel = {
  hotelPrice: 1933,
  hotelName: "Taj",
};

function hotelBooking(anyObj) {
  console.log(
    // `Welcome to booking hotel ${anyObj.hotelName} and the price ${anyObj.hotelPrice} `
  );
}

// hotelBooking(detailsofHotel);

// we can do like this as well
hotelBooking({
  hotelName: 'R K hotel',
  hotelPrice: 2999

})
// function with Array 

const arrayNumber = [11,12,13,14]

function newArrayNumber (getArrray){

  return getArrray
}

// console.log(newArrayNumber(arrayNumber))

console.log(newArrayNumber([15,16,17,18]))


