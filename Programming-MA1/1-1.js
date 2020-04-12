function oddOrEven(number) {
  if (typeof number == "number") {
    // checks if input is number
    if (number % 2 == 0) {
      // if devideable with two.
      console.log("Even"); // its even
    } else {
      console.log("Odd"); // else it is odd
    }
  } else {
    console.log("Not a number!"); // if not a number, tell 'em
  }
}
oddOrEven(10);
