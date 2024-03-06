const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body
    let passwordDigest = await middleware.hashPassword(password)

    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else if (password !== confirmPassword) {
      return res.status(400).send('Password do not match!')
    } else {
      const user = await User.create({ ...req.body, passwordDigest })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      res.status(401).send('Unauthorized')
    }
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    let currentDate = new Date()
    birthDate = new Date(user.birthDate)
    let timeDiff = currentDate.getTime() - birthDate.getTime()
    let age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25))
    if (matched) {
      let payload = {
        id: user._id,
        email: user.email,
        name: user.name,
        age: age,
        cpr: user.cpr,
        gender: user.gender,
        birthDate: user.birthDate,
        medicalConditions: user.medicalConditions
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send('Unauthorized')
  } catch (error) {
    console.log(error)
    res.status(401).send('An error has occurred!')
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Register,
  Login,
  CheckSession
}
