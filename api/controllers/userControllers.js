import User from '../models/userModels'

// const User = require('../models/userModels')

// Business logic: fetch users from DB
exports.getAllUsers = async () => {
  const users = await User.find()
  return users
}
// saveUser

exports.saveUser = async (req) => {
  console.log("byee")
  try{
    const user =  new User({});
    console.log("user",user)
  }
  // const user =  new User();
  // console.log("u",user)
  catch(error){
    console.log("error",error)
  }
  return {}
  return users
}