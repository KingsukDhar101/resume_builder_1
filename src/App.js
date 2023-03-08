import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import StartProject from "./Pages/StartProject";
// import Howto from "./Pages/Howto";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ContactInfo from "./Pages/ContactInfo";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Summary from "./Pages/Summary";
import FinalizePage from "./Pages/FinalizePage";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

function App() {


  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Layout>
              <Routes>
                <Route path="/" element={<StartProject />} />
                <Route path="/contact" element={<ContactInfo />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/finalize-page" element={<FinalizePage />} />
            
                {/* <Route path="/howto" element={<Howto />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
          </Layout>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
