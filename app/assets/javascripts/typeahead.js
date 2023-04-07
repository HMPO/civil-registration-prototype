const accessibleAutocomplete = require('accessible-autocomplete')
const addressesCESingleDistrictList = require('../../data/addresses-CE-single-district-list.json')
const addressesCEFullDistrictList = require('../../data/addresses-CE-full-district-list.json')

const combinedPlaceOfDeathAddressArray = []
const combinedUsualAddressArray = []
addressesCESingleDistrictList.forEach(e => combinedPlaceOfDeathAddressArray.push(e.combinedAddress))
addressesCEFullDistrictList.forEach(e => combinedUsualAddressArray.push(e.combinedAddress))

accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container'),
    id: 'my-autocomplete', // To match it to the existing <label>.
    source: combinedPlaceOfDeathAddressArray,
    onConfirm: async (val) => {
        await autoFillPlaceOfDeathWhenCESelected(addressesCESingleDistrictList, val)
    },
    minLength: 3
})

accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container2'),
    id: 'my-autocomplete2', // To match it to the existing <label>.
    source: combinedUsualAddressArray,
    onConfirm: async (val) => {
        await autoFillUsualWhenCESelected(addressesCEFullDistrictList, val)
    },
    minLength: 3
})

async function autoFillPlaceOfDeathWhenCESelected (addressesCESingleDistrictList, val) {
    // get the field id where value is populated
    const deceasedPlaceOfDeathAddressLine1 = document.querySelector('#deceasedPlaceOfDeathAddressLine1')
    const deceasedPlaceOfDeathAddressLine2 = document.querySelector('#deceasedPlaceOfDeathAddressLine2')
    const deceasedPlaceOfDeathAddressStreet = document.querySelector('#deceasedPlaceOfDeathAddressStreet')
    const deceasedPlaceOfDeathAddressTown = document.querySelector('#deceasedPlaceOfDeathAddressTown')
    const deceasedPlaceOfDeathAddressCounty = document.querySelector('#deceasedPlaceOfDeathAddressCounty')
    const deceasedPlaceOfDeathAddressPostcode = document.querySelector('#deceasedPlaceOfDeathAddressPostcode')
    const divPlaceOfDeath = document.querySelector('#placeOfDeath')

    // get the exact match from the CE data
    const result = await searchByCombinedAddress(addressesCESingleDistrictList, val)
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
        if (result.postcode) {
            deceasedPlaceOfDeathAddressPostcode.value = result.postcode
        }
        divPlaceOfDeath.classList.remove('govuk-visually-hidden')
    }
}

async function autoFillUsualWhenCESelected (addressesCEFullDistrictList, val) {
    // get the field id where value is populated
    const deceasedUsualCEAddressLine1 = document.querySelector('#deceasedUsualCEAddressLine1')
    const deceasedUsualCEAddressLine2 = document.querySelector('#deceasedUsualCEAddressLine2')
    const deceasedUsualCEAddressStreet = document.querySelector('#deceasedUsualCEAddressStreet')
    const deceasedUsualCEAddressTown = document.querySelector('#deceasedUsualCEAddressTown')
    const deceasedUsualCEAddressCounty = document.querySelector('#deceasedUsualCEAddressCounty')
    const deceasedUsualCEAddressPostcode = document.querySelector('#deceasedUsualCEAddressPostcode')
    const divUsualAddress = document.querySelector('#usualAddress')

    // get the exact match from the CE data
    const result = await searchByCombinedAddress(addressesCEFullDistrictList, val)
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
        if (result.postcode) {
            deceasedUsualCEAddressPostcode.value = result.postcode
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
