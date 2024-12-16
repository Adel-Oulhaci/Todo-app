import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkzPWka0mBjDfWjTTR27tU2S7Dp6zCxv4",
  authDomain: "test-6901a.firebaseapp.com",
  projectId: "test-6901a",
  storageBucket: "test-6901a.appspot.com",
  messagingSenderId: "202304359244",
  appId: "1:202304359244:web:ed0dec8b5f271a985d9de9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);