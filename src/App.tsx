import "./App.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Portfolio from './components/portfolio';
import Skills from "./components/skills";


function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
