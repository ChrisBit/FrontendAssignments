//Level 1.1
var organgeVar = "orange";
if (organgeVar === "orange") {
  console.log("Wazzup");
} else {
  console.log("That is not orange.");
}

//Level 1.2
var thisMonth = "March";
switch (thisMonth) {
  case "Januray":
    console.log("31 days");
    break;
  case "February":
    console.log("28 or 29 days");
    break;
  case "March":
    console.log("31 days");
    break;
  case "April":
    console.log("30 days");
    break;
  case "May":
    console.log("31 days");
    break;
  case "June":
    console.log("30 days");
    break;
  case "July":
    console.log("31 days");
    break;
  case "August":
    console.log("31 days");
    break;
  case "September":
    console.log("30 days");
    break;
  case "October":
    console.log("31 days");
    break;
  case "November":
    console.log("30 days");
    break;
  case "December":
    console.log("31 days");
    break;
  default:
    console.log("Not a valid month");
    break;
}

//Level 1.3
var People = [
  {
    name: "Morris",
    age: "40",
    hobbies: ["Dance", "Drama", "Magic", "Gardening"],
  },
  {
    name: "Jørgen",
    age: "20",
    hobbies: ["Ghost hunting", "Geocaching", "Parkour"],
  },
  {
    name: "Elisabeth",
    age: "15",
    hobbies: ["Iphone"],
  },
];

//Level 1.4
for (var o of People) {
  console.log(o.name + "'s hobbies are:");
  for (var h of o.hobbies) {
    console.log(h); // outputs each hobby on a new line
  }
  console.log("\n"); // new line between each person
}

//Level 1.5
for (var i = 1; i < 11; i++) {
  console.log(i); // counts 1-10 and stops
}

//Level 1.6
try {
  abc(); // i fail because i dont exist
} catch (error) {
  console.log(error); // logs the error
}
// v2
try {
  console.log("Doing this");
  console.log("Doing that");
  throw "Custom error";
  console.log("Won´t be doing this");
} catch (error) {
  console.log(error);
} finally {
  console.log("I execute regardless");
}
