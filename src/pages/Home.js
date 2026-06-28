import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

/* HERO VIDEO */
import heroVideo from "../assets/gallery/videos/hero.mp4";

const Home = () => {
  const navigate = useNavigate();
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
    <div className="gnm-home-wrapper">
      
      {/* ================= HERO SECTION ================= */}
      <section className="gnm-hero">
        <video 
          className="hero-video" 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        <div className="hero-overlay-bg"></div>

        <div className="hero-content-box hero-anim">
          <h1>
            GLOBAL FREIGHT, <br />
            ACCELERATED BY <br />
            <span className="gold-text">GNM TRANSPORT.</span>
          </h1>
          
          <p className="hero-subtext">
            Precision logistics with the strength and speed of the Global Navigator.
          </p>

          <div className="hero-actions">
            {/* UPDATED: Compact Gold Pill Buttons */}
            <button className="apply-btn-pill" onClick={() => navigate("/join/apply")}>
              Join the GNM Family
            </button>
            <button className="apply-btn-pill outline-btn" onClick={() => navigate("/haul")}>
              Haul with GNM
            </button>
          </div>
        </div>
      </section>

      {/* ================= OVERLAPPING FEATURES PANEL ================= */}
      <section className="features-overlap-container reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="features-panel-3d">
          
          {/* Core GNM Services Grid */}
          <div className="services-grid-section">
            <div className="service-card-3d" onClick={() => navigate("/logistics/truckload")}>
              <div className="service-icon">🚛</div>
              <span>Truckload</span>
            </div>
            <div className="service-card-3d" onClick={() => navigate("/logistics/ltl")}>
              <div className="service-icon">📦</div>
              <span>LTL Services</span>
            </div>
            <div className="service-card-3d" onClick={() => navigate("/solutions")}>
              <div className="service-icon">🌐</div>
              <span>Cross-Border</span>
            </div>
            <div className="service-card-3d" onClick={() => navigate("/solutions")}>
              <div className="service-icon">🏢</div>
              <span>Logistics</span>
            </div>
          </div>

          {/* Why Choose GNM */}
          <div className="why-choose-mini">
            <h2>Why Choose GNM</h2>
            <div className="feature-item">
              <div className="shield-icon">🛡️</div>
              <div className="feature-text">
                <h3>Reliability</h3>
                <p>Precision logistics ensuring absolute dependability.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="shield-icon">⚡</div>
              <div className="feature-text">
                <h3>Speed</h3>
                <p>Premium models prioritizing rapid duration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;