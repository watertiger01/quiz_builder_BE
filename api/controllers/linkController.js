import User from '../models/userModels.js'
import Link from '../models/linkModel.js'

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

export const getLinks = async (req) => {
  const { type } = req.query;
  const links = await Link.find({ type: Number(type), deleted: false }).select('id type link -_id');
  return links
}


export const deleteLink = async (req) => {
  const { id } = req.params;

  try {
    const result = await Link.findOneAndUpdate(
      { id: Number(id) }, // match by auto-incremented id
      { deleted: true },
      { new: true } // return updated doc
    );

    return result;
  } catch (error) {
    console.error('Error deleting link:', error);
    return null;
  }
};
