import { Code2, Smartphone, Globe , Palette, Zap, GitBranch} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText)

const skills = [
    { name: "HTML5", icon: Code2},
    { name: "CSS3", icon: Palette},
    { name: "JavaScript", icon: Zap},
    { name: "React", icon: Globe},
    { name: "Git & GitHub", icon: GitBranch},
    { name: "Responsive Design", icon: Smartphone},
    //{ name: "Web Security", icon: Shield, level: 70 },
    //{ name: "HTTPS/SSL", icon: Database, level: 75 },
  ];


const About = () => {
  return (
    <section id="aboutme" className=" py-20 bg-black-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div id="about-div" className="text-center mb-16">
          <h2 id="title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-red-600">Me</span>
          </h2>
        </div>

        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


          <div id="terminal" className="flex flex-col text-start shadow-lg ring-2 ring-red-600/50 shadow-red-500/50 w-full max-w-sm md:max-w-md h-72 md:h-96 text-xs rounded-xl overflow-hidden font-robert-regular">
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

            <div className="flex flex-col bg-black-100 text-xs w-full h-full p-8 justify-between">
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




          {/* Texte */}
          <div id="para" className="space-y-6">
            <p  className="text-lg text-white leading-relaxed">
              I'm a passionate of technology currently pursuing my Bachelor's degree in 
              <span className="text-red-600 font-medium"> Cybersecurity</span>. 
            </p>
            <p className="text-lg text-white leading-relaxed">
              I'm actively seeking my first professional opportunity where I can contribute to meaningful 
              projects while continuing to grow as a developer.
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon
                return(
                <div key={skill.name} className="
                    bg-black-100 backdrop-blur-md
                    text-center
                    border border-red-600
                    rounded-xl
                    flex flex-col justify-center items-center
                    w-24 h-24 md:w-28 md:h-28
                    text-slate-400
                    transition-all duration-300
                    hover:border-red-500/60
                    hover:shadow-lg hover:shadow-red-500/50">
                  <Icon size={20}/>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
