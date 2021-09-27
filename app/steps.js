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
        next: '/register/date-and-place-of-birth'
    },
    '/register/date-and-place-of-birth': {
        fields: [
            'dateOfBirth',
            'countryOfBirth',
            'dateOfDeath',
            'placeOfDeath',
            'otherPlaceOfDeath'
        ],
        next: '/register/sex'
    },
    '/register/sex': {
        fields: [
            'sex'
        ],
        next: '/register/marital-status'
    },
    '/register/marital-status': {
        fields: [
            'maritalStatus'
        ],
        next: [
            { field: 'sex', value: 'female', next: [
                { field: 'maritalStatus', value: 'married', next: '/register/maiden-name' },
                { field: 'maritalStatus', value: 'widowedOrWidower', next: '/register/maiden-name' },
                '/register/occupation'
            ] },
            '/register/occupation'
        ]
    },
    '/register/maiden-name': {
        fields: [
            'maidenName'
        ],
        next: '/register/occupation'
    },
    '/register/occupation': {
        fields: [
            'lastOccupation'
        ],
        next: '/register/last-address'
    },
    '/register/last-address': {
        fields: [
            'whereDidTheyLive',
            'communalEstablishment',
            'addressLine1',
            'addressLine2',
            'addressTown',
            'addressPostcode'
        ],
        next: [
            { field: 'whereDidTheyLive', value: 'residential', next: '/register/residential-address' },
            { field: 'whereDidTheyLive', value: 'care', next: '/register/care-home-address' },
            '/register/residential-address'
        ]
    },
    '/register/residential-address': {
        fields: [
            'didTheyDieAtThisAddress'
        ],
        next: [
            { field: 'didTheyDieAtThisAddress', value: true, next: '/register/date-of-death' },
            { field: 'didTheyDieAtThisAddress', value: false, next: '/register/place-of-death' },
            '/register/date-of-death'
        ]
    },
    '/register/care-home-address': {
        fields: [
            'didTheyDieAtThisAddress'
        ],
        next: [
            { field: 'didTheyDieAtThisAddress', value: true, next: '/register/date-of-death' },
            { field: 'didTheyDieAtThisAddress', value: false, next: '/register/place-of-death' },
            '/register/date-of-death'
        ]
    },
    '/register/place-of-death': {
        fields: [
        ],
        next: '/register/date-of-death'
    },
    '/register/date-of-death': {
        fields: [
        ],
        next: '/register/spouse-details'
    },
    '/register/spouse-details': {
        fields: [
            'spouseName',
            'spouseOccupation'
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
