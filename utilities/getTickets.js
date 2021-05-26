const fetch = require('node-fetch');

const getTickets = async (email, password) => {
    const string = `${email}:${password}`
    const encoded = Buffer.from(string).toString('base64');
    const res = await fetch(`https://miahbarnes.zendesk.com/api/v2/tickets.json?include=users`, {
        headers: { "Content-Type":"application/json", "Authorization":`Basic ${encoded}` },
        credentials: encoded,
    })
    const data =  await res.json();
    return data;
}

module.exports = {
    getTickets,
}