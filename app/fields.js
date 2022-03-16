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
        items: require('./data/birth-countries'),
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
