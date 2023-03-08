import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { summaryAction } from "../Actions/action";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/summary.module.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase_config";

export default function Summary() {
  const dispatch = useDispatch();
  const { summaryReducer, userReducer } = useSelector((state) => state);
  const [summary, setSummary] = useState(summaryReducer);
  const [user, setUser] = useState(userReducer);

  function handleOnChange(e) {
    let summaryText = e.target.value;
    setSummary(summaryText);
  }
  async function submitSummary() {
    try {
      if(summary.length > 0){
        dispatch(summaryAction(summary));
        let docRef = await doc(db, "users", user.uid);
        let userDetails = {
          summaryData: summary,
        };
        let user1 = await updateDoc(docRef, userDetails);
        console.log(user1);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // console.log(summaryReducer);
  }, []);

  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Summary</h4>
        <p>
          Briefly describe the value that you bring through your skills,
          background and experience.
        </p>
        <textarea
          className={Styles.textArea}
          onChange={handleOnChange}
        ></textarea>

        {/**************  Page Slider  ***********/}
        <div className={BaseStyles.pageSlider}>
          <Link to="/finalize-page">
            <button className={BaseStyles.submitBtn} onClick={submitSummary}>
              SAVE & CONTINUE
            </button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/skills">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
