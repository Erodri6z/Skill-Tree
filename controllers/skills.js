import{ Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skill => {
    res.render('skills/index', {
      skill,
      title : 'skills'
    })
  })
}

export {
  index
}