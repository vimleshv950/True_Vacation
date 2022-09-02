import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

import Nabvar from "./components/Nabvar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";
import Gallery from "./pages/gallery/Gallery";
// import Gallery from "./pages/Gallery";
// import GalleryProps from "./pages/gallery/GalleryProps";
import Home from "./pages/Home";
import Khajuraho from "./details/Khajuraho";
import KhajurahoSec from "./details/KhajurahoSec";
import KhajurahoThird from "./details/KhajurahoThird";
 

function App() {
  return (
    <Router>
      <Nabvar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />

        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />

      
        <Route exact path="/khajuraho" element={<Khajuraho />} />
        <Route exact path="/khajurahoSec" element={<KhajurahoSec />} />
        <Route exact path="/khajurahothird" element={<KhajurahoThird />} />


        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
