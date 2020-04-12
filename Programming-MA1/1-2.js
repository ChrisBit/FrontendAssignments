// modified version of oddOrEven that returns the parity
function returnOddOrEven(number) {
  if (typeof number == "number") {
    if (number % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Not a number!";
  }
}

function mapMyNumbers(arrayOfNumbers) {
  var mapOfNumbers = {}; // define an object. this is the map.
  for (let x = 0; x < arrayOfNumbers.length; x++) {
    // for loop, goes trough the array
    mapOfNumbers[arrayOfNumbers[x]] = returnOddOrEven(arrayOfNumbers[x]); // assigns parity to each key in the array
  }
  return mapOfNumbers;
}
let myArray = [1, 2, 4, 5, 6];
console.log(mapMyNumbers(myArray));
console.log(mapMyNumbers([1, 2, "cow", 3]));
