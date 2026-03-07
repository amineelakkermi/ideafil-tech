'use client'
import Image from "next/image"
import Link from "next/link"

import styles from "../style"
import Paragraph from "./Paragraph"

import HorizontalPortfolio from "./HorizontalPortfolio"
import Title from "./Title"



const Works1 = () => {

 
  return (
    <section 
      id="portfolio" 
      className={`${styles.paddingY} min-h-[100vh] bg-dark relative`}
    >

      {/* Header */}
      <div className={`${styles.container}`}>
        <div className="w-full flex flex-col lg:flex-row gap-5 justify-between items-center">
          
          <Title className="text-gradient text-[36px] lg:text-[52px] font-extrabold font-tajwal leading-tight">
          معرض أعمـــالنا
          </Title>
          
          <Paragraph className=" text-white 
          max-w-[500px]
          text-center lg:text-right">
          استكشف مجموعة من المشاريع التي قمنا بتصميمها وتطويرها لعملائنا :
          </Paragraph>
        </div>
       
      </div>


      <HorizontalPortfolio />
       
     
    </section>
  )
}

export default Works1
