const router = require("express").Router();
const { response } = require("express");
let Shedulle = require("../models/Shedulle");

//Localhost:8070/Shedulle/add

http: router.route("/add").post(async (req, res) => {
  try {
    const Sctact = req.body.Sctact;
    const Sadres = req.body.Sadres;
    const Scity = req.body.Scity;
    const Sdate = new Date().getDate();

    const newShedulle = new Shedulle({
      Sctact,
      Sadres,
      Scity,
      Sdate,
    });

    await newShedulle.save();
    res.status(200).send({ status: "Shedulle Created", post: newShedulle });
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

//localhost:8070/Shedulle

http: router.route("/").get((req, res) => {
  Shedulle.find()
    .then((Shedulle) => {
      res.json(Shedulle);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/Shedulle/update/5ffffffhf

http: router.route("/update/:id").put(async (req, res) => {
  let ShedulleId = req.params.id;
  const { Sctact, Sadres, Scity, Sdate } = req.body;

  const upadatepdetails = {
    Sctact,
    Sadres,
    Scity,
    Sdate,
  };

  const update = await Shedulle.findByIdAndUpdate(ShedulleId, upadatepdetails)
    .then(() => {
      res.status(200).send({ status: "Shedulle updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating date", error: err.message });
    });
});

//localhost:8070/delete/5ffffffhf

http: router.route("/delete/:id").delete(async (req, res) => {
  let ShedulleId = req.params.id;

  await Shedulle.findByIdAndDelete(ShedulleId)
    .then(() => {
      res.status(200).send({ status: "Shedulle deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete Shedulle", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let ShedulleId = req.params.id;
  const Shedulle = await Shedulle.findById(ShedulleId)
    .then((Shedulle) => {
      res.status(200).send({ status: "Shedulle fetched", Shedulle: Shedulle });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Shedulle", error: err.message });
    });
});

module.exports = router;
