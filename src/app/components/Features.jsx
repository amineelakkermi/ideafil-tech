import styles from '../style'

const features = [
  {
    title: 'حلول مخصصة',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'دعم سريع',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'أمان عالي',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const Features = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0077B6 0%, #00B4D8 50%, #0093B5 100%)',
        }}
      />

      {/* Subtle animated shine */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          animation: 'featureShine 3s ease-in-out infinite',
        }}
      />

      <div className={`${styles.padding} relative z-10 py-5`}>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-item group flex gap-4 items-center cursor-default"
            >
              {/* Icon container */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <h4 className="text-[17px] text-white font-semibold font-tajwal tracking-wide transition-all duration-300 group-hover:translate-x-[-4px]">
                {feature.title}
              </h4>

              {/* Separator (hidden on last item) */}
              {index < features.length - 1 && (
                <div className="hidden lg:block w-px h-8 bg-white/20 mr-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features