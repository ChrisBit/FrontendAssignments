// short, modified class from last task
class VehicleWithTwoWheels {
  constructor(theTopSpeed, theType) {
    this.topSpeed = theTopSpeed;
    this.type = theType;
  }
}

function orderVehicles(arrayOfVehicles) {
  arrayOfVehicles.sort(function (a, b) {
    // this is the Array.prototype.sort method with a compareFunction
    // i read up on it here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    return b.topSpeed - a.topSpeed; // ascending
  });
  return arrayOfVehicles;
}

var vehicles = [
  new VehicleWithTwoWheels(70, "Moped"),
  new VehicleWithTwoWheels(95, "Trimmed Moped"),
  new VehicleWithTwoWheels(150, "Old car"),
  new VehicleWithTwoWheels(50, "Scooter"),
  new VehicleWithTwoWheels(400, "🏎"),
];
orderVehicles(vehicles);
