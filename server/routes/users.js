const path = require("path");
const express = require("express");
const router = express.Router();

// Register
router.get(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;