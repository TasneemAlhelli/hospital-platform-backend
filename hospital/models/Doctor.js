const { Schema } = require('mongoose')

const doctorSchema = new Schema(
  {
    image: String,
    name: String,
    email: String,
    specialization: String,
    experience: String,
    phone: String,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Unknown'],
      default: 'Unknown'
    },
    service: { type: Schema.Types.ObjectId, ref: 'Service' },
    schedule: {
      start: String,
      end: String
    },
    appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }]
  },
  {
    timestamps: true
  }
)

module.exports = doctorSchema
