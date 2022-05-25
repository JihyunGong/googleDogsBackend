const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { name, picture, email } = req.user;
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
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
