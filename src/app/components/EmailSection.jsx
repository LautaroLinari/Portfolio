"use client";
import React from 'react';
import { useState } from 'react';
import { FaGithub , FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const EmailSection = () => {
    
    const [message, setMessage] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const response = await fetch(event.target.action, {
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json'
            }
        })
        const result = await response.json()
        if (!response.ok) {
            setMessage(result.errors.map(error => error.message).join(', '))
            return false
        }
        setMessage('Se ha enviado tu correo!')
    }


  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative' id='contact'>
        <div className='md:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-2 transform -translate-x-1/2 -translate-y-1/2'></div>
        <div className='z-0'>
            <h5 className='font-bold text-white my-2 text-2xl md:text-4xl'> Contactame! </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md text-lg md:text-xl'> 
            {" "}
            Actualmente estoy buscando nuevas oportunidades, la bandeja de entrada de mi email está siempre abierta. 
            Si tienes alguna pregunta o simplemente quieres saludar.
            ¡Con gusto te responderé! 
            </p>
            <div className='socials flex flex-row gap-5 text-5xl'>
                <Link href='https://github.com/LautaroLinari' target="_blank" rel="noopener noreferrer" className='background-animate bg-gradient-to-r from-black to to-gray-200 rounded-full'>
                    <FaGithub />
                </Link>
                <Link href='https://www.linkedin.com/in/lautaro-linari-9a3542239/' target="_blank" rel="noopener noreferrer" className='background-animate bg-gradient-to-r from-gray-600 to to-blue-600 rounded-lg'>
                    <FaLinkedin />
                </Link>
            </div>
        </div>  
        <div>
            <form action="https://formspree.io/f/xpzvlvwl" method='POST' className='flex flex-col mt-6 md:mt-0' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label htmlFor="email" className='text-white block mb-2 text-base md:text-lg font-medium '>
                        Email
                    </label>
                    <input 
                        name='email'
                        type="email"
                        id='email' 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base md:text-lg rounded-lg block w-full p-2.5 '
                        placeholder='ejemplo@gmail.com'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor="subject" className='text-white block mb-2 text-base md:text-lg font-medium '>
                        Asunto
                    </label>
                    <input 
                        name='subject'
                        type="text"
                        id='subject' 
                        required 
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base md:text-lg rounded-lg block w-full p-2.5 '
                        placeholder='Trabajo'
                    />
                </div>

                <div className='mb-6'>
                    <label htmlFor="message" className='text-white block mb-2 text-base md:text-lg font-medium '>
                        Mensaje
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        required
                        className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-base md:text-lg rounded-lg block w-full p-2.5'
                        placeholder='Vamos a hablar acerca de...'
                    />
                    <div>
                        <button className='bg-purple-700 hover:bg-purple-500 border border-purple-700 hover:border-white text-white text-base md:text-lg font-bold py-2.5 px-5 rounded-lg w-full mt-5 ' type='submit' rel="noopener noreferrer">
                            Enviar Mensaje
                        </button>
                        {
                            message && (
                                <p className='text-green-500 text-lg mt-2'>
                                    Email enviado exitosamente!
                                </p>
                            )
                        }
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default EmailSection
