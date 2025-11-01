import React from 'react';
import Imageslider from "../components/Slider";
import { 
  Wrench, 
  Settings, 
  Zap, 
  Car, 
  ShieldCheck, 
  Award,
  Sparkles,
  ChevronRight,
  Phone,
  Star,
  Clock,
  Users,
  MapPin,
  CheckCircle
} from 'lucide-react';
import Counter from '../components/Counter';
import About from '../components/About';

const Home = () => {
 

  return (
<div
  className="text-white min-h-screen"
  style={{
    background: "radial-gradient(circle, rgba(0, 0, 0, 1) 63%, rgba(0, 0, 0, 1) 94%)"
  }}
>
  <Imageslider />
  <Counter />
  <About />
</div>
  );
};

export default Home;