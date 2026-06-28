/**
 * API Configuration - Auto Environment Detection
 */

const PRODUCTION_API = "https://gnm-web-backend.vercel.app";
const LOCAL_API = "http://localhost:5000";

export const getApiUrl = () => {
  const hostname = window.location.hostname;

  // ✅ Local Development
  if (
    hostname === "localhost" ||
    hostname === "127.0.0.1"
  ) {
    console.log("🔧 Using LOCAL backend");
    return LOCAL_API;
  }

  // ✅ Production Custom Domain
  if (
    hostname === "gnmtransport.com" ||
    hostname === "www.gnmtransport.com"
  ) {
    console.log("🚀 Using PRODUCTION backend (gnmtransport.com)");
    return PRODUCTION_API;
  }

  // ✅ Vercel Frontend Deployments
  if (
    hostname === "gnm-web-frontend.vercel.app" ||
    hostname.endsWith(".vercel.app")
  ) {
    console.log("🚀 Using VERCEL backend");
    return PRODUCTION_API;
  }

  // ✅ Environment Variable (optional)
  if (process.env.REACT_APP_API_URL) {
    console.log("🔌 Using ENV backend URL");
    return process.env.REACT_APP_API_URL;
  }

  // ✅ Final fallback
  console.warn("⚠️ Falling back to LOCAL backend");
  return LOCAL_API;
};

export const API_URL = getApiUrl();

console.log("🌐 GNM API Config:", {
  hostname: window.location.hostname,
  api: API_URL,
});
