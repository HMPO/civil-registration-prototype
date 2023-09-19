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

    registrarEmailAddress: {
        // validate: [
        //     'required'
        // ]
    },
    registrarPassword: {
        // validate: [
        //     'required'
        // ]
    },
    registrarOneTimePassword: {
        // validate: [
        //     'required'
        // ]
    },
    coverSheetDeceasedFirstName: {
        // validate: [
        //     'required'
        // ]
    },
    coverSheetDeceasedMiddleNames: {
        // validate: [
        //     'required'
        // ]
    },
    coverSheetDeceasedLastName: {
        // validate: [
        //     'required'
        // ]
    },
    coverSheetDeceasedDateOfDeath: {
        validate: ['required', 'date'],
        autocomplete: 'bday'
    },
    coverSheetDateMCCDReceived: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    coverSheetMCCDStatus: {
        // validate: [
        //     'required'
        // ]
    },
    coverSheetPriority: {
        formatter: 'boolean',
        // validate: 'required'
    },
    coverSheetInformantFullName: {
        // validate: [
        //     'required'
        // ]
    },
    coverSheetInformantPhoneNumber: {
        // validate: [
        //     'required'
        // ]
    },
    coverSheetInformantEmailAddress: {
        // validate: [
        //     'required'
        // ]
    },
    coverSheetNotes: {
        // validate: [
        //     'required'
        // ]
    },
    MCCDDateMedicalCertificateIssued: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    MCCDWhereMedicalInformationFrom: {
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
    MCCDCauseOfDeathReason1: {
        // validate: 'required'
    },
    MCCDCauseOfDeathReason1TimeBetweenOnsetAndDeath: {
        // validate: 'required'
    },
    MCCDCauseOfDeathReason1TimeUnit: {
        // validate: 'required'
    },
    MCCDDidDeceasedHaveAnyHazardousImplants: {
        formatter: 'boolean',
        // validate: 'required'
    },
    MCCDWhatTypeOfDevice: {
        // validate: 'required'
    },
    MCCDWasDeviceRemoved: {
        formatter: 'boolean-unknown',
        // validate: 'required'
    },
    MCCDDiedInHospital: {
        formatter: 'boolean',
        // validate: 'required'
    },
    MCCDEthnicity: {
        // validate: 'required'
    },
    MCCDEthnicityAdditional: {
        // validate: 'required'
    },
    MCCDConsultantFullName: {
        // validate: 'required'
    },
    MCCDWillAttendingPractitionerProvideFurtherInformation: {
        formatter: 'boolean',
        // validate: 'required'
    },
    MCCDAttendingPractitionerFullName: {
        // validate: 'required'
    },
    MCCDAttendingPractitionerQualifications: {
        // validate: 'required'
    },
    MCCDAttendingPractitionerGMCNumber: {
        // validate: 'required'
    },
    MCCDMedicalExaminerFullName: {
        // validate: 'required'
    },
    MCCDMedicalExaminerQualifications: {
        // validate: 'required'
    },
    MCCDMedicalExaminerGMCNumber: {
        // validate: 'required'
    },
    MCCDMedicalExaminerAuthorisationDate: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    MCCDDateCertifyingPractitionerLastSawDeceasedAlive: {
        validate: ['date'],
        autocomplete: 'bday'
    },
    MCCDLetterCircledOnMCCD: {
        // validate: 'required'
    },
    MCCDCertifyingPractitionerFullName: {
        // validate: 'required'
    },
    MCCDCertifyingPractitionerQualifications: {
        // validate: 'required'
    },
    MCCDCertifyingPractitionerGMCNumber: {
        // validate: 'required'
    },
    MCCDDateSigned: {
        validate: ['date'],
        autocomplete: 'bday'
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
        validate: ['date'],
        autocomplete: 'bday'
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
    deceasedPlaceOfDeathAddress: {
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
    deceasedUsualAddress: {
        // validate: 'required'
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
    deceasedUsualAddressCELine1: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressCELine2: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressCEStreet: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressCETown: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressCECounty: {
        // validate: [
        //     'required'
        // ]
    },
    deceasedUsualAddressCEPostcode: {
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
    fileUpload: {

    },
    spouseOrCivilPartnerDateOfBirth: {
        validate: ['date'],
        autocomplete: 'bday'
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
    willInformantAllowAnswerGivenInRelationshipStatusUsedInStatistics: {
        formatter: 'boolean',
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
    registrarDesignation: {
        // validate: 'required'
    },
    informantSignature: {
        // validate: 'required'
    },
    informantSignatureAnnotation: {
        // validate: 'required'
    },
    registrarSignature: {
        // validate: 'required'
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
