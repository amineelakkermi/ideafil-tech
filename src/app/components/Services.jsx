import React from 'react'
import styles from '../style'
import Paragraph from './Paragraph'

const services = [
  {
    title: 'تصميم و تطوير المواقع',
    description: 'مواقع احترافية سريعة ومتجاوبة تعكس هوية علامتك التجارية',
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
    title: 'تطوير تطبيقات الجوال',
    description: 'تطبيقات ذكية لأنظمة iOS و Android بأداء عالي وتجربة سلسة',
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
    title: 'خدمات الذكاء الاصطناعي',
    description: 'حلول ذكية مدعومة بالذكاء الاصطناعي لتحسين أعمالك وأتمتة عملياتك',
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
]

const Services = () => {
  return (
    <section id='services' className={`${styles.paddingY} flex justify-center items-center z-10 relative min-h-[100vh] bg-dark`}>
    <div className={`${styles.container}`}>
     <div className='absolute -top-5 -right-16'>
    <svg width="50" height="50" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.6706 46.2431L43.0068 83.5083L82.591 75.5361L84.2852 39.5287L46.6706 46.2431ZM81.069 73.8538L56.6996 78.7616L58.5393 60.1345L81.9414 55.3124L81.069 73.8538ZM57.0742 58.4535L55.0335 79.0946L44.8772 81.1394L48.1436 47.9263L82.5833 41.7792L82.0412 53.3054L57.0742 58.4535Z" fill="#1E2CFB"/>
    <path d="M35.7562 35.8744L29.602 97.3188L41.0393 113.034L106.151 101.422L108.299 39.9729L96.5079 23.7637L35.7562 35.8744ZM41.1674 111.045L31.7323 98.081L93.435 85.7606L104.029 99.8343L41.1674 111.045ZM92.7199 83.9266L31.359 96.1743L37.2276 37.5585L95.5885 25.9296L92.7199 83.9266ZM106.709 39.9631L104.653 98.5586L94.2745 84.7702L97.1302 26.8071L106.709 39.9631Z" fill="#1E2CFB"/>
    <path d="M104.029 99.8343L41.1676 111.045L31.7325 98.081L93.4368 85.7631L104.029 99.8343Z" fill="#1E2CFB"/>
    <path d="M97.1414 26.8076L106.714 39.9604L104.661 98.5541L94.2826 84.7657L97.1414 26.8076Z" fill="#1E2CFB"/>
    <path d="M37.2308 37.5632L31.3621 96.1789L92.7326 83.9259L95.5997 25.9297L37.2308 37.5632ZM82.5908 75.5358L43.0066 83.5079L46.6704 46.2427L84.285 39.5283L82.5908 75.5358Z" fill="#F2FF43"/>
    <path d="M82.5832 41.7926L82.0411 53.3188L57.0741 58.467L55.0334 79.108L44.8771 81.1528L48.1435 47.9397L82.5832 41.7926Z" fill="#1E2CFB"/>
    </svg>
    </div>
    <Paragraph className='text-white text-[25px] max-w-[650px]  relative'>
    في <span className='text-blue'>أيدفل تك </span> قيمنا هي سر تميزنا , نبتكر , نحمي بياناتك ونقدم لك أفضل جودة , تشمل خدماتنا الأساسية :
    </Paragraph>

    {/* Service Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-card group relative rounded-2xl p-8 flex flex-col items-center text-center cursor-pointer"
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
          <h3 className="relative z-10 text-white text-xl font-bold mb-3 font-tajwal">
            {service.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 text-[#9CA3AF] text-[15px] leading-relaxed font-tajwal">
            {service.description}
          </p>
        </div>
      ))}
    </div>

    </div>
    </section>
  )
}

export default Services