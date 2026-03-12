import Image from 'next/image'
import styles from '../style';
import BigTitle from './BigTitle';
import Paragraph from './Paragraph';
import { ArrowLeft, MessageCircle } from 'lucide-react';


const Hero = () => {
  return (
    <section
    id="stats"
    className={`${styles.paddingX} relative  
    min-h-[90vh]
    z-[998]
    text-white flex items-center justify-center`}  
    >
     
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

     
      <BigTitle title={<>
        مرحبا بك في
        <br className='hidden sm:block' />
       <span className='text-blue'> أيـــدفل تك</span>
        </>} />
    

      {/* Paragraphe */}
      <Paragraph className="mt-5 text-gray-300">
      الجناح التقني من مجموعة Ideafil , نقدم لكم حلول تقنية تصنع الفرق وتدفع أعمالكم للأمام 
      </Paragraph>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-10">
        <a
          href="#services"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#00BFFE] text-white font-tajwal font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,254,0.4)] hover:scale-105"
        >
          <span className="relative z-10">اكتشف خدماتنا</span>
          <ArrowLeft className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#00BFFE] to-[#0080FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>

        <a
          href="https://wa.me/966507747972"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 text-white font-tajwal font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:border-[#25D366] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-105"
        >
          <span className="relative z-10">تواصل معنا</span>
          <MessageCircle className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-[#25D366]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>

      
    </div>
     

    <div className='circle1 opacity-100' />
  
    

  
    
   
    
       

    
   

    </section>
  )
}

export default Hero