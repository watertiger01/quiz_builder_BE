import mongoose from 'mongoose'
import AutoIncrementFactory from 'mongoose-sequence'

const AutoIncrement = AutoIncrementFactory(mongoose)

const linkSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
    },
    link: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.plugin(AutoIncrement, { inc_field: 'id' })

const Link = mongoose.model('Link', linkSchema)

export default Link
