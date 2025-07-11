"use client";
import React from 'react'
import { PiGraphFill } from 'react-icons/pi';
import { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import Image from "next/image";
import Pretitle from './Pretitle';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsClipboard2CheckFill } from "react-icons/bs";
import { TbShieldLockFilled } from "react-icons/tb";

const serviceData = [
  {
    name: "Análisis",
    icon: FaMagnifyingGlass ,
    title: "Análisis automático de ecografías obstétricas",
    description: "Interpretación asistida por IA para detectar marcadores clave durante el embarazo, con generación de informes listos para revisión médica.",
    serviceList: [
       "Detección automática de biometría fetal",
  "Identificación de marcadores de riesgo",
  "Generación de informes estructurados",
  "Análisis por trimestres del embarazo"
    ],
    thumbs:[{url: "/next.svg"}]
  },
  {
    name: "Integración",
    icon: PiGraphFill,
    title: "Integración con sistemas clínicos existentes",
    description: "Nuestra plataforma se adapta fácilmente a tus flujos de trabajo actuales, permitiendo exportar informes en PDF y conectarse a tu sistema HIS/PACS.",
    serviceList: [
      "Exportación directa a PDF",
      "Compatibilidad con HIS/PACS",
      "Envío automático de informes a expediente clínico",
    ],
    thumbs:[{url: "/globe.svg"}]
  },
  {
    name: "Atención",
    icon: BsClipboard2CheckFill,
    title: "Atención al paciente centrada en resultados",
    description:
      "Ofrecemos una experiencia clara, rápida y orientada al paciente para facilitar la entrega y consulta de resultados médicos desde cualquier dispositivo.",
    serviceList: [
      "Resultados accesibles desde el móvil",
      "Notificaciones cuando el informe esté listo",
      "Historial de estudios para seguimiento continuo",
      "Soporte para dudas sobre el informe recibido",
    ],
    thumbs:[{url: "/file.svg"}]
  },
  {
    name: "Plataforma",
    icon: TbShieldLockFilled,
    title: "Plataforma web segura y confidencial",
    description: "Accede desde cualquier dispositivo con conexión segura, cumpliendo con normativas de protección de datos de salud (como HIPAA / GDPR).",
    serviceList: [
      "Cumplimiento con normativas HIPAA y GDPR",
      "Acceso con doble autenticación",
      "Cifrado de extremo a extremo",
    ],
    thumbs:[{url: "/window.svg"}]
  },
]

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <section className="pt-16 xl:pt-32 px-4 xl:px-0" id="services">
      <div className="container mx-auto">
        <div className="text-center mx-auto mb-20 ">
          <Pretitle text="Nuestros servicios" center/>
          <h2 className="text-3xl mb-3">Soluciones que Proveemos</h2>
          <p className="mb-11 mx-auto text-negro lg:text-2xl text-justify text-xl xl:text-center">Offering tailored construction solutions, from planning to completion, with a focus on quality and innovation.

          </p>
        </div>

        {/*Tabs*/ }
      <Tabs 
      defaultValue="construction" 
      onValueChange={(value) => setActiveTab(value)}
      className="flex flex-col xl:flex-row w-full gap">
        <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
          {serviceData.map((item)=>{
            const Icon = item.icon;
            return ( 
            <TabsTrigger 
            key={item.name} 
            value={item.name} 
            className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none">
              <div className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                activeTab === item.name
                ? "bg-verde text-blanco"
                : "bg-negro text-blanco" 
              }`}>
                <Icon style={{ width: '35px', height: '35px' }} />
              </div>
              <div className="uppercase text-negro font-semibold tracking-[.6px] w-[100px] ml-16">{item.name}</div>
            </TabsTrigger>
            );
          })}
        </TabsList>
        {/* Tabs content*/}
        <div className="flex-1 bg-white shadow-custom xl:h-[490px] xl:p-[30px]">
          {serviceData.map((item)=>(
            <TabsContent key={item.name} value={item.name} className="m-0">
              <div className="flex flex-col md:flex-row gap-[30px]">
                {/* Imagenes*/ }
                <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                  {item.thumbs.map((thumb,index)=>
                  <div key={index} className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]">
                    <Image src={thumb.url} fill alt="" />
                  </div>
                  )}
                </div>
                {/*Texto y boton */}
                <div>
                  <div>
                    <h3 className="text-2xl mb-6">{item.title}</h3>
                    <p className="mb-10 text-negro text-xl text-justify">{item.description}</p>
                    {/* Lista de servicios */}
                    <ul className="grid grid-cols-2 gap-4 mb-12">
                      {item.serviceList.map((service,index)=>{
                        return <li key={index} className="flex items-center gap-4 text-negro">
                          <div className="w-[6px] h-[6px] bg-verde"></div>
                          <div className="capitalize font-bold text-negro">
                            {service}
                            </div>
                        </li>
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
      
      </div>
    </section>
  )
}

export default Services
