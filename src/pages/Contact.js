import React from "react";
import "../styles/Contact.css";
import {FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import heroVideo from "../assets/gallery/videos/hero.mp4";

function Contact() {
  return (
    <div className="contact-page">
      {/* HERO VIDEO SECTION */}
      <section className="contact-hero">
        <video autoPlay loop muted playsInline className="contact-hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="contact-hero-overlay">
          <h1 className="hero-title">Get in Touch with GNM Family</h1>
          <p className="hero-subtitle">We’re here to answer your questions and help you join the GNM family.</p>
        </div>
      </section>

      {/* DYNAMIC CONTACT CARDS */}
      <section className="contact-cards">
        <div className="card">
          <FaPhoneAlt className="icon" />
          <h3>Call Us</h3>
          <a href="tel:+16479629995">+1 647 962 9995</a>
        </div>
        <div className="card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <a href="mailto:admin@gnmtransport.com">admin@gnmtransport.com</a>
        </div>
        
      </section>

      {/* INTERACTIVE FORM */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required />
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
