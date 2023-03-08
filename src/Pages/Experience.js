import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { experienceAction } from "../Actions/action";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/experience.module.css";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase_config";

export default function Experience() {
  const dispatch = useDispatch();
  const { experienceReducer, userReducer } = useSelector((state) => state);
  const [experience, setExperience] = useState(experienceReducer);
  const [checkvalue, setCheckvalue] = useState(true);
  const [user, setUser] = useState(userReducer);
  // const [sample, setSample] = useState("");

  function handleOnChange(e) {
    let { id, value } = e.target;
    setExperience({
      ...experience,
      [id]: value,
    });
  }
  async function submitExperience() {
    try {
      dispatch(experienceAction(experience));
      console.log(user.uid);
      let docRef = await doc(db, "users", user.uid);

      let userDetails = {
        experienceData: experience,
      };

      // console.log("UserDetails: ",userDetails)
      let user1 = await updateDoc(docRef, userDetails);
      console.log(user1);
    } catch (err) {
      console.log(err);
    }
  }
  function checkFunc() {
    setCheckvalue((prevState) => !prevState);
  }
  useEffect(() => {
    // console.log("Experience-Data: ", experienceReducer);
    // console.log("check : ", checkvalue);
  }, []);
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Work Experience</h4>
        <p>Start with your most recent position</p>
        <div className={Styles.title}>
          <div className={Styles.titleName}>Job Title</div>
          <input
            className={Styles.inputBox}
            type="text"
            id="jobtitle"
            onChange={handleOnChange}
          />
        </div>
        <div className={Styles.title}>
          <div className={Styles.titleName}>Company</div>
          <input
            className={Styles.inputBox}
            type="text"
            id="company"
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

        <div className={Styles.titleName}>Start Date</div>
        <div className={Styles.dateContainer}>
          <div className={Styles.month}>
            <select
              name="month"
              className={Styles.smalltext}
              placeholder="month"
              id="startmonth"
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
              id="startyear"
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

        {checkvalue ? (
          <div>
            <div className={Styles.titleName}>End Date</div>
            <div className={Styles.dateContainer}>
              <div className={Styles.month}>
                <select
                  name="month"
                  className={Styles.smalltext}
                  placeholder="month"
                  id="endmonth"
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
                  id="endyear"
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
          </div>
        ) : (
          ""
        )}

        <div className={Styles.checkBox}>
          <input type="checkbox" id="checkWork" onClick={checkFunc} />
          <label htmlFor="checkWork" className={Styles.titleName}>
            Currenty Work Here
          </label>
        </div>

        <div className={BaseStyles.pageSlider}>
          <Link to="/education">
            <button className={BaseStyles.submitBtn} onClick={submitExperience}>
              ENTER JOB DESCRIPTION
            </button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/contact">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
