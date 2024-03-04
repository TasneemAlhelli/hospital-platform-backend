var express = require('express')
var router = express.Router()
const userCtrl = require('../controller/user')
const middleware = require('../middleware')

router.get('/user', userCtrl.getUserInfo)
router.put('/user/:userId', userCtrl.updateUserInfo)
router.get('/user/:userId/appointments', userCtrl.getAppointments)
router.post(
  '/user/appointment',
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.addAppointment
)
router.delete(
  '/user/:userId/appointment/:appoimentId',
  userCtrl.deleteAppointment
)
router.get('/user/appointments/:status', userCtrl.appointmentStatus)

module.exports = router
