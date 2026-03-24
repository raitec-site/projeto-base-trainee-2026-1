const express = require("express");
const router = express.Router();

router.get("/processo-seletivo", (req, res) => {
  res.render("processo-seletivo/processo-seletivo");
});

module.exports = router;