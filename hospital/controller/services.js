const { Service, User } = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const getservices = async (req, res) => {
  try {
    const services = await Service.find({})
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
    const filterServices = await Service.find({
      minAge: { $lte: user.age },
      maxAge: { $gte: user.age },
      specialization: { $in: [user.medicalConditions, 'other'] },
      $or: [{ gender: 'all' }, { gender: user.gender }]
    })
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
