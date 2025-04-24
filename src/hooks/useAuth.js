import { proxy } from 'valtio'
import { derive } from 'valtio/utils'
import axios from 'axios'
import { isEmpty } from 'lodash-es'
import { useSnapshot } from 'valtio'

function getAuthUser() {
  const jwt = window.localStorage.getItem('jwtToken')
  if (!jwt) return {}
  return JSON.parse(atob(jwt))
}

// Base proxy state
const state = proxy({
  authUser: getAuthUser(),
})

// Derived/computed state
derive(
  {
    isAuth: (get) => !isEmpty(get(state).authUser),
  },
  {
    proxy: state,
  }
)

// Actions to mutate state
const actions = {
  login: (user) => {
    state.authUser = user
    window.localStorage.setItem('jwtToken', btoa(JSON.stringify(user)))
    axios.defaults.headers.Authorization = `Token ${user.token}`
  },
  logout: () => {
    state.authUser = {}
    window.localStorage.removeItem('jwtToken')
  },
  checkAuth: () => {
    const authUser = getAuthUser()
    if (!authUser || isEmpty(authUser)) {
      actions.logout()
    }
  },
}

// Custom hook
function useAuth() {
  const snap = useSnapshot(state)

  return {
    ...snap,
    ...actions,
  }
}

export default useAuth
