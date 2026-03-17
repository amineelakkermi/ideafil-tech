'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Home } from 'lucide-react'

import styles from "../style"
import Paragraph from "../components/Paragraph"
import Title from "../components/Title"
import { worksData } from "../data/worksData"
import HorizontalPortfolio from "../components/PortfolioWorks"
import AllPortfolioWorks from "../components/AllPortfolioWorks"

const accentColors = ['#050519', '#7F00FE', '#5e0a0b', '#FF6B6B', '#1e2735', '#542200', '#cec8b4ff']

const PortfolioCard = ({ work, index }) => {
  const color = accentColors[index % accentColors.length]

  return (
    <div
      className="portfolio-card group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Animated border glow */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `linear-gradient(135deg, ${color}50, transparent 40%, transparent 60%, ${color}50)`,
        }}
      />

      {/* Card inner */}
      <div className="relative z-10 p-3 rounded-2xl overflow-hidden bg-[#0a0a1a] border border-white/[0.06] 
      group-hover:border-transparent transition-all duration-500">
        
        {/* Image container */}
        <div className="relative h-[200px] sm:h-[250px] overflow-hidden rounded-xl mb-4">
          <Image
            src={work.img}
            alt={work.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-3 right-3">
            <div className="px-3 py-1 rounded-full text-xs font-tajwal font-bold"
              style={{
                backgroundColor: `${color}20`,
                color: color,
                border: `1px solid ${color}40`
              }}>
              {work.category}
            </div>
          </div>

          {/* Hover pill */}
          <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-tajwal font-bold bg-white/10 backdrop-blur-md border border-white/20">
              <span>تفاصيل المشروع</span>
              <ArrowLeft className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-2">
          <h3 className="text-white text-lg font-tajwal font-bold mb-2">{work.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {work.technologies.slice(0, 2).map((tech, i) => (
              <span key={i} className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-white/50">
            <span>{work.duration}</span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              {work.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const WorksPage = () => {
  return (
    <section 
      className={`${styles.paddingY} min-h-[100vh] bg-dark relative`}
    >
      <div className={`${styles.container}`}>
        {/* Header */}
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-between items-center mb-12">
          
          <Title className="text-gradient text-[36px] lg:text-[52px] font-extrabold font-tajwal leading-tight">
          جميع الأعمال
          </Title>
          
          <Link 
            href='/' 
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full text-white font-tajwal font-bold
            border border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300
            hover:scale-105 hover:shadow-xl hover:shadow-white/10"
          >
            <Home className="w-5 h-5" />
            <span>العودة للرئيسية</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
       
        <AllPortfolioWorks />
      </div>
    </section>
  )
}

export default WorksPage
