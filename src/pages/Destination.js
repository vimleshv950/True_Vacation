import React from "react";
import { Link } from "react-router-dom";
import "./destination.css";
import amerelephant from "./../assets/img/amer-elephant.jpg";
import bicycle2 from "./../assets/img/bicycle2.jpeg";
import amer from "./../assets/img/amer.jpg";
import gwalior2 from "./../assets/img/gwalior-2.jpg";
import khajuraho5 from "./../assets/img/khajuraho-5.jpg";
import orchha5 from "./../assets/img/orchha-5.jpg";
import khajuraho15 from "./../assets/img/khajuraho-15.jpg";
import img11 from "./../assets/img/img-11.jpg";
import yoga from "./../assets/img/yoga.jpg";
import orchha7 from "./../assets/img/orchha-7.jpg";
import khajuraho26 from "./../assets/img/khajuraho-26.jpg";
import pic59 from "./../assets/img/pic-59.jpeg";
import pandavfall2 from "./../assets/img/pandav-fall-2.jpg";
import { Helmet } from "react-helmet";

const Destination = () => {
  return (
    <>
      <Helmet>
        <title>Explore Destination</title>

        <meta
          name="description"
          content="Epic Destination in india for Vacation"
        />
      </Helmet>
      <section className="py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">
            Choose Your Favorite Destination
          </h2>
          <p className="lead mb-5">
            “The journey of a thousand miles begins with a single step.”
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col ">
              <div className="card">
                <img src={khajuraho5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">
                      Week-end Special Khajuraho Tour
                    </h5>
                    <p className="card-text text-gray-600">
                      --1 Nights & 02 Days--
                    </p>
                    <Link to="/weekendspecialkhajurahotour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={orchha5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Orchha Khajuraho Tour</h5>
                    <p className="card-text text-gray-600">
                      --2 Nights & 03 Days--
                    </p>
                    <Link to="/orchhakhajurahotour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={khajuraho15} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">
                      Medieval Culture With Wildlife Tour
                    </h5>
                    <p className="card-text text-gray-600">
                      --04 Nights & 05 Days--
                    </p>
                    <Link to="/medievalculturewithwildlifetour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={img11} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Divine Central India Tour</h5>
                    <p className="card-text text-gray-600">
                      --07 Nights & 08 Days--
                    </p>
                    <Link to="/divinecentralindiatour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={yoga} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">
                      Explore Majestic Khajuraho With Yoga
                    </h5>
                    <p className="card-text text-gray-600">--03 Days--</p>
                    <Link to="/exploremajestickhajurahowithyoga">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={orchha7} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">MP Tour</h5>
                    <p className="card-text text-gray-600">
                      --08 Nights & 09 Days--
                    </p>
                    <Link to="/turevacationmptour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={amer} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Golden Triangle Tour</h5>
                    <p className="card-text text-gray-600">
                      --6 Nights & 7 Days--
                    </p>
                    <Link to="/goldentriangletour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={gwalior2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Gwalior Orchha Khajuraho</h5>
                    <p className="card-text text-gray-600">07-Days</p>
                    <Link to="/gwaliororchhakhajuraho">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={amerelephant} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">
                      Golden Tringle With Central India Goa
                    </h5>
                    <p className="card-text text-gray-600">
                      15 Days and 14 Nights
                    </p>
                    <Link to="/goldentringlewithcentralindiagoa">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={khajuraho26} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">
                      Heritage Tour of Khajuraho & Orchha
                    </h5>
                    <p className="card-text text-gray-600">03-Days</p>
                    <Link to="/privateheritagetour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={bicycle2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Khajuraho Bicycle Tour </h5>
                    <p className="card-text text-gray-600">UNESCO site</p>
                    <Link to="/khajurahobicycletour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={pic59} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">MP-Tour</h5>
                    <p className="card-text text-gray-600">06 Night - 07 day</p>
                    <Link to="/mptour">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={pandavfall2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">MP-Tour</h5>
                    <p className="card-text text-gray-600">07 day</p>
                    <Link to="/truevacationtourtravel">
                      <button className="btn btn-outline-primary" type="submit">
                        Search More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
