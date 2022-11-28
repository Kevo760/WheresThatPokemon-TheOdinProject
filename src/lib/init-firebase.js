import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDEQmUdmP946JBdl9atWq9dFMMAqW07_pY",
  authDomain: "wheresthatpokemon-e8e47.firebaseapp.com",
  projectId: "wheresthatpokemon-e8e47",
  storageBucket: "wheresthatpokemon-e8e47.appspot.com",
  messagingSenderId: "549769553692",
  appId: "1:549769553692:web:f2a5dd6ae9c73434533cd9",
  measurementId: "G-X2S6KL147Q"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
