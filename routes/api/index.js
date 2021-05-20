const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { getTickets } = require('../../utilities/getTickets');
const { zendesk } = require('../../config');


router.get('/tickets', asyncHandler(async (req, res) => {
    const data = await getTickets(zendesk.email, zendesk.password);

    res.json(data.tickets)
}));

module.exports = router;