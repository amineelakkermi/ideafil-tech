'use client'

import { worksData } from '../../data/worksData'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Clock, Layers, Tag } from 'lucide-react'
import { notFound } from 'next/navigation'
import Navbar from '../../components/Navbar'

const accentColors = ['#050519', '#7F00FE', '#5e0a0b', '#FF6B6B', '#e0bcbcff', '#b94a00ff']


export default function WorkDetailClient({ slug }) {
  const work = worksData.find((w) => w.slug === slug)

  if (!work) {
    notFound()
  }

  const color = accentColors[(work.id - 1) % accentColors.length]

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: color }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Back button */}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 mb-12 group"
          >
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="font-tajwal text-sm">العودة للمشاريع</span>
          </Link>

          {/* Title area */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <a
                href={work.Url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-tajwal font-bold mb-6 border transition-all duration-300 hover:scale-105"
                style={{
                  color: color,
                  borderColor: `${color}30`,
                  background: `${color}10`,
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>زيارة الموقع</span>
              </a>
              <h1 className="text-5xl lg:text-7xl font-extrabold font-tajwal leading-tight">
                {work.title}
              </h1>
            </div>

          </div>

          {/* Project image */}
          <div className="relative group">
            <div
              className="absolute -inset-[1px] rounded-3xl opacity-60 blur-sm"
              style={{
                background: `linear-gradient(135deg, ${color}40, transparent 50%, ${color}40)`,
              }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0a0a1a] p-4">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden flex items-center justify-center bg-[#060616]">
                <Image
                  src={work.img}
                  alt={work.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Description - takes 2 cols */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl border border-white/[0.06] bg-[#0a0a1a] p-8 lg:p-10 h-full">
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-[60px]"
                  style={{ background: color }}
                />
                <h2 className="text-2xl font-bold font-tajwal mb-6 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15` }}
                  >
                    <Layers className="w-5 h-5" style={{ color: color }} />
                  </div>
                  نبذة عن المشروع
                </h2>
                <p className="text-white/60 text-lg leading-[2] font-tajwal">
                  {work.description}
                </p>
              </div>
            </div>

            {/* Info cards - 1 col */}
            <div className="flex flex-col gap-8">
              {/* Duration */}
              <div className="relative rounded-2xl border border-white/[0.06] bg-[#0a0a1a] p-8">
                <h3 className="text-lg font-bold font-tajwal mb-4 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15` }}
                  >
                    <Clock className="w-5 h-5" style={{ color: color }} />
                  </div>
                  مدة التنفيذ
                </h3>
                <p className="text-3xl font-extrabold font-tajwal" style={{ color: color }}>
                  {work.duration}
                </p>
              </div>

              {/* Technologies */}
              <div className="relative rounded-2xl border border-white/[0.06] bg-[#0a0a1a] p-8">
                <h3 className="text-lg font-bold font-tajwal mb-5 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15` }}
                  >
                    <Tag className="w-5 h-5" style={{ color: color }} />
                  </div>
                  التقنيات المستخدمة
                </h3>
                <div className="flex flex-wrap gap-3">
                  {work.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg text-sm font-tajwal font-medium border transition-all duration-300 hover:scale-105 cursor-default"
                      style={{
                        borderColor: `${color}25`,
                        background: `${color}08`,
                        color: `${color}`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other projects */}
          <div className="mt-24">
            <h2 className="text-3xl font-extrabold font-tajwal mb-10">مشاريع أخرى</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {worksData
                .filter((w) => w.slug !== work.slug)
                .map((otherWork, i) => {
                  const otherColor = accentColors[(otherWork.id - 1) % accentColors.length]
                  return (
                    <Link
                      key={otherWork.id}
                      href={`/works/${otherWork.slug}`}
                      className="group relative rounded-2xl overflow-hidden"
                    >
                      <div
                        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${otherColor}50, transparent 40%, transparent 60%, ${otherColor}50)`,
                        }}
                      />
                      <div className="relative z-10 rounded-2xl overflow-hidden bg-[#0a0a1a] border border-white/[0.06] group-hover:border-transparent transition-all duration-500 p-3">
                        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center bg-[#060616]">
                          <Image
                            src={otherWork.img}
                            alt={otherWork.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="px-4 py-3">
                          <h4 className="text-white/70 group-hover:text-white font-tajwal font-semibold transition-colors duration-300">
                            {otherWork.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
