import React, { useEffect, useState, useRef } from "react";
import "../../styles/WhyRGM.css";

// HERO IMAGES
import g10 from "../../assets/gallery/images/gallery46.jpg";
import g11 from "../../assets/gallery/images/gallery11.jpg";
import g12 from "../../assets/gallery/images/gallery12.jpg";
import g13 from "../../assets/gallery/images/gallery13.jpg";
import g14 from "../../assets/gallery/images/gallery14.jpg";

// MAIN SLIDESHOW IMAGES
import g15 from "../../assets/gallery/images/gallery15.jpg";
import g16 from "../../assets/gallery/images/gallery16.jpg";
import g17 from "../../assets/gallery/images/gallery17.jpg";
import g18 from "../../assets/gallery/images/gallery18.jpg";
import g19 from "../../assets/gallery/images/gallery19.jpg";

const heroImages = [g10, g11, g12, g13, g14];
const mainImages = [g15, g16, g17, g18, g19];

function WhyRGM() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [mainIndex, setMainIndex] = useState(0);
  const sectionsRef = useRef([]);

  // HERO SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // MAIN SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setMainIndex((i) => (i + 1) % mainImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  // SCROLL REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="why-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-image-box">
          <img src={heroImages[heroIndex]} alt="Why RGM Hero" />
        </div>

        <div className="hero-content">
          <h1>Why RGM Family</h1>
          <p>
            You’re not just joining a company — you’re becoming part of a
            family that grows together.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section section-light reveal"
        ref={(el) => (sectionsRef.current[0] = el)}>
        <div className="section-inner">
          <p className="lead-text">
            RGM is built on <strong>trust, respect, and people-first values</strong>.
          </p>
        </div>
      </section>

      {/* LIFE AT RGM */}
      <section className="section section-dark reveal"
        ref={(el) => (sectionsRef.current[1] = el)}>
        <div className="section-inner">
          <h2 className="section-title">Life at RGM</h2>

          <div className="slideshow-frame">
            <img src={mainImages[mainIndex]} alt="RGM Culture" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-light reveal"
        ref={(el) => (sectionsRef.current[2] = el)}>
        <div className="section-inner">
          <h2 className="section-title">Our Values</h2>

          <div className="values-grid">
            {[
              ["Family First", "Respect, fairness, and growth matter here."],
              ["Integrity", "Honesty guides every decision."],
              ["Driver Focused", "Drivers are our backbone."],
              ["Grow Together", "Long-term success for everyone."],
              ["Smart Tech", "Modern tools with human touch."],
              ["Support", "Care inside & outside work."]
            ].map(([title, text], i) => (
              <div className="value-card" key={i}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-cta reveal"
        ref={(el) => (sectionsRef.current[3] = el)}>

        <div className="cta-box">
          <h2 className="brand-line">Why RGM Family</h2>
          <h3 className="cta-title">Let’s Talk About Your Future With RGM</h3>
          <p>Join a company that puts drivers first.</p>

          <button className="cta-btn">Join RGM</button>
        </div>

      </section>

    </div>
  );
}

export default WhyRGM;