import "./App.css";
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
