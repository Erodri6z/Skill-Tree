import { Skill } from '../models/skill.js'
import { Profile } from '../models/profile.js'

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

function createComment(req, res) {
  Skill.findById(req.params.id)
  .then(skill =>{
    skill.comment.push(req.body)
    console.log(req.body)
    skill.save()
    .then(()=> {
      res.redirect(`/skills/${skill._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill,
      title: 'Edit The Talent'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/skills')
  })
}

function update(req, res) {
  Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(skill =>{
    console.log(skill)
    res.redirect(`/skills/${skill._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/skills')
  })
}
function deleteSkill(req, res){
  Skill.findByIdAndDelete(req.params.id)
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
  create,
  show,
  createComment,
  edit,
  update,
  deleteSkill as delete
}