"use client"
import { RiArrowDownLine } from 'react-icons/ri';

import {motion} from "framer-motion"
import { fadeIn } from '../../variant';

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/70 to-black/70 z-10"></div>
      {/* Content container */}
      <div className="container mx-auto h-full flex items-center text-center relative ">
        <div className="z-20 text-blanco text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[1100px] px-2 xl:px-0 ">
            <motion.h1 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount:0.8}}
            className="h1 text-white mb-10">
              <span className="text-blanco">Análisis de Ultrasonido con inteligencia artificial</span>
            </motion.h1>
            <motion.p 
            variants={fadeIn("up",0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount:0.8}}
            className="text-blanco text-3xl p pb-15 ">Informes médicos más rápidos,
               precisos y confiables gracias a la tecnología más avanzada 
               en diagnóstico por imágenes.
            </motion.p>
            <div>
                <motion.button 
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount:0.8}}
                className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-verde "
                >
                  <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-blanco text-sm uppercase ">Descubre más
                  </div>
                  <div className="w-11 h-11 bg-blanco flex items-center justify-center ">
                  <RiArrowDownLine className="text-verde text-xl group-hover:scale-130 transition-all duration-200" />
                  </div>
                </motion.button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
