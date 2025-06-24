
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-medical-light to-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-medical-dark mb-6 font-cairo">
                معمل <span className="text-medical-primary">كير لاب</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-cairo leading-relaxed">
                فحصك الشامل لصحتك أول بأول ده من أهم أولوياتك
              </p>
              <p className="text-lg text-gray-700 mb-8 font-cairo">
                نحن نهتم بصحتك ونقدم أعلى جودة في التحاليل الطبية مع دقة في النتائج وتشخيص مضبوط
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/201033717378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-medical-primary text-white px-8 py-4 rounded-full hover:bg-medical-dark transition-all duration-300 transform hover:scale-105 shadow-lg font-cairo font-medium inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp ml-2 text-xl"></i>
                  احجز الآن
                </a>
                <button
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-medical-primary text-medical-primary px-8 py-4 rounded-full hover:bg-medical-primary hover:text-white transition-all duration-300 font-cairo font-medium"
                >
                  تصفح الباقات
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="bg-medical-secondary rounded-full w-80 h-80 lg:w-96 lg:h-96 mx-auto flex items-center justify-center animate-pulse-slow">
                <i className="fas fa-microscope text-white text-8xl lg:text-9xl animate-float"></i>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute top-10 left-10 bg-white rounded-full p-4 shadow-lg animate-float">
                <i className="fas fa-heartbeat text-medical-primary text-2xl"></i>
              </div>
              <div className="absolute bottom-10 right-10 bg-white rounded-full p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <i className="fas fa-flask text-medical-secondary text-2xl"></i>
              </div>
              <div className="absolute top-1/2 left-0 bg-white rounded-full p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <i className="fas fa-dna text-medical-accent text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
