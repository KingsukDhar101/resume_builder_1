import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeDdJWBmEp_GAfI86yd-pXue0CKsU2Vm8",
  authDomain: "resume-builder-84442.firebaseapp.com",
  projectId: "resume-builder-84442",
  storageBucket: "resume-builder-84442.appspot.com",
  messagingSenderId: "842766090757",
  appId: "1:842766090757:web:85237bd62d862cc822d26c",
  measurementId: "G-1DVPTHHG1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
