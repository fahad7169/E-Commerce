import express from "express";

declare global {
    namespace Express {
      interface Request {
        user?: {
          id: number
          email: string
        }
      }
    }
  }
  

  export interface User {
    id: number
    username: string
    email: string
    password: string
  }
  