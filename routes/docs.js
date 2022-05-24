const express = require("express");
const createError = require("http-errors");
const User = require("../models/User");
const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const { name, picture, email } = req.user;
    const user = await User.findOne({ email: email });

    if (user) {
      next(createError(400, "이미 등록된 유저입니다."));
    }

    await User.create({
      displayName: name,
      photoURL: picture,
      email,
    });

    return res.json({
      docsSample: [
        {
          title: "doc1"
        },
        {
          title: "doc2"
        }
      ]
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
