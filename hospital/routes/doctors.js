var express = require('express')
var router = express.Router()
const doctorCtrl = require('../controller/doctors')

router.get('/doctors', doctorCtrl.getDoctors)
router.get('/doctors/:id', doctorCtrl.getDoctor)

module.exports = router
