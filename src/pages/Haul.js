import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Haul.css";
import heroVideo from "../assets/gallery/videos/hero.mp4";

const Haul = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".haul-reveal").forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="haul-page">
      {/* HERO VIDEO */}
      <section className="haul-hero">
        <video autoPlay loop muted playsInline className="haul-hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="haul-hero-overlay">
          <div className="haul-hero-content">
            <h1>Experts in Flatbed Freight</h1>
            <p>Industry-leading flatbed & specialized hauling across USA, Canada, and Mexico.</p>
            
            {/* HERO BUTTONS ADDED HERE */}
            <div className="hero-actions" style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/haul-with-gnm" className="apply-btn-3d">
                Free Rate Quote
              </Link>
              <Link to="/contact" className="apply-btn-3d outline-btn">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* DYNAMIC CONTENT SECTIONS */}
      <div className="haul-container">
        
        {/* Operations */}
        <section className="haul-reveal">
          <h2 className="company-heading">GNM Flatbed Operations</h2>
          <p className="haul-text">We provide safe, efficient flatbed operations across North America with modern equipment and trained drivers.</p>
        </section>

        {/* Services & Why Ship Grid */}
        <section className="haul-reveal haul-grid">
          <div>
            <h2 className="company-heading">Our Services</h2>
            <ul className="haul-list">
              <li>Canada Domestic Freight Services</li>
              <li>Cross-Border Freight Services</li>
              <li>Over-Dimensional Flatbed Freight</li>
            </ul>
          </div>
          <div>
            <h2 className="company-heading">Why Ship with GNM</h2>
            <ul className="haul-list">
              <li>High-value cargo protection & reliability</li>
              <li>Up to 48,000 lbs USA / 55,000 lbs Canada capacity</li>
              <li>Modern maintained fleet</li>
              <li>Custom North America shipping solutions</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Haul;