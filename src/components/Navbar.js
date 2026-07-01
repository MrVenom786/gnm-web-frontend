import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [locked, setLocked] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 950 && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const handleClick = (name) => {
    if (mobileMenuOpen) return;
    if (active === name && locked) {
      setActive(null);
      setLocked(false);
    } else {
      setActive(name);
      setLocked(true);
    }
  };

  const handleMouseEnter = (name) => {
    if (!locked && !mobileMenuOpen) setActive(name);
  };

  const handleMouseLeave = () => {
    if (!locked && !mobileMenuOpen) setActive(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setMobileSubMenu(null);
  };

  const toggleMobileSubMenu = (name) => {
    setMobileSubMenu((prev) => (prev === name ? null : name));
  };

  const closeMenu = () => {
    setActive(null);
    setLocked(false);
    setMobileMenuOpen(false);
    setMobileSubMenu(null);
  };

  return (
    <header className="gnm-master-header">
      <div className="gnm-header-container">
        
        {/* ================= LOGO COLUMN ================= */}
        <div className="gnm-logo-col">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="GNM Logo" className="gnm-logo-img" />
          </Link>
        </div>

        {/* ================= NAV COLUMN ================= */}
        <div className="gnm-nav-col">
          
          {/* --- TOP ROW --- */}
          <div className="gnm-top-row">
            <div className="gnm-quick-links">
              <Link to="/" onClick={closeMenu}>Home</Link>
              <Link to="/careers" onClick={closeMenu}>Careers</Link>
              <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </div>
            <div className="gnm-action-area">
              <Link className="gnm-gold-btn" to="/join/apply" onClick={closeMenu}>
                APPLY NOW
              </Link>
              <button className="gnm-mobile-toggle" onClick={toggleMobileMenu}>
                ☰
              </button>
            </div>
          </div>

          {/* --- BOTTOM ROW (MAIN NAV) --- */}
          <nav className={`gnm-bottom-row ${mobileMenuOpen ? "open" : ""}`}>
            <ul className="gnm-main-nav-list">
              
              {/* SERVICES */}
              <li onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
                <span onClick={() => mobileMenuOpen ? toggleMobileSubMenu("services") : handleClick("services")}>
                  {/* Globe Icon */}
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  GLOBAL FREIGHT SERVICES ▾
                </span>
                {(active === "services" || mobileSubMenu === "services") && (
                  <div className="gnm-dropdown">
                    <Link to="/join/apply" onClick={closeMenu}>Apply Today</Link>
                    <Link to="/solutions" onClick={closeMenu}>Solutions</Link>
                  </div>
                )}
              </li>

              {/* LOGISTICS */}
              <li onMouseEnter={() => handleMouseEnter("logistics")} onMouseLeave={handleMouseLeave}>
                <span onClick={() => mobileMenuOpen ? toggleMobileSubMenu("logistics") : handleClick("logistics")}>
                  {/* Gears Icon */}
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                  GNM LOGISTICS SOLUTIONS ▾
                </span>
                {(active === "logistics" || mobileSubMenu === "logistics") && (
                  <div className="gnm-dropdown">
                    <Link to="/logistics/ltl" onClick={closeMenu}>LTL</Link>
                    <Link to="/logistics/truckload" onClick={closeMenu}>Truckload</Link>
                  </div>
                )}
              </li>

              {/* NETWORK & FLEET */}
              <li onMouseEnter={() => handleMouseEnter("network")} onMouseLeave={handleMouseLeave}>
                <span onClick={() => mobileMenuOpen ? toggleMobileSubMenu("network") : handleClick("network")}>
                  {/* Email/Network Icon */}
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                  OUR NETWORK & FLEET ▾
                </span>
                {(active === "network" || mobileSubMenu === "network") && (
                  <div className="gnm-dropdown">
                    <Link to="/join/inexperienced" onClick={closeMenu}>Inexperienced Class A Drivers</Link>
                    <Link to="/join/experienced" onClick={closeMenu}>Experienced Class A Drivers</Link>
                    <Link to="/join/openings" onClick={closeMenu}>Current Openings</Link>
                    <Link to="/join/pay" onClick={closeMenu}>Pay</Link>
                    <Link to="/join/equipment" onClick={closeMenu}>Equipments</Link>
                    <Link to="/join/benefits" onClick={closeMenu}>Benefits</Link>
                  </div>
                )}
              </li>

              {/* COMPANY (MOVED TO THE END) */}
              <li onMouseEnter={() => handleMouseEnter("company")} onMouseLeave={handleMouseLeave}>
                <span onClick={() => mobileMenuOpen ? toggleMobileSubMenu("company") : handleClick("company")}>
                  {/* Building Icon */}
                  <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4v18M13 3l8 4v14M9 9v.01M9 13v.01M9 17v.01M17 11v.01M17 15v.01"/></svg>
                  OUR COMPANY ▾
                </span>
                {(active === "company" || mobileSubMenu === "company") && (
                  <div className="gnm-dropdown">
                    <Link to="/company/who-we-are" onClick={closeMenu}>Who We Are</Link>
                    <Link to="/company/founder" onClick={closeMenu}>About GNM</Link>
                  </div>
                )}
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
