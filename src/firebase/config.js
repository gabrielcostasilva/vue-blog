import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBYxRTU6L5MaejBGCIdWYLOXSlDz1mY9kA',
  authDomain: 'vuex-blog-9ee55.firebaseapp.com',
  projectId: 'vuex-blog-9ee55',
  storageBucket: 'vuex-blog-9ee55.appspot.com',
  messagingSenderId: '574386110329',
  appId: '1:574386110329:web:dc6698dc9860db1e70b9a8',
}

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
