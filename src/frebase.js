// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKcr2LdAe0bPMJICEmeula5UyGVRTBx38",
  authDomain: "aynaa-1c3d7.firebaseapp.com",
  projectId: "aynaa-1c3d7",
  storageBucket: "aynaa-1c3d7.appspot.com",
  messagingSenderId: "468063175990",
  appId: "1:468063175990:web:b99e33414341fdcea7df97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)