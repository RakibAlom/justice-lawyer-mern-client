// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVMXu2Z0j4iUZTc39WVkQMZeq_4d_mxkk",
  authDomain: "justice-lawyer.firebaseapp.com",
  projectId: "justice-lawyer",
  storageBucket: "justice-lawyer.appspot.com",
  messagingSenderId: "1008736437282",
  appId: "1:1008736437282:web:26932f8f2236717a3b767b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;