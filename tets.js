// Assuming you have the selected doctor ID
const selectedDoctorId = 'doctorId'

// Step 1: Fetch the doctor details and populate the 'appointments' field
const doctor = await Doctor.findById(selectedDoctorId).populate('appointments')

if (doctor) {
  // Step 2: Retrieve the doctor's schedule
  const doctorSchedule = doctor.schedule

  if (doctorSchedule) {
    // Step 3: Determine the occupied time slots
    const occupiedTimeSlots = doctor.appointments.map((appointment) => ({
      startTime: appointment.startTime,
      endTime: appointment.endTime
    }))

    // Step 4: Generate a list of available time slots
    const availableTimeSlots = []

    let currentTime = new Date(doctorSchedule.startTime)
    const endTime = new Date(doctorSchedule.endTime)

    while (currentTime < endTime) {
      const isOccupied = occupiedTimeSlots.some(
        (appointment) =>
          currentTime >= appointment.startTime &&
          currentTime < appointment.endTime
      )

      if (!isOccupied) {
        availableTimeSlots.push(currentTime)
      }

      currentTime.setMinutes(
        currentTime.getMinutes() + doctor.schedule.duration
      )
    }

    // Step 5: Display the available time slots to the user
    console.log(availableTimeSlots)
  } else {
    console.log('Doctor schedule not found.')
  }
} else {
  console.log('Doctor not found.')
}

///////////////intersted servises

// Define services and their attributes: Create a list of services that your hospital offers. Assign attributes to each service, such as age group, gender, and any other relevant parameters.

// Medical Conditions: If your hospital specializes in specific medical conditions, you can ask users to provide information about their medical history or current health conditions. Services can then be filtered based on the user's specific medical needs.

// Preferences or Interests: You can provide users with a set of preferences or interests related to healthcare services, such as wellness, fitness, or specific medical specialties. Services can be filtered based on the user's selected preferences to offer personalized recommendations.

// user.controller.js
const User = require('../models/user.model')
const Service = require('../models/service.model')

async function updateUser(req, res) {
  const {
    gender,
    age,
    maritalStatus,
    location,
    medicalConditions,
    languagePreference,
    insuranceCoverage,
    preferences,
    accessibilityNeeds
  } = req.body

  // Update the user's information in the database or create a new user record
  try {
    const user = await User.findOneAndUpdate(
      {},
      {
        gender,
        age,
        maritalStatus,
        location,
        medicalConditions,
        languagePreference,
        insuranceCoverage,
        preferences,
        accessibilityNeeds
      },
      { upsert: true, new: true }
    )

    const filteredServices = await Service.find({
      $or: [{ gender: 'all' }, { gender: user.gender }],
      minAge: { $lte: user.age },
      maxAge: { $gte: user.age },
      maritalStatus: { $in: [user.maritalStatus, 'all'] },
      location: { $in: [user.location, 'all'] },
      medicalConditions: { $in: [user.medicalConditions, 'all'] },
      languagePreference: { $in: [user.languagePreference, 'all'] },
      insuranceCoverage: { $in: [user.insuranceCoverage, 'all'] },
      preferences: { $in: [user.preferences, 'all'] },
      accessibilityNeeds: { $in: [user.accessibilityNeeds, 'all'] }
    })

    res.json(filteredServices)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = { updateUser }
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  gender: String,
  age: Number,
  maritalStatus: String,
  location: String,
  medicalConditions: [String],
  languagePreference: String,
  insuranceCoverage: String,
  preferences: [String],
  accessibilityNeeds: [String]
})

const User = mongoose.model('User', userSchema)

module.exports = User

const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  name: String,
  gender: {
    type: String,
    default: 'all'
  },
  minAge: {
    type: Number,
    default: 0
  },
  maxAge: {
    type: Number,
    default: 999
  },
  maritalStatus: {
    type: String,
    default: 'all'
  },
  location: {
    type: String,
    default: 'all'
  },
  medicalConditions: {
    type: [String],
    default: ['all']
  },
  languagePreference: {
    type: String,
    default: 'all'
  },
  insuranceCoverage: {
    type: String,
    default: 'all'
  },
  preferences: {
    type: [String],
    default: ['all']
  },
  accessibilityNeeds: {
    type: [String],
    default: ['all']
  }
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service

import React, { useState } from 'react'

const MyComponent = () => {
  const [schedule, setSchedule] = useState({
    start: '',
    end: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [name]: value
    }))
  }

  return (
    <div>
      <label htmlFor="startTime">Start Time:</label>
      <input
        type="time"
        id="startTime"
        name="start"
        value={schedule.start}
        onChange={handleInputChange}
      />

      <label htmlFor="endTime">End Time:</label>
      <input
        type="time"
        id="endTime"
        name="end"
        value={schedule.end}
        onChange={handleInputChange}
      />

      <p>Start Time: {schedule.start}</p>
      <p>End Time: {schedule.end}</p>
    </div>
  )
}

export default MyComponent
// -------------------

const moment = require('moment');

// Retrieve the doctor by their ID
const doctor = await Doctor.findById(doctorId);

// Get the doctor's schedule
const { start, end } = doctor.schedule;

// Retrieve the existing appointments for the doctor
const existingAppointments = await Appointment.find({
  doctor: doctorId,
  completed: false
});

// Function to generate all possible time slots within the doctor's schedule
const generateTimeSlots = (start, end, interval) => {
  const timeSlots = [];
  let currentTime = moment(start, 'HH:mm');

  while (moment(currentTime).isBefore(moment(end, 'HH:mm'))) {
    timeSlots.push(moment(currentTime).format('HH:mm'));
    currentTime.add(interval, 'minutes');
  }

  return timeSlots;
};

// Generate all possible time slots within the doctor's schedule
const allTimeSlots = generateTimeSlots(start, end, 15); // Adjust the interval as needed

// Function to filter available time slots based on chosen date
const filterTimeSlotsByDate = (date, timeSlots, appointments) => {
  const chosenDateAppointments = appointments.filter(appointment =>
    moment(appointment.date).isSame(date, 'day')
  )

  const bookedTimeSlots = chosenDateAppointments.map(appointment => appointment.time);

  const availableTimeSlots = timeSlots.filter(
    timeSlot => !bookedTimeSlots.includes(timeSlot)
  )

  return availableTimeSlots;
};

// Present available dates to the user and let them choose a date
const availableDates = existingAppointments
  .map(appointment => moment(appointment.date).format('YYYY-MM-DD'))
  .filter((date, index, self) => self.indexOf(date) === index);

// Let the user choose a date
const chosenDate = ...; // Get the chosen date from the user

// Filter available time slots based on chosen date
const availableTimeSlots = filterTimeSlotsByDate(
  chosenDate,
  allTimeSlots,
  existingAppointments
);

// Present available time slots to the user and let them choose a time
// Let the user choose a time
const chosenTime = ...; // Get the chosen time from the user

// Once the user has chosen a date and time, you can proceed with creating the appointment
const appointment = new Appointment({
  doctor: doctorId,
  user: userId,
  date: chosenDate,
  time: chosenTime,
  completed: false
});

// Save the appointment to the database
await appointment.save();

console.log('Appointment created successfully!');