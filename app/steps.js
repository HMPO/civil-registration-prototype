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

    '/register': {
        entryPoint: true,
        resetJourney: true,
        skip: true,
        next: '/register/informant-qualification'
    },
    '/register/start': {
        entryPoint: true,
        // resetJourney: true,
        next: '/register/informant-qualification'
    },
    '/register/email': {
        entryPoint: true,
        // resetJourney: true,
        next: '/register/informant-qualification'
    },
    '/register/email-entry-point': {
        entryPoint: true,
        resetJourney: true,
        skip: true,
        next: '/register/informant-qualification'
    },
    '/register/informant-qualification': {
        fields: [
            'informantRelativeOrNot',
            'informantPresentAtTheDeathOrNot'
        ],
        next:[
            { field: 'informantRelativeOrNot', value: false, next: [
                { field: 'informantPresentAtTheDeathOrNot', value: false, next: '/register/you-cannot-register-this-death' },
                '/register/informant-personal-details'
            ]},
            '/register/informant-personal-details'
        ]
    },
    '/register/you-cannot-register-this-death': {
    },
    '/register/informant-personal-details': {
        fields: [
            'informantFirstName',
            'informantMiddleNames',
            'informantLastName',
            'informantRelationshipToDeceased'
        ],
        next: '/register/informant-address'
    },
    '/register/informant-address': {
        fields: [
            'informantAddressName',
            'informantAddressLine1',
            'informantAddressLine2',
            'informantAddressTown',
            'informantAddressPostcode'
        ],
        next: '/register/personal-details'
    },
    '/register/personal-details': {
        fields: [
            'firstName',
            'middleName',
            'lastName',
            'prefix',
            'suffix',
            'sex',
            'maritalStatus'
        ],
        next:
        [
            { field: 'sex', value: 'Female', next: [
                { field: 'maritalStatus', value: 'Married', next: '/register/other-names-maiden' },
                '/register/other-names'
            ] },
            '/register/other-names']
    },
    '/register/other-names-maiden': {
        fields: [
            'firstName',
            'knownByAnyOtherNames'
        ],
        next:
        [
            { field: 'knownByAnyOtherNames', value: false, next: '/register/date-and-place-of-birth' },
            '/register/other-names-yes'
        ]
    },
    '/register/other-names': {
        fields: [
            'maidenName',
            'anyPreviousNames',
            'knownByAnyOtherNames'
            
        ],
        next:
        [
            { field: 'knownByAnyOtherNames', value: false, next: '/register/date-and-place-of-birth' },
            '/register/other-names-yes'
        ]
    },
    '/register/date-and-place-of-birth': {
        fields: [
            'dateOfBirth',
            'townOrCityOfBirth',
            'countryOfBirth',
            'spanishNational'
        ],
        next: '/register/occupation'
    },

    
    // '/register/sex': {
    //     fields: [
    //         'sex'
    //     ],
    //     next: '/register/marital-status'
    // },
    // '/register/marital-status': {
    //     fields: [
    //         'maritalStatus'
    //     ],
    //     next: [
    //         { field: 'sex', value: 'Female', next: [
    //             { field: 'maritalStatus', value: 'Married or in a civil partnership', next: '/register/maiden-name' },
    //             { field: 'maritalStatus', value: 'Widow or widower', next: '/register/maiden-name' },
    //             '/register/occupation'
    //         ] },
    //         '/register/occupation'
    //     ]
    // },
    // '/register/maiden-name': {
    //     fields: [
    //         'maidenName'
    //     ],
    //     next: '/register/occupation'
    // },

    '/register/occupation': {
        fields: [
            'lastOccupation',
            'retired'
        ],
        next: '/register/where-did-they-live'
    },
    '/register/where-did-they-live': {
        fields: [
            'didTheyLiveWithYou'
        ],
        next:[
            { field: 'didTheyLiveWithYou', value: false, next: '/register/address' },
            '/register/date-and-place-of-death'
        ]
    },
    '/register/address': {
        fields: [
            'addressName',
            'addressLine1',
            'addressLine2',
            'addressTown',
            'addressPostcode'
        ],
        next: '/register/date-and-place-of-death'
    },
    '/register/date-and-place-of-death': {
        fields: [
            'dateOfDeath',
            'didTheyDieAtHome'
        ],
        next:[
            { field: 'didTheyDieAtHome', value: false, next: '/register/address-they-died-at' },
            '/register/partner-details'
        ]
    },
    '/register/address-they-died-at': {
        fields: [
            'diedAtAddressName',
            'diedAtAddressLine1',
            'diedAtAddressLine2',
            'diedAtAddressTown',
            'diedAtAddressPostcode'
        ],
        next: '/register/partner-details'
    },
    '/register/partner-details': {
        fields: [
            'partnerName',
            'partnerOccupation',
            'partnerRetired'
        ],
        next: '/register/voluntary-information'
    },
    '/register/voluntary-information': {
        fields: [
            'NHSNumber',
            'placeholder',
            'placeholder'
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
