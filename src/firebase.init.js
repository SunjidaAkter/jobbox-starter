// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSw00dibQWru2SlXC_YMBW171_Sk-F-PY",
  authDomain: "job-box-fef10.firebaseapp.com",
  projectId: "job-box-fef10",
  storageBucket: "job-box-fef10.appspot.com",
  messagingSenderId: "721652976834",
  appId: "1:721652976834:web:1ca5d38639028fcf26bf5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;