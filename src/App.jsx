import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import WhatsApp from './components/Whatsapp';
import Footer from './components/Footer';
import Service from './pages/Service';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
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