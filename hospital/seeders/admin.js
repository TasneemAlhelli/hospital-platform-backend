const mongoose = require('mongoose')
const { User } = require('../models')
require('dotenv').config()
const { hashPassword } = require('../middleware')

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB . . .')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const createAdmins = async () => {
  let admins = [
    {
      name: 'Tasneem',
      email: 'tasneem@gmail.com',
      passwordDigest: await hashPassword('gahospital'),
      role: 'Admin',
      gender: 'Female'
    },
    {
      name: 'Zahraa',
      email: 'zahraa@gmail.com',
      passwordDigest: await hashPassword('gahospital'),
      role: 'Admin',
      gender: 'Female'
    },
    {
      name: 'Shaikha',
      email: 'shaikha@gmail.com',
      passwordDigest: await hashPassword('gahospital'),
      role: 'Admin',
      gender: 'Female'
    }
  ]
  console.log('Creating Admins . . .')
  await User.insertMany(admins)
  console.log('Admins created!')
  mongoose.connection.close()
}

createAdmins()
