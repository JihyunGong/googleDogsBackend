require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
      });

      console.log("Mongoose On!");
  } catch (err) {
      console.log("Mnogoose Off!", err);
  }
};

connectDB();
