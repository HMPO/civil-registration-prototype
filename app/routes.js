const express = require('express')
const router = express.Router()
const Wizard = require('hmpo-form-wizard')

const steps = require('./steps')
const fields = require('./fields')

require('./formatters')
require('./validators')

router.use(Wizard(
    steps.journey1,
    fields,
    {
        name: 'prototype',
        journeyName: 'journey1',
        editable: true,
        editBackStep: '/register/confirm',
        controller: require('./controllers/journey1')
    }
))

router.use((err, req, res, next) => {
    if (err.code === 'SESSION_EXPIRED') err.redirect = '/'
    if (err.code === 'MISSING_PREREQ' && !err.redirect) err.redirect = '/'
    if (err.redirect) return res.redirect(err.redirect)
    next()
})

module.exports = router
