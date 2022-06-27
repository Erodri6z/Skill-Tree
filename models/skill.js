import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  skillName: String,
  experienceLevel: String,
  description: String,
})

const Skill = mongoose.model('Skill', skillSchema)

export{
  Skill
}