import { Router } from 'express'
import * as destinationsCtrl from './../controllers/destinations.js'

const router = Router()

router.post('/', destinationsCtrl.create)
router.delete('/:id', destinationsCtrl.delete)

export {
  router
}