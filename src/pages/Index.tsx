
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PackagesSection from '../components/PackagesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingIcons from '../components/FloatingIcons';

const Index = () => {
  return (
    <div className="min-h-screen font-cairo" dir="rtl">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default Index;
