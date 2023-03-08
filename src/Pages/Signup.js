import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../Actions/action";
import Styles from "../Styles/signup.module.css";
// import M from "materialize-css";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase_config";

export default function Signup() {
  const dispatch = useDispatch();
  const { userReducer } = useSelector((state) => state);

  const auth = getAuth();
  const [name, setName] = useState(userReducer.name);
  const [email, setEmail] = useState(userReducer.email);
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleClick() {
    setLoading(true);
    try {
      let userData = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log("User @ Signup : ", userData.user.uid);
      setUid(userData.user.uid);
      userData.user.displayName = name;
      setLoading(false);
      // console.log("Name: ", name);

      let docRef = await doc(db, "users", userData.user.uid);

      let userDetails = {
        userData: {
          name,
          email,
          uid: userData.user.uid,
        },
      };
      // console.log("UserDetails: ",userDetails)
      let user1 = await setDoc(docRef, userDetails);
      // console.log("User1: ", user1);
      // M.toast({ html: "Signup successfull", classes: "rounded", color: "green" });
      navigate("/login");
    } catch (error) {
      setLoading(false);
      alert(error.message);
      console.log(error.message);
    }
  }

  useEffect(() => {
    dispatch(userAction({ name, email, uid }));
  }, [name, email, uid]);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className={Styles.formCard}>
          <h2 className={Styles.formHeading}>Enter Signup details</h2>
          <div className={Styles.formContainer}>
            <div className={Styles.inputContainer}>
              <label className={Styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                className={Styles.input}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className={Styles.inputContainer}>
              <label className={Styles.label}>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                className={Styles.input}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={Styles.inputContainer}>
              <label className={Styles.label}>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                className={Styles.input}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className={Styles.btnContainer} onClick={handleClick}>
              <button className={Styles.btn} type="button">
                Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
