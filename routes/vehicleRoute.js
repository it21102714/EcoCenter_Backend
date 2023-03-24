// vehicleRoute.js

const express = require("express");
const Vehicle = require("../models/vehicles");

const router = express.Router();

router.get("/", (req, res) => {
  const vehicles = Vehicle.getAll();
  res.render("index", { vehicles });
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/", (req, res) => {
  const { number, brand, description, city } = req.body;
  const vehicle = new Vehicle(number, brand, description, city);
  Vehicle.add(vehicle);
  res.redirect("/");
});

router.get("/:number/edit", (req, res) => {
  const vehicle = Vehicle.getOne(req.params.number);
  if (vehicle) {
    res.render("edit", { vehicle });
  } else {
    res.redirect("/");
  }
});

router.patch("/:number", (req, res) => {
  const { number, brand, description, city } = req.body;
  const newVehicle = new Vehicle(number, brand, description, city);
  if (Vehicle.update(req.params.number, newVehicle)) {
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

router.delete("/:number", (req, res) => {
  if (Vehicle.delete(req.params.number)) {
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
