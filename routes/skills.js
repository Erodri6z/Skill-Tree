import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', skillsCtrl.index)

router.get('/:id', skillsCtrl.show)

router.get('/:id/edit', skillsCtrl.edit)

router.post('/:id', skillsCtrl.createComment)

router.post('/', skillsCtrl.create)



export{
  router
}