import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMAijCPWNLS36XcJc66-h-5cAGZjFqlo4",
  authDomain: "giv-app-b719a.firebaseapp.com",
  projectId: "giv-app-b719a",
  storageBucket: "giv-app-b719a.appspot.com",
  messagingSenderId: "804130217998",
  appId: "1:804130217998:web:b68ad41a2baa11f4059c5f",
  measurementId: "G-7KP2DL7XE1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
