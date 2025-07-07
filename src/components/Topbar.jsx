import React from 'react'
import { RiPhoneFill, RiMailFill } from 'react-icons/ri'
import Socials from './Socials'

const Topbar = () => {
  return (
    <section className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#009D71] to-[#009D71] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blanco text-verde flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-blanco">+591 12345678</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blanco text-verde flex items-center justify-center">
                  <RiMailFill />
              </div>
              <p className="font-medium text-blanco">ultrainfobolivia@gmail.com</p>
            </div>
          </div>
          <div>
            <Socials
            containerStyles="flex items-center gap-8 mx-auto xl:mx-0 text-xl"
            iconStyles="text-blanco" 
            />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Topbar
