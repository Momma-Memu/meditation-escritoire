const express = require('express');
const asyncHandler = require('express-async-handler');
const { getTickets } = require('../utilities/getTickets');
const { getOneTicket } = require('../utilities/getOneTicket');
const router = express.Router();
const { zendesk } = require('../config');



router.get('/', asyncHandler(async(req, res) => {
    const data = await getTickets(zendesk.email, zendesk.password);
    console.log('===============', "you went to the wrong route you hussy")
    res.render("landing-page", {tickets: data.tickets});
}))

router.get('/details/:id', asyncHandler(async(req, res) => {
    const data = await getOneTicket(zendesk.email, zendesk.password, req.params.id);

    res.render("ticket-details", {ticket: data})
}));


module.exports = router;