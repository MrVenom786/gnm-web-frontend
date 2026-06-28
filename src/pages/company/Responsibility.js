import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "../../styles/Responsibility.css";

/* ===== VIDEO & IMAGES ===== */
import heroVideo from "../../assets/gallery/videos/hero.mp4";

import g23 from "../../assets/gallery/images/gallery23.jpg";
import g24 from "../../assets/gallery/images/gallery24.jpg";
import g25 from "../../assets/gallery/images/gallery25.jpg";
import g26 from "../../assets/gallery/images/gallery26.jpg";
import g27 from "../../assets/gallery/images/gallery27.jpg";
import g28 from "../../assets/gallery/images/gallery28.jpg";
import g29 from "../../assets/gallery/images/gallery29.jpg";
import g30 from "../../assets/gallery/images/gallery30.jpg";
import g31 from "../../assets/gallery/images/gallery31.jpg";

function Responsibility() {
  const sectionsRef = useRef([]);
  const storyImages = useMemo(() => [g23, g24, g25, g26, g27, g28, g29, g30, g31], []);
  const [storyIndex, setStoryIndex] = useState(0);

  /* STORY SLIDESHOW ANIMATION */
  useEffect(() => {
    const t = setInterval(() => {
      setStoryIndex((p) => (p + 1) % storyImages.length);
    }, 3800);
    return () => clearInterval(t);
  }, [storyImages.length]);

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
    <div className="gnm-responsibility-page">

      {/* HERO SECTION */}
      <section className="gnm-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        <div className="hero-content-box hero-anim">
          <h1>Corporate Responsibility</h1>
          <p>How GNM operates matters as much as what we deliver</p>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">

        {/* PURPOSE SECTION */}
        <section className="gnm-purpose-section reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="purpose-text">
            <h2>Doing What’s Right — Always</h2>
            <p>
              At <strong>GNM Logistics</strong>, responsibility is a mindset embedded in every action. 
              We believe in building a sustainable future by prioritizing ethics, environmental care, and the people we serve.
            </p>

            <div className="purpose-points">
              <div className="point-badge"><span>🤝</span> People before profit</div>
              <div className="point-badge"><span>🌱</span> Sustainable growth</div>
              <div className="point-badge"><span>⚖️</span> Ethical operations</div>
            </div>
          </div>

          <div className="purpose-visual-frame">
            <img src={storyImages[storyIndex]} alt={`GNM Operations ${storyIndex + 1}`} />
          </div>
        </section>

        {/* 3D PILLARS GRID */}
        <section className="gnm-pillars-grid reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className="pillar-card-3d">
            <div className="icon-badge">🤝</div>
            <h3>Community Support</h3>
            <p>We support initiatives that strengthen families and local communities.</p>
          </div>

          <div className="pillar-card-3d">
            <div className="icon-badge">❤️</div>
            <h3>Family Assistance</h3>
            <p>We stand by our people during challenges with full support.</p>
          </div>

          <div className="pillar-card-3d">
            <div className="icon-badge">🌱</div>
            <h3>Environmental Care</h3>
            <p>Fuel efficiency, reduced idle time, and digital operations.</p>
          </div>

          <div className="pillar-card-3d">
            <div className="icon-badge">⚖️</div>
            <h3>Integrity & Ethics</h3>
            <p>Transparency and accountability define every single decision we make.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="gnm-cta-section reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Join the GNM Mission</h2>
          <p>Be part of a company built on responsibility, sustainability, and trust.</p>
          {/* UPDATED: Compact Gold Pill Button */}
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Now
          </Link>
        </section>

      </div>
    </div>
  );
}

export default Responsibility;