const router = require("express").Router();
const { response } = require("express");
let post = require(".../models/post");

//Localhost:8070/post/add

http: router.post("/add", async (req, res) => {
  try {
    const createBy = req.body.createBy;
    const name = req.body.name;
    const type = req.body.type;
    const description = req.body.description;
    const image = req.body.image;
    const createAt = new Date().getDate();

    const newpost = new post({
      createBy,
      name,
      type,
      description,
      image,
      createAt,
    });

    await newpost.save();
    res.status(200).send({ status: "post Created", post: newpost });
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

//localhost:8070/post

http: router.route("/").get((req, res) => {
  post
    .find()
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
    });
});

//localhost:8070/post/update/5ffffffhf

http: router.route("/update/:id").put(async (req, res) => {
  let postId = req.params.id;
  const { createBy, name, type, description, image } = req.body;

  const upadatepdetails = {
    createBy,
    name,
    type,
    description,
    image,
  };

  const update = await post
    .findByIdAndUpdate(postId, upadatepdetails)
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
  let postId = req.params.id;

  await post
    .findByIdAndDelete(postId)
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
  let postId = req.params.id;
  const user = await post
    .findById(postId)
    .then((post) => {
      res.status(200).send({ status: "user fetched", user: post });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
