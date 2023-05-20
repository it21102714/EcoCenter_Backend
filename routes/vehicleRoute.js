const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicles');

// Create a new vehicle
// localhost:8070/Vehicle
/*
{
  "vehicleNumber": "ABF123",
  "driverName": "John",
  "driverCity": "Malabe",
  "telephoneNo": "0717864739",
  "emailAddress": "john@google.com"
}
*/
router.post('/', async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all vehicles
// localhost:8070/Vehicle/all
router.get('/all', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single vehicle by ID
// localhost:8070/Vehicle/64631dd61242b460436175f8
router.get('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a vehicle
// localhost:8070/Vehicle/64631dd61242b460436175f8
router.patch('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a vehicle
// localhost:8070/Vehicle/64631f11039992cef07eb54b
router.delete('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }
    res.json({ message: 'Vehicle deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
