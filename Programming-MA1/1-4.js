class Person {
  constructor(theName, theAge) {
    this.name = theName;
    this.age = theAge;
  }
  speak() {
    // 🗣 method
    console.log("I am " + this.age + " years");
  }
}
let me = new Person("Kristoffer", 21); // make new person
me.speak(); // it talks!
