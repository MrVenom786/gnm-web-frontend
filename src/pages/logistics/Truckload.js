import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/Truckload.css";

/* VIDEO & IMAGES */
import heroVideo from "../../assets/gallery/videos/hero.mp4";
import m1 from "../../assets/gallery/images/gallery7.jpg";
import m2 from "../../assets/gallery/images/gallery31.jpg";
import m3 from "../../assets/gallery/images/gallery32.jpg";
import m4 from "../../assets/gallery/images/gallery35.jpg";

function Truckload() {
  const mainImages = [m1, m2, m3, m4];
  const [mainIndex, setMainIndex] = useState(0);
  const sectionsRef = useRef([]);

  /* MAIN SLIDESHOW ANIMATION */
  useEffect(() => {
    const timer = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % mainImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [mainImages.length]);

  /* SCROLL REVEAL ANIMATION */
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

    sectionsRef.current.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="gnm-truckload-page">

      {/* HERO SECTION */}
      <section className="truckload-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Darkened overlay for maximum text visibility */}
        <div className="hero-overlay-bg"></div>
        <div className="hero-content-box hero-anim">
          <h1>Flatbed Truckload Solutions</h1>
          <p>Trusted Capacity • Securement Excellence • Nationwide Reach</p>
          {/* UPDATED: Compact Gold Pill Button */}
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Now
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">

        {/* INTRO */}
        <section className="truckload-intro reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <p>
            <strong>GNM Truckload</strong> delivers full flatbed solutions built on safety,
            accountability, and experienced carriers. Every load is planned with precision
            from pickup to final delivery.
          </p>
        </section>

        {/* MAIN SLIDESHOW & FEATURES STRIP */}
        <section className="truckload-slideshow-section reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <h2>Truckload Freight in Motion</h2>
          <div className="main-slideshow-frame">
            <img src={mainImages[mainIndex]} alt={`Truckload Operations ${mainIndex + 1}`} />
          </div>

          <div className="main-features-strip">
            <div className="strip-item"><span>🚛</span> Flatbed & Stepdeck Capacity</div>
            <div className="strip-item"><span>🔒</span> Securement First Operations</div>
            <div className="strip-item"><span>📡</span> Live Tracking</div>
            <div className="strip-item"><span>🧰</span> Industrial Freight</div>
            <div className="strip-item"><span>🤝</span> Cross-Border 🇺🇸🇨🇦</div>
          </div>
        </section>

        {/* 3D CAPABILITIES GRID */}
        <section className="truckload-features reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Truckload Capabilities</h2>
          <div className="features-grid">
            {[
              "53’ Air-Ride Flatbeds", 
              "Oversized & Legal Loads", 
              "Machinery Transport", 
              "Steel & Construction Freight", 
              "Project-Based Logistics"
            ].map((f, i) => (
              <div className="feature-card-3d" key={i}>
                <span>◈</span> {f}
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE GNM (Deep Navy 3D Card) */}
        <section className="truckload-why reveal-up" ref={(el) => (sectionsRef.current[3] = el)}>
          <div className="why-box-3d">
            <h2>Why GNM Truckload?</h2>
            <p>
              We focus on safety, communication, and consistency — not shortcuts.
              Every shipment is handled with care, precision, and complete transparency.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="truckload-cta reveal-up" ref={(el) => (sectionsRef.current[4] = el)}>
          <h2>Let’s Move Your Freight</h2>
          <p>Get reliable flatbed solutions with transparent communication.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="apply-btn-pill">
              Get A Quote
            </Link>
            {/* UPDATED: Outline version of the pill button */}
            <Link to="/contact" className="apply-btn-pill outline-btn">
              Call Now
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Truckload;
