const { format } = require('date-fns')
const { User, Appointment, Doctor } = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const APP_SECRET = process.env.APP_SECRET

const getUserInfo = async (req, res) => {
  try {
    const { token } = res.locals
    // console.log('token', token)
    let payload = jwt.verify(token, APP_SECRET)
    let userId = payload.id
    const user = await User.findById(userId)
    // console.log(user)
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
    const userId = res.locals.payload.id
    const user = await User.findById(userId).populate('appointments')
    res.send(user.appointments)
  } catch (error) {
    console.log(error)
  }
}

const appointmentStatus = async (req, res) => {
  try {
    const { token } = res.locals
    let payload = jwt.verify(token, APP_SECRET)
    let userId = payload.id
    const user = await User.findById(userId).populate({
      path: 'appointments',
      populate: {
        path: 'doctor'
      }
    })
    const today = format(new Date(), 'yyyy-MM-dd')

    let apps = user.appointments.filter((appointment) => {
      const appDate = format(new Date(appointment.date), 'yyyy-MM-dd')
      if (req.params.status === 'completed') {
        return appDate < today
      } else {
        return appDate >= today
      }
    })

    res.send(apps)
  } catch (error) {
    console.log(error)
  }
}
const addAppointment = async (req, res) => {
  try {
    req.body.user = res.locals.payload.id
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
    const { token } = res.locals
    console.log('token', token)
    let payload = jwt.verify(token, APP_SECRET)
    let userId = payload.id
    const user = await User.findById(userId)
    const deletedappointmentIndex = user.appointments.findIndex(
      (appointment) => appointment == `objectId('${req.params.appoimentId}')`
    )
    user.appointments.splice(deletedappointmentIndex, 1)
    await user.save()
    //await Appointment.deleteOne({ _id: req.params.appoimentId })
    console.log(user)
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
