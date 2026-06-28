import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { 
  FaFacebookF, 
  FaYoutube, 
  FaTwitter, 
  FaInstagram, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const current = footerRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <footer ref={footerRef} className={`site-footer ${visible ? "fade-in" : ""}`}>
      <div className="footer-content">
        
        {/* ================= LEFT SECTION: BRAND & INFO ================= */}
        <div className="footer-left">
          <h2 className="footer-brand">GNM transport</h2>
          
          <div className="footer-info-row">
            {/* Address */}
            <div className="info-block address-block">
              <FaMapMarkerAlt className="info-icon" />
              <p>
                Address, 784 Homer Street,<br />
                New York, NY 33305
              </p>
            </div>

            {/* Phone & Email */}
            <div className="info-block contact-block">
              <p>
                <FaPhoneAlt className="info-icon" /> Phone: (113) 223-7990
              </p>
              <p>
                <FaEnvelope className="info-icon" /> Email: info@gnmtransport.com
              </p>
            </div>
          </div>

          <p className="footer-copyright">© {new Date().getFullYear()} GNM transport</p>
        </div>

        {/* ================= MIDDLE SECTION: TAGLINE ================= */}
        <div className="footer-middle">
          <span className="footer-tagline">Global Navigator in Motion</span>
        </div>

        {/* ================= RIGHT SECTION: SOCIALS & LINKS ================= */}
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>

          <div className="quick-links-section">
            <span className="quick-links-title">Quick links</span>
            <div className="quick-links-grid">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;