// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI-HH2uAGssgEHb6-YwJuOeFj6LmFfk2o",
  authDomain: "food-ordering-app-login.firebaseapp.com",
  projectId: "food-ordering-app-login",
  storageBucket: "food-ordering-app-login.appspot.com",
  messagingSenderId: "936637207158",
  appId: "1:936637207158:web:7fa1dc813db074ab24c557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
