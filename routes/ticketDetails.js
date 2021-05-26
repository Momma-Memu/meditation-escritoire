const express = require('express');
const asyncHandler = require('express-async-handler');
const { getOneTicket } = require('../utilities/getOneTicket');
const router = express.Router();
const { zendesk } = require('../config');



router.get('/details/:id', asyncHandler(async(req, res) => {
    const data = await getOneTicket(zendesk.email, zendesk.password, req.params.id);

    res.render("ticket-details", {ticket: data})
}));



module.exports = router;