const { Schema } = require('mongoose')

const questionShema = new Schema(
  {
    service: { type: Schema.Types.ObjectId, ref: 'Service' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    content: String,
    answer: String
  },
  {
    timestamps: true
  }
)

module.exports = questionShema
