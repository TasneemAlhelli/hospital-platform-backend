var express = require('express')
var router = express.Router()
const servicesCtrl = require('../controller/services')

router.get('/services', servicesCtrl.getservices)
router.post('/services', servicesCtrl.addservice)
router.get('/services/:id', servicesCtrl.getservice)

module.exports = router
