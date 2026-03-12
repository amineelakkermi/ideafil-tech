import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import Works1 from './components/Works1';
import Cta from './components/Cta';
import Squares from './components/Squares';

export default function Home() {
  return (
    <div>
      <div className='min-h-[90vh] relative bg-dark z-[999]'>
      <Navbar />
      <Hero />
      <div className='absolute inset-0 w-full h-[100%] z-[1]'>
      <Squares
      speed={0.1}
      squareSize={40}
      direction='diagonal' 
      borderColor="#271E37"
      hoverFillColor="#222222"
      />
      </div>
      
      </div>
       
      <Services />
      <WorkProcess />
      <Works1 />
      <Cta />
      </div>
    
    
  );
}
