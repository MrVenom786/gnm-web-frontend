import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/CurrentOpenings.css";
import heroVideo from "../../assets/gallery/videos/hero.mp4";

function CurrentOpenings() {
  /* SCROLL ANIMATION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => document.querySelectorAll(".reveal").forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="current-container">
      {/* HERO VIDEO SECTION */}
      <section className="current-hero">
        <video autoPlay loop muted playsInline className="current-hero-video">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h1 className="reveal">Current Openings</h1>
          <p className="reveal">Join the GNM Family and drive your career forward.</p>
        </div>
      </section>

      {/* CONTENT BOX */}
      <div className="current-message-box reveal">
        <div className="current-icon">🚛</div>
        <h2>Now Hiring Owner Operators</h2>
        <p>
          GNM Family is currently hiring <strong>Owner Operators</strong> for{" "}
          <strong>Canada/U.S. cross-border operations</strong> as well as{" "}
          <strong>domestic lanes within Canada</strong>.
        </p>

        <p className="highlight-text">
          Join a team that prioritizes safety, professional growth, and long-term success.
        </p>

        <p className="info-text">
          Our recruiting team is ready to provide details regarding requirements, 
          competitive rates, and our streamlined onboarding process.
        </p>

        <div className="current-actions">
          <Link to="/join/apply" className="apply-btn-3d">
            Apply Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CurrentOpenings;