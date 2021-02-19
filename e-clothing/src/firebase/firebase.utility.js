import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCdbjmv9QUCEFbap6O9xkhk-PUtTTiTDQQ",
  authDomain: "e-commerce-db-f1072.firebaseapp.com",
  projectId: "e-commerce-db-f1072",
  storageBucket: "e-commerce-db-f1072.appspot.com",
  messagingSenderId: "717196021051",
  appId: "1:717196021051:web:3501475ceab760f7807b1e",
  measurementId: "G-0ZW9K4HRNP"
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account ' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase