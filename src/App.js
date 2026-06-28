import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Haul from "./pages/Haul";
import HaulWithGNM from "./pages/HaulWithGNM";

// Solutions
import Solutions from "./pages/solutions/Solutions";

// Logistics
import LTL from "./pages/logistics/LTL";
import Truckload from "./pages/logistics/Truckload";

// Join GNM
import ApplyToday from "./pages/joinGNM/ApplyToday";
import InexperiencedClassA from "./pages/joinGNM/InexperiencedClassA";
import ExperiencedDrivers from "./pages/joinGNM/ExperiencedDrivers";
import CurrentOpenings from "./pages/joinGNM/CurrentOpenings";
import Pay from "./pages/joinGNM/Pay";
import Equipment from "./pages/joinGNM/Equipment";
import Benefits from "./pages/joinGNM/Benefits";

// Company
import EmployeeOwnership from "./pages/company/EmployeeOwnership";
import WhoWeAre from "./pages/company/WhoWeAre"; // Updated import to reflect your component name
import Responsibility from "./pages/company/Responsibility";
import Founder from "./pages/company/Founder";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        
        {/* Wrapping routes in a main tag ensures the footer stays at the bottom */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/haul" element={<Haul />} />
            <Route path="/haul-with-gnm" element={<HaulWithGNM />} />
            
            <Route path="/join/apply" element={<ApplyToday />} />
            <Route path="/join/inexperienced" element={<InexperiencedClassA />} />
            <Route path="/join/experienced" element={<ExperiencedDrivers />} />
            <Route path="/join/openings" element={<CurrentOpenings />} />
            <Route path="/join/pay" element={<Pay />} />
            <Route path="/join/equipment" element={<Equipment />} />
            <Route path="/join/benefits" element={<Benefits />} />

            <Route path="/solutions" element={<Solutions />} />
            <Route path="/logistics/ltl" element={<LTL />} />
            <Route path="/logistics/truckload" element={<Truckload />} />

            <Route path="/company/employee-ownership" element={<EmployeeOwnership />} />
            {/* Linked your new WhoWeAre page here */}
            <Route path="/company/who-we-are" element={<WhoWeAre />} />
            <Route path="/company/responsibility" element={<Responsibility />} />
            <Route path="/company/founder" element={<Founder />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;