const express = require("express");
const path = require("path");
const { environment } = require('./config');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(routes);

module.exports = app;