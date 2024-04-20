import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRmJhddV-BIONjHeiRhU4pjfSAvWJwkok",
  authDomain: "insta-clone-bfed6.firebaseapp.com",
  projectId: "insta-clone-bfed6",
  storageBucket: "insta-clone-bfed6.appspot.com",
  messagingSenderId: "857512596684",
  appId: "1:857512596684:web:944b63239e80520b13de69",
  measurementId: "G-YG28X4F3HF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage};