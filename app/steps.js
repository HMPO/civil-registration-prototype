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
    '/register/email': {
        entryPoint: true,
        resetJourney: true,
        next: '/register/personal-details'
    },
    '/register/email-entry-point': {
        entryPoint: true,
        resetJourney: true,
        skip: true,
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
            'firstName',
            'lastName',
            'prefixOrSuffix',
            'anyPreviousNames',
            'knownByAnyOtherNames'
        ],
        next: '/register/date-and-place-of-birth'
    },
    '/register/date-and-place-of-birth': {
        fields: [
            'dateOfBirth',
            'countryOfBirth',
            'townOrCityOfBirth'
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
            { field: 'sex', value: 'Female', next: [
                { field: 'maritalStatus', value: 'Married or in a civil partnership', next: '/register/maiden-name' },
                { field: 'maritalStatus', value: 'Widow or widower', next: '/register/maiden-name' },
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
            'whereDidTheyLive'
        ],
        next: [
            { field: 'whereDidTheyLive', value: 'At a residential address', next: '/register/residential-address' },
            { field: 'whereDidTheyLive', value: 'In a care home', next: '/register/care-home-address' },
            '/register/residential-address'
        ]
    },
    '/register/residential-address': {
        fields: [
            'addressName',
            'addressLine1',
            'addressLine2',
            'addressTown',
            'addressPostcode',
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
            'addressName',
            'addressLine1',
            'addressLine2',
            'addressTown',
            'addressPostcode',
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
            'placeOfDeath'
        ],
        next: '/register/date-of-death'
    },
    '/register/date-of-death': {
        fields: [
            'dateOfDeath'
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
