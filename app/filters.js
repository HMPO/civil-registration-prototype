module.exports = function (env) {
    /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
    var filters = {}

    /* ------------------------------------------------------------------ */

    const countries = require('./data/birth-countries')
    const countryNames = {}
    countries.map(country => { countryNames[country.value] = country.text })
    filters.countryName = code => countryNames[code]

    const yesNoUnknown = { true: 'Yes', false: 'No', unknown: 'Not known' }
    filters.yesNoUnknown = bool => yesNoUnknown[bool]

    /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
    return filters
}
