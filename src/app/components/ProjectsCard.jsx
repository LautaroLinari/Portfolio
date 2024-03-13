import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Technologies from './Technologies.jsx';



const ProjectsCard = ({ imgUrl, title, description, gitUrl, previewUrl, tecnology}) => {


  return (
    <div>
        <div 
            className='h-36 md:h-44 lg:h-72 rounded-t-xl relative group w-auto ' 
            style={{background: `url(${imgUrl})`, backgroundSize: "100%", backgroundRepeat: "no-repeat",}}
        >
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-500'>
                <Link 
                    href={gitUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='h-14 w-14 mr-5 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                >
                    <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white '/>
                </Link>
                <Link 
                    href={previewUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                >
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white '/>
                </Link>
            </div>
        </div>

        <div className='text-white rounded-b-xl mt-0 bg-[#181818] py-6 px-4'>
            <h5 className='text-lg md:text-xl font-semibold mb-3 '> { title } </h5>
            <p className='text-[#ADB7BE] text-base md:text-lg mb-3'> { description } </p>
            <div className='flex gap-5 flex-wrap md:flex-nowrap'>
                {tecnology.map((tech, item) => (
                    <Technologies key={item} name={tech} />
                ))}
            </div>
        </div>
    </div>
  )
}   

export default ProjectsCard
