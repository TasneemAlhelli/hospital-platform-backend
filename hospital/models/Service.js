const { Schema } = require('mongoose')

const serviceSchema = new Schema(
  {
    image: String,
    name: String,
    description: String,
    phone: String,
    price: Number,
    doctors: [{ type: Schema.Types.ObjectId, ref: 'Doctor' }],
    minAge: Number,
    maxAge: Number,
    genderInterest: {
      type: String,
      enum: ['Male', 'Female', 'Unknown'],
      default: 'Unknown'
    },
    specialization: String
  },
  {
    timestamps: true
  }
)

module.exports = serviceSchema
