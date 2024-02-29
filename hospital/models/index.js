const mongoose = require('mongoose')

const userSchema = require('./User')
const doctorSchema = require('./Doctor')
const serviceSchema = require('./Service')
const appointmentSchema = require('./Appointment')

const User = mongoose.model('User', userSchema)
const Doctor = mongoose.model('Doctor', doctorSchema)
const Service = mongoose.model('Service', serviceSchema)
const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = {
  User,
  Doctor,
  Service,
  Appointment
}
