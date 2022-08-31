import React from "react";
import "./khajuraho.css";
// import slide2 from "./../assets/img/slide-2.jpg";
import khajuraho1 from "./../assets/img/khajuraho-1.jpg";
import khajuraho2 from "./../assets/img/khajuraho-2.jpg";
import khajuraho3 from "./../assets/img/khajuraho-3.jpg";
// import img20 from "./../assets/img/img-20.jpg";
import khajuraho4 from "./../assets/img/khajuraho-4.jpg";
import khajuraho5 from "./../assets/img/khajuraho-5.jpg";
import khajuraho6 from "./../assets/img/khajuraho-6.jpg";

const Khajuraho = () => {
  return (
    <>
      <div className="details blog-single gray-bg">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold"> Our Khajuraho</h3>
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
                  <h3>
                    Three-days Private Heritage Tour of Khajuraho & Orchha
                  </h3>
                  <div className="media">
                    <div className="avatar">
                      <img src={khajuraho6} className="main-img" />
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                    Khajuraho Group of Monuments' is famous for its Nagara-Style
                    architecture and graceful sculptures of nayikas and deities.
                    The splendour of the intricate statues is one of the reasons
                    that makes it a popular site to visit among tourists.
                  </p>
                  <p>
                    Built between 950-1050 AD by the Chandela Dynasty, these
                    temples represent various forms like meditation, spiritual
                    teachings, relationship, through stimulating art. The
                    temples are famous for its craftsmanship that consist of
                    splendid demonstrations of fine sculptures and exceptional
                    architectural skill, making them one of the most
                    stunning UNESCO World Heritage Sites in India. These temples
                    are divided into three groups: Eastern, Western and
                    Southern. 
                  </p>

                  <h2>Itinerary</h2>
                  <h4>Day 01: Arrive Khajuraho</h4>
                  <p>
                    Arrive Khajuraho Rly Station/Airport. On arrival transfer to
                    hotel. Today visit Western group of temples and Eastern
                    group of temples which are renowned as world Heritage site
                    by UNESCO and worldwide famous for its erotic sculptures and
                    architecture. . In evening enjoy light and sound show to be
                    organised by MPSTDC at Western group Temple. Night stay at
                    hotel.
                  </p>

                  <h4>Day 02: Khajuraho- Orchha</h4>
                  <p>
                    After breakfast an excursion tour of Ranehfall l. After
                    lunch drive to Orchha (170 Kms/3. 5 hrs drive). On arrival
                    at hotel. In evening you may visit local temple to attend
                    evening Arti. Night stay at Orchha.
                  </p>
                  <h4>Day 03: Orchha - Jhansi - Departure</h4>

                  <p>
                    In the morning walking tour across the River Betwa. After
                    B/F proceed to visit Jahangir Fort, riverside cenotaphs of
                    Bundela Kings and temples like Ram Raja Temple, Laxminarayan
                    Temple, Chaturbhuj Temple etc. Late afternoon transfer to
                    Jhansi Rlw station to board the train toward your next
                    destination.
                  </p>

                  <p>
                    Included Sightseeing by air conditioned vehicle. Services of
                    local English / Italian / Spanish/ German / Russian Speaking
                    Guide. Monument Fee to the places as per the itinerary.
                    Presently Applicable Taxes. 01 bottle water per person per
                    day Not Included Personal expenses such as table drinks
                    telephone calls or tip etc. Any additional expenses caused
                    by disturbance in program due to weather conditions,
                    sickness, natural disasters, riots etc. Liability for or
                    insurance against injury, loss of life, accidents or loss of
                    goods. Camera Fees.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 m-15px-tb blog-aside">
              <div className="widget widget-author">
              
                <div className="widget-body">
                  <div className="media align-items-center">
                    <div className="avatar">
                      <img src={khajuraho1} className="side-img" />
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
                      <img src={khajuraho2} className="side-img" title="" alt="" />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img src={khajuraho3} className="side-img" title="" alt="" />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img src={khajuraho4} className="side-img" title="" alt="" />
                    </div>
                  </div>
                  <div className="latest-post-aside media">
                    <div className="lpa-right">
                      <img src={khajuraho5} className="side-img" title="" alt="" />
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
