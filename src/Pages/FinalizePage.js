import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import BaseStyles from "../Styles/base.module.css";
import Styles from "../Styles/finalizePage.module.css";
import { finalizeAction } from "../Actions/action";
import { colorAction } from "../Actions/action";
import { fontSizeAction, fontStyleAction } from "../Actions/action";
import Template1 from "./Template1";
import Template2 from "./Template2";

import Sidebar from "./Sidebar";
import Template3 from "./Template3";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import html2pdf from "html2pdf.js";

export default function FinalizePage() {
  const colorArr = [
    "black",
    "blue",
    "violet",
    "skyblue",
    "pink",
    "gray",
    "orange",
    "green",
    "darkblue",
  ];
  const fontStyleArr = [
    "sans-serif",
    "georgia",
    "verdana",
    "times-new-roman",
    "segoe-ui",
  ];

  const dispatch = useDispatch();
  const {
    finalizeReducer,
    colorReducer,
    fontSizeReducer,
    fontStyleReducer,
    userReducer,
  } = useSelector((state) => state);

  const [finalData, setFinalData] = useState(finalizeReducer);
  // const [color, setColor] = useState(colorReducer);
  // const [fontsize, setFontsize] = useState(fontSizeReducer);
  // const [fontstyle, setFontstyle] = useState(fontStyleReducer);
  // const [template, setTemplate] = useState(finalizeReducer.template);
  // const [sidebar, setSidebar] = useState(false);
  const [temp, setTemp] = useState(false);
  let template = finalizeReducer.template;

  const allData = useSelector((state) => state);
  // console.log("Final Data: ", allData);
  const {
    contactReducer,
    experienceReducer,
    educationReducer,
    summaryReducer,
    skillReducer,
  } = allData;
  // console.log("Contact Data: " + contactReducer);
  const cd = contactReducer;
  const ex = experienceReducer;
  const edu = educationReducer;
  const summary = summaryReducer;
  const sk = skillReducer;

  // let sbopen = finalizeReducer.sidebar;

  const newSk = sk.filter((item) => item.skill !== "");

  function handleClick(e) {
    let { name, value } = e.target;
    // if(finalizeReducer.sidebar !== true){
    //   setFinalData(finalizeReducer)
    // }
    setFinalData({
      ...finalData,
      sidebar: false,
      template,
      [name]: value,
    });
    // dispatch(finalizeAction(finalData));
  }
  function handleClickSidebar(e) {
    let { name } = e.target;
    setFinalData({
      ...finalData,
      template,
      [name]: true,
    });
  }
  function handleOnChange(e) {
    let { name, value } = e.target;
    setFinalData({
      ...finalData,
      template,
      [name]: value,
    });
  }
  function handleTemplateChange(e) {
    let { name, id } = e.target;
    console.log(name, id);
    setFinalData({
      ...finalData,
      [name]: id,
    });
  }
  // useEffect(()=>{
  //   if(finalizeReducer.sidebar == false )
  //   setFinalData(finalizeReducer)
  // })
  useEffect(() => {
    dispatch(finalizeAction(finalData));
    console.log("Final Data_finalPage: ", finalData);
  }, [finalData]);

  // console.log("Final Data_(1st line): " + JSON.stringify(finalData));
  let color = finalData.color;
  const bgClr = `${color}bg`;
  const textClr = `${color}text`;
  const fontStl = finalData.fontstyle;
  const fontSz = finalData.fontsize ? finalData.fontsize : "small";

  // console.log("COLOR coming from : " + bgClr);
  // console.log("Font Style : " + fontStl);

  // const downloadResume = () => {
  //   const input = document.getElementById("resumeCapture");
  //   html2canvas(input, {
  //     windowWidth: "100%",
  //   }).then((canvas) => {
  //     const img = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "px", "a4");
  //     var width = pdf.internal.pageSize.getWidth();
  //     var height = pdf.internal.pageSize.getHeight();
  //     pdf.addImage(img, "JPEG", 0, 0, width, height);
  //     pdf.save("resume.pdf");
  //   });
  // };

  function generatePDF() {
    // Choose the element that our invoice is rendered in.
    const element = document.getElementById("invoice");
    // Choose the element and save the PDF for our user.
    var opt = {
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(opt).save();
  }

  return (
    <div className={Styles.finalizeContainer}>
      {(template == 2 && (
        <Template2
          fontSz={fontSz}
          bgClr={bgClr}
          textClr={textClr}
          fontStl={fontStl}
          cd={cd}
          ex={ex}
          edu={edu}
          summary={summary}
          newSk={newSk}
        />
      )) ||
        (template == 3 && (
          <Template3
            fontSz={fontSz}
            bgClr={bgClr}
            textClr={textClr}
            fontStl={fontStl}
            cd={cd}
            ex={ex}
            edu={edu}
            summary={summary}
            newSk={newSk}
          />
        )) ||
        (template == 1 && (
          <Template1
            fontSz={fontSz}
            bgClr={bgClr}
            textClr={textClr}
            fontStl={fontStl}
            cd={cd}
            ex={ex}
            edu={edu}
            summary={summary}
            newSk={newSk}
          />
        ))}

      <div className={Styles.rightContainer}>
        <div className={Styles.contentContainer}>
          <h4 style={{ fontSize: "2.2em", letterSpacing: "5px" }}>
            Your Resume
          </h4>
          <p style={{ letterSpacing: "2px" }}>What do you want to do next?</p>
          <div className={Styles.midHeading}>Export Options</div>
          <button className={Styles.download} onClick={generatePDF}>
            Download
          </button>

          <div className={Styles.underline}></div>
          <div className={Styles.midHeading}>Formatting Options</div>

          <div className={Styles.fontContainer}>
            <div className={Styles.fontStyleContainer}>
              <div className={Styles.smallHeading}>Font Style</div>
              <select
                className={Styles.fontStyle}
                placeholder="font-style"
                name="fontstyle"
                onChange={handleOnChange}
              >
                {fontStyleArr.map((ele) => (
                  <option value={ele}>{ele}</option>
                ))}
              </select>
            </div>
            <div className={Styles.fontSizeContainer}>
              <div className={Styles.smallHeading}>Font Size</div>
              <select
                name="fontsize"
                className={Styles.fontStyle}
                placeholder="font-size"
                id="fontsize"
                onChange={handleOnChange}
              >
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
              </select>
            </div>
          </div>
          <div className={Styles.colorContainer}>
            <div className={Styles.smallHeading}>Colors</div>
            <div className={Styles.colorBtns}>
              {colorArr.map((ele) => (
                <button
                  key={ele}
                  name="color"
                  value={ele}
                  onClick={handleClick}
                  className={`${ele}bg circle`}
                ></button>
              ))}
            </div>
          </div>
          <div className={Styles.underline}></div>
          <button
            name="sidebar"
            className={Styles.changeTemplate}
            onClick={() => {
              setTemp(!temp);
            }}
          >
            Change Template
          </button>
          {temp && (
            <div className={Styles.templateContainer}>
              <button
                id="1"
                name="template"
                onClick={(e) => {
                  handleTemplateChange(e);
                }}
              >
                template-1
              </button>
              <button
                id="2"
                name="template"
                onClick={(e) => {
                  handleTemplateChange(e);
                }}
              >
                template-2
              </button>
              <button
                id="3"
                name="template"
                onClick={(e) => {
                  handleTemplateChange(e);
                }}
              >
                template-3
              </button>
            </div>
          )}

          {/* {finalizeReducer.sidebar === true ? <Sidebar /> : ""} */}
        </div>
      </div>
    </div>
  );
}
