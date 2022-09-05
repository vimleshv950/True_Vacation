import React from "react";
import { Link } from "react-router-dom";
import "./destination.css";
import img1 from "./../assets/img/img-1.jpg";
import img2 from "./../assets/img/img-2.jpg";
import img3 from "./../assets/img/img-3.jpg";
import img4 from "./../assets/img/img-4.jpg";
import khajuraho20 from "./../assets/img/khajuraho-20.jpg";
import img6 from "./../assets/img/img-6.jpg";
import img7 from "./../assets/img/img-7.jpg";
import img8 from "./../assets/img/img-8.jpg";
import img9 from "./../assets/img/img-9.jpg";
import img10 from "./../assets/img/img-10.jpg";
import img11 from "./../assets/img/img-11.jpg";
import img12 from "./../assets/img/img-12.jpg";
import img13 from "./../assets/img/img-13.jpg";
import img14 from "./../assets/img/img-14.jpg";
import img15 from "./../assets/img/img-15.jpg";

const Destination = () => {
  return (
    <>
      <section className="py-5">
        <div classNameName="container py-4">
          <h2 className="text-uppercase lined mb-4">
            Choose Your Favorite Destination
          </h2>
          <p className="lead mb-5">
            “The journey of a thousand miles begins with a single step.”
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img src={khajuraho20} className="card-img-top" alt="..." />
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
                <img src={img2} className="card-img-top" alt="..." />
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
                <img src={img3} className="card-img-top" alt="..." />
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
                <img src={img4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Divine Central India Tour</h5>
                    <p className="card-text text-gray-600">
                      --07 Nights & 08 Days--{" "}
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
                <img src={img1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-gray-600">
                      This is a longer card with supporting text below as a
                    </p>
                    <Link to="/">
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
                <img src={img2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-gray-600">
                      This is a longer card with supporting text below as a
                    </p>
                    <Link to="/">
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
                <img src={img3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-gray-600">
                      This is a longer card with supporting text below as a
                    </p>
                    <Link to="/">
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
                <img src={img4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="col-md-12 text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text text-gray-600">
                      This is a longer card with supporting text below as a
                    </p>
                    <Link to="/">
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
