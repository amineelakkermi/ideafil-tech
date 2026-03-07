'use client'

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Image from "next/image"
import Link from "next/link"

import styles from "../style"
import Paragraph from "./Paragraph"

import conex from "../../../public/works/conex.png"
import meliha from "../../../public/works/meliha.png"
import rahafah from "../../../public/works/rahafah.png"
import gsa from "../../../public/works/gsa.png"
import vilack from "../../../public/works/vilack.png"
import behance from "../../../public/socialMedia/behance.png"
import HorizontalPortfolio from "./HorizontalPortfolio"
import Title from "./Title"



const Works1 = () => {

 
  return (
    <section 
      id="portfolio" 
      className={`${styles.paddingY} bg-dark relative`}
    >

      {/* Header */}
      <div className={`${styles.container}`}>
        <div className="w-full flex justify-between items-center">
          
          <Title className="text-gradient text-[36px] lg:text-[52px] font-extrabold font-tajwal leading-tight">
          معرض أعمـــالنا
          </Title>
          
          <Paragraph className="hidden sm:block text-white 
          max-w-[500px]
          text-[16px] lg:text-[20px] text-right">
          استكشف مجموعة من المشاريع التي قمنا بتصميمها وتطويرها لعملائنا :
          </Paragraph>
        </div>
       
      </div>


      <HorizontalPortfolio />
       
     
    </section>
  )
}

export default Works1
