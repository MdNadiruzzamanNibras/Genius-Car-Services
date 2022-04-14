// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW47ppAEbjho4gsv-Sdk58fSyVW38cS0E",
  authDomain: "genius-car-services-e5e3b.firebaseapp.com",
  projectId: "genius-car-services-e5e3b",
  storageBucket: "genius-car-services-e5e3b.appspot.com",
  messagingSenderId: "162985352765",
  appId: "1:162985352765:web:d2d97caa04dfbcbc415454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;