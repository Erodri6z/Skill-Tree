import { Profile } from "../models/profile.js"
import { Skill } from "../models/skill.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "Profile"
    })
  })
}
function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    Skill.find({})
    .then(skill => {
      const isSelf = profile._id.equals(req.user.profile._id)
      res.render("profiles/show", {
        title: `${profile.name}'s profile`,
        skill,
        profile,
        isSelf
      })
    })  
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export {
  index,
  show,
}