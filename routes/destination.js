import { Router } from 'express'
import * as destinationCtrl from './../controllers/destination.js'

const router = Router()

router.post('/', destinationCtrl.create)

export {
  router
}