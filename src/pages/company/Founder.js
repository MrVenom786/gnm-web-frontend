import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "../../styles/Founder.css";

/* ===== VIDEO & IMAGES ===== */
import heroVideo from "../../assets/gallery/videos/hero.mp4";
import f5 from "../../assets/gallery/images/gallery36.jpg";
import f6 from "../../assets/gallery/images/gallery37.jpg";

function Founder() {
  const sectionsRef = useRef([]);
  const storyImages = useMemo(() => [f5, f6], []);
  const [storyIndex, setStoryIndex] = useState(0);

  /* STORY SLIDESHOW ANIMATION */
  useEffect(() => {
    const t = setInterval(() => {
      setStoryIndex((p) => (p + 1) % storyImages.length);
    }, 6000);
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
    <div className="gnm-founder-page">

      {/* HERO SECTION */}
      <section className="gnm-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        <div className="hero-content-box hero-anim">
          <h1>Our Visionary Leader</h1>
          <p>The force behind GNM Logistics — driving discipline, safety, and long-term growth.</p>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">

        {/* STORY / PHILOSOPHY SECTION */}
        <section className="founder-story reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="story-text">
            <h2>The Philosophy Behind GNM</h2>

            <p>
              At <strong>GNM Logistics</strong>, leadership is built on discipline,
              responsibility, and trust — not visibility.
            </p>
            <p>
              Every decision reflects a long-term commitment to drivers, safety,
              and operational excellence.
            </p>

            <div className="founder-signature-box">
              <p className="quote-signoff"></p>
              
              <div className="founder-contact">
                <a href="tel:+16479629995" className="founder-phone">
                  +1 (647) 962-9995
                </a>
                <span className="contact-separator"> | </span>
                <a href="mailto:gurpreetsaini2885@gmail.com" className="founder-email">
                  gurpreetsaini2885@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="story-visual-frame">
            <img src={storyImages[storyIndex]} alt={`GNM Inspiration ${storyIndex + 1}`} />
          </div>
        </section>

        {/* JOURNEY / TIMELINE */}
        <section className="founder-journey reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <h2>Our Journey</h2>
          
          <div className="journey-grid">
            <div className="journey-card-3d">
              <span className="journey-year">2021</span>
              <p>Started with hands-on trucking operations and industry experience.</p>
            </div>

            <div className="journey-card-3d">
              <span className="journey-year">Experience</span>
              <p>Built strong financial and operational understanding through real-world challenges.</p>
            </div>

            <div className="journey-card-3d">
              <span className="journey-year">Partnership</span>
              <p>Joined by experienced leadership strengthening safety and operations.</p>
            </div>

            <div className="journey-card-3d highlight-card">
              <span className="journey-year">March 2025</span>
              <p>GNM Logistics officially launched with a strict safety and compliance focus.</p>
            </div>

            <div className="journey-card-3d highlight-card">
              <span className="journey-year">Achievements</span>
              <p>Rapid certification and compliance milestones achieved in the first year.</p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="founder-values reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Guiding Principles</h2>

          <div className="values-grid">
            <div className="value-card-3d">
              <h3><span>💡</span> Vision-Driven</h3>
              <p>Long-term thinking in every decision.</p>
            </div>

            <div className="value-card-3d">
              <h3><span>🤝</span> People First</h3>
              <p>Drivers and partners are treated with respect.</p>
            </div>

            <div className="value-card-3d">
              <h3><span>⚖️</span> Integrity</h3>
              <p>Honesty and transparency in all operations.</p>
            </div>

            <div className="value-card-3d">
              <h3><span>🚀</span> Growth</h3>
              <p>Safe, steady, and sustainable expansion.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gnm-cta-section reveal-up" ref={(el) => (sectionsRef.current[3] = el)}>
          <h2>Be Part of the GNM Vision</h2>
          <p>Join a company built on discipline, safety, and trust.</p>
          {/* UPDATED: Compact Gold Pill Button */}
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Now
          </Link>
        </section>

      </div>
    </div>
  );
}

export default Founder;
