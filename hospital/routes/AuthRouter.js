const router = require('express').Router()
const controller = require('../controller/AuthController')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
// router.put('/updatepassword/:id',controller.updatePassword) 
module.exports = router
