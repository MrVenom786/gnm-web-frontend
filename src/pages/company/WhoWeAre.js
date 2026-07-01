import React, { useState, useEffect, useRef } from "react";
import "../../styles/WhoWeAre.css";

// Hero video import
import heroVideo from "../../assets/gallery/videos/hero.mp4";

// Gallery images for main section
const galleryImages = [];
for (let i = 35; i <= 50; i++) {
  galleryImages.push(require(`../../assets/gallery/images/gallery${i}.jpg`));
}

function WhoWeAre() {
  const [offset, setOffset] = useState(0);
  const sectionsRef = useRef([]);

  // Gallery slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll reveal logic
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

    sectionsRef.current.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Create a visible slice of 4 images in a collage style
  const visibleImages = [];
  for (let i = 0; i < 4; i++) {
    visibleImages.push(galleryImages[(offset + i) % galleryImages.length]);
  }

  return (
    <div className="gnm-company-container">

      {/* HERO SECTION WITH VIDEO */}
      <section className="company-hero">
        <video autoPlay loop muted playsInline className="hero-video-bg">
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        <div className="hero-overlay-bg"></div>
        <div className="hero-content-box hero-anim">
          <h1>Our Company</h1>
          <p>Built on Trust. Driven by Family. Powered by Growth.</p>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="content-wrapper">
        
        {/* ABOUT SECTION */}
        <section className="company-intro reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          <h2>Who We Are</h2>
          <p>
            GNM is a fast-growing transportation company built with one clear
            mission — <strong>put drivers and employees first</strong>. Our focus on
            transparency, performance-based growth, and family values sets us apart.
          </p>
          <p>
            We believe great service to our customers begins with taking care of
            our people. That’s why GNM is committed to building a culture where
            dedication is rewarded and every team member feels valued.
          </p>
        </section>

        {/* BENEFITS SECTION */}
        <section className="company-benefits reveal-up" ref={(el) => (sectionsRef.current[1] = el)}>
          <h2>Our Benefits & Compensation</h2>
          <div className="benefits-card-3d">
            <ul className="benefits-list">
              <li><span>💰</span> Competitive pay with performance-based incentives</li>
              <li><span>🔒</span> (Optional) Disability coverage for income protection</li>
              <li><span>📈</span> If you wait, you will get paid.</li>
              <li><span>📚</span> Detention/layover/waiting will be paid</li>
            </ul>
          </div>
        </section>

        {/* GROWTH/INVESTING SECTION */}
        <section className="company-growth reveal-up" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2>Investing in Our People</h2>
          <p className="growth-subtext">
            At GNM, we don’t just focus on today — we build for tomorrow.
            As we grow, our goal is to introduce long-term programs that reward
            loyalty, performance, and commitment.
          </p>

          <div className="growth-grid">
            <div className="growth-card-3d">
              <h3>Career Growth</h3>
              <p>
                Opportunities to grow with the company as GNM expands its fleet
                and operations.
              </p>
            </div>

            <div className="growth-card-3d">
              <h3>Training & Development</h3>
              <p>
                Ongoing learning support to help employees succeed in their roles.
              </p>
            </div>

            <div className="growth-card-3d">
              <h3>Family-First Culture</h3>
              <p>
                We respect home time, family needs, and work-life balance.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section className="company-gallery reveal-up" ref={(el) => (sectionsRef.current[3] = el)}>
          <h2>Gallery</h2>
          <div className="gallery-collage">
            {visibleImages.map((img, index) => (
              <div key={index} className="collage-item">
                <img src={img} alt={`GNM Operations ${index}`} />
              </div>
            ))}
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="company-vision reveal-up" ref={(el) => (sectionsRef.current[4] = el)}>
          <h2>Our Vision</h2>
          <div className="vision-box-3d">
            <p>
              GNM is committed to becoming a company where employees feel proud to
              work, customers trust our service, and long-term partnerships thrive.
              We are building something meaningful — together.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default WhoWeAre;
