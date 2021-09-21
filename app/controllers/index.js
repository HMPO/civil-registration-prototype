const BaseController = require('hmpo-form-wizard').Controller
const DateMixin = require('hmpo-components').mixins.Date

class DefaultController extends DateMixin(BaseController) {
    middlewareSetup () {
        super.middlewareSetup()
        this.use(this.logSessionChanges)
        this.use(this.clearBannerCookie)
    }

    logSessionChanges (req, res, next) {
        req.sessionModel.on('change', changes => {
            delete changes.errorValues
            console.log(req.originalUrl, changes)
        })
        next()
    }

    getValues (req, res, next) {
        let backURL = req.sessionModel.get('backURL')
        if  (backURL && backURL === req.originalUrl){ //clears backURL when redirected back
            req.sessionModel.set('backURL', undefined)
        }
        req.sessionModel.set('currentURL', req.originalUrl)
        console.log('Getting values')
        if  (req.query.cookies === 'clear') {
            res.clearCookie('cookiesAccepted', { domain: req.hostname, path: '/' })
            console.log('Cookies Cleared')
            req.cookies['cookiesAccepted'] = undefined
        }
        else if(req.query['cookies'] != null) {
            res.cookie('cookiesAccepted', true)
            req.cookies['cookiesAccepted'] = true
            console.log('Set cookie value')
        }
        if (req.query['backURL']) {
            req.sessionModel.set('backURL', req.query['backURL'])
        }
        req.sessionModel.set ('cookies', req.cookies)
        super.getValues (req, res, next)
    }

    clearBannerCookie(req,res,next) {
        next()
    }
}

module.exports = DefaultController
