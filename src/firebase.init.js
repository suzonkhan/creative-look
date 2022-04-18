import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOK-QONdoTnu7JAZGdfbIH5xrzZ0gzE-o",
  authDomain: "creative-look.firebaseapp.com",
  projectId: "creative-look",
  storageBucket: "creative-look.appspot.com",
  messagingSenderId: "225115767171",
  appId: "1:225115767171:web:88d9b365939d05a0b9f6b6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export default auth; 