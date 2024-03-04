const { User, Appointment, Doctor } = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const APP_SECRET = process.env.APP_SECRET

const getUserInfo = async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1]
    console.log('token', token)
    let payload = jwt.verify(token, APP_SECRET)
    let userId = payload.id
    const user = await User.findById(userId)
    console.log(user)
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}

const updateUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    await user.updateOne(req.body)
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}

const getAppointments = async (req, res) => {
  try {
    console.log('userId', req.params.userId)
    const user = await User.findById(req.params.userId).populate('appointments')
    //console.log(user)
    res.send(user.appointments)
  } catch (error) {
    console.log(error)
  }
}
const appointmentStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('appointments')
    console.log(user)
    let app = []
    const today = new Date()
    if (req.params.status === 'complated') {
      app = user.appointments.filter((appointment) => {
        return new Date(appointment.date) < today
      })
    } else if (req.params.status === 'schedule') {
      app = user.appointments.filter((appointment) => {
        return new Date(appointment.date) >= today
      })
    }
    res.send(app)
  } catch (error) {
    console.log(error)
  }
}
const addAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body)

    const userId = res.locals.payload.id

    let user = await User.findById(userId)
    user.appointments.push(newAppointment._id)
    await user.save()

    let doctor = await Doctor.findById(req.body.doctor)
    doctor.appointments.push(newAppointment._id)
    await doctor.save()

    res.send(newAppointment)
  } catch (error) {
    console.log(error)
  }
}

const deleteAppointment = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    const deletedappointmentIndex = user.appointments.findIndex(
      (appointment) => appointment == `objectId('${req.params.appoimentId}')`
    )
    user.appointments.splice(deletedappointmentIndex, 1)
    await user.save()
    //await Appointment.deleteOne({ _id: req.params.appoimentId })
    res.send(user)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getUserInfo,
  updateUserInfo,
  getAppointments,
  addAppointment,
  deleteAppointment,
  appointmentStatus
}
