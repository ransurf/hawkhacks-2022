import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/analytics'

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}



// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials)
    console.log('Firebase initialized')
}

export const auth = firebase.auth()
export const db = firebase.database()

const provider = new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
    .then(result => {
        const user: any = result.user
        console.log("Signed in as:", user.displayName)
        console.log(user)
        //redirect to home page if signed in successfully
        window.location.href = '/Dashboard'
    })
    .catch(error => {
        console.log(error)
    })
    
}

export const signOut = () => {
    auth.signOut()
    .then(() => {
        console.log('Signed out')
        //redirect to home page if signed out successfully
        window.location.href = '/'
    })
    .catch(error => {
        console.log(error)
    })
}


export default firebase