const mongoose = require('mongoose')

const userSchema = require('./User')
const doctorSchema = require('./Doctor')
const serviceSchema = require('./Service')
const appointmentSchema = require('./Appointment')
const reviewSchema = require('./Review')

const User = mongoose.model('User', userSchema)
const Doctor = mongoose.model('Doctor', doctorSchema)
const Service = mongoose.model('Service', serviceSchema)
const Appointment = mongoose.model('Appointment', appointmentSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  User,
  Doctor,
  Service,
  Appointment,
  Review
}
