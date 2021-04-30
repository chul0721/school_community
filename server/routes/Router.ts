import { main, join } from '../api/index'
import Router from 'express'

const router = Router()

router.get('/', main)
router.get('/api', main)
router.post('/api/join', join)

export default router