import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./common/Header.jsx";
import Main from "./common/Main.jsx";
import Footer from "./common/Footer.jsx";
import Semiproject from "./projects/team/Semiproject.jsx";
import FinalProject from "./projects/team/FinalProject.jsx";
import ScrollToTop from "./ScrolltoTop.jsx";
import Schedule from "./projects/solo/schedule/Schedule.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      <ScrollToTop />
      <Header setActiveSection={setActiveSection} />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects/team/semi" element={<Semiproject />} />
          <Route path="/projects/team/final" element={<FinalProject />} />
          <Route path="/projects/solo/schedule" element={<Schedule />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
