var express = require('express')
var router = express.Router()
const userCtrl = require('../controller/user')
const middleware = require('../middleware')

router.get(
  '/user/appointments',
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.getAppointments
)
router.get(
  '/user/appointments/:status',
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.appointmentStatus
)
router.get('/user/:userId', userCtrl.getUserInfo)
router.put('/user/:userId', userCtrl.updateUserInfo)
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

module.exports = router
