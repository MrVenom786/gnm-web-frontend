import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/InexperiencedClassA.css";
import heroVideo from "../../assets/gallery/videos/hero.mp4";

function InexperiencedClassA() {
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
    <div className="ica-page">
      
      {/* HERO SECTION */}
      <section className="ica-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        
        <div className="hero-content-box hero-anim">
          <h1>Launch Your Career</h1>
          <p>Inexperienced Class A Drivers – Join the GNM Family</p>
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Today
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">
        
        {/* INTRO TEXT */}
        <section className="ica-intro reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <p className="highlight">START YOUR JOURNEY: RECENT GRADUATES WELCOME</p>
          <p className="intro-text">
            The <strong>GNM Family</strong> provides a structured pathway for new Class A drivers to build confidence, gain invaluable experience, and achieve long-term success on the road.
          </p>
        </section>

        {/* 3D CONTENT GRID (Deep Navy Cards) */}
        <section className="ica-features-grid reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          
          <div className="ica-card-3d">
            <h3 className="gold-heading">Orientation & Training</h3>
            <p className="card-subtext">Your growth starts with a comprehensive, 1-day orientation at our Mississauga HQ, followed by intensive, instructor-led training.</p>
            <ul className="ica-list">
              <li><span>📅</span> <strong>Schedule:</strong> Monday–Saturday (9 AM – 5 PM)</li>
              <li><span>🛠️</span> <strong>Focus:</strong> Hands-on onboarding & safety prep</li>
              <li><span>👨‍🏫</span> <strong>Support:</strong> 1-on-1 expert driver coaching</li>
            </ul>
          </div>

          <div className="ica-card-3d">
            <h3 className="gold-heading">Why Join the GNM Family?</h3>
            <ul className="ica-list benefits">
              <li><span>✅</span> Paid layovers and detention support</li>
              <li><span>✅</span> Consistent weekly / bi-weekly routes</li>
              <li><span>✅</span> Reimbursement support (Fuel, food & phone)</li>
              <li><span>✅</span> Industry-leading mentorship program</li>
            </ul>
          </div>

        </section>

        {/* GROWTH & CTA SECTION */}
        <section className="ica-growth reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Employee-Owned Growth</h2>
          <p>
            At GNM, you aren't just a driver; you are a vital contributor to our collective success. We grow when you grow.
          </p>
          <Link to="/join/apply" className="apply-btn-pill">
            Start Your Engine
          </Link>
        </section>

      </div>
    </div>
  );
}

export default InexperiencedClassA;