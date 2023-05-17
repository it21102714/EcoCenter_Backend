const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const URL =
  "mongodb+srv://kavindaliyanage:kavinda123@shedulle.rxuviyd.mongodb.net/test?retryWrites=true&w=majority";

try {
  mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false
  });
} catch (err) {
  console.log(err);
}

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Conection Success!");
});

const ShedulleRouter = require("./routes/Shedulles.js");
const postRouterRouter = require("./routes/postRouter.js");
const DonationsListRouter = require("./routes/DonationsList.js");
const vehicleRouteRouter = require("./routes/vehicleRoute.js");

app.use("/Shedulles", ShedulleRouter);

app.use("/post", postRouterRouter);

app.use("/Donation", DonationsListRouter);

app.use("/Vehicle", vehicleRouteRouter);

app.listen(PORT, () => {
  console.log(`Server is up and runing on port number : ${PORT}`);
});
