const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    appointment: { type: Schema.Types.ObjectId, ref: 'Appointment' },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    comment: String,
    hospitalRate: Number,
    rate: Number
  },
  {
    timestamps: true
  }
)

module.exports = reviewSchema
