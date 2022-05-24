const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);