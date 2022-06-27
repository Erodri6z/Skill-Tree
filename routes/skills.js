import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', skillsCtrl.index)





export{
  router
}