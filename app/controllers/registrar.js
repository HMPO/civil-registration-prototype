const BaseController = require('.')

class RegistrarController extends BaseController {
    successHandler (req, res, next) {
        super.successHandler(req, res, next)
    }
}

module.exports = RegistrarController
