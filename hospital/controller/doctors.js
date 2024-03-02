const { Doctor, Service } = require('../models')

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
    const doctor = await Doctor.findById(req.params.id).populate('appointments')
    let doctorStartShift = new Date(doctor.schedule.start)
    let doctorEndShift = new Date(doctor.schedule.end)
    let avalibleSlot = []
    while (doctorStartShift < doctorEndShift) {
      const isReserved = doctor.appointments.some(
        (appointment) =>
          doctorStartShift >= appointment.time &&
          doctorStartShift < appointment.time + 20
      )

      if (!isReserved) {
        availableTimeSlots.push(currentTime)
      }

      doctorStartShift.setMinutes(doctorStartShift.getMinutes() + 20)
    }
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
