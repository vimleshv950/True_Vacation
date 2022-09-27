import React from "react";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
// import Testimonial from "../components/Testimonial";
import TopDestination from "../components/TopDestination";
import Cards from "./../components/card-item/Cards";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
  <Helmet>
        <title>Home</title>

        <meta name="description" content="Explore more the best travel and tour in india" />
      
      </Helmet>
      <Carousel />
      <Cards />
      <TopDestination/>
      <Services/>
      {/* <Testimonial/> */}
    </div>
  );
};

export default Home;
