import { config  } from "dotenv";
config();

import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../types'
import { registerSchema, loginSchema } from '../validators/user'


const users: User[] = []

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export const register = async (req: Request, res: Response): Promise<any> => {
  const result = registerSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten().fieldErrors })
  }

  const { username, email, password } = result.data

  try {
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user: User = { id: Date.now(), username, email, password: hashedPassword }

    users.push(user)

    res.status(201).json({ user: { id: user.id, username, email } })
  } catch (error) {
    res.status(500).json({ message: 'Failed to register the user' })
  }
}


export const login = async (req: Request, res: Response): Promise<any> => {
  const result = loginSchema.safeParse(req.body)

  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten().fieldErrors })
  }

  const { email, password } = result.data

  try {
    const user = users.find(user => user.email === email)
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = jwt.sign({ id: user.id, email }, JWT_SECRET, { expiresIn: '1d' })

    
    // ✅ Set cookie with token (httpOnly for security)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // ❌ false for localhost (true for prod with HTTPS)
      sameSite: "lax", // ✅ safer default, use "none" in production with HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.status(200).json({ token, user: { id: user.id, username: user.username, email: user.email } })
  } catch (error) {
    res.status(500).json({ message: 'Failed to login the user' })
  }
}
