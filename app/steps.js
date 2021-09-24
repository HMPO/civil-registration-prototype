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

    '/register/start': {
        entryPoint: true,
        resetJourney: true,
        next: '/register/personal-details'
    },
    '/register': {
        entryPoint: true,
        resetJourney: true,
        skip: true,
        next: '/register/personal-details'
    },
    '/register/personal-details': {
        fields: [
            'title',
            'firstName',
            'lastName',
            'dateOfBirth'
        ],
        next: '/register/dates'
    },
    '/register/dates': {
        fields: [
            'dateOfBirth',
            'countryOfBirth',
            'dateOfDeath',
            'placeOfDeath',
            'otherPlaceOfDeath'
        ],
        next: '/register/last-address'
    },
    '/register/last-address': {
        fields: [
            'communalEstablishment',
            'addressLine1',
            'addressLine2',
            'addressTown',
            'addressPostcode'
        ],
        next: '/register/personal-and-family-details'
    },
    '/register/personal-and-family-details': {
        fields: [
            'sex',
            'lastOccupation',
            'marriage',
            'maidenName',
            'spouseName',
            'spouseOccupation',
            'motherName',
            'motherOccupation',
            'fatherName',
            'fatherOccupation',
        ],
        next: '/register/confirm'
    },
    '/register/confirm': {
        editable: true,
        next: '/register/submitted'
    },
    '/register/submitted': {
        noPost: true,
        backLink: false
    }
}

module.exports = {
    journey1
}
