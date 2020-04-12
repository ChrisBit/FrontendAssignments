var fotballClubs = ["Barcelona", "Juventus", "Liverpool FC", "Bayern München"];
console.log({ originalArray: [...fotballClubs] }); // Spread the original array since it gets mutated below

document.getElementById("switch").addEventListener("click", function () {
  fotballClubs.splice(0, fotballClubs.length); // splice modifies the array. here it removes everything
  fotballClubs.push("Ford", "Volvo", "Audi", "Nissan");
  console.log({ newArray: fotballClubs });
});
