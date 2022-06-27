import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills,
      title: 'Skills'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/skills')
  })
}

export {
  index,
  create
}