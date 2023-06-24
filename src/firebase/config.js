import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvqAtUip9-Me7j989cnNxu5XNsO6rgJU0",
  authDomain: "naricesfrias-shop.firebaseapp.com",
  projectId: "naricesfrias-shop",
  storageBucket: "naricesfrias-shop.appspot.com",
  messagingSenderId: "831835801492",
  appId: "1:831835801492:web:03c65b6055c5c50442b181"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);