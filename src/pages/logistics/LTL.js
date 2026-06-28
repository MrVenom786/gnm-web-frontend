import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LTL.css";

/* VIDEO & IMAGES */
import heroVideo from "../../assets/gallery/videos/hero.mp4";
import g34 from "../../assets/gallery/images/gallery53.jpg";
import g33 from "../../assets/gallery/images/gallery52.jpg";
import g32 from "../../assets/gallery/images/gallery51.jpg";
import g31 from "../../assets/gallery/images/gallery63.jpg";
import g30 from "../../assets/gallery/images/gallery62.jpg";

function LTL() {
  const mainImages = [g34, g33, g32, g31, g30];
  const [mainIndex, setMainIndex] = useState(0);
  const sectionsRef = useRef([]);
  const navigate = useNavigate();

  /* IMAGE SLIDESHOW ANIMATION */
  useEffect(() => {
    const mainTimer = setInterval(() => {
      setMainIndex((prevIndex) => (prevIndex + 1) % mainImages.length);
    }, 3500);
    return () => clearInterval(mainTimer);
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

  const handleApply = () => navigate("/join/apply");

  /* SOLUTIONS CONTENT */
  const solutions = [
    { 
      title: "Linehaul Solutions", 
      desc: "GNM’s Linehaul services support consistent and dependable freight movement across the United States & Canada.", 
      list: ["48-state U.S. & 13 Canada coverage", "Safety-focused operations", "On-time & damage-free delivery"] 
    },
    { 
      title: "Dedicated Transportation", 
      desc: "Consistent driver and equipment availability with predictable routing and costs.", 
      list: ["Guaranteed capacity", "Improved customer service", "Customized routing"] 
    },
    { 
      title: "Specialized Freight", 
      desc: "Safe movement of complex, oversized, and high-value freight across the U.S.", 
      list: ["Heavy & oversized loads", "Custom securement", "Experienced drivers"] 
    }
  ];

  /* FEATURES */
  const features = [
    "Modern Technology Platform", "Flexible LTL Solutions", 
    "Real-Time Visibility", "Smart Pricing Model", 
    "Easy Integration", "Cost Optimization", 
    "Tracking Systems", "Simple Process"
  ];

  return (
    <div className="rgm-ltl-page">
      
      {/* HERO SECTION */}
      <section className="ltl-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        
        <div className="hero-content-box hero-anim">
          <h1>Less Than Truckload (LTL)</h1>
          <p>Smart • Transparent • Technology-Driven GNM Solutions</p>
          {/* UPDATED: Compact Gold Pill Button */}
          <button className="apply-btn-pill" onClick={handleApply}>
            Apply Now
          </button>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">
        
        {/* INTRO */}
        <section className="ltl-intro reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <p>
            GNM Logistics provides reliable LTL solutions focused on flexibility, visibility, and cost efficiency.
          </p>
        </section>

        {/* 3D SOLUTIONS GRID */}
        <section className="solutions-container reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className="solutions-grid">
            {solutions.map((s, i) => (
              <div className="solution-card-3d" key={i}>
                <h3>{s.title}</h3>
                <p className="desc-text">{s.desc}</p>
                <ul className="ltl-list">
                  {s.list.map((l, idx) => (
                    <li key={idx}><span>◈</span> {l}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE SLIDESHOW GALLERY */}
        <section className="ltl-slideshow-section reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>LTL in Action</h2>
          <div className="main-slideshow-frame">
            <img src={mainImages[mainIndex]} alt={`LTL Fleet ${mainIndex + 1}`} className="fade-image" />
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="ltl-features reveal-up" ref={(el) => (sectionsRef.current[3] = el)}>
          <h2>LTL Key Features</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card-3d" key={i}>
                <span>◈</span> {f}
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL (Deep Navy 3D Card) */}
        <section className="ltl-testimonial-section reveal-up" ref={(el) => (sectionsRef.current[4] = el)}>
          <div className="testimonial-box-3d">
            <blockquote>
              “Smooth process, clear communication, and reliable service every time.”
              <span className="author">— Verified Customer</span>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="ltl-cta reveal-up" ref={(el) => (sectionsRef.current[5] = el)}>
          <h2>Let’s Ship Smarter</h2>
          <p>Contact GNM Logistics for efficient LTL solutions.</p>
          {/* UPDATED: Compact Gold Pill Button */}
          <button className="apply-btn-pill" onClick={handleApply}>
            Contact Solutions Team
          </button>
        </section>

      </div>
    </div>
  );
}

export default LTL;