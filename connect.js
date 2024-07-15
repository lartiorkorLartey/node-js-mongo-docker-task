const mongoose = require('mongoose')

const dbUser=process.env.user;
const dbPassword=process.env.password;

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${dbUser}:${dbPassword}@mongodb`);
    console.log('db connected')
  } catch (error) {
    console.log(error)
  }
}

module.exports ={
  connectDB
}