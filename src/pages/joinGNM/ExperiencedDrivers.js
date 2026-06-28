import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/ExperiencedDrivers.css";
import heroVideo from "../../assets/gallery/videos/hero.mp4";

function ExperiencedDrivers() {
  const sectionsRef = useRef([]);

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

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ed-page">
      
      {/* HERO SECTION */}
      <section className="ed-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        
        <div className="hero-content-box hero-anim">
          <h1>Experienced Class A Drivers</h1>
          <p>Drive for GNM Family – Your Career, Your Way!</p>
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Today
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">
        
        {/* INTRO TEXT */}
        <section className="ed-intro reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <p className="highlight">GNM FAMILY IS IMMEDIATELY HIRING!</p>
          <p className="intro-text">
            Join our growing fleet! Whether you’re a seasoned flatbedder or experienced in van/tanker, we welcome all experienced drivers to our team.
          </p>
        </section>

        {/* 3D CONTENT GRID (Deep Navy Cards) */}
        <section className="ed-features-grid reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          
          <div className="ed-card-3d">
            <h3 className="gold-heading">Drive it Like You Own It</h3>
            <p className="card-subtext">Our performance-based pay structure ensures that experienced drivers earn <strong>27%–34%</strong> of load revenue.</p>
            
            <h3 className="gold-heading" style={{marginTop: '30px'}}>Orientation Center</h3>
            <p className="card-subtext">Professional training and structured onboarding held at our headquarters in Mississauga, ON.</p>
          </div>

          <div className="ed-card-3d">
            <h3 className="gold-heading">Why Drivers Choose GNM</h3>
            <ul className="ed-list">
              <li><span>✅</span> <strong>Orientation:</strong> 3–5 days tailored to your experience</li>
              <li><span>✅</span> <strong>Flatbed Support:</strong> Expert trainer support included</li>
              <li><span>✅</span> <strong>Flexibility:</strong> Custom home-time arrangements</li>
              <li><span>✅</span> <strong>Support:</strong> 24/7 dedicated fleet support</li>
              <li><span>✅</span> <strong>Ownership:</strong> Direct Employee Ownership program</li>
              <li><span>✅</span> <strong>Benefits:</strong> Comprehensive full-coverage package</li>
            </ul>
          </div>

        </section>

        {/* GROWTH SECTION */}
        <section className="ed-growth reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Employee-Owned Growth</h2>
          <p>
            Every driver becomes a stakeholder in company growth from day one. At GNM, we invest in your future because you invest in ours.
          </p>
          <Link to="/join/apply" className="apply-btn-pill">
            Join The Fleet
          </Link>
        </section>

      </div>
    </div>
  );
}

export default ExperiencedDrivers;