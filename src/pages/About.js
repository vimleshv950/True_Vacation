import React from "react";
import "./about.css";
import pic1 from "./../assets/img/pic1.jpg";
// import Carousel from './../components/Carousel'
const About = () => {
  return (
    <>
      {/* <Carousel/> */}
      <div className="about container">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">About Me</h3>
          <hr className="w-50 mx-auto pb-5" />
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <img src={pic1} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h2>Wanna Know Me?</h2>
            <hr />
            <h4>Dharmendra Kumar Tiwari</h4>
            <p>Government approved italian tour Guide -</p>
            <p> travel & Tourism Chhatarpur, Madhya Pradesh, India</p>
            <button className="btn w-50 ">
              <a href="#">Know More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
