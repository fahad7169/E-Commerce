import express from 'express'
import { login, register } from '../controllers/auth.controller'
import { verifyToken } from '../middlewares/auth.middleware'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/me', verifyToken, (req, res) => {
  res.json({ message: 'Protected route access!', user: req.user })
})

export default router
