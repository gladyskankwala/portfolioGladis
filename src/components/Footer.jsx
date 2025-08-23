import React,{useState} from "react"
import { FaDiscord, FaGithub, FaTiktok } from "react-icons/fa";


const links  = [
    {href: 'https://discord.com', icon: <FaDiscord/>},
    {href: 'https://github.com', icon: <FaGithub/>},
    {href: 'https://tiktok.com', icon: <FaTiktok/>},
]



function Footer() {

    const [time, setTime] = useState(new Date().getFullYear());

    function handleTime(){
        setTime(new Date().getFullYear)
    }


    return(
        <footer className="bg-yellow-300 p-2 gap-2">
            <div className="flex justify-center">
                 &copy;{` GTKankwala ${time} . All Right Reserved`}
            </div>

            <div className="flex justify-center gap-4">
                {links.map((link)=>(
                    <a key={link} href={link.href} target="_blank"
                    className="text-black transition-color 
                    duration-500 ease-in-out hover:text-white">
                        {link.icon}
                    </a>
                ))}
            </div>
            
        </footer>
    )
}

export default Footer