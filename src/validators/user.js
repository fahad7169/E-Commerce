import * as z from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters')
  })

export const registerSchema = loginSchema.extend({
    username: z.string().min(2, 'Username must be at least 2 characters')
  })