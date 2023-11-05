// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcvb0mKNstbeqTiBjZWGnydbnqP8awOVA",
  authDomain: "chat-a022a.firebaseapp.com",
  projectId: "chat-a022a",
  storageBucket: "chat-a022a.appspot.com",
  messagingSenderId: "876220124908",
  appId: "AIzaSyDBxlk8Z1WASjHbClBgYgORayBx-esGvmE",

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
