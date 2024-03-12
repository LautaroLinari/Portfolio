import Link from "next/link"

const NavLink = ({ href, title }) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={href} 
                        className='block text-[#ADB7BE] text-lg md:text-2xl rounded hover:text-white'> 
                        {title}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavLink;