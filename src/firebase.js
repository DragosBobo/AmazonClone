

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp3isFFS8SqGdvZGzW7fiHDmWsDGaWwfo",
  authDomain: "e-clone-f9d35.firebaseapp.com",
  projectId: "e-clone-f9d35",
  storageBucket: "e-clone-f9d35.appspot.com",
  messagingSenderId: "1085441931627",
  appId: "1:1085441931627:web:cb54a7684843216093f42e",
  measurementId: "G-XXGM21Q9MT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth} ; 