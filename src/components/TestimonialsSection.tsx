
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      rating: 5,
      comment: 'خدمة ممتازة ونتائج دقيقة. الفريق محترف جداً والنتائج جاءت في الوقت المحدد.',
      avatar: 'fas fa-user-circle'
    },
    {
      name: 'فاطمة علي',
      rating: 5,
      comment: 'أفضل معمل تحاليل في المنطقة. دقة في النتائج وسرعة في التسليم.',
      avatar: 'fas fa-user-circle'
    },
    {
      name: 'محمد السيد',
      rating: 5,
      comment: 'تعامل راقي وخدمة عملاء ممتازة. أنصح الجميع بمعمل كير لاب.',
      avatar: 'fas fa-user-circle'
    },
    {
      name: 'سارة أحمد',
      rating: 5,
      comment: 'الخدمة المنزلية رائعة وأسعارهم مناسبة جداً. شكراً لكم.',
      avatar: 'fas fa-user-circle'
    },
    {
      name: 'عبد الله محمود',
      rating: 5,
      comment: 'معمل موثوق ونتائج دقيقة 100%. استمروا في التميز.',
      avatar: 'fas fa-user-circle'
    },
    {
      name: 'منى إبراهيم',
      rating: 5,
      comment: 'باقات الفحص الشامل ممتازة وشاملة. أنصح بشدة.',
      avatar: 'fas fa-user-circle'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-dark mb-4 font-cairo">آراء عملائنا</h2>
          <div className="w-24 h-1 bg-medical-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-cairo">
            شاهد ما يقوله عملاؤنا عن خدماتنا ومستوى الرعاية التي نقدمها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="text-medical-primary text-3xl ml-4">
                  <i className={testimonial.avatar}></i>
                </div>
                <div>
                  <h3 className="font-bold text-medical-dark font-cairo">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 font-cairo leading-relaxed">
                "{testimonial.comment}"
              </p>
              <div className="mt-4 text-medical-primary">
                <i className="fas fa-quote-right text-2xl opacity-30"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <i className="fas fa-award text-medical-primary text-4xl mb-2"></i>
              <p className="font-cairo font-bold text-medical-dark">معتمد</p>
              <p className="text-gray-600 font-cairo text-sm">من وزارة الصحة</p>
            </div>
            <div>
              <i className="fas fa-certificate text-medical-secondary text-4xl mb-2"></i>
              <p className="font-cairo font-bold text-medical-dark">جودة عالية</p>
              <p className="text-gray-600 font-cairo text-sm">ISO 9001</p>
            </div>
            <div>
              <i className="fas fa-star text-yellow-400 text-4xl mb-2"></i>
              <p className="font-cairo font-bold text-medical-dark">5 نجوم</p>
              <p className="text-gray-600 font-cairo text-sm">تقييم العملاء</p>
            </div>
            <div>
              <i className="fas fa-shield-alt text-medical-accent text-4xl mb-2"></i>
              <p className="font-cairo font-bold text-medical-dark">آمن</p>
              <p className="text-gray-600 font-cairo text-sm">حماية البيانات</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
