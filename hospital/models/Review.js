const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    appointment: { type: Schema.Types.ObjectId, ref: 'Appointment' },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    comment: String,
    hospitalRate: { type: Number, require },
    rate: { type: Number, require }
  },
  {
    timestamps: true
  }
)

module.exports = reviewSchema
