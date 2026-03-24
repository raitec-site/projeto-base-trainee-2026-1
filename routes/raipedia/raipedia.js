const express = require("express");
const router = express.Router();

router.get("/raipedia", (req, res) => {
  res.render("raipedia/index");
});

module.exports = router;