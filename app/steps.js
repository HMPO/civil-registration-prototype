const journey1 = {

    // ========================
    // Comment '/' out if index.html does not need to use the form-wizard (normally doesn't).
    // TODO: Improve this: Viewing the first page (index.html) will reset the journey, so shouldn't be used normally.
    // Uncomment to use for purposes such as lab testing variations, and you need radio options in index.html.
    // ========================
    // '/': {
    //     template: 'index.html',
    //     entryPoint: true,
    //     resetJourney: true,
    //     fields: [
    //         'labTestOptions'
    //     ],
    //     next: '/filter/begin'
    // },
    // ========================
    
    '/sample-journey-1': {
        entryPoint: true,
        resetJourney: true,
        skip: true,
        next: '/sample-journey-1/form'
    },
    '/sample-journey-1/form': {
        fields: [
            'title',
            'firstName',
            'lastName',
            'dateOfBirth'
        ],
        next: '/sample-journey-1/confirm'
    },
    '/sample-journey-1/confirm': {
        editable: true,
        next: '/sample-journey-1/submitted'
    },
    '/sample-journey-1/submitted': {
        noPost: true,
        backLink: false
    }
}

module.exports = {
    journey1
}
