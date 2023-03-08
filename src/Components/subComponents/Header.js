import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Styles from "../../Styles/header.module.css";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const navigate = useNavigate();
  const { userReducer } = useSelector((state) => state);
  const [email, setEmail] = useState(userReducer.email);
  const [username, setUsername] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("User data@ localstorage : ", user);
  
  useEffect(()=>{
    setUsername(user);
  },[]);

  function handleLogout() {
    localStorage.removeItem("user");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Logout successfull");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        alert("Logout unsuccessfull");
      });
  }

  return (
    <div className={Styles.headerContainer}>
      <Link to="/">
        <div className={Styles.logo}>
          <h3>ResumeCreator</h3>
        </div>
      </Link>

      <div className={Styles.contents}>
        
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <div className={Styles.hLink}>About Us</div>
        </Link>

        {!user ? (
          <>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <div className={Styles.hLink}>Signup</div>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <div className={Styles.hLink}>Login</div>
            </Link>
          </>
        ) : (
          <>
            <div className={`${Styles.hLink} ${Styles.username} `}>
              {user.email}
            </div>
            <button className={`${Styles.hLink_btn}`} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
