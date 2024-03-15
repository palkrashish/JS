function One() {
  const name = "Ashish";
  function Two() {
    const fullName = "Ashish Kr Pal";
    console.log(name); // Ashish
  }
  //   console.log(fullName) error
  Two();
}
// console.log(name); error
One();
