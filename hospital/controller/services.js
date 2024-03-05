const { Service, User, Review } = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const APP_SECRET = process.env.APP_SECRET

const getDoctorReviews = async (doctors = []) => {
  try {
    let doctorReviews = []

    if (doctors.length > 0) {
      doctorReviews.push({
        $match: { doctor: { $in: doctors } }
      })
    }

    doctorReviews.push({
      $group: {
        _id: '$doctor',
        avgRating: { $avg: '$rate' }
      }
    })

    doctorReviews = await Review.aggregate(doctorReviews)
    return doctorReviews
  } catch (error) {
    console.log(error)
  }
}

const getservices = async (req, res) => {
  try {
    const services = await Service.find({}).populate('doctors')
    const doctorReviews = await getDoctorReviews()
    res.send({ services, doctorReviews })
  } catch (error) {
    console.log(error)
  }
}

const filterServices = async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1]
    if (token) {
      console.log('token', token)
      let payload = jwt.verify(token, APP_SECRET)
      let userId = payload.id
      const user = await User.findById(userId)
      console.log(user)
      const filterServices = await Service.find({
        minAge: { $lte: payload.age },
        maxAge: { $gte: payload.age },
        specialization: { $in: [...user.medicalConditions, 'other'] },
        $or: [{ gender: 'All' }, { gender: user.gender }]
      })

      res.send(filterServices)
      // console.log('filterServices', filterServices)
    } else {
      console.log('token not find')
    }
  } catch (error) {
    console.log(error)
  }
}
const getservice = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate('doctors')
    const doctorIds = service.doctors.map((doctor) => doctor._id)
    const doctorReviews = await getDoctorReviews(doctorIds)
    res.send({ service, doctorReviews })
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
