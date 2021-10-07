import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <ServiceSection />
    </div>
  );
}
