var express = require('express')
var router = express.Router()
const servicesCtrl = require('../controller/doctor')

router.get('/services', servicesCtrl.getservices)
router.get('/services/:id', servicesCtrl.getservice)

module.exports = router
