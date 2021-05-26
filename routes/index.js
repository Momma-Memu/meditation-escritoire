const express = require('express');
const asyncHandler = require('express-async-handler');
const { getTickets } = require('../utilities/getTickets');
const router = express.Router();
const { zendesk } = require('../config');


router.get('/', asyncHandler(async(req, res) => {
    const data = await getTickets(zendesk.email, zendesk.password);

    res.render("landing-page", {tickets: data });
}))

module.exports = router;