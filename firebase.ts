import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  orderBy,
  limit,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export all Firestore functions you need
export {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  orderBy,
  limit,
  writeBatch,
};

// For convenience, you can also export specific Firebase modules
export default {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  Timestamp,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  orderBy,
  limit,
  writeBatch,
};
