const morgan = require("morgan");
const express = require("express");
const port = 5490;
const info = require("./info");
const app = express();
var bodyParser = require("body-parser");
const options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};
app.use(morgan("tiny"));

app.use(express.static("public", options));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.use(bodyParser.json());

app.use("/info", info);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port} \n \n Dn4gual`);
});
