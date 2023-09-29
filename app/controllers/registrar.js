const BaseController = require('.')

class RegistrarController extends BaseController {
    successHandler (req, res, next) {
        this.setMCCDNewOrOld(req)
        super.successHandler(req, res, next)
    }

    setMCCDNewOrOld (req) {
        let newMCCD
        const MCCDDateOfIssue = req.sessionModel.get('MCCDDateMedicalCertificateIssued')

        if (MCCDDateOfIssue) {
            const dateToUseNewMCCD = '2024-04-01'

            if (MCCDDateOfIssue <= dateToUseNewMCCD) {
                newMCCD = false
            } else {
                newMCCD = true
            }
        }
        req.sessionModel.set('newMCCD', newMCCD)
    }
}

module.exports = RegistrarController
