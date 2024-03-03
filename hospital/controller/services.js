const { Service, User } = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const APP_SECRET = process.env.APP_SECRET

const getservices = async (req, res) => {
  try {
    const services = await Service.find({}).populate('doctors')
    res.send(services)
  } catch (error) {
    console.log(error)
  }
}
const filterServices = async (req, res) => {
  try {
    const { token } = res.locals
    let payload = jwt.verify(token, APP_SECRET)
    let userId = payload.id
    const user = await User.findById(userId)

    let currentDate = new Date()
    let birthDate = new Date(user.birthDate)
    let timeDiff = currentDate.getTime() - birthDate.getTime()
    let age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25))

    let filter = {
      minAge: { $lte: age },
      $or: [{ maxAge: { $gte: age } }, { maxAge: null }],
      $or: [{ gender: 'All' }, { gender: user.gender }],
      // specialization: {
      //   $in:
      //     user.medicalConditions.length > 0
      //       ? [user.medicalConditions, 'other']
      //       : 'other'
      // }
    }

    const filterServices = await Service.find(filter)
    res.send(filterServices)
  } catch (error) {
    console.log(error)
  }
}
const getservice = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate('doctors')
    res.send(service)
  } catch (error) {
    console.log(error)
  }
}

const addservice = async (req, res) => {
  try {
    const newService = await Service.create(req.body)
    res.send(newService)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getservices,
  getservice,
  addservice,
  filterServices
}
