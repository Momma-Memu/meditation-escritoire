const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { getTickets } = require('../../utilities/getTickets');


router.get('/tickets', asyncHandler(async (req, res) => {
    const data = await getTickets();

    res.json(data)
}));

module.exports = router;