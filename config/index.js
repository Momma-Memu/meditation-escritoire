module.exports = {
    port: process.env.PORT,
    environment: process.env.NODE_ENV || 'development',
    zendesk: {
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
        subdomain: process.env.SUBDOMAIN
    }
}