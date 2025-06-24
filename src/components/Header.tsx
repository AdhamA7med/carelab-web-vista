
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-medical-primary rounded-full p-2 ml-3">
              <i className="fas fa-flask text-white text-2xl"></i>
            </div>
            <div className="mr-3">
              <h1 className="text-2xl font-bold text-medical-primary font-cairo">معمل كير لاب</h1>
              <p className="text-sm text-gray-600">Care Lab</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium"
            >
              من نحن
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium"
            >
              الباقات
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium"
            >
              آراء العملاء
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium"
            >
              اتصل بنا
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-medical-primary`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium text-right"
              >
                الرئيسية
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium text-right"
              >
                من نحن
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium text-right"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium text-right"
              >
                الباقات
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium text-right"
              >
                آراء العملاء
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-medical-primary transition-colors duration-300 font-cairo font-medium text-right"
              >
                اتصل بنا
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
