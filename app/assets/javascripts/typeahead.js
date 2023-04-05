const accessibleAutocomplete = require('accessible-autocomplete');

const countries = [
    'France',
    'Germany',
    'United Kingdom'
]

accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container'),
    id: 'my-autocomplete', // To match it to the existing <label>.
    source: countries
})

accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container2'),
    id: 'my-autocomplete2', // To match it to the existing <label>.
    source: countries
})
