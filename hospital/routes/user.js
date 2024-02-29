var express = require('express')
var router = express.Router()
const userCtrl = require('../controller/user')

router.get('/user/:userId/appoiment', userCtrl.getAppointments)
router.post('/user/:userId/appoiment', userCtrl.addAppointment)
router.delete(
  '/user/:userId/appoiment/:appoimentId',
  userCtrl.deleteAppointment
)

module.exports = router
