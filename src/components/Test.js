import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function Test({ img, name, phone, email }) {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={img} />
        <h3>{name}</h3>
        <div className="info-group">
          <FaPhone />
          <p> {phone}</p>
        </div>
        <div className="info-group">
          <FaEnvelope />
          <p> {email}</p>
        </div>
      </div>
    </div>
  );
}

export default Test;
