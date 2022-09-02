import React from "react";
import "./details.css";

import khajuraho8 from "./../assets/img/khajuraho-8.jpg";
import khajuraho10 from "./../assets/img/khajuraho-10.jpg";

import orchha4 from "./../assets/img/orchha-4.jpg";
import orchha2 from "./../assets/img/orchha-2.jpg";
import orchha3 from "./../assets/img/orchha-3.jpg";
import khajuraho13 from "./../assets/img/khajuraho-13.jpg";
import khajuraho14 from "./../assets/img/khajuraho-14.jpg";

const KhajurahoSec = () => {
  return (
    <>
      <div className="details blog-single gray-bg">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Orchha- Khajuraho Tour</h3>
          <hr className="w-50 mx-auto pb-0" />
        </div>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img src={khajuraho8} className="main-img" title="" alt="" />
                </div>
                <div className="article-title">
                  <h3>Special Orchha- Khajuraho Tour</h3>
                  <div className="media">
                    <div className="avatar">
                      <img src={orchha2} className="main-img" />
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <h6 className="display-4 font-weight-bold text-center">
                    --2 Nights & 03 Days--
                  </h6>
                  <hr />

                  <h4>Day 01: Arrival Jhansi – Orchha - Khajuraho</h4>
                  <p>
                    Arrival Jhansi Railway station in morning. Upon arrival pick
                    up from Railway station and procced by road to Orchha. Visit
                    Ram Raja temple, Chaturbhuj temple and Jahangir Mahal. In
                    late afternoon continue drive to Khajuraho. On arrival check
                    into hotel. Overnight stay at hotel.
                  </p>

                  <h4>Day 02: Khajuraho</h4>
                  <p>
                    Today after breakfast proceed to full day guided tour of
                    word heritage monuments of Khajuraho including Western,
                    Eastern and Southern group of temples. In evening enjoy
                    light and sound show at Western Group of temples. Overnight
                    stay at hotel..
                  </p>
                  <h4>Day 03: Khajuraho – Jhansi - Departure</h4>
                  <p>
                    First half of the day is free for leisure. You can opt an
                    early morning jungle safari tour of Panna National Park.
                    Around 1100 hrs check out the hotel and start drive to
                    Jhansi. Drop at Jhansi Railway station to catch your return
                    scheduled train.
                  </p>
                  <h4>
                    Estimated Package Price: 8000 /- per person (based on
                    minimum 09 pax) Inclusions:
                  </h4>

                  <ul>
                    <li> AC accommodation in 3 star equivalent hotels. </li>
                    <li>
                      All transfers and sight seeing by AC deluxe vehicle.
                    </li>
                    <li> 01 day guided tour of temples,.</li>
                    <li> Half day guided tour of Orchha monuments.</li>
                    <li> All parking, toll and driver allowances</li>
                    <li>GST</li>
                    <br />
                    <li>
                      <h6 className="bolder">Exclusions:</h6>
                    </li>
                    <li> Entrance fees to monuments, national park etc.</li>
                    <li> Optional tour cost</li>
                    <li>
                      Any extra services, tips, laundry, Camera and video fees
                    </li>
                    <li>
                      Any other services not specifically mentioned under
                      inclusions.
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
                      <img src={khajuraho10} className="side-img" />
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
                      <img src={orchha3} className="side-img" title="" alt="" />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img src={orchha4} className="side-img" title="" alt="" />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img
                        src={khajuraho13}
                        className="side-img"
                        title=""
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img
                        src={khajuraho14}
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

export default KhajurahoSec;
