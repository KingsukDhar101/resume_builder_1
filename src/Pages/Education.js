import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { educationAction } from "../Actions/action";

import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/education.module.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase_config";

export default function Education() {
  const dispatch = useDispatch();
  const { educationReducer, userReducer } = useSelector((state) => state);
  const [education, setEducation] = useState(educationReducer);
  const [user, setUser] = useState(userReducer);

  function handleOnChange(e) {
    let { id, value } = e.target;
    setEducation({
      ...education,
      [id]: value,
    });
  }

  async function submitEducation() {
    try {
      dispatch(educationAction(education));
      let docRef = await doc(db, "users", user.uid);
      let userDetails = {
        educatiionData: education,
      };
      let user1 = await updateDoc(docRef, userDetails);
      console.log(user1);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // console.log("Education Data: ",educationReducer)
  }, []);

  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Education</h4>
        <p>Start with your most recent educational institution</p>
        <div className={Styles.title}>
          <div className={Styles.titleName}>School Name</div>
          <input
            className={Styles.inputBox}
            type="text"
            id="school"
            onChange={handleOnChange}
          />
        </div>
        <div className={Styles.title}>
          <div className={Styles.titleName}>City/Town</div>
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
        <div className={Styles.title}>
          <div className={Styles.titleName}>Degree</div>
          <input
            className={Styles.inputBox}
            type="text"
            id="degree"
            onChange={handleOnChange}
          />
        </div>

        <div className={Styles.titleName}>Graduation Date</div>
        <div className={Styles.dateContainer}>
          <div className={Styles.month}>
            <select
              name="month"
              className={Styles.smalltext}
              placeholder="month"
              id="gradmonth"
              onChange={handleOnChange}
            >
              <option value="month">month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className={Styles.year}>
            <select
              name="year"
              className={Styles.smalltext}
              placeholder="year"
              id="gradyear"
              onChange={handleOnChange}
            >
              <option value="year">year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
            </select>
          </div>
        </div>

        <div className={BaseStyles.pageSlider}>
          <Link to="/skills">
            <button className={BaseStyles.submitBtn} onClick={submitEducation}>
              SAVE & CONTINUE
            </button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/experience">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
