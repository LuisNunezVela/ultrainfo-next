"use client"
import Pretitle from './Pretitle'
import { motion } from "framer-motion"
import { fadeIn } from '../../variant'
import React from 'react'
import FaqItem from './FaqItem'

const faqItemsData = [
  {
    title: "How long does a construction project usually take?",
    description: "TimeLines vary based on project size and complexity.",
  },
  {
    title: "Necesito receta médica para realizarme los analisis?",
    description: "No, sin embbargo, es importante saber qué tienes para saber que tipo de examen sacar.",
  },
  {
    title: "How long does a construction project usually take?",
    description: "TimeLines vary based on project size and complexity.",
  },
  {
    title: "How long does a construction project usually take?",
    description: "TimeLines vary based on project size and complexity.",
  },
]

const faqItemVariants = {
  hidden: {opacity: 0, y:30},
  visible: ()=> ({
    opacity: 1,
    y:0,
    transition: { delay:index * 0.1, duration: 0.3}, //staggered animation
  }),
}

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="Faq" center />
          <h2 className="text-3xl mb-3">Got questions? we have got you covered</h2>
          <p className="mb-11 ma-w-[480px] mx-auto">
            From project planning to final touches, we've answered the most common questions to help you make informed decisions.
          </p>
        </div>
        <ul className="w-full flex flex-col">
          {faqItemsData.map ((item,index)=>{
            return <li key={index}>
              <FaqItem title={item.title} description={item.description}/>
            </li>
          })}
        </ul>
      </div>
    </section>
  )
}

export default Faq
