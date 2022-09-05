import React from "react";
import { GalleryData } from "./GalleryData";
import GalleryProps from "./GalleryProps";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="py-5 ">
        <div className="container py-5">
        <h2 class="text-uppercase lined mb-4">Memories</h2>
          <p class="lead mb-5">
            Are you curious about something? Do you have some kind of problem
            with our products? As am hastily invited settled at limited civilly
            fortune me. Really spring in extent an by. Judge but built gay party
            world..
          </p>
           <hr className="w-50 mx-auto" />
        </div>
        <div className="img-container">
          <div className="sub-container">
            <div className="image">
              {GalleryData.map((val) => {
                return <GalleryProps imgsrc={val.imgsrc} place={val.place} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
