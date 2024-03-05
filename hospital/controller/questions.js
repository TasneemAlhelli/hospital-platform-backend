const { Question } = require('../models')

const index = async (req, res) => {
  try {
    const questions = await Question.find({})
      .populate('user')
      .populate('service')
    res.send(questions)
  } catch (error) {
    console.log(error)
  }
}

const createQuestion = async (req, res) => {
  try {
    req.body.user = res.locals.payload.id
    const newQuestion = await Question.create(req.body)
    const questions = await Question.find({})
      .populate('user')
      .populate('service')
    res.send(questions)
  } catch (error) {
    console.log(error)
  }
}

const answerToQuestion = async (req, res) => {
  try {
    let question = await Question.findById(req.params.questionId)
    const updatedQuestion = await question.updateOne({
      answer: req.body.answer
    })

    const questions = await Question.find({})
      .populate('user')
      .populate('service')
    res.send(questions)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  index,
  createQuestion,
  answerToQuestion
}
