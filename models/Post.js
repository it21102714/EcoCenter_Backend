const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Blog posts
const PostSchema = new Schema({
  createBy: {
    type: String,
    required: false,
  },

  name: {
    type: String,
    required: false,
  },

  type: {
    type: String,
    required: false,
  },

  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  createAt: {
    type: Date,
    required: false,
  },
});

const post = mongoose.model("post", PostSchema);

module.exports = post;
