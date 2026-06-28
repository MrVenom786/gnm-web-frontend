import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "../../styles/EmployeeOwnership.css";

/* VIDEO & IMAGES */
import heroVideo from "../../assets/gallery/videos/hero.mp4";

import g24 from "../../assets/gallery/images/gallery24.jpg";
import g25 from "../../assets/gallery/images/gallery25.jpg";
import g26 from "../../assets/gallery/images/gallery26.jpg";
import g27 from "../../assets/gallery/images/gallery27.jpg";
import g28 from "../../assets/gallery/images/gallery28.jpg";
import g29 from "../../assets/gallery/images/gallery29.jpg";

function EmployeeOwnership() {
  const sectionsRef = useRef([]);

  const mainImages = useMemo(() => [g24, g25, g26, g27, g28, g29], []);
  const [mainIndex, setMainIndex] = useState(0);

  /* MAIN SLIDESHOW ANIMATION */
  useEffect(() => {
    const interval = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % mainImages.length);
    }, 3500);
    return () => clearInterval(interval);
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

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="gnm-eo-page">
      
      {/* HERO SECTION */}
      <section className="eo-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        <div className="hero-content-box hero-anim">
          <h1>Employee Ownership at GNM</h1>
          <p>Where People Don’t Just Work — They Belong</p>
          {/* UPDATED: Compact Gold Pill Button */}
          <Link to="/join/apply" className="apply-btn-pill">
            Join the Family
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">
        
        {/* INTRO */}
        <section className="eo-intro reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <p>
            At <strong>GNM Logistics</strong>, ownership means trust, growth, and long-term success. 
            When our people succeed, our customers succeed.
          </p>
        </section>

        {/* MAIN SHOWCASE (Image Slider + Text side-by-side) */}
        <section className="eo-main-showcase reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className="eo-main-image-frame">
            <img src={mainImages[mainIndex]} alt={`GNM Operations ${mainIndex + 1}`} />
          </div>
          <div className="eo-main-text">
            <h2>Built by People,<br/>Powered by Trust</h2>
            <p>
              Every mile, every delivery, and every decision reflects ownership and pride. 
              We are building a culture where your dedication directly impacts the future of the company.
            </p>
          </div>
        </section>

        {/* 3D FEATURES GRID */}
        <section className="eo-features-grid reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="eo-feature-card-3d">
            <h3><span>🔒</span> Stability & Security</h3>
            <p>We grow slow, strong, and together.</p>
          </div>
          <div className="eo-feature-card-3d">
            <h3><span>🤝</span> One Team Culture</h3>
            <p>Respect and teamwork come first.</p>
          </div>
          <div className="eo-feature-card-3d">
            <h3><span>📈</span> Growth Opportunities</h3>
            <p>Internal leadership and skill development.</p>
          </div>
          <div className="eo-feature-card-3d">
            <h3><span>🚀</span> Future Builders</h3>
            <p>Employees grow as GNM grows.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="eo-cta reveal-up" ref={(el) => (sectionsRef.current[3] = el)}>
          <h2>The GNM Promise</h2>
          <p>You don’t work for GNM — you grow with GNM.</p>
          {/* UPDATED: Compact Gold Pill Button */}
          <Link to="/join/apply" className="apply-btn-pill">
            Join the GNM Family
          </Link>
        </section>

      </div>
    </div>
  );
}

export default EmployeeOwnership;