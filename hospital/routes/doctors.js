var express = require('express')
var router = express.Router()
const doctorCtrl = require('../controller/doctors')

router.get('/doctors', doctorCtrl.getDoctors)
router.post('/doctors', doctorCtrl.addDoctor)

router.get('/doctors/:id', doctorCtrl.getDoctor)

module.exports = router
