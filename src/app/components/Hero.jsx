import Image from 'next/image'
import styles from '../style';
import BigTitle from './BigTitle';
import Paragraph from './Paragraph';
import stars from '../../../public/stars.png';


const Hero = () => {
  return (
    <section
    id="stats"
    className={`${styles.paddingX} bg-dark relative  
    z-50
    min-h-[90vh] text-white flex items-center justify-center`}  
    >
     
    <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

     
      <BigTitle title={<>
        مرحبا بك في
        <br />
       <span className='text-blue'> أيـــدفل تك</span>
        </>} />
    

      {/* Paragraphe */}
      <Paragraph className="mt-5 text-gray-300">
      الجناح التقني من مجموعة Ideafil , نقدم لكم حلول تقنية تصنع الفرق وتدفع أعمالكم للأمام 
      </Paragraph>

      
    </div>
     

    <div className='circle1 opacity-90' />
  
    

  
    
   

    {/* Stars */}
    <div 
      className="absolute overflow-hidden w-full h-[500px] pointer-events-none opacity-80 md:opacity-50"
      style={{
        mixBlendMode: 'color-dodge',
      }}
    >
      <Image
        src={stars}
        alt="stars"
        fill
        className="w-[100%] h-[100%] object-contain"
      />
    </div>

    
   

    </section>
  )
}

export default Hero