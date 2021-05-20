const fetch = require('node-fetch');
const { zendesk } = require('../config');
console.log(zendesk)
const string = `${zendesk.email}:${zendesk.password}`
const encoded = Buffer.from(string).toString('base64');


const getTickets = async () => {
    const res = await fetch("https://miahbarnes.zendesk.com/api/v2/tickets.json?", {
        headers: { "Content-Type":"application/json", "Authorization":`Basic ${encoded}` },
        credentials: encoded,
    })
    const data =  await res.json();
    console.log(data)
    return data;
}
// getTickets();

/*
    Working example of fetching tickets.
    response data may need to be repeated for all tickets, ie below
    https://yourdomain.zendesk.com/api/v2/tickets.json?page=2
*/
module.exports = {
    getTickets,
}