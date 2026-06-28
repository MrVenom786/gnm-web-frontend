import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Corrected path: goes up one level to src, then into styles
import "../styles/Careers.css"; 
// Corrected path: goes up one level to src, then into assets
import heroVideo from "../assets/gallery/videos/hero.mp4";

/* POSITIONS */
const positions = [
  {
    title: "Flatbed Professional Driver / Owner Operator",
    description: "Drive modern flatbed trucks and ensure safe, on-time delivery across routes."
  },
  {
    title: "Logistics Coordinator",
    description: "Manage shipments, coordinate drivers, and optimize delivery schedules."
  },
  {
    title: "Customer Support Specialist",
    description: "Support drivers and clients with fast, effective communication."
  },
  {
    title: "Operations Manager",
    description: "Oversee daily operations and improve efficiency across systems."
  }
];

function Careers() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRefs = useRef([]);

  // SCROLL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const setRef = (el, i) => {
    sectionRefs.current[i] = el;
  };

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="gnm-careers-page">

      {/* HERO SECTION - Video Integrated */}
      <section className="gnm-hero-video-container">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        <div className="hero-content-box hero-anim">
          <h1>Careers at <span>GNM Family</span></h1>
          <p>Join a company where you are part of a real family.</p>
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Today
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">

        {/* WHY JOIN GNM & BENEFITS (3D GRID) */}
        <section className="careers-grid reveal-up" ref={(el) => setRef(el, 0)}>
          
          <div className="careers-card-3d">
            <h3 className="gold-heading">Why Join GNM Family?</h3>
            <ul className="info-list">
              <li><span>🤝</span> Family-oriented supportive culture</li>
              <li><span>💰</span> Competitive pay & performance incentives</li>
              <li><span>📈</span> Employee-first mindset & growth opportunities</li>
              <li><span>👨‍🏫</span> Comprehensive training & mentorship</li>
            </ul>
          </div>

          <div className="careers-card-3d">
            <h3 className="gold-heading">Benefits & Perks</h3>
            <ul className="info-list">
              <li><span>✈️</span> Travel insurance benefit</li>
              <li><span>⛽</span> Fuel discounts for Owner Operators</li>
              <li><span>🛡️</span> Cargo & asset coverage</li>
              <li><span>🎓</span> Paid training programs</li>
            </ul>
          </div>
          
        </section>

        {/* OPEN POSITIONS */}
        <section className="positions-section reveal-up" ref={(el) => setRef(el, 1)}>
          <h2>Open Positions</h2>
          <div className="positions-grid">
            {positions.map((pos, i) => (
              <div
                key={i}
                className={`position-card-3d ${openIndex === i ? "open" : ""}`}
                onClick={() => toggle(i)}
              >
                <div className="position-header">
                  <h3>{pos.title}</h3>
                  <span className="toggle-icon">{openIndex === i ? "−" : "+"}</span>
                </div>
                
                <div className={`position-content ${openIndex === i ? "show" : ""}`}>
                  <p className="position-desc">{pos.description}</p>
                  <Link to="/join/apply" className="apply-btn-pill small-btn">Apply For This Role</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="gnm-cta-section reveal-up" ref={(el) => setRef(el, 2)}>
          <h2>Ready to Join the Family?</h2>
          <p>We are always looking for motivated, safety-first individuals to join our team.</p>
          <Link to="/join/apply" className="apply-btn-pill">
            Submit Application
          </Link>
        </section>

      </div>
    </div>
  );
}

export default Careers;