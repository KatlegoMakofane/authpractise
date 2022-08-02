import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
 import 'firebase/compat/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyC_VSzIPszUmRo3iroJF6RafBBthayXP30",
  authDomain: "authvoicenote.firebaseapp.com",
  projectId: "authvoicenote",
  storageBucket: "authvoicenote.appspot.com",
  messagingSenderId: "46881259213",
  appId: "1:46881259213:web:5499f750fb79234d7ab384",
  measurementId: "G-4QYWRZCKYD"
}



    firebase.initializeApp(firebaseConfig)
  