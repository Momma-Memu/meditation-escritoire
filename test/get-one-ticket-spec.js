const { getOneTicket } = require('../utilities/getOneTicket');
require('dotenv').config()
const { zendesk } = require('../config');
const assert = require('assert');

describe('getOneTicket()', async () => {
    it('Should return one object containing the ticket data and an array of user data', async () => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        assert(typeof data.ticket === 'object')
        assert(Array.isArray(data.users));
    });

    it('Should return an array of user data where there is at least one element', async() => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        assert(data.users.length > 0);
    });

    it('Should not fail due to an authentication error, ie password or email is incorrect', async () => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        assert(data.error !== "Couldn't authenticate you")
    });

    it('Should return an object where the ticket id matches the id passed into the function', async () => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        let found = false;
        if(data.ticket.id === 1) found = true;
        assert.ok(found);
    });

    it('Should return an object where the ticket has a requester.id matching one of the users.id', async () => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        const requesterId = data.ticket.requester_id;
        const matches = data.users.filter(user => user.id === requesterId);

        assert(matches.length > 0);
    })
});