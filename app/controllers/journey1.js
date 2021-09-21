const BaseController = require('.')

class Journey1Controller extends BaseController {
    successHandler (req, res, next) {
        super.successHandler(req, res, next)
    }
}

module.exports = Journey1Controller
