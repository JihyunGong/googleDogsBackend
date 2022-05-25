const express = require("express");
const createError = require("http-errors");
const User = require("../models/User");
const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const { name, picture, email } = req.user;
    const user = await User.findOne({ email: email });

    if (!user) {
      await User.create({
        displayName: name,
        photoURL: picture,
        email,
      });
    }

    return res.json({
      myDocsSample: [
        {
          data: "doc1"
        },
        {
          data: "doc2"
        }
      ]
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
