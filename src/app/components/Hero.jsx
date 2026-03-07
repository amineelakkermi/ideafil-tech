import Image from 'next/image'
import styles from '../style';
import BigTitle from './BigTitle';
import Paragraph from './Paragraph';


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

      
    </div>
     

    <div className='circle1 opacity-80' />
  
    

  
    
   
    
       

    
   

    </section>
  )
}

export default Hero