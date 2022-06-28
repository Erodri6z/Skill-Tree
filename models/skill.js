import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
})

const skillsSchema = new Schema({
  name: String,
  experience: String,
  description: String,
  comment:[commentSchema]
})

const Skill = mongoose.model('Skill', skillsSchema)

export{
  Skill
}