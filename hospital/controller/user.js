const { User } = require('../models')

const getUserInfo = async (req, res) => {
  try {
    let userId = res.locals.payload.id
    const user = await User.findById(userId)
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}

const updateUserInfo = async (req, res) => {
  try {
    let userId = res.locals.payload.id
    const user = await User.findById(userId)
    console.log('req.body', req.body)
    await user.updateOne(req.body)
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getUserInfo,
  updateUserInfo
}
