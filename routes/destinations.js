import { Router } from 'express'
import * as destinationsCtrl from './../controllers/destinations.js'

const router = Router()

router.get('/', destinationsCtrl.index)
router.post('/', destinationsCtrl.create)
router.delete('/:id', destinationsCtrl.delete)

export {
  router
}