var express = require('express')
var router = express.Router()
const userCtrl = require('../controller/user')

router.get('/user/:userId', userCtrl.getUserInfo)
router.put('/user/:userId', userCtrl.updateUserInfo)
router.get('/user/:userId/appointments', userCtrl.getAppointments)
router.post('/user/:userId/appointment', userCtrl.addAppointment)
router.delete(
  '/user/:userId/appointment/:appoimentId',
  userCtrl.deleteAppointment
)
router.get('/user/:userId/appointments/:status', userCtrl.appointmentStatus)

module.exports = router
