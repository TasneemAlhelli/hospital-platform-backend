var express = require('express')
var router = express.Router()
const doctorCtrl = require('../controller/doctors')

router.get('/', doctorCtrl.getDoctors)
router.post('/', doctorCtrl.addDoctor)

router.post('/:id/slot', doctorCtrl.doctorSlot)

router.get('/:id', doctorCtrl.getDoctor)

module.exports = router
