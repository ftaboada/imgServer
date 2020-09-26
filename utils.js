"use strict";
const sizeOf = require("image-size");
const fs = require("fs");

var utils = {};

utils.promisifiedRequest = function (url) {
  return new Promise((resolve, reject) => {
    fs.readdir(__dirname + url, (err, files) => {
      let directoryFiles = [];
      if (err) {
        throw {
          error: "BAD PATH",
        };
      }
      files.forEach((file) => {
        if (file !== "Thumbs") {
          const path = url.replace("/public", "");
          directoryFiles.push({
            id: file.replace(/\D/g, ""),
            alt: file.replace(".jpg", ""),
            size: sizeOf(__dirname + url + "/" + file),
            thumbSrc: "http://" + path + "/Thumbs/thumb" + file,
            src: `http://localhost:5490${path}/${file}`,
          });
        }
      });
      directoryFiles.sort((a, b) => {
        return a.id - b.id;
      });
      if (err) reject(err);
      else resolve(directoryFiles);
    });
  });
};
//prettier-ignore

module.exports = utils;
