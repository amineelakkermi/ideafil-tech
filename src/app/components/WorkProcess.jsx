import React from 'react'
import styles from '../style'
import Paragraph from './Paragraph'
import Title from './Title'

const steps = [
  {
    number: '01',
    title: 'الاكتشاف والتحليل',
    description: 'نفهم أهدافك ونحلل احتياجات مشروعك بدقة لوضع خطة واضحة',
    color: '#00BFFE',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M11 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'التصميم والنمذجة',
    description: 'نصمم واجهات احترافية وتجربة مستخدم سلسة تناسب جمهورك',
    color: '#7F00FE',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'التطوير والبرمجة',
    description: 'نبني مشروعك بأحدث التقنيات مع ضمان الأداء والجودة العالية',
    color: '#00D4AA',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="14" y1="4" x2="10" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'الإطلاق والدعم',
    description: 'نطلق مشروعك ونقدم دعماً مستمراً لضمان نجاحه واستمراريته',
    color: '#FF6B6B',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5C3 18 3 20.5 3 20.5S5.5 20.5 7 19C7.8 18.2 7.8 16.9 7 16.1C6.2 15.3 4.9 15.3 4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5 4L18 2L22 6L20 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 6L6 10L14 18L18 14L10 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 15L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

const WorkProcess = () => {
  return (
    <section className={` relative min-h-[100vh] bg-dark overflow-hidden`}>
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #008FF5, transparent 70%)' }}
        />
      </div>

      <div className={`${styles.container}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#00BFFE] text-sm font-semibold tracking-wider font-tajwal mb-4 px-4 py-2 rounded-full"
            style={{
              background: 'rgba(0,191,254,0.08)',
              border: '1px solid rgba(0,191,254,0.15)',
            }}
          >
            كيف نعمل
          </span>
          <Title className="text-gradient text-[36px] lg:text-[52px] font-extrabold font-tajwal leading-tight mt-4">
            رحلة مشروعك معنا
          </Title>
         
          <Paragraph className="mt-5 text-gray-300">
         نتبع منهجية واضحة ومنظمة لتحويل أفكارك إلى واقع رقمي متميز

          </Paragraph>
        </div>

        {/* Steps Grid */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[60px] right-[10%] left-[10%] h-[2px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(0,191,254,0.2) 20%, rgba(127,0,254,0.2) 50%, rgba(0,212,170,0.2) 80%, transparent)',
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="process-step group relative flex flex-col items-center text-center"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number circle */}
                <div className="relative mb-8">
                  {/* Outer ring */}
                  <div 
                    className="w-[120px] h-[120px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}10, ${step.color}05)`,
                      border: `2px solid ${step.color}25`,
                    }}
                  >
                    {/* Inner circle with icon */}
                    <div 
                      className="w-[80px] h-[80px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}08)`,
                        border: `1px solid ${step.color}30`,
                        color: step.color,
                        boxShadow: `0 0 0 0 ${step.color}00`,
                      }}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Floating number badge */}
                  <div 
                    className="absolute -top-2 -left-2 w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: step.color,
                      color: '#fff',
                      boxShadow: `0 4px 20px ${step.color}50`,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Connector dot (desktop) */}
                  {index < steps.length - 1 && (
                    <div 
                      className="hidden lg:block absolute top-[60px] -left-3 w-3 h-3 rounded-full"
                      style={{ 
                        background: step.color,
                        boxShadow: `0 0 10px ${step.color}60`,
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <h3 
                  className="text-white text-[20px] font-bold font-tajwal mb-3 transition-all duration-300"
                  style={{ '--step-color': step.color }}
                >
                  <span className="group-hover:text-[var(--step-color)] transition-colors duration-300">
                    {step.title}
                  </span>
                </h3>
                <p className="text-white/40 text-[15px] font-tajwal leading-relaxed max-w-[220px]">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div 
                  className="w-0 h-[3px] rounded-full mt-6 transition-all duration-500 group-hover:w-12"
                  style={{ background: step.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess