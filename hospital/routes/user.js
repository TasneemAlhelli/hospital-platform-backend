var express = require('express')
var router = express.Router()
const userCtrl = require('../controller/user')
const middleware = require('../middleware')

router.get(
  '/user',
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.getUserInfo
)
router.put(
  '/user',
  middleware.stripToken,
  middleware.verifyToken,
  userCtrl.updateUserInfo
)

module.exports = router
