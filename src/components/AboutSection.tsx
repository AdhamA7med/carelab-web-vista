
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-dark mb-4 font-cairo">من نحن</h2>
          <div className="w-24 h-1 bg-medical-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cairo">
            معمل كير لاب هو رائد في مجال التحاليل الطبية، نقدم خدمات عالية الجودة مع أحدث التقنيات
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-medical-dark mb-6 font-cairo">
              رؤيتنا ورسالتنا
            </h3>
            <p className="text-gray-700 mb-6 font-cairo leading-relaxed">
              في معمل كير لاب، نسعى لتقديم أفضل خدمات التحاليل الطبية بأعلى معايير الجودة والدقة. 
              نؤمن بأن الصحة هي أغلى ما يملكه الإنسان، لذلك نلتزم بتقديم نتائج دقيقة وموثوقة لمساعدة 
              الأطباء في التشخيص الصحيح.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="bg-medical-primary rounded-full p-3 ml-4">
                  <i className="fas fa-check text-white"></i>
                </div>
                <span className="font-cairo font-medium">نتائج مضبوطة</span>
              </div>
              <div className="flex items-center">
                <div className="bg-medical-secondary rounded-full p-3 ml-4">
                  <i className="fas fa-clock text-white"></i>
                </div>
                <span className="font-cairo font-medium">سرعة في التسليم</span>
              </div>
              <div className="flex items-center">
                <div className="bg-medical-accent rounded-full p-3 ml-4">
                  <i className="fas fa-shield-alt text-white"></i>
                </div>
                <span className="font-cairo font-medium">أعلى معايير الأمان</span>
              </div>
              <div className="flex items-center">
                <div className="bg-medical-dark rounded-full p-3 ml-4">
                  <i className="fas fa-award text-white"></i>
                </div>
                <span className="font-cairo font-medium">أعلى جودة</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-medical-light rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <i className="fas fa-users text-medical-primary text-4xl mb-4"></i>
              <h4 className="text-3xl font-bold text-medical-dark mb-2">10000+</h4>
              <p className="text-gray-600 font-cairo">عميل راضي</p>
            </div>
            <div className="bg-medical-light rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <i className="fas fa-flask text-medical-secondary text-4xl mb-4"></i>
              <h4 className="text-3xl font-bold text-medical-dark mb-2">50000+</h4>
              <p className="text-gray-600 font-cairo">تحليل مكتمل</p>
            </div>
            <div className="bg-medical-light rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <i className="fas fa-calendar text-medical-accent text-4xl mb-4"></i>
              <h4 className="text-3xl font-bold text-medical-dark mb-2">5+</h4>
              <p className="text-gray-600 font-cairo">سنوات خبرة</p>
            </div>
            <div className="bg-medical-light rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300">
              <i className="fas fa-medal text-medical-dark text-4xl mb-4"></i>
              <h4 className="text-3xl font-bold text-medical-dark mb-2">99%</h4>
              <p className="text-gray-600 font-cairo">دقة النتائج</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
