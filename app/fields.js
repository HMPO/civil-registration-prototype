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
        validate: 'required'
    },
    firstName: {
        validate: [
            'required'
        ]
    },
    lastName: {
        validate: [
            'required'
        ]
    },
    dateOfBirth: {
        validate: ['required', 'date'],
        autocomplete: 'bday'
    }
}
