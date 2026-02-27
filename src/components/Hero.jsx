import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/SplitText"
import { FaChevronDown } from "react-icons/fa"

gsap.registerPlugin(SplitText)


const text = [
    'Front-end developer',
    'cybersecurity Student',
    'Machine Learning Enthusiast'
]

function Hero() {

    useGSAP(()=>{

        const heroSplit = new SplitText('#text h1', {type: 'chars,words'})


        const paragraphSplit = new SplitText('#text > p', {type: 'lines'})

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: 'expo.inOut',
            stagger: 0.05,
            delay: 1
        })

        gsap.from('.btn', {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: 'expo.inOut',
            stagger: 0.05,
            delay: 1.2
        })

        gsap.from('#terminal', {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.05,
            delay: 1.5
        })

        return () => {
            heroSplit.revert();
            paragraphSplit.revert()
        }
    })



    return(
        <div 
        className="flex  bg-black-100 relative  min-h-screen w-full 
          items-center justify-center overflow-hidden ">
            <div 
               className="absolute inset-0 z-0"
               style={{
                backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(239, 68, 68, 0.4), transparent)`
               }}
            />
            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center px-4">
                <div id="text" className="text-white m-0">
                      
                    <h2>Hi! i'm Gladis</h2>
                    <h1 className="font-zentry text-6xl md:text-6xl sm:text-9xl">
                    Front end developer<br/> i'm <span className="text-red-600">Gladis</span> 
                    </h1>
                    <p className="font-circular-web text-2xl"></p>

                    <p>front-end development skills with cybersecurity 
                        knowledge to build robust and protected applications.
                    </p>

                    <div  className="btn flex gap-4 -mt-4 mb-4 justify-center">
                    <button className="mt-6 px-4 py-2 bg-red-600 cursor-pointer font-circular-web rounded-lg hover:bg-red-700 transition">
                        <a href="#projects">View My Work</a>
                    </button>

                    <button className="mt-6 px-4 py-2  bg-slate-500 cursor-pointer font-circular-web rounded-lg hover:bg-slate-700 transition">
                        <a href="#contact">Contact</a>
                    </button>
                    </div>
                    
                   
                </div>

                {/*<div id="terminal" className="flex flex-col text-start shadow-lg ring-2 ring-red-600/50 shadow-red-500/50 w-64 h-64 md:w-96 text-xs rounded-xl overflow-hidden font-robert-regular">
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
                </div>*/}
            </div>
            <div className="absolute bottom-5 sm:bottom-16 md:bottom-20 lg:bottom-24 
                left-1/2 transform -translate-x-1/2 animate-bounce">
                    <FaChevronDown className="text-white" size={30} />
            </div>
          
        </div>
    )
}

export default Hero