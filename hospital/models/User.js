const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    image: String,
    name: { type: String, require },
    email: { type: String, require },
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
      ],
      default: 'other'
    }
  },
  {
    timestamps: true
  }
)

module.exports = userSchema
