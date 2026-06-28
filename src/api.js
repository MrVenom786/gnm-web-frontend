import { API_URL } from "./config/apiConfig";

/**
 * Test backend connection
 */
export async function testBackend() {
  try {
    const res = await fetch(`${API_URL}/`);
    if (!res.ok) throw new Error("Backend not reachable");

    return await res.text();
  } catch (error) {
    console.error("Backend test failed:", error.message);
    return null;
  }
}

/**
 * Generic POST helper (useful for forms like HaulWithGNM)
 */
export async function postData(endpoint, data) {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(result.message || "Request failed");
    }

    return result;
  } catch (error) {
    console.error("API error:", error.message);
    throw error;
  }
}