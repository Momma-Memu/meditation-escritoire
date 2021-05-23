const { getTickets } = require('../utilities/getTickets');
require('dotenv').config()
const { zendesk } = require('../config');
const assert = require('assert');

describe('getTickets()', async () => {
    it('Should return an array of obejcts', async () => {
        const data = await getTickets(zendesk.email, zendesk.password);
        assert(Array.isArray(data.tickets))
        assert(typeof data.tickets[0] === 'object')
    });

    it('Should return an array of object where the length of the array is greater than one', async() => {
        const data = await getTickets(zendesk.email, zendesk.password);
        assert(data.tickets.length > 0);
    });

    it('Should not fail due to an authentication error, ie password or email is incorrect', async () => {
        const data = await getTickets(zendesk.email, zendesk.password);
        assert(data.error !== "Couldn't authenticate you")
    });

    it('Should return an object, with a key "users" where "users" is an array with at least one element', async () => {
        const data = await getTickets(zendesk.email, zendesk.password);
        assert(Array.isArray(data.users));
        assert(data.users.length > 0);
    });
});