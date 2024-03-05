var express = require('express')
var router = express.Router()
const appointmentsCtrl = require('../controller/appointments')
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
router.post(
  '/user/appointment',
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.addAppointment
)
router.delete(
  '/user/appointment/:appoimentId',
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.deleteAppointment
)

module.exports = router
