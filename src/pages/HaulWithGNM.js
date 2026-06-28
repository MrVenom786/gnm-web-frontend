import React, { useState, useRef, useEffect } from "react";
import "../styles/HaulWithGNM.css";
import { API_URL } from "../config/apiConfig";

function HaulWithGNM() {
  const [form, setForm] = useState({
    companyName: "",
    companyWebsite: "",
    name: "",
    phone: "",
    email: "",
    customerType: "",
    commodity: "",
    shipmentValue: "",
    shipmentFrequency: "",
    freightDetails: "",
    agreeSms: false,
    agreeEmail: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!API_URL) {
      setMessage("System configuration error. API URL not found.");
      return;
    }

    if (!form.agreeSms && !form.agreeEmail) {
      setMessage("Please agree to at least one communication option.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const submitUrl = `${API_URL}/rate-quote`;

      const res = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit rate quote");
      }

      setMessage("Rate quote submitted successfully! Our team will contact you soon.");

      setForm({
        companyName: "",
        companyWebsite: "",
        name: "",
        phone: "",
        email: "",
        customerType: "",
        commodity: "",
        shipmentValue: "",
        shipmentFrequency: "",
        freightDetails: "",
        agreeSms: false,
        agreeEmail: false,
      });
    } catch (err) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gnm-quote-page">
      
      {/* MINI HERO HEADER */}
      <section className="gnm-hero-mini">
        <div className="hero-content-box hero-anim">
          <h1>Get Your Rate Quote</h1>
          <p>Truckload Capacity Available – Get your freight on the road fast, safe, and efficiently with GNM Logistics.</p>
        </div>
      </section>

      {/* MAIN CONTENT WRAPPER */}
      <div className="quote-content-wrapper">
        <div className="quote-centered-layout reveal-up" ref={(el) => (sectionsRef.current[0] = el)}>
          
          {/* CENTERED 3D FORM CARD */}
          <div className="form-card-3d">
            <div className="form-header">
              <h2>Request a Quote</h2>
              <p>Please fill out the details below, and a GNM representative will reach out to you shortly.</p>
            </div>

            <form className="gnm-form" onSubmit={handleSubmit}>
              
              <div className="input-group">
                <input name="companyName" placeholder="Company Name *" required value={form.companyName} onChange={handleChange} />
                <input name="companyWebsite" placeholder="Company Website *" required value={form.companyWebsite} onChange={handleChange} />
              </div>
              
              <div className="input-group">
                <input name="name" placeholder="Contact Name *" required value={form.name} onChange={handleChange} />
                <input name="phone" placeholder="Phone Number *" required value={form.phone} onChange={handleChange} />
              </div>
              
              <input type="email" name="email" className="full-width-input" placeholder="Email Address *" required value={form.email} onChange={handleChange} />

              <textarea
                name="freightDetails"
                placeholder="Freight Details (Weight, Dimensions, Origin, Destination) *"
                required
                value={form.freightDetails}
                onChange={handleChange}
                rows="5"
              />

              <div className="checkbox-group">
                <label className="checkbox-line">
                  <input type="checkbox" name="agreeSms" checked={form.agreeSms} onChange={handleChange} />
                  <span>I agree to receive SMS Communications from GNM Logistics</span>
                </label>
                <label className="checkbox-line">
                  <input type="checkbox" name="agreeEmail" checked={form.agreeEmail} onChange={handleChange} />
                  <span>I agree to receive Email Communications from GNM Logistics</span>
                </label>
              </div>

              {message && (
                <div className={`form-message ${message.includes("success") ? "success" : "error"}`}>
                  {message}
                </div>
              )}

              <button type="submit" className="apply-btn-3d" disabled={loading}>
                {loading ? "Submitting Request..." : "Submit Rate Quote"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HaulWithGNM;