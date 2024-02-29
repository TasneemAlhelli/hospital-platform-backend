const { Doctor } = require('../models')

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({})
    res.send(doctors)
  } catch (error) {
    console.log(error)
  }
}

const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id)
    res.send(doctor)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getDoctors,
  getDoctor
}
