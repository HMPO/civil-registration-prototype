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

    title: {
        // validate: 'required'
    },
    firstName: {
        // validate: [
        //     'required'
        // ]
    },
    lastName: {
        // validate: [
        //     'required'
        // ]
    },
    dateOfBirth: {
        // validate: ['required', 'date'],
        autocomplete: 'bday'
    },
    countryOfBirth: {
        items: require('./data/countries'),
        // validate: 'required'
    },
    dateOfDeath: {
        // validate: ['required', 'date'],
        autocomplete: 'bday'
    },
    placeOfDeath: {
        // validate: 'required'
    },
    otherPlaceOfDeath: {
        // validate: [
        //     'required',
        //     { type: 'minlength', arguments: 2 },
        //     { type: 'maxlength', arguments: 20 }
        // ],
        dependent: {
            field: 'placeOfDeath',
            value: 'Other'
        }
    },
    communalEstablishment: {
        formatter: 'boolean',
        // validate: 'required'
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
    whereDidTheyLive: {
        // validate: 'required'
    },
    didTheyDieAtThisAddress: {
        formatter: 'boolean',
        // validate: 'required'
    },
    sex: {
        // validate: 'required'
    },
    lastOccupation: {
        // validate: [
        //     'required'
        // ]
    },
    marriage: {
        // validate: 'required'
    },
    spouseName: {
        // validate: 'required'
    },
    spouseOccupation: {
        // validate: 'required'
    },
    motherName: {
        // validate: 'required'
    },
    motherOccupation: {
        // validate: 'required'
    },
    fatherName: {
        // validate: 'required'
    },
    fatherOccupation: {
        // validate: 'required'
    },
}
