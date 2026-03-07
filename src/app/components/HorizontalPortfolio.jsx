'use client'

import Image from "next/image"
import Link from "next/link"
import { worksData } from "../data/worksData"
import styles from "../style"

const accentColors = ['#00BFFE', '#7F00FE', '#00D4AA', '#FF6B6B']

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
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl flex items-center justify-center bg-[#0a0a1a]">
          <Image
            src={work.img}
            alt={work.title}
            className="w-full h-[95%] object-contain transition-all duration-700 group-hover:scale-105"
          />

          {/* Top gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Corner accent */}
          <div
            className="absolute top-4 left-4 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-100 scale-50 flex items-center justify-center"
            style={{ background: color, boxShadow: `0 0 20px ${color}60` }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Content overlay (bottom) */}
          <div className="absolute bottom-0 right-0 left-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex items-end justify-between gap-3">
              {/* Title */}
              <div>
                <h3 className="text-white text-lg md:text-xl font-bold font-tajwal drop-shadow-lg">
                  {work.title}
                </h3>
                <div className="h-[2px] w-0 group-hover:w-12 transition-all duration-700 mt-1 rounded-full" style={{ background: color }} />
              </div>

              {/* Detail pill */}
              <span
                className="flex-shrink-0 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 group-hover:bg-white/20 transition-all duration-300"
              >
                <span className="text-white/90 text-sm font-tajwal">تفاصيل المشروع</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom info bar */}
        <div className="px-5 py-4 flex items-center justify-between border-t border-white/[0.04]">
          <h4 className="text-white/70 text-[15px] font-semibold font-tajwal group-hover:text-white transition-colors duration-300">
            {work.title}
          </h4>
          <div
            className="w-2 h-2 rounded-full transition-all duration-500 group-hover:shadow-lg"
            style={{ background: `${color}60`, boxShadow: `0 0 0px ${color}00` }}
          />
        </div>
      </div>
    </div>
  )
}

const HorizontalPortfolio = () => {
  return (
    <div
      id="portfolio"
      className={`relative overflow-hidden bg-dark ${styles.padding}`}
    >
      <div dir="rtl" className={`${styles.container} mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6`}>
        {worksData.map((work, index) => (
          <Link key={work.id} href={`/works/${work.slug}`}>
            <PortfolioCard work={work} index={index} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HorizontalPortfolio
