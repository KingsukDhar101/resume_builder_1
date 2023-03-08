import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/finalizePage.module.css";
export default function Template1({
  fontSz,
  bgClr,
  textClr,
  fontStl,
  cd,
  ex,
  edu,
  summary,
  newSk,
}) {
  return (
    <>
      <div className={`${Styles.leftContainer}  ${fontSz}`} id="invoice">
        <div className={Styles.headingContainer}>
          <div className={Styles.topContainer}>
            <div className={`${Styles.nameLogo} ${bgClr}`}>KD</div>
            <div className={`${Styles.name} ${textClr} ${fontStl} name`}>
              {cd.name}
              {/* Kingsuk Dhar */}
            </div>
          </div>
          <div className={Styles.contactContainer}>
            <div className={` ${fontStl} `}>
              {cd.phoneno} | {cd.email}
              {/* 1234567890 | kingsuK@gamil.com */}
            </div>
            <div className={` ${fontStl}`}>
              {cd.address} | {cd.city}, {cd.country}
            </div>
          </div>
        </div>
        <div className={Styles.experienceContainer}>
          <div
            className={`${Styles.midHeading_left} ${textClr} ${fontStl} heading`}
          >
            EXPERIENCE
          </div>
          <div className={Styles.exContentContainer}>
            <div className={Styles.left}>
              <div className={` ${fontStl}`} style={{ marginBottom: "5px" }}>
                {ex.jobtitle}
                {/* Software Engineer */}
              </div>
              <div className={``}>
                <span className={`${fontStl}`}>
                  {ex.company} | {ex.city}, {ex.country}
                  {/* Mercer Gurgaon, Hariyana */}
                </span>
              </div>
            </div>
            <div className={Styles.right}>
              <div className={` ${fontStl}`}>
                <div
                  className={`${fontStl}`}
                  style={{ float: "right", marginBottom: "5px" }}
                >
                  {ex.startmonth}-{ex.startyear}
                </div>
                <div className={`${fontStl}`}>
                  {ex.endmonth}-{ex.endyear}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.skillContainer}>
          <div
            className={`${Styles.midHeading_left} ${textClr} ${fontStl} heading`}
          >
            SKILLS
          </div>
          <div className={`${Styles.skills} ${fontStl}`}>
            {newSk.length > 0
              ? newSk.map((skillItem) => (
                  <div
                    key={skillItem.id}
                    className={`${Styles.skill} ${fontStl}`}
                  >
                    {skillItem.skill}
                  </div>
                ))
              : ""}
          </div>
        </div>

        {/* Education container */}
        <div className={Styles.experienceContainer}>
          <div
            className={`${Styles.midHeading_left} ${textClr} ${fontStl}  heading`}
          >
            EDUCATION
          </div>
          <div className={Styles.exContentContainer}>
            <div className={Styles.left}>
              <div className={` ${fontStl}`} style={{ marginBottom: "5px" }}>
                {edu.degree}
              </div>
              <div className={` ${fontStl}`}>
                <span className={`${fontStl}`}>
                  {edu.school} | {edu.city}, {edu.country}
                </span>
              </div>
            </div>
            <div className={Styles.right}>
              <div className={` ${fontStl}`}>
                <span className={`${fontStl}`} style={{ marginBottom: "5px" }}>
                  {edu.gradmonth} {edu.gradyear}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.summaryContainer}>
          <div className={`${Styles.midHeading_left} ${textClr} ${fontStl}`}>
            PROFESSIONAL SUMMARY
          </div>
          <div className={` ${fontStl}`} style={{ marginTop: "10px" }}>
            {summary}
          </div>
        </div>
      </div>
      <div className={Styles.pageSlider}>
        <div className={Styles.back}>
          <Link to="/summary">Back</Link>
        </div>
      </div>
    </>
  );
}
