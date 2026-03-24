const express = require("express");
const router = express.Router();

router.get("/projetos", (req, res) => {
  res.render("projetos/index");
});

module.exports = router;