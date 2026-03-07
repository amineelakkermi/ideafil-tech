import Image from 'next/image'
import technologyBg from "../../../public/main/technologyBg.png";
import star from "../../../public/main/star.png";
import lock from "../../../public/main/lock.png";

import styles from '../style';
import Paragraph from './Paragraph';
import BigTitle from './BigTitle';
import Link from 'next/link';
import Title from './Title';

const Cta = () => {
  return (
    <section
      id="stats"
      className={`relative w-full min-h-[100vh]

      bg-dark  flex flex-col justify-center items-center`}
    >
    
    <div className={`w-[100%] min-h-[100%] z-10 absolute inset-0 opacity-60`}>
    <Image
    src={technologyBg}
    alt='technology background'
    className='object-cover'
    fill
    />
    </div>

    {/* Blue overlay */}
    <div className="absolute inset-0 z-10 bg-[#050d30]/70" />


      <div className={`${styles.container} ${styles.marginY} z-20`}>
        {/* Section Header */}
        <div className="text-center">
         
          <Title className={`${styles.title}`}>
           <span className='text-blue'>ابتكـــار - جـــودة</span>
           <br />
           أمــــان
          </Title>

          <Paragraph className="mt-5 text-gray-300 max-w-[600px] mx-auto text-center">
          ابدأ رحلتك الرقمية مع <a href="#contact" className='text-blue'>أيدفل تك</a>،
          واحصل على حلول تقنية مبتكرة وخدمات رقمية مصممة لتطوير أعمالك وتحقيق رؤيتك
         </Paragraph>
          
        </div>


        <div className='relative w-full flex  justify-center items-center'>
      
        <Image
        src={lock}
        alt='Lock image'
        className='object-cover rotate-6 w-[180px] sm:w-[220px] md:w-[300px] h-[180px] sm:h-[220px] md:h-[300px]'
        
       />

        <Image
        src={star}
        alt='Star image'
        className='object-cover -rotate-6 w-[180px] sm:w-[220px] md:w-[300px] h-[180px] sm:h-[220px] md:h-[300px]'        
       />
        </div>

       

          
      
      </div>
      

    </section>
  )
}

export default Cta