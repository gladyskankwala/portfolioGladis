import Button from "./Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


const text = [
    'Front-end developer',
    'cybersecurity Student',
    'Machine Learning Enthusiast'
]

function Hero() {



    return(
        <div 
        className="bg-gray-950 relative  min-h-[100vh] 
        w-screen items-center  overflow-hidden">
            <div className="grid lg:grid-cols-2 p-4 gap-4 min-h-screen place-items-center">
                <div className="text-white">
                    <h1 className="font-zentry text-6xl md:text-9xl sm:text-9xl">
                    Hello World <br/> i'm Gladis
                    </h1>
                    <p className="font-circular-web text-2xl">Front end developer</p>

                    <p>Passionate about creating secure,<br/> user-friendly web experiences. 
                       Combining<br/> front-end development skills with cybersecurity<br/> 
                        knowledge to build robust and protected applications.</p>
                    
                    <div className="flex flex-row gap-2 m-5">
                        <Button
                        id="downloadcv"
                        title="Download CV"
                        containerClass="bg-slate-800"
                        />

                        <Button
                        id="ViewProject"
                        title="View Project"
                        containerClass="bg-yellow-300 text-gray-950"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-64 h-64 md:w-96 md:w-96 text-xs rounded-xl overflow-hidden font-robert-regular">
                    <div className="flex items-center  justify-between bg-slate-800 p-3 ">
                        <div className="flex gap-2">
                           <div className="w-6 h-6 rounded-xl cursor-pointer bg-red-600"></div>
                           <div className="w-6 h-6 rounded-xl cursor-pointer bg-yellow-300"></div>
                           <div className="w-6 h-6 rounded-xl cursor-pointer bg-green-400"></div>
                        </div>
                        <div className=" text-slate-400">
                            <p>gladisPotfolioTerminal:~</p>
                        </div>
                    </div>

                    <div className="flex flex-col bg-black-100 w-full h-full p-10 justify-between">
                        <div>
                            <h2 className="text-slate-200"> 
                                <span className="text-green-600 m-2">$</span>
                             whoami</h2>
                            <p className="text-slate-400 ml-10">frontend developer</p>
                        </div>

                        <div>
                            <h2 className="text-slate-200"> 
                                <span className="text-green-600 m-2">$</span>
                             Skills.txt</h2>
                            <p className="text-slate-400 ml-10">
                                React.js | CSS3 | JavaScript <br/> Git
                            </p>
                        </div>

                        <div>
                            <h2 className="text-slate-200"> 
                                <span className="text-green-600 m-2">$</span>
                             ./start_project</h2>
                            <p className="text-slate-400 ml-10">
                                initializing portfolio
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero