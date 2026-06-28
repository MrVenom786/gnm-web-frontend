import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/Pay.css";
import heroVideo from "../../assets/gallery/videos/hero.mp4"; // Ensure this path is correct

// Counter component for stats animation
const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseFloat(target);
    const timer = setInterval(() => {
      start += end / (duration / 50);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target, duration]);
  
  return <span>{count}%</span>;
};

function Pay() {
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
    <div className="pay-page">
      
      {/* HERO VIDEO SECTION */}
      <section className="pay-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        
        <div className="hero-content-box hero-anim">
          <h1>Driver Pay at GNM</h1>
          <p>Performance-based pay with total transparency and trust.</p>
          <Link to="/join/apply" className="apply-btn-pill">
            Apply Today
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">
        
        {/* INTRO TEXT */}
        <section className="pay-intro reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <p className="highlight">MAXIMIZE YOUR EARNING POTENTIAL</p>
          <p className="intro-text">
            At the <strong>GNM Family</strong>, we reward responsibility, safety, and performance. Our transparent pay structures ensure you are backed like family, maximizing your take-home pay.
          </p>
        </section>

        {/* STATS 3D GRID */}
        <section className="stats-grid reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          
          <div className="pay-card-3d text-center">
            <h3>Driver Satisfaction</h3>
            <div className="progress">
              <div className="progress-fill" style={{width: '100%'}}></div>
            </div>
            <div className="stat-number"><Counter target={100} duration={2000} /></div>
          </div>

          <div className="pay-card-3d text-center">
            <h3>Avg Pay Increase</h3>
            <div className="progress">
              <div className="progress-fill" style={{width: '95%'}}></div>
            </div>
            <div className="stat-number"><Counter target={95} duration={2000} /></div>
          </div>

          <div className="pay-card-3d text-center">
            <h3>Retention Rate</h3>
            <div className="progress">
              <div className="progress-fill" style={{width: '97.7%'}}></div>
            </div>
            <div className="stat-number"><Counter target={97} duration={2000} /></div>
          </div>

        </section>

        {/* CTA SECTION */}
        <section className="pay-cta reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Ready to Earn What You're Worth?</h2>
          <p>Join a fleet where your performance directly impacts your paycheck.</p>
          <Link to="/join/apply" className="apply-btn-pill">
            Start Earning Today
          </Link>
        </section>
        
      </div>
    </div>
  );
}

export default Pay;