const express = require("express");
const path = require("path");
const { environment } = require('./config');
const homeRoute = require('./routes');
const ticketDetailsRoute = require('./routes/ticketDetails');
require('dotenv').config();

const app = express();

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoute);
app.use(ticketDetailsRoute);

module.exports = app;