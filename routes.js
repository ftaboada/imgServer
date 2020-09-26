const express = require("express");
const router = express();

router.get("/", (req, res) => {
  res.status(200).json({ saludo: "Hello, Digital Dreamers" });
});
module.exports = router;
