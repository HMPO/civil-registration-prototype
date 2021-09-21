/* eslint quote-props: ["error", "always"] */

(function () {
    window.hmpoAutoFillControls = {
        // TODO: create fill controls along the fields being added
        'age': {
            'adult': 'Adult',
            'underSixteen': 'Under 16',
        },
        // Checkbox example: 
        // 'damaged': 'Damaged',
    }

    window.hmpoAutoFillRestrictions = {
        // TODO: create restrictions (if required) along fields being added

        // 'showCookieBanner': {
            
        // },
    }

    var now = new Date()
    var under16Date = new Date()
    under16Date.setFullYear(under16Date.getFullYear() - 15)
    under16Date.setDate(under16Date.getDate() + 15)

    window.hmpoAutoFillData = {
        // TODO: populate values along fields.js additions
        'base': { // default values
            'title': 'Mrs',
            'firstName': 'Jennifer Testy',
            'lastName': 'Longname McTestface-Smythe',
            'dateOfBirth-day': 20,
            'dateOfBirth-month': 7,
            'dateOfBirth-year': now.getFullYear() - 30,
        },
        'underSixteen': {
            'dateOfBirth-day': under16Date.getDate(),
            'dateOfBirth-month': under16Date.getMonth(),
            'dateOfBirth-year': under16Date.getFullYear()
        }
    }
})()
