import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

import Nabvar from "./components/Nabvar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
// import Gallery from "./pages/Gallery";
import OrchhaKhajurahoTour from "./details/OrchhaKhajurahoTour";
import WeekendSpecialKhajurahoTour from "./details/WeekendSpecialKhajurahoTour";
import MedievalCultureWithWildlifeTour from "./details/MedievalCultureWithWildlifeTour";
import DivineCentralIndiaTour from "./details/DivineCentralIndiaTour";
import Gallery from "./pages/gallery/Gallery";

 

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

      
        <Route exact path="/weekendspecialkhajurahotour" element={<WeekendSpecialKhajurahoTour />} />
        <Route exact path="/orchhakhajurahotour" element={<OrchhaKhajurahoTour />} />
        <Route exact path="/medievalculturewithwildlifetour" element={<MedievalCultureWithWildlifeTour />} />
        <Route exact path="/divinecentralindiatour" element={<DivineCentralIndiaTour />} />

     


        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
