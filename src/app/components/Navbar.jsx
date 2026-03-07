'use client';

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { name: 'الرئيسيــة', href: '#stats' },
  { name: 'خدماتنــا', href: '#services' },
  { name: 'معرض الأعمال', href: '#portfolio' },
  { name: 'تواصل معنا', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const mobileListRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  // Handle hash navigation when component mounts or pathname changes
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      const element = document.querySelector(hash);
      if (element) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);

  // Gérer le scroll pour changer le fond
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };
    // Écouter les clics sur les liens
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      link.addEventListener('click', handleRouteChange);
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleRouteChange);
      });
    };
  }, []);

  // Gérer l'animation du menu mobile
  useEffect(() => {
    if (!mobileMenuRef.current || !mobileListRef.current) return;

    const items = mobileListRef.current.querySelectorAll('li');
    
    if (open) {
      setIsAnimating(true);
      // Animation des items avec délai
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, index * 100);
      });
    } else {
      // Animation de fermeture
      items.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
      });
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  }, [open]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (href.startsWith('#')) {
      // If we're not on the home page, navigate there first
      if (pathname !== '/') {
        router.push('/' + href);
        return;
      }
      
      // If we're already on home page, just scroll to the section
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (href.startsWith('/#')) {
      const hash = href.replace('/#', '#');
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    router.push(href);
  };

  const linkClasses = (href) => {
    const isActive = pathname === href.split('#')[0];
    return `relative transition-all duration-300 hover:opacity-80 ${
      scrolled ? 'text-white' : 'text-white'
    } ${isActive ? (scrolled ? 'opacity-100' : 'opacity-100') : 'opacity-90'} group`;
  };

  return (
    <>
      <style jsx>{`
        @keyframes menuOpen {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes menuClose {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-100%);
          }
        }
        
        @keyframes itemIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-menu-open {
          animation: menuOpen 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-menu-close {
          animation: menuClose 0.3s ease-in forwards;
        }
        
        .animate-item-in {
          animation: itemIn 0.3s ease-out forwards;
        }

        @keyframes glowIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-glow-in {
          animation: glowIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <nav
        dir="rtl"
        className={`sticky border-b border-white/10 top-0 left-0 right-0 z-[999] transition-all duration-300 
          bg-dark
          `}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-[80px] lg:h-[90px] flex items-center justify-between relative">

            {/* Mobile Menu Button (always left) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 z-[1000]"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              <svg
                className={`w-7 h-7 text-white transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16" />
                )}
              </svg>
            </button>

            {/* Logo Right */}
            <Link href='/' className="flex items-center min-w-[150px]">
              <Image
                src="/main/logo1.png"
                alt="Ideafil Logo Arabic"
                width={200}
                height={80}
                className={`${open ? "opacity-0 scale-95" : "opacity-100 scale-100"} w-[150px] lg:w-[200px] transition-all duration-300`}
                priority
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-16 font-medium">
              {navLinks.slice(0,3).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={linkClasses(link.href)}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-purple-300">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* Logo Left + Mobile Button Container */}
            <div className="flex items-center justify-start min-w-[150px] gap-4">
              {/* CTA Button */}
             <Link
             href={'#contact'}
             className="hidden md:flex items-center justify-center w-full py-2.5 rounded-[8px] font-semibold
            text-white text-lg font-tajwal relative overflow-hidden transition-all duration-300
            hover:shadow-[0_0_30px_rgba(0,143,245,0.3)] active:scale-[0.98]"
             style={{
             background: 'linear-gradient(135deg, #008FF5 0%, #0070DD 100%)',
             }}>
  
             {/* Glow overlay */}
             <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

             {/* Text */}
             <span className="relative z-10 flex items-center gap-2">
               تواصل معنا  
             </span>
            </Link>

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {(open || isAnimating) && (
          <div
            ref={mobileMenuRef}
            className={`fixed inset-0 z-[9999] flex flex-col ${
              !open && isAnimating ? 'animate-menu-close' : ''
            }`}
            style={{ background: '#050519' }}
            onClick={(e) => {
              if (e.target === mobileMenuRef.current) {
                setOpen(false);
              }
            }}
          >
            {/* Ambient glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #008FF5 0%, transparent 70%)' }}
              />
              <div 
                className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-15"
                style={{ background: 'radial-gradient(circle, #7F00FE 0%, transparent 70%)' }}
              />
              {/* Subtle grid pattern */}
              <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between px-6 pt-8">
              <div>
                <Image
                  src="/main/logo1.png"
                  alt="Ideafil Logo Arabic"
                  width={120}
                  height={50}
                  className="object-contain"
                />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Fermer le menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <nav 
              aria-label="Main navigation" 
              className="relative z-10 flex-1 flex flex-col justify-center px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <ul ref={mobileListRef} className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <li 
                    key={link.name} 
                    className="opacity-0 translate-y-5 transition-all duration-500"
                    style={{
                      opacity: open ? 1 : 0,
                      transform: open ? 'translateY(0)' : 'translateY(20px)',
                      transitionDelay: open ? `${150 + index * 100}ms` : '0ms',
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="group flex items-center gap-4 py-5 px-5 rounded-2xl transition-all duration-300 hover:bg-white/5"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(0,143,245,0.15), rgba(127,0,254,0.1))',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <span className="text-[#00BFFE] text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-[22px] font-semibold font-tajwal transition-all duration-300 group-hover:text-[#00BFFE]">
                          {link.name}
                        </span>
                      </div>
                      <svg className="w-5 h-5 text-white/20 mr-auto transition-all duration-300 group-hover:text-[#00BFFE] group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>
                    {index < navLinks.length - 1 && (
                      <div className="mx-5 border-b border-white/5" />
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom CTA */}
            <div 
              className="relative z-10 px-8 pb-10 transition-all duration-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: open ? `${150 + navLinks.length * 100}ms` : '0ms',
              }}
            >
              <Link
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex items-center justify-center w-full py-4 rounded-xl font-semibold text-white text-lg font-tajwal relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,143,245,0.3)] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #008FF5 0%, #0070DD 100%)',
                }}
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">ابدأ مشروعك الآن</span>
              </Link>
              <p className="text-center text-white/30 text-sm mt-4 font-tajwal">أيدفل تك — حلول تقنية تصنع الفرق</p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
