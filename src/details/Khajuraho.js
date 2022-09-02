import React from "react";
import "./details.css";

import khajuraho1 from "./../assets/img/khajuraho-1.jpg";
import khajuraho2 from "./../assets/img/khajuraho-2.jpg";
import khajuraho3 from "./../assets/img/khajuraho-3.jpg";

import khajuraho4 from "./../assets/img/khajuraho-4.jpg";
import khajuraho5 from "./../assets/img/khajuraho-5.jpg";
import khajuraho6 from "./../assets/img/khajuraho-6.jpg";
import khajuraho7 from "./../assets/img/khajuraho-7.jpg";

const Khajuraho = () => {
  return (
    <>
      <div className="details blog-single gray-bg">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Special Khajuraho Tour</h3>
          <hr className="w-50 mx-auto pb-0" />
        </div>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img src={khajuraho5} className="main-img" title="" alt="" />
                </div>
                <div className="article-title">
                  <h3>Week-end Special Khajuraho Tour</h3>
                  <div className="media">
                    <div className="avatar">
                      <img src={khajuraho6} className="main-img" />
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <h6 className="display-4 font-weight-bold text-center">
                    --1 Nights & 02 Days--
                  </h6>
                  <hr />

                  <h4>Day 01: Arrival Khajuraho</h4>
                  <p>
                    Arrival at Khajuraho Railway station around 0900 hrs. Upon
                    arrival pick up from Railway station and transfer to hotel.
                    After freshen up proceed full day guided tour to world
                    heritage monuments of Western, Eastern & Southern group of
                    temples. Enjoy light and sound show/folk dance show.
                    Overnight stay at hotel.
                  </p>

                  <h4>Day 02: Khajuraho - Departure</h4>
                  <p>
                    First half of the day is free for leisure. You can opt an
                    early morning jungle safari tour of Panna National Park.
                    After lunch proceed for an excursion tour to Raneh Fall.
                    Then transfer directly to Railway station to catch the
                    train.
                  </p>
                  <h4>
                    Estimated Package Price: Rs. 7500/- per person (based on
                    minimum 02 pax) Inclusions:
                  </h4>

                  <ul>
                    <li>
                      AC accommodation for 01 night in 3 star equivalent
                      hotels.
                    </li>
                    <li>
                       All transfers and sight seeing by AC deluxe vehicle.
                    </li>
                    <li> 01 day guided tour of temples,.</li>
                    <li> All parking, toll and driver allowances</li>
                    <li>GST</li>
                    <br />
                    <li> <h6 className="bolder">Exclusions:</h6></li>
                    <li> Entrance fees to monuments, national park etc.</li>
                    <li> Optional tour cost</li>
                    <li> Any extra services, tips, laundry, Camera and video fees</li>
                    <li>
                    Any other services not specifically mentioned under inclusions.
                    
                    </li>
                   
                  </ul>

                 
                </div>
              </article>
            </div>
            <div className="col-lg-4 m-15px-tb blog-aside">
              <div className="widget widget-author">
                <div className="widget-body">
                  <div className="media align-items-center">
                    <div className="avatar">
                      <img src={khajuraho7} className="side-img" />
                    </div>
                  </div>
                  <p>
                    Khajuraho Group of Monuments' is famous for its Nagara-Style
                    architecture and graceful sculptures of nayikas and deities.
                    The splendour of the intricate statues is one of the reasons
                    that makes it a popular site to visit among tourists.
                  </p>
                </div>
              </div>

              <div className="widget widget-latest-post">
                <div className="widget-title">
                  <h3>Latest Post</h3>
                </div>
                <div className="widget-body p-4">
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img
                        src={khajuraho2}
                        className="side-img"
                        title=""
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img
                        src={khajuraho3}
                        className="side-img"
                        title=""
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img
                        src={khajuraho4}
                        className="side-img"
                        title=""
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img
                        src={khajuraho1}
                        className="side-img"
                        title=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Khajuraho;
