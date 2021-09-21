// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
    // Service name used in header. Eg: 'Renew your passport'
    serviceName: 'Service name goes here',

    // Default port that prototype runs on
    port: '3000',

    // Enable or disable password protection on production
    useAuth: 'true',

    // Enable cookie-based session store (persists on restart)
    // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
    useCookieSessionStore: 'false',

    // Force HTTP to redirect to HTTPS on production
    useHttps: 'true',

    // Cookie warning - update link to service's cookie page.
    cookieText: 'GOV.UK uses cookies to make the site simpler. <a href="#">Find out more about cookies</a>',

    // Enable or disable Browser Sync
    useBrowserSync: 'true'

}
