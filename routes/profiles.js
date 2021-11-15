import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/





/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.get('/', checkAuth, profileCtrl.show);
router.delete('/:id', checkAuth, profileCtrl.delete)
router.put('/:id', checkAuth, profileCtrl.update)

export { router }