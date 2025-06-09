import * as linkController from '../controllers/linkController.js'

export const getLinks = async (req, res) => {
  try {
    const links = await linkController.getLinks(req)
    res.status(200).json(links)
  } catch (err) {
    console.error('Error in getLinks:', err)
    res.status(500).json({ message: err.message || 'Server Error' })
  }
}

export const createLinkView = async (req, res) => {
  try {
    const link = await linkController.createLink(req)
    res.status(201).json({ success: true, data: link })
  } catch (err) {
    console.error('Error in createLinkView:', err)
    res.status(500).json({ message: err.message || 'Server Error' })
  }
}

export const deleteLinkView = async (req, res) => {
  try {
    const result = await linkController.deleteLink(req)
    if (!result) {
      return res.status(404).json({ success: false, message: 'Link not found' })
    }
    res
      .status(200)
      .json({
        success: true,
        message: 'Link deleted successfully',
        data: result,
      })
  } catch (err) {
    console.error('Error in deleteLinkView:', err)
    res.status(500).json({ message: err.message || 'Server Error' })
  }
}
