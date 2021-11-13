import { Router } from 'express'
import * as profileCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.use(decodeUserFromToken)

router.get('/', checkAuth, profileCtrl.show);




/*---------- Protected Routes ----------*/


export { router }