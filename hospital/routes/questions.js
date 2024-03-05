var express = require('express')
var router = express.Router()
const questionCtrl = require('../controller/questions')
const middleware = require('../middleware')

router.get('/', questionCtrl.index)
router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  questionCtrl.createQuestion
)
router.put('/:questionId', questionCtrl.answerToQuestion)

module.exports = router
