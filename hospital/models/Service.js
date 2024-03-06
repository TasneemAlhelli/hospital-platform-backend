const { Schema } = require('mongoose')

const serviceSchema = new Schema(
  {
    image: String,
    name: {type: String, require},
    description: {type: String, require},
    phone: String,
    price: Number,
    doctors: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }],
    minAge: Number,
    maxAge: Number,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'All'],
      default: 'All'
    },
    specialization: String
  },
  {
    timestamps: true
  }
)

module.exports = serviceSchema
