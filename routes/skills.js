import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', skillsCtrl.index)

router.get('/:id', skillsCtrl.show)

router.get('/:id/edit', skillsCtrl.edit)

router.post('/:id', isLoggedIn, skillsCtrl.createComment)

router.post('/', isLoggedIn, skillsCtrl.create)

router.delete('/:id',isLoggedIn, skillsCtrl.delete)

router.delete('/:skillId/comments/:commentId', skillsCtrl.deleteComment)

router.put('/:id', skillsCtrl.update)




export {
  router
}