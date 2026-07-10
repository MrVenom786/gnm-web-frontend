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

      {/* ================= HERO SECTION (KEPT EXACTLY THE SAME) ================= */}
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

      {/* ================= NEW UI: MAIN CONTENT WRAPPER ================= */}
      <div className="modern-content-wrapper">

        {/* --- NEW UI: OVERLAPPING STORY SECTION --- */}
        <section className="modern-story-section reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="story-overlap-container">
            <div className="story-image-panel">
              <img src={storyImages[storyIndex]} alt={`Showcase Visual ${storyIndex + 1}`} />
            </div>
            
            <div className="story-text-panel">
              <h2 className="gold-accent-title">Architecting Modern Transport</h2>
              <div className="text-divider"></div>
              <p>
                True logistical mastery requires seeing beyond the asphalt. We engineer supply chain solutions that demand absolute certainty and flawless execution.
              </p>
              <p>
                Every structural move we make is calculated to maximize velocity, secure valuable assets, and dominate the North American freight network.
              </p>

              <div className="modern-contact-bar">
                <a href="tel:+16479629995">+1 (647) 962-9995</a>
                <span className="dot-separator">•</span>
                <a href="mailto:admin@gnmtransport.net">admin@gnmtransport.net</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW UI: VERTICAL TIMELINE SECTION --- */}
        <section className="modern-timeline-section reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className="section-header-center">
            <h2>Evolution of our Fleet</h2>
            <p className="subtitle">From regional routes to continental dominance.</p>
          </div>
          
          <div className="vertical-timeline">
            {/* Timeline Node 1 (Left) */}
            <div className="timeline-node left-node">
              <div className="timeline-content">
                <span className="node-year">Ignition</span>
                <p>Forged in the fires of heavy-haul routing, our origins are deeply rooted in grueling highway hours.</p>
              </div>
            </div>

            {/* Timeline Node 2 (Right) */}
            <div className="timeline-node right-node">
              <div className="timeline-content">
                <span className="node-year">Strategy</span>
                <p>Overcoming severe infrastructural hurdles sharpened our unmatched navigational intellect.</p>
              </div>
            </div>

            {/* Timeline Node 3 (Left) */}
            <div className="timeline-node left-node">
              <div className="timeline-content">
                <span className="node-year">Coalition</span>
                <p>Merging with elite industry veterans massively amplified our raw operational capacity.</p>
              </div>
            </div>

            {/* Timeline Node 4 (Right) */}
            <div className="timeline-node right-node">
              <div className="timeline-content">
                <span className="node-year">The Debut</span>
                <p>Unleashing our fully optimized, state-of-the-art dispatch network onto the grid.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW UI: SPLIT-SCREEN VALUES SECTION --- */}
        <section className="modern-split-values reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="split-left">
            <h2>The GNM Blueprint</h2>
            <div className="text-divider"></div>
            <p>Our operational framework is built on non-negotiable standards of excellence. We do not compromise.</p>
          </div>

          <div className="split-right">
            <div className="values-grid-compact">
              <div className="compact-value-card">
                <div className="icon-header">
                  <span className="value-icon">⚡</span>
                  <h3>Lightning Velocity</h3>
                </div>
                <p>Swift, unhindered transit directly from terminal to final destination.</p>
              </div>

              <div className="compact-value-card">
                <div className="icon-header">
                  <span className="value-icon">💎</span>
                  <h3>Diamond Standard</h3>
                </div>
                <p>Unquestionable transparency and fierce moral fortitude across all divisions.</p>
              </div>

              <div className="compact-value-card">
                <div className="icon-header">
                  <span className="value-icon">🛡️</span>
                  <h3>Ironclad Armor</h3>
                </div>
                <p>Guarding cargo and personnel with zero compromises or shortcuts.</p>
              </div>

              <div className="compact-value-card">
                <div className="icon-header">
                  <span className="value-icon">🔥</span>
                  <h3>Relentless Momentum</h3>
                </div>
                <p>Pushing boundaries, dominating markets, and expanding our horizons continuously.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW UI: HORIZONTAL BANNER CTA --- */}
        <section className="modern-cta-banner reveal-up" ref={(el) => (sectionsRef.current[3] = el)}>
          <div className="cta-banner-content">
            <div className="cta-text-left">
              <h2>Command the Asphalt</h2>
              <p>Ready to rule the highways alongside elite professionals? Secure your credentials today.</p>
            </div>
            <div className="cta-action-right">
              <Link to="/join/apply" className="apply-btn-pill banner-btn">
                Apply Now
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Founder;
