// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbEQB6FwXvYqQ72WmguorB9mgxksWFqtU",
  authDomain: "netflix-gpt-127d4.firebaseapp.com",
  projectId: "netflix-gpt-127d4",
  storageBucket: "netflix-gpt-127d4.appspot.com",
  messagingSenderId: "518146569869",
  appId: "1:518146569869:web:45a39a40f5644885d614c4",
  measurementId: "G-G21L408JFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
