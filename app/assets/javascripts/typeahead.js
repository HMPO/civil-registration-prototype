const accessibleAutocomplete = require('accessible-autocomplete')
const addresses = require('../../data/addresses.json')
const fullListOfCEaddresses = require('../../data/fullListOfCEaddresses.json')

const combinedAddressPlaceOfDeathArray = []
const combinedUsualAddressArray = []
addresses.forEach(e => combinedAddressPlaceOfDeathArray.push(e.combinedAddress))
fullListOfCEaddresses.forEach(e => combinedUsualAddressArray.push(e.combinedAddress))

accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container'),
    id: 'my-autocomplete', // To match it to the existing <label>.
    source: combinedAddressPlaceOfDeathArray,
    onConfirm: async (val) => {
        await autoFillPlaceOfDeathWhenCESelected(addresses, val)
    }
})

accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container2'),
    id: 'my-autocomplete2', // To match it to the existing <label>.
    source: combinedUsualAddressArray,
    onConfirm: async (val) => {
        await autoFillUsualWhenCESelected(fullListOfCEaddresses, val)
    }
})

async function autoFillPlaceOfDeathWhenCESelected (addresses, val) {
    // get the field id where value is populated
    const deceasedPlaceOfDeathAddressLine1 = document.querySelector('#deceasedPlaceOfDeathAddressLine1')
    const deceasedPlaceOfDeathAddressLine2 = document.querySelector('#deceasedPlaceOfDeathAddressLine2')
    const deceasedPlaceOfDeathAddressStreet = document.querySelector('#deceasedPlaceOfDeathAddressStreet')
    const deceasedPlaceOfDeathAddressTown = document.querySelector('#deceasedPlaceOfDeathAddressTown')
    const deceasedPlaceOfDeathAddressCounty = document.querySelector('#deceasedPlaceOfDeathAddressCounty')
    const deceasedPlaceOfDeathAddressPostcode = document.querySelector('#deceasedPlaceOfDeathAddressPostcode')
    const divPlaceOfDeath = document.querySelector('#placeOfDeath')

    // get the exact match from the CE data
    const result = await searchByCombinedAddress(addresses, val)
    if (result) {
        if (result.address) {
            deceasedPlaceOfDeathAddressLine1.value = await extractNumber(result.address)
        }
        if (result.name) {
            deceasedPlaceOfDeathAddressLine2.value = result.name
        }
        if (result.address) {
            deceasedPlaceOfDeathAddressStreet.value = result.address
        }
        if (result.town) {
            deceasedPlaceOfDeathAddressTown.value = result.town
        }
        if (result.town) {
            deceasedPlaceOfDeathAddressCounty.value = result.town
        }
        if (result.postCode) {
            deceasedPlaceOfDeathAddressPostcode.value = result.postCode
        }
        divPlaceOfDeath.classList.remove('govuk-visually-hidden')
    }
}

async function autoFillUsualWhenCESelected (addresses, val) {
    // get the field id where value is populated
    const deceasedUsualCEAddressLine1 = document.querySelector('#deceasedUsualCEAddressLine1')
    const deceasedUsualCEAddressLine2 = document.querySelector('#deceasedUsualCEAddressLine2')
    const deceasedUsualCEAddressStreet = document.querySelector('#deceasedUsualCEAddressStreet')
    const deceasedUsualCEAddressTown = document.querySelector('#deceasedUsualCEAddressTown')
    const deceasedUsualCEAddressCounty = document.querySelector('#deceasedUsualCEAddressCounty')
    const deceasedUsualCEAddressPostcode = document.querySelector('#deceasedUsualCEAddressPostcode')
    const divUsualAddress = document.querySelector('#usualAddress')

    // get the exact match from the CE data
    const result = await searchByCombinedAddress(addresses, val)
    if (result) {
        if (result.address) {
            deceasedUsualCEAddressLine1.value = await extractNumber(result.address)
        }
        if (result.name) {
            deceasedUsualCEAddressLine2.value = result.name
        }
        if (result.address) {
            deceasedUsualCEAddressStreet.value = result.address
        }
        if (result.town) {
            deceasedUsualCEAddressTown.value = result.town
        }
        if (result.town) {
            deceasedUsualCEAddressCounty.value = result.town
        }
        if (result.postCode) {
            deceasedUsualCEAddressPostcode.value = result.postCode
        }
        divUsualAddress.classList.remove('govuk-visually-hidden')
    }
}

async function searchByCombinedAddress (data, query) {
    console.table([query, data])
    for (const item of data) {
        if (item.combinedAddress.toLowerCase() === query.toLowerCase()) {
            return await item
        }
    }
    return null
}

async function extractNumber (data) {
    const regex = /^\d+/
    const match = data.match(regex)
    return await match ? match[0] : null
}
