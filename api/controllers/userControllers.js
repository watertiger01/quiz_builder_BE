const User = require('../models/userModels')

// Business logic: fetch users from DB
exports.getAllUsers = async () => {
  const users = await User.find()
  return users
}
