import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'

import cookieParser from "cookie-parser";




dotenv.config()

const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100, // max requests per IP
  message: 'Too many requests, please try again later.',
})
app.use(cors({
  origin: 'http://localhost:5173', // Frontend origin
  credentials: true, // Allow credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(cookieParser());

app.use(express.json())

app.use('/auth',limiter ,authRoutes)
app.use(helmet())


app.use('/test', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
