import mongoose from 'mongoose'


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  skills: [{type: mongoose.Schema.Types.ObjectId, ref: 'Skill'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
