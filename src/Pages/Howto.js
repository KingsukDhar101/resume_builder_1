import React from 'react'
import Styles from "../Styles/howto.module.css";
import { Link } from 'react-router-dom';

function Howto() {
  return (
    <div className={Styles.container}>
        <section>
            <h1>How do you want to start?</h1>
            <div className={Styles.parentbox}>
            <div className={Styles.left}>
                <img src="https://cdn2.resumenerd.com/images/icon-create-resume.svg" alt="" />
                <h2>Create New Resume</h2>
                <p>We will help you create a resume step-by-step.</p>
                <Link to="/"><button className={Styles.btnSite}>START FRESH</button></Link>
            </div>
            <div className={Styles.right}>
            <img src="https://cdn2.resumenerd.com/images/icon-upload-resume.svg" alt="" />
                <h2>I already have resume</h2>
                <p>We'll re-format it and fill in your information so you don't have to do it.</p>
                <Link to="/"><button className={Styles.btnSite}>UPLOAD RSUME</button></Link>
            </div>
            </div>
            <Link className={Styles.linkcolor} to="/">Back</Link>
        </section>
    </div>
  )
}

export default Howto