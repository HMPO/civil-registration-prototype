const registrar = {

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
    //     next: '/registrar/begin'
    // },
    // ========================

    '/registrar': {
        entryPoint: true,
        resetJourney: true,
        skip: true,
        next: '/registrar/sign-in'
    },
    // '/registrar/begin': {
    //     backLink: '/start.html',
    //     next: '/registrar/sign-in'
    // },
    '/registrar/sign-in': {
        entryPoint: true,
        // resetJourney: true,
        fields: [
            'registrarEmailAddress',
            'registrarPassword'
        ],
        next: '/registrar/check-your-email'
    },
    '/registrar/check-your-email': {
        fields: [
            'registrarOneTimePassword'
        ],
        next:[
            '/registrar/pending-registrations'
        ]
    },
    '/registrar/pending-registrations': {
        // fields: [
        // ],
        next:[
            '/registrar/create-new-record'
        ]
    },
    '/registrar/create-new-record': {
        fields: [
            'coverSheetDeceasedFirstName',
            'coverSheetDeceasedMiddleNames',
            'coverSheetDeceasedLastName',
            'coverSheetDeceasedDateOfDeath'
        ],
        next:[
            '/registrar/record'
        ]
    },
    '/registrar/record': {
        checkJourney: false,
        // fields: [
        // ],
        next:[
            '/registrar/record-edit'
        ]
    },
    '/registrar/record-edit': {
        checkJourney: false,
        fields: [
            'coverSheetDeceasedFirstName',
            'coverSheetDeceasedMiddleNames',
            'coverSheetDeceasedLastName',
            'coverSheetDeceasedDateOfDeath',
            'coverSheetDateMCCDReceived',
            'coverSheetMCCDStatus',
            'coverSheetPriority',
            'coverSheetInformantFullName',
            'coverSheetInformantPhoneNumber',
            'coverSheetInformantEmailAddress',
            'coverSheetNotes'
        ],
        next:[
            '/registrar/record'
        ]
    },
    '/registrar/record-cause-of-death': {
        checkJourney: false,
        // fields: [
        // ],
        next:[
            '/registrar/record-cause-of-death-edit'
        ]
    },
    '/registrar/record-cause-of-death-edit': {
        checkJourney: false,
        fields: [
            'MCCDAddressLine1',
            'MCCDAddressLine2',
            'MCCDAddressStreet',
            'MCCDAddressTown',
            'MCCDAddressCounty',
            'MCCDAddressPostcode',
            'MCCDDateCertifyingPractitionerLastSawDeceasedAlive',
            'MCCDLetterCircledOnMCCD',
            'MCCDCauseOfDeathReason1',
            'MCCDCauseOfDeathReason1TimeBetweenOnsetAndDeath',
            'MCCDCauseOfDeathReason1TimeUnit',
            'MCCDCertifyingPractitionerFullName',
            'MCCDCertifyingPractitionerQualifications',
            'MCCDCertifyingPractitionerGMCNumber',
            'MCCDDateSigned',
            'MCCDDiedInHospital',
            'MCCDConsultantFullName',
            'MCCDWillAttendingPractitionerProvideFurtherInformation'
        ],
        next:[
            '/registrar/record-cause-of-death'
        ]
    },
    '/registrar/record-uploads': {
        checkJourney: false,
        // fields: [
        // ],
        next:[
            '/registrar/record-uploads-edit'
        ]
    },
    // '/registrar/record-uploads-edit': {
    //     fields: [
    //     ],
    //     next:[
    //         '/registrar/record-uploads'
    //     ]
    // },
    '/registrar/record-deceaseds-details': {
        checkJourney: false,
        // fields: [
        // ],
        next:[
            '/registrar/record-deceaseds-details-edit'
        ]
    },
    '/registrar/record-deceaseds-details-edit': {
        checkJourney: false,
        fields: [
            'deceasedFirstName',
            'deceasedMiddleNames',
            'deceasedLastName',
            'deceasedCapitaliseLastNames',
            'deceasedPrefix',
            'deceasedSuffix',
            'deceasedPrintOrderOfNames',
            'deceasedOrderOfNames',
            'deceasedDateOfDeath',
            'deceasedSex',
            'deceasedMaidenName',
            'deceasedOtherKnownNames',
            'deceasedPlaceOfDeathAddressLine1',
            'deceasedPlaceOfDeathAddressLine2',
            'deceasedPlaceOfDeathAddressStreet',
            'deceasedPlaceOfDeathAddressTown',
            'deceasedPlaceOfDeathAddressCounty',
            'deceasedPlaceOfDeathAddressPostcode',
            'deceasedUsualAddressLine1',
            'deceasedUsualAddressLine2',
            'deceasedUsualAddressStreet',
            'deceasedUsualAddressTown',
            'deceasedUsualAddressCounty',
            'deceasedUsualAddressPostcode',
            'deceasedUsualCEAddressLine1',
            'deceasedUsualCEAddressLine2',
            'deceasedUsualCEAddressStreet',
            'deceasedUsualCEAddressTown',
            'deceasedUsualCEAddressCounty',
            'deceasedUsualCEAddressPostcode',
            'deceasedDateOfBirth',
            'deceasedFullDateOfBirth',
            'deceasedPartialDateOfBirth',
            'deceasedAge',
            'deceasedApproximateYearOfBirth',
            'deceasedApproximateAge',
            'deceasedPlaceOfBirth',
            'deceasedCountryOfBirth',
            'deceasedSpanishNational',
            'deceasedOccupation',
            'deceasedOccupationStatus',
            'deceasedRelationshipStatus',
            'spouseOrCivilPartnerFullName',
            'spouseOrCivilPartnerOccupation',
            'spouseOrCivilPartnerOccupationStatus',
            'willInformantGiveDateOfBirthOfSpouseOrCivilPartner',
            'spouseOrCivilPartnerDateOfBirth',
            'willInformantAllowAnswerGivenInRelationshipStatusUsedInStatistics',
            'deceasedHowLongSpendInCommunalEstablishment',
            'deceasedNHSNumber',
            'willInformantGiveAdditionalIndustryAndEmploymentInformationForDeceased',
            'deceasedAdditionalEmploymentOrIndustryInformation',
            'deceasedEmploymentStatus',
            'willInformantGiveAdditionalIndustryAndEmploymentInformationForSpouseOrCivilPartner',
            'spouseOrCivilAdditionalEmploymentOrIndustryInformation',
            'spouseOrCivilEmploymentStatus'
        ],
        next:[
            '/registrar/record-deceaseds-details'
        ]
    },
    '/registrar/record-informants-details': {
        checkJourney: false,
        // fields: [
        // ],
        next:[
            '/registrar/record-informants-details-edit'
        ]
    },
    '/registrar/record-informants-details-edit': {
        checkJourney: false,
        fields: [
            'informantFirstName',
            'informantMiddleNames',
            'informantLastName',
            'informantCapitaliseLastNames',
            'informantQualification',
            'informantRelationshipToDeceased',
            'informantLiveWithDeceased',
            'informantAddressLine1',
            'informantAddressLine2',
            'informantAddressStreet',
            'informantAddressTown',
            'informantAddressCounty',
            'informantAddressPostcode'
        ],
        next:[
            '/registrar/record-informants-details'
        ]
    },
    '/registrar/record-check-all-information': {
        checkJourney: false,
        // fields: [
        // ],
        // next:[
        // ]
    },
    '/registrar/record-register-page': {
        checkJourney: false,
        fields: [
            'registrarDesignation',
            'informantSignature',
            'informantSignatureAnnotation',
            'registrarSignature'
        ],
        next:[
            '/registrar/record-register-confirmation'
        ]
    },
    '/registrar/record-register-confirmation': {
        checkJourney: false,
        // fields: [
        // ],
        // next:[
        // ]
    }
}

const informant = {

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
    //     next: '/informant/begin'
    // },
    // ========================

    '/informant': {
        entryPoint: true,
        resetJourney: true,
        skip: true,
        next: '/informant/informant-qualification'
    },
    // '/informant/begin': {
    //     backLink: '/start.html',
    //     next: '/informant/start'
    // },
    '/informant/start': {
        entryPoint: true,
        // resetJourney: true,
        next: '/informant/informant-qualification'
    },
    '/informant/email': {
        entryPoint: true,
        // resetJourney: true,
        next: '/informant/informant-qualification'
    },
    '/informant/email-entry-point': {
        entryPoint: true,
        resetJourney: true,
        skip: true,
        next: '/informant/informant-qualification'
    },
    '/informant/informant-qualification': {
        fields: [
            'informantRelativeOrNot',
            'informantPresentAtTheDeathOrNot'
        ],
        next:[
            { field: 'informantRelativeOrNot', value: false, next: [
                { field: 'informantPresentAtTheDeathOrNot', value: false, next: '/informant/you-cannot-register-this-death' },
                '/informant/informant-personal-details'
            ]},
            '/informant/informant-personal-details'
        ]
    },
    '/informant/you-cannot-register-this-death': {
    },
    '/informant/informant-personal-details': {
        fields: [
            'informantFirstName',
            'informantMiddleNames',
            'informantLastName',
            'informantRelationshipToDeceased'
        ],
        next: '/informant/informant-address'
    },
    '/informant/informant-address': {
        fields: [
            'informantAddressName',
            'informantAddressLine1',
            'informantAddressLine2',
            'informantAddressTown',
            'informantAddressPostcode'
        ],
        next: '/informant/personal-details'
    },
    '/informant/personal-details': {
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
                { field: 'maritalStatus', value: 'Married', next: '/informant/other-names-maiden' },
                '/informant/other-names'
            ] },
            '/informant/other-names']
    },
    '/informant/other-names-maiden': {
        fields: [
            'firstName',
            'knownByAnyOtherNames'
        ],
        next:
        [
            { field: 'knownByAnyOtherNames', value: false, next: '/informant/date-and-place-of-birth' },
            '/informant/other-names-yes'
        ]
    },
    '/informant/other-names': {
        fields: [
            'maidenName',
            'anyPreviousNames',
            'knownByAnyOtherNames'

        ],
        next:
        [
            { field: 'knownByAnyOtherNames', value: false, next: '/informant/date-and-place-of-birth' },
            '/informant/other-names-yes'
        ]
    },
    '/informant/date-and-place-of-birth': {
        fields: [
            'dateOfBirth',
            'townOrCityOfBirth',
            'countryOfBirth',
            'spanishNational'
        ],
        next: '/informant/occupation'
    },


    // '/informant/sex': {
    //     fields: [
    //         'sex'
    //     ],
    //     next: '/informant/marital-status'
    // },
    // '/informant/marital-status': {
    //     fields: [
    //         'maritalStatus'
    //     ],
    //     next: [
    //         { field: 'sex', value: 'Female', next: [
    //             { field: 'maritalStatus', value: 'Married or in a civil partnership', next: '/informant/maiden-name' },
    //             { field: 'maritalStatus', value: 'Widow or widower', next: '/informant/maiden-name' },
    //             '/informant/occupation'
    //         ] },
    //         '/informant/occupation'
    //     ]
    // },
    // '/informant/maiden-name': {
    //     fields: [
    //         'maidenName'
    //     ],
    //     next: '/informant/occupation'
    // },

    '/informant/occupation': {
        fields: [
            'lastOccupation',
            'retired'
        ],
        next: '/informant/where-did-they-live'
    },
    '/informant/where-did-they-live': {
        fields: [
            'didTheyLiveWithYou'
        ],
        next:[
            { field: 'didTheyLiveWithYou', value: false, next: '/informant/address' },
            '/informant/date-and-place-of-death'
        ]
    },
    '/informant/address': {
        fields: [
            'addressName',
            'addressLine1',
            'addressLine2',
            'addressTown',
            'addressPostcode'
        ],
        next: '/informant/date-and-place-of-death'
    },
    '/informant/date-and-place-of-death': {
        fields: [
            'dateOfDeath',
            'didTheyDieAtHome'
        ],
        next:[
            { field: 'didTheyDieAtHome', value: false, next: '/informant/address-they-died-at' },
            '/informant/partner-details'
        ]
    },
    '/informant/address-they-died-at': {
        fields: [
            'diedAtAddressName',
            'diedAtAddressLine1',
            'diedAtAddressLine2',
            'diedAtAddressTown',
            'diedAtAddressPostcode'
        ],
        next: '/informant/partner-details'
    },
    '/informant/partner-details': {
        fields: [
            'partnerName',
            'partnerOccupation',
            'partnerRetired'
        ],
        next: '/informant/voluntary-information'
    },
    '/informant/voluntary-information': {
        fields: [
            'NHSNumber',
            'placeholder',
            'placeholder'
        ],
        next: '/informant/confirm'
    },
    '/informant/confirm': {
        editable: true,
        next: '/informant/submitted'
    },
    '/informant/submitted': {
        noPost: true,
        backLink: false
    }
}

module.exports = {
    registrar,
    informant
}
