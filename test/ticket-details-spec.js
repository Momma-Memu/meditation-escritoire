const { getOneTicket } = require('../utilities/getOneTicket');
require('dotenv').config()
const { zendesk } = require('../config');
const assert = require('assert');

describe('getOneTicket()', async () => {
    it('Should return an array with at least one object', async () => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        assert(Array.isArray(data.results))
        assert(typeof data.results[0] === 'object')
    });

    it('Should return an array of one object where the length of the array is one or more', async() => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        assert(data.results.length > 0);
    });

    it('Should not fail do to an authentication error, ie password or email is incorrect', async () => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        assert(data.error !== "Couldn't authenticate you")
    });

    it('Should return an array containing one object with the correct id, passed into the function', async () => {
        const data = await getOneTicket(zendesk.email, zendesk.password, 1);
        let found = false;
        data.results.forEach(ticket => {
            if(ticket.id === 1){
                found = true;
            }
        });
        assert.ok(found);
    });
});