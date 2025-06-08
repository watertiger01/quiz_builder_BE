import User from '../models/userModels.js'
import Link from '../models/linkModel.js'
export const getAllUsers = async () => {
  const users = await User.find()
  return users
}
export const createLink = async (req) => {
  const linkobj = req.body
  try {
    const link = new Link(linkobj)
    await link.save()
    return link
  } catch (error) {
    console.log('error', error)
  }
  return {}
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
