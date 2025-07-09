"use client";
import React from 'react'
import { useRef } from 'react';
import {useInView} from "framer-motion"; 
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 98,
    endCountText: "%",
    text: "Satisfacción del Cliente",
  },
  {
    endCountNum: 800,
    endCountText: "+",
    text: "Análisis Realizados",
  },

  {
    endCountNum: 15,
    endCountText: "+",
    text: "Años de Experiencia",
  },
]


const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {threshold:0.2});
  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-verde py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">{statsData.map((item,index)=>{
          return <div className="w-full" key={index}>
            <div className="text-5xl font-semibold">
              {inView &&(<CountUp
                start={0}
                end={item.endCountNum}
                delay={0.2}
                duration={3}/>
              )}
              <span>{item.endCountText}</span>
          </div>
          <p>{item.text}</p>
          </div>
        })}</div>
      </div>
    </div>
  )
}

export default Stats
