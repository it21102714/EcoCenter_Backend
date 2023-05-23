const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DonationListSchema = new Schema({
  createBy: {
    type: String,
    required: false,
  },
  //add Dname
  Dname: {
    type: String,
    required: true,
  },

  Dvenue: {
    type: String,
    required: true,
    unique: true,
  },

  Dstartdate: {
    type: Date,
    default: Date.now,
  },
  Denddate: {
    type: Date,
    default: Date.now,
  },
  Ddescription: {
    type: String,
    default: Date.now,
  },
});

const User = mongoose.model("DonationList", DonationListSchema);

module.exports = User;
