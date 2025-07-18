import React, { useState } from 'react'
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';

const FaqItem = ({title,description}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="q-full border-b">
      <div className="flex items-center justify-between py-6">
        <h2 className="max-w-[300px] sm:max-w-md md:max-w-max text-xl">{title}</h2>
        <button className="w-[44px] h-[44px] bg-verde flex items-center  justify-center"
        onClick={()=> setIsOpen(!isOpen)}>
            {isOpen ? (
                <RiSubtractFill 
                className={`text-blanco text-2xl transition-opacity durration-700 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
                />
            ) : (
                <RiAddFill 
                className={`text-blanco text-2xl transition-opacity durration-700 ${
                    isOpen ? "opacity-0" : "opacity-100"
                }`}
                />
            )}
        </button>
      </div>
      {/* descripcion*/}
      <div className={`${
        isOpen ? "max-h-[200px] opacity-100 px-[16px]  transition-all duratiion-500 ease-in-out"
        : "max-h-0 opacity-100 p-0 px-[16px]  transition-all duration-300 ease-in-out overflow-hidden"
      }`}>
        <p className="pb-8 flex items-center max-w[860px] text-negro text-xl">{description}</p>
      </div>
    </div>
  )
}

export default FaqItem
