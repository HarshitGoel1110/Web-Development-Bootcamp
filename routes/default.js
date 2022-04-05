const express = require("express");

// router is almost like app, but with some differences
const router = express.Router();


router.get("/", function (req, res) {
  res.render("index");
});

router.get("/about", function (req, res) {
  res.render("about");
});

module.exports = router;
