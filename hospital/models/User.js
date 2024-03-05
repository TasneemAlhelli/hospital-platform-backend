const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    image: String,
    name: String,
    email: String,
    passwordDigest: String,
    cpr: Number,
    role: { type: String, enum: ['Admin', 'User'], default: 'User' },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Unknown'],
      default: 'Unknown'
    },
    birthDate: Date,
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
    medicalConditions: {
      type: String,
      enum: [
        'General Medicine',
        'Pediatrics',
        'Obstetrics and Gynecology',
        'Urology',
        'Dentistry',
        'Dermatology',
        'Cardiology',
        'Orthopedics',
        'Psychiatry',
        'Physical Therapy',
        'Occupational Therapy',
        'Allergology',
        'other'
      ]
    }
  },
  {
    timestamps: true
  }
)

module.exports = userSchema
