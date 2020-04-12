class VehicleWithTwoWheels {
  constructor(theTopSpeed) {
    this.topSpeed = theTopSpeed;
  }

  getTopSpeed() {
    return "Hopefully faster than you can walk";
  }
}

class Bicycle extends VehicleWithTwoWheels {
  constructor(name, theColor) {
    super(20); // average speed of a bike on the road
    this.name = name;
    this.color = theColor;
  }

  getTopSpeed() {
    return this.topSpeed + " km/h";
  }
}

class Motorbike extends VehicleWithTwoWheels {
  constructor(topSpeed, theType) {
    super(topSpeed);
    this.type = theType;
  }

  getTopSpeed() {
    return this.topSpeed + " km/h";
  }
}

let v = new VehicleWithTwoWheels(15); // 🛒
let b = new Bicycle("My cool bike", "red");
let m = new Motorbike(160, "Cruiser");
console.log(v.getTopSpeed());
console.log(b.getTopSpeed());
console.log(m.getTopSpeed());
