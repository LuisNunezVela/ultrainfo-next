"use client"
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { RiMenu3Fill } from 'react-icons/ri'
import LogoBlanco from './Logo_blanco'
import Socials from './Socials'
import { Link as ScrollLink } from 'react-scroll'

const links = [
  {name: 'inicio', to: 'home'},
  {name: 'quienes somos', to: 'about'},
  {name: 'servicios', to: 'services'},
  {name: 'contacto', to: 'contact'},]

const NavMobile = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger 
            className="text-verde flex items-center justify-center text-3xl"
            onClick={() => setIsOpen(true)}
        >
            <RiMenu3Fill />
        </SheetTrigger>
        <SheetContent className="bg-verde border-none text-verde">
            <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
                <SheetHeader>
                    <SheetTitle><LogoBlanco /></SheetTitle> {/*Hay que cambiar el logo a blanco en el nav */}
                    <SheetDescription className="sr-only">
                        Menú de Navegación
                    </SheetDescription>
                </SheetHeader>
                <ul className="w-full flex flex-col gap-10 justify-center text-center">
                    {links.map((link,index)=>{
                        return (
                            <li key={index} className="text-blanco uppercase font-primary font-bold tracking-[1.2px] text-xl">
                                <ScrollLink 
                                    to={link.to} 
                                    smooth 
                                    spy 
                                    duration={500} 
                                    className="cursor-pointer" 
                                    activeClass="text-blanco" 
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </ScrollLink>
                            </li>
                        );
                    })}
                </ul>
                <Socials containerStyles="text-blanco text-xl flex gap-6" />

            </div>
        </SheetContent>
        </Sheet>
        );
}

export default NavMobile
