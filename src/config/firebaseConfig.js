import firebase from "firebase";
// REVIEW Import Firebase Auth Module
import "firebase/auth";
// NOTE Import firestore from the Firebase
import "firebase/firestore";
// NOTE Import storage from the Firebase
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    },
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      defaultCountry: "IN",
    },
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
  ],
};

// NOTE Initialize the app
export const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export const database = app.database();

export const storage = app.storage();
