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
function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    console.log(skill)
    res.render('skills/show', {
      skill,
      title: 'Skill details'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}
export {
  index,
  create,
  show
}