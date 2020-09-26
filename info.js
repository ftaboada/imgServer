const express = require("express");
const info = express();
const { promisifiedRequest } = require("./utils");

info.get("/", (req, res) => {
  const { galeria, subgaleria } = req.query;
  if (subgaleria) {
    promisifiedRequest(`/public/img/${galeria}/${subgaleria}`).then((data) => {
      res.status(201).json(data);
    });
  }
  if (!subgaleria) {
    promisifiedRequest(`/public/img/${galeria}`).then((data) => {
      res.status(201).json(data);
    });
  }
});

module.exports = info;
