function chessboard(size) {
  let board = ""; // this is the empty chessboard
  for (var x = 0; x < size; x++) {
    // for loops that goes up to the size (column)
    for (var y = 0; y < size; y++) {
      // for loops that goes up to the size (row)
      if ((x + y) % 2 == 0) {
        // each other one should be white (starts with black). so this checks if the field on the chessboard is divisible by 2.
        board += "#"; // black
      } else {
        board += " "; // white
      }
    }
    board += "\n"; // new line
  }
  return board;
}
console.log(chessboard(5));
