import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/skills.module.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { skillAction } from "../Actions/action";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase_config";

export default function Skills() {
  const dispatch = useDispatch();
  const { skillReducer, userReducer } = useSelector((state) => state);
  const [skillData, setSkillData] = useState(skillReducer);
  const [user, setUser] = useState(userReducer);

  function handleOnChange(e, id) {
    let prevObj = skillData.find((item) => item.id == id);
    prevObj.skill = e.target.value;
    setSkillData([...skillData]);
  }

  function addSkillHandler() {
    // console.log(`Count : ${count}`);
    // skillData.push({
    //   id: skillData.length+1,
    //   skill: ""
    // });
    // let { value } = e.target;
    setSkillData([...skillData, { id: uuidv4(), skill: "" }]);
  }
  function deleteSkillHandler(id) {
    console.log(id);
    const newArr = skillData.filter((ele) => ele.id != id);
    // console.log(newArr);
    setSkillData(newArr);
  }
  async function submitSkills() {
    try {
      let newArr = skillData.filter((ele) => ele.skill !== "");

      if (newArr.length > 0) {
        dispatch(skillAction(newArr));
        let docRef = await doc(db, "users", user.uid);
        let userDetails = {
          skillData: newArr,
        };
        let user1 = await updateDoc(docRef, userDetails);
        console.log(user1);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {}, [skillData]);
  return (
    <div>
      <div className={BaseStyles.leftContainer}>
        <h4>Skills</h4>
        <p>Add a few skills to show employers what you're good at.</p>

        <div>
          {skillData.map((ele) => {
            return (
              <div key={ele.id} className={Styles.rowContainer}>
                <div className={Styles.hash}>#</div>
                <div className={Styles.inputContainer}>
                  <input
                    className={Styles.inputBoxSkill}
                    type="text"
                    placeholder="Skill"
                    value={ele.skill}
                    onChange={(e) => {
                      handleOnChange(e, ele.id);
                    }}
                  />
                  <i
                    className="material-icons"
                    onClick={() => {
                      deleteSkillHandler(ele.id);
                    }}
                  >
                    delete
                  </i>
                </div>
              </div>
            );
          })}
        </div>

        <div className={Styles.addSkillContainer}>
          <p className={Styles.addSkill} onClick={addSkillHandler}>
            Add new skills
          </p>
        </div>

        <div className={BaseStyles.pageSlider}>
          <Link to="/summary">
            <button className={BaseStyles.submitBtn} onClick={submitSkills}>
              SAVE & CONTINUE
            </button>
          </Link>

          <div className={BaseStyles.back}>
            <Link to="/education">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
