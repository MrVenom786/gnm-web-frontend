import React, { useEffect, useState, useRef } from "react";
import "../../styles/Solutions.css";
import heroVideo from "../../assets/gallery/videos/hero.mp4";

const reviews = [
  { text: "GNM has been one of the most reliable carriers we’ve worked with. Communication is always clear and timely.", author: "Logistics Manager" },
  { text: "Professional drivers, clean equipment, and on-time delivery every time. GNM feels like a true partner.", author: "Supply Chain Director" },
  { text: "Exceeded expectations on specialized heavy-haul needs. Highly recommend.", author: "Operations Lead" }
];

function Solutions() {
  const [currentReview, setCurrentReview] = useState(0);
  const sectionsRef = useRef([]);

  // Review Slider Logic
  useEffect(() => {
    const interval = setInterval(() => setCurrentReview((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Animations using useRef
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
    <div className="solutions-page">
      
      {/* HERO SECTION */}
      <section className="solutions-hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay-bg"></div>
        
        <div className="hero-content-box hero-anim">
          {/* Text loads instantly */}
          <h1>GNM Transportation Solutions</h1>
          <p>Reliable, scalable, and safety-focused freight solutions built for today’s needs.</p>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">
        
        {/* SOLUTIONS GRID */}
        <section className="solutions-grid reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          {[
            { title: "Linehaul", desc: "Consistent movement across U.S. & Canada.", points: ["48-state coverage", "Safety-focused", "On-time delivery"] },
            { title: "Dedicated", desc: "Predictable routing with guaranteed capacity.", points: ["Guaranteed capacity", "Customized routing", "High reliability"] },
            { title: "Specialized", desc: "Expert handling for heavy & high-value freight.", points: ["Heavy/Oversized", "Custom securement", "Expert drivers"] }
          ].map((item, i) => (
            <div className="solutions-card-3d" key={i}>
              <h3>{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
              <ul className="solutions-list">
                {item.points.map((p, idx) => (
                  <li key={idx}><span>✅</span> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* REVIEWS SECTION */}
        <section className="solutions-reviews reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className="review-card-3d">
            <h2>Trusted Partnerships</h2>
            <div className="review-content">
              <p className="review-text">"{reviews[currentReview].text}"</p>
              <span className="review-author">— {reviews[currentReview].author}</span>
            </div>
            {/* Dots for visual indication of slider */}
            <div className="review-dots">
              {reviews.map((_, idx) => (
                <span key={idx} className={`dot ${idx === currentReview ? 'active-dot' : ''}`}></span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="solutions-cta reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Start Shipping With GNM</h2>
          <p>Let our team build a transportation solution tailored to your supply chain.</p>
          <a href="mailto:dispatch@gnmtransport.net" className="apply-btn-pill">
            Contact Our Solutions Team
          </a>
        </section>

      </div>
    </div>
  );
}

export default Solutions;
