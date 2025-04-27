import User from '../models/userModels.js'

export const getAllUsers = async () => {
  const users = await User.find()
  return users
}

export const saveUser = async (req) => {
  const userobj = req.body
  try {
    const user = new User(userobj)
    await user.save()
    return user
  } catch (error) {
    console.log('error', error)
  }
  return {}
}
