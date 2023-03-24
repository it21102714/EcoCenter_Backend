const router = require("express").Router();
const { response } = require("express");
let DonationList = require("../models/DonationList");

//Localhost:8070/DonationList/add

http: router.post("/add", async (req, res) => {

    const Dname = req.body.Dname;
    const Dvenue = req.body.Dvenue;
    const Dstartdate = req.body.Dstartdate;
    const Denddate = req.body.Denddate;
    const Ddescription = req.body.Ddescription;

    const newDonationLists = new DonationList({
      Dname,
      Dvenue,
      Dstartdate,
      Denddate,
      Ddescription,
    });

    await newDonationLists.save();
    res
      .status(200)
      .send({ status: "DonationList Created", post: newDonationList });
 
});

//localhost:8070/DonationList

http: router.route("/").get((req, res) => {
  DonationList.find()
    .then((DonationList) => {
      res.json(DonationList);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/DonationList/update/5ffffffhf

http: router.route("/update/:id").put(async (req, res) => {
  let DonationList = req.params.id;
  const { Dname, Dvenue, Dstartdate, Denddate, Ddescription } = req.body;

  const upadatepdetails = {
    Dname,
    Dvenue,
    Dstartdate,
    Denddate,
    Ddescription,
  };

  const update = await DonationList.findByIdAndUpdate(
    DonationList,
    upadatepdetails
  )
    .then(() => {
      res.status(200).send({ status: "user updated" });
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
  let DonationListId = req.params.id;

  await DonationList.findByIdAndDelete(DonationListId)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with Delete user", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let DonationListId = req.params.id;
  const user = await DonationList.findById(DonationListId)
    .then((DonationList) => {
      res.status(200).send({ status: "user fetched", user: DonationList });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
