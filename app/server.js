"use strict";
var path = require("path");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
console.log(path.resolve("."));

app.use("/", express.static(path.resolve(".")));
server.listen(80);
