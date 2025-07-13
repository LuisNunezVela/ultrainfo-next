import React from 'react'
import Image from "next/image"
import Link from "next/link"
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri"
import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="mt-16 xl:mt-32 bg-gradient-to-b from-[#009D71] to-[#047052]">
      <div className="container mx-auto">
        <div className='py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px] px-4 xl:px-0'>
          {/* logo y texto */}
          <div className='flex-1'>
            <Link href="/" className="flex mb-6">
              <Image src="/Ultrainfo_blanco.svg" width={230} height={48} alt=""/>
            </Link>
          </div>
          {/* contact */}
          <div className="flex-1 ">
            <p className="text-xl xl:text-xl text-blanco mb-5">Contacto</p>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-4'>
                <RiMapPin2Fill className="text-blanco text-xl" />
                <p className='text-blanco'>1129 Av. Beni 5to. Anillo, Santa Cruz de la Sierra</p>
              </li>
              <li className='flex items-center gap-4'>
                <RiPhoneFill className="text-blanco text-xl" />
                <p className='text-blanco'>+591 77116600</p>
              </li>
              <li className='flex items-center gap-4'>
                <RiMailFill className="text-blanco text-xl" />
                <p className='text-blanco'>ultrainfobolivia@gmail.com</p>
              </li>
            </ul>
          </div>
          {/* input */}
          <div className="flex-1 max-w-[370px]">
            <p className="text-xl xl:text-xl text-blanco mb-5">Newsletter</p>
            <div className='relative max-w-[370px]'>
            <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            className="bg-blanco h-16 w-full pl-7 rounded-none outline-none flex items-center" />
            <button className='bg-verde w-12 h-12 absolute right-2 top-2 bottom-2 text-blanco text-xl flex items-center justify-center '>
              <RiArrowRightLine className="hover:scale-130 transition-all duration-200"/>
            </button>
            </div>
          </div>

        </div>
      </div>
      {/* Copyright */}
      <div className='container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between'>
        <p className='text-blanco px-4 xl:px-0'>Copyright &copy; 2025 Ultrainfo. Todos los derechos reservados.</p>
        <Socials containerStyles="flex gap-6 text-white" iconStyles="hover:scale-130 transition-all"/>
      </div>
    </footer>
  )
}

export default Footer
