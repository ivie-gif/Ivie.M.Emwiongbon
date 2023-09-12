import "./App.css";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Portfolio from './components/portfolio'

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
