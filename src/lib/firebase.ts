// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB356KD_pzZ7rEkgLyFhVp4rsXBqi48_5g",
  authDomain: "bionl-auth.firebaseapp.com",
  projectId: "bionl-auth",
  storageBucket: "bionl-auth.appspot.com",
  messagingSenderId: "548360214176",
  appId: "1:548360214176:web:501a466fdd589a64ac5bc5",
  measurementId: "G-ZLC7JSGKDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const FirebaseMessagesMapper: { [key: string]: string } = {
  "auth/wrong-password": "Password is invalid",
  "auth/email-already-exists":
    "The provided email is already in use by an existing user.",
  "auth/invalid-password":
    "The provided value for the password user property is invalid. It must be a string with at least six characters.",
  "auth/phone-number-already-exists":
    "The provided phone number is already in use by an existing user.",
  "auth/uid-already-exists":
    "The provided uid is already in use by an existing user.",
  "auth/code-expired":
    "The SMS code has expired. Please re-send the verification code to try again.",
  "auth/email-already-in-use":
    "The email address is already in use by another account.",
  "auth/too-many-requests": "Too many requests, please try again later.",
  "auth/weak-password": "The password is too weak.",
};
