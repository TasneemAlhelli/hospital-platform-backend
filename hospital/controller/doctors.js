const { Doctor, Service, Appointment } = require('../models')
const { format } = require('date-fns')

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
    const doctor = await Doctor.findById(req.params.id).populate('service')
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

    const allApointments = doctor.appointments.filter(
      (appointment) => format(appointment.date, 'yyyy-MM-dd') === date
    )

    const allApointmentsTime = allApointments.map(
      (appointment) => appointment.time
    )

    let doctorStartShift = doctor.schedule.start
    let doctorEndShift = doctor.schedule.end

    let availableSlots = []
    let currentTime = moment(doctorStartShift, 'HH:mm')

    while (moment(currentTime).isBefore(moment(doctorEndShift, 'HH:mm'))) {
      const slot = currentTime.format('HH:mm')

      if (!allApointmentsTime.includes(slot)) {
        availableSlots.push(slot)
      }

      currentTime.add(20, 'minutes')
    }

    res.send(availableSlots)
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
