'use client';

import Image from "next/image";
import logo1 from "../../../public/main/logo1.png";
import linkedin from "../../../public/socialMedia/linkedin.png";
import instagram from "../../../public/socialMedia/instagram.png";
import x from "../../../public/socialMedia/x.png";
import behance from "../../../public/socialMedia/behance.png";
import email from "../../../public/contactIcon/email.png";
import phone from "../../../public/contactIcon/phone.png";
import maps from "../../../public/contactIcon/maps.png";
import Link from "next/link";

const navLinks = [
  { name: 'الرئيسيــة', href: '/' },
  { name: 'الخدمات', href: '#services' },
  { name: 'معرض الأعمال', href: '#portfolio' },
];

const socialLinks = [
  { icon: behance, alt: 'Behance', href: 'https://www.behance.net/ideafilco1' },
  { icon: x, alt: 'X', href: 'https://x.com/Ideafilsa' },
  { icon: instagram, alt: 'Instagram', href: 'https://www.instagram.com/ideafil.sa/' },
  { icon: linkedin, alt: 'LinkedIn', href: 'https://www.linkedin.com/company/ideafil-co/' },
];

const Footer = () => {
  const scrollingText = 'IDEAFIL';
  const textItems = Array.from({ length: 20 }, () => scrollingText);
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <>
   

      <footer dir="rtl" className="relative text-white overflow-hidden bg-dark">

        {/* Ambient glow effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.08]"
            style={{ background: 'radial-gradient(circle, #00BFFE, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-40 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, #7F00FE, transparent 70%)' }}
          />
        </div>

     

        {/* Main footer content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">

          {/* Top section — CTA + Logo */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 mb-16">
            <div className="flex flex-col items-center lg:items-start">
              <Link href="/" className="group">
                <Image
                  src={logo1}
                  alt="Ideafil Logo"
                  height={80}
                  className="object-contain w-[160px] lg:w-[200px] transition-all duration-300 group-hover:brightness-125"
                />
              </Link>
              <p className="text-white/60 text-[15px] font-tajwal max-w-[300px] text-center lg:text-right leading-relaxed">
              شريكك التقني اللي يفهمك ويمشي معك خطوة بخطوة آیدفل تك هو خيارك الأول
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <span className="text-white/30 text-xs font-tajwal tracking-widest uppercase mb-2">روابط سريعة</span>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 text-[16px] font-medium font-tajwal"
                >
                  <span className="w-0 h-[1px] bg-[#00BFFE] group-hover:w-6 transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <span className="text-white/30 text-xs font-tajwal tracking-widest uppercase mb-2">تواصل معنا</span>

              <span className="flex items-center gap-3 text-white/70 text-[15px] font-tajwal">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <Image src={maps} alt="Location" width={16} height={16} className="object-contain opacity-60" />
                </span>
                الخبر ــ المملكة العربية السعودية
              </span>

              <a href="mailto:info@ideafil.co"
                className="flex items-center gap-3 text-white/70 hover:text-[#00BFFE] transition-colors duration-300 text-[15px] font-tajwal">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <Image src={email} alt="Email" width={16} height={16} className="object-contain opacity-60" />
                </span>
                info@ideafil.co
              </a>

              <a href="https://wa.me/966507747972" target="_blank" 
                className="flex items-center gap-3 text-white/70 hover:text-[#00BFFE] transition-colors duration-300 text-[15px] font-tajwal">
                <span className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}>
                  <Image src={phone} alt="Phone" width={16} height={16} className="object-contain opacity-60" />
                </span>
               <span dir="ltr"> +966 50 774 7972</span>
              </a>
            </div>
          </div>

          {/* Gradient divider */}
          <div className="h-[1px] w-full mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,191,254,0.25) 30%, rgba(127,0,254,0.25) 70%, transparent)' }}
          />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.alt}
                  target="_blank"
                  href={social.href}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-white/15"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.10)',
                  }}
                >
                  <Image
                    src={social.icon}
                    alt={social.alt}
                    width={18}
                    height={18}
                    className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-[14px] font-tajwal">
              جميع الحقوق محفوظة © {getCurrentYear()} Ideafil
            </p>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
