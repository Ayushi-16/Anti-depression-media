import { initializeApp } from "firebase/app";
import {GoogleAuthProvider , getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBvv3hOkshGhgvVExQItBS6TPSd7D4Sb1o",
  authDomain: "antidm-b2d04.firebaseapp.com",
  projectId: "antidm-b2d04",
  storageBucket: "antidm-b2d04.appspot.com",
  messagingSenderId: "257341842544",
  appId: "1:257341842544:web:3d9b0aeb8ea88d9f2c80b5",
  measurementId: "G-43CH55V9C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth()

export {app, provider, auth}