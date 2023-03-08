import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/finalizePage.module.css";
import t3s from "../Styles/template3.module.css";
export default function Template3({
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
        <div className={t3s.headingContainer} style={{ display: "flex" }}>
          <div className={t3s.nameContainer}>
            {/* <div className={`${Styles.nameLogo} ${bgClr}`}>KD</div> */}
            <div className={`${Styles.name_border} ${fontStl} name`}>
              {cd.name}
            </div>
          </div>
          <div className={t3s.contactContainer} style={{ marginLeft: "auto" }}>
            <div className={` ${fontStl} `}>
              {cd.phoneno}
              {/* 1234567890 */}
            </div>
            <div className={` ${fontStl}`}>
              {cd.email}
              {/* kingsuK@gamil.com */}
            </div>
            <div className={` ${fontStl}`}>{cd.address}</div>
            <div className={` ${fontStl}`}>
              {cd.city}, {cd.country}
            </div>
          </div>
        </div>
        <div className={t3s.experienceContainer}>
          <div
            className={`${Styles.midHeading_left} ${t3s.midHeading_left} ${textClr} ${fontStl} heading`}
          >
            EXPERIENCE
          </div>
          <div className={t3s.exContentContainer}>
            <div className={Styles.left}>
              <div className={` ${fontStl}`} style={{ marginBottom: "5px" }}>
                {ex.jobtitle}
                {/* Software Engineer */}
              </div>

              <span className={`${fontStl}`}>
                {ex.company} | {ex.city}, {ex.country}
                {/* Mercer Gurgaon , Hariyana */}
              </span>
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
        <div className={t3s.experienceContainer}>
          <div
            className={`${Styles.midHeading_left} ${t3s.midHeading_left} ${textClr} ${fontStl} heading`}
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
        <div className={t3s.experienceContainer}>
          <div
            className={`${Styles.midHeading_left} ${t3s.midHeading_left} ${textClr} ${fontStl}  heading`}
          >
            EDUCATION
          </div>
          <div className={t3s.exContentContainer}>
            <div className={Styles.left}>
              <div className={` ${fontStl}`} style={{ marginBottom: "5px" }}>
                {edu.degree}
                {/* degree */}
              </div>
              <div className={` ${fontStl}`}>
                <span className={`${fontStl}`}>
                  {edu.school} | {edu.city}, {edu.country}
                  {/* school | city, country */}
                </span>
              </div>
            </div>
            <div className={t3s.right}>
              <div className={` ${fontStl}`}>
                <span className={`${fontStl}`} style={{ marginBottom: "5px" }}>
                  {edu.gradmonth} {edu.gradyear}
                  {/* gradmonth gradyear */}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={t3s.experienceContainer}>
          <div
            className={`${Styles.midHeading_left} ${t3s.midHeading_left} ${textClr} ${fontStl} heading`}
          >
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
