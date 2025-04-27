// import userController from '../controllers/userControllers.js';
import userController from ''
// View layer handles request, calls controller, sends response
exports.getAllUsersView = async (req, res) => {
  try {
    const users = await userController.getAllUsers()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
exports.saveUserView = async(req,res) => {
  try {
    console.log("hi")
    const user = await userController.saveUser()
    // console.log("req.body",req.body)
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}