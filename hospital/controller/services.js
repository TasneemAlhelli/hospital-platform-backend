const { Service } = require('../models')

const getservices = async (req, res) => {
  try {
    const services = await Service.find({})
    res.send(services)
  } catch (error) {
    console.log(error)
  }
}

const getservice = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
    res.send(service)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  getservices,
  getservice
}
