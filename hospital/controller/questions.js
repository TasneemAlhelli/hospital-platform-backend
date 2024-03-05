const { Question } = require('../models')

const index = async (req, res) => {
  try {
    const questions = await Question.find({})
    res.send(questions)
  } catch (error) {}
}

const createQuestion = async (req, res) => {
  try {
    req.body.user = res.locals.payload.id
    const newQuestion = await Question.create(req.body)
    res.send(newQuestion)
  } catch (error) {}
}

const answerToQuestion = async (req, res) => {
  const updatedQuestion = await Question.findByIdAndUpdate(
    req.params.questionId,
    { answer },
    { new: true }
  )
}

module.exports = {
  index,
  createQuestion,
  answerToQuestion
}
