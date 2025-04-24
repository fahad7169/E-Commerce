import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    id: number
    email: string
  }

export const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];


  if (!token) {
    return res.status(401).json({ message: 'No token. Unauthorized' });
  }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
      // @ts-ignore
      req.user = decoded
      next()
    } catch (err) {
      return res.status(403).json({ message: 'Forbidden - Invalid token' })
    }
};