import React from 'react'
import "./details.css";

import img11 from "./../assets/img/img-11.jpg";
import varanas1 from "./../assets/img/varanas-1.jpg";

import pandavfall2 from "./../assets/img/pandav-fall-2.jpg";
import orchha5 from "./../assets/img/orchha-5.jpg";
import waterfall from "./../assets/img/waterfall.jpg";
import panna1 from "./../assets/img/panna-1.jpg";
import panna2 from "./../assets/img/panna-2.jpg";

const DivineCentralIndiaTour = () => {
  return (
    <>
      <div className="details blog-single gray-bg">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Divine Central India Tour</h3>
          <hr className="w-50 mx-auto pb-0" />
        </div>
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img src={img11} className="main-img" title="" alt="" />
                </div>
                <div className="article-title">
                  <h3>Divine Central India Tour</h3>
                  <div className="media">
                    <div className="avatar">
                      <img src={varanas1} className="main-img" />
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <h6 className="display-4 font-weight-bold text-center">
                    --4 Nights & 05 Days--
                  </h6>
                  <hr />

                  <h4>Day 01: Arrival Jhansi – Orchha </h4>
                  <p>
                    Arrival Jhansi Railway station in morning. Upon arrival pick
                    up from Railway station and proceed by road to Orchha. Upon
                    arrival check into hotel. Later full day orchha tour
                    including visit Ram Raja temple, Chaturbhuj temple and
                    Jahangir Mahal. Overnight stay at Orchha.
                  </p>

                  <h4>Day 02: Khajuraho</h4>
                  <p>
                    Today after breakfast proceed by road to Khajuraho. Upon
                    arrival check into hotel and then guided tour of word
                    hertoage monuments of Khajuraho including Western & Eastern
                    group of temples. In evening enjoy light and sound show at
                    Western Group of temples. Overnight stay at hotel..
                  </p>

                  <h4>Day 03: Khajuraho – Bandhavgarh</h4>
                  <p>
                    First half of the day is free for leisure. You can opt an
                    early morning jungle safari tour of Panna National Park.
                    Around 1100 hrs check out the hotel and start drive to
                    Bandhavgarh. Arrival Bandhawgarh in evening. Check into your
                    resort for overnight stay.
                  </p>
                  <h4>Day 04: Bandhavgarh</h4>
                  <p>
                    Enjoy an early morning Jungle Safari in Bandhavgarh national
                    park to cite the Tiger and other wild animals. Return back
                    to resort in afternoon. Evening at leisure. Overnight stay
                    at hotel.
                  </p>
                  <h4>Day 05: Bandhavgarh – Jabalpur - Departure</h4>
                  <p>
                    After breakfast start drive to Jabalpur. En-route visit to
                    famous Dhuandhar water fall Bhedaghat. Then transfer to
                    railway station/Airport to continue your return journey to
                    your respective destination.
                  </p>
                  <h4>
                    Estimated Package Price: Rs. 22000 ./- per person (based on
                    minimum 02 pax) Inclusions:
                  </h4>

                  <ul>
                    <li> AC accommodation in 3 star equivalent hotels. </li>
                    <li>
                      All transfers and sight seeing by AC deluxe vehicle.
                    </li>
                    <li> 01 day guided tour of temples at Khajuraho.</li>
                    <li> 01 day guided tour of Orchha monuments.</li>
                    <li> All parking, toll and driver allowances</li>
                    <li>GST</li>
                    <br />
                    <li>
                      <h6 className="bolder">Exclusions:</h6>
                    </li>
                    <li> Entrance fees to monuments, national park etc.</li>
                    <li> Optional tour cost</li>
                    <li>
                      Any extra services, tips, laundry, Camera and video fees{" "}
                    </li>
                    <li>
                      Any other services not specifically mentioned under
                      inclusions
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
                      <img src={waterfall} className="side-img" />
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
                      <img src={panna1} className="side-img" title="" alt="" />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img src={panna2} className="side-img" title="" alt="" />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img src={orchha5} className="side-img" title="" alt="" />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img
                        src={pandavfall2}
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
  )
}

export default DivineCentralIndiaTour
