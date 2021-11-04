import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', usersCtrl.index);



/*---------- Protected Routes ----------*/


export { router }