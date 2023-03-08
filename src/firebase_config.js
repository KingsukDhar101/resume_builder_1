import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeDdJWBmEp_GAfI86yd-pXue0CKsU2Vm8",
  authDomain: "resume-builder-84442.firebaseapp.com",
  projectId: "resume-builder-84442",
  storageBucket: "resume-builder-84442.appspot.com",
  messagingSenderId: "842766090757",
  appId: "1:842766090757:web:85237bd62d862cc822d26c",
  measurementId: "G-1DVPTHHG1Q",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);