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
  console.log('🔵 Register attempt:', { body: req.body })
  const result = registerSchema.safeParse(req.body)

  if (!result.success) {
    console.log('❌ Register validation failed:', result.error.flatten().fieldErrors)
    return res.status(400).json({ errors: result.error.flatten().fieldErrors })
  }

  const { username, email, password } = result.data
  console.log('✅ Register validation passed:', { username, email })

  try {
    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
      console.log('❌ Email already in use:', email)
      return res.status(400).json({ message: 'Email already in use' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user: User = { id: Date.now(), username, email, password: hashedPassword }
    console.log('🔑 Password hashed successfully')

    users.push(user)
    console.log('✅ User added to database')

    const token = jwt.sign({ id: user.id, email }, JWT_SECRET, { expiresIn: '1d' })
    console.log('🎟️ JWT token generated')

     
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Keep false for localhost development
      sameSite: 'lax', // Use 'lax' instead of 'none' for HTTP
      // Remove domain property completely for localhost
      path: '/',
      maxAge: 10 * 1000
    });
    console.log('🍪 Cookie set successfully')

    res.status(201).json({user: { id: user.id, username, email } })
    console.log('✅ Registration successful')
  } catch (error) {
    console.error('❌ Registration error:', error)
    res.status(500).json({ message: 'Failed to register the user' })
  }
}

export const login = async (req: Request, res: Response): Promise<any> => {
  console.log('🔵 Login attempt:', { body: req.body })
  const result = loginSchema.safeParse(req.body)

  if (!result.success) {
    console.log('❌ Login validation failed:', result.error.flatten().fieldErrors)
    return res.status(400).json({ errors: result.error.flatten().fieldErrors })
  }

  const { email, password } = result.data
  console.log('✅ Login validation passed:', { email })

  try {
    const user = users.find(user => user.email === email)
    if (!user) {
      console.log('❌ User not found:', email)
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    console.log('🔑 Password comparison result:', isMatch)

    if (!isMatch) {
      console.log('❌ Invalid password for user:', email)
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = jwt.sign({ id: user.id, email }, JWT_SECRET, { expiresIn: '1d' })
    console.log('🎟️ JWT token generated')
    
    // ✅ Set cookie with token (httpOnly for security)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Keep false for localhost development
      sameSite: 'lax', // Use 'lax' instead of 'none' for HTTP
      // Remove domain property completely for localhost
      path: '/',
      maxAge: 10 * 1000
    });

    console.log('🍪 Cookie set successfully')

    res.status(200).json({user: { id: user.id, username: user.username, email: user.email } })
    console.log('✅ Login successful')
  } catch (error) {
    console.error('❌ Login error:', error)
    res.status(500).json({ message: 'Failed to login the user' })
  }
}

// Backend auth controller
export const getCurrentUser = async (req: Request, res: Response) : Promise<any>  => {
  console.log('🔵 Get current user request received')
  try {
    // Cookie is automatically sent by browser
    const token = req.cookies.token;
    console.log('🍪 Token from cookie:', token ? 'Present' : 'Missing');
    
    if (!token) {
      console.log('❌ No token found in cookies')
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('✅ Token verified:', { userId: (decoded as { id: number }).id });
    
    const user = users.find(u => u.id === (decoded as { id: number }).id);
    console.log('🔍 User lookup result:', user ? 'Found' : 'Not found');
    
    if (!user) {
      console.log('❌ User not found for ID:', (decoded as { id: number }).id)
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('✅ User found:', { id: user.id, email: user.email, username: user.username })
    res.json({ user: { id: user.id, email: user.email, username: user.username } });
  } catch (error) {
    console.error('❌ Token verification error:', error)
    res.status(401).json({ message: 'Invalid token' });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
};