class School {
  constructor(theName) {
    this.name = theName;
    this.Teachers = {};
    this.Students = {};
    this.Subjects = {};
  }

  introduction() {
    for (var x of this.Teachers) {
      console.log(
        "Hi, my name is " + x.firstName + " and I am " + x.age + " years old."
      );
    }

    for (var x of this.Students) {
      console.log(
        "Hi, my name is " + x.firstName + " and I am " + x.age + " years old."
      );
    }
  }
}

class Person {
  constructor(theFirstName, theLastName, theAge) {
    this.firstName = theFirstName;
    this.lastName = theLastName;
    this.age = theAge;
  }
}

class Student extends Person {
  constructor(theFirstName, theLastName, theAge) {
    super(theFirstName, theLastName, theAge);
    this.Subjects = [];
    this.Status = "";
  }
}

class Teacher extends Person {
  constructor(theFirstName, theLastName, theAge) {
    super(theFirstName, theLastName, theAge);
    this.Subjects = [];
  }

  expelStudent(student) {
    student.Status = "Expelled";
  }

  studentCall(subject) {
    var studentList = [];
    for (var x of Noroff.Students) {
      if (x.Subjects.includes(subject)) {
        // if the students subjects-array contains/includes the subject, it returns true
        studentList.push(x);
      }
    }
    return studentList;
  }

  orderStudents() {
    Noroff.Students.sort(function (a, b) {
      return a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0;
    });

    /*
            * Big O analysis
                The orderStudents method loops trough an array of objects using the compareFunction.
                the compareFunction is simply one if else statement that compare strings of the objects. It has no more nested iterations.
                Based on this I assume the performance of the method will grow linearly and is only affected by the size of the input array.
                This algorithm will have complexity O(N)
        */
  } // will sort the original array of objects. dont have to return.
}

class Subject {
  constructor(theName) {
    this.name = theName;
  }
}

var Noroff = new School("Noroff");

// Adds teachers to Noroff
Noroff.Teachers = [
  new Teacher("Richard", "Brown", 35),
  new Teacher("Jessie", "Williams", 38),
  new Teacher("Max", "Scott", 40),
];

// Adds pupils
Noroff.Students = [
  new Student("Hannah", "Smith", 21),
  new Student("Emma", "Miller", 25),
  new Student("Sophie", "Davis", 20),
  new Student("Billy", "Jones", 18),
  new Student("Casper", "Thompson", 19),
  new Student("Joey", "Jones", 30),
  new Student("James", "Taylor", 17),
  new Student("Charlotte", "Moore", 18),
];

// Adds subjects
Noroff.Subjects = [
  new Subject("Design"),
  new Subject("Project Methodology"),
  new Subject("HTML & CSS"),
  new Subject("Web and Communications Technology"),
  new Subject("Interaction Design"),
  new Subject("Programming Foundations"),
];

// Adds Subjects to Teachers (max 3)
// I could also have used strings here...
Noroff.Teachers[0].Subjects = [
  Noroff.Subjects[0].name,
  Noroff.Subjects[4].name,
];
Noroff.Teachers[1].Subjects = [
  Noroff.Subjects[1].name,
  Noroff.Subjects[3].name,
];
Noroff.Teachers[2].Subjects = [
  Noroff.Subjects[2].name,
  Noroff.Subjects[5].name,
];

// Add a Subject to a Pupil
Noroff.Students[0].Subjects = [Noroff.Subjects[0].name];
Noroff.Students[1].Subjects = [
  Noroff.Subjects[1].name,
  Noroff.Subjects[2].name,
];
Noroff.Students[2].Subjects = [
  Noroff.Subjects[3].name,
  Noroff.Subjects[4].name,
  Noroff.Subjects[5].name,
];
Noroff.Students[3].Subjects = [
  Noroff.Subjects[1].name,
  Noroff.Subjects[2].name,
  Noroff.Subjects[3].name,
];
Noroff.Students[4].Subjects = [
  Noroff.Subjects[4].name,
  Noroff.Subjects[5].name,
];
Noroff.Students[5].Subjects = [Noroff.Subjects[0].name];
Noroff.Students[6].Subjects = [
  Noroff.Subjects[1].name,
  Noroff.Subjects[3].name,
  Noroff.Subjects[5].name,
];
Noroff.Students[7].Subjects = [
  Noroff.Subjects[0].name,
  Noroff.Subjects[1].name,
  Noroff.Subjects[2].name,
  Noroff.Subjects[3].name,
  Noroff.Subjects[4].name,
  Noroff.Subjects[5].name,
];

// Allow a Teacher to point out all the Pupils for a Subject
Noroff.Teachers[0].studentCall(Noroff.Subjects[0].name); // lists all students that study Design

// Allow a Teacher to expel a Student from the School
Noroff.Teachers[1].expelStudent(Noroff.Students[0]); // Expells Hannah
Noroff.Students[0].Status;

// Allow a Teacher to sort a list of Students in alphabetical order.
Noroff.Teachers[1].orderStudents();

// A introduction of all the personell at the school
Noroff.introduction();
