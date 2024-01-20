"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


function HeroSection() {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'> 
              Hola, soy {" "} 
            </span>
            <br />
              <TypeAnimation
                sequence={[
                  'Lautaro Linari',
                  1000, 
                  'Desarrollador Web',
                  1000,
                  'Desarrollador Front-End',
                  1000,
                  'Diseñador UX/UI',
                  1000
                ]}
                wrapper="span"
                speed={38}
                repeat={0}
              />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque corrupti amet quo.
          </p>
          <div> 
            {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-700 hover:bg-slate-200 text-white'> 
              Contactame 
            </button>  */}
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-700 hover:bg-slate-800 text-white mt-3'> 
              <span className='block bg-[#121212] hover-slate-800 rounded-full px-5 py-2'> Descargar CV  </span>
            </button> 

          </div>
        </div>
        <div className='col-span-5 place-self-center mt-3 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image src="/images/hero-image.png" alt='hero-image' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={340} height={340}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
