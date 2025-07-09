"use client";

import { RiArrowRightUpLine } from 'react-icons/ri';
import {Link as ScrollLink} from 'react-scroll'
import Logo from './Logo';
import NavMobile from './NavMobile';

const links = [
  {name: 'inicio', to: 'home'},
  {name: 'quienes somos', to: 'about'},
  {name: 'servicios', to: 'services'},
  {name: 'contacto', to: 'contact'},]

const Header = () => {
  return (
    <header className="bg-blanco py-4 sticky top-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />
            {/* Navbar and Btn */}
            <nav className="hidden xl:flex items-center gap-12">
              <ul className="flex gap-4 text-white">
                {links.map((link, index) => {
                  return (
                  <li key={index} className="text-verde text-sm uppercase font-primary font-bold tracking-[1.2px] after:mx-4 last:after:content-none after:text-verde">
                      <ScrollLink 
                          to={link.to}
                          smooth
                          spy
                          className="cursor-pointer py-2 px-3 rounded-lg transition-all duration-100"
                          activeClass="text-blanco bg-verde"
                      >
                          {link.name}
                          </ScrollLink>
                  </li>);
                })}
              </ul>
              <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-verde ">
                <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-blanco text-sm uppercase ">log in
                </div>
                <div className="w-11 h-11 bg-blanco flex items-center justify-center ">
                  <RiArrowRightUpLine className="text-verde text-xl group-hover:rotate-45 transition-all duration-200" />
                </div>
              </button>
            </nav>
            {/* Navbar mobile */}
            <div className="xl:hidden">
              <NavMobile />
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header
