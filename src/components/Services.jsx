"use client";
import React from 'react'
import { PiGraphFill } from 'react-icons/pi';
import { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import Image from "next/image";

const serviceData = [
  {
    name: "construction",
    icon: PiGraphFill ,
    title: "Construction Services",
    description: "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing",
    serviceList: [
      "Residential Builds","Structural Design","Site Prep",
    ],
    thumbs:[{url: ""}]
  },
  {
    name: "fernando",
    icon: PiGraphFill,
    title: "Construction Services",
    description: "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing",
    serviceList: [
      "Residential Builds","Structural Design","Site Prep",
    ],
    thumbs:[{url: ""}]
  },
  {
    name: "hola",
    icon: PiGraphFill,
    title: "Construction Services",
    description: "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing",
    serviceList: [
      "Residential Builds","Structural Design","Site Prep",
    ],
    thumbs:[{url: ""}]
  },
  {
    name: "12345",
    icon: PiGraphFill,
    title: "Construction Services",
    description: "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing",
    serviceList: [
      "Residential Builds","Structural Design","Site Prep",
    ],
    thumbs:[{url: ""}]
  },
]

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <div>
          <h2 className="text-2xl mb-3">Soluciones que Proveemos</h2>
          <p className="mb-11 max-w-[480px] mx-auto">Offering tailored construction solutions, from planning to completion, with a focus on quality and innovation.

          </p>
        </div>

        {/*Tabs*/ }
      <Tabs defaultValue="construction" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="grid w-full grid-cols-2 h-full">
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
              <div>{item.name}</div>
            </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="account">Account</TabsContent>
        <TabsContent value="password">Password</TabsContent>
      </Tabs>
      
      </div>
    </section>
  )
}

export default Services
