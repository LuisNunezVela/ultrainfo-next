import React from 'react'
import Pretitle from './Pretitle'

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center ">
          {/* Texto */}
          <div className="flex-1">
            <div className="px-4 xl:px-0">
              <Pretitle text="quiénes somos" />
              <h2 className="h2 mb-6 lg:text-3xl  ">
                Transformando el análisis de ultrasonido con tecnología de vanguardia
              </h2>
              <p className="mb-11 text-negro lg:text-3xl text-justify  ">
                Somos una empresa especializada en el desarrollo de soluciones basadas en inteligencia artificial para el sector salud. Nuestra plataforma fue creada para agilizar el proceso de análisis de ecografías, ayudando a médicos y clínicas a ofrecer diagnósticos más rápidos, confiables y con menos margen de error.
              </p>
            </div>
          </div>
          {/* Imagen */}
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px]  relative ">
              <img
                src="/about.jpg"
                alt="Imagen de la empresa"
                className="object-cover rounded-md shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

        
    </div>
  )
}

export default About
