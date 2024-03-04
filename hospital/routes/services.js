var express = require('express')
var router = express.Router()
const servicesCtrl = require('../controller/services')
const middleware = require('../middleware')

router.get('/', servicesCtrl.getservices)

router.get(
  '/filter',
  //   middleware.stripToken,
  //   middleware.verifyToken,
  servicesCtrl.filterServices
)

router.post('/', servicesCtrl.addservice)
router.get('/:id', servicesCtrl.getservice)

module.exports = router
