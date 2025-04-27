// stores/useAuthStore.ts
import { create } from 'zustand'
import axios from 'axios'
import { isEmpty } from 'lodash-es'
import { useEffect } from 'react'

// Configure axios defaults once
axios.defaults.baseURL = 'http://localhost:5000'
axios.defaults.withCredentials = true

export const useAuthStore = create((set, get) => ({
  authUser: {},
  isLoading: true,
  isAuth: false,

  login: (user) => {
    set({ 
      authUser: user,
      isAuth: !isEmpty(user)
    })
  
  },

  logout: async () => {
    try {
      await axios.post('/auth/logout')
    } catch (error) {
      console.error('Logout error:', error)
    }
    set({ authUser: {}, isAuth: false })
   
  },

  checkAuth: async () => {
    try {
      const response = await axios.get('/auth/me')
      set({
        authUser: response.data.user,
        isAuth: !isEmpty(response.data.user)
      })
    } catch (error) {
      get().logout()
    } finally {
      set({ isLoading: false })
    }
  }
}))

// Custom hook for auth checks
export const useAuthInit = () => {
  const checkAuth = useAuthStore(state => state.checkAuth)
  
  useEffect(() => {
    checkAuth()
    const interval = setInterval(checkAuth, 300000)
    return () => clearInterval(interval)
  }, [checkAuth])
}