const express = require('express');
const asyncHandler = require('express-async-handler');
const { getTickets } = require('../utilities/getTickets');
const router = express.Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/', (req, res) => {
    res.render("landing-page");
})


module.exports = router;