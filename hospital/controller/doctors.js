const { Doctor, Service } = require('../models')
const moment = require('moment')
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({})
    res.send(doctors)
  } catch (error) {
    console.log(error)
  }
}

const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
    res.send(doctor)
  } catch (error) {
    console.log(error)
  }
}
const addDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.create(req.body)
    const serviceId = newDoctor.service
    const service = await Service.findById(serviceId)
    service.doctors.push(newDoctor._id)
    await service.save()
    res.send(newDoctor)
  } catch (error) {
    console.log(error)
  }
}
const doctorSlot = async (req, res) => {
  try {
    const { date } = req.body
    const doctor = await Doctor.findById(req.params.id).populate('appointments')
    const allAppintments = doctor.appointments.filter(
      (appointment) => appointment.date == date
    )
    const allAppintmentsTime = allAppintments.map((a) => a.time)
    let doctorStartShift = doctor.schedule.start
    let doctorEndShift = doctor.schedule.end
    let avalibleSlots = []
    let currentTime = moment(doctorStartShift, 'HH:mm')

    while (moment(currentTime).isBefore(moment(doctorEndShift, 'HH:mm'))) {
      if (!allAppintmentsTime.includes(currentTime)) {
        avalibleSlots.push(moment(currentTime).format('HH:mm'))
        currentTime.add(20, 'minutes')
      }
    }
    console.log(avalibleSlots)
    res.send(avalibleSlots)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getDoctors,
  getDoctor,
  addDoctor,
  doctorSlot
}
