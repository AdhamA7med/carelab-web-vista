
import React from 'react';

const PackagesSection = () => {
  const packages = [
    {
      name: 'الباقة البرونزية',
      icon: '🟠',
      price: 'اتصل للسعر',
      tests: [
        'دم كاملة CBC',
        'سكر صايم FBs',
        'وظائف الكبد SGOT',
        'وظائف الكبد SGPT',
        'وظائف كلى creatinine',
        'بولينا urea',
        'كوليسترول Cholesterol',
        'دهون ثلاثية Triglyceride',
        'الدهون النافعة HDL',
        'الدهون الضارة LDL',
        'غدة درقية TSH',
        'بول كامل Urine analysis',
        'سكر تراكمي Hba1c',
        'الزلال في الدم Albumin'
      ],
      color: 'orange-500',
      popular: false
    },
    {
      name: 'الباقة الفضية',
      icon: '⚪️',
      price: 'اتصل للسعر',
      tests: [
        'دم كاملة CBC',
        'سكر صايم FBs',
        'وظائف الكبد SGOT',
        'وظائف الكبد SGPT',
        'وظائف كلى creatinine',
        'وظائف كلى urea',
        'أملاح النقرس uric acid',
        'كوليسترول Cholesterol',
        'دهون ثلاثية Triglyceride',
        'الدهون النافعة HDL',
        'الدهون الضارة LDL',
        'غدة درقية TSH',
        'هرمون الغدة الدرقية الحر FT3',
        'بول كامل Urine analysis',
        'سكر تراكمي Hba1c',
        'الزلال في الدم Albumin',
        'سرعة الترسيب في الدم ESR'
      ],
      color: 'gray-400',
      popular: true
    },
    {
      name: 'الباقة الذهبية',
      icon: '🟡',
      price: 'اتصل للسعر',
      tests: [
        'دم كاملة CBC',
        'سكر صايم FBs',
        'وظائف الكبد SGOT',
        'وظائف الكبد SGPT',
        'وظائف كلى creatinine',
        'وظائف كلى urea',
        'أملاح النقرس uric acid',
        'كوليسترول Cholesterol',
        'دهون ثلاثية Triglyceride',
        'الدهون النافعة HDL',
        'الدهون الضارة LDL',
        'غدة درقية TSH',
        'هرمون الغدة الدرقية الحر FT3',
        'هرمون الغدة الدرقية FT4',
        'بول كامل Urine analysis',
        'سكر تراكمي Hba1c',
        'الزلال في الدم Albumin',
        'مخزون الحديد ferritin',
        'معامل الالتهابات CRP'
      ],
      color: 'yellow-500',
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-dark mb-4 font-cairo">باقات الفحص الشامل</h2>
          <div className="w-24 h-1 bg-medical-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cairo">
            اختر الباقة المناسبة لك للحصول على فحص شامل لصحتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg border-2 ${
                pkg.popular ? 'border-medical-primary transform scale-105' : 'border-gray-200'
              } overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-medical-primary text-white px-4 py-1 rounded-full text-sm font-cairo font-medium">
                    الأكثر طلباً
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-medical-dark font-cairo">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-medical-primary mt-2 font-cairo">{pkg.price}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.tests.map((test, testIndex) => (
                    <div key={testIndex} className="flex items-center">
                      <i className="fas fa-check text-medical-accent ml-3"></i>
                      <span className="text-gray-700 font-cairo">{test}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a
                    href="https://wa.me/201033717378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-cairo font-medium transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-medical-primary text-white hover:bg-medical-dark'
                        : 'border-2 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white'
                    }`}
                  >
                    <i className="fab fa-whatsapp ml-2"></i>
                    احجز الآن
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-medical-light rounded-lg p-8">
            <h3 className="text-2xl font-bold text-medical-dark mb-4 font-cairo">
              💉🧪 للحجز موبايل وواتس
            </h3>
            <a
              href="tel:01033717378"
              className="text-3xl font-bold text-medical-primary hover:text-medical-dark transition-colors duration-300 font-cairo"
            >
              01033717378
            </a>
            <p className="text-gray-600 mt-4 font-cairo">
              #نتائج_مضبوطة_تشخيص_مضبوط #دقة_التحاليل #معمل_كيرلاب #أعلى_جودة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
