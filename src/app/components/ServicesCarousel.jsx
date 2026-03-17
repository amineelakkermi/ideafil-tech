'use client';

import React from 'react';
import styles from '../style';
import Paragraph from './Paragraph';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const servicesData = [
  {
    id: 1,
    title: 'تطوير وتصميم المواقع الإلكترونية',
    description: [
      'تصميم مواقع احترافية ومتجاوبة مع جميع الأجهزة',
      'برمجة مواقع مخصصة حسب احتياجات العملاء',
      'تحسين تجربة المستخدم (UX/UI)',
      'تطوير متاجر إلكترونية متكاملة بأنظمة دفع وشحن سلسة',
      'تحسين محركات البحث (SEO) لضمان ظهور الموقع في نتائج البحث الأولى'
    ],
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="webGrad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BFFE"/>
            <stop offset="1" stopColor="#008FF5"/>
          </linearGradient>
          <linearGradient id="webGrad2" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3DD8FF"/>
            <stop offset="1" stopColor="#0070DD"/>
          </linearGradient>
        </defs>
        <rect x="6" y="10" width="52" height="36" rx="4" fill="url(#webGrad1)" opacity="0.15"/>
        <rect x="8" y="12" width="48" height="32" rx="3" stroke="url(#webGrad2)" strokeWidth="2" fill="none"/>
        <line x1="8" y1="22" x2="56" y2="22" stroke="url(#webGrad2)" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="13" cy="17" r="2" fill="#FF5E5E"/>
        <circle cx="19" cy="17" r="2" fill="#FFD93D"/>
        <circle cx="25" cy="17" r="2" fill="#6BCB77"/>
        <rect x="14" y="28" width="16" height="3" rx="1.5" fill="#00BFFE" opacity="0.6"/>
        <rect x="14" y="34" width="12" height="3" rx="1.5" fill="#00BFFE" opacity="0.4"/>
        <rect x="36" y="26" width="14" height="14" rx="2" fill="url(#webGrad1)" opacity="0.3"/>
        <line x1="24" y1="48" x2="40" y2="48" stroke="url(#webGrad2)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="32" y1="44" x2="32" y2="48" stroke="url(#webGrad2)" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'تطوير تطبيقات الجوال',
    description: [
      'برمجة تطبيقات iOS و Android باستخدام أحدث التقنيات',
      'تطوير تطبيقات هجينة (Hybrid) ومتوافقة مع جميع الأنظمة',
      'تحسين أداء التطبيقات وتجربة المستخدم',
      'ربط التطبيقات بأنظمة الدفع والتوصيل والإشعارات الفورية'
    ],
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="appGrad1" x1="16" y1="4" x2="48" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BFFE"/>
            <stop offset="1" stopColor="#6C5CE7"/>
          </linearGradient>
          <linearGradient id="appGrad2" x1="20" y1="8" x2="44" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3DD8FF"/>
            <stop offset="1" stopColor="#A78BFA"/>
          </linearGradient>
        </defs>
        <rect x="18" y="6" width="28" height="52" rx="6" fill="url(#appGrad1)" opacity="0.15"/>
        <rect x="20" y="8" width="24" height="48" rx="5" stroke="url(#appGrad2)" strokeWidth="2" fill="none"/>
        <line x1="20" y1="16" x2="44" y2="16" stroke="url(#appGrad2)" strokeWidth="1.5" opacity="0.4"/>
        <line x1="20" y1="48" x2="44" y2="48" stroke="url(#appGrad2)" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="32" cy="52" r="2" fill="#00BFFE" opacity="0.6"/>
        <rect x="25" y="10" width="14" height="2" rx="1" fill="#00BFFE" opacity="0.4"/>
        <rect x="26" y="22" width="12" height="10" rx="3" fill="url(#appGrad1)" opacity="0.3"/>
        <path d="M30 27L35 27" stroke="#00BFFE" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 30" stroke="#00BFFE" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="26" y="36" width="12" height="3" rx="1.5" fill="#00BFFE" opacity="0.5"/>
        <rect x="26" y="41" width="8" height="3" rx="1.5" fill="#00BFFE" opacity="0.3"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'حلول البرمجيات وتطوير الأنظمة',
    description: [
      'تطوير أنظمة ERP و CRM لإدارة الأعمال بكفاءة',
      'برمجة أنظمة مخصصة للشركات والمؤسسات',
      'تطوير أنظمة ذكاء الأعمال وتحليل البيانات',
      'حلول الحوسبة السحابية والاستضافة'
    ],
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="softGrad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BFFE"/>
            <stop offset="1" stopColor="#7F00FE"/>
          </linearGradient>
          <linearGradient id="softGrad2" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3DD8FF"/>
            <stop offset="1" stopColor="#A78BFA"/>
          </linearGradient>
        </defs>
        <rect x="8" y="12" width="48" height="40" rx="4" fill="url(#softGrad1)" opacity="0.15"/>
        <rect x="10" y="14" width="44" height="36" rx="3" stroke="url(#softGrad2)" strokeWidth="2" fill="none"/>
        <rect x="14" y="20" width="16" height="3" rx="1.5" fill="#00BFFE" opacity="0.6"/>
        <rect x="14" y="26" width="12" height="3" rx="1.5" fill="#00BFFE" opacity="0.4"/>
        <rect x="14" y="32" width="14" height="3" rx="1.5" fill="#00BFFE" opacity="0.5"/>
        <rect x="34" y="20" width="14" height="3" rx="1.5" fill="#7F00FE" opacity="0.6"/>
        <rect x="34" y="26" width="10" height="3" rx="1.5" fill="#7F00FE" opacity="0.4"/>
        <rect x="34" y="32" width="12" height="3" rx="1.5" fill="#7F00FE" opacity="0.5"/>
        <circle cx="32" cy="42" r="2" fill="#00BFFE" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'إنترنت الأشياء (IoT)',
    description: [
      'تطوير حلول IoT متكاملة للمنازل والشركات',
      'تصميم أجهزة ذكية متصلة بالإنترنت',
      'تطوير أنظمة تحكم ومراقبة عن بعد',
      'تكامل الأجهزة مع تطبيقات الجوال والمنصات السحابية'
    ],
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="iotGrad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BFFE"/>
            <stop offset="1" stopColor="#00D4AA"/>
          </linearGradient>
          <linearGradient id="iotGrad2" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3DD8FF"/>
            <stop offset="1" stopColor="#6FE5C0"/>
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="20" fill="url(#iotGrad1)" opacity="0.12"/>
        <circle cx="32" cy="32" r="18" stroke="url(#iotGrad2)" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="32" r="3" fill="#00BFFE"/>
        <circle cx="20" cy="20" r="4" stroke="url(#iotGrad2)" strokeWidth="2" fill="none"/>
        <circle cx="44" cy="20" r="4" stroke="url(#iotGrad2)" strokeWidth="2" fill="none"/>
        <circle cx="20" cy="44" r="4" stroke="url(#iotGrad2)" strokeWidth="2" fill="none"/>
        <circle cx="44" cy="44" r="4" stroke="url(#iotGrad2)" strokeWidth="2" fill="none"/>
        <line x1="32" y1="32" x2="20" y2="20" stroke="url(#iotGrad2)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="32" y1="32" x2="44" y2="20" stroke="url(#iotGrad2)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="32" y1="32" x2="20" y2="44" stroke="url(#iotGrad2)" strokeWidth="1.5" opacity="0.6"/>
        <line x1="32" y1="32" x2="44" y2="44" stroke="url(#iotGrad2)" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'الذكاء الاصطناعي (AI)',
    description: [
      'إنشاء منصة متكاملة تقدم خدمات الذكاء الاصطناعي بسعر منافس',
      'إنشاء قواعد بيانات تخص العملاء',
      'تطوير حلول تعلم الآلة وتحليل البيانات',
      'بناء نماذج ذكاء اصطناعي مخصصة لاحتياجات العمل'
    ],
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiGrad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BFFE"/>
            <stop offset="1" stopColor="#FF6B6B"/>
          </linearGradient>
          <linearGradient id="aiGrad2" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3DD8FF"/>
            <stop offset="1" stopColor="#FF8E8E"/>
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="20" fill="url(#aiGrad1)" opacity="0.12"/>
        <circle cx="32" cy="32" r="18" stroke="url(#aiGrad2)" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="26" r="6" stroke="#00BFFE" strokeWidth="2" fill="url(#aiGrad1)" opacity="0.2"/>
        <circle cx="32" cy="26" r="2" fill="#00BFFE"/>
        <path d="M22 38C22 34 26.5 31 32 31C37.5 31 42 34 42 38" stroke="#00BFFE" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="18" cy="18" r="3" stroke="url(#aiGrad2)" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="46" cy="18" r="3" stroke="url(#aiGrad2)" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="18" cy="46" r="3" stroke="url(#aiGrad2)" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="46" cy="46" r="3" stroke="url(#aiGrad2)" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <line x1="20" y1="20" x2="27" y2="25" stroke="url(#aiGrad2)" strokeWidth="1" opacity="0.4"/>
        <line x1="44" y1="20" x2="37" y2="25" stroke="url(#aiGrad2)" strokeWidth="1" opacity="0.4"/>
        <line x1="20" y1="44" x2="26" y2="37" stroke="url(#aiGrad2)" strokeWidth="1" opacity="0.4"/>
        <line x1="44" y1="44" x2="38" y2="37" stroke="url(#aiGrad2)" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'بناء التطبيقات والبرامج',
    description: [
      'تطوير برامج مخصصة للشركات والمؤسسات',
      'بناء تطبيقات سطح المكتب والويب',
      'تطوير حلول برمجية متكاملة',
      'برمجة واجهات مستخدم احترافية وتجربة مستخدم مميزة'
    ],
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="buildGrad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00BFFE"/>
            <stop offset="1" stopColor="#FF6B6B"/>
          </linearGradient>
          <linearGradient id="buildGrad2" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3DD8FF"/>
            <stop offset="1" stopColor="#FF8E8E"/>
          </linearGradient>
        </defs>
        <rect x="8" y="12" width="48" height="40" rx="4" fill="url(#buildGrad1)" opacity="0.15"/>
        <rect x="10" y="14" width="44" height="36" rx="3" stroke="url(#buildGrad2)" strokeWidth="2" fill="none"/>
        <rect x="14" y="20" width="36" height="20" rx="2" fill="url(#buildGrad1)" opacity="0.2"/>
        <rect x="18" y="24" width="28" height="12" rx="1" fill="url(#buildGrad2)" opacity="0.3"/>
        <line x1="22" y1="28" x2="42" y2="28" stroke="#00BFFE" strokeWidth="1.5"/>
        <line x1="22" y1="32" x2="38" y2="32" stroke="#00BFFE" strokeWidth="1.5"/>
        <rect x="14" y="44" width="8" height="4" rx="1" fill="#00BFFE" opacity="0.6"/>
        <rect x="26" y="44" width="8" height="4" rx="1" fill="#7F00FE" opacity="0.6"/>
        <rect x="38" y="44" width="8" height="4" rx="1" fill="#FF6B6B" opacity="0.6"/>
      </svg>
    ),
  },
];

const ServiceCard = ({ service, index }) => {
  const accentColors = ['#00BFFE', '#7F00FE', '#00D4AA', '#FF6B6B'];
  const color = accentColors[index % accentColors.length];

  return (
    <div
      className="service-card group relative rounded-2xl p-8 text-white 
      overflow-hidden max-w-md backdrop-blur-lg bg-white/10 border border-white/20 h-[450px] lg:h-[500px]
       flex flex-col justify-center items-center mb-5"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Glow border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(0,191,254,0.15), rgba(0,143,245,0.05))',
        }}
      />

      {/* Icon */}
      <div className="relative z-10 mb-6 service-icon">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,191,254,0.1), rgba(0,143,245,0.05))',
            border: '1px solid rgba(0,191,254,0.15)',
          }}
        >
          {service.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-center leading-[2] text-white text-xl font-bold mb-6">
        {service.title}
      </h3>

      {/* Description with scrollbar */}
      <div className="relative z-10 flex-1 overflow-y-auto max-h-[350px] pl-4 pr-2 custom-scroll">
        <ul className="space-y-3 text-[#9CA3AF] text-[15px] leading-relaxed font-tajwal text-right">
          {service.description.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#00BFFE] mt-1 flex-shrink-0">•</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesCarousel = () => {
  return (
    <section id='services' className={`${styles.paddingY} flex justify-center items-center z-10 relative min-h-[100vh] bg-dark`}>
        <div className={`${styles.container}`}>
          {/* Decorative element */}
          <div className='absolute bottom-5 -right-16'>
            <svg width="50" height="50" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M46.6706 46.2431L43.0068 83.5083L82.591 75.5361L84.2852 39.5287L46.6706 46.2431ZM81.069 73.8538L56.6996 78.7616L58.5393 60.1345L81.9414 55.3124L81.069 73.8538ZM57.0742 58.4535L55.0335 79.0946L44.8772 81.1394L48.1436 47.9263L82.5833 41.7792L82.0412 53.3054L57.0742 58.4535Z" fill="#1E2CFB"/>
              <path d="M35.7562 35.8744L29.602 97.3188L41.0393 113.034L106.151 101.422L108.299 39.9729L96.5079 23.7637L35.7562 35.8744ZM41.1674 111.045L31.7323 98.081L93.435 85.7606L104.029 99.8343L41.1674 111.045ZM92.7199 83.9266L31.359 96.1743L37.2276 37.5585L95.5885 25.9296L92.7199 83.9266ZM106.709 39.9631L104.653 98.5586L94.2745 84.7702L97.1302 26.8071L106.709 39.9631Z" fill="#1E2CFB"/>
              <path d="M104.029 99.8343L41.1676 111.045L31.7325 98.081L93.4368 85.7631L104.029 99.8343Z" fill="#1E2CFB"/>
              <path d="M97.1414 26.8076L106.714 39.9604L104.661 98.5541L94.2826 84.7657L97.1414 26.8076Z" fill="#1E2CFB"/>
              <path d="M37.2308 37.5632L31.3621 96.1789L92.7326 83.9259L95.5997 25.9297L37.2308 37.5632ZM82.5908 75.5358L43.0066 83.5079L46.6704 46.2427L84.285 39.5283L82.5908 75.5358Z" fill="#F2FF43"/>
              <path d="M82.5832 41.7926L82.0411 53.3188L57.0741 58.467L55.0334 79.108L44.8771 81.1528L48.1435 47.9397L82.5832 41.7926Z" fill="#1E2CFB"/>
            </svg>
          </div>

          {/* Title */}
          <Paragraph className='text-white text-[25px] max-w-[650px] relative mb-12'>
            في <span className='text-blue'>أيدفل تكنولوجي </span> قيمنا هي سر تميزنا  نبتكر  نحمي بياناتك ونقدم لك أفضل جودة  تشمل خدماتنا الأساسية 
          </Paragraph>

          {/* Services Carousel */}
          <div className="w-full">
            <div className="relative">
              {/* Gradient masks for smooth fade effect */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-dark via-dark/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark via-dark/80 to-transparent z-20 pointer-events-none" />
              
              <Swiper
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                /*
                 autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={800}
                */
                
                allowTouchMove={true}
                grabCursor={true}
                modules={[Pagination, Autoplay]}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                }}
                className="services-swiper"
                style={{
                  '--swiper-pagination-color': '#ffffff',
                  '--swiper-pagination-bullet-inactive-color': 'rgba(255, 255, 255, 0.3)',
                  '--swiper-pagination-bullet-inactive-opacity': '1',
                  padding: '2rem 0',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {servicesData.map((service, index) => (
                  <SwiperSlide key={service.id}>
                    <div className="service-card-wrapper px-2 h-full">
                      <div className="service-card-container w-full h-full">
                        <ServiceCard service={service} index={index} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ServicesCarousel;
