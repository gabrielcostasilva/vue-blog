import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  
}

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
