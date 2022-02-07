import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDSHhXxzIv1dq-mvKMguzGLYd11CmCEdi8",
  authDomain: "image-upload-2196b.firebaseapp.com",
  projectId: "image-upload-2196b",
  storageBucket: "image-upload-2196b.appspot.com",
  messagingSenderId: "924978378991",
  appId: "1:924978378991:web:850f287b2789928220831a",
  measurementId: "G-Y9KTTFJNSX"
})

export const auth = app.auth()
export default app
