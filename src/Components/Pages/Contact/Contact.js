import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="main-container">
      <div className="contact__body">
        <h6>What next?</h6>
        <div className="body__text">
          <h3 className="title__text">Get In Touch</h3>
          <p className="para__text">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button className="contact__btn">Say Hello!</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
