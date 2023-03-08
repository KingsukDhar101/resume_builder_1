import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/contactInfo.module.css";
// import { useDispatch } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { contactAction } from "../Actions/action";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase_config";

export default function Education() {
  const dispatch = useDispatch();
  const { contactReducer, userReducer } = useSelector((state) => state);
  const [contact, setContact] = useState(contactReducer);
  const [user, setUser] = useState(userReducer);

  function handleOnChange(e) {
    // console.log(e.target.value);
    let { id, value } = e.target;

    setContact({
      ...contact,
      [id]: value,
    });
  }
  async function submitContact() {
    try {
      dispatch(contactAction(contact));
      console.log(user.uid);
      let docRef = await doc(db, "users", user.uid);

      let userDetails = {
        contactData: contact,
      };

      let user1 = await updateDoc(docRef, userDetails);
      console.log(user1);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log("User: ", user);
  }, []);
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Tell us about yourself</h4>
        <p>With this info, recruiters will be able to find you.</p>

        <div className={Styles.title}>
          <div className={Styles.titleName}>Name</div>
          <input
            onChange={handleOnChange}
            className={Styles.inputBox}
            type="text"
            id="name"
          />
        </div>
        <div className={Styles.title}>
          <div className={Styles.titleName}>Email</div>
          <input
            className={Styles.inputBox}
            type="email"
            id="email"
            onChange={handleOnChange}
          />
        </div>

        <div className={Styles.title}>
          <div className={Styles.titleName}>Street Address</div>
          <input
            className={Styles.inputBox}
            type="text"
            id="address"
            onChange={handleOnChange}
          />
        </div>
        <div className={Styles.title}>
          <div className={Styles.titleName}>City</div>
          <input
            className={Styles.inputBox}
            type="text"
            id="city"
            onChange={handleOnChange}
          />
        </div>
        <div className={Styles.title}>
          <div className={Styles.titleName}>Country</div>
          <input
            className={Styles.inputBox}
            type="text"
            id="country"
            onChange={handleOnChange}
          />
        </div>

        <div className={Styles.title} style={{ width: "50%" }}>
          <div className={Styles.titleName}>Phone Number</div>
          <input
            className={Styles.inputBox}
            type="text"
            id="phoneno"
            onChange={handleOnChange}
          />
        </div>

        {/********************* page slider part******************************/}
        <div className={BaseStyles.pageSlider}>
          <Link to="/experience">
            <button className={BaseStyles.submitBtn} onClick={submitContact}>
              SAVE & CONTINUE
            </button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
