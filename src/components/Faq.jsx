"use client"
import Pretitle from './Pretitle'
import { motion } from "framer-motion"
import { fadeIn } from '../../variant'
import React from 'react'
import FaqItem from './FaqItem'

const faqItemsData = [
  {
    title: "¿Qué tipo de ecografías analiza la plataforma?",
    description: "Actualmente nos enfocamos en ecografías obstétricas (embarazo), aunque nuestro sistema está en constante evolución para cubrir más tipos de estudios en el futuro.",
  },
  {
    title: "¿La inteligencia artificial reemplaza al médico?",
    description: "No. Nuestra plataforma está diseñada como una herramienta de apoyo diagnóstico. El informe generado por IA debe ser revisado y validado por un profesional de la salud.",
  },
  {
    title: "¿Es necesario instalar software?",
    description: "No. Todo funciona desde nuestra plataforma web segura. Solo necesitas conexión a internet y una cuenta activa para empezar a usar el servicio.",
  },
  {
    title: " ¿Los datos de los pacientes están protegidos?",
    description: "Sí. Cumplimos con los más altos estándares de seguridad y confidencialidad, incluyendo normativas como HIPAA y GDPR. La información médica está cifrada y protegida.",
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
      <div className="container mx-auto px-4 xl:px-0">
        <div className="text-center mx-auto xl:mb-20">
          <Pretitle text="Faq" center />
          <h2 className="text-3xl mb-3 ">Got questions? we have got you covered</h2>
          <p className="mb-11  mx-auto text-justify text-negro text-xl lg:text-2xl lg:text-center">
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
