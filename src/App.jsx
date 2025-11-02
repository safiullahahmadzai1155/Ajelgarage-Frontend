import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WhatsApp from './components/Whatsapp';
import Footer from './components/Footer';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import EngineRepair from './Services/EngineRepair';
import PerformanceTuning from './Services/PerformanceTuning';
import BrakeService from './Services/BrakeService';
import OilChange from './Services/OilChange';
import Diagnostics from './Services/Diagnostics';

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
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
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