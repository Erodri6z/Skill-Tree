import { Skill } from '../models/skill.js'

function index(req, res) {
  Skill.find({})
  .populate('owner')
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
  req.body.owner = req.user.profile.id
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
	}
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
  .populate('owner')
  .populate('comment.author')
  .then(skill => {
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
    req.body.author = req.user.profile
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

function deleteComment(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    console.log(skill)
    skill.comment.remove({_id: req.params.commentId })
    skill.save()
    .then(savedSkill => {
      res.redirect(`/skills/${skill._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/skills`)
  })
}
export {
  index,
  create,
  show,
  createComment,
  edit,
  update,
  deleteSkill as delete,
  deleteComment
}