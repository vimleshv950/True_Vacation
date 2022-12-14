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
import Gallery from "./pages/Gallery";
import ExploreMajesticKhajurahoWithYoga from "./details/ExploreMajesticKhajurahoWithYoga";
import JhansiOrchhaTour from "./details/TureVacationMpTour";
import GoldenTriangleTour from "./details/GoldenTriangleTour";
import TureVacationMpTour from "./details/TureVacationMpTour";
import GwaliorOrchhaKhajuraho from "./details/GwaliorOrchhaKhajuraho";
import GoldenTringleWithCentralIndiaGoa from "./details/GoldenTringleWithCentralIndiaGoa";
import PrivateHeritageTour from "./details/PrivateHeritageTour";
import KhajurahoBicycleTour from "./details/KhajurahoBicycleTour";
import MpTour from "./details/MpTour";

import TrueVacationTourTravel from "./details/TrueVacationTourTravel";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>True Vacation</title>

        <meta name="description" content="Best travel and tour in india" />
        <meta name="keywords" content="Travel, tour, vacation, trip" />
      </Helmet>

      <Nabvar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />

        <Route
          exact
          path="/weekendspecialkhajurahotour"
          element={<WeekendSpecialKhajurahoTour />}
        />
        <Route
          exact
          path="/orchhakhajurahotour"
          element={<OrchhaKhajurahoTour />}
        />
        <Route
          exact
          path="/medievalculturewithwildlifetour"
          element={<MedievalCultureWithWildlifeTour />}
        />
        <Route
          exact
          path="/divinecentralindiatour"
          element={<DivineCentralIndiaTour />}
        />
        <Route
          exact
          path="/exploremajestickhajurahowithyoga"
          element={<ExploreMajesticKhajurahoWithYoga />}
        />
        <Route
          exact
          path="/turevacationmptour"
          element={<TureVacationMpTour />}
        />

        <Route
          exact
          path="/goldentriangletour"
          element={<GoldenTriangleTour />}
        />

        <Route
          exact
          path="/gwaliororchhakhajuraho"
          element={<GwaliorOrchhaKhajuraho />}
        />
        <Route
          exact
          path="/goldentringlewithcentralindiagoa"
          element={<GoldenTringleWithCentralIndiaGoa />}
        />

        <Route
          exact
          path="/privateheritagetour"
          element={<PrivateHeritageTour />}
        />
        <Route
          exact
          path="/khajurahobicycletour"
          element={<KhajurahoBicycleTour />}
        />
        <Route exact path="/mptour" element={<MpTour />} />
        <Route
          exact
          path="/truevacationtourtravel"
          element={<TrueVacationTourTravel />}
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
