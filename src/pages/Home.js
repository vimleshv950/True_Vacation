import React from "react";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
// import Testimonial from "../components/Testimonial";
import TopDestination from "../components/TopDestination";
import Cards from "./../components/card-item/Cards";

const Home = () => {
  return (
    <div>
      <Carousel />
      <TopDestination/>
      <Cards />
      <Services/>
      {/* <Testimonial/> */}
    </div>
  );
};

export default Home;
