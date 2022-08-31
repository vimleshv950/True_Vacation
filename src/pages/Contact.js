import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact w-50 mx-auto">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Contact Us</h3>
          <hr className="w-50 mx-auto pb-5" />
        </div>

        <form>
          <div class="form-group">
            <label>Full Name:</label>
            <input type="name" class="form-control" id="name" />
          </div>
		  <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" />
          </div>
		  <div class="form-group">
            <label>Your Text:</label>
           <textarea className="form-control"></textarea>
          </div>
		  <br />
          <button type="submit" class="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
