module.exports = {

    // ========================
    // Comment `labTestOptions` out if index.html does not need to use the form-wizard (normally doesn't).
    // TODO: Improve this: Viewing the first page (index.html) will reset the journey, so shouldn't be used normally.
    // Uncomment to use for purposes such as lab testing variations, and you need radio options in index.html.
    // ========================
    // labTestOptions: {
    //     validate: 'required'
    // },
    // ========================

    emailAddress: {
        // validate: [
        //     'required'
        // ]
    },
    password: {
        // validate: [
        //     'required'
        // ]
    },
    oneTimePassword: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedFirstNameCoverSheet: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedMiddleNamesCoverSheet: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedLastNameCoverSheet: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedDateOfDeathCoverSheet: {
        validate: ['required', 'date'],
        autocomplete: 'bday'
    },
    dateMCCDReceivedCoverSheet: {
        // validate: [
        //     'required'
        // ]
    },
    MCCDStatus: {
        // validate: [
        //     'required'
        // ]
    },
    priority: {
        formatter: 'boolean',
        // validate: 'required'
    },
    informantFullNameCoverSheet: {
        // validate: [
        //     'required'
        // ]
    },
    informantPhoneNumberCoverSheet: {
        // validate: [
        //     'required'
        // ]
    },
    informantEmailAddressCoverSheet: {
        // validate: [
        //     'required'
        // ]
    },
    notes: {
        // validate: [
        //     'required'
        // ]
    },
    MCCDAddressLine1: {
        // validate: [
        //     'required'
        // ]
    },
    MCCDAddressLine2: {
        // validate: [
        //     'required'
        // ]
    },
    MCCDAddressStreet: {
        // validate: [
        //     'required'
        // ]
    },
    MCCDAddressTown: {
        // validate: [
        //     'required'
        // ]
    },
    MCCDAddressCounty: {
        // validate: [
        //     'required'
        // ]
    },
    MCCDAddressPostcode: {
        // validate: [
        //     'required'
        // ]
    },
    dateCertifyingPractitionerLastSawDeceasedAlive: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    letterCircledOnMCCD: {
        // validate: 'required'
    },
    MCCDCauseOfDeathReason1: {
        // validate: 'required'
    },
    MCCDCauseOfDeathReason1TimeBetweenOnsetAndDeath: {
        // validate: 'required'
    },
    MCCDCauseOfDeathReason1TimeUnit: {
        // validate: 'required'
    },
    certifyingPractitionerFullName: {
        // validate: 'required'
    },
    certifyingPractitionerQualifications: {
        // validate: 'required'
    },
    certifyingPractitionerGMCNumber: {
        // validate: 'required'
    },
    MCCDDateSigned: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    diedInHospital: {
        formatter: 'boolean',
        // validate: 'required'
    },
    consultantFullName: {
        // validate: 'required'
    },
    attendingPractitionerProvideFutherInformation: {
        formatter: 'boolean',
        // validate: 'required'
    },
    deceasedFirstName: {
        // validate: 'required'
    },
    deceasedMiddleNames: {
        // validate: 'required'
    },
    deceasedLastName: {
        // validate: 'required'
    },
    deceasedCapitaliseLastNames: {
        formatter: 'boolean',
        // validate: 'required'
    },
    deceasedPrefix: {
        // validate: 'required'
    },
    deceasedSuffix: {
        // validate: 'required'
    },
    deceasedPrintOrderOfNames: {
        // validate: 'required'
    },
    deceasedOrderOfNames: {
        // validate: 'required'
    },
    deceasedDateOfDeath: {
        // validate: 'required'
    },
    deceasedSex: {
        // validate: 'required'
    },
    deceasedMaidenName: {
        // validate: 'required'
    },
    deceasedOtherKnownNames: {
        // validate: 'required'
    },
    deceasedPlaceOfDeathAddressLine1: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedPlaceOfDeathAddressLine2: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedPlaceOfDeathAddressStreet: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedPlaceOfDeathAddressTown: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedPlaceOfDeathAddressCounty: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedPlaceOfDeathAddressPostcode: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressLine1: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressLine2: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressStreet: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressTown: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressCounty: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressPostcode: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedDateOfBirth: {
        // validate: 'required'
    },
    deceasedFullDateOfBirth: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    deceasedPartialDateOfBirth: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    deceasedAge: {
        // validate: 'required'
    },
    deceasedApproximateYearOfBirth: {
        // validate: 'required'
    },
    deceasedApproximateAge: {
        // validate: 'required'
    },
    deceasedPlaceOfBirth: {
        // validate: 'required'
    },
    deceasedCountryOfBirth: {
        // validate: 'required'
    },
    deceasedSpanishNational: {
        formatter: 'boolean',
        // validate: 'required'
    },
    deceasedOccupation: {
        // validate: 'required'
    },
    deceasedOccupationStatus: {
        // validate: 'required'
    },
    deceasedRelationshipStatus: {
        // validate: 'required'
    },
    spouseOrCivilPartnerFullName: {
        // validate: 'required'
    },
    spouseOrCivilPartnerOccupation: {
        // validate: 'required'
    },
    spouseOrCivilPartnerOccupationStatus: {
        // validate: 'required'
    },
    willInformantGiveDateOfBirthOfSpouseOrCivilPartner: {
        // validate: 'required'
    },
    spouseOrCivilPartnerDateOfBirth: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    willInformantAllowAnswerGivenInRelationshipStatusUsedInStatistics: {
        // validate: 'required'
    },
    deceasedHowLongSpendInCommunalEstablishment: {
        // validate: 'required'
    },
    deceasedNHSNumber: {
        // validate: 'required'
    },
    willInformantGiveAdditionalIndustryAndEmploymentInformationForDeceased: {
        // validate: 'required'
    },
    deceasedAdditionalEmploymentOrIndustryInformation: {
        // validate: 'required'
    },
    deceasedEmploymentStatus: {
        // validate: 'required'
    },
    willInformantGiveAdditionalIndustryAndEmploymentInformationForSpouseOrCivilPartner: {
        // validate: 'required'
    },
    spouseOrCivilAdditionalEmploymentOrIndustryInformation: {
        // validate: 'required'
    },
    spouseOrCivilEmploymentStatus: {
        // validate: 'required'
    },
    informantFirstName: {
        // validate: 'required'
    },
    informantMiddleNames: {
        // validate: 'required'
    },
    informantLastName: {
        // validate: 'required'
    },
    informantCapitaliseLastNames: {
        formatter: 'boolean',
        // validate: 'required'
    },
    informantQualification: {
        // validate: 'required'
    },
    informantRelationshipToDeceased: {
        // validate: 'required'
    },
    informantLiveWithDeceased: {
        formatter: 'boolean',
        // validate: 'required'
    },
    informantAddressLine1: {
        // validate: [
        //     'required'
        // ]
    },
    informantAddressLine2: {
        // validate: [
        //     'required'
        // ]
    },
    informantAddressStreet: {
        // validate: [
        //     'required'
        // ]
    },
    informantAddressTown: {
        // validate: [
        //     'required'
        // ]
    },
    informantAddressCounty: {
        // validate: [
        //     'required'
        // ]
    },
    informantAddressPostcode: {
        // validate: [
        //     'required'
        // ]
    },


    informantRelativeOrNot: {
        formatter: 'boolean',
        // validate: 'required'
    },
    informantPresentAtTheDeathOrNot: {
        formatter: 'boolean',
        // validate: 'required'
    },
    informantFirstName: {
        // validate: [
        //     'required'
        // ]
    },
    informantMiddleNames: {
        // validate: [
        //     'required'
        // ]
    },
    informantLastName: {
        // validate: [
        //     'required'
        // ]
    },
    informantRelationshipToDeceased: {
        // validate: [
        //     'required'
        // ]
    },
    informantAddressName: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'maxlength', arguments: 30 }
        // ]
    },
    informantAddressLine1: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'minlength', arguments: 3 },
        //     { type: 'maxlength', arguments: 40 }
        // ]
    },
    informantAddressLine2: {
        // validate: [
        //     // 'placename',
        //     { type: 'maxlength', arguments: 40 }
        // ]
    },
    informantAddressTown: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'maxlength', arguments: 30 }
        // ]
    },
    informantAddressPostcode: {
        formatter: 'uppercase',
        // validate: [
        //     'required',
        //     { type: 'maxlength', arguments: 10 }
        // ]
    },

    title: {
        // validate: 'required'
    },
    firstName: {
        // validate: [
        //     'required'
        // ]
    },
    middleName: {
        // validate: [
        //     'required'
        // ]
    },
    lastName: {
        // validate: [
        //     'required'
        // ]
    },
    prefix: {
        // validate: [
        //     'required'
        // ]
    },
    suffix: {
        // validate: [
        //     'required'
        // ]
    },
    sex: {
        // validate: 'required'
    },
    maritalStatus: {
        // validate: 'required'
    },
    maidenName: {
        // validate: [
        //     'required'
        // ]
    },
    anyPreviousNames: {
        formatter: 'boolean',
        // validate: 'required'
    },
    knownByAnyOtherNames: {
        formatter: 'boolean',
        // validate: 'required'
    },
    dateOfBirth: {
        validate: ['required', 'date'],
        autocomplete: 'bday'
    },
    townOrCityOfBirth: {
        // validate: [
        //     'required'
        // ]
    },
    countryOfBirth: {
        // validate: 'required'
    },
    spanishNational: {
        formatter: 'boolean',
        // validate: 'required'
    },
    lastOccupation: {
        // validate: [
        //     'required'
        // ]
    },
    retired: {
        formatter: 'boolean',
        // validate: 'required'
    },
    didTheyLiveWithYou: {
        formatter: 'boolean',
        // validate: 'required'
    },
    addressName: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'maxlength', arguments: 30 }
        // ]
    },
    addressLine1: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'minlength', arguments: 3 },
        //     { type: 'maxlength', arguments: 40 }
        // ]
    },
    addressLine2: {
        // validate: [
        //     // 'placename',
        //     { type: 'maxlength', arguments: 40 }
        // ]
    },
    addressTown: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'maxlength', arguments: 30 }
        // ]
    },
    addressPostcode: {
        formatter: 'uppercase',
        // validate: [
        //     'required',
        //     { type: 'maxlength', arguments: 10 }
        // ]
    },
    dateOfDeath: {
        validate: ['required', 'date'],
        autocomplete: 'bday'
    },
    didTheyDieAtHome: {
        formatter: 'boolean',
        // validate: 'required'
    },
    diedAtAddressName: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'maxlength', arguments: 30 }
        // ]
    },
    diedAtAddressLine1: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'minlength', arguments: 3 },
        //     { type: 'maxlength', arguments: 40 }
        // ]
    },
    diedAtAddressLine2: {
        // validate: [
        //     // 'placename',
        //     { type: 'maxlength', arguments: 40 }
        // ]
    },
    diedAtAddressTown: {
        // validate: [
        //     'required',
        //     // 'placename',
        //     { type: 'maxlength', arguments: 30 }
        // ]
    },
    diedAtAddressPostcode: {
        formatter: 'uppercase',
        // validate: [
        //     'required',
        //     { type: 'maxlength', arguments: 10 }
        // ]
    },
    // placeOfDeath: {
    //     // validate: 'required'
    // },
    // otherPlaceOfDeath: {
    //     // validate: [
    //     //     'required',
    //     //     { type: 'minlength', arguments: 2 },
    //     //     { type: 'maxlength', arguments: 20 }
    //     // ],
    //     dependent: {
    //         field: 'placeOfDeath',
    //         value: 'Other'
    //     }
    // },
    // whereDidTheyLive: {
    //     // validate: 'required'
    // },
    // didTheyDieAtThisAddress: {
    //     formatter: 'boolean',
    //     // validate: 'required'
    // },

    partnerName: {
        // validate: 'required'
    },
    partnerLastOccupation: {
        // validate: 'required'
    },
    partnerRetired: {
        formatter: 'boolean',
        // validate: 'required'
    },

    NHSNumber: {
        // validate: 'required'
    },
    placeholder: {
        // validate: 'required'
    },
    placeholder: {
        // validate: 'required'
    },
    // motherName: {
    //     // validate: 'required'
    // },
    // motherOccupation: {
    //     // validate: 'required'
    // },
    // fatherName: {
    //     // validate: 'required'
    // },
    // fatherOccupation: {
    //     // validate: 'required'
    // },
}
