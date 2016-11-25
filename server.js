"use strict";
var path = require("path");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
console.log(path.resolve("./www"));

app.use("/", express.static(path.resolve(".")));
server.listen(80);
