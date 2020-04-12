class Person {
  constructor(theName, theAge) {
    this.name = theName;
    this.age = theAge;
  }
}

var persons = [
  // this is array of new persons
  new Person("Kristoffer", 21),
  new Person("Rachael", 25),
  new Person("Kari", 17),
  new Person("Ola", 18),
  new Person("Charlie", 16),
];

function Bouncer(personQueue, agelimit) {
  var bounceList = []; // define the array
  for (var person of personQueue) {
    // for...of loop
    if (person.age < agelimit) {
      // if the person is under the age limit
      bounceList.push(person.name); // push the person to the bouncelist
    }
  }
  return bounceList; // 🚪
}
console.log(Bouncer(persons, 18));
