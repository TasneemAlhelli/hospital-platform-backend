const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controller/reviews')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  reviewsCtrl.create
)

module.exports = router
