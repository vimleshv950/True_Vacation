import React from "react";
import "./gallery.css";

const GalleryProps = (props) => {
  return (
    <>
      <div className="gallery-img">
        <div className="item">
          <img src={props.imgsrc} className="img-thumbnail" />
          {/* <div className="sub_heading">
            <h4>{props.place}</h4>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default GalleryProps;
