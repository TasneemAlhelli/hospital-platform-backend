var express = require('express')
var router = express.Router()
const servicesCtrl = require('../controller/services')

router.get('/', servicesCtrl.getservices)
router.get('/filter', servicesCtrl.filterServices)

router.post('/', servicesCtrl.addservice)
router.get('/:id', servicesCtrl.getservice)

module.exports = router
