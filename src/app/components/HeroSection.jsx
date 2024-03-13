"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


function HeroSection() {

    const onButtonClick = () => {
      const pdfUrl = "CV_Profesional_LautaroLinari_ES.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "CV_Profesional_LautaroLinari_ES.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold '>
            <span className='text-transparent bg-clip-text bg-gradient-to-r background-animate from-blue-400 to-purple-600'> 
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
                  // 'Diseñador UX/UI',
                  // 1000
                ]}
                wrapper="span"
                speed={35}
                repeat={3}
              />
          </h1>
          <p className='text-[#ADB7BE] text-lg md:text-xl mb-6'> 
            Siempre estoy buscando aprender, expandir mis habilidades y conocimientos como desarrollador.
          </p>
          <div> 
            <button onClick={onButtonClick} className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-700 text-white mt-3'> 
              <span className='block bg-[#121212] hover:bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-700 hover:text-white rounded-full px-5 py-2 text-base md:text-lg'> Descargar CV  </span>
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
