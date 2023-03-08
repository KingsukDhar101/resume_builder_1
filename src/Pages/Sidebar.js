import React, { useEffect, useState } from "react";
import Styles from "../Styles/Sidebar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { finalizeAction } from "../Actions/action";

export default function Sidebar() {
  const dispatch = useDispatch();
  const { finalizeReducer } = useSelector((state) => state);
  const [finaldata, setFinaldata] = useState(finalizeReducer);

  // console.log("Data @ sidebar : ", finalizeReducer);
  let sbopen = finalizeReducer.sidebar;
   

  function handleTemplateChange(e){
    let {name, id} = e.target;
    console.log(name, id);
    setFinaldata({
      ...finaldata,
      [name]: id
    });
  }
  function handleClickSidebar(e) {
    let { name } = e.target;
    setFinaldata({
      ...finaldata,
      [name]: false
    });
    // console.log("Cross click: ",finaldata);
  }
  useEffect(() => {
    dispatch(finalizeAction(finaldata));
    // console.log("Final call_sidebar: ",finalizeReducer)
  }, [finaldata]);

  return (
    <div className={Styles.sidebar_container}>
      <button
        name="sidebar"
        className={Styles.cross}
        onClick={(e) => {
          handleClickSidebar(e);
        }}
      >
        X
      </button>
      <div className={Styles.box}>
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
    </div>
  );
}
