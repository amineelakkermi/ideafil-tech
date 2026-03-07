import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import Works1 from './components/Works1';
import Cta from './components/Cta';

export default function Home() {
  return (
    <div className="relative">
        <Hero />
        <Services />
        <WorkProcess />
        <Works1 />
        <Cta />
      </div>
    
    
  );
}
