const BaseController = require('.')

class InformantController extends BaseController {
    successHandler (req, res, next) {
        super.successHandler(req, res, next)
    }
}

module.exports = InformantController
