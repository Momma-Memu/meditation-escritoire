const fetch = require('node-fetch');

const getOneTicket = async (email, password, id) => {
    const string = `${email}:${password}`
    const encoded = Buffer.from(string).toString('base64');
    const res = await fetch(`https://miahbarnes.zendesk.com/api/v2/search.json?query=${id}`, {
        headers: { "Content-Type":"application/json", "Authorization":`Basic ${encoded}` },
        credentials: encoded,
    })
    const data =  await res.json();
    return data;
}

module.exports = {
    getOneTicket,
}