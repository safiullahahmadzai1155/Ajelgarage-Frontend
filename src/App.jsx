import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import i18n configuration
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WhatsApp from './components/Whatsapp';
import Footer from './components/Footer';
import Service from './pages/Service';
import Legacy from './pages/Legacy';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import EngineRepair from './Services/EngineRepair';
import PerformanceTuning from './Services/PerformanceTuning';
import BrakeService from './Services/BrakeService';
import OilChange from './Services/OilChange';
import Diagnostics from './Services/Diagnostics';
import Maintenance from './Services/Maintenance';
import Heritage from './Legacy/Heritage';
import MasterTechnicians from './Legacy/MasterTechnicians';
import Certifications from './Legacy/Certifications';
import Testimonials from './components/Testimonials';
import Privacy from './Rule/Privacy';
import Terms from './Rule/Terms';
import Cookies from './Rule/cookies';

function App() {
  return (
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/Services/EngineRepair" element={<EngineRepair />} />
              <Route path="/Services/PerformanceTuning" element={<PerformanceTuning />} />
              <Route path="/Services/BrakeService" element={<BrakeService />} />
              <Route path="/Services/OilChange" element={<OilChange />} />
              <Route path="/Services/Diagnostics" element={<Diagnostics />} />
              <Route path="/Services/Maintenance" element={<Maintenance />} />
              <Route path="/Legacy" element={<Legacy />} />
              <Route path="/Legacy/Heritage" element={<Heritage />} />
              <Route path="/Legacy/MasterTechnicians" element={<MasterTechnicians />} />
              <Route path="/Legacy/Certifications" element={<Certifications />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/Rule/Privacy" element={<Privacy />} />
              <Route path="/Rule/Terms" element={<Terms />} />
              <Route path="/Rule/Cookies" element={<Cookies />} />
            </Routes>
          </main>
          <WhatsApp />
          <div>
            <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;