"use client"
import React from 'react'
import { RiChat1Line, RiMap2Line, RiMapPin2Line, RiSmartphoneLine } from 'react-icons/ri'
import Socials from './Socials'
import Form from './Form'
import 'leaflet/dist/leaflet.css'
import dynamic from 'next/dynamic'

// Evita SSR para Leaflet
const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => <p>Cargando mapa...</p>,
})

const Contact = () => {
  return (
    <div className="pt-16 xl:pt-32" id="contact">
      <div className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow-xl p-4 xlp-8 xl:px-[90px] xl:py-[36px] border-t-4 border-verde">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
            <h4 className="text-[26px] font-verde font-bold mb-6">Contáctanos</h4>
            {/* contact items */}
            <div className='flex flex-col gap-[20px] mb-16'>
              {/* contact item */}
              <div className='flex items-start gap-[20px]'>
                <div>
                  <RiChat1Line className="text-[28px] text-azul" />
                </div>
                <div>
                  <h5 className="text-[22px] font-semibold font-verde leading-none mb-2">Conversa con nosotros</h5>
                  <p className='mb-4 text-negro'>Nuestro equipo está disponible para ayudarte.</p>
                  <p className="font-semibold text-negro">soporte@ultrainfo.com</p>
                  <p className="font-semibold text-negro">+591 77116600</p>
                </div>
              </div>
              {/* contact item */}
              <div className='flex items-start gap-[20px]'>
                <div>
                  <RiMapPin2Line className="text-[28px] text-azul" />
                </div>
                <div>
                  <h5 className="text-[22px] font-semibold font-verde leading-none mb-2">Oficina</h5>
                  <p className='mb-4 text-negro'>Puedes apersonarte por nuestra oficina de Lunes a Viernes de 7 am a 5 pm y Sábados de 7 am 12 pm.</p>
                  <p className="font-semibold text-negro"> 1129 Av. Beni 5to. Anillo, Santa Cruz de la Sierra</p>
                </div>
              </div>
              {/* mapa */}
              <div className="w-full h-[200px]">
                  <InteractiveMap />
                </div>

            </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="mb-3 text-2xl">Request a Quote</h2>
              <p className="mb-9 text-xl text-negro">
                Envíanos un mensaje y nos contactaremos lo más pronto posible para brindarte toda la información que desees.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
