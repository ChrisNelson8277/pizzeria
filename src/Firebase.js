import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const app = firebase.initializeApp({
    apiKey: "AIzaSyDvaurlc9Tyj0X5hZFaOlQsdm3MCKdK66I",
    authDomain: "pizzeria-2-90d9d.firebaseapp.com",
    projectId: "pizzeria-2-90d9d",
    storageBucket: "pizzeria-2-90d9d.appspot.com",
    messagingSenderId: "241665324881",
    appId: "1:241665324881:web:85568ec0879b19a8fb0570"
})

export const auth = app.auth()
export default app