const express = require("express");
const path = require("path");
const { environment } = require('./config');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")))
app.use(routes);

module.exports = app;