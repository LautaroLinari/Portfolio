import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white '>
        <div className='container p-8 flex justify-between items-center mx-auto'>
            <Link href="/" className=''>
                <Image src="/images/logo.jpg" alt='logo' className='rounded-full w-auto h-auto' width={55} height={55}/>
            </Link>            
            <p className='text-slate-600 text-lg md:text-xl'>Todos los derechos reservados.</p>
        </div>
    
    </footer>
  )
}

export default Footer
