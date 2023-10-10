import { Route, Routes, Link } from "react-router-dom";
import Contact from "./components/contact";
import Project from "./components/project";
import Skills from "./components/skill";
import Home from "./components/header";
import NavBar from "./components/navbar";

const AppRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
