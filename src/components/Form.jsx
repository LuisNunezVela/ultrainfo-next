import React from 'react'

import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { RiMailFill} from 'react-icons/ri'

const Form = () => {
  return <form className="flex flex-col">
    <div className="flex flex-col gap-[20px] mb-[20px] ">
        <Input type="fullname" placeholder="Nombre Completo" />
        <Input type="email" placeholder="Correo Electrónico" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
            <Input type="phone" placeholder="Numero de Celular" />
        </div>
    </div>
    <div className="flex flex-col gap-6">
        <Textarea 
        className="h-[180px] resize-none rounded-none"
        placeholder="Escribe tu mensaje"
        />
        <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-verde ">
            <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-blanco text-sm uppercase ">Enviar mensaje
            </div>
            <div className="w-11 h-11 bg-blanco flex items-center justify-center ">
                <RiMailFill className="text-verde text-xl group-hover:scale-130 transition-all duration-200" />
            </div>
        </button>
    </div>
  </form>
}

export default Form
