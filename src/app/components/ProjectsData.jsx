import { FaHtml5, FaSass, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


const projectsData = [
    {
        id: 1,
        title: 'Task Local Website',
        description: 'Proyecto Notes App: Se utiliza para guardar tareas locales en el navegador (Aprendiendo conocimientos de JS).',
        image: '/images/projects/project-1.png',
        gitUrl: 'https://github.com/LautaroLinari/Task-Local',
        previewUrl: 'https://task-local.vercel.app/',
        tecnology: [
            <FaHtml5 />, 
            <FaCss3Alt />,
            <IoLogoJavascript />,
        ]
    },
    {
        id: 2,
        title: 'Portfolio Web Practice',
        description: 'Proyecto Portfolio: Ejercicio de practica aprendiendo conocimientos básicos de Sass.',
        image: '/images/projects/projecto-2.jpg',
        gitUrl: 'https://github.com/LautaroLinari/Pracitca-Sass',
        previewUrl: 'https://practica-sass.vercel.app/',
        tecnology: [
          <FaHtml5 />, 
          <FaSass />,
          <IoLogoJavascript />,
        ],
    },
    {
        id: 3,
        title: 'Landing Page Website',
        description: 'Proyecto Landing Page: Website de practica donde se visualizan los datos de una escuela primaria.',
        image: "/images/projects/projecto-3.png",
        gitUrl: 'https://github.com/LautaroLinari/PROYECTO-INTEGRADOR-WEB-UNTREFSCHOOL',
        previewUrl: 'https://proyecto-integrador-web-untrefschool.vercel.app/',
        tecnology: [
            <FaHtml5 />, 
            <SiTailwindcss />,
            <IoLogoJavascript />,
        ]
    },
    {
        id: 4,
        title: 'E-commerce Website',
        description: 'Proyecto E-commerce: Representa una tienda online donde puedes comprar zapatillas de basketball.',
        image: '/images/projects/projecto-4.png',
        gitUrl: 'https://github.com/LautaroLinari/ProyectoEcommerce',
        previewUrl: 'https://proyecto-ecommerce-beta.vercel.app/',
        tecnology: [
            <FaHtml5 />, 
            <FaCss3Alt />,
            <IoLogoJavascript />,
        ]
    },
    {
        id: 5,
        title: 'Cotizador Seguros Website',
        description: 'Proyecto Cotizador de Seguros: Se utiliza para obtener el valor del seguro según las medidas, año de construcción de tu hogar.',
        image: '/images/projects/projecto-5.png',
        gitUrl: 'https://github.com/LautaroLinari/Proyecto-Final-React',
        previewUrl: 'https://proyecto-final-react-xi-rosy.vercel.app/',
        tecnology: [
            <FaHtml5 />,
            <SiTailwindcss />, 
            <IoLogoJavascript />,
            <FaReact />
        ]
    },
    {
        id: 6,
        title: 'Porfolio Web',
        description: 'Proyecto Portfolio Personal: Se exponen todos los proyectos realizados, información personal, estudios realizados y un formulario de contacto.',
        image: '',
        gitUrl: '',
        previewUrl: '',
        tecnology: [
            <FaHtml5 />, 
            <SiTailwindcss />,
            <IoLogoJavascript />,
            <FaReact />,
            <TbBrandNextjs />
        ]
    },
];



export default projectsData
