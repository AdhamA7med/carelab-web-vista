
import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      icon: 'fas fa-heart',
      title: 'تحاليل القلب',
      description: 'فحوصات شاملة للقلب والأوعية الدموية مع أحدث التقنيات',
      color: 'medical-primary'
    },
    {
      icon: 'fas fa-brain',
      title: 'تحاليل الهرمونات',
      description: 'فحص الغدة الدرقية وجميع الهرمونات المهمة للجسم',
      color: 'medical-secondary'
    },
    {
      icon: 'fas fa-kidney',
      title: 'وظائف الكلى',
      description: 'تحاليل شاملة لوظائف الكلى والمسالك البولية',
      color: 'medical-accent'
    },
    {
      icon: 'fas fa-liver',
      title: 'وظائف الكبد',
      description: 'فحص شامل لوظائف الكبد وإنزيماته المختلفة',
      color: 'medical-dark'
    },
    {
      icon: 'fas fa-tint',
      title: 'تحاليل الدم',
      description: 'صورة دم كاملة وجميع تحاليل الدم الأساسية',
      color: 'red-500'
    },
    {
      icon: 'fas fa-dna',
      title: 'التحاليل الجينية',
      description: 'فحوصات جينية متقدمة للكشف المبكر عن الأمراض',
      color: 'purple-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-dark mb-4 font-cairo">خدماتنا</h2>
          <div className="w-24 h-1 bg-medical-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cairo">
            نقدم مجموعة شاملة من التحاليل الطبية المتخصصة بأعلى معايير الجودة والدقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`bg-${service.color} rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-medical-dark mb-4 text-center font-cairo">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center font-cairo leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-medical-dark mb-8 text-center font-cairo">
            مميزات إضافية
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <i className="fas fa-home text-medical-primary text-4xl mb-4"></i>
              <h4 className="text-lg font-bold text-medical-dark mb-2 font-cairo">خدمة منزلية</h4>
              <p className="text-gray-600 font-cairo">نأتي إليك في المنزل لسحب العينات</p>
            </div>
            <div className="text-center">
              <i className="fas fa-mobile-alt text-medical-secondary text-4xl mb-4"></i>
              <h4 className="text-lg font-bold text-medical-dark mb-2 font-cairo">نتائج فورية</h4>
              <p className="text-gray-600 font-cairo">احصل على النتائج عبر الواتساب</p>
            </div>
            <div className="text-center">
              <i className="fas fa-user-md text-medical-accent text-4xl mb-4"></i>
              <h4 className="text-lg font-bold text-medical-dark mb-2 font-cairo">استشارة طبية</h4>
              <p className="text-gray-600 font-cairo">توضيح النتائج مع طبيب مختص</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
