const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = number.filter((num) => {
  return num >= 5;
});

// console.log(result)

const books = [
  {
    bookName: "bookOne",
    genere: "history",
    published: 1992,
  },
  {
    bookName: "bookTwo",
    genere: "Math",
    published: 1982,
  },
  {
    bookName: "bookThree",
    genere: "history",
    published: 1999,
  },
];

const booksRes = books.filter((BN) => {
  return BN.genere === "Math";
});

const booksRes1 = books.filter((BN) => {
  return BN.published > 1995;
});
// console.log(booksRes1);
// console.log(booksRes)

// -------------------------------Map Example ---------------
const numRes = number.map((num) => {
  return num * 2;
});
// console.log(numRes);

// We can use multiple map filter reduce

const numRes1 = number.map((num) => num * 10).map((num) => num + 2);
// console.log(numRes1);

// ----------------Reduce-------------------------

// const numRes2 = number.reduce(function (acc, curr) {
//     console.log(` Accumalator value  ${acc} and Current Value ${curr} `)
//   return acc + curr;
// }, 0);

const numRes2 = number.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log('Sum of Number :-',numRes2);
