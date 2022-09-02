import React from "react";
import {Link} from 'react-router-dom'
import "./destination.css";
import img1 from "./../assets/img/img-1.jpg";
import img2 from "./../assets/img/img-2.jpg";
import img3 from "./../assets/img/img-3.jpg";
import img4 from "./../assets/img/img-4.jpg";
import img5 from "./../assets/img/img-5.jpg";
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
  
      <div className="destination container">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Destination</h3>
          <hr className="w-50 mx-auto pb-5" />
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 pb-5">
           
            <div class="card">
              <img src={img1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Special Khajuraho Tour</h5>
                <p class="card-text">
                --01 Nights & 02 Days--
                </p>
                <Link to="/khajuraho" class="btn btn-search btn-light">
                  Search More
                </Link>
              </div>
            </div>
          
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img2} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Orchha- Khajuraho Tour</h5>
                <p class="card-text">
                2 Nights & 03 Days
                </p>
                <Link to="/khajurahosec" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Medieval Culture With Wildlife Tour </h5>
                <p class="card-text">
                4 Nights & 05 Days
                </p>
                <Link to="/khajurahothird" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Maihar</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img5} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bhopal</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img6} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Rewa</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search  btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Chitrakoot</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Bhojpur</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img9} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Ujjain</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img10} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mathura</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img11} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Vrandavan</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img12} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Agra</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img13} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Vanaras</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img14} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Delhi</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pb-5">
            <div class="card">
              <img src={img15} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Ghorakhpur</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/" class="btn btn-search btn-dark">
                  Search More
                </Link>
              </div>
            </div>
          </div>
          <button className="button w-50 mx-auto mb-5">
          <Link to="/">Know More</Link>
        </button>
        </div>
       
      </div>
    </>
  );
};

export default Destination;
