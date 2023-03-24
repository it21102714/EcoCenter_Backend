// vehicle.js

const vehicles = []; // array to store vehicle objects

class Vehicle {
  constructor(number, brand, description, city) {
    this.number = number; //vehicle number
    this.brand = brand; //vehicle brand
    this.description = description; //vehicle brand
    this.city = city; //driver's city
  }

  static getAll() {
    return vehicles;
  }

  static getOne(number) {

    return vehicles.find(v => v.number === number);

  }

  static add(vehicle) {
    vehicles.push(vehicle);
  }

  static update(number, newVehicle) {

    const index = vehicles.findIndex((v) => v.number === number);

    if (index !== -1) {
      vehicles[index] = newVehicle;
      return true;
    }
    return false;
  }

  static delete(number) {

    const index = vehicles.findIndex((v) => v.number === number);

    if (index !== -1) {
      vehicles.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = Vehicle;
