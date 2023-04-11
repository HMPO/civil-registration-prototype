const accessibleAutocomplete = require('accessible-autocomplete')
const addressesCESingleDistrictList = require('../../data/addresses-CE-single-district-list.json')
const addressesCEFullDistrictList = require('../../data/addresses-CE-full-district-list.json')

const combinedPlaceOfDeathAddressArray = []
const combinedUsualAddressArray = []
addressesCESingleDistrictList.forEach(e => combinedPlaceOfDeathAddressArray.push(e.combined_address))
addressesCEFullDistrictList.forEach(e => combinedUsualAddressArray.push(e.combined_address))

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
    const deceasedPlaceOfDeathAddressCELine1 = document.querySelector('#deceasedPlaceOfDeathAddressCELine1')
    const deceasedPlaceOfDeathAddressCELine2 = document.querySelector('#deceasedPlaceOfDeathAddressCELine2')
    const deceasedPlaceOfDeathAddressCEStreet = document.querySelector('#deceasedPlaceOfDeathAddressCEStreet')
    const deceasedPlaceOfDeathAddressCETown = document.querySelector('#deceasedPlaceOfDeathAddressCETown')
    const deceasedPlaceOfDeathAddressCECounty = document.querySelector('#deceasedPlaceOfDeathAddressCECounty')
    const deceasedPlaceOfDeathAddressCEPostcode = document.querySelector('#deceasedPlaceOfDeathAddressCEPostcode')
    const divPlaceOfDeath = document.querySelector('#placeOfDeath')

    // get the exact match from the CE data
    const result = await searchByCombinedAddress(addressesCESingleDistrictList, val)
    if (result) {
        if (result.address) {
            deceasedPlaceOfDeathAddressCELine1.value = await extractNumber(result.address)
        }
        if (result.ce_name) {
            deceasedPlaceOfDeathAddressCELine2.value = result.ce_name
        }
        if (result.address) {
            deceasedPlaceOfDeathAddressCEStreet.value = result.address
        }
        if (result.town) {
            deceasedPlaceOfDeathAddressCETown.value = result.town
        }
        if (result.post_code) {
            deceasedPlaceOfDeathAddressCEPostcode.value = result.post_code
        }
        divPlaceOfDeath.classList.remove('govuk-visually-hidden')
    }
}

async function autoFillUsualWhenCESelected (addressesCEFullDistrictList, val) {
    // get the field id where value is populated
    const deceasedUsualAddressCELine1 = document.querySelector('#deceasedUsualAddressCELine1')
    const deceasedUsualAddressCELine2 = document.querySelector('#deceasedUsualAddressCELine2')
    const deceasedUsualAddressCEStreet = document.querySelector('#deceasedUsualAddressCEStreet')
    const deceasedUsualAddressCETown = document.querySelector('#deceasedUsualAddressCETown')
    const deceasedUsualAddressCECounty = document.querySelector('#deceasedUsualAddressCECounty')
    const deceasedUsualAddressCEPostcode = document.querySelector('#deceasedUsualAddressCEPostcode')
    const divUsualAddress = document.querySelector('#usualAddress')

    // get the exact match from the CE data
    const result = await searchByCombinedAddress(addressesCEFullDistrictList, val)
    if (result) {
        if (result.address) {
            deceasedUsualAddressCELine1.value = await extractNumber(result.address)
        }
        if (result.ce_name) {
            deceasedUsualAddressCELine2.value = result.ce_name
        }
        if (result.address) {
            deceasedUsualAddressCEStreet.value = result.address
        }
        if (result.town) {
            deceasedUsualAddressCETown.value = result.town
        }
        if (result.post_code) {
            deceasedUsualAddressCEPostcode.value = result.post_code
        }
        divUsualAddress.classList.remove('govuk-visually-hidden')
    }
}

async function searchByCombinedAddress (data, query) {
    console.table([query, data])
    for (const item of data) {
        if (item.combined_address.toLowerCase() === query.toLowerCase()) {
            return await item
        }
    }
    return null
}

async function extractNumber (data) {
    const regex = /^(((Flats? )?\d+[-\/]?\d*[a-zA-Z]?)|^Flat [a-zA-Z] )/
    const match = data.match(regex)
    return await match ? match[0] : null
}
