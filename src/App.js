// import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const styleSheet = {
    peanut: {backgroundColor: "purple"}
  }



  return (
    <Router>
      <div className="page-container">
        <div className="header-container">
          <Header taco="burrito" />
        </div>

        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/resume" element={<Resume />} />
        </Routes>

        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
