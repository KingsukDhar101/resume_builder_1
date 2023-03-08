import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../Actions/action";
import Styles from "../Styles/signup.module.css";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { Provider } from "react-redux";

// import {
//   collection,
//   where,
//   addDoc,
//   doc,
//   deleteDoc,
//   updateDoc,
//   query,
//   onSnapshot,
//   getDocs,
// } from "firebase/firestore";
// import { db } from "../firebase_config";

export default function Login() {
  const dispatch = useDispatch();
  // const { userReducer } = useSelector((state) => state);

  const auth = getAuth();
  const { userReducer, finalizeReducer } = useSelector((state) => state);
  const [user, setUser] = useState(userReducer);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userAction(user));
    // console.log("user(state): ", user);
  }, [user]);

  async function handleClickWithEP() {
    setLoading(true);
    try {
      let userData = await signInWithEmailAndPassword(
        auth,
        user.email,
        password
      );
      // userData.user.displayName = user.name;
      // const USER = userData.user;
      let uuid = userData.user.uid;
      console.log("@Login: ", userData);
      setUser({
        ...user,
        uid: uuid,
      });
      setLoading(false);
      alert("Login successful");
      // console.log("User Reducer: ", userReducer);
      // console.log("USER state : ", user);
      let usd = {
        email: userData.user.email,
        uid: userData.user.uid,
      };
      localStorage.setItem("user", JSON.stringify(usd));
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert("Login Unsuccessful");
      console.log(error.message);
    }
  }
  // async function handleClickWithGoogle() {
  //   setLoading(true);
  //   try {
  //     let result = await signInWithPopup(auth, Provider);
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     const user = result.user;
  //     console.log("User: ", user);
  //     setLoading(false);
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // }

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className={Styles.formCard}>
          <h2 className={Styles.formHeading}>Enter Login details</h2>
          <div className={Styles.formContainer}>
            <div className={Styles.inputContainer}>
              <label className={Styles.label}>Email</label>
              <input
                type="text"
                name="email"
                className={Styles.input}
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className={Styles.inputContainer}>
              <label className={Styles.label}>Password</label>
              <input
                type="password"
                name="password"
                className={Styles.input}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className={Styles.btnContainer}>
              <button
                className={Styles.btn}
                type="button"
                onClick={handleClickWithEP}
              >
                Login
              </button>
              {/* <button
                className={Styles.btn}
                style={{ backgroundColor: "yellowgreen" }}
                type="button"
                onClick={handleClickWithGoogle}
              >
                Login With Google
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
