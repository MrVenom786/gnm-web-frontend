import { useState } from "react";
import "../../styles/ApplyToday.css";
import { API_URL } from "../../config/apiConfig";

function ApplyToday() {
  // File size limit: 1 MB
  const MAX_FILE_SIZE = 1048576; // 1 MB in bytes
  const ALLOWED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

  const [form, setForm] = useState({
    firstName: "", middleName: "", lastName: "", suffix: "",
    ssn: "", dob: "", address1: "", address2: "",
    country: "United States", city: "", state: "", zip: "",
    primaryPhone: "", email: "", confirmEmail: "", consent: false, 
    license: "", licenseFile: null, immigrationFile: null, otherDocument: null,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validateFile = (file, name) => {
    if (!file) return { valid: false, error: `${name} is required.` };
    if (!ALLOWED_FILE_TYPES.includes(file.type)) return { valid: false, error: `❌ ${name}: Use PDF, JPG, or PNG.` };
    if (file.size > MAX_FILE_SIZE) return { valid: false, error: `❌ ${name}: Exceeds 1MB limit.` };
    return { valid: true, error: null };
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files[0];
      const validation = validateFile(file, name);
      if (!validation.valid) { setMessage(validation.error); e.target.value = ""; return; }
      setMessage("");
      setForm((prev) => ({ ...prev, [name]: file }));
    } else {
      setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email !== form.confirmEmail) { setMessage("❌ Emails do not match."); return; }
    if (!form.consent) { setMessage("❌ Consent is required."); return; }

    try {
      setLoading(true);
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => formData.append(key, value));
      const res = await fetch(`${API_URL}/apply`, { method: "POST", body: formData });
      if (!res.ok) throw new Error("Submission failed");
      setMessage("🎉 Application submitted successfully!");
    } catch (err) { setMessage("❌ Submission failed. Please try again."); } finally { setLoading(false); }
  };

  return (
    <div className="apply-container">
      <div className="apply-header">
        <h1>Apply Today – Join GNM Family</h1>
        <p>Complete your application below</p>
      </div>

      <form className="apply-form-grid" onSubmit={handleSubmit}>
        {/* LEFT COLUMN */}
        <div className="section-card">
          <h3>Personal Info</h3>
          <input name="firstName" placeholder="First Name*" required onChange={handleChange} value={form.firstName} />
          <input name="middleName" placeholder="Middle Name" onChange={handleChange} value={form.middleName} />
          <input name="lastName" placeholder="Last Name*" required onChange={handleChange} value={form.lastName} />
          <input name="suffix" placeholder="Suffix" onChange={handleChange} value={form.suffix} />
          <input name="ssn" placeholder="SIN/HST*" required onChange={handleChange} value={form.ssn} />
          
          <label className="date-label">Date of Birth</label>
          <input type="date" name="dob" className="custom-date-input" required onChange={handleChange} value={form.dob} />
          
          <input name="license" placeholder="License No*" required onChange={handleChange} value={form.license} />
          
          <label className="file-upload">License Upload * <span>(Max 1MB, PDF/JPG/PNG)</span>
            <input type="file" name="licenseFile" required onChange={handleChange} />
          </label>
          <label className="file-upload">Immigration Upload * <span>(Max 1MB, PDF/JPG/PNG)</span>
            <input type="file" name="immigrationFile" required onChange={handleChange} />
          </label>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-col">
          <div className="section-card">
            <h3>Address</h3>
            <input name="address1" placeholder="Address*" required onChange={handleChange} value={form.address1} />
            <input name="city" placeholder="City*" required onChange={handleChange} value={form.city} />
            <input name="state" placeholder="State*" required onChange={handleChange} value={form.state} />
            <input name="zip" placeholder="PIN Code*" required onChange={handleChange} value={form.zip} />
          </div>

          <div className="section-card">
            <h3>Contact</h3>
            <input name="primaryPhone" placeholder="Phone*" required onChange={handleChange} value={form.primaryPhone} />
            <input name="email" type="email" placeholder="Email*" required onChange={handleChange} value={form.email} />
            <input name="confirmEmail" type="email" placeholder="Confirm Email*" required onChange={handleChange} value={form.confirmEmail} />
            
            <label className="file-upload">Other Documents * <span>(Max 1MB, PDF/JPG/PNG)</span>
              <input type="file" name="otherDocument" required onChange={handleChange} />
            </label>

            <label className="custom-checkbox">
              <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} />
              <span className="checkmark"></span>
              I agree to terms & communication
            </label>
          </div>

          {message && <div className="form-message">{message}</div>}
          <button disabled={loading} className="submit-btn">
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApplyToday;