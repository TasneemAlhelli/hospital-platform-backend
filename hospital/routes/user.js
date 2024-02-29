var express = require('express')
var router = express.Router()
const userCtrl = require('../controller/user')

router.get('/user/:userId/appointment', userCtrl.getAppointments)
router.post('/user/:userId/appointment', userCtrl.addAppointment)
router.delete(
  '/user/:userId/appointment/:appoimentId',
  userCtrl.deleteAppointment
)

module.exports = router
