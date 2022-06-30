import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  text: String,
  author:{type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const skillsSchema = new Schema({
  name: String,
  experience: String,
  description: String,
  comment: [commentSchema],
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
})

const Skill = mongoose.model('Skill', skillsSchema)

export{
  Skill,
}