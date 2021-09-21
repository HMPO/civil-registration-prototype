const formatters = require('hmpo-form-wizard').Controller.formatters

Object.assign(formatters, {

    'boolean-strict': function booleanstrict (value) {
        return !!formatters.boolean(value)
    },

    'boolean-unknown': function booleanunknown (value) {
        return value === 'unknown' ? value : formatters.boolean(value)
    },

    removepexprefix: function removepexprefix (value) {
        return typeof value === 'string' ? value.replace(/^(PEX|POD)\s*/, '') : value
    }

})
