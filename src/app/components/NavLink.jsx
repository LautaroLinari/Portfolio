import Link from "next/link"

const NavLink = ({ href, title }) => {
    return (
        <li>
            <Link href={href} 
                className='block text-[#ADB7BE] text-lg md:text-2xl rounded hover:text-white'> 
                {title}
            </Link>
        </li>
    )
}

export default NavLink;