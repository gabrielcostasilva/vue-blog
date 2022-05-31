import { defineStore } from 'pinia'
import { auth } from '../firebase/config'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const useStore = defineStore('blogStore', {
  state: () => ({
    user: null,
    authIsReady: false,
  }),
  actions: {
    setUser(payload) {
      this.user = payload
      console.log('User state changed:', this.user)
    },
    setAuthIsReady(payload) {
      this.authIsReady = payload
    },
    async signup(email, password ) {
      console.log('signup action')

      const res = await createUserWithEmailAndPassword(auth, email, password)

      if (res) {
        this.setUser(res.user)
      } else {
        throw new Error('Could not complete signup')
      }
    },
    async login(email, password ) {
      console.log('login action')

      const res = await signInWithEmailAndPassword(auth, email, password)

      if (res) {
        this.setUser(res.user)
      } else {
        throw new Error('Could not complete login')
      }
    },
    async logout() {
      console.log('Logout action')

      await signOut(auth)
      this.setUser(null)
    },
  },
})
