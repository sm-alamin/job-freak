// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQiwcWyqOURv4ft0mCJjIYDBtBgV6jQYQ",
  authDomain: "job-freak.firebaseapp.com",
  projectId: "job-freak",
  storageBucket: "job-freak.appspot.com",
  messagingSenderId: "43380993818",
  appId: "1:43380993818:web:c8d24a7d9b90569f1806a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;