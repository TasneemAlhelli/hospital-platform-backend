const { Schema } = require('mongoose')

const appointmentSchema = new Schema(
  {
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    time: String,
    notes: String,
    complated: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = appointmentSchema
