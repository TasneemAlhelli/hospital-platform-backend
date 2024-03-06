const { Schema } = require('mongoose')

const appointmentSchema = new Schema(
  {
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, require },
    time: { type: String, require },
    notes: String,
    completed: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
)

module.exports = appointmentSchema
