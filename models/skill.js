import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
  text: String,
  author:{type: Schema.Types.ObjectId, ref: 'Profile'}
}, {
  timestamps: true
})

const skillsSchema = new Schema({
  name: String,
  experience: String,
  description: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  comment:[commentSchema],
})

const Skill = mongoose.model('Skill', skillsSchema)

export{
  Skill,
}