import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/Equipment.css";
import heroVideo from "../../assets/gallery/videos/hero.mp4";

function Equipment() {
  const sectionsRef = useRef([]);

  // GALLERY IMAGES (21 → 35)
  const galleryImages = Array.from({ length: 15 }, (_, i) =>
    require(`../../assets/gallery/images/gallery${i + 21}.jpg`)
  );

  const [currentGallery, setCurrentGallery] = useState(0);

  // Auto-slide gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGallery((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Scroll Reveal Observer
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
    <div className="equipment-page">
      
      {/* HERO VIDEO SECTION */}
      <section className="equipment-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        
        <div className="hero-content-box hero-anim">
          {/* Text loads instantly on page load without scroll requirement */}
          <h1>Our Flatbeds Lead the Way</h1>
          <p>Comfort. Safety. Performance. Every Mile Counts.</p>
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Today
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">
        
        {/* INTRO TEXT */}
        <section className="equipment-intro reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <p className="highlight">WHY GNM FLATBEDS LEAD THE INDUSTRY</p>
          <p className="intro-text">
            We believe that to be the best, you have to drive the best. Our fleet is equipped with modern, top-tier technology designed for safety, efficiency, and ultimate driver comfort.
          </p>
        </section>

        {/* 3D FEATURES GRID (Navy & Gold) */}
        <section className="equipment-features-grid reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          
          <div className="equipment-card-3d">
            <h3 className="gold-heading">Performance & Specs</h3>
            <ul className="info-list">
              <li><span>🚛</span> <strong>Modern Fleet:</strong> Consists of modern 53 FT flatbeds & specialized units.</li>
              <li><span>📡</span> <strong>Technology:</strong> Industry-leading ELD systems for total visibility.</li>
              <li><span>⚙️</span> <strong>Transmissions:</strong> Latest generation manual & automatic models.</li>
            </ul>
          </div>

          <div className="equipment-card-3d">
            <h3 className="gold-heading">Safety & Comfort</h3>
            <ul className="info-list">
              <li><span>🛋️</span> <strong>Driver Comfort:</strong> Premium air-ride seats with lumbar support.</li>
              <li><span>🧼</span> <strong>Maintenance:</strong> Preventive maintenance and weekly safety inspections.</li>
              <li><span>📦</span> <strong>Secure Cargo:</strong> Specialized flatbed tie-down equipment for high-value cargo.</li>
            </ul>
          </div>

        </section>

        {/* GALLERY SECTION (Inside a 3D Card) */}
        <section className="gallery-card-3d reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Our Fleet Gallery</h2>
          
          <div className="gallery-slider">
            <button className="gallery-btn left" onClick={() => setCurrentGallery((p) => (p - 1 + galleryImages.length) % galleryImages.length)}>
              &#10094;
            </button>
            
            <img src={galleryImages[currentGallery]} alt="GNM Fleet" className="gallery-image" />
            
            <button className="gallery-btn right" onClick={() => setCurrentGallery((p) => (p + 1) % galleryImages.length)}>
              &#10095;
            </button>
          </div>
          
          <p className="gallery-counter">{currentGallery + 1} / {galleryImages.length}</p>
        </section>

      </div>
    </div>
  );
}

export default Equipment;