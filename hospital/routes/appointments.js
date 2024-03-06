var express = require('express')
var router = express.Router()
const appointmentsCtrl = require('../controller/appointments')
const middleware = require('../middleware')
router.get(
  '/user/appointments',
  middleware.stripToken,
  middleware.verifyToken,
  appointmentsCtrl.getAppointments
)
router.get(
  '/user/appointments/:status',
  middleware.stripToken,
  middleware.verifyToken,
  appointmentsCtrl.appointmentStatus
)
router.post(
  '/user/appointment',
  middleware.stripToken,
  middleware.verifyToken,
  appointmentsCtrl.addAppointment
)
router.delete(
  '/user/appointment/:appoimentId',
  middleware.stripToken,
  middleware.verifyToken,
  appointmentsCtrl.deleteAppointment
)

module.exports = router
