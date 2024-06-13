// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK_4x5On5dvXHVM0Ym0R4YAmV-SI_3mqY",
  authDomain: "webimages-2da66.firebaseapp.com",
  projectId: "webimages-2da66",
  storageBucket: "webimages-2da66.appspot.com",
  messagingSenderId: "175362800241",
  appId: "1:175362800241:web:565e0d81df9326e66e79d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();