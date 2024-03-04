var express = require('express')
var router = express.Router()
const questionCtrl = require('../controller/questions')

router.get('/', questionCtrl.index)
router.post('/', questionCtrl.createQuestion)
router.put('/:questionId', questionCtrl.answerToQuestion)
