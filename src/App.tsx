// App.js
// import { BrowserRouter } from "react-router-dom";
// import Routes from "./Routes";
import "./App.css";
import Contact from "./components/contact";
import Project from "./components/project";
import Skills from "./components/skill";
import NavBar from "./components/navbar";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
