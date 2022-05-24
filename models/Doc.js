const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  }
});

module.exports = mongoose.model("Doc", docSchema);
