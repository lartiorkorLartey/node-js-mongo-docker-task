const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://admin:password@localhost:27017');
    console.log('db connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports ={
    connectDB
}