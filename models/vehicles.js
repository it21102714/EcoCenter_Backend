const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
    unique: true
  },
  driverName: {
    type: String,
    required: true
  },
  driverCity: {
    type: String,
    required: true
  },
  telephoneNo: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
