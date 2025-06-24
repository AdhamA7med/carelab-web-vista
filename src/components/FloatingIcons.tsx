
import React from 'react';

const FloatingIcons = () => {
  return (
    <div className="fixed left-4 bottom-4 z-50 flex flex-col space-y-4">
      {/* WhatsApp */}
      <a
        href="https://wa.me/201033717378"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
        title="تواصل معنا عبر الواتساب"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Phone */}
      <a
        href="tel:01033717378"
        className="bg-medical-primary hover:bg-medical-dark text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
        title="اتصل بنا"
      >
        <i className="fas fa-phone text-xl"></i>
      </a>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-medical-secondary hover:bg-cyan-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
        title="العودة للأعلى"
      >
        <i className="fas fa-arrow-up text-xl"></i>
      </button>
    </div>
  );
};

export default FloatingIcons;
