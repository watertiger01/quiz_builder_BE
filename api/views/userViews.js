const userController = require('../controllers/userControllers')

// View layer handles request, calls controller, sends response
exports.getAllUsersView = async (req, res) => {
  try {
    const users = await userController.getAllUsers()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
