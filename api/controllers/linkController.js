import Link from '../models/linkModel.js'

export const createLink = async (req) => {
  const linkobj = req.body
  const link = new Link(linkobj)
  await link.save()
  const result = {
    id: link.id,
    type: link.type,
    link: link.link,
  }
  return result
}

export const getLinks = async (req) => {
  const { type } = req.query
  const links = await Link.find({ type: type, deleted: false }).select(
    'id type link -_id'
  )
  return links
}

export const deleteLink = async (req) => {
  const { id } = req.params
  const result = await Link.findOneAndUpdate(
    { id: Number(id) }, // match by auto-incremented id
    { deleted: true },
    { new: true }
  )
  return result
}
