import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/Benefits.css";
import heroVideo from "../../assets/gallery/videos/hero.mp4";

const loadGalleryImages = () => {
  const images = [];
  for (let i = 35; i <= 50; i++) {
    try { images.push(require(`../../assets/gallery/images/gallery${i}.jpg`)); }
    catch (err) { console.warn(`Missing: gallery${i}.jpg`); }
  }
  return images;
};

function Benefits() {
  const galleryImages = useMemo(() => loadGalleryImages(), []);
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
    <div className="benefits-page">
      
      {/* HERO SECTION */}
      <section className="benefits-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        
        <div className="hero-content-box hero-anim">
          <h1>Our Benefits</h1>
          <p>Built on Trust. Driven by Family. Powered by Growth.</p>
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Today
          </Link>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div className="content-wrapper">

        {/* 3D BENEFITS GRID */}
        <section className="benefits-grid reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="benefits-card-3d">
            <h3 className="gold-heading">Benefits & Compensation</h3>
            <ul className="benefits-list">
              <li><span>🔒</span> Optional disability coverage</li>
              <li><span>📈</span> Paid detention, layover, and waiting time</li>
            </ul>
          </div>
        </section>

        {/* GROWTH SECTION */}
        <section className="growth-section reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <h2>Investing in Our People</h2>
          <div className="growth-grid">
            <div className="growth-card-3d">
              <h3>Career Growth</h3>
              <p>Scale your career as we expand our fleet.</p>
            </div>
            <div className="growth-card-3d">
              <h3>Training</h3>
              <p>Continuous learning for long-term success.</p>
            </div>
            <div className="growth-card-3d">
              <h3>Family-First</h3>
              <p>Respect for home time and work-life balance.</p>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="gallery-section reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Gallery</h2>
          <div className="gallery-collage">
            {galleryImages.slice(0, 4).map((img, i) => (
              <div key={i} className="collage-item">
                <img src={img} alt={`Gallery ${i}`} />
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Benefits;
