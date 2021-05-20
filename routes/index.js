const express = require('express');
const asyncHandler = require('express-async-handler');
const { getTickets } = require('../utilities/getTickets');
const router = express.Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);


module.exports = router;