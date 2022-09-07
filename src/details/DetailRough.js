import React from "react";
import { Link } from "react-router-dom";
import img1 from "./../assets/img/img-1.jpg";

const DetailRough = () => {
  return (
    <>
      <section class="py-5">
        <div class="container py-4">
          <h2 class="text-uppercase lined mb-4">Divine Central India Tour </h2>
          <p class="lead mb-5">7 Nights & 08 Days</p>
          <p class="text-sm mb-5">
            Please feel free to contact us, our customer service center is
            working for you 24/7.
          </p>
          <div class="row gy-5 mb-5">
            <div class="col-lg-6">
              <img src={img1} alt="" />
            </div>
            <div class="col-lg-6 tour_details  d-flex justify-content-center align-items-center flex-column">
            <p className="tour_details card-text text-gray-600">
                Day 01: Arrival Khajuraho
              </p>
            <p className="text-sm">
              Day 01: Arrival Khajuraho Pick up from Khajuraho railway station
              and transfer to hotel. After freshen up full day sightseeing tour
              of word heritage monuments of Khajuraho including Western, Eastern
              and Southern group of temples. In evening enjoy light and sound
              show at Western Group of temples. Overnight stay at hotel...
              </p>
            </div>
          </div> 
          <div class="row gy-5 mb-5">
           
            <div class="col-lg-6 tour_details  d-flex justify-content-center align-items-center flex-column">
            <p className="tour_details card-text text-gray-600">
                Day 01: Arrival Khajuraho
              </p>
            <p className="text-sm">
              Day 01: Arrival Khajuraho Pick up from Khajuraho railway station
              and transfer to hotel. After freshen up full day sightseeing tour
              of word heritage monuments of Khajuraho including Western, Eastern
              and Southern group of temples. In evening enjoy light and sound
              show at Western Group of temples. Overnight stay at hotel...
              </p>
            </div>
            <div class="col-lg-6">
              <img src={img1} alt="" />
            </div>
          </div> 
          
         
        </div>
      </section>
    </>
  );
};

export default DetailRough;
