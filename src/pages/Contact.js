import React from "react";
import "./Contact.css";

import { BsTelephone, BsInstagram, BsFacebook } from "react-icons/bs";

import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="body-container">
      <h1>CONTACT US</h1>
      <div
        style={{
          width: "70%",

          justifyContent: "center",


        }}
      >
        <div className="main-section1" style ={{marginLeft: '25%'}} >
          <div className="contact-form">
            <p className="title">What can I help you</p>
            <p>Name:</p>
            <input className="inp inp-name" />
            <p>Email:</p>
            <input className="inp inp-email" />
            <p>Messages</p>
            <textarea className="inp-messages" />
            <button className="btn-send">SEND</button>
          </div>
          <div className="contact-list">
            <div className="contact-item">
              <BsTelephone />
              <p>(+84) 234-567-345</p>
            </div>
            <div className="contact-item">
              <BsInstagram />
              <p>ES Fashion@</p>
            </div>
            <div className="contact-item">
              <BsFacebook />
              <p>ES Fashion</p>
            </div>
            <div className="contact-item">
              <HiOutlineMail />
              <p>Everyonesizefashion@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
