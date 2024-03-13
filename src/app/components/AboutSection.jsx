"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton.jsx';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2 ml-3 text-base md:text-lg'>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>TailWind</li>
        <li>GitHub</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2 ml-3 text-base md:text-lg'>
        <li>Tecnicatura  en Programación - UTN San Nicolas </li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2 ml-3 text-base md:text-lg'>
        <li>Diplomatura en Desarrollo Web Front-End - UNTREF </li>
      </ul>
    ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() =>  {
      setTab(id);
    });
  };

  return (

    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-16 items-center py-8 px-2 xl:gap-16 sm:py-12 xl:px-10'>
        <Image src="/images/about.jpg" className='w-auto h-auto' alt='about-imagen'  width={600} height={600}/>
        <div className='mt-10 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-2xl md:text-4xl font-bold text-white mb-4'>Sobre Mi</h2>
          <p className='text-base md:text-lg'>Soy desarrollador front-end con la pasión de crear aplicaciones web de manera 
            interactiva y responsivas. Tengo conocimientos de JavaScript, React, Html, Css y Git.
            <br />Soy una persona responsable, comunicativa y que trabaja de manera rápida.
            Estoy deseando trabajar en nuevos proyectos y crear increíbles aplicaciones web.
          </p>
          <div className='flex flex-row justify-start mt-8 text-base md:text-lg'>
            <TabButton 
            selectTab={() => handleTabChange("skills")} 
            active={tab === 'skills'}
            >
              {" "}
              Habilidades {" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("education")} 
            active={tab === 'education'}
            >
              {" "}
              Educación {" "}
            </TabButton>
            <TabButton 
            selectTab={() => handleTabChange("certifications")} 
            active={tab === 'certifications'}
            >
              {" "}
              Certificados {" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutSection
