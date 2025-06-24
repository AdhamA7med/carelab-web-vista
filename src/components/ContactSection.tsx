
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-dark mb-4 font-cairo">اتصل بنا</h2>
          <div className="w-24 h-1 bg-medical-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cairo">
            نحن هنا لخدمتك، تواصل معنا في أي وقت
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-medical-dark mb-8 font-cairo">معلومات التواصل</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-medical-primary rounded-full p-3 ml-4 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark mb-2 font-cairo">العنوان</h4>
                  <p className="text-gray-700 font-cairo leading-relaxed">
                    ١٠٩ فيصل الرئيسي المريوطية<br />
                    أمام مستشفى الجابري<br />
                    فوق فرع اتصالات الدور الثالث
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-medical-secondary rounded-full p-3 ml-4 flex-shrink-0">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark mb-2 font-cairo">الهاتف</h4>
                  <a
                    href="tel:01033717378"
                    className="text-medical-primary hover:text-medical-dark transition-colors duration-300 font-cairo text-lg font-medium"
                  >
                    01033717378
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-medical-accent rounded-full p-3 ml-4 flex-shrink-0">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark mb-2 font-cairo">واتساب</h4>
                  <a
                    href="https://wa.me/201033717378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-medical-primary hover:text-medical-dark transition-colors duration-300 font-cairo text-lg font-medium"
                  >
                    01033717378
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-medical-dark rounded-full p-3 ml-4 flex-shrink-0">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <div>
                  <h4 className="font-bold text-medical-dark mb-2 font-cairo">ساعات العمل</h4>
                  <p className="text-gray-700 font-cairo">
                    السبت - الخميس: 8:00 ص - 10:00 م<br />
                    الجمعة: 2:00 م - 10:00 م
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/201033717378"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 text-center font-cairo font-medium flex items-center justify-center"
              >
                <i className="fab fa-whatsapp ml-2"></i>
                تواصل واتساب
              </a>
              <a
                href="tel:01033717378"
                className="bg-medical-primary text-white py-3 px-6 rounded-lg hover:bg-medical-dark transition-colors duration-300 text-center font-cairo font-medium flex items-center justify-center"
              >
                <i className="fas fa-phone ml-2"></i>
                اتصل الآن
              </a>
            </div>
          </div>

          {/* Map & Additional Info */}
          <div>
            <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center mb-8">
              <div className="text-center">
                <i className="fas fa-map-marked-alt text-medical-primary text-6xl mb-4"></i>
                <h4 className="text-xl font-bold text-medical-dark font-cairo mb-2">موقعنا</h4>
                <p className="text-gray-600 font-cairo">فيصل الرئيسي المريوطية</p>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-700 mb-3 font-cairo flex items-center">
                <i className="fas fa-exclamation-triangle ml-2"></i>
                للحالات الطارئة
              </h4>
              <p className="text-red-600 font-cairo mb-3">
                في حالة الحاجة لتحاليل عاجلة أو خدمة منزلية طارئة
              </p>
              <a
                href="tel:01033717378"
                className="text-red-700 font-bold hover:text-red-800 transition-colors duration-300 font-cairo"
              >
                اتصل فوراً: 01033717378
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
