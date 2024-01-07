import { initializeApp } from "firebase/app";
import { getApp } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDj_H0NGmU0fp-VOZ1tTSsqVUedE-gG-8M",
  authDomain: "instagram-clone-f5383.firebaseapp.com",
  projectId: "instagram-clone-f5383",
  storageBucket: "instagram-clone-f5383.appspot.com",
  messagingSenderId: "980008159956",
  appId: "1:980008159956:web:84717f1eeb48bdf72c0941",
  measurementId: "G-5QKLN3TCHJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, firestore, storage};