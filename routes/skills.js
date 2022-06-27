import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)


export{
  router
}