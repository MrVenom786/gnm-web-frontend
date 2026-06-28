/**
 * API Configuration - Auto environment detection (GNM optimized)
 */

export const getApiUrl = () => {
  const hostname = window.location.hostname;

  // ✅ LOCAL DEVELOPMENT (strict)
  if (
    hostname === "localhost" ||
    hostname === "127.0.0.1"
  ) {
    console.log("🔧 Using LOCAL backend");
    return "http://localhost:5000";
  }

  // ⚠️ CUSTOM DOMAIN (rgm/gnm production domain)
  if (hostname === "rgminc.ca") {
    console.log("🚀 Using PRODUCTION backend (Custom Domain)");
    return "https://gnm-web-backend.vercel.app";
  }

  // 🚀 VERCEL DEPLOYMENT
  if (hostname.includes("vercel.app")) {
    console.log("🚀 Using VERCEL backend");
    return "https://gnm-web-backend.vercel.app";
  }

  // 🔌 ENV FALLBACK (best practice for scaling)
  if (process.env.REACT_APP_API_URL) {
    console.log("🔌 Using ENV backend URL");
    return process.env.REACT_APP_API_URL;
  }

  // ⚠️ FINAL FALLBACK
  console.warn("⚠️ API URL fallback to localhost");
  return "http://localhost:5000";
};

export const API_URL = getApiUrl();

console.log("🌐 GNM API Config loaded:", {
  hostname: window.location.hostname,
  api: API_URL,
});
