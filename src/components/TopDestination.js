import React from "react";
import "./topdestination.css";
import khajuraho1 from "./../assets/img/khajuraho-1.jpg";
import unesco from "./../assets/img/unesco.jpg";
import pandavfall2 from "./../assets/img/pandav-fall-2.jpg";

const TopDestination = () => {
  return (
    <>
      <section className="wrapper">
        {/* <div className="container-fostrap"> */}
          <div>
          <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Destination</h3>
        </div>
            <h5 className="para ">Specially selected for each interest type and various locations, covering entire India</h5>
          </div>
          <hr className="w-50 mx-auto pb-5" />
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a className="img-card" href="/">
                      <img src={khajuraho1} />
                    </a>
                   
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a className="img-card" href="/">
                      <img src={unesco} />
                    </a>
                   
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="card">
                    <a className="img-card" href="/">
                      <img src={pandavfall2} />
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default TopDestination;
