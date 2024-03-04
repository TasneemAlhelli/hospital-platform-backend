const { Review, Appointment } = require('../models')

const create = async (req, res) => {
  try {
    req.body.user = res.locals.payload.id
    const appointment = await Appointment.findById(req.body.appointment)
    req.body.doctor = appointment.doctor

    const review = await Review.create(req.body)
    res.send(review)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create
}
