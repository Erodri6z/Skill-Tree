import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillsSchema = new Schema({
  name: String,
  experience: String,
  description: String,
})

const Skill = mongoose.model('Skill', skillsSchema)

export{
  Skill
}