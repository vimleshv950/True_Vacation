import React from "react";
import "./topdestination.css";
import khajuraho1 from "./../assets/img/khajuraho-1.jpg";
import unesco from "./../assets/img/unesco.jpg";
import pandavfall from "./../assets/img/pandav-fall.jpg";

const TopDestination = () => {
  return (
    <>
      <section className="wrapper">
        {/* <div className="container-fostrap"> */}
          <div>
            <h1 className="heading">Keep Calm and Travel On</h1>
            <h5 classNameName="para">Specially selected for each interest type and various locations, covering entire India</h5>
          </div>
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
                      <img src={pandavfall} />
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
