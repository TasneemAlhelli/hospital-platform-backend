const { User, Appointment } = require('../models')

const getAppointments = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('appointments')
    res.send(user.appointments)
  } catch (error) {}
}

const addAppointment = async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body)
    let user = await User.findById(req.params.userId)
    user.appointments.push(newAppointment._id)
    await user.save()
    user = await user.populate('appointments')
    res.send(user)
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
  getAppointments,
  addAppointment,
  deleteAppointment
}
