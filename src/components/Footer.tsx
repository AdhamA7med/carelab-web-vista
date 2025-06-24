
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-medical-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-medical-primary rounded-full p-2 ml-3">
                <i className="fas fa-flask text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold font-cairo">معمل كير لاب</h3>
                <p className="text-gray-300 text-sm">Care Lab</p>
              </div>
            </div>
            <p className="text-gray-300 font-cairo leading-relaxed">
              معمل متخصص في التحاليل الطبية بأعلى معايير الجودة والدقة
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-cairo">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-cairo"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-cairo"
                >
                  من نحن
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-cairo"
                >
                  خدماتنا
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-cairo"
                >
                  الباقات
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-cairo">خدماتنا</h4>
            <ul className="space-y-2 text-gray-300 font-cairo">
              <li className="flex items-center">
                <i className="fas fa-check text-medical-accent ml-2"></i>
                تحاليل شاملة
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-medical-accent ml-2"></i>
                خدمة منزلية
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-medical-accent ml-2"></i>
                نتائج سريعة
              </li>
              <li className="flex items-center">
                <i className="fas fa-check text-medical-accent ml-2"></i>
                استشارة طبية
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-cairo">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-phone text-medical-accent ml-3"></i>
                <a
                  href="tel:01033717378"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-cairo"
                >
                  01033717378
                </a>
              </div>
              <div className="flex items-center">
                <i className="fab fa-whatsapp text-medical-accent ml-3"></i>
                <a
                  href="https://wa.me/01033717378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-cairo"
                >
                  01033717378
                </a>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-medical-accent ml-3 mt-1"></i>
                <span className="text-gray-300 font-cairo">
                  ١٠٩ فيصل الرئيسي المريوطية
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 font-cairo mb-4 md:mb-0">
              <p>&copy; 2024 معمل كير لاب. جميع الحقوق محفوظة.</p>
            </div>
            <div className="text-gray-300 font-cairo">
              <p>
                تم تطوير الموقع بواسطة{' '}
                <a
                  href="https://wa.me/01153903786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-medical-accent hover:text-white transition-colors duration-300 font-medium"
                >
                  أدهم أحمد
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Medical Hashtags */}
        <div className="text-center mt-6 text-gray-400 font-cairo text-sm">
          #نتائج_مضبوطة_تشخيص_مضبوط #دقة_التحاليل #معمل_كيرلاب #أعلى_جودة #باقة_الفحص_الشامل
        </div>
      </div>
    </footer>
  );
};

export default Footer;
