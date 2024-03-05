const { Question } = require('../models')

const index = async (req, res) => {
  try {
    const questions = await Question.find({}).populate('user')
    res.send(questions)
  } catch (error) {}
}

const createQuestion = async (req, res) => {
  try {
    req.body.user = res.locals.payload.id
    const newQuestion = await Question.create(req.body)
    const questions = await Question.find({}).populate('user')
    res.send(questions)
  } catch (error) {}
}

const answerToQuestion = async (req, res) => {
  console.log(req.body)
  let question = await Question.findById(req.params.questionId)
  const updatedQuestion = await Question.updateOne({
    answer: req.body.answer
  })
}

module.exports = {
  index,
  createQuestion,
  answerToQuestion
}
