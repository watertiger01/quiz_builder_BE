import * as userController from '../controllers/userControllers.js'
import * as linkController from '../controllers/linkController.js'
export const getLinks = async (req, res) => {
  try {
    const links = await linkController.getLinks(req)
    res.status(200).json(links)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
export const createLinkView = async (req, res) => {
  try {
    const user = await linkController.createLink(req)
    if (!user) {
      res.status(500).json({ success: false, message: 'Server Error' })
    } else {
      res.status(201).json({ success: true, data: user })
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
