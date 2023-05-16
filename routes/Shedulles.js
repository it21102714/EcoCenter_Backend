const router = require("express").Router();
const { response } = require("express");
let Shedulles = require("../models/Shedulle");

//Localhost:8070/Shedulle/add

http: router.route("/add").post(async (req, res) => {
  try {
    const Sctact = req.body.Sctact;
    const Sadres = req.body.Sadres;
    const Scity = req.body.Scity;
    const Sdate = new Date().getDate();

    const newShedulles = new Shedulles({
      Sctact,
      Sadres,
      Scity,
      Sdate,
    });

    await newShedulles.save();
    res.status(200).send({ status: "Shedulles Created", post: newShedulles });
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

//localhost:8070/Shedulle

http: router.route("/").get((req, res) => {
  Shedulles.find()
    .then((Shedulles) => {
      res.json(Shedulles);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/Shedulles/update/5ffffffhf

http: router.route("/update/:id").put(async (req, res) => {
  let ShedullesId = req.params.id;
  const { Sctact, Sadres, Scity, Sdate } = req.body;

  const upadatepdetails = {
    Sctact,
    Sadres,
    Scity,
    Sdate,
  };

  return await Shedulles.findById(ShedullesId)
    .then((shedule) => {
      if (shedule) {
        return shedule
          .set(upadatepdetails)
          .save()
          .then((val) => {
            return res.status(201).json({ message: "updated sucessfully" });
          })
          .catch((err) => {
            return res.status(500).json({ err });
          });
      } else {
        return res.status(404).json({ message: "shedule not found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
});

//localhost:8070/delete/5ffffffhf

http: router.route("/delete/:id").delete(async (req, res) => {
  let ShedullesId = req.params.id;

  await Shedulles.findByIdAndDelete(ShedullesId)
    .then(() => {
      res.status(200).send({ status: "Shedulles deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete Shedulles", error: err.message });
    });
});
router.route("/get/:id").get(async (req, res) => {
  let ShedullesId = req.params.id;
  return await Shedulles.findById(ShedullesId)
    .then((Shedulles) => {
      return res
        .status(200)
        .send({ status: "Shedulles fetched", Shedulles: Shedulles });
    })
    .catch((err) => {
      console.log(err.message);
      return res
        .status(500)
        .send({ status: "Error with get Shedulles", error: err.message });
    });
});

module.exports = router;
