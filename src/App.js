import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

import Nabvar from "./components/Nabvar";
import Khajuraho from "./details/Khajuraho";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
 

function App() {
  return (
    <Router>
      <Nabvar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/khajuraho" element={<Khajuraho />} />
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
