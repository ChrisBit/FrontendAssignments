function myShuffle(array) {
  var temp;
  var currentIndex;
  var currentArrayLength = array.length;

  while (currentArrayLength > 0) {
    currentIndex = Math.floor(Math.random() * currentArrayLength); // returns a random index-number between 0 (inclusive) and the amount of values in the array (exclusive the last index, since array starts at 0)
    currentArrayLength--;

    temp = array[currentArrayLength]; // the last index value is in the tmp var
    array[currentArrayLength] = array[currentIndex]; // the value of the last index is now on the random index
    array[currentIndex] = temp; // the randomly picked index value is set to the value of the last index
  }

  return array;
}
myShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
myShuffle(["car", "bus", "bike", "jaywalker"]); // works with strings too
